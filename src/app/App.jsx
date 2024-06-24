import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/rohit_resume.pdf';

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiNodejs, DiMongodb, DiFirebase } from "react-icons/di";
//import images
import cybersense from '../assets/images/Cybersense.png';
import netflix from '../assets/images/Netflix.png';
import shop from '../assets/images/Shop.png';
import tourplanet from '../assets/images/TourPlanet.png';
// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'HTML 5',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS 3',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'Java Script',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	{
		name: "TypeScript",
		icon: <SiTypescript size="25px" color="white" />,
		cssName: "type-script"
	},
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	{
		name: 'Redux ToolKit',
		icon: <BiLogoRedux size="25px" color="white" />,
		cssName: "redux"
	},
	{
		name: 'Node.js',
		icon: <DiNodejs size="25px" color="white" />,
		cssName: "nodejs"
	  },
	  {
		name: 'Express.js',
		icon: <BiLogoJavascript size="25px" color="white" />, // Example icon, adjust as needed
		cssName: "expressjs"
	  },
	  {
		name: 'MongoDB',
		icon: <DiMongodb size="25px" color="white" />,
		cssName: "mongodb"
	  },
	  {
		name: 'Firebase',
		icon: <DiFirebase size="25px" color="white" />,
		cssName: "firebase"
	  },
	{
		name: 'Responsive Design',
		icon: <FaMobileAlt size="25px" color="white" />,
		cssName: "responsive"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'java',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'C++',
		icon: <TbBrandCpp size="25px" color="white" />,
		cssName: "cpp"
	},
	{
		name: 'Problem Solving',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	}
];

const projects = [
	{
		name: 'CyberSense',
		link: 'https://monumental-eclair-fe8a5d.netlify.app/',
		github: 'https://github.com/Rohit-0508',
		description: 'CyberSense is an educational platform designed to introduce beginners to cybersecurity fundamentals. Developed using the MERN (MongoDB, Express, React, Node.js) stack, it showcases my full-stack web development skills. The site offers valuable resources and insights, making it a go-to for students, professionals, and enthusiasts looking to enhance their cybersecurity knowledge.',
		image: cybersense
	},
	{
		name: `NetFix-Clone`,
		link: 'https://zesty-zabaione-a922cf.netlify.app/login',
		github: 'https://github.com/Rohit-0508/Netflix-Clone',
		description: "The Netflix Clone is a streaming service replica designed to showcase my skills in React.js, API integration, and Firebase authentication. This project mirrors Netflix's user experience, offering a seamless interface for browsing and streaming content. The implementation of Firebase ensures secure and efficient user authentication, demonstrating my proficiency in modern web technologies.",
		image: netflix
	},
	{
		name: 'SHOP',
		link: '',
		github: 'https://github.com/Rohit-0508/E-commerce',
		description: 'Shop is an e-commerce platform developed using the MERN stack (MongoDB, Express, React.js, Node.js). This project replicates a modern online shopping experience, featuring user-friendly navigation, product listings, and secure checkout. The backend is built with Node.js and Express, while the frontend is crafted with React.js, ensuring a seamless and dynamic user interface. MongoDB handles the data storage, providing efficient and scalable solutions for managing product inventories and user information.',
		image: shop
	},
	{
		name: 'Tour Planett',
		link: 'https://tourplanet.000webhostapp.com/',
		github: 'https://github.com/Rohit-0508/TourPlanet',
		description: 'Tourplanet is a frontend-only travel website designed using HTML, CSS, and JavaScript. This project showcases a modern and visually appealing interface for browsing flights, hotels, and travel packages. While it does not support actual bookings, Tourplanet highlights my skills in creating engaging and user-friendly web interfaces without a backend. The site features interactive elements and responsive design to provide an optimal viewing experience on various devices.',
		image: tourplanet
	}
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_5wq80oc', 'template_6j3zclc', form.current, 'NYpX0r2Y5YjF9nNbY')
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

	return (
		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
					<FaReact color='var(--primary-main)' size='50px' />
					<h5>Rohit Verma</h5>
				</a>
				<ul>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			}

			{/* Home */}
			<div id='Home' className={style.home}>
				<div className={style["home-content"]}>
					<h1>HEY, I'M Rohit Verma</h1>
					<p>Passionate Full Stack Web Developer specializing in crafting dynamic and responsive web applications. Experienced with the MERN stack, and skilled in creating seamless user experiences and robust backend solutions. Driven by a love for coding and innovation, constantly exploring new technologies to enhance projects. Let's create something amazing together!</p>
					<a
						href={cv}
						download="cv-PDF-document"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DownloadButton >
							Download CV
						</DownloadButton>
					</a>
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/Rohit-0508' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/rohit-verma-0324102b8/' >
						<AiFillLinkedin size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:rohitranaut4@gmail.com?subject=SendMail&body=Description" >
						<BiLogoGmail size="30px" color='black' />
					</a>

				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>About Me</h2>
					<p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							<h3>Get to know me!</h3>
							<p>
								I'm a <span>Full Stack Web Developer</span> creating dynamic and responsive Websites and Web Applications that drive the success of the overall product. Check out some of my work in the <span>Projects</span> section. <br /><br />
								I also enjoy sharing content related to my experiences and learnings in <span>Web Development</span> to help others in the Dev Community. Feel free to connect or follow me on my <a href="https://github.com/IbrahimHiarea" target="_blank">Github</a> where I post useful content related to Web Development and Programming. <br /><br />
								I'm open to <span>Job</span> opportunities where I can contribute, learn, and grow. If you have a suitable opportunity that matches my skills and experience, don't hesitate to <span>contact</span> me.
							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>My Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projects</h2>
					<p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											<IconButton
												width="170px"
												height="50px"
												backgroundColor="var(--primary-main)"
												color="white"
												link={project.link}
												icon={<AiOutlineEye size="25px" color='white' />}
											>
												Live Demo
											</IconButton>
											<IconButton
												width="100px"
												height="50px"
												backgroundColor="black"
												color="white"
												link={project.github}
												icon={<AiFillGithub size="25px" color='white' />}
											>
												Github
											</IconButton>
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>

			{/* Contact */}
			<div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contact</h2>
					<p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
					<form
						ref={form} onSubmit={sendEmail}
						className={
							clsx(
								{ [style['inactive-form']]: loading }
							)}
					>
						<InputField
							width="700px"
							height="40px"
							name="name"
							placeholder="Enter Your Name"
							label="Name"
							type="text"
						/>
						<InputField
							width="700px"
							height="40px"
							name="email"
							placeholder="Enter Your Email"
							label="Email"
							type="email"
						/>
						<TextAreaField
							width="700px"
							height="250px"
							name="message"
							placeholder="Enter Your Message"
							label="Message"
							type="text"
						/>
						<SubmitButton
							icon={<RiSendPlaneFill size="20px" color='white' />}
							width="200px"
							height="60px"
							color="white"
							backgroundColor="var(--primary-main)"
						>
							Submit
						</SubmitButton>
						{
							loading &&
							<div className={style.loader}>
								<Loader />
							</div>
						}
					</form>
				</div>
			</div>

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Rohit Verma</h3>
							<p>A Passionate Full Stack Web Developer specializing in crafting dynamic and responsive web applications.</p>
						</div>
						<div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/Rohit-0508' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/rohit-verma-0324102b8/' >
									<AiFillLinkedin size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:rohitranaut4@gmail.com?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
								<a className={style.facebook} target="_blank" href='https://www.facebook.com/ibrahim.hiarea' >
									<BsFacebook size="30px" color='white' />
								</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2024. Made by <span>Rohit Verma</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;