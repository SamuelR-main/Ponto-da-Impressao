import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from './styles-links';
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'

function AppLinks(){
    return(
    <DivBox>
        <Header />
        <ContainerDiv>
            <h1>Links</h1>
        </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
        <Footer />
    </DivBox>
    );
};

export default AppLinks;