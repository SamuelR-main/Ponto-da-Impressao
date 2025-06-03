import Footer from "../../Components/Footer/footer"
import Header from "../../Components/Header/header"
import { DivBox, Backgrounder, ImgBackground } from "./styles-caixa"
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import {Container, ContainerTitulo, ContainerLista} from "./styles-caixa"
function Caixa(){
    return(
        <DivBox>
            <Header />
            <Container>
                <ContainerTitulo>
                    <h1>Container</h1>
                </ContainerTitulo>
                <ContainerLista>
                    <ul>
                        <li>Boleto</li>
                        <li>Impressão</li>
                        <li>Impressão Colorida</li>
                        <li>Fotografico</li>
                        <li>Adesivo</li>
                        <li>Xerox</li>
                        <li>Digitação Simples</li>
                        <li>Scanner</li>
                        <li>Notas Fiscais</li>
                        <li>Cadastro Conta GOV</li>
                        <li>Pacotes Recebidos</li>
                        <li>Pacotes Despachaos</li>
                        <li>Desconto</li>
                    </ul>
                </ContainerLista>
            </Container>
                <Backgrounder>
                    <ImgBackground src={BackgroundPapelURL} alt="" />
                </Backgrounder>
            <Footer />
        </DivBox>
    );
};
import { Form } from "react-router-dom";

export default Caixa;