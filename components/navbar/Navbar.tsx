
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="font-montserrat bg-light-green border-gray-200 px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href='/' className='w-1/6'>
          <span className="text-3xl tracking-tight">CAR</span>
          <span className="text-white text-3xl tracking-tight">POOL</span>
        </a>
        <ul className='flex flex-row justify-center w-4/6 py-4'>
          <Link className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream" href="/" >Accueil</Link>
          <Link className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream" href="/search">Rechercher</Link>
          <Link className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream" href="/createtrip">Créer un voyage</Link>
          <Link className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream" href="/updatetrip">aaaaaaaaaa</Link>
        </ul>
        <ul className="flex flex-row justify-center w-1/6">
          <Link className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream" href="/profile">Profil</Link>
          <Link className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream" href="/signin">SignIn</Link>
          <Link className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream" href="/signup">SignUp</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
