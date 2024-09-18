//Home Page imports
import {HiOutlineMail} from 'react-icons/hi'
import {LiaLinkedin} from 'react-icons/lia'
import {AiFillGithub} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {SiLeetcode} from 'react-icons/si'
import { FaWhatsapp } from "react-icons/fa";

// About Page imports
import { FaGraduationCap,FaLaptop,FaCode } from "react-icons/fa";
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
import Php from "../images/skills/php.png"
import Flask from "../images/skills/flask.png"

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
import TC from "../images/certificates/tata-crucible.jpg"
import Flipkart from "../images/certificates/flipkart.jpg"
import Myntra from "../images/certificates/myntra.jpg"

//Projects page import

import dog from "../images/Projects/dog.jpg"
import tune from "../images/Projects/tune.png"
import book from "../images/Projects/book.jpeg"
import maze from "../images/Projects/maze.jpg"
import esc from "../images/Projects/esc.jpg"
import exp from "../images/Projects/exp.jpg"
import flight from "../images/Projects/flight.jpg"
import movie from "../images/Projects/movie.jpg"
import port from "../images/Projects/port.png"
import spa from "../images/Projects/spa.avif"
import trend from "../images/Projects/trend.jpg"

//Work page import
import ok from "../images/work/OK.png"
import aktiv from "../images/work/aktiv.png"
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



export const about_data = [
  {
    name: "Who Am I?",
    value: "Hi there! 👋 I'm Mahek Ramdasani, a motivated third-year Computer Engineering student with a strong focus on ERP systems, Java Development, Full-Stack Web Development, and Data Science. I love applying my skills to real-world challenges!",
    icon: <FaCode />, // Icon representing a developer
  },
  {
    name: "Academic Explorer",
    value: "Pursuing my Bachelor's in Computer Engineering at LJ University, I’m committed to mastering new technologies and adapting to the rapidly evolving tech world. My academic performance, with a SPI of 9.48, reflects my dedication to learning.",
    icon: <FaGraduationCap />, // Icon for academic achievements
  },
  {
    name: "Tech Enthusiast",
    value: "From building music recommendation platforms to developing library management systems and tech blogs, I am always excited about Java, Full-Stack Development, Python, and Data Science. Every project helps me push my technical boundaries.",
    icon: <FaLaptop />, // Icon for technology and development
  },
  {
    name: "Future Collaborator",
    value: "I’m eager to contribute my skills to innovative, collaborative projects. With experience in internships at Aktiv Software and Origin Konnect, I’m actively looking for opportunities to work with industry professionals on impactful tech solutions.",
    icon: <MdOutlineRocketLaunch />, // Icon symbolizing growth and future aspirations
  },
];


//Skills Page Data
export const skillsArray = [
{ name: "C(){}", img: C },
{ name: "Java.Class{}", img: Java },
{ name: "Python:", img: Python },
{ name: "JS.onclick{}", img: Js },
{ name: "<HTML/>", img: Html },
{ name: ".CSS{}", img: Css },
{ name: "Pug<>", img: Pug },
{ name: ".Bootstrap{}", img: Bootstrap },
{ name: "React()</>", img: React },
{ name: "Dj::Model", img: Dj },
{name:"Flask@route", img:Flask},
{name:"<?PHP?>", img:Php},
{ name: "MongoDB{}->", img: Mongo },
{ name: "SQLite.db", img: Sqlite },
{ name: "MySQL->", img: My },
{ name: "Oracle(DB)", img: Oracle },
{ name: "Node.js()", img: Node },
{ name: "Express('/')", img: Express },
{ name: "Firebase{}", img: Firebase },
{ name: "OpenCV(Mat)", img: Opencv },
{ name: "Pandas.df", img: Pandas },
{ name: "SciPy.func()", img: Sci },
{ name: "Sns.plot()", img: Seaborn },
{ name: "Arduino.loop()", img: Arduino },
{ name: "Git.commit()", img: Git },

]

export const certificatesArray = [
    {name: "TATA Crucible Campus Quiz 2024",img: TC},
    {name: "Flipkart GRiD 6.0 - Software Development Track",img: Flipkart},
    {name: "Myntra HackerRamp: WeForShe 2024",img: Myntra},
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
    name:"TuneTrek",
    value:"Tune Trek is a cool music site that gives you recommendations based on what you like.",
    img:tune,
    link:"https://github.com/mahekramdasani/TuneTrek"
  },
  {
    name:"BookBreeze",
    value:"Bookbreeze is a library system that helps manage everything smoothly for librarians and makes things easier for library users.",
    img:book,
    link:"https://github.com/mahekramdasani/BookBreeze"
  },
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
    name:"Maze-Craze",
    value:"A simple Java application demonstrating maze-solving algorithm using depth-first search (DFS) with graphical user interface (GUI) using Java Swing",
    img:maze,
    link:'https://github.com/mahekramdasani/MazeGenerationAndSolver'
  },
  {
    name: 'Expense Tracker',
    value: 'A user-friendly Expense Tracker application, streamlining personal finance management and enhancing financial tracking capabilities.',
    img: exp, // Add the image URL
    link: 'https://github.com/mahekramdasani/expensetracker', // Add the project link
  },
  {
    name: 'Flight Analysis',
    value: 'Comprehensive flight analysis using Python, leveraging data analytics and visualization to gain valuable insights into aviation trends and performance.',
    img: flight, // Add the image URL
    link: 'https://github.com/mahekramdasani/Python-projects-On-Data-Science/tree/main', // Add the project link
  },
  {
    name: 'EscapeHomes',
    value: 'Escape Homes, a tourism website exclusively dedicated to promoting and showcasing the captivating beauty of Gujarat, fostering tourism and cultural appreciation.',
    img: esc, // Add the image URL
    link: 'https://github.com/mahekramdasani/tourismwebite', // Add the project link
  },
  {
    name: 'Portfolio Website',
    value: 'Personal portfolio website showcasing my skills and projects. Built with modern web technologies to create a visually appealing and informative platform for visitors.',
    img: port, // Add the image URL
    link: 'https://github.com/mahekramdasani/Portfolio', // Add the project link
  },
  
];

export const workData = [
  {
    name: "Aktiv Software",
    img: aktiv, // Add relevant image for Aktiv Software
    role: "Software Engineer Intern",
    description: "Acquired in-depth training in Odoo and Python, leveraging this knowledge in real-world applications to improve ERP system efficiency. Enhanced analytical and technical skills by working on Odoo applications and Python programming.",
    skills: ["Odoo", "Python", "ERP Systems", "XML", "Problem-Solving"],
    link: "https://aktivsoftware.com/",
    joinDate: "JUN 2024",
    current: "YES"
},
  {
      name: "Origin Konnect",
      img: ok,
      role: "Technology Intern",
      description: "Led a compliance team in managing export data using Flask and React, implementing data scraping solutions that enhanced company growth by one-third. Collaborated with mentors to improve data analytics performance and website functionality in a month by developing data solutions using PHP. Managed export data and converted CTL files to SQL for server uploads.",
      skills: ["Python", "Flask", "React", "PHP", "JavaScript", "SQL", "Web Scraping", "Data Analytics", "Leadership"],
      link: "https://originkonnect.in/",
      joinDate: "JAN 2024",
      current: "No",
      endDate: "APR 2024"
  },
  
];
