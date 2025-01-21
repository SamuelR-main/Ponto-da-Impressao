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
export const ContainerDivTitle = styled.div`
    display: flex;
    padding: 165px 0px 0px 0px;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const ContainerDivLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    text-align: start;
    width: 95%;
`
export const ContainerSubDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 95%;
    height: 900px;
`
export const ContainerSubDivCategorias = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    h2{
        font-size: 30px;
    }
    h3{
        font-size: 30px;
        font-weight: bold;
    }
    p{
        font-size: 25px;
        font-weight: normal;
    }
`
export const ContainerSubDivCategoriasTitle = styled.div`
    display: flex;
`
export const ContainerSubDivCategoriasTexto = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContainerSubDivLine = styled.div`
    display: flex;
    background-color: #000000;
    width: 3px;
    height: 685px;
`
export const ContainerSubDivEstoque = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: space-around;
`
export const ContainerSubDivEstoqueTitle = styled.div`
    display: flex;
    flex-direction: row;
    h2{
        font-size: 30px;
    }
`
export const ContainerSubDivEstoqueOrdenar = styled.div`
    display: flex;
    select{
        width: 180px;
        height: 40px;
        border-radius: 10px;
        border: 1px;
        border-style: solid;
        border-color: #DEDEDE;
        font-size: 15px;
    }
`
export const ContainerSubDivEstoqueExibir = styled.div`
    display: flex;
`
export const ContainerSubDivEstoqueProdutos = styled.div`
    display: flex;
`
export const ContainerSubDivEstoqueIcon = styled.div`
    display: flex;
`
//Card Item
export const ContainerSubDivEstoqueItemBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1200px;
`
export const ContainerSubDivEstoqueItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 400px;
    border: 1px;
    border-style: solid;
    border-radius: 10px;
    border-color: #B9B9B9;
    background-color: #ffffff;
    padding: 20px 20px 20px 0px;
    img{
        width: 225px;
    }
`
export const ContainerSubDivEstoqueItemImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 20px 20px 20px;
    width: 100%;

    `
export const ContainerSubDivEstoqueItemEmpresa = styled.div`
    display: flex;
    width: 100%;
    p{
        font-size: 15px;
        font-weight: lighter;
        padding: 0px 0px 0px 10px;
    }
`
export const ContainerSubDivEstoqueItemNome = styled.div`
    display: flex;
    width: 100%;
    p{
        font-size: 25px;
        font-weight: bold;
        padding: 0px 0px 0px 10px;
    }
`
export const ContainerSubDivEstoqueItemValor = styled.div`
    display: flex;
    width: 100%;
    &:hover{
        text-decoration: underline;
    }
    p{
        font-size: 25px;
        font-weight: normal;
        padding: 30px 0px 0px 10px;
    }
`
export const ContainerSubDivEstoqueItemQuantidade = styled.div`
    display: flex;
    width: 100%;
    p{
        font-size: 20px;
        font-weight: normal;
        padding: 0px 0px 0px 10px;
    }
`
//Final
export const ContainerDivNumeros = styled.div`
    display: flex;
`