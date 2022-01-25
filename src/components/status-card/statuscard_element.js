import styled from "styled-components"
export const StatusCard = styled.div `
    padding: 30px;
    display: flex;
    align-items: center;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: color .5s ease 0s;
    margin-bottom: 30px;

    &:before{
        content: "";
        width: 100%;
        height: 100%;
        padding-top: 100%;
        border-radius: 50%;
        background-image: linear-gradient(
            to top right,
            var(--kBlue),
            var(--kBlue)
        );
        position: absolute;
        left: -50%;
        top: 0;
        transform: scale(0);
        transition: transform 0.8s ease 0s;

    }   

    &:hover&:before{
        transform: scale(3);
    }

    &:hover{
        color: var(--txt-white)
    }
`


export const StatusCardIcon = styled.div `
    width: 30%;
    height: 100%;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

`

export const StatusCardInfo = styled.div `
    flex-grow: 1;
    text-align: center;
    z-index: 1;
    text-transform: capitalize;

    h4{
        font-size: 1.2rem;
        margin-bottom: 10px;
    }
`



