"use client";

import { ArrowRight } from "lucide-react";

function C_Videos(){
     
        return(
                        <div className="py-3 pl-2 gap-16 w-full flex flex-wrap transicao">
                                  
                                    
                                    <div className=" hover-container h-[470px] bg-white rounded-3xl w-[30%]">
                                          <div id="div-capa" className="rounded-t-3xl  w-full h-[265px] overflow-hidden ">
                                               <img src="./img/bg3.jpg" className="transicao absolute top-0 left-0 w-full h-full object-cover"/>
                                          </div>
                                          <div id="div-conteudo" className="px-5 py-4 transicao">
                                              <span className="text-amber-400 text-sm transicao">Produção de Vídeo</span>
                                              <h1 className="font-semibold text-xl my-3 transicao">FinTech Campaign</h1>  
                                              <p className="text-gray-500 text-sm transicao">Campanha audiovisual completa para lançamento de fintech, incluindo motion graphics e vídeos explicativos.</p>
                                               
                                               <p className="mt-5 space-x-4 text-[80%] transicao">
                                                <span className="transicao text-gray-200 font-semibold p-2 rounded-full bg-amber-500">Motion Graphics</span>
                                                <span className="transicao text-gray-200  font-semibold p-2 rounded-full bg-amber-500">Storytelling</span>
                                                <span className="transicao text-gray-200  font-semibold p-2 rounded-full bg-amber-500">Animação</span>
                                                 </p>
                                          </div>
                                    </div>
                        </div>
                           
        )
}
export default C_Videos;