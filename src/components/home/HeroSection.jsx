
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';

    const HeroSection = () => {
      return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-green-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-black overflow-hidden">
          
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
             <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-blue-800"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-green-800"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-indigo-800"></div>
          </div>

          <div className="container relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                Learn from BUET's Best
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              “Empowering Education, Powered by BUET Excellence” - Request a verified tutor from BUET, matched specifically for your needs by our dedicated team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg" asChild>
                
                <Link to="/#request-tutor">Request a Tutor Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                 <Link to="/about-us">Learn How It Works</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      );
    };

     
     const styleSheet = document.styleSheets[0];
     const keyframes =
     `@keyframes blob {
       0% { transform: translate(0px, 0px) scale(1); }
       33% { transform: translate(30px, -50px) scale(1.1); }
       66% { transform: translate(-20px, 20px) scale(0.9); }
       100% { transform: translate(0px, 0px) scale(1); }
     }`;
     if (styleSheet) {
       try {
         
         let ruleExists = false;
         for (let i = 0; i < styleSheet.cssRules.length; i++) {
           if (styleSheet.cssRules[i].name === 'blob') {
             ruleExists = true;
             break;
           }
         }
         if (!ruleExists) {
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
         }
       } catch (e) {
         console.warn("Could not insert keyframes rule:", e)
       }
     }


    export default HeroSection;
  