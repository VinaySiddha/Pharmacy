interface CommitteeData {
    [key: string]: {
      title: string;
      description: string;
      responsibilities: string[];
      members: Array<{
        id: number;
        name: string;
        designation: string;
        profile: string;
      }>;
    };
  }
  
  export const committeeData: CommitteeData = {
    "anti-ragging": {
      title: "Anti-Ragging Committee",
      description: "Sri Vasavi Institute of Pharmaceutical Sciences has taken various precautions as per AICTE Norms to prevent ragging and ensure 100% no-ragging.",
      responsibilities: [
        "Regularly monitor the spots where any instances of ragging are likely to occur",
        "Conduct regular inspections to areas where ragging is likely to occur",
        "If any incidents are observed, promptly assess the situation, take necessary action, and inform the council/cell using the provided form",
        "Ensure that anti-ragging instructions are displayed prominently in high-traffic areas"
      ],
      members: [
  { id: 1, name: "Dr. V. Bhaskara Raju", designation: "Principal", profile: "Chairman" },
  { id: 2, name: "Dr. Y. B. Manju Latha", designation: "Professor & HOD, Department of Pharmaceutical Biotechnology", profile: "Member" },
  { id: 3, name: "Mr. Dhabal Kumar Satapathy", designation: "Associate Professor, Department of Pharmacology", profile: "Member Secretary" },
  { id: 4, name: "Mr. P. Rambabu", designation: "Associate Professor, Department of Pharmaceutics", profile: "Member" },
  { id: 5, name: "Mrs. D. Bindu", designation: "Associate Professor, Department of Pharmaceutical Chemistry", profile: "Member" },
  { id: 6, name: "Dr. T. Yamini Kumari", designation: "Associate Professor & HOD, Department of Pharmaceutical Analysis", profile: "Member" },
  { id: 7, name: "Mr. S. Sateesh", designation: "Physical Director", profile: "Member" },
  { id: 8, name: "Sri K. Ranga Rao", designation: "Dy. Warden, Boys Hostels", profile: "Member" },
  { id: 9, name: "Smt. M. Bhavani", designation: "Dy. Warden, Girls Hostels", profile: "Member" },
  { id: 10, name: "Station House Officer", designation: "Rural Police Station, Tadepalligudem", profile: "Member" },
  { id: 11, name: "Sri Y. Subba Rao", designation: "Reporter, Prajashakthi, TPG", profile: "Member" },
  { id: 12, name: "Ms. K. Hadassah", designation: "IV Year 621185901034", profile: "Student member" },
  { id: 13, name: "Mr. K. Sujan Kumar", designation: "IV Year 621185901035", profile: "Student member" }
]
    },
    'iqac': {
      title: 'Internal Quality Assurance Cell (IQAC)',
      description: 'The IQAC is responsible for developing a system for conscious, consistent and catalytic improvement in the overall performance of the institution.',
      responsibilities: [
        "Development and application of quality benchmarks for various academic and administrative activities",
        "Facilitating the creation of a learner-centric environment conducive to quality education",
        "Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes",
        "Documentation of the various programmes/activities leading to quality improvement"
      ],
      members: [
        { id: 1, name: "Dr. V. Bhaskara Raju", designation: "Professor & Principal", profile: "Chairman" },
        { id: 2, name: "Sri. P. Bala Kasaiah", designation: "Treasurer, Vasavi educational society.", profile: "Management Representative" },
        { id: 3, name: "Dr. Y. Rajendra Prasad", designation: "Principal, University College of Pharmaceutical Sciences, AU", profile: "External member" },
        { id: 4, name: "Dr. P. Narayana Raju", designation: "Professor", profile: "Member" },
        { id: 5, name: "Dr. M. Srinivasu", designation: "Associate professor", profile: "Member" },
        { id: 6, name: "Dr. Y. B. Manjulatha", designation: "Associate professor", profile: "Member" },
        { id: 7, name: "R. Vijay Bhaskara Reddy", designation: "CSO, Therallen Pharma, Hyderabad.", profile: "Industrial Nominee" },
        { id: 8, name: "Mr. G. Madana Gopal", designation: "Senior Scientist, Eugia Pharmaceuticals, Hyderabad", profile: "Nominee from Alumni" },
        { id: 9, name: "Ms. Battula J V N S Kedareswari", designation: "Student", profile: "Student member" },
        { id: 10, name: "Mr. Chilintala Naveen", designation: "Student", profile: "Student member" },
        { id: 11, name: "Ms. P. Susmitha", designation: "Student", profile: "Student member" },
      ]
    },
    'anti-discrimination': {
      title: 'Anti Discrimination Cell',
      description: 'The Anti Discrimination Cell ensures equal opportunities and fair treatment for all students and staff members regardless of their background.',
      responsibilities: [
        "Monitor and prevent any form of discrimination within the institution",
        "Handle complaints related to discrimination promptly and effectively",
        "Organize awareness programs about equality and diversity",
        "Ensure compliance with anti-discrimination policies"
      ],
      members: [
  { id: 1, name: "Mr. K. S. Sumanth", designation: "Chairperson - OBC Welfare", profile: "Chairman" },
  { id: 2, name: "Mr. J. N. B. Indu Sekhar", designation: "Assistant Professor, Department of Pharmacognosy", profile: "Member Secretary" },
  { id: 3, name: "Mr. Dhabal Kumar Satapathy", designation: "Associate Professor, Department of Pharmacology", profile: "Member" },
  { id: 4, name: "Ms. M. Sharmila", designation: "Associate Professor, Department of Pharmaceutical Chemistry", profile: "Member" },
  { id: 5, name: "Mr. M. Ajay Rathnam", designation: "Assistant Professor, Department of Pharmaceutics", profile: "Member" },
  { id: 6, name: "Mr. B. Lakshmanudu", designation: "IV Year 621185901007", profile: "Student member" },
  { id: 7, name: "Mr. Md. Shaman", designation: "IV Year 621185901061", profile: "Student member" },
  { id: 8, name: "Ms. S. Christina", designation: "IV Year 621185901083", profile: "Student member" },
  { id: 9, name: "Ms. B. Amrutha Varshi", designation: "III Year 622185901009", profile: "Student member" },
  { id: 10, name: "Mr. G. Bhagath", designation: "III Year 622185901033", profile: "Student member" },
  { id: 11, name: "Mr. Sk. Nagur Meer", designation: "III Year 622185901090", profile: "Student member" },
  { id: 12, name: "Ms. M. Vandana", designation: "II Year 623185901047", profile: "Student member" },
  { id: 13, name: "Ms. Sk. Hafeeza", designation: "II Year 623185901068", profile: "Student member" },
  { id: 14, name: "Ms. Sk. Munisha Begum", designation: "II Year 623185901069", profile: "Student member" },
  { id: 15, name: "Ms. B. Shiny", designation: "I Year 624185901014", profile: "Student member" },
  { id: 16, name: "Ms. Md. Ayesha Siddiqha", designation: "I Year 624185901055", profile: "Student member" },
  { id: 17, name: "Mr. P. Moses Shanthi Raju", designation: "I Year 624185901056", profile: "Student member" }
]
    },
    'grd': {
      title: 'GRD Committee',
      description: 'The Grievance Redressal and Development Committee addresses student and staff concerns while promoting institutional development.',
      responsibilities: [
        "Address grievances from students and staff members",
        "Implement solutions for reported issues",
        "Monitor the effectiveness of grievance resolution",
        "Suggest improvements in institutional processes"
      ],
      members: [
  { id: 1, name: "Dr. Y. B. Manjulatha", designation: "Professor and HOD, Department of Pharmaceutical Biotechnology", profile: "Chairman" },
  { id: 2, name: "Mrs. A. Durga Pallavi", designation: "Associate Professor, Department of Pharmaceutics", profile: "Convenor" },
  { id: 3, name: "Mrs. B. Vijaya Ambika Durga", designation: "Associate Professor, Department of Pharmacology", profile: "Member" },
  { id: 4, name: "Mrs. M. Sharmila", designation: "Associate Professor, Department of Pharmaceutical Chemistry", profile: "Member" },
  { id: 5, name: "Mrs. R. Satyavathi", designation: "Non teaching representative", profile: "Non teaching representative" },
  { id: 6, name: "Ms. B. Soni Sai Sri", designation: "IV Year 621185901006", profile: "Student member" },
  { id: 7, name: "Ms. P. Varshini Priya", designation: "IV Year 621185901072", profile: "Student member" },
  { id: 8, name: "Ms. D. L. Naga Sai Sri", designation: "III Year 622185901027", profile: "Student member" },
  { id: 9, name: "Ms. P. Swetha", designation: "III Year 622185901076", profile: "Student member" },
  { id: 10, name: "Ms. K. Pavani", designation: "II Year 623185901041", profile: "Student member" },
  { id: 11, name: "Ms. T. N. S. K. Nandini", designation: "II Year 623185901079", profile: "Student member" },
  { id: 12, name: "Ms. P. Lakshmi Ananya", designation: "I Year 623185901059", profile: "Student member" },
  { id: 13, name: "Ms. P. Bhavitha", designation: "I Year 623185901060", profile: "Student member" }
]
    },
    'library': {
      title: 'Library Committee',
      description: 'The Library Committee oversees the development and management of library resources and services.',
      responsibilities: [
        "Plan and manage library resources",
        "Update library policies and procedures",
        "Recommend new acquisitions and subscriptions",
        "Ensure optimal utilization of library facilities"
      ],
      members: [
  { id: 1, name: "Mr. K. S. Sumanth", designation: "Associate Professor, Department of Pharmaceutical Analysis", profile: "Chairman" },
  { id: 2, name: "Dr. Y. B. Manjulatha", designation: "Professor and HOD, Department of Pharmaceutical Biotechnology", profile: "Member" },
  { id: 3, name: "Mrs. M. Sharmila", designation: "Associate Professor, Department of Pharmaceutical Chemistry", profile: "Member" },
  { id: 4, name: "Mrs. D. Bindu", designation: "Associate Professor, Department of Pharmaceutical Chemistry", profile: "Member" },
  { id: 5, name: "Mrs. Y. Vijaya Lakshmi", designation: "Librarian", profile: "Member Secretary" },
  { id: 6, name: "Mr. K. Srihari Raju", designation: "I Year 624185901041", profile: "Student member" },
  { id: 7, name: "Ms. M. Bhavya Durga", designation: "I Year 624185901045", profile: "Student member" },
  { id: 8, name: "Ms. K. Nandini", designation: "II Year 623185901034", profile: "Student member" },
  { id: 9, name: "Ms. P. Subhasri", designation: "II Year 623185901055", profile: "Student member" },
  { id: 10, name: "Ms. A. Devi Prasanna", designation: "III Year 622185901001", profile: "Student member" },
  { id: 11, name: "Mr. M. Bhanu Prakash", designation: "III Year 620185901066", profile: "Student member" }
]
    },
    'animal-ethical': {
      title: 'Institutional Animal Ethical Committee',
      description: 'The committee ensures ethical treatment of animals in research and educational activities.',
      responsibilities: [
        "Review and approve animal research protocols",
        "Monitor animal welfare in laboratories",
        "Ensure compliance with ethical guidelines",
        "Conduct regular inspections of animal facilities"
      ],
      members: [
  { id: 1, name: "Dr. Gangireddy Ramanaiah", designation: "Main Nominee", profile: "Member" },
  { id: 2, name: "Dr. Ghanta Vijaya Kumar", designation: "Link Nominee", profile: "Member" },
  { id: 3, name: "Dr. Konda Ravi Kumar", designation: "Scientist from outside of the Institute", profile: "Member" },
  { id: 4, name: "Dr. Mahendra Pratap Singh Tomar", designation: "Socially aware Nominee", profile: "Member" },
  { id: 5, name: "Dr. P. Narayana Raju", designation: "Scientist from different biological discipline", profile: "Chairman" },
  { id: 6, name: "Dr. Bhaskara Raju Vatchavai", designation: "Member Secretary", profile: "Member Secretary" },
  { id: 7, name: "Dr. M. Srinivasu", designation: "Biological Scientist", profile: "Member" },
  { id: 8, name: "Dr. Y. B. Manjulatha", designation: "Scientist from different biological discipline", profile: "Member" },
  { id: 9, name: "Mr. D. K. Satapathy", designation: "Scientist in-charge of animal house facility", profile: "Member" },
  { id: 10, name: "Dr. M. Abhishek", designation: "Veterinarian", profile: "Member" }
]
    },
    'women-empowerment': {
      title: 'Women Empowerment Cell',
      description: 'The Women Empowerment Cell works towards creating an environment of gender equality and addressing concerns of female students and staff.',
      responsibilities: [
        "Promote gender sensitivity in the college",
        "Organize workshops and seminars on women empowerment",
        "Address complaints regarding harassment or discrimination",
        "Provide counseling and support services"
      ],
      members: [
  { id: 1, name: "Dr. Y. B. Manjulatha", designation: "Professor & HOD, Department of Pharmaceutical Biotechnology", profile: "Chairman" },
  { id: 2, name: "Mrs. B. Vijaya Ambica Durga", designation: "Associate Professor, Department of Pharmacology", profile: "Member" },
  { id: 3, name: "Mrs. M. Sharmila", designation: "Associate Professor, Department of Pharmaceutical Chemistry", profile: "Member Secretary" },
  { id: 4, name: "Mrs. D. Bindhu", designation: "Associate Professor, Department of Pharmaceutical Chemistry", profile: "Member" },
  { id: 5, name: "Ms. P. Esther", designation: "Assistant Professor, Department of Pharmaceutics", profile: "Member" },
  { id: 6, name: "Mrs. A. Durga Pallavi", designation: "Associate Professor, Department of Pharmaceutics", profile: "Member" },
  { id: 7, name: "Mrs. B. Pallavi", designation: "Assistant Professor, Department of Pharmaceutical Analysis", profile: "Member" },
  { id: 8, name: "Ms. Kadali Anusha", designation: "IV Year 621185901033", profile: "Student member" },
  { id: 9, name: "Ms. Karinki Mounika", designation: "IV Year 621185901038", profile: "Student member" },
  { id: 10, name: "Ms. Goda B. Ahalya Sindhu", designation: "III Year 622185901034", profile: "Student member" },
  { id: 11, name: "Ms. Jujjavarapu Saritha", designation: "III Year 622185901044", profile: "Student member" },
  { id: 12, name: "Ms. Bonthu Prathima", designation: "II Year 623185901011", profile: "Student member" },
  { id: 13, name: "Ms. A. V. N. Tirumala Sneha", designation: "I Year 624185901003", profile: "Student member" }
]
    },
    'entrepreneurship': {
      title: 'Entrepreneurship Cell',
      description: 'The E-Cell promotes entrepreneurial spirit among students and provides support for startup initiatives.',
      responsibilities: [
        "Organize entrepreneurship workshops and seminars",
        "Facilitate mentorship programs",
        "Support student startups",
        "Coordinate with industry partners"
      ],
      members: [
  { id: 1, name: "Mr. P. Rambabu", designation: "Associate Professor, Department of Pharmaceutics", profile: "Chairman" },
  { id: 2, name: "Dr. P. Narayana Raju", designation: "Professor and HOD, Department of Pharmaceutics", profile: "Member" },
  { id: 3, name: "Dr. Y. B. Manjulatha", designation: "Professor, Department of Pharmaceutical Biotechnology", profile: "Member Secretary" },
  { id: 4, name: "Mr. K. S. Sumanth", designation: "Associate Professor, Department of Pharmaceutical Analysis", profile: "Member" },
  { id: 5, name: "Mr. P. Srinu", designation: "Associate Professor, Department of Pharmacology", profile: "Member" },
  { id: 6, name: "Mr. M. Ajay Ratnam", designation: "Assistant Professor, Department of Pharmaceutics", profile: "Member" },
  { id: 7, name: "Ms. A. D. Pallavi", designation: "Associate Professor, Department of Pharmaceutics", profile: "Member" },
  { id: 8, name: "Ms. B. Vijaya Ambika Durga", designation: "Associate Professor, Department of Pharmacology", profile: "Member" },
  { id: 9, name: "Mr. Ch. Anil Krishna", designation: "IV Year 621185901012", profile: "Student member" },
  { id: 10, name: "Ms. P. Satwika Devi", designation: "III Year 622185901083", profile: "Student member" },
  { id: 11, name: "Ms. G. Sri Satya Chaitanya", designation: "II Year 623185901025", profile: "Student member" },
  { id: 12, name: "Ms. Kollu Lavanya", designation: "I Year 624185901037", profile: "Student member" }
]

    },
    'alumni': {
      title: 'Alumni Association',
      description: 'The Alumni Association maintains connections with graduates and facilitates their continued involvement with the institution.',
      responsibilities: [
        "Maintain alumni database",
        "Organize alumni meets and events",
        "Facilitate alumni contributions to development",
        "Create networking opportunities"
      ],
      members: [
        { id: 1, name: "Mr. P. Rambabu", designation: "Assoc. Professor, Department of Pharmaceutics", profile: "Chairman" },
        { id: 2, name: "Dr. X. Antro Jennie", designation: "Professor, Department of Pharmaceutical Chemistry", profile: "Member Secretary" },
        { id: 3, name: "Dr. M. Srinivasu", designation: "Professor & HoD, Department of Pharmacology", profile: "Member Secretary" },
        { id: 4, name: "Mrs. B. Vijaya Ambika Durga", designation: "Assoc. Professor, Department of Pharmacology", profile: "Member" },
        { id: 5, name: "Mr. P. Esther", designation: "Assoc. Professor, Department of Pharmaceutics", profile: "Member" },
        {id: 6, name: "Mrs. B. Pallavi", designation: "Asst. Professor, Department of Pharmaceutical Analysis", profile: "Member" },
        { id: 7, name: "Mrs. K. Kalyani", designation: "Assoc. Professor, Department of Pharmaceutical Analysis", profile: "Member" },
        { id: 8, name: "Mr. J. N. B Indu Sekhar", designation: "Asst. Professor, Department of Pharmacology", profile: "Member" },        
        { id: 9, name: "Ms. V. Sri Soumya", designation: "Assoc. Professor, Department of Pharmacology", profile: "Member" },
        { id: 10, name: "Mrs. T. Yamini Kumari", designation: "Assoc. Professor & HoD, Department of Pharmaceutical Analysis", profile: "Member" },
        { id: 11, name: "Mr. M. Raju", designation: "Student", profile: "Student Member" },
        { id: 12, name: "Ms. P. Anusha", designation: "Student", profile: "Student Member" },
        { id: 13, name: "Ms. Ch. Maneesha", designation: "Student", profile: "Student Member" },
        { id: 14, name: "Ms. D. Mounika", designation: "Student", profile: "Student Member" },
        { id: 15, name: "Mr, Ch. Sudheer", designation: "Student", profile: "Student Member" },
        { id: 16, name: "Ms. P. Manimala", designation: "Student", profile: "Student Member" },
        { id: 17, name: "Ms. D. Pushpanjali", designation: "Student", profile: "Student Member" },
        { id: 18, name: "Ms. P. Lavanya", designation: "Student", profile: "Student Member" },
      ]

    },
    'st-sc-welfare': {
      title: 'SC/ST Welfare Cell',
      description: 'The SC/ST Welfare Cell ensures equal opportunities and support for students from scheduled categories and promotes their educational development.',
      responsibilities: [
        "Implement welfare schemes for SC/ST students",
        "Monitor scholarship distribution",
        "Address concerns of SC/ST students",
        "Promote inclusive education and equal opportunities"
      ],
      members: [
        { id: 1, name: "Mr. K.S. Sumanth", designation: "Assoc. Professor, Department of Pharmaceutical Analysis", profile: "Chairperson" },
        { id: 2, name: "Ms. M. Sharmila", designation: "Assoc. Professor, Department of Pharmaceutical Chemistry", profile: "Member" },
        { id: 3, name: "Mr. J.N.B. Indu Sekhar", designation: "Asst. Professor, Department of Pharmacognosy", profile: "Member Secretary" },
        { id: 4, name: "Mr. M. Ajay Rathnam", designation: "Asst. Professor, Department of Pharmaceutics", profile: "Member" },
        { id: 5, name: "Ms. G. Mercy", designation: "IV Year 620185901033", profile: "Student member" },
        { id: 6, name: "Mr. Bhukya Ramudu", designation: "IV Year 620185901012", profile: "Student member" }
      ]
    },
    'minority': {
      title: 'Minority Cell',
      description: 'The Minority Cell safeguards the interests of minority students and promotes their educational development.',
      responsibilities: [
        "Implement minority welfare schemes",
        "Address concerns of minority students",
        "Monitor scholarship programs",
        "Promote inclusive education"
      ],
      members: [
        { id: 1, name: "Dr. Y. B. Manjulatha", designation: "Professor & HOD, Department of Pharmaceutical Biotechnology", profile: "Chairperson" },
        { id: 2, name: "Mr. J.N.B. Indu Sekhar", designation: "Asst. Professor, Department of Pharmacognosy", profile: "Member Secretary"},
        { id: 3, name: "Mr. M. Sharmila", designation: "Assoc. Professor, Department of Pharmacetical Chemistry", profile: "Member Secretary"},
        { id: 4, name: "Mr. M. Ajay Rathnam", designation: "Asst. Professor, Department of Pharmaceutics", profile: "Member" },
        { id: 5, name: "Ms. Md. Ahmadunnisa", designation: "Student", profile: "Student member" },
        { id: 6, name: "Mr. Md. Shaman", designation: "Student", profile: "Student member" },
        { id: 7, name: "Mr. Sk. Nagur Meer", designation: "Student", profile: "Student member" },
        { id: 8, name: "Ms. Sk. Hafeeza", designation: "Student", profile: "Student member" },
        { id: 9, name: "Ms. Sk. Noorsaba", designation: "Student", profile: "Student member" },
        { id: 10, name: "Mr. Md. Karima", designation: "Student", profile: "Student member" },
        { id: 11, name: "Ms. Md. Ruvaida", designation: "Student", profile: "Student member" },
        { id: 12, name: "Ms. Md. Ayesha Siddiaha", designation: "Student", profile: "Student member" }
        
      ]
    },
    'student-mentoring': {
      title: 'Students Mentoring Cell',
      description: 'The Students Mentoring Cell provides guidance and support to students for their academic and personal development.',
      responsibilities: [
        "Implement mentoring programs",
        "Train faculty mentors",
        "Monitor mentoring activities",
        "Evaluate mentoring effectiveness"
      ],
      members: [
  { id: 1, name: "Mr. K. S. Sumanth", designation: "Associate Professor, Department of Pharmaceutical Analysis", profile: "Chairman" },
  { id: 2, name: "Dr. P. Narayana Raju", designation: "Professor & HOD, Department of Pharmaceutics", profile: "Member Secretary" },
  { id: 3, name: "Dr. M. Srinivasu", designation: "Professor & HOD, Department of Pharmacology", profile: "Member" },
  { id: 4, name: "Mr. D. K. Satapathy", designation: "Associate Professor, Department of Pharmacology", profile: "Member" },
  { id: 5, name: "Ms. D. Bindu", designation: "Associate Professor, Department of Pharmaceutical Chemistry", profile: "Member" },
  { id: 6, name: "Mr. P. Srinu", designation: "Associate Professor, Department of Pharmacology", profile: "Member" },
  { id: 7, name: "Ms. P. Esther", designation: "Assistant Professor, Department of Pharmaceutics", profile: "Member" },
  { id: 8, name: "Mrs. B. Pallavi", designation: "Assistant Professor, Department of Pharmaceutical Analysis", profile: "Member" }
]
    },
    'examination': {
      title: 'Examination Cell',
      description: 'The Examination Cell manages all aspects of student evaluation and examination processes.',
      responsibilities: [
        "Conduct examinations",
        "Maintain examination records",
        "Ensure fair evaluation",
        "Handle examination grievances"
      ],
      members: [
        { id: 1, name: "Dr. V. Bhaskara Raju", designation: "Principal", profile: "Chairperson" },
        { id: 2, name: "Mr. P. Rambabu", designation: "Assoc. Professor, Department of Pharmaceutics", profile: "Asst. Chief Superintendent" },
        { id: 3, name: "Mrs. K. Kalyani", designation: "Assoc. Professor, Department of Pharmaceutics", profile: "Asst. Chief Superintendent" },
        { id: 4, name: "Mr. D. K. Satapathy", designation: "Asst. Professor, Department of Pharmacology", profile: "Member" },
        { id: 5, name: "Mrs. D. Bindu", designation: "Asst. Professor, Department of Pharmaceutical Chemistry", profile: "Member" }
      ]
    },
    'r-and-d': {
      title: 'R&D Cell',
      description: 'The Research and Development Cell promotes and coordinates research activities within the institution.',
      responsibilities: [
        "Promote research activities",
        "Coordinate research projects",
        "Manage research funding",
        "Organize research seminars"
      ],
      members: [
  { id: 1, name: "Dr. P. Narayana Raju", designation: "Professor & HOD, Department of Pharmaceutics", profile: "Chairman" },
  { id: 2, name: "Dr. X. Antro Jennie", designation: "Professor & HOD, Department of Pharmaceutical Chemistry", profile: "Member Secretary" },
  { id: 3, name: "Dr. Y. B. Manjulatha", designation: "Professor & HOD, Department of Pharmaceutical Biotechnology", profile: "Member" },
  { id: 4, name: "Dr. M. Srinivasu", designation: "Professor, Department of Pharmacology", profile: "Member" },
  { id: 5, name: "Mr. D. K. Satapathy", designation: "Associate Professor, Department of Pharmacology", profile: "Member" },
  { id: 6, name: "Mr. P. Rambabu", designation: "Associate Professor, Department of Pharmaceutics", profile: "Member" }
]

    },
    'internal-complaint': {
      title: 'Internal Complaint Cell',
      description: 'The Internal Complaint Cell handles grievances and ensures a safe working environment for all.',
      responsibilities: [
        "Address internal complaints",
        "Maintain confidentiality",
        "Conduct fair investigations",
        "Recommend appropriate actions"
      ],
      members: [
  { id: 1, name: "Dr. Y. B. Manjulatha", designation: "Professor & HOD, Department of Pharmaceutical Biotechnology", profile: "Chairperson" },
  { id: 2, name: "Mrs. B. Vijaya Ambika Durga", designation: "Associate Professor, Department of Pharmacology", profile: "Member Secretary" },
  { id: 3, name: "Dr. T. Yamini Kumari", designation: "Associate Professor & HOD, Department of Pharmaceutical Analysis", profile: "Convenor" },
  { id: 4, name: "Mrs. M. Sharmila", designation: "Associate Professor, Department of Pharmaceutical Chemistry", profile: "Member" },
  { id: 5, name: "Mrs. R. Satyavathi", designation: "Non teaching representative", profile: "Non teaching representative" },
  { id: 6, name: "Ms. A. Manjusri", designation: "I Year 624185901005", profile: "Student member" },
  { id: 7, name: "Ms. G. Srivallika", designation: "I Year 624185901026", profile: "Student member" },
  { id: 8, name: "Ms. B. Tanmayi", designation: "II Year 623185901009", profile: "Student member" },
  { id: 9, name: "Ms. N. L. Lakshmi Kumari", designation: "II Year 623185901051", profile: "Student member" },
  { id: 10, name: "Mr. Ch. Ajay Varma", designation: "III Year 622185901012", profile: "Student member" },
  { id: 11, name: "Mr. O. V. V. Abhiram Guptha", designation: "III Year 622185901071", profile: "Student member" },
  { id: 12, name: "Ms. Dharavathu Pushpanjali", designation: "IV Year 621185901015", profile: "Student member" },
  { id: 13, name: "Ms. Periketi Lavanya", designation: "IV Year 621185901074", profile: "Student member" }
]
    },
    'sc-st-obc': {
      title: 'SC/ST/OBC Cell',
      description: 'The SC/ST/OBC Cell ensures equal opportunities and support for students from scheduled categories and other backward classes.',
      responsibilities: [
        "Implement welfare schemes",
        "Monitor scholarship distribution",
        "Address student concerns",
        "Organize support programs"
      ],
      members: [
        { id: 1, name: "Mr. K. S. Sumanth", designation: "HOD of Pharmaceutical Analysis", profile: "Chairperson" },
        { id: 2, name: "Mr. J. N. B. Indu Sekhar", designation: "Assistant Professor", profile: "Member Secretary" },
        { id: 3, name: "Ms. M. Sharmila", designation: "Assistant Professor", profile: "Member" },
        { id: 4, name: "Mr. M. Ajay Rathnam", designation: "Assistant Professor", profile: "Member" },
        { id: 5, name: "Mr. A. Durga Prasad", designation: "Student", profile: "Student ember" },
        { id: 6, name: "Ms. B. Sonali", designation: "Student", profile: "Student Member" },
        { id: 7, name: "Ms. D. Meenakshi", designation: "Student", profile: "Student Member" },
        { id: 8, name: "Ms. D. Yajnasri", designation: "Student", profile: "Student Member" },
        { id: 9, name: "Mr. B. Prem Kumar", designation: "Student", profile: "Student Member" },
        { id: 10, name: "Ms, B. Prathima", designation: "Student", profile: "Student Member" },
        { id: 11, name: "Ms. K. Bhavani", designation: "Student", profile: "Student Member" },
        { id: 12, name: "Ms. K. Pavanisri", designation: "Student", profile: "Student Member" },
      ]
    }
};