
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useToast } from "@/components/ui/use-toast";
    import { UserPlus, Mail, Lock, BookOpen, Users, Phone, Briefcase, GraduationCap, Image as ImageIcon, CheckSquare } from 'lucide-react';

    const TutorRegistrationPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        buetDept: '',
        buetBatch: '',
        gender: '',
        subjects: '',
        teachingMethod: '',
        collegeUniversity: '',
        cgpa: '',
        booksStudied: '',
        preferredStudentLevel: '',
        experience: '',
        tutorGenderPreferenceForStudent: '',
        
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
          description: "Your tutor registration request has been received. (Data stored locally)",
        });
        console.log("Tutor Registration Data:", formData);
        
      };

      return (
        <div className="container py-12 md:py-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl"
          >
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <GraduationCap className="mx-auto h-12 w-12 text-primary mb-2" />
                <CardTitle className="text-3xl font-bold">Tutor Registration (BUET Students Only)</CardTitle>
                <CardDescription>Join our elite team of BUET tutors.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your Full Name" required onChange={handleChange} value={formData.name} />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required onChange={handleChange} value={formData.email} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="01XXXXXXXXX" required onChange={handleChange} value={formData.phone} />
                    </div>
                     <div className="space-y-1">
                      <Label htmlFor="gender">Gender</Label>
                      <Input id="gender" list="genders" placeholder="Select Gender" required onChange={handleChange} value={formData.gender} />
                      <datalist id="genders">
                        <option value="Male" />
                        <option value="Female" />
                        <option value="Other" />
                      </datalist>
                    </div>
                  </div>
                  
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Choose a strong password" required onChange={handleChange} value={formData.password} />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" placeholder="Re-enter your password" required onChange={handleChange} value={formData.confirmPassword} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="buetDept">BUET Department</Label>
                      <Input id="buetDept" placeholder="e.g., CSE, EEE, ME" required onChange={handleChange} value={formData.buetDept} />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="buetBatch">BUET Batch</Label>
                      <Input id="buetBatch" type="number" placeholder="e.g., 18, 19" required onChange={handleChange} value={formData.buetBatch} />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="subjects">Subjects You Can Teach (comma-separated)</Label>
                    <Input id="subjects" placeholder="e.g., Physics, Math, Chemistry" required onChange={handleChange} value={formData.subjects} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="teachingMethod">Teaching Method</Label>
                      <Input id="teachingMethod" list="methods" placeholder="e.g., Online, Offline, Both" required onChange={handleChange} value={formData.teachingMethod} />
                       <datalist id="methods">
                        <option value="Online" />
                        <option value="Offline (Student's Home)" />
                        <option value="Offline (Tutor's Home)" />
                        <option value="Both" />
                      </datalist>
                    </div>
                     <div className="space-y-1">
                      <Label htmlFor="collegeUniversity">Previous College/University (if applicable)</Label>
                      <Input id="collegeUniversity" placeholder="e.g., Notre Dame College" onChange={handleChange} value={formData.collegeUniversity} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-1">
                      <Label htmlFor="cgpa">Current CGPA (if Undergraduate)</Label>
                      <Input id="cgpa" type="number" step="0.01" placeholder="e.g., 3.75" onChange={handleChange} value={formData.cgpa} />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="preferredStudentLevel">Preferred Student Level(s)</Label>
                      <Input id="preferredStudentLevel" placeholder="e.g., Class 8-10, HSC, Admission" required onChange={handleChange} value={formData.preferredStudentLevel} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="booksStudied">Key Books/Curriculum Studied</Label>
                    <Textarea id="booksStudied" placeholder="Mention important books or curriculum you are familiar with (e.g., NCTB, Edexcel, Cambridge, Specific author books)" onChange={handleChange} value={formData.booksStudied} />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="experience">Teaching Experience (if any)</Label>
                    <Textarea id="experience" placeholder="Briefly describe your teaching experience" onChange={handleChange} value={formData.experience} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="tutorGenderPreferenceForStudent">Your Gender Preference for Students</Label>
                       <Input id="tutorGenderPreferenceForStudent" list="studentGenders" placeholder="e.g., Male, Female, Any" required onChange={handleChange} value={formData.tutorGenderPreferenceForStudent} />
                       <datalist id="studentGenders">
                        <option value="Male Students Only" />
                        <option value="Female Students Only" />
                        <option value="Any Gender" />
                      </datalist>
                    </div>
                     <div className="space-y-1">
                      <Label htmlFor="profilePhoto">Profile Photo (Optional for Females)</Label>
                      <Input id="profilePhoto" type="file" accept="image/*" />
                      <p className="text-xs text-muted-foreground">Upload a clear photo. Max 2MB.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="digitalSignature">Digital Signature (Type your full name)</Label>
                    <Input id="digitalSignature" type="text" placeholder="Type your full name to sign" required onChange={handleChange} value={formData.digitalSignature}/>
                  </div>

                  <Button type="submit" className="w-full" size="lg">Register as Tutor</Button>
                </form>
              </CardContent>
               <CardFooter className="text-center block">
                <p className="text-sm text-muted-foreground">Already registered? <a href="/login" className="text-primary hover:underline">Login here</a>.</p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      );
    };

    export default TutorRegistrationPage;
  