import React, { useEffect, useRef, useState } from "react";
import CurrentLocation from "../../../public/assets/current_location.svg";
import BrowserLocations from "../../../public/assets/browse_online.svg";
import StaticImage from "next/image";

const apiKey: string = process.env.NEXT_PUBLIC_REACT_APP_MAP_KEY || "";
const mapApiJs: string = "https://maps.googleapis.com/maps/api/js";
const geocodeJson: string = "https://maps.googleapis.com/maps/api/geocode/json";

// load google map api js

function loadAsyncScript(src: string): Promise<HTMLScriptElement> {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src,
    });
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  });
}

const extractAddress = (place: google.maps.places.PlaceResult): any => {
  const address = {
    city: "",
    state: "",
    zip: "",
    country: "",
    plain() {
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return city + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_2")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
    }

    if (types.includes("country")) {
      address.country = value;
    }
  });

  return address;
};

export default function Autocomplete() {
  const searchInput = useRef<HTMLInputElement | null>(null);
  const [address, setAddress] = useState<any>({});

  // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // do something on address change
  const onChangeAddress = (autocomplete: google.maps.places.Autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(extractAddress(place));
  };

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () =>
      onChangeAddress(autocomplete)
    );
  };

  const reverseGeocode = ({ coords }: GeolocationPosition) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${coords.latitude},${coords.longitude}`;
    if (searchInput.current) {
      searchInput.current.value = "Getting your location...";
    }
    fetch(url)
      .then((response) => response.json())
      .then((location) => {
        const place = location.results[0];
        const _address = extractAddress(place);
        setAddress(_address);
        if (searchInput.current) {
          searchInput.current.value = _address.plain();
        }
      });
  };

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          reverseGeocode(position);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    }
  };

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete());
  }, []);

  return (
    <div className="App">
      <div>
        <div className="search">
          {/*  */}
          <div className="flex flex-col">
            <div className="mt-3 flex   p-2">
              {/* <Autocomplete /> */}
              <input
                className="w-full border-b border-[#757575]  p-2 text-3xl font-bold text-primary outline-none placeholder:text-primary"
                placeholder="California"
                ref={searchInput}
                type="text"
              />
            </div>
            <div className="mt-2 flex flex-col bg-[#F6FBFF] p-5">
              <div className=" flex gap-5 border-b border-[#9CB2DF] p-2">
                <StaticImage
                  src={CurrentLocation}
                  alt="current-location"
                  onClick={findMyLocation}
                  className="cursor-pointer"
                />
                <span className="text-[#3B5998]">Use my current location</span>
              </div>
              <div className="flex gap-5 p-2">
                <StaticImage src={BrowserLocations} alt="browse-location" />
                <span className="text-[#3B5998]">Browse online events</span>
              </div>
            </div>
          </div>
          {/*  */}
          {/* <input ref={searchInput} type="text" placeholder="California" />
          <button onClick={findMyLocation}>Current Location</button> */}
        </div>
      </div>
    </div>
  );
}
