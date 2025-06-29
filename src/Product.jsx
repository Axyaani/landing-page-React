import a from './assets/a.jpg'
import c from './assets/c.jpg'
function Product() {
    return ( 
        
  
      <div className="py-24 px-6 bg-white text-center">
        <h2 className="text-xl font-bold mb-8">Energy Made Easy</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
          <div className="p-4 border rounded shadow-lg text-center ">
            <img src={c} className=" mx-auto mb-4 h-auto w-52" alt="Lightning" />
            <h3 className="font-semibold mb-2 text-xs">Lightning in a Bottle</h3>
            <p className="text-xs text-gray-600">VAE is fast acting and designed to boost focus and mood in seconds, not minutes.</p>
          </div>
          <div className="p-4 border rounded shadow-lg text-center">
            <img src={a} className=" mx-auto mb-4 w-52 s" alt="Pocket Coffee" />
            <h3 className="font-semibold mb-2 text-xs">Your Pocket Coffee</h3>
            <p className="text-xs text-gray-600">Fitting easily into your pocket or bag, VAE is your go-anywhere energy companion.</p>
          </div>
          <div className="p-4 border rounded shadow-lg text-center">
            <img src={a}className="w-28 mx-auto mb-4 w-52" alt="Simple Energy" />
            <h3 className="font-semibold mb-2 text-xs">Clean & Simple Energy</h3>
            <p className="text-xs text-gray-600">No sugar, no crash, just clean energy. Delivered naturally with zero nonsense.</p>
          </div>
        </div>
      </div>
      
    
     );
}

export default Product;