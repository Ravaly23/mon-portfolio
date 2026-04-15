import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import LienNavigation from "../Components/lienNavigation";
export default function MonPorteFolio() {
  const [isOpen, setOpen] = useState(false);
  // const [ turned , setTurned ] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ec]">
      <header className="dark:bg-gray-950 backdrop-blur-md pt-4 pb-4 pl-7 pr-7">
        <nav className="flex items-center justify-between">
          <div className="rounded-4xl border border-white pt-1.5 pb-1 w-12 md:w-12 block ">
            <h1 className="text-3xl font-serif text-center inline-block hover:rotate-90 duration-500 ease-linear hover:cursor-pointer">
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
                  <div className={` bg-[#0a0a0f] w-6 h-6 rotate-45 -mt-1 ml-8`}></div>
                  <LienNavigation />
                </nav> 
              </>
            )}
          </div>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
