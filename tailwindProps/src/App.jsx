import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {

  const info = [
    {
      fName: "RETH",
      img: "https://images.pexels.com/photos/24989081/pexels-photo-24989081/free-photo-of-modern-city-building-with-a-huge-round-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc:"DES 01"
    },
    {
      fName: "RON",
      img: "https://images.pexels.com/photos/24742684/pexels-photo-24742684/free-photo-of-view-of-an-alley-between-a-building-and-the-archaeological-museum-of-macedonia-in-skopje-north-macedonia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc:"DES 02"
    },
    {
      fName: "GRIM",
      img: "https://images.pexels.com/photos/20891635/pexels-photo-20891635/free-photo-of-photo-of-the-orion-nebula.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc:"DES 03"
    },
  ];

  // static method to print the card

  /*return (
    <>
      <div className='flex gap-10'>
        <Card info={info[0]}/>
        <Card info={info[1]}/>
        <Card info={info[2]}/>
      </div>
    </>
  )
     */ 

  return(
    <>
      <div className='flex gap-10'>
        {
          info.map((item, index)=>(
            <Card key={index} info={item}/>
          ))
        }
      </div>
    </>
  )


}

export default App
