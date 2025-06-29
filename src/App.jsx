import hero from './assets/a.jpg'
function App() {
    return ( 
        
      <div className="bg-[#0d1321] text-white sm:py-36 py-52  relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-28">
          <div className="text-center md:text-left mb-10 md:mb-0  ">
            <h1 className="text-3xl font-bold mb-3">Get energized in seconds.</h1>
            <p className="text-sm mb-4 max-w-md">Elevate your energy and focus with VAE’s blend of natural caffeine and amino acids.</p>
            <button className="bg-green-500 px-4 py-2 rounded text-white text-xs">BUY NOW</button>
          </div>
          <img src={hero} alt="Product" className="w-48 md:w-64" />
        </div> 
        <div className="sm:flex  justify-center text-xl text-center gap-8 text-white  sm:mt-12 bg-[#15213c] sm:py-8   w-full absolute  sm:top-96  ">
          <div>
            <i className="fas fa-bolt mb-1"></i><br />Works 5x Faster
          </div>
          <div>
            <i className="fas fa-coffee mb-1"></i><br />3 Sprays = 1 Coffee
          </div>
          <div>
            <i className="fas fa-heartbeat mb-1"></i><br />No Jitters or Crash
          </div>
          <div>
            <i className="fas fa-apple-alt mb-1"></i><br />0 Sugar, 0 Calories
          </div>
        </div>
      </div>



     );
}

export default App;