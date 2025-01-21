import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-senhas";
import { ContainerSubDiv, ContainerThirdDiv, ContainerThirdDivBox } from './styles-senhas'
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Senhas(){
    return(
        <DivBox>
        <Header />
        <ContainerDiv>
            <ContainerSubDiv>
                <h1>Senhas</h1>
                <input type="search" placeholder="Digite o CPF do Cliente... ex: 01234567868"/>
            </ContainerSubDiv>
            <ContainerThirdDiv>
                <ContainerThirdDivBox>
                    <h2>Unimed</h2>
                    <p>000000Aa.</p>
                </ContainerThirdDivBox>
                <ContainerThirdDivBox>
                    <h2>Claro Movel</h2>
                    <p>000000Aa</p>
                </ContainerThirdDivBox>
                <ContainerThirdDivBox>
                    <h2>Cartões APP</h2>
                    <p>302004</p>
                </ContainerThirdDivBox>
                <ContainerThirdDivBox>
                    <h2>Claro Residencial</h2>
                    <p>000000Aa.</p>
                </ContainerThirdDivBox>
                <ContainerThirdDivBox>
                    <h2>Detran Mais</h2>
                    <p>00000000</p>
                </ContainerThirdDivBox>
                <ContainerThirdDivBox>
                    <h2>Unimed</h2>
                    <p>000000Aa.</p>
                </ContainerThirdDivBox>
            </ContainerThirdDiv>
        </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
        <Footer />
    </DivBox>
    );
};

export default Senhas
