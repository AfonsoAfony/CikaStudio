"use client";

import { ArrowRight } from "lucide-react";

function C_Branding(){
     
        return(
                              <div className="py-3 pl-2 gap-16 w-full flex flex-wrap transicao">
                                  
                                    <div className="  hover-container h-full pb-10 bg-white rounded-3xl w-full lg:w-[46%] xl:w-[30%] transicao">
                                          <div id="div-capa" className="rounded-t-3xl  w-full h-[200px] md:h-[265px] overflow-hidden transicao">
                                               <img src="./img/bg4.jpg" className="transicao absolute top-0 left-0 w-full h-full object-cover"/>
                                          </div>
                                          <div id="div-conteudo" className="px-5 py-4 transicao">
                                              <span className="text-amber-400 text-sm transicao">Identidade Visual</span>
                                              <h1 className="font-semibold text-lg md:text-xl my-3 transicao">TechStart Branding</h1>  
                                              <p className="text-gray-500 text-[12px] md:text-sm transicao">Criação completa de identidade visual para startup de tecnologia, incluindo logo, guidelines e aplicações.</p>
                                               
                                               <p className="mt-5 space-x-2 gap-y-3 flex flex-wrap md:block md:space-y-0 lg:space-x-4 text-[60%] md:text-[70%] lg:text-[80%] transicao">
                                                      <span className="transicao text-gray-200 font-semibold p-2 rounded-full bg-amber-500">Branding</span>
                                                      <span className="transicao text-gray-200  font-semibold p-2 rounded-full bg-amber-500">Logo Design</span>
                                                      <span className="transicao text-gray-200  font-semibold p-2 rounded-full bg-amber-500">Guidelines</span>
                                                </p>
                                          </div>
                                    </div>
                                                  
                                    <div className=" hover-container h-full pb-10 bg-white rounded-3xl w-full lg:w-[46%] xl:w-[30%]  transicao">
                                          <div id="div-capa" className="rounded-t-3xl  w-full h-[200px] md:h-[265px] overflow-hidden transicao">
                                               <img src="./img/bg1.jpg" className="transicao absolute top-0 left-0 w-full h-full object-cover"/>
                                          </div>
                                          <div id="div-conteudo" className="px-5 py-4 transicao">
                                              <span className="text-amber-400 text-sm transicao">Rebranding</span>
                                              <h1 className="font-semibold text-lg md:text-xl my-3 transicao">HealthApp Rebranding</h1>  
                                              <p className="text-gray-500 text-[12px] md:text-sm transicao">Renovação completa da identidade visual de aplicativo de saúde com milhões de usuários.</p>
                                               
                                                <p className="mt-5 space-x-2 gap-y-3 flex flex-wrap md:block md:space-y-0 lg:space-x-4 text-[70%] lg:text-[80%] transicao">
                                                <span className="transicao text-gray-200 font-semibold p-2 rounded-full bg-amber-500">Rebranding</span>
                                                <span className="transicao text-gray-200  font-semibold p-2 rounded-full bg-amber-500">App Design</span>
                                                <span className="transicao text-gray-200  font-semibold p-2 rounded-full bg-amber-500">Health Tech</span>
                                                 </p>
                                          </div>
                                    </div>
                         </div>
                           
                           
        )
}
export default C_Branding;