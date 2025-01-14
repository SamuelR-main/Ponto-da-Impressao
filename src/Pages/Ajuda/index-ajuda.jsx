import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./style-ajuda";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Ajuda(){
    return(
        <DivBox>
        <Header />
        <ContainerDiv>
            <h1>Ajuda</h1>
        </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
        <Footer />
    </DivBox>
    );
};

export default Ajuda;