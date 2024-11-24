import styled from 'styled-components';
import './App.css'

function App() {

  return (
   <Container>
    <TopSection>
      <img src="/images/logo.jpg" alt="logo" />
      </TopSection>
      <Search>
        <input type="text" placeholder='Search Food...' />
      </Search>
   </Container>
  )
}

export default App

const Container=styled.div({
  backgroundColor:'green',
 height:'100%',
 width:'100%',
})

const TopSection=styled.section({
width:'100%',
height:'100px',
backgroundColor:'pink',

})
