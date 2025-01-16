import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-precos";
import { ContainerDivTitle, ContainerSubDiv, ContainerSubDivTipo, ContainerSubDivLine, ContainerSubDivItem} from './styles-precos'
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Preços(){
    return(
        <DivBox>
        <Header />
        <ContainerDiv>
            <ContainerDivTitle>
                <h1>Preços</h1>
            </ContainerDivTitle>
            <ContainerSubDiv>
                <ContainerSubDivTipo><h2>Impressão</h2></ContainerSubDivTipo>
                <ContainerSubDivLine></ContainerSubDivLine>
                <ContainerSubDivItem>
                    <ul>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                    </ul>
                </ContainerSubDivItem>
                <ContainerSubDivTipo><h2>Impressão</h2></ContainerSubDivTipo>
                <ContainerSubDivLine></ContainerSubDivLine>
                <ContainerSubDivItem>
                    <ul>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                    </ul>
                </ContainerSubDivItem>
                <ContainerSubDivTipo><h2>Impressão</h2></ContainerSubDivTipo>
                <ContainerSubDivLine></ContainerSubDivLine>
                <ContainerSubDivItem>
                    <ul>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                        <li>Impressão.....................R$1,00</li>
                    </ul>
                </ContainerSubDivItem>
                
            </ContainerSubDiv>
            
        </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
        <Footer />
    </DivBox>
    );
};

export default Preços;