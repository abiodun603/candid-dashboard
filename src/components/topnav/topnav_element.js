import styled from "styled-components"

export const TopNavWrapper = styled.div   `
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TopNavSearch = styled.div `
    position: relative;
    height: 50px;
    background-color: var(--main-bg);
    align-items: center;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    /* overflow: hidden; */

    input{
        height: 100%;
        width: 100%;
        padding: 10px 60px 10px 20px;
        font-size: 1rem;
        border-radius: var(--border-radius);
        color: var(--txt-color);
        background-color: var(--main-bg);
    }

    i{
        font-size: 13rem;
        position: absolute;
        right: 20px;
        top: 10px;
    }
`

export const TopNavRight = styled.div `
    display: flex;
    align-items: center;
`

export const TopNavRightItem = styled.div `
    margin-left: 30px;
`

export const NotificationItem = styled.div `
    display: flex;
    align-items: center;
    padding: 20px; 

    &:hover{
        background-color: var(--second-bg)
    }

    i{
        margin-right: 20px;
        font-size: 1.5rem; 
    }
`
export const TopNavRightUser = styled.div `
    display: flex;
    align-items: center;
`

export const TopNavRightUserImage = styled.div `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;

    img{
        width : 100%;
    }
`

export const TopNavRightUsername = styled.div `
    font-size: 1rem;
    font-weight: 600;
`