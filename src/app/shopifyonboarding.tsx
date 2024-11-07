/** Install Framer Motion: npm install framer-motion */
/** add imageVariants */
/** the colour and font size in this file should be replace based on the design system */

'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const imageVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 60 }
  };

  return (
    <>
      <div className="p-6 justify-center items-center">
        <div className="flex space-x-4">
          {[1, 2, 3, 4, 5, 6].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold ${activeTab === tab ? 'text-blue-500' : 'text-gray-500'}`}
            >
              Tab {tab}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-col">
          <div className="bg-transparent rounded-lg w-[768px] h-[160px] justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {activeTab === 1 && (
                <motion.div
                  key="tab1"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                    exit: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="justify-center items-center flex flex-col gap-3"
                >
                  <div className='flex flex-row w-full h-full gap-3'>
                    <motion.div
                      className='basis-1/5 w-full h-full'
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={imageVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <Image src="/1.svg" alt="1.svg" width={144} height={144} />
                    </motion.div>
                    <div className='basis-4/5 w-full h-full justify-center items-center my-auto'>
                      <h1 className='text-3xl font-bold'>Choose the Top 10 Product Collections You Want to Promote</h1>
                    </div>
                  </div>
                
                </motion.div>
              )}
              {activeTab === 2 && (
                <motion.div
                  key="tab2"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                    exit: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="justify-center items-center flex flex-col gap-3"
                >
                  <div className='flex flex-row w-full h-full gap-3'>
                    <motion.div
                      className='basis-1/5 w-full h-full'
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={imageVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <Image src="/6.svg" alt="6.svg" width={144} height={144} />
                    </motion.div>
                    <motion.div
                      className='basis-1/5 w-full h-full'
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={imageVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <Image src="/2.svg" alt="2.svg" width={144} height={144} />
                    </motion.div>
                    <div className='basis-3/5 w-full h-full justify-center items-center my-auto'>
                      <h1 className='text-3xl font-bold'>Select the Top 10 Products to Promote</h1>
                    </div>
                  </div>
                
                </motion.div>
              )}
              {activeTab === 3 && (
                <motion.div
                  key="tab3"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                    exit: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="justify-center items-center flex flex-col gap-3"
                >
                  <div className='flex flex-row w-full h-full gap-3'>
                    <div className='basis-2/5 w-full h-full justify-center items-center my-auto'>
                      <h1 className='text-3xl font-bold text-right'>Select Promo Code</h1>
                    </div>
                    <motion.div
                      className='basis-1/5 w-full h-full'
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={imageVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <Image src="/3.svg" alt="3.svg" width={144} height={144} />
                    </motion.div>
                    <div className='basis-2/5 w-full h-full justify-center items-center my-auto'>
                      <h1 className='text-3xl font-bold'>You Want to Offer</h1>
                    </div>
                  </div>
                 
                </motion.div>
              )}
              {activeTab === 4 && (
                <motion.div
                  key="tab4"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                    exit: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="justify-center items-center flex flex-col gap-3"
                >
                  <div className='flex flex-row w-full h-full gap-3'>
                    <div className='basis-3/5 w-full h-full justify-center items-center my-auto ml-12'>
                      <h1 className='text-3xl font-bold'>Customize My Name and Appearance </h1>
                    </div>
                    <motion.div
                      className='basis-1/5 w-full h-full'
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={imageVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <Image src="/4.svg" alt="4.svg" width={144} height={144} />
                    </motion.div>
                    <motion.div
                      className='basis-1/5 w-full h-full'
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={imageVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <Image src="/6.svg" alt="6.svg" width={144} height={144} />
                    </motion.div>
                  </div>
             
                </motion.div>
              )}
              {activeTab === 5 && (
                <motion.div
                  key="tab5"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                    exit: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="justify-center items-center flex flex-col gap-3"
                >
                  <div className='flex flex-row w-full h-full gap-3'>
                    <div className='basis-4/5 w-full h-full justify-center items-center my-auto'>
                      <h1 className='text-3xl font-bold text-right'>Would You Like to Add Anything Else?</h1>
                    </div>
                    <motion.div
                      className='basis-1/5 w-full h-full'
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={imageVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <Image src="/5.svg" alt="5.svg" width={144} height={144} />
                    </motion.div>
                  </div>
                 
                </motion.div>
              )}
               {activeTab === 6 && (
                <motion.div
                  key="tab6"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                    exit: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="justify-center items-center flex w-full h-full gap-3 my-auto"
                >
                  <div className='flex flex-col w-full h-full justify-center items-center my-auto gap-3'>
                      <h1 className='text-3xl font-bold text-center'>You’re All Set!</h1>
                      <h1 className='text-xl font-bold text-center'>Boost Your Online Business with Jeeves</h1>
                  </div>
                 
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className='flex flex-row h-[4px] w-[768px] gap-3'>
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`basis-1/5 h-full rounded-lg transition-colors duration-300 ${
                  activeTab === 6 ? 'bg-white' :
                  step <= activeTab ? 'bg-violet-600' : 'bg-violet-200'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}