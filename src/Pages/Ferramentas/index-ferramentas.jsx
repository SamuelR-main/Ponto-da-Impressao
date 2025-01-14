import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import { ContainerDiv, Backgrounder, DivBox, ImgBackground } from "./styles-ferrramentas"
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Ferramentas(){
    return(
        <DivBox>
        <Header />
        <ContainerDiv>
            <h1>Ferramentas</h1>
        </ContainerDiv>
        <Backgrounder>
            <ImgBackground src={BackgroundPapelURL} alt="" />
        </Backgrounder>
        <Footer />
        </DivBox>
    )
}
export default Ferramentas