import React from 'react';

function App() {
  
let curdate=new Date(2020,5,5,17).getHours();
let greeting=''
let css={ }
if(curdate>=1 && curdate<=12)
{
  greeting='Good Morning'
  css.color = "Blue"
}
else 
if(curdate>12 && curdate<=19)
{
  greeting='Good Evening'
  css.color="orange"
}
else
{
  greeting='Good Night'
  css.color="Black"
}

  return (
    <>
   <div>
   <h1>Hello There ,<span style={css}>{greeting}</span></h1>,
</div>
</>
  );
}

export default App;
