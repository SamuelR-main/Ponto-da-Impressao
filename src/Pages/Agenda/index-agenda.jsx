import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";
import { DivBox, ContainerDiv, Backgrounder, ImgBackground } from "./styles-agenda";
import { ContainerTitulo, ContainerCalendario, ContainerCalendarioTitulo, ContainerCalendarioDiv, ContainerCalendarioDias, ContainerCalendarioLine1, ContainerCalendarioLine1Letter, ContainerCalendarioLine2, ContainerCalendarioLine2Circle, ContainerCalendarioLine2CircleDiv } from './styles-agenda';
import { ContainerCalendarioMarcacao, ContainerCalendarioMarcacaoDiv, ContainerCalendarioMarcacaoElement, ContainerCalendarioMarcacaoElementCor, ContainerCalendarioMarcacaoElementTexto } from './styles-agenda'
import { ContainerTarefas, ContainerTarefasInputs, ContainerInputsDiv, ContainerTarefasBox, ContainerTarefasBoxRed } from './styles-agenda'
import BackgroundPapelURL from '../../assets/Background-papelamassado.jpg';
import boxicons from "boxicons";

function Agenda(){
    return(
        <DivBox>
            <Header />
            <ContainerDiv>
                <ContainerTitulo>
                    <h1>Agenda</h1>
                </ContainerTitulo>
                <ContainerCalendario>
                    <ContainerCalendarioDiv>
                        <ContainerCalendarioDias>
                            <ContainerCalendarioTitulo>
                                <h2>Janeiro de 2025</h2>
                            </ContainerCalendarioTitulo>
                            <ContainerCalendarioLine1>
                                <ContainerCalendarioLine1Letter>D</ContainerCalendarioLine1Letter>
                                <ContainerCalendarioLine1Letter>S</ContainerCalendarioLine1Letter>
                                <ContainerCalendarioLine1Letter>T</ContainerCalendarioLine1Letter>
                                <ContainerCalendarioLine1Letter>Q</ContainerCalendarioLine1Letter>
                                <ContainerCalendarioLine1Letter>Q</ContainerCalendarioLine1Letter>
                                <ContainerCalendarioLine1Letter>S</ContainerCalendarioLine1Letter>
                                <ContainerCalendarioLine1Letter>S</ContainerCalendarioLine1Letter>
                            </ContainerCalendarioLine1>
                            <ContainerCalendarioLine2>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>1</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>2</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>3</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>4</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>5</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>6</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>7</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>8</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>9</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>10</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>11</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>12</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>13</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>14</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>15</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>16</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>17</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>18</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>19</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>20</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>21</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>22</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>23</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>24</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>25</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>26</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>27</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>28</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>29</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>30</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2CircleDiv>
                                <ContainerCalendarioLine2Circle>31</ContainerCalendarioLine2Circle>
                                </ContainerCalendarioLine2CircleDiv>
                            </ContainerCalendarioLine2>
                        </ContainerCalendarioDias>
                        <ContainerCalendarioMarcacao>
                            <hr></hr>
                            <ContainerCalendarioMarcacaoDiv>
                                <ContainerCalendarioMarcacaoElement>
                                    <ContainerCalendarioMarcacaoElementCor></ContainerCalendarioMarcacaoElementCor>
                                    <ContainerCalendarioMarcacaoElementTexto>xxxxxxx</ContainerCalendarioMarcacaoElementTexto>
                                </ContainerCalendarioMarcacaoElement>
                                <ContainerCalendarioMarcacaoElement>
                                    <ContainerCalendarioMarcacaoElementCor></ContainerCalendarioMarcacaoElementCor>
                                    <ContainerCalendarioMarcacaoElementTexto>xxxxxxxx</ContainerCalendarioMarcacaoElementTexto>
                                </ContainerCalendarioMarcacaoElement>
                                <ContainerCalendarioMarcacaoElement>
                                    <ContainerCalendarioMarcacaoElementCor></ContainerCalendarioMarcacaoElementCor>
                                    <ContainerCalendarioMarcacaoElementTexto>xxxxxxx</ContainerCalendarioMarcacaoElementTexto>
                                </ContainerCalendarioMarcacaoElement>
                                <ContainerCalendarioMarcacaoElement>
                                    <ContainerCalendarioMarcacaoElementCor></ContainerCalendarioMarcacaoElementCor>
                                    <ContainerCalendarioMarcacaoElementTexto>xxxxx</ContainerCalendarioMarcacaoElementTexto>
                                </ContainerCalendarioMarcacaoElement>
                            </ContainerCalendarioMarcacaoDiv>
                        </ContainerCalendarioMarcacao>
                    </ContainerCalendarioDiv>
                </ContainerCalendario>
                <ContainerTarefas>
                    <ContainerTarefasInputs>
                        <ContainerInputsDiv>
                            <button id="novo">Novo Trabalho <box-icon name='plus'></box-icon></button>
                        </ContainerInputsDiv>
                        <ContainerInputsDiv>
                            <button id="alterar">Alterar Trabalho</button>
                        </ContainerInputsDiv>
                        <ContainerInputsDiv>
                            <button id="excluir">Excluir Trabalho <box-icon name='minus'></box-icon></button>
                        </ContainerInputsDiv>
                        <ContainerInputsDiv>
                            <button id="finalizar">Finalizar Trabalho <box-icon name='check'></box-icon></button>
                        </ContainerInputsDiv>
                    </ContainerTarefasInputs>
                    <ContainerTarefasBox>
                        <ContainerTarefasBoxRed></ContainerTarefasBoxRed>
                        <ContainerTarefasBoxRed></ContainerTarefasBoxRed>
                        <ContainerTarefasBoxRed></ContainerTarefasBoxRed>
                        <ContainerTarefasBoxRed></ContainerTarefasBoxRed>
                    </ContainerTarefasBox>
                </ContainerTarefas>
                {/* 
                <ContainerNovaTarefa>
                    <ContainerNovaTarefaBox>
                        <ContainerNovaTarefaTitulo>
                            <h2>Tarefa Novo</h2>
                        </ContainerNovaTarefaTitulo>
                        <Form action="">
                           <label htmlFor="">Complexidade: </label>
                           <ContainerNovaTarefaDivs>
                                <select>
                                    <option value=""></option>
                                    <option value="vermelho">Vermelho</option>
                                </select>
                           </ContainerNovaTarefaDivs>

                        </Form>
                    </ContainerNovaTarefaBox>
                </ContainerNovaTarefa>
                */}
            </ContainerDiv>
                <Backgrounder>
                    <ImgBackground src={BackgroundPapelURL} alt="" />
                </Backgrounder>
            <Footer />
        </DivBox>
    );
};

export default Agenda;