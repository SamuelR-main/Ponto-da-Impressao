import {FooterDiv, FooterSubDiv, FooterSocialDiv, FooterSocialSubDiv, FooterSocialIcons, FooterSubDivTexto, FooterSubDivAtalhos, FooterSubDivAtalhosElements} from './footer-styles'
import 'boxicons'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <FooterDiv>
            <FooterSubDiv>
                <FooterSubDivTexto>
                    <h1>Ponto da Impressão</h1>
                    <p><b>End.</b> Rua Dormingos Lordsleen, N°320<br></br>
                    Pajuçara, Maceió-AL<br></br>
                    <b>CEP: </b>57030-670<br></br>
                    <br></br>
                    <b>Contato: </b> (82) 99800-9433<br></br>
                    <a href="Mailto:pontodaimpressao2017@gmail.com"><b>E-mail: </b>pontodaimpressao2017@gmail.com</a></p>
                </FooterSubDivTexto>
                <FooterSubDivAtalhos>
                    <h2>Atalhos</h2>
                    <FooterSubDivAtalhosElements>
                        <Link to="/boletos">Boletos</Link>
                        {/*<Link to="/modelos">Modelos</Link>*/}
                        <Link to="/ferramentas">Ferramentas</Link>
                        <Link to="/links">Links</Link>
                        <Link to="/preços">Preços</Link>
                        <Link to="/estoque">Estoque</Link>
                        <Link to="/ajuda">Ajuda</Link>
                        <Link to="/senhas">Senhas</Link>
                        <Link to="/caixa">Caixa</Link>
                        <Link to="/agenda">Agenda</Link>
                    </FooterSubDivAtalhosElements>
                </FooterSubDivAtalhos>
            </FooterSubDiv>
            <FooterSocialDiv>
                <hr></hr>
                <FooterSocialSubDiv>
                    <a href="Mailto:saaamuelrooodrigooo@gmail.com" id='report'>Reportar Bug</a>
                    <FooterSocialIcons>
                        <a href="Mailto:saaamuelrooodrigooo@gmail.com" id='bug'><box-icon name='bug' color='#ffffff' ></box-icon></a>
                        <a href="https://wa.me/+5582998009433" target="_blank"><box-icon type='logo' name='whatsapp' color='#ffffff'></box-icon></a>
                        <a href=""><box-icon name='instagram' type='logo' color='#ffffff' ></box-icon></a>
                        <a href="Mailto:pontodaimpressao2017@gmail.com"><box-icon name='envelope' color='#ffffff' ></box-icon></a>
                        <a href="https://www.google.com/maps/place/Ponto+da+Impress%C3%A3o/@-9.6658981,-35.7153156,17z/data=!3m1!4b1!4m6!3m5!1s0x70145f322ca4159:0xf8d64a8be5732309!8m2!3d-9.6658981!4d-35.7153156!16s%2Fg%2F11gk5v1fqr?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><box-icon name='location-plus' color='#ffffff' ></box-icon></a>
                    </FooterSocialIcons>
                </FooterSocialSubDiv>
            </FooterSocialDiv>
        </FooterDiv>
                            

    )
}

export default Footer