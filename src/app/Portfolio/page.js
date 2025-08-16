"use client";

import { useEffect, useState } from "react";
import C_Todos from "./C_Todos/page";
import C_Branding from "./C_Branding/page";
import C_Design from "./C_Design/page";
import C_Video from "./C_Video/page";
import C_Conteudo from "./C_Conteudo/page";

function Portfolio(){
      const [conteudoDiv,setConteudoDiv]=useState("todos");
      const componentes={
            todos:<C_Todos/>,
            branding:<C_Branding/>,
            design:<C_Design/>,
            video:<C_Video/>,
            conteudo:<C_Conteudo/>
             };
             
             useEffect(()=>{
                  document.querySelector("#todos").classList.remove("pintarBtnClicado");
                  document.querySelector("#branding").classList.remove("pintarBtnClicado");
                  document.querySelector("#design").classList.remove("pintarBtnClicado");
                  document.querySelector("#video").classList.remove("pintarBtnClicado");
                  document.querySelector("#conteudo").classList.remove("pintarBtnClicado");

                  document.querySelector("#"+conteudoDiv).classList.add("pintarBtnClicado");

             },[conteudoDiv]);
      
        return(
<div id="Portfolio" className=" block mt-32 pt-20 text-black"> 
                  <div className="lg:px-52">
                        <h1 className="text-center text-4xl lg:text-6xl font-semibold mb-5">Nosso <span className="cor-logo">Portfólio</span></h1>
                        <p className="text-center text-gray-500 text-lg lg:text-xl mx-18 xl:mx-52 ">Conheça alguns dos projetos que desenvolvemos para startups e marcas inovadoras que estão transformando seus mercados.</p>

                        <div className="flex md:px-6 lg w-full justify-center items-center mt-15 ">
                              <div className="flex w-full md:px-28 lg:px-0 md:gap-4 justify-between ">
                                    <button id="todos" onClick={()=>{setConteudoDiv("todos");}} className="w-1/3 h-[40px] rounded-2xl cursor-pointer border-2 border-gray-200 hover:bg-amber-200 text-[75%] md:text-[90%] md:px-5 transicao ">Todos</button>
                                    <button id="branding"  onClick={()=>{setConteudoDiv("branding");}}  className="w-1/3 h-[40px] rounded-2xl cursor-pointer border-2 border-gray-200 hover:bg-amber-200 text-[75%] md:text-[90%] md:px-5 transicao ">Branding</button>
                                    <button id="design" onClick={()=>{setConteudoDiv("design");}} className="w-1/3 h-[40px] rounded-2xl cursor-pointer border-2 border-gray-200 hover:bg-amber-200 text-[75%] md:text-[90%] md:px-5 transicao ">Design</button>
                                    <button id="video" onClick={()=>{setConteudoDiv("video");}} className="w-1/3 h-[40px] rounded-2xl cursor-pointer border-2 border-gray-200 hover:bg-amber-200 text-[75%] md:text-[90%]  md:px-5 transicao ">Video</button>
                                    <button id="conteudo" onClick={()=>{setConteudoDiv("conteudo");}} className="w-1/3 h-[40px] rounded-2xl cursor-pointer border-2 border-gray-200 hover:bg-amber-200 text-[75%] md:text-[90%]  md:px-5 transicao ">Conteúdo</button>
                              </div>
                        </div>
                        
                  </div>
            
            {/********************************* */}
            <div className="gap-8 w-3/3  transicao pt-10 px-8 md:px-19">
                  {
                     componentes[conteudoDiv]
                  }
             </div>
            {/*********************************PRECISA DE UMA SOLUÇÃO PERSONALISADA*********************************/}
            <div className="mt-14 W-full flex justify-center">
                  <div className="w-full md:w-[50%] h-[210px] md:h-[50px] rounded px-8 py-4 text-center">
                        <p className=" text-gray-500 text-xl md:text-2xl mt-3">Gostou do que viu? Vamos criar algo incrível para sua marca também.</p>
                  
                        <div className="justify-center flex mt-5">
                               <button className="btn-laranja text-[100%] md:text-[110%] px-6 py-5 transicao flex gap-2 font-semibold mt-5">INICIAR MEU PROJECTO</button>
                        </div>
                  </div>
            </div>

</div>
        )
}
export default Portfolio;