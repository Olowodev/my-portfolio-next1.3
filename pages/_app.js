import { Curtains, useCurtains, useCurtainsEvent } from 'react-curtains'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  
  const contextLost = (curtains) => {
    console.log('lost')
    curtains.restoreContext()
  }
  return (
    // <Curtains>
    <Component {...pageProps} />
    // </Curtains>
  )
}

export default MyApp
