import { BrowserRouter, Links, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/index-homepage";
{/*import Boleto from "../Pages/Boletos/index-boletos";*/}
import Modelos from "../Pages/Modelos/index-modelos";
import Ferramentas from "../Pages/Ferramentas/index-ferramentas";
import AppLinks from "../Pages/Links/links";
import Preços from "../Pages/Preços/index-precos";
import Estoque from "../Pages/Estoque/index-estoque";
import Ajuda from "../Pages/Ajuda/index-ajuda";
import Senhas from "../Pages/Senhas/index-senhas";
import Caixa from "../Pages/Caixa/index-caixa";
import Agenda from "../Pages/Agenda/index-agenda";

function Rotas(){
    return(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/modelos" element={<Modelos />}></Route>
        {/*<Route path="/boletos" element={<Boleto />}></Route>*/}
        <Route path="/ferramentas" element={<Ferramentas />}></Route>
        <Route path="/links" element={<AppLinks />}></Route>
        <Route path="/preços" element={<Preços />}></Route>
        <Route path="/estoque" element={<Estoque />}></Route>
        <Route path="/ajuda" element={<Ajuda />}></Route>
        <Route path="/senhas" element={<Senhas />}></Route>
        <Route path="/caixa" element={<Caixa />}></Route>
        <Route path="/agenda" element={<Agenda />}></Route>
        </Routes> 
    </BrowserRouter>
    )
}
export default Rotas