
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Card, CardContent } from '@/components/ui/card';
    import { Award } from 'lucide-react';

    
    const results = [
      { id: 1, alt: 'Student achievement 1', desc: 'A student holding a certificate' },
      { id: 2, alt: 'Student achievement 2', desc: 'Close up of a medal' },
      { id: 3, alt: 'Student achievement 3', desc: 'Students celebrating graduation' },
      { id: 4, alt: 'Student achievement 4', desc: 'A trophy on a desk' },
    ];

    const ResultShareSection = () => {
      return (
        <section id="results" className="py-16 md:py-24 bg-background">
          <div className="container">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                See the achievements of students who benefited from our expert BUET tutors. Your success could be next!
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
             
                 <motion.div
                  key={results[0].id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0 * 0.1 }}
                  className="overflow-hidden rounded-lg"
                >
                   <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square flex items-center justify-center">
                     <CardContent className="p-0">
                        <img  
                          className="object-cover w-full h-full"
                          alt={results[0].alt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                     </CardContent>
                   </Card>
                 </motion.div>
                  <motion.div
                  key={results[1].id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 1 * 0.1 }}
                  className="overflow-hidden rounded-lg"
                >
                   <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square flex items-center justify-center">
                     <CardContent className="p-0">
                        <img  
                          className="object-cover w-full h-full"
                          alt={results[1].alt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                     </CardContent>
                   </Card>
                 </motion.div>
                  <motion.div
                  key={results[2].id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 2 * 0.1 }}
                  className="overflow-hidden rounded-lg"
                >
                   <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square flex items-center justify-center">
                     <CardContent className="p-0">
                        <img  
                          className="object-cover w-full h-full"
                          alt={results[2].alt} src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                     </CardContent>
                   </Card>
                 </motion.div>
                  <motion.div
                  key={results[3].id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 3 * 0.1 }}
                  className="overflow-hidden rounded-lg"
                >
                   <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square flex items-center justify-center">
                     <CardContent className="p-0">
                        <img  
                          className="object-cover w-full h-full"
                          alt={results[3].alt} src="https://images.unsplash.com/photo-1598684744825-eb7af0890957" />
                     </CardContent>
                   </Card>
                 </motion.div>
            </div>

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="text-center"
             >
              <Button size="lg" asChild>
                <Link to="/results" className="inline-flex items-center">
                  <Award className="mr-2 h-5 w-5" /> Share Your Result
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      );
    };

    export default ResultShareSection;
  