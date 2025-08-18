import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Users, Clock } from 'lucide-react';

import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';

const CoursesPage: React.FC = () => {
  // Sample data for courses
  const allCourses = [
    {
      id: "pharma-analysis",
      title: "Pharmaceutical Analysis",
      description: "A program focused on the analysis and quality control of pharmaceutical products.",
      image: "https://images.unsplash.com/photo-1581092334395-3a9b6a4b7b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "pharmaceutical"
    },
    {
      id: "pharma-bio-tech",
      title: "Pharmaceutical Bio-Technology",
      description: "A program exploring the application of biotechnology in the pharmaceutical industry.",
      image: "https://images.unsplash.com/photo-1581091012184-7c3d3b3c3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      
      category: "pharmaceutical"
    },
    {
      id: "pharma-chemistry",
      title: "Pharmaceutical Chemistry",
      description: "A program focusing on the chemical aspects of drug design and development.",
      image: "https://images.unsplash.com/photo-1581092334395-3a9b6a4b7b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",

      category: "pharmaceutical"
    },
    {
      id: "pharmacology",
      title: "Pharmacology",
      description: "A program dedicated to the study of drug action and its effects on biological systems.",
      image: "https://images.unsplash.com/photo-1581092334395-3a9b6a4b7b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "pharmaceutical"
    },
    {
      id: "pharmaceutics",
      title: "Pharmaceutics",
      description: "A program that focuses on the formulation and delivery of pharmaceutical products.",
      image: "https://images.unsplash.com/photo-1581092334395-3a9b6a4b7b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "pharmaceutical"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter courses based on search term and filters
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero 
        title="Explore Our Courses"
        subtitle="Discover a wide range of undergraduate and postgraduate programs designed to prepare you for a successful career."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        primaryButtonText="Apply Now"
        primaryButtonLink="/admissions"
        secondaryButtonText="Download Brochure"
        secondaryButtonLink="#"
      />

      {/* Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Programs"
            subtitle="Explore our comprehensive range of undergraduate and postgraduate programs designed to prepare you for success."
          />

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search courses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="appearance-none w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white hover:bg-gray-100 transition duration-200"
                    >
                      <option value="all">All Levels</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                    <Clock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white hover:bg-gray-100 transition duration-200"
                    >
                      <option value="all">All Categories</option>
                      <option value="business">Business</option>
                      <option value="technology">Technology</option>
                      <option value="pharmaceutical">Pharmaceutical</option>
                    </select>
                    <Filter className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Cards */}
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <CourseCard 
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  // duration={course.duration}
                  // level={course.level}
                  // students={course.students}
                  // delay={index * 0.1}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Program Structure"
            subtitle="Our programs are designed to provide a balanced mix of theoretical knowledge and practical skills."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Curriculum</h3>
              <p className="text-gray-600 mb-6">
                Our curriculum is designed in consultation with industry experts to ensure that students gain relevant knowledge and skills that are in demand in the job market. The programs include a mix of core courses, electives, and practical projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Core Courses</h4>
                    <p className="text-gray-600">Foundational courses that provide essential knowledge in the field.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Electives</h4>
                    <p className="text-gray-600">Specialized courses that allow students to explore areas of interest.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Practical Projects</h4>
                    <p className="text-gray-600">Hands-on projects that help students apply theoretical knowledge to real-world problems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Internships</h4>
                    <p className="text-gray-600">Opportunities to gain practical experience in the industry.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Students in classroom" 
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Admission Process"
            subtitle="A simple and straightforward process to join our institution."
          />
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application</h3>
              <p className="text-gray-600">
                Fill out the online application form and submit the required documents.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entrance Test</h3>
              <p className="text-gray-600">
                Take the entrance test to assess your aptitude and knowledge.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">
                Attend a personal interview to discuss your goals and aspirations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Admission</h3>
              <p className="text-gray-600">
                Receive your admission letter and complete the enrollment process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Start Your Academic Journey?"
        subtitle="Applications for the 2025-26 academic year are now open. Take the first step towards a successful career."
        primaryButtonText="Apply Now"
        primaryButtonLink="/admissions"
        secondaryButtonText="Contact Admissions"
        secondaryButtonLink="/contact"
      />
      
    </PageTransition>
  );
};

export default CoursesPage;