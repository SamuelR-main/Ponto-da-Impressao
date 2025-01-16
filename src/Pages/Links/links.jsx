import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from './styles-links';
import { ContainerDivTitle, ContainerDivBlackLine, ContainerDivWhiteBoard, ContainerDivTexto} from './styles-links'
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function AppLinks(){
    return(
    <DivBox>
        <Header />
        <ContainerDiv>
            <ContainerDivTitle><h1>Links</h1></ContainerDivTitle>
            <ContainerDivBlackLine></ContainerDivBlackLine>
            <ContainerDivWhiteBoard>
                <ContainerDivTexto>
                    <ul>
                        <li><a href="">Testo</a></li>
                        <li><a href="">Testo</a></li>
                        <li><a href="">Testo</a></li>
                        <li><a href="">Testo</a></li>
                        <li><a href="">Testo</a></li>
                        <li><a href="">Testo</a></li>
                        <li><a href="">Testo</a></li>
                        <li><a href="">Testo</a></li>
                    </ul>
                </ContainerDivTexto>
            </ContainerDivWhiteBoard>
        </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
        <Footer />
    </DivBox>
    );
};

export default AppLinks;