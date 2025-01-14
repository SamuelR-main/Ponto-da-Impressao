import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-Boletos";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Boleto(){
    return(
        <DivBox>
            <Header />
            <ContainerDiv>
                <h1>Boletos</h1>
            </ContainerDiv>
                <Backgrounder>
                    <ImgBackground src={BackgroundPapelURL} alt="" />
                </Backgrounder>
            <Footer />
        </DivBox>
    );
};
export default Boleto;