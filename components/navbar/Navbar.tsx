
import Link from 'next/link';
const Navbar = () => {
  return (
  <nav className="font-montserrat bg-light-green px-2 sm:px-4 py-2.5 ">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href='/'> {/* <Image className='flex items-center m-auto' width="80" height="180" src="/logo.png" alt="" /> */}
            <span className="text-xl tracking-tight text-dark-green">CAR</span>
            <span className="text-white text-xl tracking-tight">POOL</span>
          </a>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden
       hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 text-dark-green" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex flex-col p-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <Link className="block py-2 pl-3 pr-4 text-base" href="/" >Home</Link>
            <Link className="block py-2 pl-3 pr-4 text-base" href="/about">About</Link>
            <Link className="block py-2 pl-3 pr-4 text-base" href="/search">Search</Link>
            <Link className="block py-2 pl-3 pr-4 text-base" href="/profile">Profile</Link>
            <Link className="block py-2 pl-3 pr-4 text-base" href="/signin">SignIn</Link>
            <Link className="block py-2 pl-3 pr-4 text-base" href="/signup">SignUp</Link>
        </ul>
      </div>
    </div>
  </nav>
  );
}
   
  export default Navbar;
