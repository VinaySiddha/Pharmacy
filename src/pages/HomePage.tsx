import React, { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Award,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  X,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
// import CourseCard from '../components/CourseCard';
import FacultyCard from "../components/FacultyCard";
import EventCard from "../components/EventCard";
import TestimonialCard from "../components/TestimonialCard";
import StatsSection from "../components/StatsSection";
// import CTASection from '../components/CTASection';
import companyLogos from "../data/companyLogos.json";
import "./HomePage.css";
import ChatBot from "../components/Chatbot";
import WhatsAppIcon from "../components/WhatsAppIcon";

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};
const images = [
  'https://svips.ac.in/public/uploads/images/placement.jpeg',
  // Add as many images as needed
];

// PopupGallery opens automatically on mount
const PopupGallery = () => {
  const [open, setOpen] = useState(true); // Open by default
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Auto-scroll logic
  useEffect(() => {
    if (!open) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [open]);

  // Manual navigation
  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          background: 'transparent', // Remove white background
          borderRadius: 0, // Remove border radius
          width: 'auto', // Only as wide as the image
          maxWidth: '90vw',
          overflow: 'visible',
          position: 'relative',
          padding: 0,
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            fontSize: 24,
            color: '#fff',
            cursor: 'pointer',
            zIndex: 10,
            padding: 4,
            lineHeight: 1,
            borderRadius: '50%',
            transition: 'color 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.color = '#fff')}
        >
          ×
        </button>
        {/* Carousel Controls */}
        <button
          onClick={goToPrev}
          aria-label="Previous"
          style={{
            position: 'absolute',
            left: -32,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            fontSize: 22,
            color: '#fff',
            cursor: 'pointer',
            zIndex: 10,
            display: images.length > 1 ? 'block' : 'none',
          }}
        >
          {'<'}
        </button>
        <button
          onClick={goToNext}
          aria-label="Next"
          style={{
            position: 'absolute',
            right: -32,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            fontSize: 22,
            color: '#fff',
            cursor: 'pointer',
            zIndex: 10,
            display: images.length > 1 ? 'block' : 'none',
          }}
        >
          {'>'}
        </button>
        {/* Main Image */}
        <img
          src={images[currentIndex]}
          alt={`Placement ${currentIndex}`}
          style={{
            maxHeight: '80vh',
            maxWidth: '90vw',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 8,
            background: 'transparent',
            margin: 0,
            boxShadow: '0 1px 6px rgba(0,0,0,0.12)',
            border: 'none',
            display: 'block',
            transition: 'all 0.3s',
          }}
        />
        {/* Dots Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12, background: 'transparent' }}>
          {images.map((_, idx) => (
            <span
              key={idx}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: idx === currentIndex ? '#2563eb' : 'rgba(37,99,235,0.2)',
                display: 'inline-block',
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


const AnimatedSectionHeading: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      {title.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // Trigger animation every time it comes into view
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

const HomePage: React.FC = () => {
  const flyFallRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null); // Track the active image for mobile

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when the section is visible
        } else {
          setIsVisible(false); // Reset animation when the section is out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (flyFallRef.current) {
      observer.observe(flyFallRef.current);
    }

    return () => {
      if (flyFallRef.current) {
        observer.unobserve(flyFallRef.current);
      }
    };
  }, []);

  const handleImageClick = (index: number) => {
    // Toggle the active image on click
    setActiveImageIndex(activeImageIndex === index ? null : index);
  };

  // Sample data for courses
  const courses = [
    {
      id: "bba",
      title: "Bachelor of Business Administration",
      description:
        "A comprehensive program that prepares students for careers in business management, entrepreneurship, and corporate leadership.",
      image:
        "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "3 Years",
      level: "Undergraduate",
      students: 1200,
    },
    {
      id: "bca",
      title: "Bachelor of Computer Applications",
      description:
        "A program focused on computer applications and software development, preparing students for the IT industry.",
      image:
        "https://images.unsplash.com/photo-1581092921461-39b9d08a9b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "3 Years",
      level: "Undergraduate",
      students: 950,
    },
    {
      id: "mba",
      title: "Master of Business Administration",
      description:
        "An advanced program for developing leadership skills and business acumen for executive positions.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "2 Years",
      level: "Postgraduate",
      students: 780,
    },
  ];

  // Sample data for faculty
  const faculty = [
    {
      name: "Dr. T. Yamini Kumari",
      title: "Head , Pharmaceutical Analysis",
      bio: "M.Pharm,Ph.D",
      image: "https://www.svips.ac.in/image/6.jpeg",
      linkedin: "#",
      email: " principal@svips.ac.in",
    },
    {
      name: "Dr. P. Narayana Raju",
      title: "Head, Pharmaceutics",
      bio: "M.Pharm,Ph.D",
      image: "https://www.svips.ac.in/image/2.jpg",
      linkedin: "#",
      email: "narayanaraju@svips.ac.in",
    },
    {
      name: "Dr.Y. B. Manjulatha",
      title: "Head, Pharmaceutical Bio-Technology",
      bio: "M.Pharm,Ph.D",
      image: "https://www.svips.ac.in/image/3.jpg",
      linkedin: "#",
      email: "manjulatha@svips.ac.in",
    },
    {
      name: "Dr. M. Srinivasu",
      title: "Head, Pharmacology",
      bio: "M.Pharm,Ph.D",
      image: "https://www.svips.ac.in/image/4.jpg",
      linkedin: "#",
      email: "srinivasu@svips.ac.in",
    },
    {
      name: "Dr. N. Siva Kumar",
      title: "Head, Pharmaceutical Chemistry",
      bio: "M.Pharm,Ph.D",
      image: "https://www.svips.ac.in/image/5.jpeg",
      linkedin: "#",
      email: "xantrojennie@gmail.com",
    },
  ];

  // Sample data for events
  const events = [
    {
      id: "tech-symposium",
      title: "Annual Tech Symposium",
      description:
        "A day-long event featuring tech talks, workshops, and networking opportunities with industry leaders.",
      date: "June 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
    },
    {
      id: "leadership-workshop",
      title: "Leadership Workshop",
      description:
        "An interactive workshop on developing leadership skills and effective team management.",
      date: "July 5, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Hall B",
    },
    {
      id: "career-fair",
      title: "Career Fair 2025",
      description:
        "Connect with top employers, explore career opportunities, and attend interview preparation sessions.",
      date: "August 20, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Campus Grounds",
    },
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      name: "Aisha Patel",
      title: "BBA Graduate, 2024",
      quote:
        "My time at SVIPS has been transformative. The faculty's guidance and industry-focused curriculum prepared me well for my career. I secured a placement at a top company even before graduation.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Rahul Mehta",
      title: "BCA Student, 3rd Year",
      quote:
        "The practical approach to learning at SVIPS has helped me develop real-world skills. The coding competitions and tech workshops have been invaluable in building my portfolio.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Neha Singh",
      title: "MBA Graduate, 2023",
      quote:
        "The MBA program at SVIPS provided me with a comprehensive understanding of business management. The case studies, industry visits, and  competitive edge in the job market.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      name: "Vikram Reddy",
      title: "BCA Graduate, 2022",
      quote:
        "SVIPS gave me the perfect platform to develop my technical skills. The faculty members are extremely supportive and the infrastructure is world-class. I'm now working at a leading tech company.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];

  // Sample data for news
  const news = [
    {
      id: 1,
      title: "SVIPS Announces New Pharmacy Program",
      content:
        "Sri Vasavi Institute of Pharmaceutical Sciences is excited to announce the launch of a new Bachelor of Pharmacy program starting in the fall semester of 2024.",
      date: "July 10, 2024",
    },
    {
      id: 2,
      title: "Faculty Member Receives Prestigious Award",
      content:
        "Dr. Priya Sharma has been awarded the 'Excellence in Pharmaceutical Research' award for her contributions to the field.",
      date: "July 5, 2024",
    },
    {
      id: 3,
      title: "SVIPS Hosts National Conference on Drug ",
      content:
        "The institute successfully hosted a national conference on drug discovery, attracting researchers and experts from across the country.",
      date: "June 28, 2024",
    },
  ];

  const duplicatedNews = [...news, ...news, ...news];

  const [activeNewsId, setActiveNewsId] = useState<number | null>(null);
  const [activeNews, setActiveNews] = useState<{
    id: number;
    title: string;
    content: string;
    date: string;
  } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNewsClick = (item: {
    id: number;
    title: string;
    content: string;
    date: string;
  }) => {
    setActiveNews(item === activeNews ? null : item);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.animationPlayState =
        item.id === activeNews?.id ? "running" : "paused";
    }
  };

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <PageTransition>
      {/* Popup Gallery on page load */}
      <PopupGallery />
      {/* Hero Section */}
      <Hero
        title="Sri Vasavi Institute Of Pharmaceutical Sciences"
        subtitle="Approved by PCI-New Delhi and NAAC, Affiliated to Andhra University"
        primaryButtonText="Explore Campus"
        primaryButtonLink="/campus-life"
        secondaryButtonText="Get in Touch"
        secondaryButtonLink="/contact"
      />

     

      {/* News Pop-up */}
      {activeNews && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => handleNewsClick(activeNews)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {activeNews.title}
            </h3>
            <p className="text-gray-700 mb-4">{activeNews.content}</p>
            <p className="text-gray-500 text-sm">Date: {activeNews.date}</p>
            <button
              onClick={() => handleNewsClick(activeNews)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* About Section */}
      <motion.section
        id="about"
        className="py-16 md:py-24 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.2 }} // Increased duration and added delay
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSectionHeading
            title="About SVIPS"
            subtitle="Sri Vasavi Institute of Pharmaceutical Sciences is dedicated to providing quality education, fostering research, and developing skilled professionals in the pharmaceutical field."
          />
          <div
  ref={flyFallRef}
  className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center items-center relative max-w-3xl mx-auto"
>
  {[
    { src: "public/uploads/images/l2.png", alt: "AU" },
    {
      src: "public/uploads/images/l3.png",
      alt: "Pharmacy Council of India",
    },
    { src: "public/uploads/images/l4.png", alt: "NAAC" },
    { src: "public/uploads/images/l5.png", alt: "ISO" },
  ].map((image, index) => (
    <div
      key={index}
      className={`relative group rounded-lg shadow-lg overflow-hidden ${
        isVisible ? "animate-fly-fall" : ""
      }`}
      style={{
        animationDelay: `${index * 0.5}s`,
      }}
      onClick={() => handleImageClick(index)}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={`w-full h-auto transition-transform duration-300 ${
          activeImageIndex === index
            ? "blur-lg opacity-50"
            : "group-hover:blur-lg group-hover:opacity-50"
        }`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
          activeImageIndex === index
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        } transition-opacity duration-20`}
      >
        <p className="text-white text-lg font-medium text-center">{image.alt}</p>
      </div>
    </div>
  ))}
</div>

          <div>
            <h2></h2>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <p></p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }} // Increased delay
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow"></div>
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
              <img
                src="https://www.joonsquare.com/usermanage/image/business/sri-vasavi-institute-of-pharmaceutical-sciences-west-godavari-15455/sri-vasavi-institute-of-pharmaceutical-sciences-west-godavari-sri-vasavi-institute-of-pharmaceutical-sciences-1.jpg"
                alt="SVIPS Campus"
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4 }} // Increased delay
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision & Mission
              </h3>
              <p className="text-gray-600 mb-6">
                Sri Vasavi Institue of Pharmaceutical Science College aims to
                provide world-class pharmaceutical education, fostering
                innovation and research excellence. We are committed to shaping
                future professionals with a strong foundation in ethics,
                teamwork, and industry-relevant skills.
              </p>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Quality Education
                    </h4>
                    <p className="text-gray-600">
                      Provide quality Pharmaceutical Education by collaborating
                      with Research Institutes and Industries.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Student-Centered Approach
                    </h4>
                    <p className="text-gray-600">
                      Focusing on individual growth and development of each
                      student and Nurture Team spirit, Professional skills and
                      Ethics among the students.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">R&D</h4>
                    <p className="text-gray-600">
                      Establish state-of-the-art R&D facilities and Incubation
                      centers.
                    </p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  to="/about"
                  className="mt-8 inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  Learn more about our history{" "}
                  <ArrowRight
                    className="ml-2 h-5 w-5 arrow-icon"
                    style={{ zIndex: 500 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Courses Section
      <section id="courses" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Courses"
            subtitle="Discover our comprehensive range of undergraduate and postgraduate programs designed to prepare you for success."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard 
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                duration={course.duration}
                level={course.level}
                students={course.students}
                delay={index * 0.1}
              />
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/courses" className="btn-primary">
              View All Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Stats Section */}
      <StatsSection />

      {/* Faculty Section */}
      <motion.section
        id="hod"
        className="py-16 md:py-24 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Heads of the Departments
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Meet our esteemed department heads leading academic excellence.
            </p>
          </div>

          {/* HOD Grid */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* First row: 3 HODs centered */}
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-auto">
                {faculty.slice(0, 3).map((member, index) => (
                  <FacultyCard
                    key={member.name}
                    name={member.name}
                    title={member.title}
                    bio={member.bio}
                    image={member.image}
                    linkedin={member.linkedin}
                    email={member.email}
                    delay={index * 0.2}
                    className="h-auto"
                  />
                ))}
              </div>
            </div>

            {/* Second row: 2 HODs centered */}
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-auto">
                {faculty.slice(3, 5).map((member, index) => (
                  <FacultyCard
                    key={member.name}
                    name={member.name}
                    title={member.title}
                    bio={member.bio}
                    image={member.image}
                    linkedin={member.linkedin}
                    email={member.email}
                    delay={(index + 3) * 0.2}
                    className="h-auto"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* View All Faculty Button */}
          <div className="text-center mt-8">
            <a
              href="/faculty"
              className="text-blue-600 font-semibold hover:underline"
            >
              View All Faculty →
            </a>
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      {/* <motion.section
        id="events"
        className="py-16 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} // Trigger animation every time it comes into view
        transition={{ duration: 1.2, delay: 0.4 }} // Increased duration and delay
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSectionHeading 
            title="Upcoming Events"
            subtitle="Stay updated with our latest events, workshops, and seminars."
          />
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }} // Trigger animation every time it comes into view
            transition={{ duration: 1, delay: 0.2 }} // Increased delay
          >
            {events.map((event, index) => (
              <EventCard 
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                location={event.location}
                delay={index * 0.2} // Increased delay for each card
              />
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Link to="/events" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
              View All Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section> */}

      {/* Testimonials Section */}
      {/* <motion.section
        className="py-16 md:py-24 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSectionHeading 
            title="Student Testimonials"
            subtitle="Hear what our students have to say about their experience at SVIPS."
          />
          <div className="mt-12">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 5000 }}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard 
                    name={testimonial.name}
                    title={testimonial.title}
                    quote={testimonial.quote}
                    image={testimonial.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.section> */}

      {/* Companies Visited Section */}
      <motion.section
        className="py-16 md:py-24 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSectionHeading
            title="Companies Visited"
            subtitle="Our students have been placed in top companies across various sectors."
          />
          <div className="overflow-hidden relative">
            <div className="company-logos-container animate-scroll">
              {companyLogos.map((company, index) => (
                <div
                  key={index}
                  className="logo-container inline-block mx-2 sm:mx-4 w-32 sm:w-40" // Increased width
                >
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-20 max-w-full object-contain" // Increased height
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <ChatBot />

     
      <WhatsAppIcon />
    </PageTransition>
  );
};

export default HomePage;
