import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";

export const DivBox = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 1280px;
    height: 2000px;
    justify-content: space-between;
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
    }
`

//Background
export const Backgrounder = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1280px;
    height: 2000px;
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
    justify-content: center;
    width: 1280px;
    height: 700px;
    padding: 150px 0px 0px 0px;
    position: absolute;
    z-index: 1;
    @media (${breakpoints.mg}){
        height: 600px;
    }
    @media (${breakpoints.md}){
        width: 100%;
        height: 400px;
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
export const ContainerLogo = styled.div`
display: flex;
justify-content: center;
z-index: 1;
img{
    width: 550px;
    height: 400px;
}
@media (${breakpoints.mg}){
    img{
        width: 420px;
        height: 300px;
    }
}
@media (${breakpoints.md}){
    img{
        width: 320px;
        height: 220px;
    }
}
@media (${breakpoints.sm}){
    img{
        width: 240px;
        height: 160px;
    }
}
`
export const ContainerResumo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 35px;
    img{
        width: 480px;
        height: 420px;
    }
    p{
        width: 620px;
        height: 320px;
    }
`
//Container Rapido

export const ContainerRapido = styled.div`
`
export const ContainerRapidoDiv = styled.div`
`
export const ContainerRapidoSubDiv = styled.div`
`
export const ContainerRapidoThirdDiv = styled.div`
`
export const LogoLinksImg = styled.img`
`