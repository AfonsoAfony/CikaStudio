function Menubar(){
        return(
<div className=" z-10 top-0 left-0 w-full fixed"> 

      <div className="flex justify-around transicao inicio px-19 h-18">
           
            <div className="w-1/3 flex transicao ">
                  <h1 className="logo flex transicao items-center text-2xl "><a href="#">CIKA Studio</a></h1>
            </div>
            <div className="w-3/3 flex justify-between transicao">
                  
                        <ul className="mx-8 ml-18 transicao text-[108%] text-gray-500 list-none px-5 gap-6 flex items-center ">
                          <li><a className="transicao link" href="#topo">Início</a></li>
                          <li><a className="transicao link" href="#sobre">Sobre</a></li>
                          <li><a className="transicao link" href="#Servicos">Serviços</a></li>
                          <li><a className="transicao link" href="#Portfolio">Portfólio</a></li>
                          <li><a className="transicao link" href="#Clientes">Clientes</a></li>
                          <li><a className="transicao link" href="#Contactos">Contactos</a></li>
                        </ul>
                        
                         <div className=" flex justify-end items-center transicao px-3 ">
                          <button className=" animacao-opacidade btn-laranja px-6 font-bold text-lg py-2 transicao">Vamos criar juntos</button>
                        </div>
                  
                 
            </div>
      </div>
</div>
        )
}
export default Menubar;