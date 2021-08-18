import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';
import { GET_DETAILS } from '../graphql/queries/GET_DETAILS';

function Result() {
  const { data } = useQuery(GET_DETAILS);
  console.log('Result', data);

  return (
    <div style={{ margin: '0 auto', maxWidth: 600 }}>
      <h1 style={{ textAlign: 'center' }}>Results</h1>
      <motion.div
        animate={{ scale: 1.5, x: 200, y: 100 }}
        transition={{ duration: 1 }}
      >
        <h3>
          {data.firstName} {data.lastName} is {data.developer ? '' : 'not'} a
          developer
        </h3>
        <h4>Address: {data.address}</h4>
        <h4>Email: {data.email}</h4>
        <h4>Phone: {data.phone}</h4>
      </motion.div>
    </div>
  );
}

export default Result;
