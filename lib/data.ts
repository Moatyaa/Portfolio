import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import  cer1 from "@/public/cer1.png"
import  cer2 from "@/public/cer2.png"
import  cer3 from "@/public/cer3.png"
import  html from "@/public/html.png"
import  react  from "@/public/react.png";
import  css  from "@/public/css.png";
import  bootstrap  from "@/public/bootstrap-original.svg";
import  javaScript from "@/public/js.png"
import  TypeScript from "@/public/Typescript_logo_2020.svg"
import  redux from "@/public/redux.png"
import  next from "@/public/next.svg"
import  sass from "@/public/sass.svg"
import  tailwind from "@/public/tailwindcss-original.svg"
import  mui from "@/public/mui.png"
import  framerMotion from "@/public/framer-motion.png"
import  git from "@/public/git.png"
import  antiDesign from "@/public/antdesign.png"
import  vite from "@/public/vite.png"
import  linkedin from "@/public/linkedin.png"
import  gitHup from "@/public/github.png"
import  whatsapp from "@/public/whatsapp.png"
import  x from "@/public/twitter.png"
import  instagram from "@/public/instagram.png"
import  facebook from "@/public/facebook.png"
import  reservation from "@/public/reservationSystem.png"
import  freshCart from "@/public/FRESH.png"
import  dashboard from "@/public/dashboard.jpg"
import  egypt from "@/public/egypt.png"
import  meal from  "@/public/mealify.png"
import  signInUp from "@/public/signInUp.png"
import  familyBakery from "@/public/familyBakery.png"
import  portfolio from "@/public/portfolio.png"
import  portfolio2 from "@/public/Portfolio2.png"
import  Meals from "@/public/Meals.png"

export const links = [
    {
        name: "Home",
        hash: "#hero",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Courses",
        hash: "#courses",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const coursesData = [
    {
        title: "The web development challenger track with Egypt fwd.",
        location: "UDACITY",
        description: {
            title: "Core Web Development Skills:",
            courseDes: [
                "Fundamentals of HTML, CSS, and JavaScript.",
                "Introduction to responsive web design principles.",
                "Hands-on projects to reinforce learning of essential front-end technologies.",
                "Culminates in a comprehensive final exam.",
            ]
        },
        date: "December 2021",
        certificateUrl:cer1
    },
    {
        title: "Professional Front-End Nanodegree Program.",
        location: "UDACITY",
        description: {
            title: "Improve Web Development Skills:",
            courseDes: [
                    "focus on responsive design, accessibility, and performance\n" +
                        "optimization techniques."
            ]
        },
        date: "December 2021",
        certificateUrl:cer2
    },{
        title: "A Front-End Development Diploma.",
        location: "Route IT Training Center, EG",
        description: {
            title: "Front End Development Diploma",
            courseDes: [
                "More Advanced HTML, CSS including bootstrap.",
                "Tailwindcss and Sass.",
                "JavaScript and jQuery.",
                "Webpack and vite.",
                "React (including context, redux) and Next.js.",
            ]
        },
        date: "October 2023",
        certificateUrl:cer3
    }


] as const;

export const experiencesData = [
    {
        title: "Front-End Developer",
        location: "Management of Armed Forces Clubs and Hotels",
        description:
            "a Front-End Developer at the Management of Armed Forces Clubs and Hotels since October 2023, played a key role in enhancing the organization’s operations by designing and developing several systems to improve efficiency and user experience. My stack includes React, Next.js, TypeScript, Tailwind and Mui.",
        icon: React.createElement(FaReact),
        date: "2023 - present",
    },
    {
        title: "Front-End Developer",
        location: "Route Academy",
        description:
            "a Trainee at Route Academy from July to October 2023,gained valuable experience in web development by working on building an e-commerce platform using React.",
        icon: React.createElement(CgWorkAlt),
        date: "April 2023 - October 2023 "
    },
    {
        title: "Graduated",
        location: "Tanta University",
        description:
            "I completed my Bachelor's degree in Engineering at Tanta University, where I achieved an accumulative grade of \"Very Good\". One of the highlights of my studies was my AI-based Reading Machine project, which I worked on as part of my final year project and received an Excellent grade for. It was an exciting experience, combining AI technology with practical applications to create something innovative.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    }
] as const;

export const projectsData = [
    {
        title: "Hotels Reservation Management System",
        description:
            "In this project, I focused on enhancing the booking and room management system, streamlining the process for staff to handle reservations, check room availability, and manage customer requests with ease. I also designed detailed customer profiles, allowing the system to provide personalized services, targeted promotions, and a more tailored guest experience.",
        tags: ["React", "Next.js" , "TypeScript","Context" ,"tailwind", "ant Design"],
        projectDetails: "\n" +
            "I improved booking and room management, enabling staff to handle reservations and customer requests easily. I also created detailed customer profiles for personalized service and developed a user-friendly Admin Dashboard for efficient operations management.",
        imageUrl: reservation,
        projectUrl: ''
    },
    {
        title: "Fresh Cart E-Commerce",
        description:
        "I developed a fully functional e-commerce platform called Fresh Cart using React. This project gave me hands-on experience in building dynamic, responsive user interfaces and managing product listings. I also worked on handling user interactions and integrating essential features like shopping carts and payment systems. My goal was to create a smooth and engaging shopping experience for users, ensuring that the platform was both intuitive and efficient.",
        tags: ["React" ,"Context" ,"Bootstrap", "ant Design"],
        projectDetails: "I developed \"Fresh Cart,\" a fully functional e-commerce platform using React, focusing on dynamic UIs, product listings, and features like shopping carts and payment systems for a smooth, engaging user experience.",
        imageUrl: freshCart,
        projectUrl: 'https://freshmart1.vercel.app/'
    },
    {
        title: "Transaction Dashboard",
        description:
        "I designed an intuitive Admin Dashboard for the Hotels Reservation Management System, providing an efficient interface to manage bookings, track room availability, and update customer information. The dashboard enables hotel staff to easily monitor and control operations, improving workflow and reducing manual errors. It offers key features like real-time updates on reservations, quick access to customer profiles, and tools for handling room assignments, all aimed at enhancing operational efficiency and customer service."    ,
        tags: ["React" , "JavaScript" ,"Css", "Chart.js"],
        projectDetails: "a user-friendly Admin Dashboard for the Hotels Reservation Management System, streamlining hotel operations and enabling efficient management of bookings, room assignments, and customer requests.",
        imageUrl: dashboard,
        projectUrl: ''
    },{
        title: "Explore Egypt",
        description:
            "This is a single-page website promoting Egypt as a travel destination. It features sections on home, tourist categories, and contact information, highlighting various attractions like Khan el-Khalili, Luxor hot air balloons, and the pyramids. The page includes a responsive design with interactive navigation and social media links. Overall, it offers a visually appealing and informative guide to visiting Egypt."    ,
        tags: ["Html" , "Css" ,"Js", "Responsive"],
        projectDetails: "This single-page website promotes Egypt as a travel destination, showcasing attractions like Khan el-Khalili, Luxor hot air balloons, and the pyramids. It features responsive design, interactive navigation, and social media links for an informative guide to visiting Egypt.",
        imageUrl: egypt,
        projectUrl: ''
    },
    {
        title: "Mealify",
        description:
            "A dynamic restaurant landing page designed to showcase a delicious dining experience. The website highlights the talents of professional chefs, a vibrant gallery of meals, and easy navigation for booking a table or contacting the restaurant. It features a clean, modern design with dark mode functionality for a personalized user experience. The project aims to offer a seamless and engaging platform for customers to explore, interact, and stay connected with the restaurant."    ,
        tags: ["Html" ,"Css" , "JavaScript" ,"Bootstrap", "Responsive"],
        projectDetails: "a dynamic restaurant landing page that highlights professional chefs, a meal gallery, and easy table booking. With a clean, modern design and dark mode functionality, it offers a seamless, engaging experience for customers to explore and connect with the restaurant.",
        imageUrl: meal,
        projectUrl: 'https://meallify.vercel.app/'
    },
    {
        title: "Sign In-Up",
        description:
            "a user-friendly sign-up and sign-in page for \"CaseFair.\" It features a dynamic interface that toggles between the sign-in and sign-up forms using smooth animations. Users can choose to register via social media accounts or email. The code handles form input visibility and text updates for an engaging experience, ensuring smooth transitions between the two states."    ,
        tags: ["Html" ,"Css" , "JavaScript" , "Responsive"],
        projectDetails: "I created a user-friendly sign-up and sign-in page for \"CaseFair\" with smooth animations that toggle between forms. Users can register via social media or email, with dynamic input visibility and text updates for a seamless experience.",
        imageUrl: signInUp,
        projectUrl: 'https://sign-in-up1.vercel.app/'
    },
    {
        title: "Family Bakery Website",
        description:
            "This project is a part of my training at Route Academy, where I was tasked with developing a website for a \"Family Bakery.\" . I implemented a clean, responsive layout using HTML and CSS, ensuring the site is user-friendly and functional across different devices. This project allowed me to apply my web development skills in a real-world scenario, improving my proficiency in front-end design and user experience."    ,
        projectDetails: "This project, part of my training at Route Academy, involved developing a responsive website for a \"Family Bakery\" . It enhanced my front-end design skills and user experience proficiency.",
        tags: ["Html" ,"Css" , "Responsive"],
        imageUrl: familyBakery,
        projectUrl: 'https://family-bakery1.vercel.app/'
    }, {
        title: "Portfolio",
        description:
            "This project was developed as part of my training at Route Academy. The objective was to create a professional portfolio website create a responsive, visually appealing, and user-friendly website. Key features included interactive navigation,The project allowed me to strengthen my skills in HTML, CSS, JavaScript, and web design principles and provided valuable hands-on experience in building a complete website structure, which aligns with real-world development practices."    ,
        tags: ["Html" ,"Css" , "javaScript" , "Responsive", "Bootstrap"],
        projectDetails: 'Developed during my training at Route Academy, this project involved creating a responsive, user-friendly portfolio website with interactive navigation. It strengthened my skills in HTML, CSS, JavaScript, and web design principles, providing hands-on experience in building a complete website structure.',
        imageUrl: portfolio,
        projectUrl: 'https://fokir-two.vercel.app/'
    }, {
        title: "Portfolio",
        description:
            "structure of a personal website, That the layout uses Bootstrap for responsiveness and includes icons from Font Awesome. It also integrates custom CSS styles and animations, with sections designed to showcase the individual's skills, work, and contact information.\n",
        tags: ["Html" ,"Css" , "javaScript" , "Responsive", "Bootstrap"],
        projectDetails: 'a personal website with a responsive layout using Bootstrap and Font Awesome icons. The site includes custom CSS styles and animations, featuring sections to display skills, work, and contact information.',
        imageUrl: portfolio2,
        projectUrl: 'https://danfolio-swart.vercel.app/'
    },
    {
        title: "MealDB",
        description:
            "This JavaScript-based web application allows users to explore meals from an API, search for meals by name or first letter, and view detailed information about meals, including ingredients, instructions, and more. It features a side menu for easy navigation between sections like categories, areas, and ingredients. The interface includes a dynamic loading screen, search functionalities, and user validation for a contact form. Meals can be filtered by categories, areas, or ingredients, providing a rich and interactive browsing experience.."    ,
        tags: ["Html" ,"Css" , "javaScript" , "jQuery","Responsive"],
        projectDetails: "JavaScript web app enables users to discover meals from an API, search by name or letter, and view detailed information. It includes a side menu for easy navigation, dynamic loading, and search features. Meals can be filtered by categories, areas, or ingredients for a more interactive experience.",
        imageUrl: Meals,
        projectUrl: "https://meal-db1.vercel.app/"
    }
] as const;

export const skillsData = [
    {
        skill: "HTML",
        imageUrl: html ,
    },
    {
        skill: "CSS",
        imageUrl: css ,
    },
    {
        skill: "Bootstrap",
        imageUrl: bootstrap ,
    },
    {
        skill: "JavaScript",
        imageUrl: javaScript ,
    },
    {
        skill: "TypeScript",
        imageUrl: TypeScript ,
    },
    {
        skill: "React",
        imageUrl: react ,
    },
    {
        skill: "Redux",
        imageUrl: redux ,
    },
    {
        skill: "Next.js",
        imageUrl: next ,
    },
    {
        skill: "Sass",
        imageUrl: sass ,
    },
    {
        skill: "Tailwind",
        imageUrl: tailwind ,
    },
    {
        skill: "Material UI ",
        imageUrl: mui ,
    },
    {
        skill: "Ant Design",
        imageUrl: antiDesign ,
    },
    {
        skill: "Git",
        imageUrl: git ,
    },
    {
        skill: "Framer Motion",
        imageUrl: framerMotion ,
    },
    {
        skill: "Vite",
        imageUrl: vite ,
    },
] as const;

export const socialLinks = [
    {
        name: "LinkedIn",
        icon:linkedin,
        href: 'https://www.linkedin.com/in/muhammadatya'
    },
    {
        name:'Git Hup',
        icon: gitHup,
        href: 'https://github.com/Moatyaa'
    },{
        name: "Whats App",
        icon: whatsapp ,
        href: 'https://wa.me/+201090113525'

    },{
        name: 'Face Book',
        icon:  facebook,
        href: 'https://www.facebook.com/profile.php?id=100015476405021&mibextid=ZbWKwL'

    }
    ,{
        name: 'X',
        icon: x,
        href: 'https://x.com/Moatyaa?t=lEcwH7yQ7xrJvqm52H84Ww&s=09'
    }
    ,{
        name: 'Instagram',
        icon: instagram,
        href: 'https://www.instagram.com/muhammadatya10?igsh=MWQ0ZWs5OGl2N3lmeA=='
    }
] as const
