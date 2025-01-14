import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-agenda";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Agenda(){
    return(
        <DivBox>
            <Header />
            <ContainerDiv>
                <h1>Agenda</h1>
            </ContainerDiv>
                <Backgrounder>
                    <ImgBackground src={BackgroundPapelURL} alt="" />
                </Backgrounder>
            <Footer />
        </DivBox>
    );
};

export default Agenda;