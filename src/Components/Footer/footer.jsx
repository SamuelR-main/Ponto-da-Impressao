import {DivFooter, DivFooterBox, DivFooterBoxDiv, DivFooterBoxDivAtalhos, DivFooterAtalhos, DivFooterSocial, DivFooterBoxSocial, ReportBug} from './footer-styles'
import 'boxicons'

function Footer() {
    return(
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
                        <ReportBug>
                            <a href="">Reportar Bug</a>
                        </ReportBug>
                        <DivFooterSocial>
                            <a href=""><box-icon type='logo' name='whatsapp' color='#ffffff'></box-icon></a>
                            <a href=""><box-icon name='instagram' type='logo' color='#ffffff' ></box-icon></a>
                            <a href=""><box-icon name='envelope' color='#ffffff' ></box-icon></a>
                            <a href=""><box-icon name='location-plus' color='#ffffff' ></box-icon></a>
                        </DivFooterSocial>
                </DivFooterBoxSocial>
             </DivFooterBox>
        </DivFooter>
    )
}

export default Footer