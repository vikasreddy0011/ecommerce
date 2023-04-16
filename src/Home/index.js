import Cart from "./Cart";
import Container from "./Container";
import NavBar from "../NavBar";
import React from 'react';
import './style.css';

function Home(){
  const [activeKey, setActiveKey] = React.useState('all');
  const [openKeys, setOpenKeys] = React.useState([]);

  return (
    <>
       <div className = "mycart">
          <h3 >My cart</h3>
      </div>
      <NavBar
        activeKey={activeKey}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        onSelect={setActiveKey}
        appearance="inverse"
      />
      <Cart/>
      <Container
        activeKey={activeKey}
      />
         
    </>
  );
}


export default Home;

