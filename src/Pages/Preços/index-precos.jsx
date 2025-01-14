import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-precos";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Preços(){
    return(
        <DivBox>
        <Header />
        <ContainerDiv>
            <h1>Preços</h1>
        </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
        <Footer />
    </DivBox>
    );
};

export default Preços;