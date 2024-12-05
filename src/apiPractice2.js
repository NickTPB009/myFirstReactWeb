import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [predictAge, setPredictAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => 
    {
      // console.log(res.data);
      setPredictAge(res.data);
    });
  }; 
  
  return (
    <div className="App">
      <input placeholder="Type name here..."
      onChange={(event) => {
        setName(event.target.value);
      }}
      /> <br></br>
      <button onClick={fetchData}>Predict Age</button>
      <h1> Name: {predictAge?.name}</h1>
      <h1> Predicted Age: {predictAge?.age}</h1>
      <h1> Count: {predictAge?.count}</h1>
    </div>
  );
}

export default App;
