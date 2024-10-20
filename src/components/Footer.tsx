import Link from "next/link";

function Footer() {
  const links = [
    { name: "Home", slug: "/" },
    { name: "Our Courses", slug: "/courses" },
    { name: "Webinars", slug: "/webinars" },
    { name: "Contact Us", slug: "/contact" },
  ];

  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Our Art School is dedicated to nurturing creativity and artistic
            excellence. Whether you&apos;re a beginner or a seasoned artist, our
            courses are designed to inspire, educate, and elevate your artistic
            journey.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
          {links.map((link)=>(
            <li key={link.slug}>
            <Link 
            href={link.slug}
            className="hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          </li>
          ))}
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Karachi, Pakistan</p>
          <p>Delhi 10001</p>
          <p>Email: info@artschool.com</p>
          <p>Phone: +92 456 7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Art School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
