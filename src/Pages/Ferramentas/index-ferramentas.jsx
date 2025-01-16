import Header from "../../Components/Header/header"
import Footer from "../../Components/Footer/footer"
import { ContainerDiv, Backgrounder, DivBox, ImgBackground } from "./styles-ferrramentas"
import { ContainerSubDiv, ContainerBox, ContainerBoxSubDiv, ContainerBoxTitle, ContainerBoxImg } from "./styles-ferrramentas"
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import PDFtoIMGURL from '../../assets/PDFtoIMG.jpg'

function Ferramentas(){
    return(
        <DivBox>
        <Header />
        <ContainerDiv>
            <ContainerSubDiv>
                <h1>Ferramentas</h1>
                <input type="search" placeholder="Digite aqui..."/>
            </ContainerSubDiv>
            <ContainerBox>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
                <ContainerBoxSubDiv>
                    <ContainerBoxTitle>PDF para IMG</ContainerBoxTitle>
                    <ContainerBoxImg><img src={PDFtoIMGURL} alt="" /></ContainerBoxImg>
                </ContainerBoxSubDiv>
            </ContainerBox>
        </ContainerDiv>
        <Backgrounder>
            <ImgBackground src={BackgroundPapelURL} alt="" />
        </Backgrounder>
        <Footer />
        </DivBox>
    )
}
export default Ferramentas