import Image from 'next/image'
import Link from 'next/link'

import { eventsData } from '@/utils/fakeBackend'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/core/ui/table'

import DownloadIcon from '../../../public/assets/download_icon.svg'
import EditProfileIcon from '../../../public/assets/edit_profile_icon.svg'
import LinkIcon from '../../../public/assets/link_icon.svg'
import DeleteIcon from '../../../public/assets/delete_icon.svg'

const OrganizerEventTable = () => {
  const exportToCSV = () => {
    // Create a CSV string
    const csvData = eventsData.map(event => {
      return `"${event.event_name}","${event.date}","${event.sold_tickets}","${event.Gross}","${event.Status}"`
    })

    // Add headers to the CSV
    const csv = ['Event Name,Date,Sold Tickets,Gross,Status', ...csvData].join('\n')

    // Create a blob from the CSV data
    const blob = new Blob([csv], { type: 'text/csv' })

    // Create a download link and trigger a click event to download the file
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = 'event_data.csv'
    link.click()
  }
  return (
    <>
      <div className='flex gap-5 max-lg:flex-col'>
        <div
          className='flex h-[50px] w-[170px] cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#EFF8FF] p-2 lg:order-2'
          onClick={exportToCSV}
        >
          <Image
            src={DownloadIcon}
            alt='download_icon'
            className=' h-[19px] w-[19px] cursor-pointer'
          />

          <span className='text-[#3B5998]'>Export CSV</span>
        </div>
        <Table className='rounded-lg lg:order-1'>
          <TableHeader className='rounded-xl bg-[#DEF0FF]'>
            <TableRow className='rounded-xl '>
              <TableHead className='font-bold text-[#003A6D]'>Events</TableHead>
              <TableHead className='font-bold text-[#003A6D]'>Sold Tickets</TableHead>
              <TableHead className='font-bold text-[#003A6D]'>Gross</TableHead>
              <TableHead className='font-bold text-[#003A6D]'>Status</TableHead>

              <TableHead className='text-center font-bold text-[#003A6D]'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='bg-[#F3FAFF]'>
            {eventsData.map(event => (
              <TableRow key={event.id}>
                <TableCell className='flex items-center gap-2 font-medium max-sm:flex-col '>
                  <Image src={event.imageSrc} alt={event.event_name} />
                  <div className='flex flex-col '>
                    <span className='text-lg font-bold'>{event.event_name}</span>
                    <span className='text-[#757575]'>{event.date}</span>
                  </div>
                </TableCell>
                <TableCell>{event.sold_tickets}</TableCell>
                <TableCell>{event.Gross}</TableCell>
                <TableCell>{event.Status}</TableCell>
                <TableCell>
                  <div className='flex items-center justify-center  gap-5'>
                    {' '}
                    <Link href='/create-event-page/create-event'>
                      <Image
                        src={EditProfileIcon}
                        alt='edit_profile_icon'
                        className=' h-[19px] w-[19px] cursor-pointer'
                      />
                    </Link>
                    <Image
                      src={LinkIcon}
                      alt='link_icon'
                      className=' h-[19px] w-[19px] cursor-pointer'
                    />
                    <Image
                      src={DeleteIcon}
                      alt='delete_icon'
                      className=' h-[19px] w-[19px] cursor-pointer'
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default OrganizerEventTable
