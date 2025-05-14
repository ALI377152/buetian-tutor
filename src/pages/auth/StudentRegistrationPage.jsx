
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useToast } from "@/components/ui/use-toast";
    import { UserPlus, Mail, Lock, BookOpen, Users, Phone } from 'lucide-react';

    const StudentRegistrationPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        educationLevel: '',
        medium: '',
        category: '',
        tutorGenderPreference: '',
        digitalSignature: '', 
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Passwords do not match.",
          });
          return;
        }
        

        toast({
          title: "Registration Submitted",
          description: "Your student registration request has been received. (Data stored locally)",
        });
        console.log("Student Registration Data:", formData);
        
      };

      return (
        <div className="container py-12 md:py-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <UserPlus className="mx-auto h-12 w-12 text-primary mb-2" />
                <CardTitle className="text-3xl font-bold">Student Registration</CardTitle>
                <CardDescription>Join BUETIAN TUTOR to find your ideal BUET tutor.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" type="text" placeholder="Enter your full name" required onChange={handleChange} value={formData.name} icon={UserPlus} />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required onChange={handleChange} value={formData.email} icon={Mail} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="01XXXXXXXXX" required onChange={handleChange} value={formData.phone} icon={Phone} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Choose a strong password" required onChange={handleChange} value={formData.password} icon={Lock} />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" placeholder="Re-enter your password" required onChange={handleChange} value={formData.confirmPassword} icon={Lock} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="educationLevel">Current Education Level (e.g., Class 10, HSC 2nd Year)</Label>
                    <Input id="educationLevel" type="text" placeholder="E.g., Class 10, HSC 2nd Year, University 1st Sem" required onChange={handleChange} value={formData.educationLevel} icon={BookOpen} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="medium">Medium (Bangla/English)</Label>
                      <Input id="medium" type="text" list="mediums" placeholder="e.g., Bangla Version" required onChange={handleChange} value={formData.medium} />
                      <datalist id="mediums">
                        <option value="Bangla Version" />
                        <option value="English Version" />
                        <option value="English Medium" />
                      </datalist>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="category">Category</Label>
                      <Input id="category" type="text" list="categories" placeholder="e.g., HSC" required onChange={handleChange} value={formData.category} />
                      <datalist id="categories">
                        <option value="Primary (Class 1-5)" />
                        <option value="Secondary (Class 6-10)" />
                        <option value="SSC Candidate" />
                        <option value="HSC Candidate" />
                        <option value="Admission Test (Medical/Engineering/University)" />
                        <option value="Undergraduate" />
                      </datalist>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="tutorGenderPreference">Preferred Tutor Gender</Label>
                    <Input id="tutorGenderPreference" type="text" list="genderPrefs" placeholder="e.g., Male, Female, No Preference" required onChange={handleChange} value={formData.tutorGenderPreference} />
                     <datalist id="genderPrefs">
                        <option value="Male" />
                        <option value="Female" />
                        <option value="No Preference" />
                      </datalist>
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="digitalSignature">Digital Signature (Type your full name)</Label>
                    <Input id="digitalSignature" type="text" placeholder="Type your full name to sign" required onChange={handleChange} value={formData.digitalSignature}/>
                  </div>

                  <Button type="submit" className="w-full" size="lg">Register as Student</Button>
                </form>
              </CardContent>
              <CardFooter className="text-center block">
                <p className="text-sm text-muted-foreground">Already have an account? <a href="/login" className="text-primary hover:underline">Login here</a>.</p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      );
    };

    export default StudentRegistrationPage;
  