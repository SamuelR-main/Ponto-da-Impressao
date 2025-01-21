import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./style-ajuda";
import { ContainerSubDiv, ContainerThirdDiv, ContainerThirdDivImg, ContainerThirdDivTexto, ContainerThirdDivTextoBox } from "./style-ajuda";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import InterrogacaoURL from '../../assets/Interrogacao.png'
import boxicons from "boxicons";

function Ajuda(){
    return(
        <DivBox>
        <Header />
        <ContainerDiv>
            <ContainerSubDiv>
                <h1>Ajuda</h1>
            </ContainerSubDiv>
            <ContainerThirdDiv>
                <ContainerThirdDivImg>
                    <img src={InterrogacaoURL} alt="" />
                </ContainerThirdDivImg>
                <ContainerThirdDivTexto>
                    <hr />
                    <ContainerThirdDivTextoBox>
                        <ul>
                            <li>
                                <h2><box-icon name='chevron-right'></box-icon> SLALALALLALALAL</h2>
                                <p>ssasasasasasasasasasasasasa</p>
                            </li>
                            <li>
                                <h2><box-icon name='chevron-right'></box-icon> SLALALALLALALAL</h2>
                                <p>ssasasasasasasasasasasasasa</p>
                            </li>
                        </ul>
                    </ContainerThirdDivTextoBox>
                </ContainerThirdDivTexto>
            </ContainerThirdDiv>
        </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
        <Footer />
    </DivBox>
    );
};

export default Ajuda;