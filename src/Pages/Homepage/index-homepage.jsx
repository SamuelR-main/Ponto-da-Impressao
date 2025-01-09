import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import Header from '../../Components/Header/header'
import {DivContainer, DivBox, ImgBackground} from './styles-homepage'


function Homepage() {
    return (
        <DivBox>
            <Header />
                <DivContainer><ImgBackground src={BackgroundPapelURL} alt="" /></DivContainer>
        </DivBox>
    )
}

export default Homepage