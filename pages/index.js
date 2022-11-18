/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import teal from "../public/teal.jpeg";
import { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion as m } from 'framer-motion';
import { useRouter } from 'next/router';


export default function Home() {
  
  {/* A React hook that is used to manage dark state in functional components. */}
  const [darkMode, setDarkMode] = useState(false)

  //Router
  const router = useRouter();

  //Form logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      country: "United States",
      terms: "",
    },

    //Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .required("Message is required"),
      terms: Yup.array()
        .required("Terms of service must be checked"),
    }),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
      router.push({pathname: '/success', query: values});
    },
  });

  return (
    <m.div
      className={darkMode ? "dark" : ""}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Samuel's Portfolio" />
        <link rel="icon" href="starwars.png" />
      </Head>

      {/* A tailwindcss class that is used to change the background color of the element to
      gray-900 when the dark mode is enabled. */}
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons dark:text-white">
                developedbysamuel
              </h1>
              <ul className="flex items-center">
                <li>
                  <nav className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-md">
                    <BsFillMoonStarsFill
                      /* A React hook that is used to manage dark state in functional components. */
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-xl"
                    />
                  </nav>
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500
                text-white px-4 py-2 rounded-md ml-8 dark:text-black"
                    href="resume.pdf"
                    download="Samuel's Resume PDF"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                Samuel Onyebuchi-Igbokwe
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                Developer and designer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
                Freelancer providing services for programming and other needs.
                Join me down below and let's get cracking!
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-grey-300">
              <AiFillMail />
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-auto md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white mt-20">
                Services I offer
              </h3>
              <p className="text-md py-2 leading-8 text-grey-800 dark:text-gray-400">
                Since the beginning of my journey aas a freelance developer,
                I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">
                  startups
                </span>{" "}
                and collaborated with talented people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-grey-800 dark:text-white text-center mt-20">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
            </div>

            <div className="lg:flex gap-10">
              <div className="text-center mx-auto shadow-lg p-5 rounded-xl my-10 dark:bg-gray-100">
                <Image
                  src={design}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs and design
                  theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-grey-800 py-1">Photoshop</p>
                <p className="text-grey-800 py-1">Illustrator</p>
                <p className="text-grey-800 py-1">Figma</p>
              </div>

              <div className="text-center mx-auto shadow-lg p-5 rounded-xl my-10 dark:bg-gray-100">
                <Image
                  src={consulting}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">Consultation</h3>
                <p className="py-2">
                  Advising you on the best tech practice out there, and on
                  various issues.
                </p>
                <h4 className="py-4 text-teal-600">Social platforms I use</h4>
                <p className="text-grey-800 py-1">Google Meet</p>
                <p className="text-grey-800 py-1">Discord</p>
                <p className="text-grey-800 py-1">Zoom</p>
              </div>

              <div className="text-center mx-auto shadow-lg p-5 rounded-xl my-10 dark:bg-gray-100">
                <Image
                  src={code}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
                <p className="py-2">
                  Writing readable and understandable codes, that are easy to
                  maintain.
                </p>
                <h4 className="py-4 text-teal-600">Coding languages I use</h4>
                <p className="text-grey-800 py-1">React Next.js</p>
                <p className="text-grey-800 py-1">React Native</p>
                <p className="text-grey-800 py-1">Flutter</p>
              </div>
            </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
              <p className="text-md py-2 leading-8 text-grey-800 dark:text-gray-400">
                Since the beginning of my journey aas a freelance developer,
                I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">
                  startups
                </span>{" "}
                and collaborated with talented people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-grey-800 dark:text-white">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web5}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web6}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
            </div>
          </section>

          <section className="items-center justify-center pb-20">
            <div className="py-5">
              <hr className="text-black dark:text-white" />
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white flex rounded-lg"
            >
              <div className="flex-1 text-gray-700 p-20">
                <h1 className="text-3xl pb-2">Contact Me</h1>
                <p className="text-lg text-gray-500">
                  Want to reach out to me concerning questions or you need some
                  work done, then feel free to HMU!
                </p>
                <div className="mt-6">
                  {/* Name input field */}
                  <div className="pb-4">
                    <label className="block text-sm pb-2" htmlFor="name">
                      {formik.touched.name && formik.errors.name
                        ? formik.errors.name
                        : "Name"}
                    </label>
                    <input
                      className="w-1/2 bg-gray-100 rounded border border-gray-300 focus:border-teal-600 
                    text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {/* Email input field */}
                  <div className="pb-4">
                    <label className="block text-sm pb-2" htmlFor="email">
                      {formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : "Email"}
                    </label>
                    <input
                      className="w-1/2 bg-gray-100 rounded border border-gray-300 focus:border-teal-600 
                    text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {/* Message input field */}
                  <div className="pb-4">
                    <label className="block text-sm pb-2" htmlFor="message">
                      {formik.touched.message && formik.errors.message
                        ? formik.errors.message
                        : "Message"}
                    </label>
                    <textarea
                      className="w-1/2 bg-gray-100 rounded border border-gray-300 focus:border-teal-600 
                    h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      /*className="border-2 border-gray-500 p-2 rounded-md w-1/2 h-60 break-words ease-in-out"*/
                      type="text"
                      name="message"
                      placeholder="Enter your message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {/* Country input field */}
                  <div className="pb-4">
                    <label className="block text-sm pb-2" htmlFor="country">
                      Country
                    </label>
                    <select
                      className="w-1/2 bg-gray-100 rounded border border-gray-300 focus:border-teal-600 
                    text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      type="text"
                      name="country"
                      placeholder="Enter your country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                    >
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Germany</option>
                      <option>Nigeria</option>
                      <option>Norway</option>
                      <option>Philippines</option>
                      <option>Mauritius</option>
                    </select>
                  </div>
                  {/* Terms of Service */}
                  <div className="pb-4">
                    <label className="block text-sm pb-2" htmlFor="terms">
                      {formik.touched.terms && formik.errors.terms
                        ? formik.errors.terms
                        : "Terms of Service"}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="terms"
                        value="checked"
                        onChange={formik.handleChange}
                        className="h-3 w-3 text-teal-500"
                      />
                      <p className="text-sm text-gray-500">
                        I agree to the{" "}
                        <span className="text-teal-500">
                          <a href="">Terms and Services</a>
                        </span>{" "}
                        that my data will be taken and used.
                      </p>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-teal-500 py-2 rounded-md w-full text-md">
                    Send Message
                  </button>
                </div>
              </div>
              <div className="relative flex-1">
                <Image
                  alt="form-teal"
                  src={teal}
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </div>
            </form>
          </section>
      </main>
    </m.div>
  );
}
