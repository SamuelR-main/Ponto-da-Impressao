import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import { DivBox, ContainerLogo, ContainerDiv, ContainerResumo} from './styles-homepage'
import { Backgrounder, ImgBackground } from './styles-homepage'
import { ContainerRapido, ContainerRapidoDiv, ContainerRapidoSubDiv, ContainerRapidoThirdDiv, LogoLinksImg } from './styles-homepage'
import LogoCompletaURL from '../../assets/Logo-Completa.png'
import ImpressoraImgURL from '../../assets/Impressora.png'
import EquatorialURL from '../../assets/Equatorial.png'
import BrkURL from '../../assets/BRK.jpg'
import DetranURL from '../../assets/Detran.jpg'
import HapvidaURL from '../../assets/Hapvida.png'
import IptuURL from '../../assets/IPTU.png'
import PgmeiURL from '../../assets/PGMEI.jpg'
import UnimedURL from '../../assets/Unimed.jpg'
import ReciboURL from '../../assets/ReciboOnline.png'
import AluguelURL from '../../assets/Aluguel.jpg'
import VendaURL from '../../assets/Venda.jpg'
import PixURL from '../../assets/PIX.jpg'
import CurriculoURL from '../../assets/Curriculo.jpg'

import 

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
                                        <ContainerRapidoThirdDiv>
                                            <LogoLinksImg src={EquatorialURL} alt="Boleto Equatorial" />
                                            <LogoLinksImg src={BrkURL} alt="Boleto BRK Ambiental" />
                                            <LogoLinksImg src={UnimedURL} alt="Boleto Unimed" />
                                            <LogoLinksImg src={HapvidaURL} alt="Boleto Hapvida" />
                                            <LogoLinksImg src={IptuURL} alt="Boleto IPTU" />
                                            <LogoLinksImg src={PgmeiURL} alt="Boleto Simples Nacional" />
                                            <LogoLinksImg src={DetranURL} alt="Boleto Detran Alagoas" />
                                        </ContainerRapidoThirdDiv>
                                    </ContainerRapidoSubDiv>
                                    <ContainerRapidoSubDiv>
                                        <h2>Modelos</h2>
                                        <ContainerRapidoThirdDiv>
                                            <LogoLinksImg src={ReciboURL} alt="Modelo Recibo" />
                                            <LogoLinksImg src={AluguelURL} alt="Modelo Aluguel" />
                                            <LogoLinksImg src={VendaURL} alt="Modelo Venda" />
                                            <LogoLinksImg src={PixURL} alt="Modelo PIX" />
                                            <LogoLinksImg src={CurriculoURL} alt="Modelo Currículo" />
                                        </ContainerRapidoThirdDiv>
                                    </ContainerRapidoSubDiv>
                                    <ContainerRapidoSubDiv>
                                        <h2>Ferramentas</h2>
                                        <ContainerRapidoThirdDiv>
                                            <LogoLinksImg src={UnimedURL} alt="Boleto Unimed" />
                                            <LogoLinksImg src={HapvidaURL} alt="Boleto Hapvida" />
                                            <LogoLinksImg src={IptuURL} alt="Boleto IPTU" />
                                            <LogoLinksImg src={PgmeiURL} alt="Boleto Simples Nacional" />
                                            <LogoLinksImg src={DetranURL} alt="Boleto Detran Alagoas" />
                                            <LogoLinksImg src={DetranURL} alt="Boleto Detran Alagoas" />
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

export default Homepage