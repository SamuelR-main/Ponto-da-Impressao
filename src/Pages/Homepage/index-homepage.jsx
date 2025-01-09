import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import {DivContainer, DivBox, ImgBackground} from './styles-homepage'
import {DivHeader, DivHeaderBox, DivHeaderBoxLinks, LogoImg} from './styles-homepage'
import {DivFooter, DivFooterBox, DivFooterBoxDiv, DivFooterBoxDivAtalhos, DivFooterAtalhos, DivFooterSocial, DivFooterBoxSocial} from './styles-homepage'
import LogoURL from '../../assets/Logo.png'
import 'boxicons'

function Homepage() {
    return (
        <DivBox>
        <DivHeader>
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
        <DivContainer><ImgBackground src={BackgroundPapelURL} alt="" /></DivContainer>
        <DivFooter>
             <DivFooterBox>
                <DivFooterBoxDiv>
                    <h1>Ponto da Impressão</h1>
                    <p><b>End.</b> Rua Dormingos Lordsleen, N°320<br></br>Pajuçara, Maceió-AL<br></br><b>CEP:</b> 57030-670<br></br><br></br><b>Contato:</b> (82) 99800-9433<br></br><a href="mailto:pontodaimpressao2017@gmail.com"><b>E-mail:</b> pontodaimpressao2017@gmail.com</a></p>
                </DivFooterBoxDiv>
                <DivFooterBoxDiv>
                    <h2>Atalhos</h2>
                    <DivFooterBoxDivAtalhos>
                        <DivFooterAtalhos><a href="">Boletos</a></DivFooterAtalhos>
                        <DivFooterAtalhos><a href="">Modelos</a></DivFooterAtalhos>
                        <DivFooterAtalhos><a href="">Ferramentas</a></DivFooterAtalhos>
                        <DivFooterAtalhos><a href="">Links</a></DivFooterAtalhos>
                        <DivFooterAtalhos><a href="">Preços</a></DivFooterAtalhos>
                        <DivFooterAtalhos><a href="">Estoque</a></DivFooterAtalhos>
                        <DivFooterAtalhos><a href="">Ajuda</a></DivFooterAtalhos>
                        <DivFooterAtalhos><a href="">Senhas</a></DivFooterAtalhos>
                        <DivFooterAtalhos><a href="">Caixa</a></DivFooterAtalhos>
                        <DivFooterAtalhos><a href="">Agenda</a></DivFooterAtalhos>
                    </DivFooterBoxDivAtalhos>
                </DivFooterBoxDiv>
             </DivFooterBox>
             <hr></hr>
             <DivFooterBox>
                <DivFooterBoxSocial>
                    <a href="">Reportar Bug</a>
                        <DivFooterSocial>
                            <a href=""><box-icon type='logo' name='whatsapp' color='#ffffff'></box-icon></a>
                            <a href=""><box-icon name='instagram' type='logo' color='#ffffff' ></box-icon></a>
                            <a href=""><box-icon name='envelope' color='#ffffff' ></box-icon></a>
                            <a href=""><box-icon name='location-plus' color='#ffffff' ></box-icon></a>
                        </DivFooterSocial>
                </DivFooterBoxSocial>
             </DivFooterBox>
        </DivFooter>
        </DivBox>
    )
}

export default Homepage