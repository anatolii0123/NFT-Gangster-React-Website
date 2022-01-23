import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';


import Purchase from './components/purchase';
import Gangsters from './components/gangsters';
import Kilocoin from './components/kilocoin';
import RoadMap from './components/roadmap';


const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='main-content' >
      <Purchase />
      <Gangsters />
      <Kilocoin/>
      <RoadMap />
    </div>
  );
}

export default Dashboard;