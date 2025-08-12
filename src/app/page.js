
import Header from "./Header/page";
import Menubar from "./Menubar/page";
import Servicos from "./Servicos/page";
import Sobre from "./Sobre/page";
import Portfolio from "./Portfolio/page";
import Clientes from "./Clientes/page";
import Contactos from "./Contactos/page";
import Rodape from "./Rodape/page";

export default function Home() {
  return (
    <div>
      
        <Menubar/>
        <Header/>
        <Sobre/>
        <Servicos/>
        <Portfolio/>
        <div id="Clientes" className="">
              <Clientes/>
        </div>
        
        <Contactos/>
        <Rodape/>
       
    </div>
  );
}
