import { StaticImageData } from 'next/image'

// Browse Event Interface
export interface BrowseEvent {
  imageSrc: StaticImageData
  title: string
  sub_title: string
  location: string
  creatorFollowers: string
  date: string
  price: string
  time: string
}

// Event Card Interface
export interface Event {
  imageSrc: StaticImageData
  title: string
  sub_title: string
  location: string
  creatorFollowers: string
  date: string
  price: string
  time: string
}

// Organizer Interface
export interface Organizer {
  imageSrc: StaticImageData
  name: string
  countFollowers: string
}

// Follow Card Interface
export interface FollowCardProps {
  title: string
  SubTitle: string
  imageSrc: string
}

export interface CheckoutProps {
  isOpen: boolean
  onClose: () => void
}
