import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";

export const DivBox = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 1280px;
    height: 2700px;
    justify-content: space-between;
    @media (${breakpoints.mg}){
        height: 2500px;
    }
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
    }
    @media (${breakpoints.md}){
        height: 2000px;
    }
`

//Background
export const Backgrounder = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1280px;
    height: 2700px;
    z-index: 0;
    border-style: none;
    @media (${breakpoints.md}){
        width: 100%;
    }
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
    }
`
export const ImgBackground = styled.img `
    display: flex;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: opacity(30%);
    z-index: 0;
    border-style: none;
`

//Container Div
export const ContainerDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 1280px;
    height: 2700px;
    position: absolute;
    align-items: center;
    font-size: 30px;
    z-index: 1;
    @media (${breakpoints.mg}){
        height: 600px;
    }
    @media (${breakpoints.md}){
        width: 100%;
    }
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
    }
    @media (${breakpoints.sm}){
        height: 300px;
    }
`
export const ContainerTitulo = styled.div`
    display: flex;
    padding: 165px 0px 35px 0px;
`
export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 0px 0px 20px;
    img{
        border: 1px;
        border-radius: 10px;
        border-style: solid;
        border-color: #B9B9B9;
    }
    img:hover{
        cursor: pointer;
        transition: ease 0.8s;
        transform: scale(1.2);
    }
`
export const ContainerArrow = styled.div`
    display: flex;
    box-icon:hover{
        cursor: pointer;
        border-radius: 100px;
        background-color: #B9B9B9;
        transition: ease-in 0.5s;
        transform: scale(1.2);
    }
`
//#1
export const ContainerCaixa = styled.div`
    display: flex;
`
export const ContainerSubDivCaixa = styled.div`
    display: flex;
`
export const ContainerCaixaBox = styled.div`
    display: flex;
`
export const ContainerCaixaBoxTitulo = styled.div`
    display: flex;
`
export const ContainerThirdDivCaixa = styled.div`
    display: flex;
`
export const ContainerCaixaBoxProdutoDescricao = styled.div`
    display: flex;
`
export const ContainerCaixaBoxProdutoDescricaoTitulo = styled.div`
    display: flex;
`
//#2
export const ContainerProdutoDescricaoTitulo = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoItem = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoCodigo = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoDescricao = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoQtd = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoUnid = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoTotal = styled.div`
    display: flex;
`
//#3
export const ContainerProdutoDescricaoTexto = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoTextoItem = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoTextoCodigo = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoTextoDescricao = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoTextoQtd = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoTextoUnid = styled.div`
    display: flex;
`
export const ContainerProdutoDescricaoTextoTotal = styled.div`
    display: flex;
`
export const ContainerFiveDivCaixa = styled.div`
    display: flex;
`
//#4
export const ContainerEstoque = styled.div`
    display: flex;
`
export const ContainerEstoqueButtonDiv = styled.div`
    display: flex;
`
export const ContainerEstoqueButton = styled.div`
    display: flex;
`
export const ContainerSubDivEstoque = styled.div`
    display: flex;
`
export const ContainerEstoqueBox = styled.div`
    display: flex;
`
export const ContainerEstoqueBoxTitulo = styled.div`
    display: flex;
`
//#5
export const ContainerFechamento = styled.div`
    display: flex;
`
export const ContainerFechamentoTitulo = styled.div`
    display: flex;
`
export const ContainerSubDivFechamento = styled.div`
    display: flex;
`
export const ContainerFechamentoVendedor = styled.div`
    display: flex;
`
export const ContainerFechamentoData = styled.div`
    display: flex;
`
export const ContainerFechamentoDescricao = styled.div`
    display: flex;
`
export const ContainerFechamentoButtonDiv = styled.div`
    display: flex;
`
export const ContainerFechamentoButton = styled.div`
    display: flex;
`