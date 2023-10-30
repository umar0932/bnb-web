const PersonalData = () => {
  return (
    <>
      <div className='card-drop-shadow flex h-[470px] gap-10 rounded-lg bg-white p-10 max-sm:p-5'>
        <div className='flex w-full flex-col'>
          <span className='text-4xl font-bold text-primary max-sm:text-3xl'>
            Request Personal Data
          </span>

          <div className='mt-5 h-[1px] bg-[#BEBEBE]'> </div>

          <div className='mt-5 flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:justify-start'>
            <span className='text-2xl text-tertiary'>
              If you want to request a copy of your personal data from Bnb, submit a request in our
              privacy center. Once there, select &quot;Take Control&quot;.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalData
