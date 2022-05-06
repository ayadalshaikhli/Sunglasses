// const navigation = [
//   { name: "About", href: "/contact" },
//   { name: "Shop", href: "#" },
//   { name: "Jobs", href: "#" },
//   { name: "Terms and Conditions", href: "#" },
// ];
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="  z-10 colornav ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          <div className="px-6 py-2">
            <Link href="/info/about">
              <a className="text-white hover:text-gray-900">About</a>
            </Link>
          </div>
          <div className="px-6 py-2">
            <Link href="/info/contact">
              <a className="text-white hover:text-gray-900">Contact Us</a>
            </Link>
          </div>
          <div className="px-6 py-2">
            <Link href="/info/terms">
              <a className="text-white hover:text-gray-900">
                Terms of Services
              </a>
            </Link>
          </div>
          <div className="px-6 py-2">
            <Link href="/info/privacy">
              <a className="text-white hover:text-gray-900">Privacy Policy</a>
            </Link>
          </div>
          <div className="px-6 py-2">
            <Link href="/info/shipping">
              <a className="text-white hover:text-gray-900">Shipping Policy</a>
            </Link>
          </div>
          <div className="px-6 py-2">
            <Link href="/info/refund">
              <a className="text-white hover:text-gray-900">Refund Policy</a>
            </Link>
          </div>
          <div className="px-6 py-2">
            <Link href="/info/faq">
              <a className="text-white hover:text-gray-900">FAQ</a>
            </Link>
          </div>
          {/* {navigation.map((item, i) => (
            <div key={i} className="px-6 py-2">
              <a href={item.href} className="text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))} */}
        </nav>
        <p className=" text-center text-white">&copy; 2022 Tataroski</p>
      </div>
    </footer>
  );
}
