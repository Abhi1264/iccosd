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
      "2026 IEEE International Conference on Communication and Smart Devices",
    description:
      "Premier IEEE-sponsored international conference. February 18-19, 2026 at BIT Mesra, India.",
    heroTitle: "ICCoSD-2026",
    heroSubtitle: "International Conference on Communication and Smart Devices",
    heroTagline: "Connecting Intelligence",
    heroDate: "February 18-19, 2026",
    heroCTA: "Register Now",
    heroCTALink: "/registration",
    heroImageUrl: "/hero-conference.jpg",
    institution:
      "Birla Institute of Technology Mesra (Deemed to be university)",
    theme: "Connecting Intelligence",
    aboutTitle: "About the Conference",
    aboutLead:
      "The International Conference on Communication and Smart Devices (ICCoSD-26) is organized by the Department of Electronics and Communication Engineering at Birla Institute of Technology Mesra under the technical co-sponsorship of IEEE Kolkata Section.",
    aboutBody:
      "This premier conference brings together researchers, academics, and industry professionals to discuss the latest research and development related to communication systems and smart device technologies.",
    themeSectionTitle: "Conference Theme",
    themeHeadline:
      '"2026 IEEE International Conference on Communication and Smart Devices"',
    themeDescription:
      "This year's theme focuses on the intersection of communication technologies and intelligent systems, exploring how smart devices are reshaping our world through seamless connectivity and advanced intelligence.",
    highlights: [
      {
        stat: "100+",
        label: "Expert Speakers",
        description: "Renowned researchers and industry leaders",
      },
      {
        stat: "500+",
        label: "Expected Attendees",
        description: "From academia and industry worldwide",
      },
      {
        stat: "6",
        label: "Research Tracks",
        description: "Coverage of cutting-edge technologies",
      },
      {
        stat: "4",
        label: "Days",
        label_alt: "Conference Days",
        description: "Two days of hybrid participation",
      },
    ],
    homeDates: [
      { label: "Conference Date", date: "18th - 19th February, 2026" },
      { label: "Paper Submission Deadline", date: "Open" },
      { label: "Acceptance Notification", date: "To be announced" },
      { label: "Registration Period", date: "Open" },
      { label: "Camera Ready Paper Submission", date: "To be announced" },
    ],
    homeCtas: [
      {
        title: "Submit a Paper",
        description: "Showcase your research to the global community",
        cta: "View Guidelines",
        link: "/call-for-papers",
      },
      {
        title: "Register Now",
        description: "Secure your spot at the conference",
        cta: "Register",
        link: "/registration",
      },
      {
        title: "Meet the Speakers",
        description: "Learn about our distinguished keynote speakers",
        cta: "View Speakers",
        link: "/keynote-speakers",
      },
    ],
    homeOrganizers: [
      {
        name: "Department of Electronics & Communication Engineering",
        tagline: "BIT Mesra, Ranchi, India",
        imageUrl: "/bit-mesra.png",
      },
      {
        name: "IEEE Kolkata",
        tagline: "Technical Co-sponsorship",
        imageUrl: "/ieee.avif",
      },
    ],
  },
  // About page
  about: {
    title: "About ICCoSD-26 & BIT Mesra",
    description:
      "Learn about the International Conference on Communication and Smart Devices and Birla Institute of Technology Mesra",
    heroTitle: "About Us",
    heroSubtitle: "ICCoSD-26 & Birla Institute of Technology Mesra",
    heroImage: "/hero-conference.jpg",
    badgeLabel: "BIT Mesra",
    highlightsTitle: "Conference Highlights",
    highlights: [
      { title: "Hybrid Mode", description: "Participate online or in-person" },
      {
        title: "Double-Blind Review",
        description: "Rigorous peer review process",
      },
      {
        title: "IEEE Publication",
        description: "Papers published in IEEE Xplore",
      },
      {
        title: "International Panel",
        description: "Expert speakers from around the world",
      },
      { title: "Research Tracks", description: "6 specialized research areas" },
      {
        title: "Networking Events",
        description: "Connect with industry and academia",
      },
    ],
    content: `## About Birla Institute of Technology Mesra

BIT Mesra, established in 1955, is a "Deemed to be University" that has been at the forefront of technical education in India. Located in Ranchi, Jharkhand, the institute has nurtured minds with a rich heritage of academic excellence.

The institute was founded with a clear vision to offer young minds a space where their imagination could take wings and their ideas could bear fruition. Over six decades, BIT Mesra has developed a reputation as a leader in technology and entrepreneurship education.

### Key Achievements

- First institute in India to establish a department dedicated to Space Engineering & Rocketry
- Pioneer in developing Science & Technology Entrepreneurs' Park (BIT-STEP)
- Recipient of 5G Use Cases Lab award from PM Narendra Modi
- Home to vibrant student life and innovative teaching methods

## About International Conference on Communication and Smart Devices (ICCoSD)

The ICCoSD is a biennial premier international conference that serves as a catalyst for innovation, collaboration, and knowledge exchange. The conference aims to provide an interactive forum to discuss research and development related to current and next-generation devices and communication systems.

### Conference Objectives

- **Knowledge Exchange:** Foster collaboration between academia, industry, and research institutions
- **Innovation Platform:** Provide a platform for presenting original research articles and innovations
- **Networking:** Create opportunities for researchers, practitioners, and students to share insights
- **Cross-Cultural Understanding:** Bring together people from diverse backgrounds and regions
- **Professional Development:** Help attendees stay ahead of advancements in their fields

### Conference Theme: "Connecting Intelligence"

The theme emphasizes the convergence of intelligent communication systems and smart devices in creating a better-connected world. ICCoSD-26 will explore how these technologies can solve real-world challenges and drive innovation across industries.

## Research Tracks

ICCoSD-26 covers multiple areas of research:

1. **Wireless Communication Technologies** - 5G/6G, IoT networks, spectrum management
2. **Signal Processing & Coding** - Digital signal processing, error correction, compression
3. **Smart Devices & Embedded Systems** - IoT devices, firmware, embedded AI
4. **Machine Learning & AI Applications** - AI in communications, predictive systems
5. **Optical & Photonic Communication** - Fiber optics, free-space communication
6. **Network Security & Privacy** - Cybersecurity, encryption, secure communications

## Ready to Participate?

Submit your research, register for the conference, or volunteer to be part of this prestigious event.`,
  },
  // Global footer
  footer: {
    siteName: "ICCoSD-26",
    siteTagline: "International Conference on Communication and Smart Devices",
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
      {
        title: "Abstract Proceedings",
        href: "/abstract-proceedings",
        icon: "Book",
      },
    ],
    importantDates: [
      { label: "Conference Dates", value: "February 18-19, 2026" },
      { label: "Paper Submission", value: "Open" },
      { label: "Notification", value: "To be announced" },
      { label: "Registration", value: "Open" },
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
          { label: "Abstract Proceedings", href: "/abstract-proceedings" },
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
      "Submit your research papers to ICCoSD-26. Topics include communication systems, smart devices, IoT, 5G, and more.",
    heroTitle: "Call for Papers",
    heroSubtitle: "Share your research with the global community",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    noticeTitle: "Call for Papers Open",
    noticeBody:
      "**Paper submission deadline: To be announced (currently open)** – ICCoSD-26 is currently accepting submissions. Updated timelines will be shared soon.",
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
        title: "Smart Devices & IoT",
        items: [
          "Internet of Things (IoT)",
          "Smart Sensors and Devices",
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
      { label: "Paper Submission Deadline", date: "To be announced (Open)" },
      { label: "Acceptance Notification", date: "To be announced" },
      { label: "Registration Opens", date: "Open" },
      { label: "Camera Ready Paper Submission", date: "To be announced" },
      { label: "Conference Dates", date: "18th - 19th February, 2026" },
    ],
  },
  // Organizing Committee page
  organizingCommittee: {
    title: "Organizing Committee | ICCoSD-26",
    description: "Meet the organizing committee members of ICCoSD-26.",
    heroTitle: "Organizing Committee",
    heroSubtitle: "Meet the leaders behind ICCoSD-26",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    committee: {
      patron: [
        {
          title: "Patron",
          name: "Prof. Indranil Manna",
          position: "Vice Chancellor, BIT Mesra",
        },
      ],
      chairman: [
        {
          title: "Chairman",
          name: "Prof. Sanjay Kumar",
          position: "HoD, ECE, BIT Mesra",
        },
      ],
      convenor: [
        {
          title: "Convenor",
          name: "Dr. Sitanshu Shekhar Sahu",
          position: "Associate Professor, ECE",
        },
      ],
      coConvenor: [
        {
          title: "Co-Convenor",
          name: "Dr. Sanjeet Kumar",
          position: "Associate Professor, ECE",
        },
        {
          title: "Co-Convenor",
          name: "Dr. Priyank Saxena",
          position: "Associate Professor, ECE",
        },
      ],
      secretary: [
        {
          title: "Secretary",
          name: "Dr. Vishal H Shah",
          position: "Assistant Professor, ECE",
        },
        {
          title: "Secretary",
          name: "Dr. Dileep Kumar Upadhayay",
          position: "Assistant Professor, ECE",
        },
      ],
      publicationChair: [
        {
          title: "Publication Chair",
          name: "Dr. Sitanshu Sekhar Sahu",
          position: "Associate Professor, ECE",
        },
        {
          title: "Publication Chair",
          name: "Dr. Santashraya Prasad",
          position: "Associate Professor, ECE",
        },
      ],
      financeChair: [
        {
          title: "Finance Chair (Treasurer)",
          name: "Dr. Rupesh Kumar Sinha",
          position: "Associate Professor, ECE",
        },
        {
          title: "Finance Chair (Joint Treasurer)",
          name: "Dr. Somnath Sengupta",
          position: "Associate Professor, ECE",
        },
      ],
    },
    publicity: [
      { name: "Dr. Vijay Nath", position: "BIT Mesra" },
      { name: "Dr. Richa Mishra", position: "BIT Mesra" },
      { name: "Dr. Sourav", position: "BIT Mesra" },
      { name: "Dr. Anusha V.", position: "BIT Mesra" },
      { name: "Mr. Mrinal Pathak", position: "BIT Mesra" },
    ],
    accommodation: [
      { name: "Mr. Vishal H. Shah", position: "BIT Mesra" },
      { name: "Dr. Kalyan Koley", position: "BIT Mesra" },
      { name: "Dr. Sandeep Mukherjee", position: "BIT Mesra" },
      { name: "Dr. Afaque Azam", position: "BIT Mesra" },
      { name: "Dr. Yogendra Agarwal", position: "BIT Mesra" },
    ],
    registration: [
      { name: "Dr. Kartik Mahto", position: "BIT Mesra" },
      { name: "Dr. Parjna Parimita Dash", position: "BIT Mesra" },
      { name: "Dr. S. Sidhishwari", position: "BIT Mesra" },
      { name: "Dr. Deepti Gola", position: "BIT Mesra" },
      { name: "Mr. Siddhi Kant Mishra", position: "BIT Mesra" },
    ],
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
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
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
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    intro:
      "The Advisory Committee comprises distinguished international and national academics and researchers who provide strategic guidance and credibility to the conference.",
    internationalTitle: "International Advisory Committee",
    nationalTitle: "National Advisory Committee",
    international: [
      "Prof. Ramjee Prasad, Aarhus University, Denmark",
      "Prof. Nichola Marchetti, Trinity College, Dublin",
      "Prof. Sheila Prasad, Northeaster University College of Engineering",
      "Prof. Vijayan K. Asari, University of Dayton, Ohio",
      "Prof. Bal Virdee, London Metropolitan University",
      "Prof. Sumit Chakravarty, Kennesaw State University, USA",
      "Prof. John Soraghan, University of Strathclyde, Glasgow, USA",
      "Prof. Kshirasagar Naik, University of Waterloo, Canada",
      "Prof. Veda Sandeep Nagaraja, TNI, University College Cork, Ireland",
      "Prof. Saraju Mohanty, University of North Texas, USA",
    ],
    national: [
      "Prof. P.K. Upadhaya, IIT Indore",
      "Prof. Preetam Kumar, IIT Patna",
      "Prof. Sushrul Das, IIT (ISM) Dhanbad",
      "Prof. Bratn Ghosh, IIT Kharagpur",
      "Prof. Bharat Gupta, NIT Patna",
      "Prof. Suparna Kar Chowdhury, Jadavpur University",
      "Dr. Puneet Mishra, ISRO, Bangalore",
      "Prof. Manish Goswami, IIIT Allahabad",
      "Prof. N.P. Singh, NIT Kurukshetra",
      "Prof. Nisha Gupta, BIT Mesra",
      "Prof. S. K. Ghorai, BIT Mesra",
      "Prof. Srikanta Pal, BIT Mesra",
      "Prof. Sandeep Singh Solanki, BIT Mesra",
      "Prof. Vibha Rani Gupta, BIT Mesra",
      "Prof. S.S. Pathak, BIT Mesra",
      "Prof. C. Jaganathan, BIT Mesra",
      "Prof. Ashok Sharon, BIT Mesra",
      "Prof. Jibendu Sekhar Roy, KIIT Bhubaneswar",
      "Prof. D. Pal, BITS Pilani, Goa",
      "Prof. Shweta Srivastava, Jaypee Institute of Information Technology, Noida",
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
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    noticeTitle: "Registration Open",
    noticeBody: `Registration for ICCoSD-26 is currently **open**.
The conference will be held on **February 18-19, 2026** at BIT Mesra, Ranchi.
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
      officerLabel: "Registration Officer",
      officerName: "Dr. Rupesh Kumar Sinha",
      emailLabel: "Email",
      email: "rupesh@bitmesra.ac.in",
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
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    intro:
      "We are grateful for the dedicated student volunteers who support the organization and execution of ICCoSD-26. Their enthusiasm, energy, and commitment are invaluable to making this conference a success.",
    volunteers: [
      "Ms. Arti Kumari",
      "Mr. Himadri Nirjhar Mandal",
      "Mr. Mukesh Kumar",
      "Mrs. Nikhat Anjum",
      "Ms. Rani Ankita",
      "Dr. Ravi Chandra",
      "Mr. Sachin Kumar Singh",
      "Ms. Sushmita Upadhyay",
      "Ms. Turio Sinha",
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
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
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
      "IEEE International Conference on Communication and Smart Devices - 2026",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
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
      { label: "Conference", value: "ICCoSD-26, February 18-19, 2026" },
      { label: "Location", value: "BIT Mesra, Ranchi, India" },
      { label: "Technical Co-sponsorship", value: "IEEE Kolkata Section" },
    ],
    note: "All papers presented at ICCoSD-26 will undergo a rigorous review process. Only papers that meet IEEE quality standards and are presented at the conference will be eligible for indexing in the IEEE Xplore Digital Library.",
    citation: `@inproceedings{ICCoSD2026,
  title={Connecting Intelligence},
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
    heroImage: "/hero-conference.jpg",
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
        name: "Dr. Gajendra Kant Mishra",
        title: "Head, ECE Department",
        phone: "+91-6203905197",
        email: "iccosd@bitmesra.ac.in",
      },
      {
        role: "Co-Convenor",
        name: "Dr. Sanjeet Kumar",
        title: "Associate Professor, ECE",
        phone: "+91-9386530086",
        email: "iccosd@bitmesra.ac.in",
      },
      {
        role: "Co-Convenor",
        name: "Dr. Priyank Saxena",
        title: "Assistant Professor, ECE",
        phone: "+91-7250557586",
        email: "iccosd@bitmesra.ac.in",
      },
    ],
    secretaries: [
      {
        name: "Dr. Sanjay Shankar Tripathy",
        title: "Secretary",
        phone: "+91-9430148809",
        responsibility: "Paper submissions and academic coordination",
      },
      {
        name: "Dr. Dileep Kumar Upadhyay",
        title: "Joint Secretary",
        phone: "+91-9470978325",
        responsibility: "Conference logistics and scheduling",
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
        person: "Dr. Sitanshu Sekhar Sahu",
        phone: "+91-9472760260",
      },
      {
        category: "Finance",
        person: "Dr. Rupesh Kumar Sinha",
        phone: "+91-9470369133",
      },
      {
        category: "Publicity & Media",
        person: "Dr. Vijay Nath",
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
    heroSubtitle: "Distinguished voices in communication and smart devices",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
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
        heading: "Invited Speakers: 18th February 2026",
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
        heading: "Invited Speakers: 19th February 2026",
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
