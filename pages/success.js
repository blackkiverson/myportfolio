/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { motion as m } from "framer-motion";
import Confetti from 'react-confetti'

export default function success() {

  //Router
  const router = useRouter();

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center"
    >
      <div className="bg-white rounded-lg w-1/2 text-gray-700 p-16">
        <h1 className="text-3xl pb-4">
          Thank you for the email {router.query.name}.
        </h1>
        <p className="text-lg text-gray-500">
          I have sent you an email over at {router.query.email}. I will get back
          to you as soon as I can!
        </p>
      </div>
      <Confetti/>
    </m.main>
  );
}
