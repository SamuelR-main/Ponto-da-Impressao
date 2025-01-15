import {DivHeader, DivHeaderBox, DivHeaderBoxLinks, LogoImg, DivHeaderBoxCell} from './header-styles'
import LogoURL from '../../assets/Logo.png'
import HamburguerComponent from '../Hamburguer/hamburguer'
import { Link } from 'react-router-dom'

function Header() {
    return (
                <DivHeader>
                    <DivHeaderBoxCell>      
                        <HamburguerComponent />
                        <LogoImg src={LogoURL} alt="" />
                    </DivHeaderBoxCell>
                    <DivHeaderBox>
                        <Link to="/"><LogoImg src={LogoURL} alt="" /></Link>
                        <DivHeaderBoxLinks><Link to="/boletos"><p>Boletos</p></Link></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><Link to="/ferramentas"><p>Ferramentas</p></Link></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><Link to="/links"><p>Links</p></Link></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><Link to="/preços"><p>Preços</p></Link></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><Link to="/estoque"><p>Estoque</p></Link></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><Link to="/ajuda"><p>Ajuda</p></Link></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><Link to="/senhas"><p>Senhas</p></Link></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><Link to="/caixa"><p>Caixa</p></Link></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><Link to="/agenda"><p>Agenda</p></Link></DivHeaderBoxLinks>
                    </DivHeaderBox>
                </DivHeader>
    )
}   

export default Header
    
    
    
