import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-modelos";
import { ContainerBox, ContainerBoxSubDiv, ContainerBoxTitle, ContainerBoxImg, ContainerSubDiv } from "./styles-modelos"
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import AluguelURL from '../../assets/Aluguel.jpg'

function Modelos(){
    return(
        <DivBox>
            <Header />
            <ContainerDiv>
                <ContainerSubDiv>
                    <h1>MODELOS</h1>
                    <input type="search" placeholder="Digite aqui..."/>
                </ContainerSubDiv>
                <ContainerBox>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Contrato de Aluguel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={AluguelURL} alt="" /></ContainerBoxImg>
                    </ContainerBoxSubDiv>
                </ContainerBox>
            </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
            <Footer />
        </DivBox>
    )
}
export default Modelos