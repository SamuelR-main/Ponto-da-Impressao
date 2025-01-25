import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-caixa";
import { ContainerTitulo, ContainerButtons, ContainerArrow } from './styles-caixa'
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import VendasURL from '../../assets/Caixa/Vendas.png'
import EstoqueURL from '../../assets/Caixa/Estoque.png'
import FechamentoURL from '../../assets/Caixa/Fechamento.png'
import boxicons from "boxicons";
import { ContainerCaixa, ContainerSubDivCaixa, ContainerCaixaBox, ContainerCaixaBoxTitulo, ContainerThirdDivCaixa, ContainerCaixaButton, ContainerFourDivCaixa, ContainerCaixaBoxProdutoDescricao} from './styles-caixa';
import { ContainerProdutoDescricaoTitulo, ContainerProdutoDescricaoItem, ContainerProdutoDescricaoCodigo, ContainerProdutoDescricaoDescricao, ContainerProdutoDescricaoQtd, ContainerProdutoDescricaoUnid, ContainerProdutoDescricaoTotal } from './styles-caixa';
import { ContainerProdutoDescricaoTexto, ContainerProdutoDescricaoTextoItem, ContainerProdutoDescricaoTextoCodigo, ContainerProdutoDescricaoTextoDescricao, ContainerProdutoDescricaoTextoQtd, ContainerProdutoDescricaoTextoUnid, ContainerProdutoDescricaoTextoTotal, ContainerFiveDivCaixa } from './styles-caixa'


function Caixa(){
    return(
        <DivBox>
            <Header />
            <ContainerDiv>
                <ContainerTitulo>
                    <h1>Caixas</h1>
                </ContainerTitulo>
                <ContainerButtons>
                        <img src={VendasURL} alt="" />
                        <img src={EstoqueURL} alt="" />
                        <img src={FechamentoURL} alt="" />
                </ContainerButtons>
                <ContainerArrow>
                    <box-icon name='chevron-up' size='lg'></box-icon>
                </ContainerArrow>
                <ContainerCaixa>
                    <ContainerSubDivCaixa>
                        {/*Código de Barras*/}
                        <ContainerCaixaBox>
                            <ContainerCaixaBoxTitulo>
                                <h2>Código de Barras</h2>
                            </ContainerCaixaBoxTitulo>
                                <p>000000000000000000000000</p>
                        </ContainerCaixaBox>
                        {/*Subtotal*/}
                        <ContainerCaixaBox>
                            <ContainerCaixaBoxTitulo>
                                <h2>Subtotal</h2>
                            </ContainerCaixaBoxTitulo>
                                <p>R$00,00</p>
                        </ContainerCaixaBox>
                        {/*Metodo de Pagamento*/}
                        <ContainerCaixaBox>
                            <ContainerCaixaBoxTitulo>
                                <h2>Metodo de Pagamento</h2>
                            </ContainerCaixaBoxTitulo>
                                <select name='pagamentos'>
                                    <option value=""></option>
                                    <option value="A vista"></option>
                                    <option value="Crédito"></option>
                                    <option value="Débito"></option>
                                    <option value="Pix"></option>
                                </select>
                        </ContainerCaixaBox>
                        {/*Total Recebido*/}
                        <ContainerCaixaBox>
                            <ContainerCaixaBoxTitulo>
                                <h2>Total Recebido</h2>
                            </ContainerCaixaBoxTitulo>
                                <p>R$00,00</p>
                        </ContainerCaixaBox>
                        {/*Troco*/}
                        <ContainerCaixaBox>
                            <ContainerCaixaBoxTitulo>
                                <h2>Troco</h2>
                            </ContainerCaixaBoxTitulo>
                                <p>R$00,00</p>
                        </ContainerCaixaBox>
                        {/*Btn Finalizar e Cancelar*/}
                        <ContainerThirdDivCaixa>
                            <ContainerCaixaButton>
                                <h2>Finalizar Venda</h2>
                            </ContainerCaixaButton>
                            <ContainerCaixaButton>
                                <h2>Cancelar Venda</h2>
                            </ContainerCaixaButton>
                        </ContainerThirdDivCaixa>
                    </ContainerSubDivCaixa>
                    <ContainerSubDivCaixa>
                        <ContainerFourDivCaixa>
                            {/*Valor Unitário*/}
                            <ContainerCaixaBox>
                                <ContainerCaixaBoxTitulo>
                                    <h2>Valor Unitário</h2>
                                </ContainerCaixaBoxTitulo>
                                    <p>R$00,00</p>
                            </ContainerCaixaBox>
                            {/*Quantidade*/}
                            <ContainerCaixaBox>
                                <ContainerCaixaBoxTitulo>
                                    <h2>Quant.</h2>
                                </ContainerCaixaBoxTitulo>
                                    <p>01</p>
                            </ContainerCaixaBox>
                            {/*Total de Produtos*/}
                            <ContainerCaixaBox>
                                <ContainerCaixaBoxTitulo>
                                    <h2>Total do Produto</h2>
                                </ContainerCaixaBoxTitulo>
                                    <p>R$00,00</p>
                            </ContainerCaixaBox>
                        </ContainerFourDivCaixa>
                        {/*Lista de Produtos*/}
                        <ContainerCaixaBox>
                            <ContainerCaixaBoxTitulo>
                                <h2>Lista de Produtos</h2>
                            </ContainerCaixaBoxTitulo>
                                <ContainerCaixaBoxProdutoDescricao>
                                    <ContainerProdutoDescricaoTitulo>
                                        <ContainerProdutoDescricaoItem>
                                            <p>N° Item</p>
                                        </ContainerProdutoDescricaoItem>
                                        <ContainerProdutoDescricaoCodigo>
                                            <p>Codigo</p>
                                        </ContainerProdutoDescricaoCodigo>
                                        <ContainerProdutoDescricaoDescricao>
                                            <p>Descrição</p>
                                        </ContainerProdutoDescricaoDescricao>
                                        <ContainerProdutoDescricaoQtd>
                                            <p>Qtd.</p>
                                        </ContainerProdutoDescricaoQtd>
                                        <ContainerProdutoDescricaoUnid>
                                            <p>Valor Unid.</p>
                                        </ContainerProdutoDescricaoUnid>
                                        <ContainerProdutoDescricaoTotal>
                                            <p>Valor Total</p>
                                        </ContainerProdutoDescricaoTotal>
                                    </ContainerProdutoDescricaoTitulo>
                                    <ContainerProdutoDescricaoTexto>
                                        <ContainerProdutoDescricaoTextoItem>
                                            <p>0</p>
                                        </ContainerProdutoDescricaoTextoItem>
                                        <ContainerProdutoDescricaoTextoCodigo>
                                            <p>0000000000</p>
                                        </ContainerProdutoDescricaoTextoCodigo>
                                        <ContainerProdutoDescricaoTextoDescricao>
                                            <p>xxxxxxxxxxxxxxxxxxx</p>
                                        </ContainerProdutoDescricaoTextoDescricao>
                                        <ContainerProdutoDescricaoTextoQtd>
                                            <p>0,00</p>
                                        </ContainerProdutoDescricaoTextoQtd>
                                        <ContainerProdutoDescricaoTextoUnid>
                                            <p>0,00</p>
                                        </ContainerProdutoDescricaoTextoUnid>
                                        <ContainerProdutoDescricaoTextoTotal>
                                            <p>0,00</p>
                                        </ContainerProdutoDescricaoTextoTotal>
                                    </ContainerProdutoDescricaoTexto>
                                </ContainerCaixaBoxProdutoDescricao>
                        </ContainerCaixaBox>
                        {/*Comandos*/}
                        <ContainerCaixaBox>
                            <ContainerCaixaBoxTitulo>
                                <h2>Comandos</h2>
                            </ContainerCaixaBoxTitulo>
                                <p>F1 - XXXXXX</p>
                                <p>F1 - XXXXXX</p>
                                <p>F1 - XXXXXX</p>
                                <p>F1 - XXXXXX</p>
                                <p>F1 - XXXXXX</p>
                        </ContainerCaixaBox>
                        {/*Btn Imprimir e Salvar*/}
                        <ContainerFiveDivCaixa>
                            <ContainerCaixaButton>
                                <h2>Imprimir Nota</h2>
                            </ContainerCaixaButton>
                            <ContainerCaixaButton>
                                <h2>Salvar em PDF</h2>
                            </ContainerCaixaButton>
                        </ContainerFiveDivCaixa>
                    </ContainerSubDivCaixa>
                </ContainerCaixa>
            </ContainerDiv>
                <Backgrounder>
                    <ImgBackground src={BackgroundPapelURL} alt="" />
                </Backgrounder>
            <Footer />
        </DivBox>
    );
};

export default Caixa;