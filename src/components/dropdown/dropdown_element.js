import styled from 'styled-components'

export const DropDownWrapper = styled.div `
    position: relative;
    z-index: 99;
    /* display: none; */
`

export const DropDownToggle = styled.button `
    border: 0;
    outline: 0;
    background-color: transparent !important;
    position: relative;
    i{
        font-size: 2.5rem;
        color: var(--txt-color);
    }
`

export const DropDownToggleBadge = styled.span `
    display: flex;
    align-items: center;
    justify-content: center; 
    position: absolute;
    top: -8px;
    right: -6px;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: var(--kBlue);
    color: var(--txt-white);
    font-size: .8rem;
`

export const DropDownContent = styled.div `
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    width: max-content;
    max-width: 400px;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    overflow: hidden; 
    transform-origin: top right;
    transform: scale(0);
    transition: transform 0.3s ease 0s;

    &.active{
        transform: scale(1);
        transition: transform .5s var(--transition-cubic);
    }
`

export const DropDownFooter = styled.div `
    padding: 20px;
    text-align: center;
`