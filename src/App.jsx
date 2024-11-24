import styled from 'styled-components';
import './App.css'

function App() {

  return (
   <Container>
    <TopSection>
      <Img src="/images/logo.png" alt="logo" />
      
      <Lists>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
      </Lists>
      <Search>
        <Input type="text" placeholder='Search Food...' />
      </Search>
      </TopSection>
   </Container>
  )
}

export default App

const Container=styled.div({
  backgroundColor:'rgb(255, 204, 153)',
minHeight:'100vh',
 width:'100%',

})

const TopSection=styled.section({
  width:'100%',
  height:'100px',
  display:'flex',
  justifyContent:'space-between',
  backgroundColor:'rgb(255, 179, 102)',
  })

const Img =styled.img({
width:'200px',
height:'100px',
mixBlendMode:'multiply',
})

const Search =styled.div({
 
  })

  const Input=styled.input({
    margin:'35px',
    padding:'5px',
    backgroundColor:'rgb(255, 204, 153)',
    borderRadius:'5px',
  })

  const Lists=styled.div({
    display:'flex',
    margin:'70px',
  })

  const Button=styled.button({
backgroundColor:'rgb(255, 204, 102)',
padding:'2px',
height:'20px',
borderRadius:'5px',
margin:'5px',
  })
