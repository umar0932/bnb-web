import { useState } from "react";
import { XCircle } from "lucide-react";
export default function TestingComponent() {
  const [tags, setTags] = useState(["hello", "hello"]);
  const addTags = (event: any) => {
    if (event.key === "Enter" && event.target.value != "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const removeTags = (indexToRemove: any) => {
    setTags(tags.filter((_, index) => index != indexToRemove));
  };
  return (
    <>
      <div className="flex w-[500px] border border-blue-300 bg-white">
        <ul className="flex gap-2">
          {tags.map((tag, index) => (
            <li key={index}>
              <span className="flex items-center justify-center gap-2 rounded-lg bg-btnprimary p-2 text-white">
                {tag}{" "}
                <XCircle
                  className="h-[16px] w-[16px] cursor-pointer"
                  onClick={() => removeTags(index)}
                />
              </span>
            </li>
          ))}
        </ul>
        <input
          placeholder="Please enter to add tags"
          type="text"
          onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
        />
      </div>
    </>
  );
}
