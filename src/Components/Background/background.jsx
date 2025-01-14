import { Backgrounder, ImgBackground } from "./background-styles"
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function Backgroundd(){
    return(
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
    )
}

export default Backgroundd