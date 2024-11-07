"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      <section className="first" id="/">
        <div className="intro">
          <h1 >
            Hi! I am Ismail <br /> a Web Developer
          </h1>
          <h3 >
          Pursuing a path to becoming a full-stack developer, I am deeply committed to mastering both front-end and back-end technologies. I am passionate about building responsive, user-centered websites and applications, and I am driven to continuously expand my skills and tackle new challenges in full-stack development.
          </h3>
          <div className="buttons">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover="hover"
              className="download"
            >
              <a href="/CV.png" download>
                Download CV
              </a>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover="hover"
              className="hire"
            >
              <a href="mailto:ismailahmedshahpk@gmail.com?subject=Hiring Inquiry&body=Hi,,,">
                Hire Me
              </a>
            </motion.button>
          </div>
        </div>
        <motion.div className="profile">
  <div className="pic">
    <Image
      src={"/GitHub.jpeg"}
      alt="profile-pic"
      width={100}
      height={100}
    />
  </div>
</motion.div>

      </section>
      <section className="about" id="about">
        <div className="content">
          <div className="h1 text-center">About me</div>
          <p>
          With a strong foundation in office management and administration, and over eight years of experience at Karachi International Container Terminal (KICT), I am now expanding my expertise in web development through the Governor of Sindh IT Initiative (GIAIC), with a focus on Metaverse, Blockchain, Web 3.0, and emerging technologies. As a dedicated learner and a passionate front-end developer, I am committed to advancing toward full-stack development, ready to tackle new challenges in the dynamic tech landscape.
          </p>
        </div>
      </section>
      <section className="projects" id="projects">
        <h1 className="text-center">Projects</h1>
        <div className='custom-grid'>

          <div className="card">
            <div className="image">
              <Image src={'/Currency-Converter.png'} alt="currency-converter" width={300} height={200} layout="responsive" />
            </div>
            <div className="des">
              <p className="text-center text-gray-800 w-[300px]">A Next.js-powered currency converter application that delivers fast, real-time currency conversions through an intuitive, responsive interface designed for seamless user experience and accurate calculations.</p>
            </div>
            <div className="link">
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover="hover"
                className="hire"
              >
                <a href="https://currency-converter-30-days-of30-projects-in-next-js.vercel.app/" target="blank" className="text-blue-700 font-bold text-xl underline">
                Currency Converter App
                </a>
              </motion.button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src={'/weatherapp.png'} alt="currency" width={120} height={50} className="w-full h-full rounded-[10px]" />
            </div>
            <div className="des">
              <p className="text-center text-gray-800 w-[300px]">A Next.js-powered weather app providing real-time temperature updates with an intuitive, responsive interface, designed for quick and easy access to current weather information.</p>
            </div>
            <div className="link">
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover="hover"
                className="hire"
              >
                <a href="https://weather-widget-30-daysof-30-projects.vercel.app/" target="blank" className="text-blue-700 font-bold text-xl underline">
                Weather Widget App
                </a>
              </motion.button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src={'/recipe.png'} alt="currency" width={100} height={50} className="w-full h-full rounded-[10px]" />
            </div>
            <div className="des">
              <p className="text-center text-gray-800 w-[300px]">A Next.js recipe search app providing quick access to a variety of recipes for any meal, from lunch to dinner, with an intuitive and responsive interface for easy browsing and inspiration.</p>
            </div>
            <div className="link">
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover="hover"
                className="hire"
              >
                <a href="https://weather-widget-30-daysof-30-projects.vercel.app/" target="blank" className="text-blue-700 font-bold text-xl underline">
                Recipe Search App
                </a>
              </motion.button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src={'/snack-game.png'} alt="currency" width={100} height={50} className="w-full h-full rounded-[10px]" />
            </div>
            <div className="des">
              <p className="text-center text-gray-800 w-[300px]">A Next.js Snake Game app featuring classic gameplay with a sleek, responsive interface for a seamless and engaging playing experience.</p>
            </div>
            <div className="link">
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover="hover"
                className="hire"
              >
                <a href="https://snake-game-30-days-of30-projects-next-js.vercel.app/" target="blank" className="text-blue-700 font-bold text-xl underline">
                Scack Game
                </a>
              </motion.button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src={'/hello-coders.png'} alt="currency" width={100} height={50} className="w-full h-full rounded-[10px]" />
            </div>
            <div className="des">
              <p className="text-center text-gray-800 w-[300px]">A Next.js-based coding school website with an intuitive and visually appealing design, featuring beautiful animations powered by the Acternity UI library.</p>
            </div>
            <div className="link">
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover="hover"
                className="hire"
              >
                <a href="https://hello-coders-coding-school.vercel.app/" target="blank" className="text-blue-700 font-bold text-xl underline">
                Hello Coders Coding School
                </a>
              </motion.button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src={'/portfolio.png'} alt="currency" width={100} height={50} className="w-full h-full rounded-[10px]" />
            </div>
            <div className="des">
              <p className="text-center text-gray-800 w-[300px]">A dynamic Next.js personal portfolio website designed with Tailwind CSS, Shadcn, and Framer Motion, featuring smooth animations and a rich set of features. The site includes a custom scrollbar, interactive pointer, and distinct sections such as Home, About, Services, Projects, Skills, Reviews, Blog, Contact, with an easily accessible &apos;Hire Me&apos; button in the navbar.</p>
            </div>
            <div className="link">
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover="hover"
                className="hire"
              >
                <a href="https://portfolio-ismail-ahmed-shah.vercel.app//" target="blank" className="text-blue-700 font-bold text-xl underline">
                Personal Portfolio Website
                </a>
              </motion.button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src={'/HTML-Portfolio.png'} alt="currency" width={100} height={50} className="w-full h-full rounded-[10px]" />
            </div>
            <div className="des">
              <p className="text-center text-gray-800 w-[300px]">A minimalist homepage portfolio built using only HTML and custom CSS, showcasing a clean and visually appealing interface with an attractive design, ideal for highlighting basic web development skills</p>
            </div>
            <div className="link">
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover="hover"
                className="hire"
              >
                <a href="https://portfolio-html-css-psi-murex.vercel.app/" target="blank" className="text-blue-700 font-bold text-xl underline">
                HTML-CSS Portfolio
                </a>
              </motion.button>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <Image src={'/gov-sindh-clone.png'} alt="currency" width={100} height={50} className="w-full h-full rounded-[10px]" />
            </div>
            <div className="des">
              <p className="text-center text-gray-800 w-[300px]">A responsive clone of the Sindh Government Educational Website built using Next.js, Tailwind CSS, and the Shadcn library, featuring a clean and functional interface.</p>
            </div>
            <div className="link">
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover="hover"
                className="hire"
              >
                <a href="https://clone-governorsindh-com.vercel.app/" target="blank" className="text-blue-700 font-bold text-xl underline">
                 Clone Sindh Government Website
                </a>
              </motion.button>
            </div>
          </div>

        </div>
      </section>
      <section className="contact" id="contact">
        <h1>Contact Me</h1>
        <div className="form">
          <form action="https://formspree.io/f/mzzbdkvw" method="post">
            <div className="field first-name">
              <label htmlFor="first-name">First Name</label>
              <input type="text" name="first-name" id="first-name" required placeholder="Ismail" />
            </div>
            <div className="field second-name">
              <label htmlFor="second-name">Last Name</label>
              <input type="text" name="second-name" id="second-name" required placeholder="Shah" />
            </div>
            <div className="field email">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required placeholder="abc@gmail.com"/>
            </div>
            <div className="field subject">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" required placeholder="Hiring Inquiry" />
            </div>
            <div className="field text-area">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols={50} rows={10} required placeholder="Hi,,,"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}
