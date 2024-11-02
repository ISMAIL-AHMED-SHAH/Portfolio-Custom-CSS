"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home mt-14">
      <section className="first" id="/">
        <div className="intro">
          <h1 >
            Hi! I am Ismail <br /> a Web Developer
          </h1>
          <h3 className="text-blue-200">
            currently on a path to becoming a full-stack developer, driven by a strong interest in both front-end and back-end technologies. I enjoy creating responsive, user-friendly websites and applications, and I am eager to keep growing my skills and embracing new challenges in the field of full-stack development!
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
        <motion.div
          animate={{ rotate: 360 }}
          className="profile flex items-center justify-center w-[250px] h-[250px] py-5 md:py-0 md:w-[350px] md:h-[350px] rounded-full"
        >
          <div className="pic">
            <Image
              src={"/GitHub.jpeg"}
              alt="profile-pic"
              width={100}
              height={100}
              className="w-[200px] pl-1 h-[200px] md:w-[300px] md:h-[300px] rounded-full"
            />
          </div>
        </motion.div>
      </section>
      <section className="about" id="about">
        <div className="content">
          <div className="h1 text-center">About me</div>
          <p>
            With extensive experience in teaching, school management, and administration, I am currently expanding my knowledge in web development at GIAIC ((Governor Sindh Initiative Information Technology Course), Metaverse, Blockchain, Web 3.0, and cutting-edge technology). Proud to serve as a sincere student among my peers, I am a passionate frontend developer on an active journey to deepen my skills and transition into full-stack development, eager to tackle new challenges in the dynamic tech landscape.
          </p>
        </div>
      </section>
      <section className="projects" id="edu">
        <h1 className="text-center">Projects</h1>
        <div className="cards md:pl-[100px]">

          <div className="card w-[350px] h-[430px] bg-[#80e3f0] flex flex-col items-center justify-center gap-4 rounded-[10px]">
            <div className="image">
              <Image src={'/Currency-Converter.png'} alt="currency" width={100} height={50} className="w-full h-full rounded-[10px]" />
            </div>
            <div className="des">
              <p className="text-center text-gray-800 w-[300px]">A Next.js currency converter app that enables quick, real-time currency conversions with an intuitive and responsive interface for easy calculations.</p>
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
