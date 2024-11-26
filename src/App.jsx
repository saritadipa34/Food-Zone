import styled from 'styled-components';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState([]);
  const[filteredData,setFilteredData]=useState(null)
  
const DATA_URL='http://localhost:9000/'

const inputChange=(e)=>{
  const searchValue=e.target.value;
  console.log(searchValue);

 const filtered=data.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()));
 console.log(filtered);
 setFilteredData(filtered);
  };


useEffect(()=>{
  const fetchData=async()=>{
try{
  const res=await fetch(DATA_URL)
const json= await res.json();
setData(json);
// setFilteredData(json);
console.log(json);

}
catch(error){
  console.error(error)
}
  }
  fetchData()
},[])

  return (
   <Container>
    <TopSection>
      <Img src="/images/logo.png" alt="logo" />
      
      <Lists>
          <Button onClick ={()=>handleBtn('All')}>All</Button>
          <Button onClick ={()=>handleBtn('Breakfast')}>Breakfast</Button>
          <Button onClick ={()=>handleBtn('Lunch')}>Lunch</Button>
          <Button onClick ={()=>handleBtn('Dinner')}>Dinner</Button>
      </Lists>

      <Search>
        <Input type="text" placeholder='Search Food...'
        onChange={inputChange}
        />
      </Search>
      </TopSection>

<CardContainer>
{(filteredData||data).map((item,i)=>(
   <Card key={i}> 
    <div>
    <img src={item.image} alt={item.name} />
    </div>
    <div>
<h4>{item.name}</h4>
    <Des>{item.text}</Des>
    </div>
  </Card>
))}
</CardContainer>

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

const Search =styled.div``

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
padding:'2px 5px',
height:'20px',
borderRadius:'5px',
margin:'5px',
cursor:'pointer',
  })

const CardContainer=styled.div({
height:'80vh',
width:'85vw',
display:'flex',
flexWrap:'wrap',
opacity:'90%',
margin:'0 100px',
gap:'20px',
padding:'20px 40px',
backgroundImage:'url("/images/bg.jpg")',
})

const Card=styled.div({
height:'160px',
width:'320px',
borderRadius:'10px',
backgroundColor:'rgb(255, 204, 153)',
// opacity:'70%',
padding:'10px ',
display:'flex',
cursor:'pointer',
border:'1px solid white',
})

const Des=styled.p`
margin:10px;

`
const SearchResult=styled.div``