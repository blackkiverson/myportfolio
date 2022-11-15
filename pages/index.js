/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
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
import {useState} from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Samuel's Portfolio" />
        <link rel="icon" href="/public/starwars.png" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              developedbysamuel
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500
                text-white px-4 py-2 rounded-md ml-8"
                  href='../public/CV[9317].pdf' download="Samuel's Resume PDF"
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
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-auto md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white mt-20">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-grey-800 dark:text-gray-400">
              Since the beginning of my journey aas a freelance developer, I've
              done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups</span> and
              collaborated with talented people to create digital products for
              both business and consumer use.
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
              <h3 className="text-lg font-medium pt-8 pb-2">
                Consultation
              </h3>
              <p className="py-2">
                Advising you on the best tech practice out there, and on various issues.
              </p>
              <h4 className="py-4 text-teal-600">Social platforms I use</h4>
              <p className="text-grey-800 py-1">Google Meet</p>
              <p className="text-grey-800 py-1">Discord</p>
              <p className="text-grey-800 py-1">Zoom</p>
            </div>

            <div className="text-center mx-auto shadow-lg p-5 rounded-xl my-10 dark:bg-gray-100">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Code
              </h3>
              <p className="py-2">
                Writing readable and understandable codes, that are easy to maintain.
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
              Since the beginning of my journey aas a freelance developer, I've
              done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups</span> and
              collaborated with talented people to create digital products for
              both business and consumer use.
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
      </main>
    </div>
  );
}
