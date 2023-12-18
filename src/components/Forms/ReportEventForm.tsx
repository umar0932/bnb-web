import { useFormik } from 'formik'
import { RadioGroup, RadioGroupItem } from '@/core/ui/radio-group'
import { Label } from '@/core/ui/label'
import { Button } from '@/core/ui/button'

export default function ReportEventForm() {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      description: ''
    },
    onSubmit: values => {
      JSON.stringify(values, null, 2)
      console.log(values)
    }
  })

  const reasonsForReport = [
    'Fraudulent or Unauthorized Event',
    'Harmful Content',
    'Illegal or Regulated Content',
    'Spam',
    'Sexually Explicit Content',
    'Violence or Extremism',
    'Canceled Event',
    'Request a Refund',
    'Copyright or Trademark Infringement'
  ]

  return (
    <div className='flex w-[60%] flex-col gap-5 max-lg:w-[80%] max-md:order-2 max-md:w-full'>
      <div className='flex w-full flex-col justify-center gap-3 rounded-xl bg-[#F6FBFF] p-10 max-sm:p-3'>
        <span className='text-xl font-bold text-primary'>Reason for report</span>

        <RadioGroup defaultValue='option-one' className='mt-1 flex flex-col p-2'>
          <div className='flex flex-col gap-5 p-2 max-sm:gap-2'>
            {reasonsForReport.map((reason, index) => (
              <div key={index} className='flex items-center gap-5 p-2'>
                <RadioGroupItem
                  value={`option-${index + 1}`}
                  id={`option-${index + 1}`}
                  className='h-[20px] w-[20px] border-btnprimary bg-white text-btnprimary'
                />
                <Label
                  htmlFor={`option-${index + 1}`}
                  className='text-md flex items-center gap-2 text-[#003A6D] max-sm:text-sm'
                >
                  {reason}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <form onSubmit={handleSubmit} className='flex w-full flex-col '>
          <div className='div-drop-shadow mt-5 flex flex-col rounded-lg bg-white p-3'>
            <input
              className='h-[25px] bg-transparent outline-none placeholder:text-sm'
              id='email'
              name='email'
              type='text'
              placeholder='Your Email'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className='div-drop-shadow mt-5 flex flex-col rounded-lg bg-white p-3'>
            <textarea
              className='h-[195px] bg-transparent outline-none placeholder:text-sm'
              id='description'
              name='description'
              placeholder='Description'
              value={values.description}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>

      <div className='flex items-center justify-center gap-5'>
        <Button className='w-[130px] bg-[#DEF0FF]  text-primary hover:bg-[#DEF0FF]'>Go Back</Button>
        <Button className='w-[130px] bg-btnprimary '>Submit Report</Button>
      </div>
    </div>
  )
}
