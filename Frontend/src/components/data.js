//Home Page imports
import {HiOutlineMail} from 'react-icons/hi'
import {LiaLinkedin} from 'react-icons/lia'
import {AiFillGithub} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {SiLeetcode} from 'react-icons/si'
import { FaWhatsapp } from "react-icons/fa";

// About Page imports
import { FaGraduationCap,FaLaptop } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";


//Skills Page imports
import Arduino from "../images/skills/arduino.png";
import Bootstrap from "../images/skills/bootstrap.png";
import Css from "../images/skills/css.png";
import Dj from "../images/skills/dj.png";
import C from "../images/skills/c.png";
import Express from "../images/skills/express.png";
import Java from "../images/skills/java.png";
import Python from "../images/skills/python.png"
import Firebase from "../images/skills/firebase.png"
import Git from "../images/skills/git.png"
import Html from "../images/skills/html.png"
import Js from "../images/skills/js.png"
import Mongo from "../images/skills/mongo.png"
import My from "../images/skills/my.png"
import Node from "../images/skills/node.png"
import Opencv from "../images/skills/opencv.png"
import Oracle from "../images/skills/oracle.png"
import Pandas from "../images/skills/pandas.png"
import Pug from "../images/skills/pug.png"
import React from "../images/skills/react.png"
import Sci from "../images/skills/sci.png"
import Seaborn from "../images/skills/seaborn.png"
import Sqlite from "../images/skills/sqlite.png"

import DsAnalysis from "../images/certificates/analysis.png"
import Cfor from "../images/certificates/C.png"
import Datas from "../images/certificates/datas.png"
import DS from "../images/certificates/ds.png"
import Dscap from "../images/certificates/dscap.png"
import DsMetho from "../images/certificates/dsmetho.png"
import HCJ from "../images/certificates/hcj.png"
import ML from "../images/certificates/ml.png"
import Prof1 from "../images/certificates/prof.png"
import Prof2 from "../images/certificates/professional.png"
import Py1 from "../images/certificates/python1.png"
import Py2 from "../images/certificates/python2.png"
import SQL from "../images/certificates/sql.png"
import SQlds from "../images/certificates/sqlds.png"
import Tools from "../images/certificates/tools.png"
import Visual from "../images/certificates/visual.png"


//Projects page import

import dog from "../images/Projects/dog.jpg"
import esc from "../images/Projects/esc.jpg"
import exp from "../images/Projects/exp.jpg"
import flight from "../images/Projects/flight.jpg"
import movie from "../images/Projects/movie.jpg"
import port from "../images/Projects/port.png"
import spa from "../images/Projects/spa.avif"
import trend from "../images/Projects/trend.jpg"

//Work page import
import ok from "../images/work/OK.png"

//Home 

export const socialLinks = [
  {
    link: 'mailto:mahekramdasani@gmail.com',
    icon: <HiOutlineMail className='icon' />,
  },
  {
    link: 'https://api.whatsapp.com/send?phone=919879508137',
    icon: <FaWhatsapp className='icon' />,
  },
  {
    link: 'https://www.linkedin.com/in/mahek-ramdasani-b57398226/',
    icon: <LiaLinkedin className='icon' />,
  },
  {
    link: 'https://github.com/mahekramdasani',
    icon: <AiFillGithub className='icon' />,
  },
  {
    link: 'https://www.instagram.com/mahek__ramdasani',
    icon: <GrInstagram className='icon' />,
  },
  {
    link: 'https://leetcode.com/mahekramdasani/',
    icon: <SiLeetcode className='icon' />,
  },
];


//About Page Data
export const about_data = [
  {
    name: "Me?",
    value: "Hi there! 👋 I'm Mahek Ramdasani, A third-year Computer Science student with a passion for Java Development, Full-Stack Development, and Data Science.",
    icon: null, // Add the corresponding icon here
  },
  {
    name: "Academic Explorer",
    value: "Currently pursuing my Bachelor's in Computer Science, I'm dedicated to learning and adapting to new challenges in the ever-evolving tech landscape.",
    icon: <FaGraduationCap/>, // Add the corresponding icon here
  },
  {
    name: "Tech Enthusiast",
    value: "I thrive on Java Development and love exploring the realms of Full-Stack Development and Data Science. Always eager to apply my skills to innovative projects!",
    icon: <FaLaptop/>, // Add the corresponding icon here
  },
  {
    name: "Future Collaborator",
    value: "Excited to contribute my knowledge and enthusiasm to collaborative projects. I'm on the lookout for opportunities to work with professionals in this dynamic field.",
    icon: <MdOutlineRocketLaunch/>, // Add the corresponding icon here
  },
];

//Skills Page Data
export const skillsArray = [
{ name: "C", img: C },
{ name: "Java", img: Java },
{ name: "Python", img: Python },
{ name: "JavaScript", img: Js },
{ name: "Html", img: Html },
{ name: "Css", img: Css },
{ name: "Pug", img: Pug },
{ name: "Bootstrap", img: Bootstrap },
{ name: "React", img: React },
{ name: "Django", img: Dj },
{ name: "MongoDB", img: Mongo },
{ name: "SQLite", img: Sqlite },
{ name: "MySQL", img: My },
{ name: "Oracle", img: Oracle },
{ name: "Node.js", img: Node },
{ name: "Express", img: Express },
{ name: "Firebase", img: Firebase },
{ name: "OpenCV", img: Opencv },
{ name: "Pandas", img: Pandas },
{ name: "SciPy", img: Sci },
{ name: "Seaborn", img: Seaborn },
{ name: "Arduino", img: Arduino },
{ name: "Git", img: Git },

]

export const certificatesArray = [
    { name: "C For Everyone", img: Cfor },
    { name: "Data Structures", img: DS },
    { name: "HTML,CSS and JavaSript for Web Developers", img: HCJ },
    { name: "The Structured Query Language", img: SQL },
    { name: "Data Science Profeesional Certificate2", img: Prof2 },
    { name: "Data Science Orientation", img: Datas },
    { name: "Tools For Data science", img: Tools },
    { name: "Data Science Methodology", img: DsMetho },
    { name: "Python for Data Science", img: Py1 },
    { name: "Python Project for Data Science", img: Py2 },
    { name: "SQL for Data Science", img: SQlds },
    { name: "Data Analysis with Python", img: DsAnalysis },
    { name: "Data Visualization with Python", img: Visual },
    { name: "Machine Learning", img: ML },
    { name: "Data Science Capstone", img: Dscap },
    { name: "Data Science Profeesional Certificate1", img: Prof1 },
  ];
  

// Project Data

export const projects = [
  {
    name: 'DoggyDiveIn',
    value: 'DoggyDiveIn, a user-friendly website for dog lovers, showcasing full ownership and hands-on development expertise.',
    img: dog, // Add the image URL
    link: 'https://github.com/mahekramdasani/dogwebsite', // Add the project link
  },
  {
    name: 'Trendy-Bytes',
    value: 'TrendyBytes, a captivating blog website, featuring a Django backend and React frontend, highlighting my proficiency in web development, content management, and design.',
    img: trend, // Add the image URL
    link: 'https://github.com/mahekramdasani/blog-website', // Add the project link
  },
  {
    name: 'Expense Tracker',
    value: 'A user-friendly Expense Tracker application, streamlining personal finance management and enhancing financial tracking capabilities.',
    img: exp, // Add the image URL
    link: 'https://github.com/mahekramdasani/expensetracker', // Add the project link
  },
  {
    name: 'Portfolio Website',
    value: 'Personal portfolio website showcasing my skills and projects. Built with modern web technologies to create a visually appealing and informative platform for visitors.',
    img: port, // Add the image URL
    link: 'https://github.com/mahekramdasani/Portfolio', // Add the project link
  },
  {
    name: 'Flight Analysis',
    value: 'Comprehensive flight analysis using Python, leveraging data analytics and visualization to gain valuable insights into aviation trends and performance.',
    img: flight, // Add the image URL
    link: 'https://github.com/mahekramdasani/Python-projects-On-Data-Science/tree/main', // Add the project link
  },
  {
    name: 'SpaceX',
    value: 'SpaceX, launch site analysis using Python, facilitating in-depth assessment of rocket launch operations and site performance.',
    img: spa, // Add the image URL
    link: 'https://github.com/mahekramdasani/Python-projects-On-Data-Science/tree/main', // Add the project link
  },
  {
    name: 'Cinemate',
    value: 'Cinemate, a movie application built on the Django framework, offering an immersive cinematic experience for users.',
    img: movie, // Add the image URL
    link: 'https://github.com/mahekramdasani/Cinemate', // Add the project link
  },
  {
    name: 'EscapeHomes',
    value: 'Escape Homes, a tourism website exclusively dedicated to promoting and showcasing the captivating beauty of Gujarat, fostering tourism and cultural appreciation.',
    img: esc, // Add the image URL
    link: 'https://github.com/mahekramdasani/tourismwebite', // Add the project link
  },
];

export const workData = [
    {
        name: "Origin Konnect",
        img: ok,
        role:"Technology Intern",
        description: "As a Technology Intern at an EXIM business, I managed Excel data files of exports by creating CTL (Clean Transform Load) files using Python within Flask and React environments. Upon completion, I transitioned into the role of Compliance Main Lead, where I led a team in scraping data from official websites for our compliance tool. Additionally, I collaborated on developing the main website, Origin Konnect, using PHP. My contributions included implementing data analytics features, custom CSS, and analytics integration. I also played a key role in converting the Clean Transformed files to SQL and uploading them to the server, enhancing the site's functionality and data management.",
        skills:["Python", "Flask", "React", "PHP", "JavaScript", "SQL", "Excel", "Data Analytics", "Web Scraping", "Data Management", "Leadership"],
        link:"https://originkonnect.in/",
        joinDate:"January 2024",
        current:"Yes",
        endDate:null
    },
]
