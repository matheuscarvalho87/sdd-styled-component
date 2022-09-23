import styled from 'vue3-styled-components';

type ButtonProps = {
  primary: boolean
}

const btnProps = { primary: Boolean()}

export const ButtonContainer = styled('button',btnProps)`
  font-size: 1rem;
  background-color: ${({theme,primary})=> primary ? theme.COLORS.ALERT_900 : theme.COLORS.ERROR_900};
  border: 0;
  padding: 1rem 2rem;
  font-size: 2rem;
`