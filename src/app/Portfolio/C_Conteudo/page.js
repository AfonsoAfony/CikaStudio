"use client";

import { ArrowRight } from "lucide-react";

function C_Conteudo(){
     
        return(
                      
                        <div className="py-3 pl-2 gap-16 w-full flex flex-wrap transicao">
                                  
                                    <div className="  hover-container h-full pb-10 bg-white rounded-3xl w-full lg:w-[46%] xl:w-[30%] transicao">
                                          <div id="div-capa" className="rounded-t-3xl  w-full h-[265px] overflow-hidden transicao">
                                               <img src="./img/bg2.jpg" className="transicao absolute top-0 left-0 w-full h-full object-cover"/>
                                          </div>
                                          <div id="div-conteudo" className="px-5 py-4 transicao">
                                              <span className="text-amber-400 text-sm transicao">Criação de Conteúdo</span>
                                              <h1 className="font-semibold text-xl my-3 transicao">FoodTech Social Media</h1>  
                                              <p className="text-gray-500 text-sm transicao">Estratégia completa de conteúdo para redes sociais de startup do setor alimentício.</p>
                                               
                                               <p className="mt-5 space-x-2 gap-y-3 flex flex-wrap md:block md:space-y-0 lg:space-x-4 text-[70%] lg:text-[80%] transicao">
                                                <span className="transicao text-gray-200 font-semibold p-2 rounded-full bg-amber-500">Social Medi</span>
                                                <span className="transicao text-gray-200  font-semibold p-2 rounded-full bg-amber-500">Content Strategy</span>
                                                <span className="transicao text-gray-200  font-semibold p-2 rounded-full bg-amber-500">Photography</span>
                                                 </p>
                                          </div>
                                    </div>
                        </div>
                           
        )
}
export default C_Conteudo;