import { ArrowRight, StepForward } from "lucide-react";


function Header(){
        return(
<div id="topo" className="lg:mt-[72px] mt-[70px]">            
      <div id="header" className="transicao h-[755px] flex text-center justify-center items-center ">
                <div className="lg:w-[50%] w-full text-center">
                         <h1 className="lg:text-7xl text-4xl md:px-0 px-9 pb-10 text-black font-semibold">Criamos experiências <span className="cor-logo">extraordinárias</span></h1>
                        
                        <p className="pb-10 md:text-[150%] md:px-0 px-10  text-[130%] text-gray-200 text-center w-full">Somos a <span className="text-amber-300">CIKA Studio</span>, uma agência criativa especializada em design gráfico, branding, criação de conteúdo e produção de vídeo para startups e marcas que querem se destacar.</p>
                        <div className="flex flex-wrap gap-y-2 mb-9 gap-x-4 items-center justify-center">
                            <a href="#Portfolio"><div className="h-16 border border-transparent block"><button className="h-15 btn-laranja text-[140%] px-6 py-3 items-center  transicao flex gap-2 font-semibold ">Vamos criar juntos<ArrowRight/></button></div></a>
                            <a href="#Portfolio"><button className="btn-branco text-[140%] px-8 py-3 items-center transicao flex gap-2"><StepForward/> Ver nosso trabalho</button></a>
                        </div>
                        <div className="flex gap-4 items-center md:px-9 px-1 justify-center">
                            <div className="w-1/3 ">
                                <span className="md:text-4xl text-2xl text-amber-300 font-semibold">+50</span>
                                <p className="text-gray-200 md:text-lg text-sm">Projectos Entregues</p>
                            </div>  

                            <div className="w-1/3">
                                <span className="md:text-4xl text-2xl text-amber-200 font-semibold">+25</span>
                                <p className="text-gray-200 md:text-lg text-sm">Clientes Felizes</p>
                            </div> 

                            <div className="w-1/3">
                                <span className="md:text-4xl text-2xl text-amber-100 font-semibold">3</span>
                                <p className="text-gray-200 md:text-lg text-sm">Anos de Esperiência</p>
                            </div>  

                            <div className="w-1/3">
                                <span className="md:text-4xl text-2xl text-amber-900 font-semibold">100%</span>
                                <p className="text-gray-200 md:text-lg text-sm">Satisfação</p>
                            </div>    
                        </div>
                </div>
      </div>
</div>
        )
}
export default Header;