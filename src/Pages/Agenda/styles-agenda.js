import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";

export const DivBox = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 1280px;
    height: 3000px;
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
    padding: 165px 0px 50px 0px;
`   
export const ContainerCalendario = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 580px;
    padding: 0px 0px 80px 0px;
`
export const ContainerCalendarioTitulo = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0px 0px 25px 0px;
    justify-content: center;
`
export const ContainerCalendarioDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 520px;
`
export const ContainerCalendarioDias = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`
export const ContainerCalendarioLine1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
`   
export const ContainerCalendarioLine1Letter = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    font-size: 35px;
    font-weight: bolder;
    padding: 0px 0px 0px 25px;
`
export const ContainerCalendarioLine2 = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`
export const ContainerCalendarioLine2Circle = styled.div`
    display: flex;
    font-size: 40px;
    background-color: #B9B9B9;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    font-weight: bolder;
`
export const ContainerCalendarioLine2CircleDiv = styled.div`
    display: flex;
    padding: 10px 20px 0px 0px;
`
export const ContainerCalendarioMarcacao = styled.div`
    display: flex;
    padding: 80px 0px 0px 0px;
    height: 500px;
`
export const ContainerCalendarioMarcacaoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 500px;
`
export const ContainerCalendarioMarcacaoElement = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 20px;
`
export const ContainerCalendarioMarcacaoElementCor = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 100px;
`
export const ContainerCalendarioMarcacaoElementTexto = styled.div`
    display: flex;
    font-size: 30px;
    justify-content: center;
    padding: 0px 0px 0px 10px;

`
export const ContainerTarefas = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 95%;
`
export const ContainerTarefasInputs = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding: 0px 0px 20px 0px;
    button{
        height: 70px;
        font-size: 30px;
        font-weight: bolder;
        border-color: #B9B9B9;
        background-color: #ffffff;
        border-radius: 10px;
        border: 1px;
        border-style: solid;
        padding: 0px 10px 0px 10px;
    }
    button:hover{
        cursor: pointer;
        transition: ease-in-out;
        transform: scale(1.13);
        background-color:rgb(240, 240, 240);
    }
`
export const ContainerInputsDiv = styled.div`
    display: flex;
`
export const ContainerTarefasBox = styled.div`
    display: flex;
    width: 100%;
    min-height: 700px;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px;
    border-color: #B9B9B9;
    border-style: solid;
    border-radius: 10px;
    justify-content: space-evenly;
    align-items: center;
`
export const ContainerTarefasBoxRed = styled.div`
    display: flex;
    width: 90%;
    height: 125px;
    border: 2px;
    border-top: 5px;
    border-style: solid;
    border-color: #FF0000;
`