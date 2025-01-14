import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./style-estoque";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Estoque(){
    return(
        <DivBox>
        <Header />
        <ContainerDiv>
            <h1>Estoque</h1>
        </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
        <Footer />
    </DivBox>
    )
}

export default Estoque;