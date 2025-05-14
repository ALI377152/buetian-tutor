
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader } from '@/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

    
    const testimonials = [
      { id: 1, name: 'Aisha K.', role: 'HSC Student', text: 'My BUET tutor explained complex physics concepts so clearly! My grades improved significantly.', rating: 5, img_alt: 'Portrait of Aisha K.', img_desc: 'A smiling female student' },
      { id: 2, name: 'Rahim M.', role: 'Admission Candidate', text: 'The guidance for the admission test was invaluable. The mock tests and problem-solving sessions made a huge difference.', rating: 5, img_alt: 'Portrait of Rahim M.', img_desc: 'A focused male student' },
      { id: 3, name: 'Parent of Class 8 Student', role: 'Guardian', text: 'Finding a reliable and knowledgeable tutor was easy through this platform. Professional service and great results.', rating: 4, img_alt: 'Generic avatar', img_desc: 'Silhouette of a person' },
    ];

    const TestimonialSection = () => {
      return (
        <section id="testimonials" className="py-16 md:py-24 bg-secondary dark:bg-secondary/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-lg text-muted-foreground">
                Hear directly from students and parents who have experienced the benefits of learning with BUETIAN TUTOR.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="h-full flex flex-col bg-background shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                       <Avatar className="w-12 h-12">
                         <img  className="aspect-square h-full w-full" alt={testimonial.img_alt} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                         <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                       </Avatar>
                       <div>
                         <p className="font-semibold">{testimonial.name}</p>
                         <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                       </div>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0">
                      <p className="text-sm text-foreground/90 italic">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default TestimonialSection;
  