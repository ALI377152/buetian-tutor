
    import React from 'react';
    import { motion } from 'framer-motion';
    import { CheckCircle } from 'lucide-react';

    const AboutUsPage = () => {
      return (
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
              About BUETIAN TUTOR
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Empowering Education, Powered by BUET Excellence. Our mission is to bridge the gap between eager learners and the exceptional academic talent pool of BUET.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.7 }}
             >
                <img  
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
                  alt="Team working together" src="https://images.unsplash.com/photo-1676369010695-70c5fce8ae31" />
              </motion.div>
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.7 }}
             >
               <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
               <p className="text-muted-foreground mb-6">
                 We envision a future where every student, regardless of their background, has access to high-quality, personalized education support from verified, top-tier tutors. We believe in the transformative power of mentorship and targeted guidance provided by BUET students and graduates.
               </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Connecting students with verified BUET tutors across all academic levels.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Facilitating personalized learning experiences (online & offline).</span>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Ensuring a safe, reliable, and efficient platform for tutors and students.</span>
                  </li>
                </ul>
              </motion.div>
           </div>


           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-secondary dark:bg-secondary/50 p-8 md:p-12 rounded-lg"
          >
            <h2 className="text-3xl font-semibold mb-4">Our Commitment</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to maintaining the highest standards of quality and integrity. Our dedicated team, including website managers, complaint handlers, and distributors from every BUET department, works tirelessly to ensure a seamless and effective tutoring experience for everyone involved.
             </p>
           </motion.div>

        </div>
      );
    };

    export default AboutUsPage;
  