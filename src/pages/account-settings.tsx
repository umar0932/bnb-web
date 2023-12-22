import ContactInfoForm from '@/components/AccountSettings/Forms/ContactInfoForm'
import ChangePasswordForm from '@/components/AccountSettings/Forms/ChangePasswordForm'
import PaymentCardForm from '@/components/AccountSettings/Forms/PaymentCardForm'
import LinkedAccountForm from '@/components/AccountSettings/Forms/LinkedAccountForm'
import EmailPreferanceForm from '@/components/AccountSettings/Forms/EmailPreferanceForm'
import CloseAccountForm from '@/components/AccountSettings/Forms/CloseAccountForm'
import PersonalData from '@/components/AccountSettings/Forms/PersonalData'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AccountSettingsLayout from '@/components/AccountSettings/layout'
import AccountEmailCard from '@/components/AccountSettings/AccountEmailCard'

const FORMS_MAPPING = {
  'Contact Information': <ContactInfoForm />,
  'Change Email': <AccountEmailCard />,
  'Change Password': <ChangePasswordForm />,
  'Payment Card': <PaymentCardForm />,
  'Linked Account': <LinkedAccountForm />,
  'Email Preference': <EmailPreferanceForm />,
  'Close Account': <CloseAccountForm />,
  'Personal Data': <PersonalData />,
}

export default function AccountSetting() {
  const { query } = useRouter()
  const formKey = query.form
  const displayedForm = typeof formKey === 'string' && formKey in FORMS_MAPPING ? formKey as keyof typeof FORMS_MAPPING: 'Contact Information';
  return (
    <AccountSettingsLayout>
      <div className='flex min-h-screen max-md:flex-col'>
        <div className='w-[60%] max-lg:mt-20 max-md:order-2 max-md:w-full max-sm:mt-10'>
          <div className='max-md:full  flex w-full flex-col p-10 max-md:top-full max-md:order-3 max-md:w-full max-sm:p-5'>
            {FORMS_MAPPING[displayedForm]}
          </div>
        </div>
        <div className='mt-20 flex max-h-[300px] w-[40%] flex-wrap items-center justify-center gap-5 p-5 max-xl:max-h-[530px] max-lg:max-h-[600px]  max-md:order-1 max-md:w-full'>
          {Object.keys(FORMS_MAPPING).map((title, index) => (
            <Link
              key={index}
              className={`div-drop-shadow flex h-[110px] w-[110px] cursor-pointer items-center justify-center rounded-lg p-3 text-center ${
                title === displayedForm ? 'bg-secondary  text-white' : 'bg-white text-[#757575]'
              }`}
              href={`/account-settings?form=${title}`}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </AccountSettingsLayout>
  )
}
