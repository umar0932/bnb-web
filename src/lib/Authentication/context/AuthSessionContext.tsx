import createGenericContext from '@/core/lib/create-generic-context'
import { type JwtPayload } from 'jwt-decode'
import { useEffect, type PropsWithChildren, useState } from 'react'
import { AuthBroadcastChannel } from '../AuthBroadcastChannel'
import { getSession } from '@/api/Authentication'

interface AuthSessionContext {
  data: null | undefined | JwtPayload
  status: 'loading' | 'authenticated' | 'unauthenticated'
}
const [_useAuthSessionContext, AuthSessionContextProvider] =
  createGenericContext<AuthSessionContext>()

export const AuthSessionProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<AuthSessionContext>({
    data: undefined,
    status: 'loading'
  })

  useEffect(() => {
    const setSessionState = () => {
      getSession({ shouldBroadcast: false })
        .then(session => {
          setState({
            data: session,
            status: session === null ? 'unauthenticated' : 'authenticated'
          })
        })
        .catch(error => {
          console.error(error)
          setState({
            data: null,
            status: 'unauthenticated'
          })
        })
    }
    setSessionState()
    AuthBroadcastChannel().addEventListener('message', setSessionState)
    return () => {
      AuthBroadcastChannel().removeEventListener('message', setSessionState)
    }
  }, [])

  return (
    <AuthSessionContextProvider
      value={{
        data: state.data,
        status: state.status
      }}
    >
      {children}
    </AuthSessionContextProvider>
  )
}

interface Props {
  required: boolean
}
const useAuthSessionContext = (props?: Props) => {
  const { data, status } = _useAuthSessionContext()
  if (props?.required && status === 'unauthenticated') {
    throw new Error('User is not authenticated')
  }
  return { data, status }
}
export default useAuthSessionContext
