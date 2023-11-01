import Image from 'next/image'
import Link from 'next/link'

import { Progress } from '@/core/ui/progress'
import { Label } from '@/core/ui/label'
import { RadioGroup, RadioGroupItem } from '@/core/ui/radio-group'
import { Button } from '@/core/ui/button'

import SecondStepImage from '../../../public/assets/stepper_step2.png'

const SecondStep = () => {
  return (
    <>
      <div className='flex h-screen flex-col gap-4  '>
        <div className='flex w-full items-center justify-between gap-10 p-5 max-sm:flex-col max-sm:items-center max-sm:justify-center'>
          <div className='rounded-lg bg-[#F2F2F2] p-5 text-lg font-bold text-black'>Logo</div>
          <div className='flex  min-w-[40%] flex-col gap-2 max-md:w-full'>
            <Progress value={40} className='w-[100%] bg-[#B2DBFE] text-[#B2DBFE]' />
            <span className='text-secondary'>
              Step <span className='text-btnsecondary'>2</span> of{' '}
              <span className='text-btnsecondary'>5</span>
            </span>
          </div>
        </div>

        <div className=' flex h-full  max-md:flex-col'>
          <div className='w-1/2 max-md:w-full'>
            <Image
              src={SecondStepImage}
              alt='welcome-screen-image'
              objectFit='cover'
              className='max-md:h-100 h-full'
            />
          </div>
          <div className='mt-5 flex w-1/2 flex-col justify-center gap-10 p-10 max-xl:ml-5 max-lg:ml-0 max-md:w-full max-md:items-center max-md:justify-center max-md:text-center max-sm:p-5'>
            <span className='text-4xl font-bold text-primary'>
              How many people help you
              <br className='max-lg:hidden' /> plan events?
            </span>
            <RadioGroup defaultValue='option-one'>
              <div className=' flex items-center justify-between gap-5 rounded-lg bg-[#EFF8FF] p-5'>
                <Label htmlFor='option-one' className='max-sm:text-md text-lg text-[#757575]'>
                  Just me
                </Label>
                <RadioGroupItem
                  value='option-one'
                  id='option-one'
                  className='h-[20px] w-[20px] border-none bg-[#B2DBFE] text-btnprimary'
                />
              </div>
              <div className='mt-3 flex items-center justify-between  gap-5 rounded-lg bg-[#EFF8FF] p-5'>
                <Label htmlFor='option-two' className='max-sm:text-md text-lg  text-[#757575]'>
                  A few people (2-10)
                </Label>

                <RadioGroupItem
                  value='option-two'
                  id='option-two'
                  className='h-[20px] w-[20px] border-none bg-[#B2DBFE] text-btnprimary'
                />
              </div>
              <div className=' mt-3 flex items-center justify-between  gap-5 rounded-lg bg-[#EFF8FF] p-5'>
                <Label htmlFor='option-three' className='max-sm:text-md text-lg text-[#757575] '>
                  A team (10+)
                </Label>
                <RadioGroupItem
                  value='option-three'
                  id='option-three'
                  className='h-[20px] w-[20px] border-none bg-[#B2DBFE] text-btnprimary'
                />
              </div>
            </RadioGroup>
            <div className=' mt-5 flex gap-5'>
              <Link href='/create-event-page/first-step'>
                <Button className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-[#DEF0FF] p-3 font-bold text-primary'>
                  Back
                </Button>
              </Link>
              <Link href='/create-event-page/third-step'>
                <Button className='flex h-[43px] w-[120px] items-center justify-center rounded-sm bg-btnprimary p-3 font-bold text-white hover:bg-btnsecondary'>
                  Next
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondStep
