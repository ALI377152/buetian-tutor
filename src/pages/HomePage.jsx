
    import React from 'react';
    import HeroSection from '@/components/home/HeroSection';
    import AboutUsSection from '@/components/home/AboutUsSection';
    
    import ResultShareSection from '@/components/home/ResultShareSection';
    import TestimonialSection from '@/components/home/TestimonialSection';
    import ContactSection from '@/components/home/ContactSection';
    import FloatingButtons from '@/components/common/FloatingButtons';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { UserPlus, Edit, CheckSquare } from 'lucide-react';

    const HowItWorksStep = ({ icon: Icon, title, description, delay }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <Card className="text-center h-full">
          <CardHeader>
            <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full inline-flex">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );


    const HomePage = () => {
      
      return (
        <div className="overflow-x-hidden">
          <HeroSection />
          <AboutUsSection />

           
           <section id="how-it-works" className="py-16 md:py-24 bg-secondary dark:bg-secondary/50">
             <div className="container">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ duration: 0.6 }}
                 className="text-center max-w-3xl mx-auto mb-12"
               >
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Steps to Get Started</h2>
                 <p className="text-lg text-muted-foreground">
                   Follow these easy steps to connect with a qualified BUET tutor matched just for you.
                 </p>
               </motion.div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <HowItWorksStep
                    icon={UserPlus}
                    title="1. Register Your Request"
                    description="Submit your tutoring needs, including subject, level, and preferences."
                    delay={0.1}
                  />
                  <HowItWorksStep
                    icon={Edit}
                    title="2. Distributor Matching"
                    description="Our team reviews your request and finds the best available BUET tutor from the relevant department."
                    delay={0.2}
                  />
                   <HowItWorksStep
                    icon={CheckSquare}
                    title="3. Confirm & Learn"
                    description="Review the match, sign the agreement, and start your personalized learning journey!"
                    delay={0.3}
                  />
               </div>
             </div>
           </section>

          
          <ResultShareSection />
          <TestimonialSection />
          <ContactSection />
          <FloatingButtons />

          
          <div id="request-tutor" className="relative -top-20"></div>
          
        </div>
      );
    };

    export default HomePage;
  