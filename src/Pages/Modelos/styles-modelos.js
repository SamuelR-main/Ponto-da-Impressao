import styled from "styled-components";
import breakpoints from "../../Styles/breakpoints";

export const DivBox = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 1280px;
    height: 2000px;
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
    width: 1280px;
    height: 2000px;
    position: absolute;
    text-align: center;
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

//Container Div
export const ContainerSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 165px 0px 130px 0px;
    width: 100%;
    align-items: center;
    input{
        width: 825px;
        height: 60px;
        border-radius: 30px;
        padding: 0px 20px 0px 20px;
        font-size: 20px;
    }
`
export const ContainerBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    width: 82%;
    height: 950px;
`
export const ContainerBoxSubDiv = styled.div`
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
    width: 250px;
    height: 300px;
    border: 2px;    
    border-style: solid;
    border-color: #DEDEDE;
`
export const ContainerBoxTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-weight: bolder;
`
export const ContainerBoxImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }
    img:hover{
        transform: scale(1.07);
        transition: ease-in;
        cursor: pointer;
    }
`