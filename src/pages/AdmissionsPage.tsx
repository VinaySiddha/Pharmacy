import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import WhatsAppIcon from "../components/WhatsAppIcon";

const AdmissionsPage: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleClosePopup = () => {
    setSelectedPdf(null);
  };

  const handleDownload = (filePath: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || 'file.pdf';
    link.click();
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero 
        title="Admissions Open for 2025-26"
        subtitle="Take the first step towards a successful career. Apply now to join SVIPS."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        primaryButtonText="Apply Now"
        primaryButtonLink="https://sves.org.in/pharmacyadmissionform/"
      />

      {/* Admissions Information Section */}
      <section id="admissions-info" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Admissions Information"
            subtitle="Learn more about the admissions process, eligibility criteria, and important dates."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Admissions" 
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
              <p className="text-gray-600 mb-6">
                At SVIPS, we welcome students from diverse backgrounds. Our eligibility criteria ensure that we select the best candidates who are ready to excel in their chosen fields.
              </p>
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Undergraduate Programs</h4>
                    <p className="text-gray-600">Candidates must have completed their higher secondary education (10+2) with a minimum of 50% marks.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Postgraduate Programs</h4>
                    <p className="text-gray-600">Candidates must have completed their undergraduate degree with a minimum of 55% marks.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* New Sections */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Cutoff Rank */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedPdf('public/uploads/pdfs/EAPCET RANK ANALYSIS – 2024-25.pdf')}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cutoff Ranks</h3>
              <p className="text-gray-600 mb-4">View the previous year's cutoff ranks for different courses and categories, including EAPCET Rank Analysis – 2024-25.</p>
              <div className="flex items-center text-blue-600 hover:text-blue-700">
                <span>View EAPCET Rank Analysis</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </motion.div>

            {/* Intake Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedPdf('public/uploads/pdfs/intake.pdf')}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intake Details</h3>
              <p className="text-gray-600 mb-4">Check the seat availability and distribution across various programs.</p>
              <div className="flex items-center text-blue-600 hover:text-blue-700">
                <span>View Intake Details</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academics Information Section */}
      <section id="academics-info" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Academics Information"
            subtitle="Explore the academic resources and information available for students."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* B.Pharmacy Syllabus */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between cursor-pointer"
                onClick={() => setSelectedPdf('public/uploads/pdfs/bpharmacy-syllabus.pdf')}
              >
                <h3 className="text-xl font-bold text-gray-900">B.Pharmacy Syllabus</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-600 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the container's onClick
                    handleDownload('/documents/bpharmacy-syllabus.pdf');
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.div>

              {/* M.Pharmacy Syllabus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between cursor-pointer"
                onClick={() => setSelectedPdf('public/uploads/pdfs/bpharmacy-syllabus.pdf')}
              >
                <h3 className="text-xl font-bold text-gray-900">M.Pharmacy Syllabus</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-600 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the container's onClick
                    handleDownload('public/uploads/pdfs/M_Pharm.pdf');
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* AU Academic Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedPdf('public/uploads/pdfs/Pharmaceutical Science Academic Calendar 2025-26_250731_191927.pdf')}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">AU Academic Calendar</h3>
              <div className="flex items-center text-blue-600 hover:text-blue-700">
                <span>View</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </motion.div>

            {/* Course Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedPdf('public/uploads/pdfs/COS EDITED.pdf')}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Outcomes</h3>
              <div className="flex items-center text-blue-600 hover:text-blue-700">
                <span>View</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </motion.div>

            {/* Program Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedPdf('public/uploads/pdfs/PROGRAM OUTCOME1.pdf')}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Outcomes</h3>
              <div className="flex items-center text-blue-600 hover:text-blue-700">
                <span>View</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </motion.div>

            {/* Course Files */}
            
          </div>
        </div>
      </section>

      {/* PDF Viewer Popup */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-3/4 relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src={selectedPdf}
              title="PDF Viewer"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Student Admission Section */}
      <section id="admission-form" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Apply For Admission?"
            subtitle="Click the button below to start your application process."
          />
          <div className="text-center">
            <a 
              href="https://sves.org.in/pharmacyadmissionform/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
     
    </PageTransition>
  );
};

export default AdmissionsPage;