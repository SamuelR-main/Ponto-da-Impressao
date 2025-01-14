import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-caixa";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Caixa(){
    return(
        <DivBox>
            <Header />
            <ContainerDiv>
                <h1>Caixas</h1>
            </ContainerDiv>
                <Backgrounder>
                    <ImgBackground src={BackgroundPapelURL} alt="" />
                </Backgrounder>
            <Footer />
        </DivBox>
    );
};

export default Caixa;