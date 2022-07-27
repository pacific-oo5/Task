import React from 'react';
import Header from './component/Header';
import Section from './component/Section'
import Footer from './component/Footer';
const App = () => {
  let users  = [
 
    {
      name:'Rena',
      lastName: 'ne znau' ,
      age: 20,
      id: 1
  
    },
    {
      name:'beki4',
      lastName: 'anarkulov' ,
      age: 16,
      id: 2
  
    },
    {
      name:'islam',
      lastName: 'kalmataev' ,
      age: 17,
      id: 3
  
    },
    {
      name:'abdumalik',
      lastName: 'genius' ,
      age: 17,
      id: 4
  
    },
    {
      name:'bekzhan',
      lastName: 'sharshenaliev' ,
      age: 17,
      id: 5
  
    },
  ]
  return (
    <div>
      <Header/>
      <Section users={users}/>
       <Footer/>




    </div>
  );
};

export default App;