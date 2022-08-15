import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

    
return(
  <div className="footer bg-gray-100">

    <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-row ">
            <div className="flex flex-col w-full border-4 border-black justify-center items-center md:text-left text-center">
                <div className="flex-grow w-full flex-row flex flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left text-center border-b border-black">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">BUSINESS</h2>
                    <nav className="list-none mb-10">
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">First Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Second Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Third Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                        </li>
                    </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PHOTO GALLERY</h2>
                    <nav className="list-none mb-10">
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">First Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Second Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Third Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                        </li>
                    </nav>
                    </div>
                </div>

                <div className="flex-grow w-full flex-row flex flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
                    <nav className="list-none mb-10">
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">First Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Second Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Third Link</Link>
                        </li>
                        <li>
                        <Link to="/"className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                        </li>
                    </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT US</h2>
                    <nav className="list-none mb-10">
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">First Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Second Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Third Link</Link>
                        </li>
                        <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                        </li>
                    </nav>
                    </div>
                <div/>
            </div>
        </div>

        <div className="flex flex-col ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
        </div>

        </div>
      </footer>

  </div>
  )
}

export default Footer;