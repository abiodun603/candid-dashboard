import styled from "styled-components"

export const Navbar = styled.div`
	height: 3rem;
	width: 100%;
	postion: fixed;

	.navContainer {
		display: flex;
		width: 100%;
		padding: 15px 20px;
	}
	.navbarIcon {
		height: 40px;
		width: 40px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1.5px solid #dbdbdb;
	}

	.patrolName {
		display:flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		color: var(--kBlack);
		font-weight: 600
	}

	.profilePicture {
		height: 40px;
		width: 40px;
		border: 1px solid #dbdbdb;
		border-radius: 8px;
		object-fit: contain;


		img{
			width: 40px;
			border-radius: 8px;
		}
	}
`