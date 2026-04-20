import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import LienNavigation from "../Components/lienNavigation";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
// import { BsDownload } from "react-icons/bs";
import imgDebout from "../assets/ImageDebout.png";
import lienCv from "../directory/CV_RAZAFUMAHARO.pdf";
import imgAssis from "../assets/ImageAssis.png";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoPhp } from "react-icons/bi";
import { SiLaravel } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaDesktop } from "react-icons/fa";
import { BiLogoJava } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { SiAltiumdesigner } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";

export default function MonPorteFolio() {
  const [isOpen, setOpen] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "284bc1b1-b681-4069-a34a-3e9c30397607");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  const text = ["Web Developer", "Desktop Developer", "Software Designer"];
  const [index, setIndex] = useState(0); // Pour savoir quel métier on affiche
  const [wordsToDisplay, setWordsToDisplay] = useState<string[]>([]);
  const speed = 100;

  useEffect(() => {
    const currentSentence = text[index];
    const words = currentSentence.split("");

    if (wordsToDisplay.length < words.length) {
      // Il reste des mots à afficher dans la phrase actuelle
      const timer = setTimeout(() => {
        setWordsToDisplay((prev) => [...prev, words[prev.length]]);
      }, speed);

      return () => clearTimeout(timer); // Nettoyage du timer
    } else {
      // La phrase est finie, on attend 2 secondes et on passe à la suivante
      const nextSentenceTimer = setTimeout(() => {
        setWordsToDisplay([]); // On vide l'affichage
        setIndex((prevIndex) => (prevIndex + 1) % text.length); // On passe à l'index suivant (boucle)
      }, 3000);

      return () => clearTimeout(nextSentenceTimer);
    }
  }, [wordsToDisplay, index]);
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ec]">
      <header className="dark:bg-gray-950 backdrop-blur-md pt-5 pb-18 pl-7 pr-7 ">
        <nav className="flex items-center justify-between fixed  w-10/12">
          <div className="rounded-4xl border border-white pt-1.5 pb-1 w-12 md:w-12 block ">
            <h1 className="text-3xl font-serif text-center inline-block animate-tourner hover:cursor-pointer">
              <span className="text-orange-400">V</span>
              <span className="text-white">R</span>
            </h1>
          </div>
          <ul className="hidden md:flex pt-2 justify-between ml-10 text-xl md:gap-x-4">
            <LienNavigation />
          </ul>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {isOpen && (
              <>
                <nav className="flex flex-col fixed bg-[#0a0a0f] text-2xl w-30 items-center right-2">
                  <div
                    className={` bg-[#0a0a0f] w-6 h-6 rotate-45 -mt-1 ml-8`}
                  ></div>
                  <LienNavigation />
                </nav>
              </>
            )}
          </div>
        </nav>
      </header>
      <main>
        {/* Home */}
        <div
          id="home"
          className="flex flex-col pt-[2vw] pb-[3vw] md:mt-[5vw] md:mb-[5vw] md:flex md:flex-row justify-between md:mr-[2vw] md:ml-[2vw] "
        >
          <div className="border-b border-r-0 w-[80vw] ml-[9vw] md:border-r md:border-b-0 border-orange-500 md:w-5/12 md:h-[23vw] md:p-[1vw]">
            <div className="text-center">
              <h1 className="text-xl md:text-3xl font-serif md:mb-[1vw]">
                Hello , My name is <span>RAZAFIMAHARO </span>Andriantsoa{" "}
                <span>Valery</span>
              </h1>
              <p className="text-xl md:text-2xl font-serif">
                I am <span className="text-orange-500">{wordsToDisplay}</span>
                <span className="animate-pulse">|</span>
              </p>
              <div className="mt-[5vw] mb-[5vw] md:mt-[5vw] md:mb-[3vw]">
                <a
                  href={lienCv}
                  className="pt-[1.5vw] pb-[1.5vw] pl-[2.5vw] pr-[2.5vw]  border-orange-500 bg-orange-500 md:text-2xl rounded-4xl md:pt-[1vw] md:pb-[1vw] md:pl-[1.5vw] md:pr-[1.5vw] hover:shadow-xl hover:shadow-orange-600 duration-1000 ease-in-out"
                >
                  Get My Resume
                </a>
              </div>
            </div>
          </div>
          <div className="border-b border-r-0 w-[80vw] ml-[9vw] md:border-r md:border-b-0 border-orange-500 p-[5vw] md:w-5/12 md:h-[23vw] ">
            <div className="relative left-8 w-[35vw] h-[35vw] md:w-[10vw] md:h-[10vw] animate-zigzag md:relative md:bottom-[6vw] md:right-[-15vw]">
              <img
                src={imgDebout}
                alt=""
                className="w-[35vw] h-[35vw] md:h-[25vw] md:w-[45vw]"
              />
            </div>
          </div>
        </div>

        {/* About */}
        <div
          id="about"
          className="flex flex-col md:w-10/12 md:m-[7vw] md:flex md:flex-row md:justify-between"
        >
          <div
            className={` border-t border-b border-orange-500 w-[80vw] mt-[10vw] mr-[5vw] mb-[5vw] ml-[10vw] shadow-2xl shadow-gray-800 md:w-6/12 md:mt-[5vw] md:mb-[5vw] md:ml-[5vw] md:mr-[1vw] md:border-t md:border-b md:border-orange-500 pt-[5vw] md:shadow-2xl md:shadow-gray-800`}
          >
            <h1 className="font-serif text-center text-2xl text-orange-500 md:text-4xl md:mb-[5vw]">
              About me
            </h1>
            <p className="text-[3.5vw] text-center p-[2vw] md:text-2xl md:text-center ">
              Driven by a passion for technology and a disciplined approach to
              development, I turn complex ideas into robust digital solutions.
              You can count on my total commitment and attention to detail to
              make your project a success.
            </p>
          </div>
          <div
            className="hidden md:shadow-2xl md:shadow-gray-800 md:h-[45vw] md:inline-flex
          "
          >
            <img src={imgAssis} alt="" className="md:h-[45vw] md:w-[50vw]" />
          </div>
        </div>

        {/* defilement */}
        <div className="dark:bg-gray-950 pt-[5vw] pb-[5vw] pl-[10vw] pr-[10vw] mt-[5vw] mb-[5vw] text-center">
          <h1 className="animate-bounce font-serif text-2xl text-shadow-2xs text-shadow-orange-500  md:text-4xl">
            Web Developer * Desktop Developer * Software Designer
          </h1>
        </div>

        {/* skills */}
        <div
          id="skill"
          className="p-[5vw] border-t-[0.1vw] border-b-[0.1vw] border-orange-500 m-[5vw] rounded-t-4xl rounded-b-4xl h-auto"
        >
          <div>
            <h1 className="text-center text-2xl font-serif text-orange-500 md:text-4xl ">
              Skills
            </h1>
          </div>
          <div className="flex flex-col m-[2vw] gap-y-[6vw] md:gap-y-[3vw]">
            <div className="bg-gray-950  w-12/12 h-auto p-[1vw]   md:w-12/12 md:h-auto rounded-2xl shadow-orange-500 shadow-xl/15  ">
              <div className="relative md:left-[1.5vw] md:top-[2.2vw]">
                <BsGlobe size={25} />
              </div>
              <h1 className="text-2xl relative bottom-[8vw] md:text-2xl md:relative md:bottom-0 text-center">
                <span className="text-orange-500">Web</span>{" "}
                <span className="text-orange-300">Development</span>
              </h1>
              <h2 className="font-serif text-2xl mt-[2vw] mb-[3vw] md:text-2xl md:ml-[2.5vw] md:mt-[1vw]">
                Frontend :
              </h2>
              <ul className="text-center flex flex-col gap-y-[6.5vw] md:gap-y-[2vw] pt-[1vw] pl-[1vw] text-[4vw] md:text-xl mb-[2vw]">
                <li className="list-none">
                  <div className="absolute ">
                    <BiLogoHtml5 size={30} />
                  </div>
                  HTML5
                </li>
                <li className="list-none">
                  <div className="absolute ">
                    <BiLogoCss3 size={30} />
                  </div>
                  CSS3
                </li>
                <li className="list-none">
                  <div className="absolute ">
                    <BiLogoJavascript size={30} />
                  </div>
                  JAVASCRIPT
                </li>
                <li className="list-none">
                  <div className="absolute ">
                    <BiLogoTailwindCss size={30} />
                  </div>
                  TAILWINDCSS(Framework CSS)
                </li>
                <li className="list-none">
                  <div className="absolute ">
                    <BiLogoReact size={30} />
                  </div>
                  REACT(Library JS)
                </li>
              </ul>
              <h2 className="font-serif text-2xl mt-[5vw] md:text-2xl md:ml-[2.5vw] md:mt-[1vw]">
                Backend :
              </h2>
              <ul className="text-center flex flex-col gap-y-[5vw] md:gap-y-[2vw] pt-[1vw] pl-[1vw] text-[4vw] md:text-xl mb-[2vw]">
                <li className="list-none">
                  <div className="absolute ">
                    <BiLogoPhp size={30} />
                  </div>
                  PHP
                </li>
                <li className="list-none">
                  <div className="absolute ">
                    <SiLaravel size={30} />
                  </div>
                  LARAVEL(Framework PHP)
                </li>
                <li className="list-none">
                  <div className="absolute ">
                    <SiMysql size={30} />
                  </div>
                  MySql
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-[9vw] mt-[5vw] mb-[5vw] md:flex-row md:gap-x-[2vw] ">
              <div className="bg-gray-950  w-12/12 h-auto md:w-7/12 md:h-[15vw] rounded-2xl shadow-orange-500 shadow-xl/15">
                <div className="relative md:left-[1.5vw] md:top-[2.2vw]">
                  <FaDesktop size={25} />
                </div>
                <h1 className="text-2xl relative bottom-[8vw] left-2 md:text-2xl text-center md:relative md:bottom-0 md:left-0">
                  <span className="text-orange-500">Desktop</span>{" "}
                  <span className="text-orange-300">Development</span>
                </h1>
                <ul className="text-center flex flex-col gap-y-[2vw] md:pt-[1vw] pl-[1vw] pb-[5vw]  md:pb-0 text-[4vw] md:text-xl mb-[2vw]">
                  <li className="list-none">
                    {" "}
                    <div className="absolute ">
                      <BiLogoJava size={30} />
                    </div>
                    JAVA
                  </li>
                  <li className="list-none">
                    {" "}
                    <div className="absolute ">
                      <BiLogoPython size={30} />
                    </div>
                    PYTHON
                  </li>
                </ul>
              </div>
              <div className="bg-gray-950 w-12/12 h-auto md:w-7/12 md:h-[15vw] rounded-2xl shadow-orange-500 shadow-xl/15">
                <div className="relative md:left-[1.5vw] md:top-[2.2vw]">
                  <SiAltiumdesigner size={30} />
                </div>
                <h1 className="text-2xl relative bottom-[8vw]  md:text-2xl text-center md:relative md:bottom-0">
                  <span className="text-orange-500">Software</span>{" "}
                  <span className="text-orange-300">Designer</span>
                </h1>
                <ul className="text-center flex flex-col gap-y-[5vw] pt-[1vw] pl-[1vw] pb-[5vw] md:pb-0 text-[4vw] md:text-xl mb-[2vw] md:gap-y-[1.5vw]">
                  <li>
                    <div className="absolute ">
                      <MdDesignServices size={30} />
                    </div>
                    MERISE
                  </li>
                  <li>
                    <div className="absolute ">
                      <MdOutlineDesignServices size={30} />
                    </div>
                    UML
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div id="services"></div>

        {/* Contact */}
        <div
          className="mt-[3vw] md:mt-[2vw]  pt-[2vw] pb-[2vw] mb-[2vw] border-t-orange-400 border-t-[0.1vw]"
          id="contact"
        >
          <div className="text-center flex flex-col gap-y-6 mt-[2vw] md:mt-[3vw]">
            <h1 className="text-2xl md:text-6xl font-serif">
              Let's Create <span className="text-orange-500">Together</span>
            </h1>
            <p className="text-[3.5vw] md:text-xl font-serif ml-[10vw] mr-[10vw]">
              Have a project in mind? I'd love to hear about it. Drop me a line
              and let's discuss how <br />
              we can bring your vision to life.
            </p>
          </div>
          <div className="w-11/12 mt-15 mb-5 ml-[3.5vw] flex flex-col gap-y-5 md:flex md:flex-row md:justify-around ">
            <div className="dark:bg-gray-950 text-center md:w-[28vw] border-black shadow-orange-500 shadow-sm pt-8 pb-8 ">
              <div className="ml-[40vw]  mb-[5vw] md:ml-[12vw] md:mb-[3vw]">
                <GoMail size={45} />
              </div>
              <h1 className="text-xl md:text-[1.8vw] font-serif">
                valeryravaly2003@gmail.com
              </h1>
            </div>
            <div className="dark:bg-gray-950 text-center md:w-[28vw] border-black shadow-orange-500 shadow-sm pt-8 pb-8">
              <div className="ml-[40vw]  mb-[5vw] md:ml-[12vw] md:mb-[3vw] ">
                <BsWhatsapp size={45} />
              </div>
              <h1 className="text-xl  md:text-[1.8vw] font-serif">
                +261 34 61 645 07
              </h1>
            </div>
            <div className="dark:bg-gray-950 text-center md:w-[28vw] border-black shadow-orange-500 shadow-sm pt-8 pb-8">
              <div className="ml-[40vw] mb-[5vw] md:ml-[12vw] md:mb-[3vw]">
                <BiHome size={45} />
              </div>
              <h1 className="text-xl md:text-[1.8vw] font-serif">
                Madagascar, Mangarano 2 ,Toamasina
              </h1>
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border text-[3.5vw] w-10/12 ml-[8vw] mb-[7vw] md:w-7/12 md:mt-[5vw] md:mb-[5vw] md:ml-[21vw] md:text-center text-center md:text-2xl font-serif md:rounded-4xl pt-5 pb-5"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name..."
              className="dark:bg-gray-950 w-[70vw] md:border-[0.1vw] md:w-[50vw] md:mr-[2vw] pl-[2vw] pr-[2vw] pt-[0.75vw] pb-[0.75vw] border mb-5  mt-7  md:rounded-tr-4xl md:rounded-bl-4xl rounded-tr-2xl rounded-bl-2xl"
            />
            <br />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email..."
              className="dark:bg-gray-950 w-[70vw] md:border-[0.1vw] md:w-[50vw]  md:mr-[2vw] pl-[2vw] pr-[2vw] pt-[0.75vw] pb-[0.75vw] border mb-5  md:rounded-tr-4xl md:rounded-bl-4xl rounded-tr-2xl rounded-bl-2xl"
            />
            <br />
            <textarea
              name="message"
              required
              placeholder="Write here your message!!!"
              className="dark:bg-gray-950 border w-[70vw] mb-[3vw] p-[1vw] rounded-tr-2xl rounded-bl-2xl md:w-[50vw] md:mr-5 md:rounded-bl-4xl md:rounded-tr-4xl md:p-3 md:mt-[2vw] scrollbar-hide overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:resize-none resize-none"
            ></textarea>
            <br />
            <button
              type="submit"
              className="w-[70vw] pt-[1.5vw] pb-[1.5vw] mb-[5vw] rounded-tr-2xl rounded-bl-2xl hover:shadow-orange-600 hover:cursor-pointer bg-orange-500 md:w-[50vw] md:mr-3 md:pt-[1vw] md:pb-[1vw] md:pl-[2vw] md:pr-[2vw]  md:rounded-tr-4xl md:rounded-bl-4xl md:mb-[2vw]"
            >
              Submit
            </button>
            <br />
            <p>{result}</p>
          </form>
        </div>
      </main>
      <footer className="shadow-sm shadow-orange-500 h-auto">
        <div className=" w-full pt-4 pb-4 pl-8 pr-8 flex justify-between">
          <div>
            <p className="text-sm md:text-xl font-serif">
              &copy; 2026 All rights reserved. <br />
              Crafted with passion
            </p>
          </div>
          <div className="flex w-[22vw] md:w-[8vw] pt-0.5 md:pt-2 justify-between">
            <a href="https://www.facebook.com/human.wars.3/">
              <BsFacebook size={35} />
            </a>
            <a href="https://github.com/Ravaly23">
              <BsGithub size={35} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
