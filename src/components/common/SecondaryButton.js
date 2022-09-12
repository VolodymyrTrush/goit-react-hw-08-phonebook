import styled from "styled-components";

export const SecondaryButton = styled.button`
	display: block;
	padding: 5px 20px;
	border: none;
	border-radius: 2px;
	outline: none;
	background-color: #D45B78;
	color: ${p => p.theme.colors.white};
	cursor: pointer;
  transition: all 250ms ease-in-out;

	@media screen and (max-width: 425px) {
		padding: 3px 10px;
		font-size: 9px;
	}

	&:hover {
		box-shadow: 5px 5px 18px -3px rgba(255,255,255,0.67);
	}
`;