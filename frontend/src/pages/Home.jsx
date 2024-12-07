import React from 'react'
import SelectOption from '../components/SelectOption'
import {useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const handleselectedoption=(option)=>{
      if (option) navigate(`/${option}`);
  };
  return (
    <div className="home">
      <h1>Welcome To NEJAI</h1>
      <SelectOption onselectedoption={handleselectedoption}/>
    </div>
  )
}

export default Home
