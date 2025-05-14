
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Users, GraduationCap, GitBranch } from 'lucide-react'; 

    const AboutUsSection = () => {
      const features = [
        { icon: GraduationCap, title: 'Exclusive BUET Tutors', description: 'Access top academic talent exclusively from BUET students.' },
        { icon: Users, title: 'All Levels Covered', description: 'Support for Primary, SSC, HSC, Admission tests, and Undergraduate studies.' },
        { icon: GitBranch, title: 'Dedicated Matching', description: 'Our distributors carefully match students with the ideal tutor from the relevant department.' },
      ];

      return (
        <section id="about-us" className="py-16 md:py-24 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How BUETIAN TUTOR Works</h2>
              <p className="text-lg text-muted-foreground">
                We connect students with verified BUET tutors through a structured matching process managed by our dedicated distributor team, ensuring quality and relevance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full inline-flex">
                         <feature.icon className="h-8 w-8 text-primary" />
                       </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="text-center"
             >
              <Button size="lg" asChild>
                <Link to="/about-us">Learn More About Our Process</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      );
    };

    export default AboutUsSection;
  