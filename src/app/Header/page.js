import { ArrowRight, StepForward } from "lucide-react";


function Header(){
        return(
<div id="topo" className="mt-[72px]">            
      <div id="header" className="transicao h-[755px] flex text-center justify-center items-center ">
                <div className="w-[50%] text-center">
                         <h1 className="text-7xl pb-10 text-black font-semibold">Criamos experiências <span className="cor-logo">extraordinárias</span></h1>
                        
                        <p className="pb-10 text-[150%] text-gray-200 text-center w-full">Somos a <span className="text-amber-300">CIKA Studio</span>, uma agência criativa especializada em design gráfico, branding, criação de conteúdo e produção de vídeo para startups e marcas que querem se destacar.</p>
                        <div className="flex pb-14 space-x-4 items-center justify-center">
                            <button className="btn-laranja text-[110%] px-6 py-3 transicao flex gap-2 font-semibold ">Vamos criar juntos<ArrowRight/></button>
                            <button className="btn-branco text-[110%] px-6 py-3 transicao flex gap-2"><StepForward/> Ver nosso trabalho</button>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <div className="w-1/3">
                                <span className="text-4xl text-amber-300 font-semibold">+50</span>
                                <p className="text-gray-200 text-lg">Projectos Entregues</p>
                            </div>  

                            <div className="w-1/3">
                                <span className="text-4xl text-amber-200 font-semibold">+25</span>
                                <p className="text-gray-200 text-lg">Clientes Felizes</p>
                            </div> 

                            <div className="w-1/3">
                                <span className="text-4xl text-amber-100 font-semibold">3</span>
                                <p className="text-gray-200 text-lg">Anos de Esperiência</p>
                            </div>  

                            <div className="w-1/3">
                                <span className="text-4xl text-amber-900 font-semibold">100%</span>
                                <p className="text-gray-200 text-lg">Satisfação</p>
                            </div>    
                        </div>
                </div>
      </div>
</div>
        )
}
export default Header;