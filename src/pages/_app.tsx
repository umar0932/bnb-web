import { type AppType } from 'next/dist/shared/lib/utils'
import '@/styles/globals.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../styles/calendar.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
