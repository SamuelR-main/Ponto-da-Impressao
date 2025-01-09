import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import {DivContainer, DivBox, ImgBackground} from './styles-homepage'


function Homepage() {
    return (
        <DivBox>
            {/*<Header />*/}
                <DivContainer><ImgBackground src={BackgroundPapelURL} alt="" /></DivContainer>
            <Footer />
        </DivBox>
    )
}

export default Homepage