import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [name,setName] = useState("");
  const [veri,setVeri] = useState("");
  const fetchData = () => {
      Axios.get(`http://${name}:8521/api/employee`,{
        headers: {
          'Content-Type': 'application/json',
        },
     }).then((res) => {
      setVeri(res.data);
    });
  };

  
  return (
    
    <div className="App">
      <input onChange={(event)=> {setName(event.target.value);}}></input>
      <button onClick={fetchData}>Verileri Getir</button>
    <h1><pre>{JSON.stringify(veri,null,2)}</pre></h1>
    

    </div>
  );

}
export default App;
