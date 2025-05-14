
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useToast } from "@/components/ui/use-toast";
    import { LogIn, Mail, Lock } from 'lucide-react';
    import { Link, useNavigate } from 'react-router-dom';

    const LoginPage = () => {
      const { toast } = useToast();
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'student', 
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };

      const handleRoleChange = (e) => {
        setFormData({ ...formData, role: e.target.value });
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        
        
        
        
        
        
        toast({
          title: "Login Successful (Placeholder)",
          description: `Welcome back! You are logged in as a ${formData.role}. (Functionality limited)`,
        });
        
        
        
        
        
        
        navigate(`/dashboard/${formData.role}`);
      };

      return (
        <div className="container py-12 md:py-20 flex items-center justify-center min-h-[calc(100vh-16rem)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <LogIn className="mx-auto h-12 w-12 text-primary mb-2" />
                <CardTitle className="text-3xl font-bold">Welcome Back!</CardTitle>
                <CardDescription>Login to access your BUETIAN TUTOR dashboard.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required onChange={handleChange} value={formData.email} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password" required onChange={handleChange} value={formData.password} />
                  </div>
                   <div className="space-y-1">
                    <Label htmlFor="role">Login as</Label>
                    <select id="role" value={formData.role} onChange={handleRoleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="student">Student</option>
                      <option value="tutor">Tutor</option>
                      <option value="distributor">Distributor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full" size="lg">Login</Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col items-center space-y-2">
                <Link to="#" className="text-sm text-primary hover:underline">Forgot Password?</Link>
                <p className="text-sm text-muted-foreground">
                  Don't have an account? Register as <Link to="/register-student" className="text-primary hover:underline">Student</Link> or <Link to="/register-tutor" className="text-primary hover:underline">Tutor</Link>.
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      );
    };

    export default LoginPage;
  