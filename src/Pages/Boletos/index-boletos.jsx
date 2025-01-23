import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-Boletos";
import { ContainerSubDiv, ContainerBox, ContainerBoxSubDiv, ContainerBoxTitle, ContainerBoxImg, ContainerBoxTextoTitle, ContainerBoxTexto } from "./styles-Boletos";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import EquatorialURL from '../../assets/Equatorial.png'

function Boleto(){
    return(
        <DivBox>
            <Header />
            <ContainerDiv>
                <ContainerSubDiv>
                    <h1>BOLETOS</h1>
                    <input type="search" placeholder="Digite aqui..."/>
                </ContainerSubDiv>
                <ContainerBox>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Equatorial</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                </ContainerBox>
            </ContainerDiv>
                <Backgrounder>
                    <ImgBackground src={BackgroundPapelURL} alt="" />
                </Backgrounder>
            <Footer />
        </DivBox>
    );
};
export default Boleto;