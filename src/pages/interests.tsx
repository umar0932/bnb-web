import { useState } from 'react'
import Link from 'next/link'
import StaticImage from 'next/image'

import Header from '@/components/Header/Header'

import { Progress } from '@/core/ui/progress'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/core/ui/dialog'

import MusicIcon from '../../public/assets/music_icon.svg'
import FoodIcon from '../../public/assets/food_icon.svg'
import { Button } from '@/core/ui/button'

const Interests = () => {
  type Genre = string

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [selectedMusicGenres, setSelectedMusicGenres] = useState<Genre[]>([])
  const [selectedFoodGenres, setSelectedFoodGenres] = useState<Genre[]>([])

  const toggleGenre = (
    genre: Genre,
    setSelectedGenres: (genres: Genre[]) => void,
    selectedGenres: Genre[]
  ) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre))
    } else {
      setSelectedGenres([...selectedGenres, genre])
    }
  }

  const isGenreSelected = (genre: Genre, selectedGenres: Genre[]) => selectedGenres.includes(genre)

  const getButtonClassName = (isSelected: boolean) =>
    `field-drop-shadow h-[40px] rounded-3xl border-none px-4 text-[#757575] ${
      isSelected ? 'bg-btnprimary hover:bg-btnsecondary text-white' : ''
    }`

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex flex-col lg:flex-row'>
        <div className='flex w-full flex-col bg-[#EFF8FF] p-0 max-lg:order-2 sm:p-10 lg:w-1/2'>
          {/* Music Card */}
          <div className='m-5 bg-white p-5 sm:p-10'>
            <div className='flex justify-between'>
              <span className='text-4xl font-bold text-primary'>Music</span>
              <StaticImage src={MusicIcon} alt='music_icon' className='h-[40px] w-[40px]' />
            </div>
            <div className='mt-3 flex flex-wrap gap-5 p-5'>
              {[
                'Opera',
                'Jazz',
                'Singer/Songwriter',
                'Blues',
                'Cultural',
                'Latin',
                'Metal',
                'DJ/Dance',
                'Folks',
                'R&B',
                'Rock',
                'Classic',
                'Others'
              ].map(genre => (
                <Button
                  key={genre}
                  className={getButtonClassName(isGenreSelected(genre, selectedMusicGenres))}
                  onClick={() => toggleGenre(genre, setSelectedMusicGenres, selectedMusicGenres)}
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>

          {/* Food Card */}
          <div className='m-5 bg-white p-5 sm:p-10'>
            <div className='flex justify-between'>
              <span className='text-4xl font-bold text-primary'>Food/ Drink</span>
              <StaticImage src={FoodIcon} alt='food_icon' className='h-[40px] w-[40px]' />
            </div>
            <div className='mt-3 flex flex-wrap gap-5 p-5'>
              {['Bear', 'Food', 'Wine', 'Others'].map(genre => (
                <Button
                  key={genre}
                  className={getButtonClassName(isGenreSelected(genre, selectedFoodGenres))}
                  onClick={() => toggleGenre(genre, setSelectedFoodGenres, selectedFoodGenres)}
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col justify-center p-10 max-lg:order-1 lg:ml-10 lg:w-1/2'>
          <div className='flex flex-col gap-5'>
            <span className='text-5xl font-bold text-primary max-sm:text-4xl'>
              Tell us what
              <br className='max-sm:hidden' /> you love
            </span>
            <span className='text-xl text-[#757575]'>
              Tap the event tags you would like to see
              <br className='max-sm:hidden' /> more often than the others.
            </span>
            <div className='flex flex-col gap-2'>
              <Progress value={33} className='w-[70%] bg-[#B2DBFE] text-[#B2DBFE]' />
              <span className='text-secondary'>
                Step <span className='text-btnsecondary'>1</span> of{' '}
                <span className='text-btnsecondary'>3</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='div-drop-shadow flex items-center justify-end gap-5 p-5'>
        <Button
          className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-[#DEF0FF] p-3 font-bold text-primary'
          onClick={() => setIsDialogOpen(true)}
        >
          Exit
        </Button>
        <Link href='/location'>
          <Button className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-btnprimary p-3 font-bold text-white hover:bg-btnsecondary'>
            Next
          </Button>
        </Link>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(false)}>
        <DialogContent>
          <DialogHeader className='flex items-center justify-center gap-5'>
            <DialogTitle className='text-2xl  text-primary'>
              <div className='div flex flex-col items-center justify-center gap-3'>
                <span className='text-xl text-primary'>Are you sure?</span>
                <span className='text-base text-[#757575]'>
                  Your choices will be saved and you can come back later.
                </span>
                <div className='flex items-center justify-center gap-5 p-5'>
                  <Link href='/'>
                    <Button
                      className='flex h-[33px] w-[100px] items-center justify-center rounded-sm bg-[#DEF0FF] p-2 text-base  font-normal text-primary'
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Exit
                    </Button>
                  </Link>
                  <Button
                    className='flex h-[33px] w-[100px] items-center justify-center rounded-sm bg-btnprimary p-2 text-base font-normal text-white hover:bg-btnsecondary'
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Stay
                  </Button>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Interests
