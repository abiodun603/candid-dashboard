import { Radio } from "@mui/material";
import styled from "styled-components";

export const PageHeader = styled.div `
    text-transform: capitalize;
`

export const AddCustomer = styled.div `
    border-radius: 50%;
    padding: .7rem;
    background: var(--kBlue);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 1.2rem;
    cursor: pointer;
    width: 40px;
`

export const HeaderContainer = styled.div `
    margin-bottom : 30px;
    display: flex;
    justify-content: space-between;
    align-items: center !important;
`

export const FormControlLabel = styled(Radio)`
  color: red;
  &.Mui-checked {
    color: black;
  }
`;

export const CameraContainer = styled.div `
  min-height: 100%;
  position : relative;
  background: #313131;

  .result {
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    backgroun-color: rgba(0,0,0,0.9);
    transition: 0.4s;
    display: none;
  }

  .result.hasPhoto{
    left: 0;
  }
`

export const Camera = styled.div ` 
  position: relative;
  width: 100%;

  video{
    width: 100%;
    max-width: 100%;
    height: auto;
    position: relative;
  }

  button{
    position: absolute;
    bottom: 20px;
    left:20px;
    appearance: none;
    border: none;
    outline: none;
    padding: 10px 20px;
    background-image: linear-gradient(to right, #09185E 50%, #09185E 50%);
    background-position: 0%;
    border-radius: 10px;
    color: #FFFFFF;
    font-weight: 600;
    cursor: pointer;
    transition: 0.4s;

    /* &:hover{
      background-position: 100%;
    } */
  }
`
export const Result = styled.div``

export const Canvas = styled.canvas ``