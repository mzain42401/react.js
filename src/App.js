import { useState } from 'react';
import Card from './components/Card';
import Obj from './components/Obj';
function App() {
  const [get, setter]=useState(0)
  const func=()=>{setter(get + 1)}
  return (    
    <>
      {
        Obj.map((item, index) => {
          return (
            <Card src={item.src} title={item.title} key={index} />
            )
          })
        }
      <p>{get}</p>
    <button onClick={func}>increase</button>
    <button onClick={get>0?()=>{setter(get - 1)}:null}>decrease</button>

     
    </>
  );
}

export default App;
