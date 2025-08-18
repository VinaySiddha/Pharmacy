import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Award, 
  Users, 
  Target, 
  Lightbulb, 
  Heart, 
  Clock, 
  MapPin,
  X
} from 'lucide-react';

import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import StatsSection from '../components/StatsSection';
import WhatsAppIcon from "../components/WhatsAppIcon";

interface LeadershipMessage {
  title: string;
  name: string;
  role: string;
  message: string[];
  image: string;
}

interface Department {
  name: string;
  hodName: string;
  description: string;
  image: string;
}

const leadershipMessages: LeadershipMessage[] = [
  {
    title: "President's Message",
    name: "Sri Grandhi Satyanarayana",
    role: "President",
    message: [
      "Our President, Sri. Grandhi Satyanarayana has good experience in the education field.",
      "He has been running a school, colleges, and degree colleges in the name of GMR Educational Institutions for the last 16 years."
    ],
    image: "https://www.svips.ac.in/image/president.jpeg"
  },
  {
    title: "Secretary's Message",
    name: "Sri Ch.V.V Subba Rao",
    role: "Secretary",
    message: [
      "Our Secretary & Correspondent, Sri Chalamcharla V.V.Subba Rao is a personality with an enhanced caliber of leadership and assertive skills.",
      "These qualities contribute to the elevation of the institution in a big way.",
      "He revels in shaping the career of the students with his unparalleled vision and mission.",
      "He also has plans to extend his vision and goals across the man-made barriers and wishes to earn a global reputation."
    ],
    image: "https://www.svips.ac.in/image/secretary.JPG"
  },
  {
    title: "Principal's Message",
    name: "Dr. Bhaskara Raju Vatchavai",
    role: "Principal",
    message: [
      "Dr. Bhaskara Raju Vatchavai is working as Principal & Professor at Sri Vasavi Institute of Pharmaceutical Sciences, Tadepalligudem West Godavari District, Andhra Pradesh-534101.",
      "Dr. Bhaskara Raju Vatchavai completed his B.Pharmacy from SRM College of Pharmacy, Chennai and M.Pharmacy from JSS College of Pharmacy OOTY.",
      "Dr. Raju was awarded the degree of Doctor of Philosophy (Ph.D) in Pharmaceutical Sciences in December 2013 by Acharya Nagarjuna University, Guntur, Andhra Pradesh.",
      "He has 17 years of experience in Pharmaceutical Industry, Teaching, and Research activities and has guided 32 postgraduate students.",
      "He has to his credit 30 scientific research papers in reputed indexed National and International journals.",
      "He is Chairperson, Co-Chairperson, and Evaluator for oral and poster presentations in National and International Conferences and Seminars.",
      "He is a Life Member of various professional bodies, including the Association of Pharmaceutical Teachers of India."
    ],
    image: "public/uploads/images/principalimage.jpeg" // Updated image URL
  }
];

const departments: Department[] = [
  {
    name: "Department of Pharmaceutics",
    hodName: "Dr. Sarah Johnson",
    description: "The Department of Pharmaceutics focuses on drug formulation and delivery systems...",
    image: "https://example.com/pharmaceutics.jpg"
  },
  // Add other departments...
];

const InfoModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  image?: string;
}> = ({ isOpen, onClose, title, content, image }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-lg max-w-4xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          {image && (
            <div className="h-96 overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-md"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">{title}</h3>
          <div className="prose max-w-none text-lg">{content}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const timeline = [
  {
    year: "2005",
    title: "Foundation",
    description: "Sri Vasavi Institute of Pharmaceutical Sciences (SVIPS) was established to provide top-notch pharmacy education."
  },
  {
    year: "2010",
    title: "Infrastructure Expansion",
    description: "Expanded the campus with modern laboratories, library, and audiovisual classrooms."
  },
  {
    year: "2015",
    title: "Top 10 Ranking",
    description: "Ranked among the top 10 pharmacy institutions in Andhra Pradesh."
  },
  {
    year: "2020",
    title: "ISO Certification",
    description: "Achieved ISO-14001-2015, ISO-50001-2018, and ISO-21001-2018 certifications."
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Implemented e-cap, digital updates for exams, events, and feedback on the college website."
  }
];

const AboutPage: React.FC = () => {
  const [selectedModal, setSelectedModal] = useState<{
    title: string;
    content: React.ReactNode;
    image?: string;
  } | null>(null);

  return (
    <PageTransition>
      {/* About Us Banner */}
      <div className="w-full h-[200px] sm:h-[250px] md:h-[400px] relative overflow-hidden">
        <img 
          src="public/uploads/images/aboutus.png"
          alt="About SVIPS"
          className="w-full h-full object-cover object-center scale-100 sm:scale-[1.02]"
          loading="eager"
          style={{
            maxHeight: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center">About SVIPS</h1>
        </div>
      </div>

      {/* Leadership & Governance Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Leadership & Governance"
            subtitle="Meet the visionaries leading our institution"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Leadership Messages */}
            {leadershipMessages.map((message, index) => (
              <motion.div
                key={message.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }} // Removed `once: true`
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
                onClick={() => setSelectedModal({
                  title: message.title,
                  content: (
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <img 
                          src={message.image} 
                          alt={message.name}
                          className="w-24 h-24 rounded-full object-cover object-top border-4 border-white shadow-lg"
                        />
                        <div className="ml-6">
                          <h4 className="text-2xl font-bold text-gray-900">{message.name}</h4>
                          <p className="text-lg text-gray-600">{message.role}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {message.message.map((line, i) => (
                          <div key={i} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <p className="text-gray-600 text-lg text-justify">{line}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                  image: message.image
                })}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={message.image} 
                    alt={message.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{message.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{message.name} - {message.role}</p>
                  <p className="text-gray-600 line-clamp-3">{message.message[0]}</p>
                  <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                    Read full message →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Quality Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedModal({
                title: "Quality Policy",
                content: (
                  <div className="space-y-4">
                    <p className="text-justify">
                      At Sri Vasavi Institute of Pharmaceutical Sciences, we are dedicated to upholding the highest standards of quality in all aspects of our educational and research endeavors. Our commitment to excellence permeates every facet of our institution, guiding our actions and decisions to ensure the best possible outcomes for our students, faculty, and stakeholders.
                    </p>
                    <h4 className="text-lg font-bold text-gray-900">Our Quality Policy is founded on the following principles:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li className="text-justify">
                        <strong>Academic Excellence:</strong> We strive to provide a rigorous academic environment that fosters intellectual growth, critical thinking, and professional development among our students. Our faculty members are dedicated to delivering quality education through innovative teaching methodologies and comprehensive curriculum.
                      </li>
                      <li>
                        <strong>Research Integrity:</strong> We uphold the principles of scientific integrity and ethical conduct in all research activities conducted within our institution. Our research endeavors are characterized by transparency, reproducibility, and adherence to the highest standards of scholarly rigor.
                      </li>
                      <li>
                        <strong>Continuous Improvement:</strong> We are committed to continuous improvement in all aspects of our operations. Through ongoing assessment, evaluation, and feedback mechanisms, we identify areas for enhancement and implement proactive measures to optimize our educational programs, facilities, and support services.
                      </li>
                      <li>
                        <strong>Compliance and Accreditation:</strong> We adhere to all relevant regulatory requirements and accreditation standards governing pharmaceutical education and research. Our programs undergo rigorous evaluation to ensure alignment with industry best practices and to maintain accreditation from recognized accrediting bodies.
                      </li>
                      <li>
                        <strong>Stakeholder Engagement:</strong> We actively engage with our stakeholders, including students, faculty, alumni, industry partners, and the community, to solicit feedback, foster collaboration, and address their evolving needs and expectations. By listening attentively and responding thoughtfully, we cultivate strong relationships built on trust and mutual respect.
                      </li>
                      <li>
                        <strong>Safety and Well-being:</strong> We prioritize the safety, health, and well-being of our students, faculty, staff, and visitors. We maintain a safe and conducive learning environment, promote wellness initiatives, and adhere to established health and safety protocols to mitigate risks and ensure the welfare of our community members.
                      </li>
                    </ul>
                    <p>
                      Through our unwavering commitment to quality, we endeavor to empower our students to become competent, compassionate, and ethical healthcare professionals who contribute meaningfully to society and advance the field of pharmaceutical sciences.
                    </p>
                    <p className="italic">
                      *Note: Our Quality Policy is subject to periodic review and updates to reflect our ongoing commitment to quality improvement.*
                    </p>
                  </div>
                ),
                image: "https://svips.ac.in/images/quality.jpg"
              })}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://svips.ac.in/images/quality.jpg"
                  alt="Quality Policy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Policy</h3>
                <p className="text-gray-600 line-clamp-3">Click to view our quality policy and commitment to excellence.</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                  Read more →
                </button>
              </div>
            </motion.div>

            {/* Governing Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedModal({
                title: "Governing Body",
                content: (
                  <div className="space-y-4">
                    <p className="text-justify">
                      Board of governance is a deciding component of organizational effectiveness and a crucial part of the functioning life of organizations. Good governance ensures that objectives are realized, resources are well managed, and the interests of stakeholders are protected and reflected in key decisions.
                    </p>
                    <p className="text-justify">
                      The following is the Board of Governance (BOG) of Sri Vasavi Institute Of Pharmaceutical Sciences:
                    </p>
                    <table className="table-auto w-full border-collapse border border-gray-300 text-left text-gray-600">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2">S.No</th>
                          <th className="border border-gray-300 px-4 py-2">Name</th>
                          <th className="border border-gray-300 px-4 py-2">Designation</th>
                          <th className="border border-gray-300 px-4 py-2">Position</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">1</td>
                          <td className="border border-gray-300 px-4 py-2">Sri O.P.Goenka</td>
                          <td className="border border-gray-300 px-4 py-2">Technical director, FFF Ltd., Tadepalligudem</td>
                          <td className="border border-gray-300 px-4 py-2">Chairman</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">2</td>
                          <td className="border border-gray-300 px-4 py-2">Sri Ch.S.N.Murthy</td>
                          <td className="border border-gray-300 px-4 py-2">Vice President, Vasavi educational society</td>
                          <td className="border border-gray-300 px-4 py-2">Member</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">3</td>
                          <td className="border border-gray-300 px-4 py-2">Sri. Ch.V.V.Subba Rao</td>
                          <td className="border border-gray-300 px-4 py-2">Secretary and Correspondent, Vasavi educational society</td>
                          <td className="border border-gray-300 px-4 py-2">Member</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">4</td>
                          <td className="border border-gray-300 px-4 py-2">Sri. P.Venkateswara Rao</td>
                          <td className="border border-gray-300 px-4 py-2">Joint Secretary, Vasavi educational society</td>
                          <td className="border border-gray-300 px-4 py-2">Member</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">5</td>
                          <td className="border border-gray-300 px-4 py-2">Sri. P.Bala Kasaiah</td>
                          <td className="border border-gray-300 px-4 py-2">Treasurer, Vasavi educational society</td>
                          <td className="border border-gray-300 px-4 py-2">Member</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">6</td>
                          <td className="border border-gray-300 px-4 py-2">Dr. V.Bhaskara Raju</td>
                          <td className="border border-gray-300 px-4 py-2">Principal & HOD, Pharmaceutical Analysis, SVIPS</td>
                          <td className="border border-gray-300 px-4 py-2">Member Secretary</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2">Dr. Y.B.Manjulatha</td>
                          <td className="border border-gray-300 px-4 py-2">HOD, Pharmaceutical Biotechnology, SVIPS</td>
                          <td className="border border-gray-300 px-4 py-2">Member</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">8</td>
                          <td className="border border-gray-300 px-4 py-2">The Regional Officer</td>
                          <td className="border border-gray-300 px-4 py-2">To be nominated</td>
                          <td className="border border-gray-300 px-4 py-2">Member</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">9</td>
                          <td className="border border-gray-300 px-4 py-2">University Nominee</td>
                          <td className="border border-gray-300 px-4 py-2">To be nominated</td>
                          <td className="border border-gray-300 px-4 py-2">Member</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ),
                image: "https://assets.6sigma.com/wp-content/uploads/2017/06/governing-body.jpg?x97426"
              })}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.6sigma.com/wp-content/uploads/2017/06/governing-body.jpg?x97426"
                  alt="Governing Body"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Governing Body</h3>
                <p className="text-gray-600 line-clamp-3">Learn about our governing body and leadership structure.</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                  Read more →
                </button>
              </div>
            </motion.div>

            {/* Organogram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedModal({
                title: "Organogram",
                content: (
                  <div className="space-y-4">
                    <p>
                      View our organizational structure and hierarchy below:
                    </p>
                    <div className="h-96 overflow-y-auto border border-gray-300 rounded-lg">
                      <img 
                        src="https://svips.ac.in/image/organogram.png" 
                        alt="Organogram" 
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                ),
                image: null // No header image for this modal
              })}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://img3.stockfresh.com/files/s/simo988/m/83/4930036_stock-vector-business-hierarchy-structure.jpg"
                  alt="Organogram"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Organogram</h3>
                <p className="text-gray-600 line-clamp-3">View our organizational structure.</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                  Read more →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedModal && (
          <InfoModal
            isOpen={!!selectedModal}
            onClose={() => setSelectedModal(null)}
            title={selectedModal.title}
            content={selectedModal.content}
            image={selectedModal.image}
          />
        )}
      </AnimatePresence>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <p className="text-gray-600 text-justify mb-6">
                At Sri Vasavi Institute of Pharmaceutical Sciences, we are committed to providing a transformative educational experience that prepares students for successful careers and meaningful lives. Our institution stands on the pillars of academic excellence, innovation, and ethical values.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-gray-900">Our Mission</h4>
                    <p className="text-gray-600 text-justify">  <li>Provide quality pharmaceutical education by collaborating with research institutes and industries.</li>
                    <li>Nurture team spirit, professional skills and ethics among the students.</li>

      <li>Establish state-of-the-art R&D facilities and incubation centers.</li></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Lightbulb className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-gray-900">Our Vision</h4>
                    <p className="text-gray-600"><li>To become an eminent institute of Pharmaceutical Sciences catering to the global health care needs.</li></p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlojiriOuI0Y2aSdBF6BklEe18vUxD5mobA&s" 
                alt="Vision and Mission" 
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Core Values"
            subtitle="The principles that guide our institution and shape our approach to education."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 text-justify">
                We strive for excellence in all aspects of education, research, and administration, setting high standards and continuously improving.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards, fostering honesty, transparency, and accountability in all our actions and decisions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We embrace diversity and create an inclusive environment where every individual is respected, valued, and given equal opportunities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We encourage creative thinking, innovation, and entrepreneurship, adapting to changing times while maintaining our core values.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Responsibility</h3>
              <p className="text-gray-600">
                We are committed to making a positive impact on society through education, research, and community service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student-Centered</h3>
              <p className="text-gray-600">
                We place students at the center of everything we do, focusing on their holistic development and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Journey"
            subtitle="Tracing the evolution and growth of SVIPS over the years."
          />
          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px" }} // Removed `once: true`
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                    <div className="text-3xl font-bold text-blue-600">{item.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Campus"
            subtitle="Explore our state-of-the-art facilities designed to provide an optimal learning environment."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-gray-600 text-justify">
                Our campus spans over 25 acres of lush greenery, providing a serene environment conducive to learning and growth. The campus features modern infrastructure, state-of-the-art facilities, and a vibrant community atmosphere.
              </p>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Modern Classrooms</h4>
                  <p className="text-gray-600">Smart classrooms equipped with the latest technology for an enhanced learning experience.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Well-Stocked Library</h4>
                  <p className="text-gray-600">A vast collection of books, journals, and digital resources to support research and learning.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Computer Labs</h4>
                  <p className="text-gray-600">Advanced computer labs with the latest software and hardware for practical learning.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Conveniently located in the heart of the city, easily accessible by public transportation.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }} // Removed `once: true`
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="public/uploads/images/DSC01334.JPG" 
                  alt="Campus Building" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
 
    </PageTransition>
  );
};

export default AboutPage;