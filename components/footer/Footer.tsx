import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-light-green shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href='/'>
                        <Image className='hidden items-center m-auto md:flex' width="80" height="180" src="/logo.png" alt="" />
                        <span className="font-montserrat text-xl tracking-tight">CAR</span>
                        <span className="font-montserrat text-white text-xl tracking-tight">POOL</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-cream sm:mb-0 text-lg">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-dark-green sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-xl text-cream sm:text-center">© 2023 <a href="/" className="hover:underline">Carpool™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;