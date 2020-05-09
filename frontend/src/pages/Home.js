import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button style={{ margin: '10px' }} variant="contained" color="primary">
        <NavLink to="/weekly" style={{ color: 'white' }}>
          Weekly Data
        </NavLink>
      </Button>
      <Button style={{ margin: '10px' }} variant="contained" color="secondary">
        <NavLink to="/top" style={{ color: 'white' }}>
          Top Data
        </NavLink>
      </Button>
    </div>
  );
};

export default Home;
