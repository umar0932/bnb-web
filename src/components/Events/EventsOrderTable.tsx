import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/core/ui/table'

import { EventOrders } from '@/utils/fakeBackend'

export default function EventsOrdersTable() {
  return (
    <>
      <div>
        <Table className=' rounded-lg'>
          <TableHeader className='rounded-xl bg-[#DEF0FF]'>
            <TableRow className='text-md rounded-xl'>
              <TableHead className='text-center font-bold text-[#003A6D]'>Order</TableHead>
              <TableHead className='text-center font-bold text-[#003A6D]'>Name</TableHead>
              <TableHead className='text-center font-bold text-[#003A6D]'>Quantity</TableHead>
              <TableHead className='text-center font-bold text-[#003A6D]'>Price</TableHead>

              <TableHead className=' text-center font-bold text-[#003A6D]'>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='bg-[#F3FAFF]'>
            {EventOrders.map(orders => (
              <TableRow key={orders.id} className='text-center text-[#757575]'>
                <TableCell>{orders.order_number}</TableCell>
                <TableCell>{orders.customer_name}</TableCell>
                <TableCell>{orders.quantity}</TableCell>
                <TableCell>{orders.price}</TableCell>
                <TableCell>{orders.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
