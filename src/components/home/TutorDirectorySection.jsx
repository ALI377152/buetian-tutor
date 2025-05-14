
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
    import { Star, BookOpen } from 'lucide-react';

    
    const topTutors = [
      { id: 1, name: 'Tutor One', dept: 'CSE', batch: '18', rating: 4.9, subjects: 'Physics, Math', img_alt: 'Portrait of Tutor One', img_desc: 'A smiling tutor in a formal setting' },
      { id: 2, name: 'Tutor Two', dept: 'EEE', batch: '19', rating: 4.8, subjects: 'Chemistry, ICT', img_alt: 'Portrait of Tutor Two', img_desc: 'A friendly tutor outdoors' },
      { id: 3, name: 'Tutor Three', dept: 'ME', batch: '17', rating: 4.9, subjects: 'Higher Math, Mechanics', img_alt: 'Portrait of Tutor Three', img_desc: 'A tutor standing in front of a whiteboard' },
      { id: 4, name: 'Tutor Four', dept: 'CE', batch: '20', rating: 4.7, subjects: 'English, General Science', img_alt: 'Portrait of Tutor Four', img_desc: 'A tutor holding a book' },
    ];

    const TutorDirectorySection = () => {
      return (
        <section id="top-tutors" className="py-16 md:py-24 bg-secondary dark:bg-secondary/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Top Tutors</h2>
              <p className="text-lg text-muted-foreground">
                Get acquainted with some of our highest-rated tutors, ready to guide you towards academic success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {topTutors.map((tutor, index) => (
                <motion.div
                  key={tutor.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <CardHeader className="items-center text-center p-4 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/20">
                     <Avatar className="w-20 h-20 mb-3 border-4 border-background shadow-md">
                       <img  className="aspect-square h-full w-full" alt={tutor.img_alt} src="https://images.unsplash.com/photo-1701229404076-5629809b331d" />
                       <AvatarFallback>{tutor.name.charAt(0)}</AvatarFallback>
                     </Avatar>
                     <CardTitle className="text-lg">{tutor.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{tutor.dept} ' {tutor.batch}</p>
                    </CardHeader>
                    <CardContent className="flex-grow p-4 text-sm">
                      <div className="flex items-center justify-center mb-3 text-amber-500">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span>{tutor.rating} / 5.0</span>
                      </div>
                      <div className="flex items-center text-muted-foreground justify-center">
                         <BookOpen className="w-4 h-4 mr-1" />
                         <span>{tutor.subjects}</span>
                       </div>

                    </CardContent>
                    <CardFooter className="p-4 pt-0 justify-center">
                      <Button variant="outline" size="sm">View Profile</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="text-center"
             >
              <Button size="lg" variant="secondary" asChild>
                <Link to="/tutors">Explore All Tutors</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      );
    };

    export default TutorDirectorySection;
  