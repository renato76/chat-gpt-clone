import type { NextPage } from 'next'
import {BoltIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline'
import MobileView from '../components/MobileView'

const HomePage: NextPage = () => {
  return (
    <div className="pb-12 md:pb-0">
      <div className="text-white md:hidden m-2">
        <MobileView />
      </div>
      <div className="flex flex-col items-center md:justify-center py-20 md:h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div className="flex flex-col md:flex-row space-x-2 px-0 md:px-8 xl:px-20">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className="h-8 w-8" />
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">Explain quantum computing in simple terms </p>
              <p className="infoText">What is the difference between React Query and SWR?</p>
              <p className="infoText">How do I make an HTTP request in JavaScript?</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5 mt-8 md:mt-0">
              <BoltIcon className="h-8 w-8" />
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                Change the ChatGPT Model to use
              </p>
              <p className="infoText">
                Messages are stored in Firebase's Firestore
              </p>
              <p className="infoText">
                Hot Toast notifications when ChatGPT is thinking!
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5 mt-8 md:mt-0">
              <ExclamationTriangleIcon className="h-8 w-8" />
              <h2>Limitations</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">
                May occasionally generate incorrect information
              </p>
              <p className="infoText">
                May occasionally produce harmful instructions or biased content
              </p>
              <p className="infoText">
                Limited knowledge of world and events after 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage