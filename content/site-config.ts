/**
 * Single source of truth for all editable site content.
 *
 * Editing guide:
 * - Each top-level key maps to a page/section.
 * - Keep URLs/internal links as absolute paths (e.g. "/about").
 * - Long rich text is kept as template strings.
 */
export const siteConfig = {
  // Home page
  home: {
    title:
      "2026 International Conference on Communication and Smart Intelligence",
    description:
      "Premier international conference. December 17-18, 2026 at BIT Mesra, India.",
    heroTitle: "ICCoSD-2026",
    heroSubtitle:
      "International Conference on Communication and Smart Intelligence",
    heroTagline: "From Silicon to Intelligence",
    heroDate: "17th - 18th December, 2026",
    organizedBy:
      "Department of Electronics and Communication Engineering, B.I.T. Mesra, Ranchi",
    heroCTA: "Register Now",
    heroCTALink: "/registration",
    heroImageUrl: "/hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    institution:
      "Birla Institute of Technology Mesra (Deemed to be university)",
    theme: "From Silicon to Intelligence",
    aboutTitle: "About the Conference",
    aboutLead:
      "The International Conference on Communication and Smart Intelligence (ICCoSD-26) is organized by the Department of Electronics and Communication Engineering at Birla Institute of Technology Mesra.",
    aboutBody:
      "This premier conference brings together researchers, academics, and industry professionals to discuss the latest research and development related to communication systems and smart device technologies.",
    themeSectionTitle: "Conference Theme",
    themeHeadline:
      '"2026 International Conference on Communication and Smart Intelligence"',
    themeDescription:
      "This year's theme 'From Silicon to Intelligence' explores the journey from semiconductor fundamentals to smart device applications, bridging core technologies with real-world innovations in communication systems.",
    highlights: [
      {
        stat: "5+",
        label: "Expert Speakers",
        description: "Renowned researchers and industry leaders",
      },
      {
        stat: "200+",
        label: "Expected Attendees",
        description: "From academia and industry worldwide",
      },
      {
        stat: "4",
        label: "Research Tracks",
        description: "Coverage of cutting-edge technologies",
      },
    ],
    homeDates: [
      { label: "Conference Date", date: "17th - 18th December, 2026" },
      { label: "Paper Submission Opens", date: "12 March 2026" },
      { label: "Paper Submission Closes", date: "30 June 2026" },
      { label: "Acceptance Notification", date: "30 September 2026" },
      { label: "Camera-Ready Manuscript", date: "15 October 2026" },
      { label: "Early Bird Registration", date: "10–20 October 2026" },
      { label: "Registration Deadline", date: "01 November 2026" },
    ],
    homeCtas: [
      {
        title: "Submit a Paper",
        description: "Showcase your research to the global community",
        cta: "View Guidelines",
        link: "/call-for-papers",
        icon: "FileText",
      },
      {
        title: "Register Now",
        description: "Secure your spot at the conference at the earliest",
        cta: "Register",
        link: "/registration",
        icon: "ClipboardList",
      },
      {
        title: "Meet the Speakers",
        description: "Learn about our distinguished keynote speakers",
        cta: "View Speakers",
        link: "/keynote-speakers",
        icon: "Users",
      },
    ],
    homeOrganizers: [
      {
        name: "Department of Electronics & Communication Engineering",
        tagline: "BIT Mesra, Ranchi, India",
        imageUrl: "/bit-mesra.png",
      },
      // {
      //   name: "IEEE Kolkata",
      //   tagline: "Technical Co-sponsorship",
      //   imageUrl: "/ieee.avif",
      // },
    ],
  },
  // About page
  about: {
    title: "About ICCoSD-26 & BIT Mesra",
    description:
      "Learn about the International Conference on Communication and Smart Intelligence and Birla Institute of Technology Mesra",
    heroTitle: "About Us",
    heroSubtitle: "ICCoSD-26 & Birla Institute of Technology Mesra",
    heroImage: "/hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    aboutBitMesraTitle: "About BIT Mesra",
    aboutBitMesraImageCaption:
      "Legacy Needs for BIT Mesra from Ex-Prime Minister",
    aboutBitMesraBody: `BIT Mesra is a "Deemed to be University" under Sec. 3 of the U.G.C. Act 1956. Established in 1955 by visionary industrialist Mr. B.M. Birla, the institute has been at the forefront of technical education in India with a rich heritage of academic excellence.

The institute emphasizes innovation, entrepreneurship, and a culture of excellence. BIT Mesra holds the credit of being the first in the country to establish a department dedicated to Space Engineering & Rocketry in 1964. It pioneered the Science & Technology Entrepreneurs' Park (BIT-STEP) on campus.

BIT Mesra is one of the 100 institutes awarded a 5G Use Cases Lab by the Honourable Prime Minister, Mr. Narendra Modi, on October 27, 2023.`,
    aboutConferenceTitle:
      "About International Conference on Communication and Smart Devices (ICCoSD)",
    aboutConferenceBody: `The International Conference on Communication and Smart Devices (ICCoSD) is being organized by the Department of Electronics and Communication Engineering, BIT Mesra, Ranchi, on **17th–18th December 2026**.

The conference aims to provide an interactive forum for discussion, research, and development in current and next-generation devices and communication systems. It serves as a catalyst for innovation, collaboration, and knowledge exchange among academia, industry, and research institutions.

**Objectives:** Foster collaboration, spark new ideas, promote cross-cultural understanding, and create opportunities for networking, skill enhancement, and professional development.

The conference will feature high-class plenary, keynote, and distinguished speakers, alongside technical presentations of registered papers.

**Conference Theme: "From Silicon to Intelligence"** — The theme emphasizes the journey from semiconductor fundamentals to smart device applications, exploring how core technologies bridge to real-world innovations.

**Paper Submission:** Original and unpublished research articles, maximum 6 pages, IEEE format. Double-blind review process. Acceptance based on quality, originality, technical content, and relevance to the theme.

At least one author of each accepted paper must register to present. Participation certificates will be awarded only to registered candidates.`,
  },
  // Global footer
  footer: {
    siteName: "ICCoSD-26",
    siteTagline:
      "International Conference on Communication and Smart Intelligence",
    email: "iccosd@bitmesra.ac.in",
    phone: "+91-6203905197",
    address:
      "Department of Electronics and Communication Engineering, BIT Mesra, Ranchi - 835215, Jharkhand, INDIA",
    copyright: "© 2026 ICCoSD-26. All rights reserved.",
    departmentName:
      "Department of Electronics and Communication Engineering, BIT Mesra",
    quickLinks: [
      { title: "Call for Papers", href: "/call-for-papers", icon: "FileText" },
      { title: "Registration", href: "/registration", icon: "ClipboardList" },
      { title: "Keynote Speakers", href: "/keynote-speakers", icon: "Users" },
      { title: "Directions", href: "/directions", icon: "MapPin" },
      { title: "Committee", href: "/committee/organizing", icon: "Building2" },
    ],
    importantDates: [
      { label: "Conference Date", value: "17th - 18th December, 2026" },
      { label: "Paper Submission Opens", value: "12 March 2026" },
      { label: "Paper Submission Closes", value: "30 June 2026" },
      { label: "Acceptance Notification", value: "30 September 2026" },
      { label: "Camera-Ready Manuscript", value: "15 October 2026" },
      { label: "Early Bird Registration", value: "10–20 October 2026" },
      { label: "Registration Deadline", value: "01 November 2026" },
    ],
    acknowledgments: [
      {
        title: "IEEE Kolkata Section",
        description: "Technical Co-sponsorship",
        imageUrl: "/ieee.avif",
        website: "https://ieee.org",
      },
      {
        title: "Birla Institute of Technology Mesra",
        description: "Hosting Institution",
        imageUrl: "/bit-mesra.png",
        website: "https://bitmesra.ac.in",
      },
    ],
    footerSections: [
      {
        title: "Conference",
        links: [
          { label: "About", href: "/about" },
          { label: "Call for Papers", href: "/call-for-papers" },
          { label: "Registration", href: "/registration" },
        ],
      },
      {
        title: "Committee",
        links: [
          { label: "Organizing Committee", href: "/committee/organizing" },
          { label: "Technical Program", href: "/committee/technical" },
          { label: "Advisory Committee", href: "/committee/advisory" },
          { label: "Keynote Speakers", href: "/keynote-speakers" },
        ],
      },
      {
        title: "Information",
        links: [
          { label: "Student Volunteers", href: "/student-volunteers" },
          { label: "Directions", href: "/directions" },
          { label: "Contact Us", href: "/contact" },
          { label: "Privacy Policy", href: "/privacy" },
        ],
      },
    ],
    socialLinks: [
      { platform: "Email", url: "mailto:iccosd@bitmesra.ac.in", icon: "Mail" },
      { platform: "Phone", url: "tel:+916203905197", icon: "Phone" },
    ],
  },
  // Call for Papers page
  callForPapers: {
    title: "Call for Papers | ICCoSD-26",
    description:
      "Submit your research papers to ICCoSD-26. Topics include communication systems, smart Intelligence, IoT, 5G, and more.",
    heroTitle: "Call for Papers",
    heroSubtitle: "Share your research with the global community",
    heroImage: "hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    noticeTitle: "Call for Papers Open",
    noticeBody:
      "**Paper submission opens: 12 March 2026** – Paper submission closes **30 June 2026**. ICCoSD-26 is accepting submissions. Submit your research to be part of this prestigious conference.",
    submissionGuidelinesTitle: "Submission Guidelines",
    generalGuidelinesTitle: "General Guidelines",
    acceptedPapersTitle: "Accepted Papers",
    researchTopicsTitle: "Research Topics",
    importantDatesTitle: "Important Dates",
    authorGuidelinesTitle: "Author Guidelines for Paper Submission",
    contactButtonText: "Get in Touch",
    generalGuidelines: `- Papers should present original, unpublished work in any of the conference topics.
- Maximum length is 6 pages in IEEE 2-column format.
- Authors must follow the IEEE paper template (available on the IEEE website).
- Papers will be judged on quality, originality, and relevance to the conference topics.
- All papers undergo a double-blind review process with a minimum of 2 reviewers per paper.`,
    acceptedPapers: `Accepted papers will be included in the conference proceedings and considered for publication in IEEE Xplore Digital Library (if papers meet IEEE quality standards).

**Important:** At least one author of each accepted paper must register under the "Authors" category to present the work and have the manuscript included in the proceedings.`,
    authorGuidelines: `- Use the IEEE manuscript template for conference proceedings.
- Papers must be submitted in PDF format.
- Maximum 6 pages including references and author biography.
- Use standard fonts (Times New Roman or similar) with minimum 10pt size.
- Include all figures, tables, and references within the 6-page limit.
- All papers must include an author biography section.`,
    ctaText:
      "For questions regarding paper submission and guidelines, please contact us.",
    topics: [
      {
        title: "Advanced Communication Systems",
        items: [
          "Optical Communication and Networks",
          "Satellite Communication",
          "Free Space Optical Communication",
          "Visible Light Communication",
          "Terahertz Communication",
        ],
      },
      {
        title: "Smart Intelligence & IoT",
        items: [
          "Internet of Things (IoT)",
          "Smart Sensors and Intelligence",
          "Wearable Technology",
          "Smart Homes and Cities",
          "Embedded Systems",
        ],
      },
      {
        title: "5G and Beyond",
        items: [
          "5G Networks and Applications",
          "6G Technologies",
          "Network Function Virtualization",
          "Software Defined Networks",
          "Edge Computing",
        ],
      },
      {
        title: "AI and Signal Processing",
        items: [
          "Machine Learning in Communications",
          "Deep Learning Applications",
          "Digital Signal Processing",
          "Image and Video Processing",
          "Natural Language Processing",
        ],
      },
    ],
    dates: [
      { label: "Paper Submission Opens", date: "12 March 2026" },
      { label: "Paper Submission Closes", date: "30 June 2026" },
      { label: "Acceptance Notification", date: "30 September 2026" },
      { label: "Camera-Ready Manuscript", date: "15 October 2026" },
      { label: "Early Bird Registration", date: "10–20 October 2026" },
      { label: "Registration Deadline", date: "01 November 2026" },
      { label: "Conference Dates", date: "17th - 18th December, 2026" },
    ],
  },
  // Organizing Committee page
  organizingCommittee: {
    title: "Organizing Committee | ICCoSD-26",
    description: "Meet the organizing committee members of ICCoSD-26.",
    heroTitle: "Organizing Committee",
    heroSubtitle: "Meet the leaders behind ICCoSD-26",
    heroImage: "hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    committee: {
      patron: [
        {
          title: "Patron",
          name: "Prof. Indranil Manna",
          position: "Vice Chancellor, Birla Institute of Technology, Mesra",
        },
      ],
      chairman: [
        {
          title: "Chairman",
          name: "Dr. Sanjay Kumar",
          position: "HoD, ECE, BIT Mesra",
        },
      ],
      convenor: [
        {
          title: "Convenor",
          name: "Dr. Sitanshu Sekhar Sahu",
          position: "BIT Mesra",
        },
      ],
      coConvenor: [
        {
          title: "Co-Convenor",
          name: "Dr. Richa Mishra",
          position: "BIT Mesra",
        },
        {
          title: "Co-Convenor",
          name: "Dr. Rupesh Kumar Sinha",
          position: "BIT Mesra",
        },
      ],
      secretary: [
        {
          title: "Secretary",
          name: "Dr. Vishal H. Shah",
          position: "BIT Mesra",
        },
        {
          title: "Secretary",
          name: "Dr. Dileep Kumar Upadhayay",
          position: "BIT Mesra",
        },
      ],
      tpcChairs: [
        {
          title: "TPC Chair",
          name: "Dr. Gajendra Kant Mishra",
          position: "BIT Mesra",
        },
        { title: "TPC Chair", name: "Dr. Vijay Nath", position: "BIT Mesra" },
        { title: "TPC Chair", name: "Dr. Afaque Azam", position: "BIT Mesra" },
        {
          title: "TPC Chair",
          name: "Dr. Sandeep Mukherjee",
          position: "BIT Mesra",
        },
        { title: "TPC Chair", name: "Dr. Subham Anand", position: "BIT Mesra" },
        {
          title: "TPC Chair",
          name: "Dr. Soumya Sidhishwari",
          position: "BIT Mesra",
        },
      ],
      publicationChair: [
        {
          title: "Publication Chair",
          name: "Dr. Sanjeet Kumar",
          position: "BIT Mesra",
        },
      ],
      treasurer: [
        {
          title: "Treasurer",
          name: "Dr. Santashraya Prasad",
          position: "BIT Mesra",
        },
      ],
      jointTreasurer: [
        {
          title: "Joint Treasurer",
          name: "Dr. Megha Dadel",
          position: "BIT Mesra",
        },
      ],
    },
    publicity: [] as { name: string; position: string }[],
    accommodation: [] as { name: string; position: string }[],
    registration: [] as { name: string; position: string }[],
    sectionTitles: {
      publicity: "Publicity and Media Committee Chair",
      accommodation: "Accommodation and Transport Committee Chair",
      registration: "Registration and Hospitality Committee Chair",
    },
  },
  // Technical Program Committee page
  technicalCommittee: {
    title: "Technical Program Committee | ICCoSD-26",
    description: "Meet the technical program committee members of ICCoSD-26.",
    heroTitle: "Technical Program Committee",
    heroSubtitle: "Expert reviewers and program organizers",
    heroImage: "hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    intro:
      "The Technical Program Committee comprises distinguished researchers and professionals from leading academic institutions and industry.",
    members: [
      "Dr. Atanu Kundu, Heritage Institute of Technology",
      "Dr. Koushik Dutta, Netaji Subhash Engineering College",
      "Dr. Vimal Kumar Singh Yadav, MNIT Allahabad",
      "Dr. Soumen Das, Indian Institute of Technology Kharagpur",
      "Dr. Sudip Kundu, NIT Rourkela",
      "Dr. Anup Bhattacharjee, NIT Durgapur",
      "Dr. Somak Bhattacharyya, Indian Institute of Technology (BHU), Varanasi",
      "Dr. Manoj Kumar Mukul, Delhi University",
      "Dr. Avireni Srinivasulu, Mohan Babu University, Tirupati",
      "Dr. Adinarayan Reddy, KSRM College of Engineering, Kadapa",
      "Dr. Anil Dwivedi, College of London",
      "Dr. Janardan Sahay, Govt. Womens Polytechnic, Ranchi",
      "Dr. Irfanul Husan, Graphic Era University, Dehradun",
      "Mr. Atul Kumar, Director, Wireless Software Solution, NXP",
      "Dr. Jitendra Kumar Mishra, IIT Ranchi",
      "Dr. Jayanta Ghosh, NIT Patna",
      "Dr. Aminul Islam, BIT Mesra",
      "Dr. Vijay Nath, BIT Mesra",
      "Dr. Kartik Mahto, BIT Mesra",
      "Dr. Prajna Parimita Dash, BIT Mesra",
      "Dr. Santashraya Prasad, BIT Mesra",
      "Dr. Soumya Sidhishwari, BIT Mesra",
      "Dr. Richa Mishra, BIT Mesra",
      "Dr. Deepti Gola, BIT Mesra",
      "Dr. Kalyan Koley, BIT Mesra",
      "Dr. Rajeev Sharma, VIT, AP",
      "Dr. Jitendra Kumar Mishra, IIIT Ranchi",
      "Dr. Santosh Mahto, IIIT Ranchi",
      "Dr. Ashwini Kumar, AJU, Mohanpur(Jh.)",
      "Dr. Prem Nath Suman, AJU, Mohanpur (Jh.)",
    ],
    note: "**Note:** The Technical Program Committee is responsible for reviewing submitted papers, ensuring the quality and relevance of the conference content. All members are experts in their respective fields and contribute to maintaining the conference's academic excellence.",
  },
  // Advisory Committee page
  advisoryCommittee: {
    title: "Advisory Committee | ICCoSD-26",
    description: "Meet the advisory committee members of ICCoSD-26.",
    heroTitle: "Advisory Committee",
    heroSubtitle: "Global experts guiding ICCoSD-26",
    heroImage: "hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    intro:
      "The Advisory Committee comprises distinguished international and national academics and researchers who provide strategic guidance and credibility to the conference.",
    internationalTitle: "International Advisory Committee",
    nationalTitle: "National Advisory Committee",
    international: [
      "Jacopo Iannacci, PhD — MicroSystems Technology Research Unit, Center for Sensors and Intelligence (SD), Fondazione Bruno Kessler, Italy",
      "Cosimo Stallo — PhD on Microelectronics and Telecommunications, Moonlight Navigation Principal System Engineer, TEC-E Department, Organisational Unit TEC-SEI, ESA - European Space Agency",
      "Dr. Haïfa Farès — Associate Professor, Centrale Supélec (IETR Rennes), France",
      "Dr. Ashish Prajapati — Senior MEMS Engineer, Omnitron Sensors Inc., Los Angeles, California, USA; Marvell Nanofabrication Laboratory (CITRIS), UC Berkeley, California, USA",
    ],
    national: [
      "Dr. Raghvendra Kumar Chaudhary — Associate Professor, ACES 325A, Electrical Engineering, Indian Institute of Technology Kanpur, Kanpur 208016, U.P., India. Office: +91-512-679-2306, mmWave Lab: +91-512-259-7058. Web: https://home.iitk.ac.in/~raghvendra",
      "Dr. Saptarshi Ghosh — Associate Professor, Electrical Engineering, IIT Indore, Simrol, M.P. 453552, India",
      "Dr. Somak Bhattacharyya — Associate Professor, Department of Electronics Engineering, Indian Institute of Technology (BHU), Varanasi, Uttar Pradesh-221005, India. Website: https://www.iitbhu.ac.in/dept/ece/people/somakbhattacharyyaece",
      "Dr. Ravi Kumar Gangwar, Ph.D. — Professor & Head, Dept. of Electronics Engineering, Indian Institute of Technology (ISM) Dhanbad, Dhanbad, Jharkhand - 826004. Tel: +91-326-2235903",
      "Dr. Tarun Kanti Bhattacharyya — Institute Chair Professor, Professor and Head Dept of Electronics & Electrical Communication Engg., Professor and Head Advanced Technology Development Centre, Indian Institute of Technology Kharagpur, Kharagpur - 721302, India. Phone: 03222 283554, Cell: 09339531206",
      "Dr. Kumar Vaibhav Srivastava — Professor, Department of Electrical Engineering, Dean of Administration, Indian Institute of Technology Kanpur, Kanpur, U.P., INDIA-208016",
      "Prof. Mahua Bhattacharya, M.Tech, Ph.D.(Tech.) — Professor & Head Dept. of Information Technology, Prof.-In Charge Center For Biomedical Research, ABV Indian Institute of Information Technology & Management (Institute of National Importance, Ministry of Education Govt. Of India), Morena Link Road, Gwalior 474010, Madhya Pradesh, India",
      "Prof. Preetam Kumar — Professor, Department of Electrical Engineering, IIT Patna",
      "Professor Saswat Chakrabarti — GS Sanyal School of Telecommunications, IIT Kharagpur, 721302, India. Mob: +919775030765",
      "Prof. Jayanta Mukhopadhyay — Dean, Strategy and Analytics, Professor, Computer Science and Engineering, IIT Kharagpur",
      "Dr. Vinod Belwanshi — Scientist, CSIR–National Metallurgical Laboratory, Jamshedpur, India – 831007 (Ministry of Science and Technology, Government of India); Assistant Professor, Academy of Scientific & Innovative Research (AcSIR), Ghaziabad, U.P., India; Honorary Research Fellow, University of Glasgow, UK – G12 8QQ",
      "Dr. Koushik Guha — Distinguished Faculty, ISSS Young Scientist 2021 Awardee, IETE RS Khandpur Awardee 2022, Fellow IETE, Senior Member IEEE, Corporate member IEI, Life Member ISSS; Associate Professor & Head, Dept. of Electronics and Communication Engineering; Former Associate Dean (Academic) & Assoc. Dean (Students' Welfare), National Institute of Technology Silchar, Assam-788010",
      "Dr. Bhubon Chandra Mech (Ph.D.) — PG course coordinator (M.Tech VLSI & ES) & Assistant Professor, Electronics Engineering, Defence Institute of Advanced Technology, Girinagar, Pune - 411025, India",
      "Professor Manoj Saxena — FNASc(IN), FIETE(IN), SMIEEE(USA), Department of Electronics, Deen Dayal Upadhyaya College, University of Delhi, Dwarka Sector-3, New Delhi-110078, India",
      "Dr. Basudeba Behera, SMIEEE, LMISTE — Assistant Professor, Department of Electronics & Communication Engg., Office: G- 06/09, Diamond Jubilee Lecture Hall Complex, NIT Jamshedpur, Jharkhand-831014, INDIA",
      "Dr. Bidhan Pramanick — Associate Professor, School of Electrical Sciences, IIT Goa, Farmagudi, Ponda, Goa-403401",
      "Dr. Ravindra Jha — Assistant Professor, Electronics & Electrical Engineering Department, IIT Guwahati",
    ],
    note: "**Note:** The Advisory Committee members are internationally and nationally recognized experts in their fields. They provide valuable insights and guidance to ensure the conference maintains the highest standards of academic excellence.",
  },
  // Registration page
  registration: {
    title: "Registration | ICCoSD-26",
    description:
      "Register for ICCoSD-26. View registration fees, process, and important details.",
    heroTitle: "Registration",
    heroSubtitle: "Join us for an exceptional conference experience",
    heroImage: "hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    noticeTitle: "Registration Open",
    noticeBody: `Registration for ICCoSD-26 is currently **open**.
The conference will be held on **December 17-18, 2026** at BIT Mesra, Ranchi.
Early Bird Registration: 10–20 October 2026. Registration deadline: 01 November 2026.
Secure your spot now to be part of this prestigious event.`,
    introHeading: "Registration Details",
    introBody: `Registration for ICCoSD-26 is open to authors, academicians, industry professionals, and attendees.
Please complete your registration through the official registration portal. One can register with or without a paper.
Those with accepted papers are encouraged to register under the **Authors** category to present their work and have it included in the conference proceedings.`,
    categoriesTitle: "Registration Categories",
    registrationInfoTitle: "Important Registration Information",
    registrationContactTitle: "Registration Contact",
    registrationContactIntro:
      "For registration inquiries and support, please contact:",
    tableHeaders: [
      "Category",
      "Indian (IEEE Member)",
      "Indian (Non-IEEE)",
      "Foreign (IEEE Member)",
      "Foreign (Non-IEEE)",
    ],
    feeRows: [
      {
        category: "Student",
        fees: ["₹7,000", "₹8,000", "US $180", "US $200"],
      },
      {
        category: "Academician",
        fees: ["₹9,000", "₹10,000", "US $240", "US $250"],
      },
      {
        category: "Industry Professional",
        fees: ["₹11,000", "₹12,000", "US $290", "US $300"],
      },
      {
        category: "Attendee Only",
        fees: ["₹4,000", "₹4,000", "US $100", "US $100"],
      },
      {
        category: "Additional Paper",
        fees: ["₹4,000", "₹4,000", "US $100", "US $100"],
      },
    ],
    registrationInfoPoints: [
      "The registration fee includes conference materials, meals, and certificate of participation.",
      "IEEE members must provide proof of active membership during registration to avail the discount.",
      "At least one author of each accepted paper must register to present the work.",
      "Participation certificate will be awarded to all registered participants.",
    ],
    registrationContactDetails: {
      officerLabel: "Registration Contact",
      officerName: "Dr. Vishal H. Shah / Dr. Dileep Kumar Upadhayay",
      emailLabel: "Email",
      email: "iccosd@bitmesra.ac.in",
      phoneLabel: "Phone",
      phone: "+91-6203905197",
    },
  },
  // Student Volunteers page
  studentVolunteers: {
    title: "Student Volunteers | ICCoSD-26",
    description: "Meet the student volunteers of ICCoSD-26.",
    heroTitle: "Student Volunteers",
    heroSubtitle: "Supporting ICCoSD-26 with enthusiasm and dedication",
    heroImage: "hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    intro:
      "We are grateful for the dedicated student volunteers who support the organization and execution of ICCoSD-26. Their enthusiasm, energy, and commitment are invaluable to making this conference a success.",
    volunteers: [
      "Ms. Turio Sinha",
      "Mrs. Nikhat Anjum",
      "Ms. Arti Kumari",
      "Mr. Himadri Nirjhar Mandal",
      "Mr. Mukesh Kumar",
      "Ms. Rani Ankita",
      "Dr. Ravi Chandra",
      "Mr. Sachin Kumar Singh",
      "Ms. Sushmita Upadhyay",
      "Mr. Abhinav Kumar Choudhary",
    ],
    contributions: `- Registration desk management and participant coordination
- Technical session support and speaker coordination
- Event logistics and venue management
- Hospitality and participant guidance
- Documentation and feedback collection`,
  },
  // Directions page
  directions: {
    title: "Directions | ICCoSD-26",
    description: "How to reach BIT Mesra, Ranchi for ICCoSD-26.",
    heroTitle: "How to Reach BIT Mesra",
    heroSubtitle: "Easy directions to the conference venue",
    heroImage: "hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    intro:
      "BIT Mesra is located in Ranchi, the capital of Jharkhand, India. The institute is well-connected by air, rail, and road.",
    transportTitles: {
      byAir: "By Air",
      byTrain: "By Train",
      byRoad: "By Road",
      localTransport: "Local Transport",
    },
    locationTitle: "BIT Mesra Location",
    distanceTitle: "Distance from Major Cities",
    accommodationTitle: "Accommodation",
    byAir: `**Ranchi Airport (Birsa Munda Airport)** is the nearest airport and is well-connected with major cities like Delhi, Kolkata, Mumbai, and Bangalore.
From the airport, you can take a taxi or cab to reach BIT Mesra, which is about 15–20 kilometers away.`,
    byTrain: `**Ranchi Railway Station** is the nearest major railway station.
From the station, you can take a shared auto-rickshaw or a cab to get to BIT Mesra. The distance is approximately 10 kilometers.`,
    byRoad: `If you are driving, you can follow the main road leading to Ranchi. BIT Mesra is well-signposted, and you can use GPS navigation for directions.
The institute is accessible from all major highways connecting Ranchi to other cities.`,
    localTransport: `Local options include auto-rickshaws, taxis, and app-based ride-sharing services.
BIT Mesra is a well-known destination, so most local drivers will be familiar with the route.`,
    location: `**Birla Institute of Technology Mesra**
Ranchi, Jharkhand-835215
INDIA

**Latitude:** 23.26°N
**Longitude:** 85.26°E`,
    distances: [
      { city: "Kolkata", distance: "~430 km" },
      { city: "Patna", distance: "~200 km" },
      { city: "Delhi", distance: "~1300 km" },
      { city: "Mumbai", distance: "~1100 km" },
      { city: "Bangalore", distance: "~1400 km" },
      { city: "Hyderabad", distance: "~900 km" },
    ],
    accommodation: `The Institute can accommodate guest attendees in its hostels on a first-come-first-served basis. Advanced booking is recommended.

There are several hotels available in Ranchi city ranging from budget to luxury options. For accommodation arrangements and inquiries, please contact the Accommodation and Transport Committee.`,
  },
  // Abstract Proceedings page
  abstractProceedings: {
    title: "Abstract Proceedings | ICCoSD-26",
    description: "Download the abstract proceedings from ICCoSD-26.",
    heroTitle: "Proceedings",
    heroSubtitle:
      "IEEE International Conference on Communication and Smart Intelligence - 2026",
    heroImage: "hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    intro:
      "Access the proceedings of ICCoSD-26 containing abstracts and research papers presented at the conference.",
    proceedingsTitle: "Conference Proceedings",
    aboutTitle: "About the Proceedings",
    downloadTitle: "Download Proceedings",
    downloadButtonText: "Download Abstract Proceedings",
    downloadHelpText:
      "Click above to download the PDF containing all conference abstracts (Format: PDF, Size: ~15-20 MB)",
    publicationTitle: "Publication Details",
    citationTitle: "Citation Information",
    aboutProceedings:
      "The proceedings will contain abstracts of all papers presented at **ICCoSD-26**. Selected papers meeting IEEE quality standards will be considered for publication in the IEEE Xplore Digital Library for global accessibility and citation.",
    downloadSection:
      "The complete proceedings document with all accepted paper abstracts will be available for download closer to the conference dates.",
    publication: [
      { label: "Publisher", value: "IEEE (Xplore Digital Library)" },
      { label: "Conference", value: "ICCoSD-26, December 17-18, 2026" },
      { label: "Location", value: "BIT Mesra, Ranchi, India" },
      { label: "Technical Co-sponsorship", value: "IEEE Kolkata Section" },
    ],
    note: "All papers presented at ICCoSD-26 will undergo a rigorous review process. Only papers that meet IEEE quality standards and are presented at the conference will be eligible for indexing in the IEEE Xplore Digital Library.",
    citation: `@inproceedings{ICCoSD2026,
  title={From Silicon to Intelligence},
  booktitle={Proceedings of ICCoSD-26},
  year={2026},
  organization={IEEE},
  address={Ranchi, India}
}`,
  },
  // Contact page
  contact: {
    title: "Contact Us - ICCoSD-26",
    description: "Get in touch with the ICCoSD-26 organizing committee",
    heroTitle: "Reach Us",
    heroSubtitle: "Contact Information for ICCoSD-26",
    heroImage: "hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    contactInfoTitle: "Contact Information",
    generalInquiriesTitle: "General Inquiries",
    keyContactsTitle: "Key Contact Numbers",
    sendMessageTitle: "Send us a Message",
    addressLabel: "Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
    formLabels: {
      fullName: "Full Name",
      emailAddress: "Email Address",
      subject: "Subject",
      message: "Message",
    },
    formPlaceholders: {
      fullName: "Your name",
      emailAddress: "your@email.com",
      subject: "Subject of your inquiry",
      message: "Your message...",
    },
    submitButtonText: "Send Message",
    responseTimeText: "We will get back to you within 24-48 hours.",
    mainEmail: "iccosd@bitmesra.ac.in",
    mainPhone: "+91-6203905197",
    organizingContacts: [
      {
        role: "Convenor",
        name: "Dr. Sitanshu Sekhar Sahu",
        title: "BIT Mesra",
        phone: "+91-6203905197",
        email: "iccosd@bitmesra.ac.in",
      },
      {
        role: "Co-Convenor",
        name: "Dr. Richa Mishra",
        title: "BIT Mesra",
        phone: "+91-6203905197",
        email: "iccosd@bitmesra.ac.in",
      },
      {
        role: "Co-Convenor",
        name: "Dr. Rupesh Kumar Sinha",
        title: "BIT Mesra",
        phone: "+91-6203905197",
        email: "iccosd@bitmesra.ac.in",
      },
    ],
    secretaries: [
      {
        name: "Dr. Vishal H. Shah",
        title: "Secretary",
        phone: "+91-6203905197",
        responsibility: "Conference coordination",
      },
      {
        name: "Dr. Dileep Kumar Upadhayay",
        title: "Secretary",
        phone: "+91-6203905197",
        responsibility: "Conference coordination",
      },
    ],
    department: {
      name: "Department of Electronics and Communication Engineering",
      institution: "Birla Institute of Technology Mesra",
      city: "Ranchi",
      state: "Jharkhand",
      country: "India",
      pincode: "835215",
      email: "iccosd@bitmesra.ac.in",
      phone: "+91-6203905197",
      website: "https://bitmesra.ac.in",
    },
    quickContacts: [
      {
        category: "Publication",
        person: "Dr. Sanjeet Kumar",
        phone: "Available upon request",
      },
      {
        category: "Finance (Treasurer)",
        person: "Dr. Santashraya Prasad",
        phone: "Available upon request",
      },
      {
        category: "Finance (Joint Treasurer)",
        person: "Dr. Megha Dadel",
        phone: "Available upon request",
      },
    ],
    content: `## Contact the Organizing Committee

Have questions about the conference? Need assistance with registration or paper submission? Our team is here to help. Reach out to the appropriate committee members based on your inquiry.

## Contact for Specific Inquiries

**Registration Related Questions:**
Contact the Registration Committee through the main email address. Include your full name and registration ID if already registered.

**Paper Submission & Peer Review:**
Email details to iccosd@bitmesra.ac.in with subject line: "Paper Submission Query"

**Accommodation & Travel:**
The Registration Committee handles all accommodation and travel-related inquiries.

**Event Sponsorship:**
For sponsorship opportunities, please contact the Finance Chair or the main conference email.

**Media & Press Inquiries:**
Contact the Publicity and Media Committee through iccosd@bitmesra.ac.in

**Volunteer Opportunities:**
Interested in volunteering? Email your details to the Student Volunteer Coordinator.

## Office Hours

The ICCoSD-26 office operates during the following hours:

- **Weekdays:** 9:00 AM - 5:00 PM IST
- **Weekends:** Closed
- **Holidays:** Closed

For urgent matters, please mark your email as "URGENT" in the subject line.

For any other queries not covered above, please don't hesitate to contact us at iccosd@bitmesra.ac.in or call +91-6203905197.`,
  },
  // Keynote Speakers page
  keynoteSpeakers: {
    title: "Keynote Speakers | ICCoSD-26",
    description: "Meet the distinguished keynote speakers at ICCoSD-26.",
    heroTitle: "Keynote Speakers",
    heroSubtitle:
      "Distinguished voices in communication and smart Intelligence",
    heroImage: "hero-conference.png",
    heroImageUrlMobile: "/hero-conference-mobile.png",
    sections: {
      inaugural: {
        heading: "Guest for Inaugural Ceremony",
        accentColor: "gold",
        speakers: [
          {
            role: "Chief Guest",
            name: "Mr. Varun Ranjan, IAS",
            position:
              "Managing Director, Jharkhand Industrial Infrastructure Development Corporation Ltd (JIIDCO), Dept of Industries",
          },
          {
            role: "Guest of Honour",
            name: "Prof. Saswat Chakrabarti",
            position:
              "Professor, GS Sanyal School of Telecommunications, IIT Kharagpur",
          },
        ],
      },
      valedictory: {
        heading: "Guest for Valedictory Ceremony",
        accentColor: "teal",
        speakers: [
          {
            role: "Chief Guest",
            name: "Ms. Nancy Sahay, IAS",
            position:
              "Managing Director, Jharkhand Industrial Infrastructure Development Corporation Ltd (JIIDCO), Dept of Industries",
          },
        ],
      },
      day1: {
        heading: "Invited Speakers: 17th December 2026",
        accentColor: "blue",
        speakers: [
          {
            role: "Plenary Talk",
            name: "Prof. Saswat Chakrabarti",
            position:
              "Professor, GS Sanyal School of Telecommunications, IIT Kharagpur",
          },
          {
            role: "Invited Talk",
            name: "Prof. Preetam Kumar",
            position:
              "Professor, Department of Electrical Engineering, IIT Patna",
          },
          {
            role: "Invited Talk",
            name: "Prof. Xiao-Zhi Gao",
            position:
              "Professor in University of Eastern Finland, Finland (online)",
          },
        ],
      },
      day2: {
        heading: "Invited Speakers: 18th December 2026",
        accentColor: "green",
        speakers: [
          {
            role: "Invited Talk",
            name: "Dr. Sumit Chakravarty",
            position:
              "Associate Professor, Kennesaw State University, USA (Online)",
          },
          {
            role: "Invited Talk",
            name: "Professor Ganapati Panda",
            position:
              "Professor and Research Advisor, C V Raman Global University, Bhubaneswar, India",
          },
          {
            role: "Invited Talk",
            name: "Dr. Rajeev Kumar Ranjan",
            position:
              "Associate Professor, Department of Electronics Engineering, Indian Institute of Technology (ISM), Dhanbad, Jharkhand India",
          },
          {
            role: "Invited Talk",
            name: "Dr. Manish Okade",
            position:
              "Associate Professor, Department of Electronics and Communication Engineering, National Institute of Technology (NIT), Rourkela, India-769008WB, India",
          },
          {
            role: "Invited Talk",
            name: "Prof. Suvra Sekhar Das",
            position:
              "Professor, G.S Sanyal School of Telecommunication, Indian Institute of Technology Kharagpur, WB, India",
          },
        ],
      },
    },
  },
} as const;
