import a from './assets/a.jpg'
import c from './assets/c.jpg'
function Product() {
  return ( 
      <section class="py-12 px-6 bg-white">
    <h2 class="text-3xl font-bold text-center mb-10">Energy Made Easy</h2>
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
   
      <div class="bg-gray-100 p-6 rounded-lg shadow-md">
        <img src={c} alt="Lightning in a Bottle" class="w-full h-72   rounded mb-4" />
        <h3 class="font-semibold text-lg mb-2">Lightning in a Bottle</h3>
        <p class="text-sm text-gray-700">VAE is fast-acting and designed to boost focus and mood in seconds, not minutes.</p>
      </div>
    
      <div class="bg-gray-100 p-6 rounded-lg shadow-md">
        <img src={a}  alt="Your Pocket Coffee" class="w-full h-72   rounded mb-4" />
        <h3 class="font-semibold text-lg mb-2">Your Pocket Coffee</h3>
        <p class="text-sm text-gray-700">Fitting easily into your pocket or bag, VAE is your go-anywhere energy companion.</p>
      </div>
     
      <div class="bg-gray-100 p-6 rounded-lg shadow-md">
        <img src={a}  alt="Clean & Simple Energy" class="w-full h-72 rounded mb-4" />
        <h3 class="font-semibold text-lg mb-2">Clean & Simple Energy</h3>
        <p class="text-sm text-gray-700">No sugar, no crash, just clean energy. Delivered naturally with zero nonsense.</p>
      </div>
    </div>
  </section>
   );
}

export default Product;