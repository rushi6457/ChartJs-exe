import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { UserData } from './Data';
import BarChart from './Components/BarChart';
import PieChart from './Components/PieChart';
import LineChart from './Components/LineChart';
function App() {

  const [userData,setUserData] = useState({
    labels: UserData.map((el)=>el.year) ,
    datasets:[{
      label:"Users Gained",
      data:UserData.map((el)=>el.userGain),
      backgroundColor:["skyblue","tomato"]
    }]
  })
  return (
    <>
    <div >
        <BarChart charData={userData}/>
    </div>
    <div >
        <PieChart userData={userData}/>
    </div>
     {/* <div >
        <LineChart userData={userData}/>
    </div> */}
    </>
  );
}

export default App;
