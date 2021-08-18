import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useQuery, useMutation } from '@apollo/client';
import Button from '../components/common/Button';
import { ADD_DETAILS } from '../graphql/mutations/ADD_DETAILS';
import { GET_DETAILS } from '../graphql/queries/GET_DETAILS';

function Step1() {
  const [addDetails] = useMutation(ADD_DETAILS);
  const { data } = useQuery(GET_DETAILS);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
    },
  });
  const router = useRouter();
  const onSubmit = data => {
    addDetails({
      variables: {
        ...data,
      },
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First Name</label>
          <input
            style={{ marginBottom: '30px' }}
            {...register('firstName', {
              required: 'Please enter your first name.',
            })}
            placeholder="First Name"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            style={{ marginBottom: '30px' }}
            {...register('lastName', {
              required: 'Please enter your last name.',
            })}
            placeholder="Last Name"
            name="lastName"
          />
          <label htmlFor="address">Address</label>
          <input
            style={{ marginBottom: '30px' }}
            {...register('address', {
              required: 'Please enter your address.',
            })}
            placeholder="Address"
          />

          <motion.div
            drag="y"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button style={{ width: '100%' }} type="submit">
              Next
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

export default Step1;
