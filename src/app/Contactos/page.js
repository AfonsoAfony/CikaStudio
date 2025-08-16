import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, Send } from "lucide-react";


function Contactos(){
      
        return(
<div id="Contactos" className=" block mt-18 lg:mt-32 pt-20 text-black"> 
                  <div className=" lg:px-52">
                        <h1 className="text-center text-3xl md:text-6xl font-semibold mb-5">Vamos <span className="cor-logo">Criar Juntos</span></h1>
                        <p className="text-center text-gray-500 text-lg lg:text-xl mx-18 xl:mx-52 ">Pronto para transformar sua marca? Entre em contato conosco e vamos conversar sobre como podemos ajudar sua empresa a se destacar no mercado.</p>
                         
                  </div>

                  <div className="transicao py-10 px-4 md:px-19" >

                        <div className="gap-8 w-full flex flex-wrap transicao">

                              <div className="w-full lg:w-[48%] transicao py-9 transicao rounded bg-white ">
                                    <h2 className=" text-center md:text-start text-xl md:text-2xl px-4 font-semibold transicao">Conte-nos sobre seu projeto</h2>
                                    <p className="text-gray-500 text-sm md:text-lg m-5 transicao">Preencha o formulário abaixo e retornaremos em até 24 horas com uma proposta personalizada.</p>
                                        <div className="w-3/3">
                                            <form className="flex flex-wrap gap-2 justify-between">

                                                <div className="w-full md:w-1/2  flex-wrap flex px-4  pr-9 md:pr-2 mt-5">
                                                    <label className="md:font-semibold mb-2 text-sm" >Nome* </label>
                                                    <input type="text" placeholder="Digite seu nome" className="bg-gray-100 text-sm w-sm focus:outline-none focus:border-2 focus:border-amber-400 rounded-xl py-2 px-5"/>
                                                </div>

                                                <div className="w-full md:w-1/2  flex-wrap flex px-4  pr-9 md:pr-2 mt-5">
                                                    <label className="md:font-semibold mb-2 text-sm" >Email* </label>
                                                    <input type="text" placeholder="Digite seu nome" className="bg-gray-100 text-sm w-sm focus:outline-none focus:border-2 focus:border-amber-400 rounded-xl py-2 px-5"/>
                                                </div>

                                                <div className="w-full md:w-1/2   flex-wrap flex px-4 pr-9 md:pr-2 mt-5">
                                                    <label className="md:font-semibold mb-2 text-sm" >Empresa* </label>
                                                    <input type="text" placeholder="Nome da sua empresa" className="bg-gray-100 text-sm w-sm focus:outline-none focus:border-2 focus:border-amber-400 rounded-xl py-2 px-5 "/>
                                                </div>

                                                <div className="w-full md:w-1/2   flex-wrap flex px-4  pr-9 md:pr-2 mt-5">
                                                    <label className="md:font-semibold mb-2 text-sm" >Serviço de Interesse* </label>
                                                    <select placeholder="Seleccione o um serviço" className="bg-gray-100 w-sm text-sm focus:outline-none focus:border-2 focus:border-amber-400 rounded-xl py-2 px-5">
                                                        <option value="Design">Seleccione um Serviço</option>
                                                        <option value="Design">Design Gráfico</option>
                                                        <option value="Branding">Branding</option>
                                                        <option value="CriacaoConteudo">Crianção de Conteúdo</option>
                                                        <option value="ProducaoVideo">Produção de Vídeo</option>
                                                        <option value="ProjectoCompleto">Projecto Completo</option>
                                                    </select>
                                                </div>

                                                <div className="w-full px-4 mt-5">
                                                    <label className="md:font-semibold mb-4 text-sm" >Mensagem* </label>
                                                    <textarea placeholder="Conte-nos sobre o seu projecto, objectivos expectativas..." className="bg-gray-100 resize-none w-full h-42 align-top text-sm text-left focus:outline-none focus:border-2 focus:border-amber-400 rounded-xl py-3 px-5">
                                                    </textarea>
                                                </div>
                                                
                                                <div className="w-full h-[110px] flex mt-16">
                                                    <div className=" w-full">
                                                        <button className="btn-laranja w-full text-[95%] items-center md:text-[110%] justify-center px-6 py-3 md:py-5 transicao flex gap-2 font-semibold mt-5">ENVIAR MENSAGEM <Send/></button>
                                                    </div>
                                                </div>                                   
                                                
                                            </form>
                                        </div>
                              </div>
                              {/********************************************************************************************* */}

                              <div className="w-full lg:w-[48%] transicao rounded-t-2xl transicao ">

                                            <div className="gap-10 w-full md:h-[120px] flex flex-wrap justify-between transicao ">
                                                            
                                                            <div className="w-3/3 hover:shadow-amber-300 hover:shadow-2xl h-[90%] items-center py-6 rounded-xl hover:-mt-3 bg-white px-5 transicao">
                                                                    
                                                                    <div className="w-3/3 flex gap-4">
                                                                        <div className=" text-amber-600 bold bg-amber-200 rounded-full py-3 px-4 ">
                                                                            <span><Mail/></span> 
                                                                        </div>
                                                                        <div >
                                                                                <p className="font-semibold text-sm ">Email:</p>
                                                                                <p className="text-gray-400"><a className="hover:text-amber-500 pointer font-semibold text-sm" href="">contato@cikastudio.com</a></p>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                            </div>
                                            <div className="gap-10 mt-5 w-full md:h-[120px] flex flex-wrap justify-between transicao ">
                                                            
                                                            <div className="w-3/3 hover:shadow-amber-300 hover:shadow-2xl h-[90%] items-center py-6 rounded-xl hover:-mt-3 bg-white px-5 transicao">
                                                                    
                                                                    <div className="w-3/3 flex gap-4">
                                                                        <div className=" text-amber-600 bold bg-amber-200 rounded-full py-3 px-4 ">
                                                                            <span><PhoneCall/></span> 
                                                                        </div>
                                                                        <div >
                                                                                <p className="text-sm font-semibold">Telefone</p>
                                                                                <p className="text-gray-400 text-sm"> +244 948 921 147</p>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                            </div>
                                            <div className="gap-10 mt-5 w-full md:h-[120px] flex flex-wrap justify-between transicao ">
                                                            
                                                            <div className="w-3/3 hover:shadow-amber-300 hover:shadow-2xl h-[90%] items-center py-6 rounded-xl hover:-mt-3 bg-white px-5 transicao">
                                                                    
                                                                    <div className="w-3/3 flex gap-4">
                                                                        <div className=" text-amber-600 bold bg-amber-200 rounded-full py-3 px-4 ">
                                                                            <span><MapPin/></span> 
                                                                        </div>
                                                                        <div >
                                                                                <p className="text-sm font-semibold">Localização</p>
                                                                                <p className="text-gray-400 text-sm ">Talatona, Luanda-Angola</p>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                            </div>
                                            {/**********************************REDES SOCIAIS******************************************/}
                                            <div className="gap-10 mt-5 w-full h-[120px] flex flex-wrap justify-between transicao ">
                                                                 
                                                    <div className="w-3/3 pl-5 ">
                                                        <h2 className="text-xl text-amber-400 font-semibold">Siga-nos nas Redes Sociais</h2>
                                                           <div className="w-full md:w-[35%] flex flex-wrap gap-3 justify-center mt-5">
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
                                                            
                                            </div>
                                            {/**************************************Resposta Rápida Garantida********************************/}
                                            <div className="py-3 px-10 rounded-2xl mt-10 bg-amber-400 w-full h-[250px] flex flex-wrap justify-between transicao ">
                                                         <h2 className="text-xl font-semibold text-center ">Resposta Rápida Garantida</h2>
                                                    
                                                    <div className="w-full flex gap-4 transicao text-sm md:text-md">

                                                           <div className="w-3/3">
                                                                    <h3>Resposta inicial:</h3>
                                                           </div>
                                                           <div className="w-3/3 text-right font-semibold">
                                                                    <h3>24 horas</h3>
                                                           </div>
                                                            
                                                     </div>
                                                     {/*******************************************/}
                                                     <div className="w-full flex gap-4 transicao text-sm md:text-md">

                                                           <div className="w-3/3">
                                                                    <h3>Proposta detalhada:</h3>
                                                           </div>
                                                           <div className="w-3/3 text-right font-semibold ">
                                                                    <h3>2-3 dias úteis</h3>
                                                           </div>
                                                            
                                                     </div>
                                                     {/*******************************************/}
                                                     <div className="w-full flex gap-4 transicao text-sm md:text-md">

                                                           <div className="w-3/3">
                                                                    <h3>Início do projeto:</h3>
                                                           </div>
                                                           <div className="w-3/3 text-right font-semibold">
                                                                    <h3>1 semana</h3>
                                                           </div>
                                                            
                                                     </div>
                                                     {/*******************************************/}
                                                     
                                                            
                                            </div>

                              </div>
                              
                        </div>
                  </div>      

                  

     
</div>
        )
}
export default Contactos;