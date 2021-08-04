import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import Button from '../components/common/Button';
import GlobalContext from '../lib/GlobalContext';

function Step3() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      developer: true,
    },
  });

  const state = useContext(GlobalContext);

  const router = useRouter();

  const onSubmit = data => {
    state.update({
      ...state,
      developer: data.developer,
    });

    router.push({
      pathname: '/Result',
    });
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: 600 }}>
      <h1 style={{ textAlign: 'center' }}>Developer</h1>
      <motion.div
        animate={{ x: 50 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Check if you are a developer</h3>
          <label
            style={{ display: 'block', height: '20px' }}
            htmlFor="developer"
          >
            <input
              style={{ height: '20px', width: '20px', marginRight: '20px' }}
              {...register('developer')}
              type="checkbox"
            />
            I am a developer
          </label>
          <br />
          <br />

          <motion.div
            drag="y"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div>
              <Button style={{ width: '100%' }} type="submit">
                Submit
              </Button>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

export default Step3;
