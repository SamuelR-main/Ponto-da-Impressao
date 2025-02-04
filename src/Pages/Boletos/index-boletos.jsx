import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-boletos";
import { ContainerSubDiv, ContainerBox, ContainerBoxSubDiv, ContainerBoxTitle, ContainerBoxImg, ContainerBoxTextoTitle, ContainerBoxTexto, } from "./styles-boletos";
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import EquatorialURL from '../../assets/Equatorial.png'
import BRKURL from '../../assets/BRK.jpg'
import UnimedURL from '../../assets/Unimed.jpg'
import HapvidaURL from '../../assets/Hapvida.png'
import IPTUURL from '../../assets/IPTU.png'
import PgmeiURL from '../../assets/PGMEI.jpg'

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
                        <ContainerBoxImg><a href="https://al.equatorialenergia.com.br/" target="_blank"><img src={EquatorialURL} alt="" /></a></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>BRK Ambiental</p></ContainerBoxTitle>
                        <ContainerBoxImg><a href="https://minhabrk.com.br/home/servicos/segunda-via-facil" target="_blank"><img src={BRKURL} alt="" /></a></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF ou Código da Conta</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Unimed</p></ContainerBoxTitle>
                        <ContainerBoxImg><a href="https://beneficiario.unimedmaceio.com.br/login" target="_blank"><img src={UnimedURL} alt="" /></a></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>Número da Carteira e <a href="">Senha</a></p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Hapvida</p></ContainerBoxTitle>
                        <ContainerBoxImg><a href="https://webhap.hapvida.com.br/pls/webhap/webNewBoleto.login" target="_blank"><img src={HapvidaURL} alt="" /></a></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>IPTU</p></ContainerBoxTitle>
                        <ContainerBoxImg><a href="https://siat.maceio.al.gov.br/dsf_mcz_portal/inicial.do?evento=montaMenu&acronym=EXTRATO" target="_blank"><img src={IPTUURL} alt="" /></a></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>Inscrição Imobiliaria</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>IPTU 2025 Carnê</p></ContainerBoxTitle>
                        <ContainerBoxImg><a href="https://online.maceio.al.gov.br/n/iptu2024/" target="_blank"><img src={IPTUURL} alt="" /></a></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>Inscrição Imobiliaria</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>PGMEI</p></ContainerBoxTitle>
                        <ContainerBoxImg><a href="https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes/atspo/pgmei.app/identificacao" target="_blank"><img src={PgmeiURL} alt="" /></a></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CNPJ</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Tim</p></ContainerBoxTitle>
                        <ContainerBoxImg><a href="https://meutim.tim.com.br/novo/login?bmctx=8B94D49C137CCFE1FA9512A461AC79DB4FBA69EFB5FA39109654FE9A6E39100A&contextType=external&username=string&enablePersistentLogin=true&contextValue=%2Foam&password=secure_string&challenge_url=https%3A%2F%2Fmeutim.tim.com.br%2Fnovo%2Flogin&request_id=-8655424759130214488&authn_try_count=0&locale=pt_BR&resource_url=https%253A%252F%252Fmeutim.tim.com.br%252F" target="_blank"><img src={EquatorialURL} alt="" /></a></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>Número Celular e Senha</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Vivo</p></ContainerBoxTitle>
                        <ContainerBoxImg><a href="https://vivoemdia.vivo.com.br/" target="_blank"><img src={EquatorialURL} alt="" /></a></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Oi</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Claro Movel</p></ContainerBoxTitle>
                        <ContainerBoxImg><img src={EquatorialURL} alt="" /></ContainerBoxImg>
                        <ContainerBoxTextoTitle><p>Necessário:</p></ContainerBoxTextoTitle>
                        <ContainerBoxTexto><p>CPF e Data de Nasc.</p></ContainerBoxTexto>
                    </ContainerBoxSubDiv>
                    <ContainerBoxSubDiv>
                        <ContainerBoxTitle><p>Claro Residencial</p></ContainerBoxTitle>
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