import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import { DivBox, ContainerLogo, ContainerDiv, ContainerResumo} from './styles-homepage'
import { Backgrounder, ImgBackground } from './styles-homepage'
import { ContainerRapido, ContainerRapidoDiv, ContainerRapidoSubDiv, ContainerRapidoThirdDiv, ContainerRapidoSubDivBox, LogoLinksImg, ContainerRapidoFourDiv, ContainerRapidoFiveDiv } from './styles-homepage'
import LogoCompletaURL from '../../assets/Logo-Completa.png'
import ImpressoraImgURL from '../../assets/Impressora.png'
import EquatorialURL from '../../assets/Equatorial.png'
import BrkURL from '../../assets/BRK.jpg'
import HapvidaURL from '../../assets/Hapvida.png'
import IptuURL from '../../assets/IPTU.png'
import PgmeiURL from '../../assets/PGMEI.jpg'
import UnimedURL from '../../assets/Unimed.jpg'
import ReciboURL from '../../assets/ReciboOnline.png'
import AluguelURL from '../../assets/Aluguel.jpg'
import VendaURL from '../../assets/Venda.jpg'
import PixURL from '../../assets/PIX.jpg'
import CurriculoURL from '../../assets/Curriculo.jpg'
import PDFtoIMGURL from '../../assets/PDFtoIMG.jpg'
import IMGtoPDFURL from '../../assets/IMGtoPDF.jpg'
import PDFtoWORDURL from '../../assets/PDFtoWORD.jpg'
import WORDtoPDFURL from '../../assets/WORDtoPDF.jpg'
import JuntarURL from '../../assets/Juntar.jpg'
import DividirURL from '../../assets/Dividir.jpg'

function Homepage() {
    return (
        <DivBox>
            <Header />
                <ContainerDiv>
                        <ContainerLogo>
                            <img src={LogoCompletaURL} alt="" />
                        </ContainerLogo>
                        <ContainerResumo>
                            <img src={ImpressoraImgURL} alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur. Placerat in pretium cursus dolor pretium risus. Dignissim fringilla sit quis aliquam eu sed pulvinar pellentesque viverra. Pretium leo a hac auctor turpis. Vitae feugiat diam amet leo sit.</p>
                        </ContainerResumo>
                        <ContainerRapido>
                            <h1>ACESSO RÁPIDO</h1>
                                <ContainerRapidoDiv>
                                    <ContainerRapidoSubDiv>
                                        <h2>Boletos</h2>
                                        <ContainerRapidoSubDivBox></ContainerRapidoSubDivBox>
                                        <ContainerRapidoThirdDiv id='Boletos'>
                                            <ContainerRapidoFourDiv>
                                                <a href="https://al.equatorialenergia.com.br/" target="_blank">
                                                <ContainerRapidoFiveDiv id='DivEquatorial'> 
                                                    <p>Equatorial</p>
                                                </ContainerRapidoFiveDiv>
                                                </a>
                                                <ContainerRapidoFiveDiv id="DivBRK">
                                                    <a href="https://minhabrk.com.br/home/servicos/segunda-via-facil" target="_blank"><p>BRK</p></a>
                                                </ContainerRapidoFiveDiv>
                                                <ContainerRapidoFiveDiv id="DivUnimed">
                                                    <a href="https://beneficiario.unimedmaceio.com.br/login" target="_blank"><p>Unimed</p></a>
                                                </ContainerRapidoFiveDiv>
                                                <ContainerRapidoFiveDiv id="DivHapvida">
                                                    <a href="https://webhap.hapvida.com.br/pls/webhap/webNewBoleto.login"><p>Hapvida</p></a>
                                                </ContainerRapidoFiveDiv>
                                                <ContainerRapidoFiveDiv id="DivIPTU">
                                                    <a href="https://siat.maceio.al.gov.br/dsf_mcz_portal/inicial.do?evento=montaMenu&acronym=EXTRATO"><p>IPTU</p></a>
                                                </ContainerRapidoFiveDiv>
                                                <ContainerRapidoFiveDiv id="DivPGMEI">
                                                    <a href="https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes/atspo/pgmei.app/identificacao"><p>PGMEI</p></a>
                                                </ContainerRapidoFiveDiv>
                                            </ContainerRapidoFourDiv>
                                            <a href="https://al.equatorialenergia.com.br/" target="_blank"><LogoLinksImg src={EquatorialURL} alt="Boleto Equatorial" /></a>
                                            <a href="https://minhabrk.com.br/home/servicos/segunda-via-facil" target="_blank"><LogoLinksImg src={BrkURL} alt="Boleto BRK Ambiental" /></a>
                                            <a href="https://beneficiario.unimedmaceio.com.br/login" target="_blank"><LogoLinksImg src={UnimedURL} alt="Boleto Unimed" /></a>
                                            <a href="https://webhap.hapvida.com.br/pls/webhap/webNewBoleto.login" target="_blank"><LogoLinksImg src={HapvidaURL} alt="Boleto Hapvida" /></a>
                                            <a href="https://siat.maceio.al.gov.br/dsf_mcz_portal/inicial.do?evento=montaMenu&acronym=EXTRATO" target="_blank"><LogoLinksImg src={IptuURL} alt="Boleto IPTU" /></a>
                                            <a href="https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes/atspo/pgmei.app/identificacao" target="_blank"><LogoLinksImg src={PgmeiURL} alt="Boleto Simples Nacional" id="PGMEI"/></a>
                                        </ContainerRapidoThirdDiv>
                                    </ContainerRapidoSubDiv>
                                    <ContainerRapidoSubDiv id='Modelos'>
                                        <h2>Modelos</h2>
                                        <ContainerRapidoSubDivBox></ContainerRapidoSubDivBox>
                                        <ContainerRapidoThirdDiv>
                                            <a href="https://reciboonline.com.br/recibo-simples" target="_blank"><LogoLinksImg src={ReciboURL} alt="Modelo Recibo" /></a>
                                            <a href="https://modeloinicial.com.br/peticao/11001583/contrato-aluguel" target="_blank"><LogoLinksImg src={AluguelURL} alt="Modelo Aluguel" /></a>
                                            <a href="https://modeloinicial.com.br/peticao/11026073/contrato-compra-venda-imovel" target="_blank"><LogoLinksImg src={VendaURL} alt="Modelo Venda" /></a>
                                            <a href="https://www.canva.com/design/DAGcNlBmKCs/N1SewWqJJhaxPWbiCC2Fsg/edit" target="_blank"><LogoLinksImg src={PixURL} alt="Modelo PIX" id="PIX"/></a>
                                            <a href="https://www.canva.com/design/DAGcNpgGgjs/icHn-6Kc2PhD7KLvw5UVww/edit" target="_blank"><LogoLinksImg src={CurriculoURL} alt="Modelo Currículo" /></a>
                                        </ContainerRapidoThirdDiv>
                                    </ContainerRapidoSubDiv>
                                    <ContainerRapidoSubDiv id='Ferramentas'>
                                        <h2>Ferramentas</h2>
                                        <ContainerRapidoSubDivBox></ContainerRapidoSubDivBox>
                                        <ContainerRapidoThirdDiv>
                                            <a href="https://www.ilovepdf.com/pt/pdf_para_jpg" target="_blank"><LogoLinksImg src={PDFtoIMGURL} alt="Ferramenta PDF para IMG" className='Ferramentas'/></a>
                                            <a href="https://www.ilovepdf.com/pt/jpg_para_pdf" target="_blank"><LogoLinksImg src={IMGtoPDFURL} alt="Ferramenta IMG para PDF" className='Ferramentas'/></a>
                                            <a href="https://www.ilovepdf.com/pt/pdf_para_word" target="_blank"><LogoLinksImg src={PDFtoWORDURL} alt="Ferramenta PDF para WORD" className='Ferramentas'/></a>
                                            <a href="https://www.ilovepdf.com/pt/word_para_pdf" target="_blank"><LogoLinksImg src={WORDtoPDFURL} alt="Ferramenta Word para PDF" className='Ferramentas'/></a>
                                            <a href="https://www.ilovepdf.com/pt/juntar_pdf" target="_blank"><LogoLinksImg src={JuntarURL} alt="Juntar PDF" className='Ferramentas'/></a>
                                            <a href="https://www.ilovepdf.com/pt/dividir_pdf" target="_blank"><LogoLinksImg src={DividirURL} alt="Dividir PDF" className='Ferramentas'/></a>
                                        </ContainerRapidoThirdDiv>
                                    </ContainerRapidoSubDiv>
                                </ContainerRapidoDiv>
                        </ContainerRapido>
                </ContainerDiv>
                <Backgrounder>
                        <ImgBackground src={BackgroundPapelURL} alt="" />
                </Backgrounder>
            <Footer />
        </DivBox>
    )
}

export default Homepage;