import { Link } from "react-router";
import saylanilogo from "../assets/Images/saylanilogo.png"

function Footer(){
    return(
      <>
        <footer className="mt-14 border-t bg-white border-gray-300 text-gray-800 body-font">
            <div className="contentDiv px-20 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
              
              <div className="w-64 flex-shrink-0 md:mx-0 md:text-left">
                <span><img width={'180px'} src={saylanilogo} alt="codetec solutions logo" /></span>
                <p className="mt-2 text-sm text-gray-900 font-medium p-2">
                  Saylani Welfare International Trust provides installment-based loans and free IT education to uplift the underprivileged.
                </p>
              </div>

              <div className="flex-grow flex flex-wrap justify-around md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">

                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold text-gray-800 tracking-widest text-xl mb-3">
                    ABOUT
                  </h2>
                  <nav className="list-none mb-10">
                    <li className="mt-5 mb-2">
                      <Link to={'/'}><a className="font-medium text-gray-800 hover:text-blue-500">About Us</a></Link>
                    </li>
                    <li className="mb-2">
                      <Link to={'/'}><a className="font-medium text-gray-800 hover:text-blue-500">Contact Us</a></Link>
                    </li>
                    <li className="mb-2">
                     <Link to={'/user'}><a className="font-medium text-gray-800 hover:text-blue-500">Apply For Loan</a></Link>
                    </li>
                  </nav>
                </div>

                <div className="lg:w-96 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold text-gray-800 tracking-widest text-xl mb-3">
                    DETAILS
                  </h2>
                  <nav className="list-none mb-10">
                    <li className="mt-5 mb-2">
                      <a className="text-gray-800 hover:text-blue-500">A-25, Bahadurabad Chowrangi, Karachi, Pakistan</a>
                    </li>
                    <li className="mb-2">
                      <a className="text-gray-800 hover:text-blue-500">Email: info@saylaniwelfare.com</a>
                    </li>
                    <li className="mb-2">
                      <a className="text-gray-800 hover:text-blue-500">Contact: +92 111 729 5264</a>
                    </li>
                  </nav>
                </div>

              </div>

            </div>

            <div className="bg-gray-100">
              <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="font-semibold text-gray-900 text-sm text-center sm:text-left">
                  © All rights reserved to Saylani Welfare International Trust
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      />
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>

        </footer>
      </>
    )
}

export default Footer;