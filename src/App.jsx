import { useState } from "react";

import logoMT from "../src/assets/MT-BRANCO.png";
import logoMain from "../src/assets/logo.png";
import bannerMain from "../src/assets/bg-main.jpg"
import aboutImg from "../src/assets/about-img.jpg";
import belchior1 from "../src/assets/belchior-tattoo.jpg";
import belchior2 from "../src/assets/belchior2.jpg";
import belchior3 from "../src/assets/belchior3.jpg";


//React Icons
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { CgMenuRight } from "react-icons/cg";

import { Element } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import Works from "./components/Works";
// import Modal from "./components/Modal";

function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  const modalHandle = () => {

    setModalOpen(!isModalOpen);
  };

  const bgBanner = {
    backgroundImage: `url(${bannerMain})`,
  }

  return (
    <div className='w-full min-h-screen bg-black'>
      <header className=" bg-black flex items-center shadow-slate-900 opacity-95 drop-shadow-lg fixed w-full z-20 md:px-10">
        <div className="flex items-center w-full h-20 px-0">
          <img data-aos="fade-right" className="object-cover h-full" src={logoMT} alt="logo-mt" />
          <p data-aos="fade-down" className="text-white text-2xl font-medium font-pirata xl:text-3xl">Mag Tattoo Studio</p>
        </div>
        <div
          onClick={modalHandle}
          className="fixed z-20 right-3 top-6 mt-0.5">
          <CgMenuRight data-aos="fade-left" className="w-7 h-7 md:hidden" color="white" />
        </div>       
        <div className="w-full h-10 hidden items-center justify-center md:text-base md:flex">
          <ul data-aos="fade-left" className=" flex gap-5 justify-between w-full text-sm font-semibold text-white xl:text-xl">
            <ScrollLink to="home" smooth={true} duration={1000}><li className="cursor-pointer active:text-black hover:text-black hover:scale-110 duration-200">Inicio</li></ScrollLink>
            <ScrollLink to="about-us" smooth={true} duration={1000}><li className="cursor-pointer active:text-black hover:text-black hover:scale-110 duration-200">Sobre nós</li></ScrollLink>
            <ScrollLink to="works" smooth={true} duration={1000}><li className="cursor-pointer active:text-black hover:text-black hover:scale-110 duration-200">Trabalhos</li></ScrollLink>
            <ScrollLink to="contacts" smooth={true} duration={1000}><li className="cursor-pointer active:text-black hover:text-black hover:scale-110 duration-200">Contatos</li></ScrollLink>
          </ul>
        </div>
      </header>
      <main className="w-full bg-img-main bg-no-repeat bg-cover bg-center">
      <div>
          {/* <Modal/> */}
          {isModalOpen && (
            <div className="w-full flex md:hidden fixed z-20 ">
              <ul data-aos="fade-down" className="bg-black bg-opacity-95 w-32 rounded-b-md pr-4 py-3 z-10 absolute top-20 right-0 flex flex-col gap-5 justify-between text-right text-base font-medium text-white">
                <ScrollLink to="home" smooth={true} duration={1000}><li className="cursor-pointer active:text-black">Inicio</li></ScrollLink>
                <ScrollLink to="about-us" smooth={true} duration={1000}><li className="cursor-pointer active:text-black">Sobre nós</li></ScrollLink>
                <ScrollLink to="works" smooth={true} duration={1000}><li className="cursor-pointer active:text-black">Trabalhos</li></ScrollLink>
                <ScrollLink to="contacts" smooth={true} duration={1000}><li className="cursor-pointer active:text-black">Contatos</li></ScrollLink>
              </ul>
            </div>
          )}
        </div>
        {/* banner main */}
        <Element name="home">
          <div className="w-full h-20"></div>
          <section 
            className="flex flex-col items-center  w-full h-[34rem] bg-no-repeat bg-cover bg-center lg:flex-row lg:justify-between"
            style={bgBanner}
          >
            <div className=" max-w-[16rem] flex items-start justify-start pb-8 pt-6 overflow-hidden lg:max-w-[30rem] lg:ml-16">
              <img
                src={logoMain} alt="logo-mag-tattoo"
                className="opacity-80 "
              />
            </div>
            <div className="flex flex-col items-center gap-10 md:gap-16 lg:pr-24 lg:gap-24 xl:pr-40 xl:gap-32">
              <div className="text-center font-bold text-4xl md:w-96 lg:text-4xl lg:w-[30rem] xl:text-5xl xl:w-[35rem]">
                <p className="font-pirata">Sua pele, em minhas mãos, vira obra de arte!</p>
              </div>
              <div className="flex items-center justify-between w-[11.6rem] bg-black hover:scale-105 duration-300 active:bg-bg-gray-second opacity-90 rounded-xl p-3 cursor-pointer lg:hover:bg-black lg:active:bg-bg-gray-second">
                <button
                  className="text-white text-left font-semibold">
                  <a href="#">Fazer Orçamento</a>
                </button>
                <FaWhatsapp className="w-6 h-6" color="white" />
              </div>
            </div>
          </section>
        </Element>

        {/* about us */}
        <Element name="about-us">
          <section className="px-6 py-6 bg-gradient-to-t from-bg-gray-first to-black">
            <h1 className="text-white pb-2 text-2xl font-pirata md:text-4xl">Sobre Nós</h1>
            <div className="flex flex-col gap-4 md:flex-row md:items-center xl:gap-9">
              <div className="flex items-center justify-center">
                <img className="shadow-sm shadow-black rounded-xl min-w-72 max-w-[42rem] object-cover max-lg:max-w-[30rem]" src={aboutImg} alt="studio" />
              </div>
              <div className=" text-white text-base md:text-lg lg:text-2xl">
                <p>O estudio MagTattoo nasceu no ano de 2019 e vem até hoje entregando conforto, qualidade e profissionalismo aos nossos clientes. <span>&quot; Citação &quot; Marcio Alves - Tatuador e Idealizador do Estudio MagTattoo</span> </p>
              </div>
            </div>
          </section>
        </Element>

        {/* Works */}
        <Element name="works">
          <section className="px-6 py-6 bg-gradient-to-t from-black to-bg-gray-first">
            <h1 className="text-white pb-4 text-2xl font-pirata md:text-4xl">Trabalhos</h1>
            <div className="flex flex-col items-center justify-start flex-wrap gap-8 md:flex-row max-personalizado:justify-center">
              <Works
                img1={belchior1}
                img2={belchior2}
                img3={belchior3}
                text="Tattoo em Blackwork que mistura arte de silhueta com caligrafia. Uma homenagem ao cantor e compositor brasileiro Belchior, &quot;Amar e mudar as coisas me interessa mais!&quot;"
              />

              <Works
                img1={belchior1}
                img2={belchior2}
                img3={belchior3}
                text="Tattoo em Blackwork que mistura arte de silhueta com caligrafia. Uma homenagem ao cantor e compositor brasileiro Belchior, &quot;Amar e mudar as coisas me interessa mais!&quot;"
              />

              <Works
                img1={belchior1}
                img2={belchior2}
                img3={belchior3}
                text="Tattoo em Blackwork que mistura arte de silhueta com caligrafia. Uma homenagem ao cantor e compositor brasileiro Belchior, &quot;Amar e mudar as coisas me interessa mais!&quot;"
              />
            </div>
          </section>
        </Element>


        {/*Contacts*/}
        <Element name="contacts">
          <section className="pt-6 bg-gradient-to-t from-bg-gray-first to-black">
            <h1 className="text-white pb-2 text-2xl font-pirata px-6 md:text-4xl">Contatos</h1>
            <div className="flex flex-col gap-2 px-6">
              <label className="text-white"><a className="inline-flex gap-1.5" target="_blank" rel="noreferrer" href="#"><FaWhatsapp className="w-6 h-6" color="white" />+55 85 99239-3243 </a></label>

              <label className="text-white"><a className="inline-flex gap-1.5" target="_blank" rel="noreferrer" href="https://www.instagram.com/mag_tattoo.studio/"><FaInstagram className="w-6 h-6" color="white" /> mag_tattoo.studio</a></label>

              <label className="text-white"><a className="inline-flex gap-1.5" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/abLk1mBhZh2TGwty9"><SiGooglemaps className="w-6 h-6" color="white" /> Residencial Chorozinho 1, rua 4, casa 210 </a></label>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d994.6625769709485!2d-38.50217977160255!3d-4.287956499729245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMTcnMTYuNiJTIDM4wrAzMCcwNS41Ilc!5e0!3m2!1spt-BR!2sbr!4v1706137874123!5m2!1spt-BR!2sbr"
              className="w-full h-40 pt-5 md:h-52 lg:h-60 xl:h-72"
            ></iframe>
          </section>
        </Element>
        <footer className="flex items-center justify-center w-full h-10 py-7 bg-black">
          <p className="text-white text-xs">&copy; 2024 Mag Tattoo Studio. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
