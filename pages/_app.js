import { Curtains, useCurtains, useCurtainsEvent } from 'react-curtains'
import Navbar from '../components/navbar/Navbar'
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
    <>
      <Navbar />
      <Component {...pageProps} />
    <svg className={styles.overlay2} width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path ref={path2} stroke='#222' fill='#222' className={styles.overlay__path2} vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
                </svg>
    </>
    // </div> 
    // </Curtains>
  )
}

export default MyApp
