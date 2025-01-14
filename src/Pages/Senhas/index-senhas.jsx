import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-senhas";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Senhas(){
    return(
        <DivBox>
        <Header />
        <ContainerDiv>
            <h1>Senhas</h1>
        </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
        <Footer />
    </DivBox>
    );
};

export default Senhas
