import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Hello() {
  return (
    <div className="sm:py-32 lg:py-16 h-screen" id="content-wrap">
      <div className="px-14 pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-4 lg:gap-8">
        <div className="text-center md:text-left mt-8 md:mt-0">
          <p className="py-3 text-3xl md:text-5xl lg:text-7xl font-sans">
            Hello, <br /> my name is <br /> <b>Arya Wicaksana</b>
          </p>
          <div class="mt-3 w-100">
            <p className="text-xl">
              Subscribe now to get latest article from me.
            </p>
            <div class="mt-5 w-100 block md:flex">
              <input
                type="text"
                className="form-control text-center md:text-left block w-full p-3 mb-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                placeholder="Your email here..."
              />
              <button
                type="button"
                class="px-6 py-3 mx-3 mb-3 bg-blue-600 text-white font-normal text-base rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_o6spyjnc.json"
            className="xs:w-40 sm:w-3/4 sm:h-1/4 md:w-100 md:h-100"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
      </div>
      <div className="scroll-down-section">
        <div className="absolute flex justify-center mr-auto ml-auto animate-bounce bottom-6 lg:bottom-10 right-0 left-0">
          <p className="xs:text-xs sm:text-sm">Scroll down</p>
        </div>
        <div className="absolute flex justify-center mr-auto ml-auto animate-bounce bottom-3 lg:bottom-4 right-0 left-0">
          <svg
            className="xs:w-3 xs:h-3 lg:w-5 lg:h-5 text-amber-900 w-100"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hello;
