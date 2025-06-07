import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './App.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name')} />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" rows={4} {...register('message')} />
        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
      </div>
      <button type="submit" className={styles.cta}>Send</button>
      {submitted && <p className={styles.success}>Message sent!</p>}
    </form>
  );
};

export default ContactForm;
