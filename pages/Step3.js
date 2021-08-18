import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useQuery, useMutation } from '@apollo/client';
import Button from '../components/common/Button';
import { ADD_DETAILS } from '../graphql/mutations/ADD_DETAILS';
import { GET_DETAILS } from '../graphql/queries/GET_DETAILS';

function Step3() {
  const [addDetails] = useMutation(ADD_DETAILS);
  const { data } = useQuery(GET_DETAILS);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      developer: data.developer,
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
      pathname: '/Result',
    });
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: 600 }}>
      <h3>
        <Link href="/Step2">
          <a>Back</a>
        </Link>
      </h3>
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

          <motion.div
            drag="y"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button style={{ width: '100%', marginTop: '30px' }} type="submit">
              Submit
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

export default Step3;
