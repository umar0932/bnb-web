import { useState } from 'react'

import { Dialog, DialogContent, DialogFooter } from '@/core/ui/dialog'

import { Button } from '@/core/ui/button'
import ReportEvent from './ReportEventDialog'
interface ReportDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReportDialog({ isOpen, onClose }: ReportDialogProps) {
  const [showReportForm, setShowReportForm] = useState(false)
  const handleReportClick = () => {
    setShowReportForm(true)
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className='flex flex-col items-center justify-center p-10 max-sm:p-5'
        style={{
          maxHeight: '95%'
        }}
      >
        <div className='flex flex-col items-center '>
          <span className='text-lg font-bold text-primary'>Report this event</span>
        </div>
        <span className='text-center text-[#003A6D] max-sm:text-sm'>
          Our Community Guidelines describe the sort of content we prohibit on BnB. If you suspect
          an event may be in violation, you can report it to us so we can investigate. If you have a
          question about an event, need to resolve a dispute, or would like to request a refund, we
          encourage you to first contact the organizer directly. If you or someone else is in
          imminent danger as a result of an event listing, please contact your local law enforcement
          agency for assistance.
        </span>
        <DialogFooter className='flex items-center justify-center'>
          <Button
            className='flex w-[130px] items-center justify-center bg-btnprimary text-white'
            onClick={handleReportClick}
          >
            Start Report
          </Button>

          {showReportForm && (
            <ReportEvent isOpen={showReportForm} onClose={() => setShowReportForm(false)} />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
