
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Star, BookOpen, Filter, Search } from 'lucide-react';

    
    const allTutors = [
      { id: 1, name: 'Tutor One', dept: 'CSE', batch: '18', rating: 4.9, subjects: 'Physics, Math', img_alt: 'Portrait of Tutor One', img_desc: 'A smiling tutor in a formal setting' },
      { id: 2, name: 'Tutor Two', dept: 'EEE', batch: '19', rating: 4.8, subjects: 'Chemistry, ICT', img_alt: 'Portrait of Tutor Two', img_desc: 'A friendly tutor outdoors' },
      { id: 3, name: 'Tutor Three', dept: 'ME', batch: '17', rating: 4.9, subjects: 'Higher Math, Mechanics', img_alt: 'Portrait of Tutor Three', img_desc: 'A tutor standing in front of a whiteboard' },
      { id: 4, name: 'Tutor Four', dept: 'CE', batch: '20', rating: 4.7, subjects: 'English, General Science', img_alt: 'Portrait of Tutor Four', img_desc: 'A tutor holding a book' },
      { id: 5, name: 'Tutor Five', dept: 'Arch', batch: '18', rating: 4.6, subjects: 'Drawing, Art', img_alt: 'Portrait of Tutor Five', img_desc: 'A creative-looking tutor' },
      { id: 6, name: 'Tutor Six', dept: 'ChE', batch: '19', rating: 4.8, subjects: 'Organic Chemistry', img_alt: 'Portrait of Tutor Six', img_desc: 'A tutor in a lab coat' },
    ];

    const TutorListPage = () => {
      
      const [searchTerm, setSearchTerm] = React.useState('');
      const filteredTutors = allTutors.filter(tutor =>
        tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.subjects.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.dept.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Tutor</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive list of qualified BUET tutors. Use the filters to narrow down your search.
            </p>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 p-6 bg-secondary dark:bg-secondary/50 rounded-lg shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <Label htmlFor="search" className="flex items-center"><Search className="w-4 h-4 mr-1"/> Search</Label>
                <Input
                  id="search"
                  placeholder="Search by name, subject, dept..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                 <Label htmlFor="subject-filter">Subject</Label>
                 <Input id="subject-filter" placeholder="e.g., Physics" />
               </div>
               <div className="space-y-2">
                 <Label htmlFor="class-filter">Class/Level</Label>
                 <Input id="class-filter" placeholder="e.g., HSC" />
               </div>

              <Button className="md:mt-8">
                <Filter className="w-4 h-4 mr-2"/> Apply Filters
              </Button>
            </div>
          </motion.div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTutors.length > 0 ? filteredTutors.map((tutor, index) => (
              <motion.div
                key={tutor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                layout 
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                   <CardHeader className="items-center text-center p-4 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/20">
                     <Avatar className="w-20 h-20 mb-3 border-4 border-background shadow-md">
                       <img  className="aspect-square h-full w-full" alt={tutor.img_alt} src="https://images.unsplash.com/photo-1561089489-f13d5e730d72" />
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
            )) : (
              <p className="col-span-full text-center text-muted-foreground py-10">No tutors found matching your criteria.</p>
            )}
          </div>
        </div>
      );
    };

    export default TutorListPage;
  