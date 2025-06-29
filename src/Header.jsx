function Header() {
    return (  
          
 <header class="flex justify-between items-center px-6 py-7 bg-white shadow-md relative">

  <nav class="flex space-x-6 text-sm absolute left-6">
    <a href="#" class="hover:text-green-500">Home</a>
    <a href="#" class="hover:text-green-500">Store</a>
    <a href="#" class="hover:text-green-500">FAQ</a>
  </nav>


  <div class="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
    VAE
  </div>


  <div class="flex space-x-4 text-lg absolute right-6">
    <a href="#" class="hover:text-green-500"><i class="fas fa-user"></i></a>
    <a href="#" class="hover:text-green-500"><i class="fas fa-shopping-cart"></i></a>
  </div>
</header>


    );
}

export default Header;