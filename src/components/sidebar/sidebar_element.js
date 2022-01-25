import styled from "styled-components"

export const SidebarWrapper = styled.div `
    min-width: var(--sidebar-width);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0; 
    box-shadow: var(--box-shadow);
    background: var(--kWhite);
    z-index: 100;
`

export const SidebarLogo = styled.div `
    display: flex;
    align-items: center;
    padding: 22px;
    height: 80px;
    margin-bottom: 2rem;


    h2{
        cursor: pointer;
        color: var(--kBlue);
        font-size: 20px;
    }
`

export const SideBarItemWrapper = styled.div `
    padding: 0px 18px;
    
`
export const SideBarItemInner = styled.div `
    padding: 12px 25px;
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: color .3s ease 0s;

    &:hover{
        color: var(--kBlue);
    }

    i{
        margin-right: 10px;
        font-size: 1.5rem;
    }

    span{
        text-transform: capitalize;
    }

    &.active{
        border-radius: var(--border-radius);
        background-image: linear-gradient(
            to right,
            var(--kBlue),
            var(--kBlack)
        );
        color : #FFF;
`

export const SideBarIcon = styled.div `
    font-size: 1.2rem;
    margin-right: 0.5rem;
`
 