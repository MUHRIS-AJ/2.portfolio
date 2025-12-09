import { FaDiscord, FaGithub, FaMapPin, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase, HiAcademicCap, HiBadgeCheck } from "react-icons/hi";

export const config = {
    developer: {
        name: "Abool Jaya Muhris",
        profileImage: "/profile-main.jpg",
        title: "Data Scientist | Data Analyst | AI Engineer & Vibe Coder",
        degrees: "Bachelor's degree, Information Communication and Technology (EUSL)"
    },
    social: {
        github: "MUHRIS-AJ",
        linkedin: "abool-jaya-muhris-975220350",
        linkedinUrl: "https://www.linkedin.com/in/abool-jaya-muhris-975220350/",
        instagram: "hum_x_nur",
        instagramUrl: "https://www.instagram.com/hum_x_nur/",
        whatsapp: "+94 77 5551 712",
        whatsappUrl: "https://wa.me/94775551712"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    // Optional curated projects for the /projects page
    projects: [],
    recentTracks: false, // Enable/disable Spotify recent tracks
    skills: [
        {
            title: "Technical Skills",
            icon: <HiCode />,
            description: "Core development stack",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-400",
            skills: [
                { name: "Python", level: "Advanced", hot: true, image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2000&auto=format&fit=crop" }, // Detailed Python Code
                { name: "JavaScript", level: "Advanced", hot: true, image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1997&auto=format&fit=crop" }, // JS Symbolism
                { name: "React & Next.js", level: "Advanced", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" }, // React Atom
                { name: "Tailwind CSS", level: "Advanced", image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop" }, // CSS/Code
                { name: "Node.js", level: "Intermediate", image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2037&auto=format&fit=crop" }, // Server nodes
                { name: "Express", level: "Intermediate", image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=2070&auto=format&fit=crop" }, // Fast/Expressive
                { name: "MongoDB", level: "Intermediate", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop" }, // Database clusters
                { name: "Three.js", level: "Intermediate", hot: true, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" }, // 3D Shapes
                { name: "GSAP", level: "Intermediate", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" }, // Motion/Speed
                { name: "Framer Motion", level: "Advanced", hot: true, image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=2080&auto=format&fit=crop" }, // Fluid Motion
                { name: "Figma", level: "Intermediate", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" }, // Design
                { name: "Material UI", level: "Intermediate", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" }, // UI Components
                { name: "REST APIs", level: "Intermediate", image: "https://images.unsplash.com/photo-1558494949-efc02570fbc9?q=80&w=2068&auto=format&fit=crop" }, // Connectivity
                { name: "SQL/MySQL", level: "Intermediate", image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97663?q=80&w=2070&auto=format&fit=crop" }, // Structured Data
                { name: "Git & GitHub", level: "Advanced", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop" } // Code control
            ]
        },
        {
            title: "Hard Skills",
            icon: <HiBadgeCheck />,
            description: "Data and engineering capabilities",
            bgClass: "bg-indigo-500/10",
            iconClass: "text-indigo-400",
            skills: [
                { name: "Data Analysis", level: "Advanced", hot: true, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" }, // Data graphs
                { name: "Machine Learning", level: "Intermediate", hot: true, image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop" }, // Brain/AI
                { name: "Model Deployment", level: "Intermediate", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" }, // Cloud/Tech
                { name: "ETL & Data Cleaning", level: "Intermediate", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" }, // Charts/Process
                { name: "Pandas & NumPy", level: "Advanced", image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070&auto=format&fit=crop" }, // Matrix/Numbers
                { name: "Jupyter Notebooks", level: "Advanced", image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=2070&auto=format&fit=crop" }, // Notebook/Code
                { name: "Docker", level: "Intermediate", image: "https://images.unsplash.com/photo-1605745341117-95752b218d6c?q=80&w=1974&auto=format&fit=crop" }, // Containers
                { name: "Automated Testing", level: "Intermediate", image: "https://images.unsplash.com/photo-1607799275518-d750d7e6783c?q=80&w=2072&auto=format&fit=crop" } // Testing/Check
            ]
        },
        {
            title: "Certifications & Achievements",
            icon: <HiAcademicCap />,
            description: "Professional certifications and academic achievements",
            bgClass: "bg-green-500/10",
            iconClass: "text-green-400",
            skills: [
                { name: "Python Fundamentals", level: "Verified", image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop" },
                { name: "Data Science Tools", level: "Verified", image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop" },
                { name: "Machine Learning", level: "Verified", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop" }
            ]
        }
    ],
    education: [
        {
            institution: "Carmel Fatima College, KalmunaI",
            degree: "Grade 1-13",
            period: "Jan 2006 - Dec 2024",
            location: "KalmunaI, Sri Lanka",
            description: "A fast learner with a good performance in studies, class topper",
            grade: "Class Topper",
            achievements: [
                "A/L Examination in Technology: C3",
                "Z-Score: 1.0098",
                "O/L Examination: 3A4B2C",
                "Activities: GOOD STUDENT, BEST STUDENT"
            ],
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" // School placeholder
        },
        {
            institution: "University of Colombo",
            degree: "Python Programming",
            period: "Aug 2025 - Sep 2025",
            location: "Colombo, Sri Lanka",
            description: "Comprehensive Python programming course covering fundamentals and advanced topics",
            skills: ["MySQL", "Python", "Object-Oriented Programming (OOP)", "NumPy", "Pandas", "Graphical User Interface (GUI)"],
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" // Coding placeholder
        },
        {
            institution: "Eastern University Sri Lanka",
            degree: "Bachelor's degree, Information Communication Technology",
            period: "2025 - Present",
            location: "Sri Lanka",
            description: "Currently pursuing Bachelor's degree in ICT",
            grade: "Just Selected",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop" // Uni placeholder
        },
        {
            institution: "British Council",
            degree: "BC English (B1)",
            period: "Feb 2025 - Aug 2026",
            location: "Sri Lanka",
            description: "English language proficiency certification",
            grade: "B1",
            skills: ["Speaking", "Listening", "Reading", "Writing"],
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop" // English/Books placeholder
        }
    ],
    certifications: [
        {
            title: "PYTHON FUNDAMENTALS",
            issuer: "University of Colombo School of Computing",
            issuedDate: "Oct 2025",
            credentialId: "CSC/PF/2025/GR_03/016",
            skills: ["Python (Programming Language)", "NumPy", "pandas", "MySQLi"],
            image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop"
        },
        {
            title: "Problems, Algorithms and Flowcharts",
            issuer: "IBM",
            issuedDate: "Oct 2025",
            credentialId: "FRWLXZW4SGB9",
            skills: ["Program Development", "Computational Thinking", "Algorithms", "Computer Science"],
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop"
        },
        {
            title: "Tools for Data Science",
            issuer: "IBM",
            issuedDate: "Sep 2025",
            credentialId: "DIVCBPNU7C9N",
            skills: ["Data Science", "Python", "Github", "IBM Cloud", "R Studio", "Jupyter"],
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "The Data Science Profession – Student View",
            issuer: "IBM",
            issuedDate: "Apr 2025",
            credentialId: "D9OVHFOVNQB8",
            skills: ["Applied Machine Learning", "Data Science", "Machine Learning Algorithms", "Python"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        }
    ],
    experiences: [
        {
            company: "Novians",
            position: "Data Analyst & ML/AI Intern",
            period: "1 Month",
            description: "Completed a 1-month internship focusing on Data Analysis, Machine Learning, and AI.",
            technologies: ["Data Analysis", "Machine Learning", "Artificial Intelligence"]
        }
    ],
    about: {
        title: "Who Am I?",
        description: "I am Abool Jaya Muhris, a passionate Data Scientist and AI Engineer. My journey is defined by a relentless curiosity to understand the world through data.",
        fit: "How I Fit",
        fitDescription: "I bridge the gap between raw data and actionable intelligence. With a strong foundation in both software engineering and data science, I build scalable solutions that solve real-world problems.",
        knowledge: "My Knowledge",
        knowledgeDescription: "From deep learning neural networks to interactive web applications, my technical arsenal is diverse and constantly expanding."
    },
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@MUHRIS-AJ",
            link: `https://github.com/MUHRIS-AJ`
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Abool Jaya Muhris",
            link: "https://www.linkedin.com/in/abool-jaya-muhris-975220350/"
        },
        {
            icon: <FaInstagram className="w-5 h-5" />,
            label: "Instagram",
            value: "@hum_x_nur",
            link: "https://www.instagram.com/hum_x_nur/"
        },
        {
            icon: <FaWhatsapp className="w-5 h-5" />,
            label: "WhatsApp",
            value: "+94 77 5551 712",
            link: "https://wa.me/94775551712"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Sri Lanka",
            link: null
        }
    ]
}
