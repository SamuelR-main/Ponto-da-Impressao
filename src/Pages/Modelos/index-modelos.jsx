import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-modelos";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Modelos(){
    return(
        <DivBox>
            <Header />
            <ContainerDiv>
                <h1>Modelos</h1>
            </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
            <Footer />
        </DivBox>
    )
}
export default Modelos