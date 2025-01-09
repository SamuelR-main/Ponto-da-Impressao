import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";


export const DivBox = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 1280px;
    justify-content: space-between;
    @media (${breakpoints.bg}){
        width: 100%;
    }
    @media (${breakpoints.full}){
        width: 1280px;
    }
`
//Container Div
export const DivContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1280px;
    height: 3200px;
    align-content: stretch;
    background-size: cover;
    @media (${breakpoints.md}){
        width: 100%;
        max-width: 650px;
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

    filter: opacity(30%);
    z-index: 1;
`