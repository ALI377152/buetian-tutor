
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { User, BookOpen, Clock, Star, MessageSquare, PlusCircle } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const StudentDashboardPage = () => {
      
      const studentData = {
        name: 'Student Name', 
        activeTuitions: [
          { id: 1, subject: 'Physics', tutor: 'Tutor A', status: 'Ongoing', nextSession: 'Tomorrow at 5 PM' },
          { id: 2, subject: 'Math', tutor: 'Tutor B', status: 'Pending Indenture', nextSession: null },
        ],
        completedSessions: 5,
      };

      return (
        <div className="container py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">Welcome, {studentData.name}!</h1>
                    <p className="text-muted-foreground">Manage your tuitions and track your progress.</p>
                </div>
                <Button asChild className="mt-4 sm:mt-0">
                    <Link to="/#request-tutor"><PlusCircle className="mr-2 h-4 w-4" /> Request New Tuition</Link>
                </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Tuitions</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{studentData.activeTuitions.length}</div>
                  <p className="text-xs text-muted-foreground">Currently active or pending</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed Sessions</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{studentData.completedSessions}</div>
                   <p className="text-xs text-muted-foreground">Total sessions attended</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Your Profile</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">View/Edit Profile</Button>
                   <p className="text-xs text-muted-foreground mt-2">Keep your information up-to-date</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardHeader>
                <CardTitle>My Tuitions</CardTitle>
                <CardDescription>Overview of your ongoing and requested tuitions.</CardDescription>
              </CardHeader>
              <CardContent>
                {studentData.activeTuitions.length > 0 ? (
                  <div className="space-y-4">
                    {studentData.activeTuitions.map((tuition) => (
                      <Card key={tuition.id} className="bg-secondary/50 dark:bg-secondary/30">
                        <CardHeader>
                          <CardTitle className="text-lg">{tuition.subject} with {tuition.tutor}</CardTitle>
                          <CardDescription>Status: <span className={`font-semibold ${tuition.status === 'Ongoing' ? 'text-green-600' : 'text-amber-600'}`}>{tuition.status}</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                          {tuition.nextSession && <p className="text-sm text-muted-foreground">Next Session: {tuition.nextSession}</p>}
                          {tuition.status === 'Ongoing' && (
                            <div className="mt-2 flex space-x-2">
                              <Button size="sm"><MessageSquare className="mr-2 h-4 w-4" /> Chat with Tutor</Button>
                              <Button size="sm" variant="outline"><Star className="mr-2 h-4 w-4" /> Rate Session</Button>
                            </div>
                          )}
                           {tuition.status === 'Pending Indenture' && (
                             <Button size="sm" asChild><Link to="/indenture-agreement">View Indenture</Link></Button>
                           )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">You have no active tuitions. <Link to="/#request-tutor" className="text-primary hover:underline">Request one now!</Link></p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      );
    };

    export default StudentDashboardPage;
  