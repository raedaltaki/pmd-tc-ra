import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import GlobalContext from '../lib/GlobalContext';

function Step1() {
  const state = useContext(GlobalContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: state.firstName,
      lastName: state.lastName,
      address: state.address,
    },
  });
  const router = useRouter();
  const onSubmit = data => {
    state.update({
      ...state,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
    });
    router.push({
      pathname: '/Step2',
    });
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: 600 }}>
      <h1 style={{ textAlign: 'center' }}>Details</h1>
      <motion.div
        animate={{ x: 50 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {' '}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First Name</label>
          <input
            {...register('firstName', {
              required: 'Please enter your first name.',
            })}
            placeholder="First Name"
            defaultValue={state.firstName}
          />
          <br />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            {...register('lastName', {
              required: 'Please enter your last name.',
            })}
            placeholder="Last Name"
            defaultValue={state.lastName}
          />
          <br />
          <br />
          <label htmlFor="address">Address</label>
          <input
            {...register('address', {
              required: 'Please enter your address.',
            })}
            placeholder="Address"
            defaultValue={state.address}
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
                {' '}
                Next{' '}
              </Button>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

export default Step1;
