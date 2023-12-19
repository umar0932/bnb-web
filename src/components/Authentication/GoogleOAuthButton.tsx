import { SpinnerCircle } from '@/core/icons/SpinnerCircle'
import { Button } from '@/core/ui/button'
import { env } from '@/env.mjs'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import React, { PropsWithChildren, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

const GoogleOAuthInner = () => {
  const [loading, setLoading] = useState(false)
  const login = useGoogleLogin({
    onSuccess(codeResponse) {
      console.log(codeResponse)
      setLoading(false)
    },
    flow: 'auth-code'
  })
  return (
    <Button
      type='button'
      variant={'outline'}
      className='flex h-[45px] w-full items-center justify-center gap-3 rounded-lg bg-white text-primary-foreground shadow-md'
      onClick={() => {
        setLoading(true)
        login()
      }}
      disabled={loading}
    >
      {loading ? <SpinnerCircle /> : <FcGoogle size={25} />}
      Sign up with Google
    </Button>
  )
}

const GoogleOAuthButton = () => {
  return (
    <GoogleOAuthProvider clientId={env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <GoogleOAuthInner />
    </GoogleOAuthProvider>
  )
}

export default GoogleOAuthButton
