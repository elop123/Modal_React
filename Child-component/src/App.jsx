import Card from './components/Card'
import Header from './components/Header'
import Card2 from './components/Card2'
import CardBody from "./components/CardBody"
import CardFooter from "./components/CardFooter"
import CardHeader from "./components/CardHeader"
import './App.css'


function App() {

  const obj ={
    title:'The weather in Denmark',
    textContent:'The weather is mostly cold, but rarely warm, averaging between 17°C and 26°C.',
    footerContent:'Today is: 21C degree'
  }
  return (
    <>
      <Card >
       <Header  title='Welcome title' subtitle='I am a  subtitle'/>
      </Card>
      <Card2 >
        <CardHeader title={obj.title}/>
        <CardBody   textContent={obj.textContent}/>
        <CardFooter  footerContent={obj.footerContent}/>
      </Card2> 
      
    </>
  )
}

export default App
