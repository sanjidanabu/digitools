'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { FaRocket, FaArrowRight } from 'react-icons/fa';
import { FiMonitor, FiPenTool, FiCode } from 'react-icons/fi';

export default function Banner() {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex items-center bg-gray-50 overflow-hidden">
      
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full w-max text-sm font-semibold">
              <FaRocket className="text-indigo-600" />
              <span>Premium Digital Assets</span>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Empower Your Projects with <span className="text-indigo-600">DigiTools</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Discover top-tier UI kits, templates, and plugins designed for modern developers and creators. Build faster, design better.
              </p>
            </motion.div>

            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/explore" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                Explore Tools
                <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
              >
                Learn More
              </Link>
            </motion.div>

          
            <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <FiCode className="text-xl" />
                <span className="text-sm font-medium">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMonitor className="text-xl" />
                <span className="text-sm font-medium">Responsive</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPenTool className="text-xl" />
                <span className="text-sm font-medium">Modern UI</span>
              </div>
            </motion.div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-full h-[400px] bg-gradient-to-tr from-indigo-500 to-purple-400 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <div className="text-white text-center p-8 z-10">
                <FiMonitor className="text-8xl mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold">DigiTools Dashboard</h3>
                <p className="opacity-75 mt-2">All your digital products in one place.</p>
              </div>

              
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-white opacity-10 rounded-xl z-0"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-white opacity-10 rounded-full z-0"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}