import { DivContainer, ImgBackground } from "./background-styles"
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Backgroundd(){
    return(
        <DivContainer>
            <ImgBackground src={BackgroundPapelURL} alt="" />
        </DivContainer>
    )
}

export default Backgroundd