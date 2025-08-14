import { ArrowRight } from "lucide-react";

function Servicos(){
        return(
<div id="Servicos" className=" block md:mt-32 mt-18 pt-20  text-black"> 
                  <div className=" px-10 lg:px-52">
                        <h1 className="text-center text-5xl md:text-6xl font-semibold mb-5">Nossos <span className="cor-logo">Serviços</span></h1>
                        <p className="text-center text-gray-500  text-xl md:mx-52 ">Oferecemos soluções criativas completas para transformar sua marca em uma experiência memorable e impactante no mercado.</p>
                  </div>
            {/**********************************/}
            <div className="gap-8 w-3/3 flex lg:flex-nowrap flex-wrap justify-between transicao pt-10 px-5 md:px-19">
                  
                       <div className="h-[400px] transicao ">           
                       <div className=" group hover:-mt-5 hover:bg-amber-200  border-2 rounded-3xl px-8 border-amber-500 w-1/1 py-5 transicao ">
                              
                              <div className="w-full flex">
                                    <h2 className=" w-1/1 mt-8 font-bold mb-5 text-black text-xl">Design Gráfico</h2>
                              
                                     <div className=" w-1/8  ">
                                          <img src="./icons/design.png" className=" right-0 w-[90%]" />
                                    </div>
                              </div>
                              

                              <div className="text-gray-500 text-xl mb-10">
                                    <h2 className=" text-gray-500 text-md mb-5"> Criamos identidades visuais marcantes que conectam sua marca ao público-alvo.</h2>
                              
                              </div>
                              <div className=" text-gray-600 text-md flex w-full mb-7">
                                    <ol className="w-1/1 space-y-3 list-disc marker:text-amber-500">
                                        <li>Identidade Visual</li>
                                        <li>Material Gráfico</li>
                                    </ol>
                                    <ol className="w-1/1 space-y-3 list-disc marker:text-amber-500">
                                          <li>Logotipos</li>
                                          <li>Packaging</li>
                                    </ol>
                              </div>
                              
                             <button className=" group-hover:bg-amber-500 group-hover:border-amber-500 border-2 cursor-pointer border-gray-300 transicao rounded-2xl text-[110%] px-5 py-2 flex ">Saiba mais <ArrowRight/></button>
                              
                        </div>
                        </div>

                        <div className="h-[400px]">  
                        <div className=" group hover:-mt-5 hover:bg-amber-200  border-2 rounded-3xl px-8 border-amber-500 w-1/1 py-5 transicao ">
                              
                              <div className="w-full flex">
                                    <h2 className=" w-1/1 mt-8 font-bold mb-5 text-black text-xl">Branding</h2>
                              
                                     <div className=" w-1/8  ">
                                          <img src="./icons/branding.png" className=" right-0 w-[90%]" />
                                    </div>
                              </div>
                              

                              <div className="text-gray-500 text-xl mb-10">
                                    <h2 className=" text-gray-500 text-md mb-5"> Desenvolvemos estratégias de marca completas para posicionar seu negócio no mercado.</h2>
                              
                              </div>
                              <div className=" text-gray-600 text-md flex w-full mb-7">
                                    <ol className="w-1/1 space-y-3 list-disc marker:text-amber-500">
                                        <li>Estratégia de Marca</li>
                                        <li>Brand Guidelines</li>
                                    </ol>
                                    <ol className="w-1/1 space-y-3 list-disc marker:text-amber-500">
                                          <li>Naming</li>
                                          <li>Posicionamento</li>
                                    </ol>
                              </div>
                              
                             <button className="group-hover:bg-amber-500 group-hover:border-amber-500 border-2 cursor-pointer border-gray-300 transicao rounded-2xl text-[110%] px-5 py-2 flex ">Saiba mais <ArrowRight/></button>
                              
                        </div>
                        </div>
            </div>

            {/********************************* */}
            
            <div className="gap-8 w-3/3 flex lg:flex-nowrap flex-wrap justify-between transicao pt-10 px-5 md:px-19">
                       
                       <div className="h-[400px]">  
                       <div className="group hover:-mt-5 hover:bg-amber-200  border-2 rounded-3xl px-8 border-amber-500 w-1/1 py-5 transicao ">
                              
                              <div className="w-full flex">
                                    <h2 className=" w-1/1 mt-8 font-bold mb-5 text-black text-xl">Criação de Conteúdo</h2>
                              
                                     <div className=" w-1/8  ">
                                          <img src="./icons/conteudo.png" className=" right-0 w-[90%]" />
                                    </div>
                              </div>
                              

                              <div className="text-gray-500 text-xl mb-10">
                                    <h2 className=" text-gray-500 text-md mb-5">Produzimos conteúdo visual e textual que engaja e converte sua audiência.</h2>
                              
                              </div>
                              <div className=" text-gray-600 text-md flex w-full mb-7">
                                    <ol className="w-1/1 space-y-3 list-disc marker:text-amber-500">
                                        <li>Social Media</li>
                                        <li>Ilustrações</li>
                                    </ol>
                                    <ol className="w-1/1 space-y-3 list-disc marker:text-amber-500">
                                          <li>Copywriting</li>
                                          <li>Infgráficos</li>
                                    </ol>
                              </div>
                              
                             <button className="group-hover:bg-amber-500 group-hover:border-amber-500 border-2 cursor-pointer border-gray-300 transicao rounded-2xl text-[110%] px-5 py-2 flex ">Saiba mais <ArrowRight/></button>
                              
                        </div>
                        </div>

                        <div className="h-[400px]">  
                        <div className=" group hover:-mt-5 hover:bg-amber-200 border-2 rounded-3xl px-8 border-amber-500 w-1/1 py-5 transicao ">
                              
                              <div className="w-full flex">
                                    <h2 className=" w-1/1 mt-8 font-bold mb-5 text-black text-xl">Produção de Videos</h2>
                              
                                     <div className=" w-1/8  ">
                                          <img src="./icons/video.png" className=" right-0 w-[90%]" />
                                    </div>
                              </div>
                              

                              <div className="text-gray-500 text-xl mb-10">
                                    <h2 className=" text-gray-500 text-md mb-5"> Criamos vídeos impactantes que contam a história da sua marca de forma envolvente.</h2>
                              
                              </div>
                              <div className=" text-gray-600 text-md flex w-full mb-7">
                                    <ol className="w-1/1 space-y-3 list-disc marker:text-amber-500">
                                        <li>Motion Graphics</li>
                                        <li>Animações</li>
                                    </ol>
                                    <ol className="w-1/1 space-y-3 list-disc marker:text-amber-500">
                                          <li>Videos Corporativos</li>
                                          <li>Edição</li>
                                    </ol>
                              </div>
                              
                             <button className="group-hover:bg-amber-500 group-hover:border-amber-500 border-2 cursor-pointer border-gray-300 transicao rounded-2xl text-[110%] px-5 py-2 flex ">Saiba mais <ArrowRight/></button>
                              
                        </div>
                        </div>
            </div>
            {/*********************************PRECISA DE UMA SOLUÇÃO PERSONALISADA*********************************/}
            <div className="mt-14 W-full flex justify-center ">
                  <div className="w-[95%] lg:w-[50%] h-[300px] lg:h-[250px] rounded-2xl bg-white shadow-xl px-8 py-4 text-center">
                        <h1 className=" text-xl lg:text-2xl font-bold ">PRECISA DE UMA SOLUÇÃO PERSONALISADA</h1>
                        <p className=" text-gray-500 text-lg lg:text-xl mt-4">Combinamos nossos serviços para criar soluções sob medida que atendem exatamente às necessidades do seu projeto.</p>
                  
                        <div className="justify-center flex mt-4">
                               <button className="btn-laranja items-center text-[90%] lg:text-[110%] px-6 py-5 transicao flex gap-2 font-semibold mt-5">VAMOS CONVERSAR SOBRE O PROJECTO<ArrowRight/></button>
                         </div>
                  </div>
                  
            </div>
            {/********************************* */}
     
</div>
        )
}
export default Servicos;