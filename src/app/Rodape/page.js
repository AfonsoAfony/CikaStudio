import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";


function Rodape(){
      
        return(
<div id="Rodape" className=" block mt-20 pt-3 text-black"> 
                
                  <div className="transicao py-10 px-19 bg-white" >

                        <div className="gap-8 w-3/3 flex flex-wrap transicao ">

                              <div className="w-full lg:w-[48%] transicao py-9 lg:px-5 transicao rounded ">
                                    <h1 className="cor-logo font-semibold text-3xl">CIKA Studio</h1>
                                    <p className=" text-gray-600 py-5 lg:pr-52">Somos uma agência criativa apaixonada por transformar marcas em experiências extraordinárias. Trabalhamos com startups e marcas inovadoras que buscam se destacar no mercado.</p>
                                           
                                            <ul className=" text-gray-500 py-5 ">
                                                <li className="w-3/3 flex py-1 gap-2 items-center">
                                                        <div className=" text-amber-600 bold bg-amber-200 rounded-full py-3 px-2 ">
                                                                            <span><Mail size={18}/></span> 
                                                        </div>
                                                        <div >
                                                                <p className="text-gray-400"><a className="hover:text-amber-500 pointer text-semibold text-sm" href="">contato@cikastudio.com</a></p>
                                                        </div>
                                                </li>

                                                <li className="w-3/3 flex py-1 gap-2 items-center">
                                                        <div className=" text-amber-600 bold bg-amber-200 rounded-full py-3 px-2 ">
                                                                            <span><PhoneCall size={18}/></span> 
                                                        </div>
                                                        <div >
                                                                <p className="text-gray-400 text-semibold text-sm">+244 948 921 147</p>
                                                        </div>
                                                </li>

                                                <li className="w-3/3 flex py-1 gap-2 items-center">
                                                        <div className=" text-amber-600 bold bg-amber-200 rounded-full py-3 px-2 ">
                                                                            <span><MapPin size={18}/></span> 
                                                        </div>
                                                        <div >
                                                                <p className="text-gray-400 text-semibold text-sm">Talatona, Luanda-Angola</p>
                                                        </div>
                                                </li>

                                            </ul>
                                             <div className="w-[60%] md:w-[35%] flex flex-wrap gap-3 justify-center mt-5">
                                                                <div className="w-1/6 hover:bg-amber-300 h-[50%] cursor-pointer items-center py-3 rounded-xl hover:-mt-3 bg-white px-6 pl-2 md:pl-0 md:px-2 transicao">
                                                                    <a href="Instagram.com/cika.Studio"><Instagram size={18}/></a>
                                                                </div>
                                                                <div className="w-1/6 hover:bg-amber-300 h-[50%] cursor-pointer items-center py-3 rounded-xl hover:-mt-3 bg-white px-6 pl-2 md:pl-0 md:px-2 transicao">
                                                                    <a href="#"><Linkedin size={18}/></a>
                                                                </div>
                                                                <div className="w-1/6 hover:bg-amber-300 h-[50%] cursor-pointer items-center py-3 rounded-xl hover:-mt-3 bg-white px-6 pl-2 md:pl-0 md:px-2 transicao">
                                                                    <a href="https://www.facebook.com/share/15vEnD3Qp2/?mibextid=wwXIfr"><Facebook size={18}/></a>
                                                                </div>
                                                </div>
                                            
                              </div>
                              {/********************************************************************************************* */}

                              <div className="w-full lg:w-[48%] flex flex-wrap transicao rounded-t-2xl transicao  py-6">
                                    <div className="w-full lg:w-1/2 px-3" >
                                            <h3 className=" font-semibold">Links Rápidos</h3>
                                            <ul className=" text-gray-500 text-sm md:text-md py-5">
                                                <li className="py-1"><a className="transicao link" href="#topo">Início</a></li>
                                                <li className="py-1"><a className="transicao link" href="#sobre">Sobre</a></li>
                                                <li className="py-1"><a className="transicao link" href="#Servicos">Serviços</a></li>
                                                <li className="py-1"><a className="transicao link" href="#Portfolio">Portfólio</a></li>
                                                <li className="py-1"><a className="transicao link" href="#Clientes">Clientes</a></li>
                                                <li className="py-1"><a className="transicao link" href="#Contactos">Contactos</a></li>
                                            </ul>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-3" >
                                            <h3 className=" font-semibold">Nossos Servicos</h3>
                                            <ul className=" text-gray-500 text-sm md:text-md py-5">
                                                <li className="py-1">Design Gráfico </li>
                                                <li className="py-1">Branding</li>
                                                <li className="py-1">Criação de Conteúdo</li>
                                                <li className="py-1">Produção de Vídeo</li>
                                            </ul>
                                    </div>
                                           
                              </div>
                        </div>
                         {/*********************************PRonto para começar o seu projecto*********************************/}
                         <div className="mb-20">
                        
                            <div className="mt-14 W-full flex shadow-xl rounded  border-t-2 border-gray-300 pt-5 justify-center mb-10">
                                <div className="w-full lg:w-[50%] md:h-[250px] bg-white px-8 py-4 text-center">
                                        <h1 className=" text-xl lg:text-2xl font-bold ">Pronto para Começar seu Projeto?</h1>
                                        <p className=" text-gray-500 text-lg lg:text-xl mt-3">Entre em contato conosco hoje mesmo e vamos conversar sobre como podemos transformar sua marca em algo extraordinário.</p>
                                        
                                        
                                        <div className="justify-center flex mt-5">
                                                <div className="h-10">
                                                        <button className="btn-laranja text-[110%] px-6 py-5 transicao flex gap-2 font-semibold mt-5 animacao-opacidade ">VAMOS CRIAR JUNTOS</button>
                                                </div>
                                        </div>
                                </div>
                                
                            </div>
                        </div>
                            
                          
                  </div>  

                  <div className="w-full text-gray-500 items-center text-center py-6 text-sm border-t-2  border-gray-400">
                        <p>© 2025 CIKA Studio. Todos os direitos reservados.</p>                               
                  </div>    

                  

     
</div>
        )
}
export default Rodape;