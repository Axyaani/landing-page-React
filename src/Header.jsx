function Header() {
    return (  
          
      <div className="flex justify-between items-center px-8 py-5 border-b text-xs shadow-lg">
        <div className="flex gap-4 font-semibold text-xl">
          <a href="#">Home</a>
          <a href="#">Store</a>
          <a href="#">FAQ</a>
        </div>
        <div className="font-bold text-xl">VAE</div>
        <div className="flex gap-4 text-xl">
          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>


    );
}

export default Header;