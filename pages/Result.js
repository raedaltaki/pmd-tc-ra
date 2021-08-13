import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import GlobalContext from '../lib/GlobalContext';

function Result() {
  const state = useContext(GlobalContext);
  console.log(state);
  return (
    <div style={{ margin: '0 auto', maxWidth: 600 }}>
      <h1 style={{ textAlign: 'center' }}>Results</h1>
      <motion.div
        animate={{ scale: 1.5, x: 200, y: 100 }}
        transition={{ duration: 1 }}
      >
        <h3>
          {state.firstName} {state.lastName} is {state.developer ? '' : 'not'} a
          developer
        </h3>
        <h4>Address: {state.address}</h4>
        <h4>Email: {state.email}</h4>
        <h4>Phone: {state.phone}</h4>
      </motion.div>
    </div>
  );
}

export default Result;
