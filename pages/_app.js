import { Curtains, useCurtains, useCurtainsEvent } from 'react-curtains'
import '../styles/globals.css'
// import '../components/_barba'

function MyApp({ Component, pageProps }) {

  
  const contextLost = (curtains) => {
    console.log('lost')
    curtains.restoreContext()
  }
  return (
    // <Curtains>
    // <div data-barba='wrapper'>
    <Component {...pageProps} />
    // </div> 
    // </Curtains>
  )
}

export default MyApp
