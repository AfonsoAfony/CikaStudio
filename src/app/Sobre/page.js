

function Sobre(){
        return(
<div id="sobre" className=" block text-black"> 

            <div className="gap-8 w-3/3 h-[646px] flex justify-between transicao pt-5 px-19">
                  
                       <div className="w-1/1 py-20  transicao px-3 ">
                              <h1 className="font-bold mb-5 text-black text-5xl">Sobre a <span className="cor-logo">CIKA Studio</span></h1>
                              
                              <div className="text-gray-500 text-xl mb-10">
                                    <h2 className=" text-gray-500 text-2xl mb-5"> Somos uma agência criativa apaixonada por transformar marcas em experiências extraordinárias.</h2>
                              
                                    <p className="mb-5">Nascemos da paixão por criar soluções visuais que conectam marcas aos seus públicos de forma autêntica e impactante. Nossa equipe multidisciplinar combina criatividade, estratégia e tecnologia para entregar resultados que superam expectativas.</p>
                                    <p className="mb-5">Especializamos em trabalhar com startups e marcas inovadoras que buscam se destacar em seus mercados através de identidades visuais marcantes e conteúdo de alta qualidade.</p>
                              </div>
                              <button className=" btn-laranja px-6 text-lg py-3 transicao">Conheça a nossa equipe</button>
                             
                        </div>
                        <div className="w-1/1 flex flex-col justify-end">
                              
                              <div className="h-[500px] px-8  ">
                                          <img src="./img/bg3.jpg" className="hover:-mt-8 transicao rounded-3xl w-full h-[500px]"/>
                              </div>
                            
                               <div className="border-amber-500 border-2 bg-amber-50 z-9 -mt-18 py-7 rounded-2xl w-[35%] text-center">
                                    
                                           <span className=" text-4xl text-amber-500 font-semibold ">+25</span>
                                          <p className=" text-gray-700 text-md">Clientes satisfeitos em 3 anos</p>
                              
                              </div>
                        </div>
            </div>
                  {/********************* Nossos Valores ******************/}
      <div className="mt-25 px-19">
            <div className="mt-5 ">
                  <div>
                        <h1 className="text-center text-3xl font-semibold mb-5">Nossos <span className="cor-logo">Valores</span></h1>
                        <p className="text-center text-gray-500 text-xl ">Os princípios que guiam cada projeto e relacionamento que construímos.</p>
                  </div>
                  <div className="w-full flex gap-4 mt-10 py-5 px-2">
                                <div className="hover:-mt-6 hover:shadow-lg hover:shadow-amber-200 transicao w-1/3 bg-white  py-14 rounded-2xl text-center">
                                          
                                          <div className="flex justify-center transicao w-full">
                                                <img src="./icons/lampada.png" className="w-[25%] transicao rounded-full"/>
                                          </div>

                                          <span className=" text-3xl text-amber-500 font-semibold ">Criatividade</span>
                                          <p className=" text-gray-700 text-md">Transformamos ideias em soluções visuais impactantes e memoráveis.</p>
                              
                              </div>
                              <div className="hover:-mt-6 hover:shadow-lg hover:shadow-amber-200 transicao w-1/3 bg-white  py-14 rounded-2xl text-center">
                                          
                                          <div className="flex justify-center transicao w-full">
                                                <img src="./icons/precisao.png" className="w-[25%] transicao rounded-ful"/>
                                          </div>

                                           <span className=" text-3xl text-amber-500 font-semibold ">Precisão</span>
                                          <p className=" text-gray-700 text-md">Cada projeto é cuidadosamente pensado para atingir seus objetivos.</p>
                              
                              </div>
                              <div className="hover:-mt-6 hover:shadow-lg hover:shadow-amber-200 transicao w-1/3 bg-white  py-14 rounded-2xl text-center">
                                          
                                          <div className="flex justify-center transicao w-full">
                                                <img src="./icons/colaboracao.png" className="w-[25%] transicao "/>
                                          </div>
                                           <span className=" text-3xl text-amber-500 font-semibold ">Colaboração</span>
                                          <p className=" text-gray-700 text-md">Trabalhamos lado a lado com nossos clientes em todo o processo.</p>
                              
                              </div>
                              <div className="hover:-mt-6 hover:shadow-lg hover:shadow-amber-200 transicao w-1/3 bg-white  py-14 rounded-2xl text-center">
                                          
                                          <div className="flex justify-center transicao w-full">
                                                <img src="./icons/excelencia.png" className="w-[25%] transicao rounded-full "/>
                                          </div>
                                           <span className=" text-3xl text-amber-500 font-semibold ">Excelência</span>
                                          <p className=" text-gray-700 text-md">Buscamos sempre a qualidade máxima em cada entrega.</p>
                              
                              </div>
                  </div>
            </div>
      </div>
     
</div>
        )
}
export default Sobre;