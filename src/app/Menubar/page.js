"use client";

import { useState } from "react";
import Hamburger from 'hamburger-react';

function Menubar(){
      
const [isOpen, setOpen] = useState(false);

        return(
<div className=" z-10 top-0 left-0 w-full fixed"> 

      <div className="flex justify-between transicao inicio md:px-19 h-18 items-center">
           
            <div className="w-[20%] ml-5 lg:ml-12 ransicao" >
                  <a href="#"><img src="./icons/logo.png" className="w-30"  alt="CikaStudio" /></a>
            </div>
                   <div className="w-[80%] gap-3 transicao left-0 justify-around bg-white shadow-md  items-center hidden md:flex md:static md:flex-row  md:space-x-6 md:bg-transparent md:shadow-none">
                        
                        <div className="w-[70%] ">
                              <ul className="mx-8 lg:ml-18 transicao text-lg lg:text-[98%] xl:text-[115%] text-gray-500 list-none px-5 gap-6 flex items-center  ">
                              <li><a className="transicao link" href="#topo">Início</a></li>
                              <li><a className="transicao link" href="#sobre">Sobre</a></li>
                              <li><a className="transicao link" href="#Servicos">Serviços</a></li>
                              <li><a className="transicao link" href="#Portfolio">Portfólio</a></li>
                              <li><a className="transicao link" href="#Clientes">Clientes</a></li>
                              <li><a className="transicao link" href="#Contactos">Contactos</a></li>
                              </ul>
                        </div>

                         <div className="  justify-end items-center w-[20%] border-2 transicao  hidden lg:flex ">
                                    <button className=" animacao-opacidade btn-laranja px-3 font-bold  text-[84%] xl:text-[100%] py-2 transicao">Vamos criar juntos</button>
                        </div>

                  </div>
                  <div  className="md:hidden mr-4 flex static items-center inicio">
                        <Hamburger color="#FFAF1A" toggled={isOpen} toggle={setOpen} />
                        {isOpen &&
                        <nav className="absolute top-18 left-0 pl-3 border-l-gray-400 border-r-gray-400 border-b-gray-400 border-3 w-[100%] inicio shadow-md flex-col space-y-6 py-4 md:shadow-none">

                              <ul className="transicao text-[120%] text-gray-500 list-none space-y-4 pl-1 ">
                              <li onClick={()=>setOpen(false)} ><a className="transicao link" href="#topo">Início</a></li>
                              <li onClick={()=>setOpen(false)} ><a className="transicao link" href="#sobre">Sobre</a></li>
                              <li onClick={()=>setOpen(false)} ><a className="transicao link" href="#Servicos">Serviços</a></li>
                              <li onClick={()=>setOpen(false)} ><a className="transicao link" href="#Portfolio">Portfólio</a></li>
                              <li onClick={()=>setOpen(false)} ><a className="transicao link" href="#Clientes">Clientes</a></li>
                              <li onClick={()=>setOpen(false)} ><a className="transicao link" href="#Contactos">Contactos</a></li>
                              </ul>
                              
                              <div  onClick={()=>setOpen(false)}  className=" flex h-10 px-5 items-center transicao w-full border-2 ">
                              <button  className=" animacao-opacidade btn-laranja text-center w-full font-bold text-lg py-2 transicao">Vamos criar juntos</button>
                              </div>
                              
                        </nav>}
                  </div>
                  
                 
      </div>

    
</div>
        )
}
export default Menubar;