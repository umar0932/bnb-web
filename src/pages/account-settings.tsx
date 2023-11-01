import { useState } from 'react'

import AuthHeader from '@/components/Header/AuthHeader'
import ContactInfoForm from '@/components/Forms/AccountSettingsForm/ContactInfoForm'
import Copyright from '@/components/Copyright/Copyright'
import ChangeEmailForm from '@/components/Forms/AccountSettingsForm/ChangeEmailForm'
import ChangePasswordForm from '@/components/Forms/AccountSettingsForm/ChangePasswordForm'
import PaymentCardForm from '@/components/Forms/AccountSettingsForm/PaymentCardForm'
import LinkedAccountForm from '@/components/Forms/AccountSettingsForm/LinkedAccountForm'
import EmailPreferanceForm from '@/components/Forms/AccountSettingsForm/EmailPreferanceForm'
import CloseAccountForm from '@/components/Forms/AccountSettingsForm/CloseAccountForm'
import PersonalData from '@/components/Forms/AccountSettingsForm/PersonalData'

const AccountSetting = () => {
  const [selectedDiv, setSelectedDiv] = useState(0)
  const [displayedForm, setDisplayedForm] = useState('ContactInfo') // Initial form to display

  const handleDivClick = (index: any) => {
    setSelectedDiv(index)

    // Determine which form to display based on the clicked button
    switch (index) {
      case 1: // "Change Email" button
        setDisplayedForm('ChangeEmail')
        break
      case 2: // "Change Password" button
        setDisplayedForm('ChangePassword')
        break
      case 3:
        setDisplayedForm('PaymentCard')
        break
      case 4:
        setDisplayedForm('LinkedAccount')
        break
      case 5:
        setDisplayedForm('EmailPreferance')
        break
      case 6:
        setDisplayedForm('CloseAccount')
        break
      case 7:
        setDisplayedForm('Personal Data')
        break

      default:
        setDisplayedForm('ContactInfo')
    }
  }

  // Define the form component to display based on the state
  const renderForm = () => {
    switch (displayedForm) {
      case 'ChangeEmail':
        return <ChangeEmailForm />
      case 'ChangePassword':
        return <ChangePasswordForm />
      case 'PaymentCard':
        return <PaymentCardForm />
      case 'LinkedAccount':
        return <LinkedAccountForm />
      case 'EmailPreferance':
        return <EmailPreferanceForm />
      case 'CloseAccount':
        return <CloseAccountForm />
      case 'Personal Data':
        return <PersonalData />
      case 'ContactInfo':
      default:
        return <ContactInfoForm />
    }
  }

  return (
    <div className='flex max-h-[590px] flex-col bg-[#DEF0FF] max-xl:max-h-[800px]'>
      <AuthHeader />
      {/* <div className="absolute bottom-0">
        <Copyright />
      </div> */}

      <div className='flex flex-col'>
        <div className='flex min-h-screen  max-md:flex-col'>
          <div className=' w-[60%]  max-lg:mt-20 max-md:order-2 max-md:w-full max-sm:mt-10'>
            <div className='max-md:full  flex w-full flex-col p-10 max-md:top-full max-md:order-3 max-md:w-full max-sm:p-5'>
              {renderForm()} {/* Render the selected form */}
            </div>
          </div>
          <div className='mt-20 flex max-h-[300px] w-[40%] flex-wrap items-center justify-center gap-5 p-5 max-xl:max-h-[530px] max-lg:max-h-[600px]  max-md:order-1 max-md:w-full'>
            {[
              'Contact Information',
              'Change Email',
              'Change Password',
              'Credit/ Debit Card',
              'Linked Account',
              'Email Preference',
              'Close Account',
              'Personal Data'
            ].map((label, index) => (
              <div
                key={index}
                className={`div-drop-shadow flex h-[110px] w-[110px] cursor-pointer items-center justify-center rounded-lg p-3 text-center ${
                  selectedDiv === index ? 'bg-secondary  text-white' : 'bg-white text-[#757575]'
                }`}
                onClick={() => handleDivClick(index)}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <Copyright />
      </div>
    </div>
  )
}

export default AccountSetting
