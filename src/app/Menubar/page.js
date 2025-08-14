"use client";

import { useState } from "react";
import Hamburger from 'hamburger-react';

function Menubar(){
      
const [isOpen, setOpen] = useState(false);

        return(
<div className=" z-10 top-0 left-0 w-full fixed"> 

      <div className="flex justify-around transicao inicio md:px-19 h-18">
           
            <div className="w-1/3 transicao  hidden md:flex ">
                  <h1 className="logo flex transicao items-center text-md lg:text-xl "><a href="#">CIKA Studio</a></h1>
            </div>
            <div className="w-3/3 flex transicao justify-end">
                   <div className="absolute top-16 left-0 w-full bg-white shadow-md flex-col items-center space-y-4 py-4 hidden md:flex md:static md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent md:shadow-none">

                        <ul className="mx-8 lg:ml-18 transicao text-sm lg:text-[108%] text-gray-500 list-none px-5 gap-6 flex items-center  ">
                          <li><a className="transicao link" href="#topo">Início</a></li>
                          <li><a className="transicao link" href="#sobre">Sobre</a></li>
                          <li><a className="transicao link" href="#Servicos">Serviços</a></li>
                          <li><a className="transicao link" href="#Portfolio">Portfólio</a></li>
                          <li><a className="transicao link" href="#Clientes">Clientes</a></li>
                          <li><a className="transicao link" href="#Contactos">Contactos</a></li>
                        </ul>
                        
                         <div className=" flex justify-end items-center xl:ml-34 md:w-52 lg:w-62 transicao lg:px-3 ">
                          <button className=" animacao-opacidade btn-laranja px-3 font-bold  md:text-[80%] lg:text-[90%] xl:text-xl py-2 transicao">Vamos criar juntos</button>
                        </div>
                  </div>
                  <div  className="md:hidden flex static items-center">
                        <Hamburger color="#FFAF1A" toggled={isOpen} toggle={setOpen} />
                        {isOpen &&
                        <nav className="absolute top-17 left-0 w-[100%] bg-white shadow-md flex-col space-y-6 py-4 md:shadow-none">

                              <ul className="transicao text-[120%] text-gray-500 list-none space-y-4 pl-1 ">
                              <li><a className="transicao link" href="#topo">Início</a></li>
                              <li><a className="transicao link" href="#sobre">Sobre</a></li>
                              <li><a className="transicao link" href="#Servicos">Serviços</a></li>
                              <li><a className="transicao link" href="#Portfolio">Portfólio</a></li>
                              <li><a className="transicao link" href="#Clientes">Clientes</a></li>
                              <li><a className="transicao link" href="#Contactos">Contactos</a></li>
                              </ul>
                              
                              <div className=" flex px-5 items-center transicao w-full border-2 ">
                              <button className=" animacao-opacidade btn-laranja text-center w-full font-bold text-lg py-2 transicao">Vamos criar juntos</button>
                              </div>
                              
                        </nav>}
                  </div>
                  
                 
            </div>
      </div>

    
</div>
        )
}
export default Menubar;