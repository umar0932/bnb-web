import { Dialog, DialogContent } from '@/core/ui/dialog'
import ReportEventForm from '../Forms/ReportEventForm'

interface ReportEventProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReportEvent({ isOpen, onClose }: ReportEventProps) {
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
              <span className='font-bold'>Report this event</span>
              <span className='text-center text-[#003A6D]'>
                Please help Bnb investigate this event by providing information about why you're
                reporting it.
              </span>
              <div className='flex w-full items-center justify-center p-2'>
                <ReportEventForm />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
