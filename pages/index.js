import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import GlobalContext from '../lib/GlobalContext';

function App() {
  const state = useContext(GlobalContext);
  const router = useRouter();

  function StartTest() {
    state.update({
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      email: '',
      developer: false,
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
        <div>
          <Button style={{ width: '100%' }} type="buttom" onClick={StartTest}>
            {' '}
            Start{' '}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
