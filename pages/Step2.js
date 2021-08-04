import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import GlobalContext from '../lib/GlobalContext';

function Step2() {
  const { register, handleSubmit } = useForm({});
  const state = useContext(GlobalContext);

  const router = useRouter();

  const onSubmit = data => {
    // alert(JSON.stringify(data));
    state.update({ ...state, email: data.email, phone: data.phone });
    router.push({
      pathname: '/Step3',
    });
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: 600 }}>
      <h1 style={{ textAlign: 'center' }}>Contact</h1>
      <motion.div
        animate={{ x: 50 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="phone">Phone</label>
          <input
            {...register('phone', {
              required: 'Please enter your phone.',
            })}
            placeholder="Phone"
            type="tel"
          />
          <br />
          <br />

          <label htmlFor="email">Email</label>
          <input
            {...register('email', {
              required: 'Please enter your email.',
            })}
            placeholder="Email"
            type="email"
          />
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
                Next
              </Button>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

export default Step2;
