import {FooterDiv, FooterSubDiv, FooterSocialDiv, FooterSocialSubDiv, FooterSocialIcons, FooterSubDivTexto, FooterSubDivAtalhos, FooterSubDivAtalhosElements} from './footer-styles'
import 'boxicons'

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
                        <a href="#">Boletos</a>
                        <a href="#">Modelos</a>
                        <a href="#">Ferramentas</a>
                        <a href="#">Links</a>
                        <a href="#">Preços</a>
                        <a href="#">Estoque</a>
                        <a href="#">Ajuda</a>
                        <a href="#">Senhas</a>
                        <a href="#">Caixa</a>
                        <a href="#">Agenda</a>
                    </FooterSubDivAtalhosElements>
                </FooterSubDivAtalhos>
            </FooterSubDiv>
            <FooterSocialDiv>
                <hr></hr>
                <FooterSocialSubDiv>
                    <a href="Mailto:saaamuelrooodrigooo@gmail.com" id='report'>Reportar Bug</a>
                    <FooterSocialIcons>
                        <a href="Mailto:saaamuelrooodrigooo@gmail.com" id='bug'><box-icon name='bug' color='#ffffff' ></box-icon></a>
                        <a href=""><box-icon type='logo' name='whatsapp' color='#ffffff'></box-icon></a>
                        <a href=""><box-icon name='instagram' type='logo' color='#ffffff' ></box-icon></a>
                        <a href=""><box-icon name='envelope' color='#ffffff' ></box-icon></a>
                        <a href=""><box-icon name='location-plus' color='#ffffff' ></box-icon></a>
                    </FooterSocialIcons>
                </FooterSocialSubDiv>
            </FooterSocialDiv>
        </FooterDiv>
                            

    )
}

export default Footer