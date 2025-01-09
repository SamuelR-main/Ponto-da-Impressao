import {DivHeader, DivHeaderBox, DivHeaderBoxLinks, LogoImg, DivHeaderBoxCell} from './header-styles'
import LogoURL from '../../assets/Logo.png'
import { Menu, Ham, Line } from "./header-styles"


function Header() {
    return (
                <DivHeader>
                    <DivHeaderBoxCell>
                        <Ham>
                            <Line></Line>
                            <Line></Line>
                            <Line></Line>
                        </Ham>
                            <Menu id="menu">
                                <ul>
                                    <li><a href="#">Opção 1</a></li>
                                    <li><a href="#">Opção 2</a></li>
                                    <li><a href="#">Opção 3</a></li>
                                </ul>
                            </Menu>
                        <LogoImg src={LogoURL} alt="" />
                    </DivHeaderBoxCell>
                    <DivHeaderBox>
                        <LogoImg src={LogoURL} alt="" />
                        <DivHeaderBoxLinks><p>Boletos</p></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><p>Modelos</p></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><p>Ferramentas</p></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><p>Links</p></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><p>Preços</p></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><p>Estoque</p></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><p>Ajuda</p></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><p>Senhas</p></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><p>Caixa</p></DivHeaderBoxLinks>
                        <DivHeaderBoxLinks><p>Agenda</p></DivHeaderBoxLinks>
                    </DivHeaderBox>
                </DivHeader>
    )
}   

export default Header
    
    
    
