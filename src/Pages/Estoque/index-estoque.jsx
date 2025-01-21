import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./style-estoque";
import { ContainerDivTitle, ContainerDivLinks, ContainerSubDiv, ContainerSubDivCategorias, ContainerSubDivEstoque, ContainerSubDivCategoriasTitle, ContainerSubDivCategoriasTexto, ContainerSubDivLine, ContainerDivNumeros } from './style-estoque'
import { ContainerSubDivEstoqueTitle, ContainerSubDivEstoqueOrdenar, ContainerSubDivEstoqueExibir, ContainerSubDivEstoqueProdutos, ContainerSubDivEstoqueIcon} from './style-estoque'
import { ContainerSubDivEstoqueItem, ContainerSubDivEstoqueItemImg, ContainerSubDivEstoqueItemEmpresa, ContainerSubDivEstoqueItemNome, ContainerSubDivEstoqueItemValor, ContainerSubDivEstoqueItemQuantidade, ContainerSubDivEstoqueItemBox } from './style-estoque'
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg'
import CarregadorURL from '../../assets/Estoque/Carregador.jpg'

function Estoque(){
    return(
        <DivBox>
        <Header />
        <ContainerDiv>
            <ContainerDivTitle>
                <h1>ESTOQUE</h1>
            </ContainerDivTitle>
            <ContainerDivLinks>
                <p>Você está em: <a href="#">xxxxxxxxxxx</a>  <a href="#">xxxxxxxxxxxxx</a>  <a href="#">xxxxxxxxxxxxx</a></p>
            </ContainerDivLinks>
            <ContainerSubDiv>
                <ContainerSubDivCategorias>
                    <ContainerSubDivCategoriasTitle>
                        <h2>Categorias</h2>
                    </ContainerSubDivCategoriasTitle>
                    <ContainerSubDivCategoriasTexto>
                        <h3>Material</h3>
                        <ul>
                            <li>Papeis</li>
                        </ul>
                        <h3>Papelaria</h3>
                        <ul>
                            <li>Papel</li>
                            <li>Papel</li>
                        </ul>
                        <h3>Eletronicos</h3>
                        <ul>
                            <li>Eletro</li>
                            <li>Eletro</li>
                        </ul>
                    </ContainerSubDivCategoriasTexto>
                </ContainerSubDivCategorias>
                <ContainerSubDivLine></ContainerSubDivLine>
                <ContainerSubDivEstoque>
                    <ContainerSubDivEstoqueTitle>
                        <ContainerSubDivEstoqueOrdenar>
                            <label for="ordem">Ordenar: </label>
                            <select id="ordem">
                                <option value="">Escolha</option>
                                <option value="crescente">Ordem Crescente</option>
                                <option value="decrescente">Ordem Descrecente</option>
                            </select>
                        </ContainerSubDivEstoqueOrdenar>
                        <ContainerSubDivEstoqueExibir>
                            <label for="exibir">Exibir: </label>
                            <select id="exibir">
                                <option value="20">20 por Página</option>
                                <option value="40">40 por Página</option>
                                <option value="80">80 por Página</option>
                            </select>
                        </ContainerSubDivEstoqueExibir>
                        <ContainerSubDivEstoqueProdutos>
                            <h2>XX Produtos</h2>
                        </ContainerSubDivEstoqueProdutos>
                        <ContainerSubDivEstoqueIcon></ContainerSubDivEstoqueIcon>
                    </ContainerSubDivEstoqueTitle>
                    <ContainerSubDivEstoqueItemBox>
                        {/*#1 */}
                        <ContainerSubDivEstoqueItem>
                            <ContainerSubDivEstoqueItemImg>
                                <img src={CarregadorURL} alt="" />
                            </ContainerSubDivEstoqueItemImg>
                            <ContainerSubDivEstoqueItemEmpresa>
                                <p>H'maston</p>
                            </ContainerSubDivEstoqueItemEmpresa>
                            <ContainerSubDivEstoqueItemNome>
                                <p>Carregador H'maston</p>
                            </ContainerSubDivEstoqueItemNome>
                            <ContainerSubDivEstoqueItemValor>
                                <p>R$250,00</p>
                            </ContainerSubDivEstoqueItemValor>
                            <ContainerSubDivEstoqueItemQuantidade>
                                <p>Estoque: XX</p>
                            </ContainerSubDivEstoqueItemQuantidade>
                        </ContainerSubDivEstoqueItem>
                        {/*#1 */}
                        <ContainerSubDivEstoqueItem>
                            <ContainerSubDivEstoqueItemImg>
                                <img src={CarregadorURL} alt="" />
                            </ContainerSubDivEstoqueItemImg>
                            <ContainerSubDivEstoqueItemEmpresa>
                                <p>H'maston</p>
                            </ContainerSubDivEstoqueItemEmpresa>
                            <ContainerSubDivEstoqueItemNome>
                                <p>Carregador H'maston</p>
                            </ContainerSubDivEstoqueItemNome>
                            <ContainerSubDivEstoqueItemValor>
                                <p>R$250,00</p>
                            </ContainerSubDivEstoqueItemValor>
                            <ContainerSubDivEstoqueItemQuantidade>
                                <p>Estoque: XX</p>
                            </ContainerSubDivEstoqueItemQuantidade>
                        </ContainerSubDivEstoqueItem>
                        {/*#1 */}
                        <ContainerSubDivEstoqueItem>
                            <ContainerSubDivEstoqueItemImg>
                                <img src={CarregadorURL} alt="" />
                            </ContainerSubDivEstoqueItemImg>
                            <ContainerSubDivEstoqueItemEmpresa>
                                <p>H'maston</p>
                            </ContainerSubDivEstoqueItemEmpresa>
                            <ContainerSubDivEstoqueItemNome>
                                <p>Carregador H'maston</p>
                            </ContainerSubDivEstoqueItemNome>
                            <ContainerSubDivEstoqueItemValor>
                                <p>R$250,00</p>
                            </ContainerSubDivEstoqueItemValor>
                            <ContainerSubDivEstoqueItemQuantidade>
                                <p>Estoque: XX</p>
                            </ContainerSubDivEstoqueItemQuantidade>
                        </ContainerSubDivEstoqueItem>
                        {/*#1 */}
                        <ContainerSubDivEstoqueItem>
                            <ContainerSubDivEstoqueItemImg>
                                <img src={CarregadorURL} alt="" />
                            </ContainerSubDivEstoqueItemImg>
                            <ContainerSubDivEstoqueItemEmpresa>
                                <p>H'maston</p>
                            </ContainerSubDivEstoqueItemEmpresa>
                            <ContainerSubDivEstoqueItemNome>
                                <p>Carregador H'maston</p>
                            </ContainerSubDivEstoqueItemNome>
                            <ContainerSubDivEstoqueItemValor>
                                <p>R$250,00</p>
                            </ContainerSubDivEstoqueItemValor>
                            <ContainerSubDivEstoqueItemQuantidade>
                                <p>Estoque: XX</p>
                            </ContainerSubDivEstoqueItemQuantidade>
                        </ContainerSubDivEstoqueItem>
                        {/*#1 */}
                        <ContainerSubDivEstoqueItem>
                            <ContainerSubDivEstoqueItemImg>
                                <img src={CarregadorURL} alt="" />
                            </ContainerSubDivEstoqueItemImg>
                            <ContainerSubDivEstoqueItemEmpresa>
                                <p>H'maston</p>
                            </ContainerSubDivEstoqueItemEmpresa>
                            <ContainerSubDivEstoqueItemNome>
                                <p>Carregador H'maston</p>
                            </ContainerSubDivEstoqueItemNome>
                            <ContainerSubDivEstoqueItemValor>
                                <p>R$250,00</p>
                            </ContainerSubDivEstoqueItemValor>
                            <ContainerSubDivEstoqueItemQuantidade>
                                <p>Estoque: XX</p>
                            </ContainerSubDivEstoqueItemQuantidade>
                        </ContainerSubDivEstoqueItem>
                        {/*#1 */}
                        <ContainerSubDivEstoqueItem>
                            <ContainerSubDivEstoqueItemImg>
                                <img src={CarregadorURL} alt="" />
                            </ContainerSubDivEstoqueItemImg>
                            <ContainerSubDivEstoqueItemEmpresa>
                                <p>H'maston</p>
                            </ContainerSubDivEstoqueItemEmpresa>
                            <ContainerSubDivEstoqueItemNome>
                                <p>Carregador H'maston</p>
                            </ContainerSubDivEstoqueItemNome>
                            <ContainerSubDivEstoqueItemValor>
                                <p>R$250,00</p>
                            </ContainerSubDivEstoqueItemValor>
                            <ContainerSubDivEstoqueItemQuantidade>
                                <p>Estoque: XX</p>
                            </ContainerSubDivEstoqueItemQuantidade>
                        </ContainerSubDivEstoqueItem>
                    </ContainerSubDivEstoqueItemBox>
                </ContainerSubDivEstoque>
            </ContainerSubDiv>
            <ContainerDivNumeros>
                <p>1, 2, 3, 4, ... , 5, 6</p>
            </ContainerDivNumeros>
        </ContainerDiv>
            <Backgrounder>
                <ImgBackground src={BackgroundPapelURL} alt="" />
            </Backgrounder>
        <Footer />
    </DivBox>
    )
}

export default Estoque;