import Card from './components/Card'
import Header from './components/Header'
import Card2 from './components/Card2'
import CardBody from "./components/CardBody"
import CardFooter from "./components/CardFooter"
import CardHeader from "./components/CardHeader"
import Card3 from "./components/Card3"
import './App.css'


function App() {

  const obj ={
    title:'The weather in Denmark',
    textContent:'The weather is mostly cold, but rarely warm, averaging between 17°C and 26°C.',
    footerContent:'Today is: 21C degree'
  }

  const arr =[{title:'Titanic',
              textContent:'It is a tragic romance set during a historic ship disaster.',
              image:'../src/assets/titanic.jpg',
              footerContent: 'Released in 1997'},

              {title: 'Barbie',
              textContent: 'A dolls journey of self-discovery in a vibrant, fantastical world.',
              image: '../src/assets/unnamed.jpg',
              footerContent: 'Released in 2024'},
          
              {title: 'A World on Fire',
              textContent: 'It is a tragic romance set during a historic fire disaster.',
              image: '../src/assets/movie.jpg',
              footerContent: 'Released in 2016'},
             
              {title: 'The Unthinkable',
              textContent: 'It is a tragic romance set during a devastating plane crash.',
              image: '../src/assets/movie.jpg',
              footerContent: 'Released in 2012'},
               
              {title: 'Passion',
              textContent: 'It is a tragic romance set during a catastrophic earthquake.',
              image:'../src/assets/movie.jpg',
              footerContent: 'Released in 2015'}
            ];
              
  return (
    <>
      <Card >
       <Header  title='Welcome title' subtitle='I am a  subtitle'/>
      </Card>
      <Card2 >
        <CardHeader title={obj.title}/>
        <CardBody   textContent={obj.textContent}/>
        <CardFooter footerContent={obj.footerContent}/>
      </Card2> 
      {arr.map((item) =>{
        return  (
          <Card3  title={item.title}
                  textContent={item.textContent} 
                  image={item.image}
                  footerContent={item.footerContent} />
        )
      })}

      
    </>
  )
}

export default App
