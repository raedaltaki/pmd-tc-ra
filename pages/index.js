import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useMutation } from '@apollo/client';
import Button from '../components/common/Button';
import { ADD_DETAILS } from '../graphql/mutations/ADD_DETAILS';

function App() {
  const router = useRouter();
  const [addDetails] = useMutation(ADD_DETAILS);

  function startTest() {
    addDetails({
      variables: {
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
        developer: false,
      },
    });
    router.push({
      pathname: '/Step1',
    });
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: 600 }}>
      <h1 style={{ textAlign: 'center' }}>Welcome</h1>

      <motion.div
        drag="y"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button style={{ width: '100%' }} type="buttom" onClick={startTest}>
          Start
        </Button>
      </motion.div>
    </div>
  );
}

export default App;
