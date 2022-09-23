import styled from 'vue3-styled-components';


export const Container = styled.header`
  background-color: ${(props)=>props.theme.COLORS.PRIMARY_900} ;
  color: ${({theme})=> theme.COLORS.TEXT};
`

export const Content = styled.nav`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;

  ul{
    display: flex;
    flex-direction: row;
    li{
      padding:1rem;
    }
  }

  button{
    font-size:1rem;
    background:${({theme})=>theme.COLORS.BACKGROUND} ;
    border: 0;
    padding: 1rem 2rem;
    font-size: 2rem;
  }
  

`