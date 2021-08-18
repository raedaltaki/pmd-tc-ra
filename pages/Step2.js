import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useQuery, useMutation } from '@apollo/client';
import Button from '../components/common/Button';
import { ADD_DETAILS } from '../graphql/mutations/ADD_DETAILS';
import { GET_DETAILS } from '../graphql/queries/GET_DETAILS';

function Step2() {
  const [addDetails] = useMutation(ADD_DETAILS);
  const { data } = useQuery(GET_DETAILS);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: data.email,
      phone: data.phone,
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
      pathname: '/Step3',
    });
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: 600 }}>
      <h3>
        <Link href="/Step1">
          <a>Back</a>
        </Link>
      </h3>
      <h1 style={{ textAlign: 'center' }}>Contact</h1>
      <motion.div
        animate={{ x: 50 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="phone">Phone</label>
          <input
            style={{ marginBottom: '30px' }}
            {...register('phone', {
              required: 'Please enter your phone.',
            })}
            placeholder="Phone"
            type="tel"
          />

          <label htmlFor="email">Email</label>
          <input
            style={{ marginBottom: '30px' }}
            {...register('email', {
              required: 'Please enter your email.',
            })}
            placeholder="Email"
            type="email"
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

export default Step2;
