import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/core/ui/table'

import { OrganizersOrders } from '@/utils/fakeBackend'

export default function OrganizerOrdersTable() {
  return (
    <>
      <div>
        <Table className=' rounded-lg'>
          <TableHeader className='rounded-xl bg-[#DEF0FF]'>
            <TableRow className='text-md rounded-xl'>
              <TableHead className='text-center font-bold text-[#003A6D]'>Order</TableHead>
              <TableHead className='text-center font-bold text-[#003A6D]'>Event</TableHead>
              <TableHead className='text-center font-bold text-[#003A6D]'>Buyer</TableHead>
              <TableHead className='text-center font-bold text-[#003A6D]'>Date</TableHead>

              <TableHead className=' text-center font-bold text-[#003A6D]'>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='bg-[#F3FAFF]'>
            {OrganizersOrders.map(orders => (
              <TableRow key={orders.id} className='text-center text-[#757575]'>
                <TableCell>{orders.order_number}</TableCell>
                <TableCell>{orders.event_name}</TableCell>
                <TableCell>{orders.buyer_name}</TableCell>
                <TableCell>{orders.date}</TableCell>
                <TableCell>{orders.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
