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
export const ContainerSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 165px 0px 20px 0px;
    h1{
        font-size: 55px;
    }
    input{
        width: 825px;
        height: 60px;
        border-radius: 30px;
        padding: 0px 20px 0px 20px;
        font-size: 20px;
        text-align: center;
    }
`
export const ContainerThirdDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
export const ContainerThirdDivBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 45px;
    }
    p{
        font-size: 50px;
        text-decoration: underline;
    }
`