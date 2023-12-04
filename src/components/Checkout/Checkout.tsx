import { Dialog, DialogContent } from '@/core/ui/dialog'
import CheckoutForm from '../Forms/CheckoutForm'
import { useState, useRef, useEffect } from 'react'

interface CheckoutProps {
  isOpen: boolean
  onClose: () => void
}

export default function Checkout({ isOpen, onClose }: CheckoutProps) {
  const Ref = useRef<number | NodeJS.Timeout | null>(null) // Update the type here

  const [timer, setTimer] = useState('06:00')

  useEffect(() => {
    if (isOpen) {
      const deadline = new Date()
      deadline.setMinutes(deadline.getMinutes() + 6)

      const updateTimer = () => {
        const currentTime = new Date()
        const timeRemaining = deadline.getTime() - currentTime.getTime()

        if (timeRemaining <= 0) {
          // Timer has reached 00:00, close the dialog
          onClose()
          if (Ref.current !== null) {
            clearInterval(Ref.current as number) // Cast to number
          }
          setTimer('00:00')
        } else {
          const minutes = Math.floor((timeRemaining / 1000 / 60) % 60)
          const seconds = Math.floor((timeRemaining / 1000) % 60)
          const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`
          setTimer(formattedTime)
        }
      }

      // Update the timer every second
      updateTimer()
      const timerId = setInterval(updateTimer, 1000)
      Ref.current = timerId

      return () => {
        // Clean up the timer when the component unmounts or isOpen becomes false
        if (Ref.current !== null) {
          clearInterval(Ref.current as number) // Cast to number
        }
      }
    }
  }, [isOpen, onClose])

  return (
    <>
      <div>
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className='flex flex-col'
            style={{
              width: '95%',
              height: '95%',
              maxWidth: '95%',
              maxHeight: '95%',
              overflow: 'auto'
            }}
          >
            <div className='flex flex-col items-center'>
              <span className='text-lg font-bold text-primary'>Checkout</span>
              <span className='text-sm text-[#FF0000]'>Time Left: {timer}</span>
            </div>
            <div className='p-2'>
              <CheckoutForm />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
