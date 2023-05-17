
import './App.css';
import Navbar from './components/Navbar'
import Content from './components/Content';
import Newsitem from './components/Newsitem';

import React,{useEffect, useState} from "react";
import axios from "axios";

function App() {
  
  const[mode,setMode]=useState("light");
  const[myStyle,setStyle]=useState({
    color:"black"
  });
  const[cardStyle,setCard]=useState({
    display:"inline-block",
    borderWidth:2,
    borderStyle:"solid",
    borderColor:"black",
    width:500,
    marginLeft:100,
    marginTop:5,
    marginRight:5

    
  })
  const[imageStyle,setImage]=useState({
    height:100

    
  })
  const[data,setData]=useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        
`https://newsapi.org/v2/top-headlines?country=us&apiKey=26fa457c279344e1b827095cc614fe3f`
      )
      let actualData = await response.json();
  
      setData(actualData.articles);
    
    }
    getData()
  }, [])

  const toggleMode=()=>{
    if(mode==="light")
    {document.body.style.backgroundColor="black";
      setMode("dark");
      
      setStyle({
        color:"white"
      })
      setCard({
        display:"inline-block",
        borderWidth:2,
        borderStyle:"solid",
        borderColor:"white",
        width:500,
        marginLeft:100,
        marginTop:5,
        marginRight:5
    
        
      })
     
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      
      setStyle(
        {
          color:"black"
        }
      )
      setCard({
        display:"inline-block",
        borderWidth:2,
        borderStyle:"solid",
        borderColor:"black",
        width:500,
        marginLeft:100,
        marginTop:5,
        marginRight:5
    
        
      })
    
     
    }
  }  



    return (
      <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Content myStyle={myStyle} data={data}/>
    {data&&data.map((element)=>(<Newsitem key={element.url} title={element.title} desc={element.description} myStyle={myStyle} cardStyle={cardStyle} image={element.urlToImage} imageStyle={imageStyle}/>))}
  
    
    
    </>
    
    
  );
}

export default App;
