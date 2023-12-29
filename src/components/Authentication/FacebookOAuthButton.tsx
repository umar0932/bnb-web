import { type SocialAuthProviders } from '@/__generated__/graphql'
import useSocialLoginMutation from '@/api/Authentication/useSocialLoginMutation'
import { SpinnerCircle } from '@/core/icons/SpinnerCircle'
import { Button } from '@/core/ui/button'
import { env } from '@/env.mjs'
import FacebookLogin from '@greatsumini/react-facebook-login'
import { Facebook } from 'lucide-react'
import React from 'react'

const FacebookOAuthButton = () => {
  const { mutateAsync: loginFacebook, isPending } = useSocialLoginMutation()
  return (
    <FacebookLogin
      appId={env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSuccess={async response => {
        await loginFacebook([
          {
            input: {
              provider: 'FACEBOOK' as SocialAuthProviders,
              accessToken: response.accessToken
            }
          }
        ])
      }}
      render={({ onClick }) => (
        <Button
          className='flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white shadow-md'
          variant={'outline'}
          onClick={onClick}
        >
          {isPending ? <SpinnerCircle /> : <Facebook size={25} fill='#3B5998' stroke='none' />}
        </Button>
      )}
    />
  )
}

export default FacebookOAuthButton
