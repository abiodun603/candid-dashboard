import styled from "styled-components"

export const StaffHeader = styled.p`
    text-transform: "capitalize";
`

export const SideBarWrapper = styled.div `
    position: fixed;
    margin-top: 0;
    padding-left: var(--sidebar-width);
    bottom:0;
    left: 0;
    height: 70vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
`
export const SidebarCenter = styled.div `
    width: 40%;
    height :100vh;
    position: relative;
`

export const SidebarRight = styled.div `
    width: 60%;
    height: 100vh;
    position: relative;
`

export const SidebarRightWrapper = styled.div `
    padding : 2rem;
    margin-top :.7rem;

`

export const Form = styled.form `
    padding: 1.5rem;
`

export const FormGroup = styled.div `
    margin-bottom: 1rem;
`