import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Book,
  GraduationCap,
  ShieldCheck,
  BadgeCheck,
  MessageSquare,
  KeyRound,
  MapPin,
  CreditCard,
} from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBubbleMenuOpen, setIsBubbleMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleBubbleMenu = () => {
    setIsBubbleMenuOpen(!isBubbleMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/", image: "url_to_home_image" },
    { name: "About", path: "/about", image: "url_to_about_image" },
    { name: "Placement", path: "/placement", image: "url_to_placement_image" },
    { name: "Research", path: "/research", image: "url_to_research_image" },
    { name: "Faculty", path: "/faculty", image: "url_to_faculty_image" },
    {
      name: "Campus Life",
      path: "/campus-life",
      image: "url_to_campus_life_image",
    },
    {
      name: "Committees",
      path: "/committee",
      image: "url_to_committees_image",
    },
    { name: "Events", path: "/events", image: "url_to_events_image" },
    {
      name: "Admissions & Academics",
      path: "/admissions",
      image: "url_to_admissions_image",
    },
    { name: "Contact", path: "/contact", image: "url_to_contact_image" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const dropdownLinks = [
    { name: "RTI", path: "https://svips.ac.in/uploads/RTI%20Decleration.pdf", external: false, icon: Book },
    { name: "LMS", path: "http://117.213.202.158:1430", external: false, icon: GraduationCap },
    { name: "PCI", path: "/pci", external: false, icon: ShieldCheck },
    { name: "NAAC", path: "/naac", external: false, icon: BadgeCheck },
    
    
    {
      name: "VLogin",
      path: "https://sves.org.in/ecap_pharma/",
      external: true,
      icon: KeyRound,
    },
    {
      name: "RouteMap",
      path: "https://www.google.com/maps/dir/?api=1&destination=Sri+Vasavi+Engineering+College+and+Pharmacy+Tadepalligudem",
      external: true,
      icon: MapPin,
    },
    {
      name: "FeePayments",
      path: "https://sves.org.in/Ecap_Pharma/olpaymentlogin.aspx",
      external: true,
      icon: CreditCard,
    },
  ];

  const bubbleMenuItems = dropdownLinks.map((item) => ({
    name: item.name,
    link: item.path,
    image: "",
    external: item.external,
    icon: item.icon,
  }));

  const bubbleMenuStyle = {
    position: "fixed",
    top: "80px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: "white",
    borderRadius: "25px", // Reduced to 25px for less rounded edges
    boxShadow:
      "0 4px 6px 10px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    padding: "25px",
    zIndex: 50,
    transform: "none",
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-600 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img
                src="public/uploads/images/no.png" // Replace with the actual path to your image
                alt="Logo"
                className="h-11 w-11 mr-0" // Adjust height, width, and margin as needed
              />
              <span className="ml-0 text-3xl font-bold text-white">SVIPS</span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`font-medium transition-colors duration-300 text-white hover:text-blue-200`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      className="h-0.5 bg-blue-200 mt-0.5"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={toggleBubbleMenu}
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Toggle bubble menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {isBubbleMenuOpen && (
            <motion.div
              style={bubbleMenuStyle}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              {bubbleMenuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target={item.external ? "_blank" : ""}
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full overflow-hidden flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => {
                    if (!item.external) {
                      e.preventDefault();
                      navigate(item.link);
                      toggleBubbleMenu();
                    }
                  }}
                >
                  {item.icon ? (
                    <>
                      <item.icon className="w-6 h-6 text-gray-700" />
                      {item.external && (
                        <ExternalLink className="w-4 h-4 text-gray-500 absolute top-1 right-1" />
                      )}
                    </>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <span className="text-xs text-gray-600 mt-1">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          )}

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-40"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-gray-700 hover:text-gray-900"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-semibold text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center space-x-4 mb-4">
                {dropdownLinks.slice(0, 4).map((item) => (
                  <motion.a
                    key={item.name}
                    href={
                      item.external ? item.path : `/route?path=${item.path}`
                    }
                    target={item.external ? "_blank" : ""}
                    rel="noopener noreferrer"
                    className="w-16 h-16 flex flex-col items-center justify-center rounded-full overflow-hidden bg-gray-100 hover:bg-gray-200"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      if (!item.external) {
                        e.preventDefault();
                        navigate(item.path);
                        toggleMenu();
                      }
                    }}
                  >
                    {item.external ? (
                      <>
                        <item.icon className="w-6 h-6 text-gray-700" />
                        <ExternalLink className="w-4 h-4 text-gray-500 absolute top-1 right-1" />
                      </>
                    ) : (
                      <item.icon className="w-6 h-6 text-gray-700" />
                    )}
                    <span className="text-xs text-gray-600 mt-1">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
              <div className="flex flex-row items-center space-x-4">
                {dropdownLinks.slice(4, 8).map((item) => (
                  <motion.a
                    key={item.name}
                    href={
                      item.external ? item.path : `/route?path=${item.path}`
                    }
                    target={item.external ? "_blank" : ""}
                    rel="noopener noreferrer"
                    className="w-16 h-16 flex flex-col items-center justify-center rounded-full overflow-hidden bg-gray-100 hover:bg-gray-200"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      if (!item.external) {
                        e.preventDefault();
                        navigate(item.path);
                        toggleMenu();
                      }
                    }}
                  >
                    {item.external ? (
                      <>
                        <item.icon className="w-6 h-6 text-gray-700" />
                        <ExternalLink className="w-4 h-4 text-gray-500 absolute top-1 right-1" />
                      </>
                    ) : (
                      <item.icon className="w-6 h-6 text-gray-700" />
                    )}
                    <span className="text-xs text-gray-600 mt-1">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
