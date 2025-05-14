
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { User, CalendarDays, BarChart3, MessageSquare, AlertTriangle, Settings } from 'lucide-react';
    import { Link } from 'react-router-dom'; 

    const TutorDashboardPage = () => {
      
      const tutorData = {
        name: 'Tutor Name',
        department: 'CSE',
        assignedTuitions: [
          { id: 1, student: 'Student X', subject: 'Advanced Math', status: 'Ongoing', lastSession: 'Yesterday' },
          { id: 2, student: 'Student Y', subject: 'Physics Mechanics', status: 'Awaiting Indenture Confirmation', lastSession: null },
        ],
        availability: 'Mon, Wed, Fri (5 PM - 8 PM)',
        averageRating: 4.8, 
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
                    <h1 className="text-3xl md:text-4xl font-bold">Welcome, {tutorData.name}!</h1>
                    <p className="text-muted-foreground">Manage your tuitions and availability. ({tutorData.department} Department)</p>
                </div>
                <Button variant="outline" asChild className="mt-4 sm:mt-0">
                     <Link to="#"><Settings className="mr-2 h-4 w-4" /> Profile & Availability</Link>
                </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Assigned Tuitions</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{tutorData.assignedTuitions.length}</div>
                  <p className="text-xs text-muted-foreground">Current student assignments</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{tutorData.averageRating}/5.0</div>
                  <p className="text-xs text-muted-foreground">Based on student feedback</p>
                </CardContent>
              </Card>
            </motion.div>
             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Availability</CardTitle>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                   <p className="text-sm font-semibold truncate">{tutorData.availability}</p>
                  <Button variant="link" size="sm" className="p-0 h-auto text-xs">Update Schedule</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardHeader>
                <CardTitle>Your Tuitions</CardTitle>
                <CardDescription>Details of your current student assignments.</CardDescription>
              </CardHeader>
              <CardContent>
                 {tutorData.assignedTuitions.length > 0 ? (
                  <div className="space-y-4">
                    {tutorData.assignedTuitions.map((tuition) => (
                      <Card key={tuition.id} className="bg-secondary/50 dark:bg-secondary/30">
                        <CardHeader>
                          <CardTitle className="text-lg">{tuition.subject} for {tuition.student}</CardTitle>
                           <CardDescription>Status: <span className={`font-semibold ${tuition.status === 'Ongoing' ? 'text-green-600' : 'text-amber-600'}`}>{tuition.status}</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                          {tuition.lastSession && <p className="text-sm text-muted-foreground">Last Session: {tuition.lastSession}</p>}
                           {tuition.status === 'Ongoing' && (
                            <Button size="sm"><MessageSquare className="mr-2 h-4 w-4" /> Chat with Student</Button>
                          )}
                           {tuition.status === 'Awaiting Indenture Confirmation' && (
                             <Button size="sm" asChild><Link to="/indenture-agreement">View & Confirm Indenture</Link></Button>
                           )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">No tuitions assigned currently. Your distributor will notify you.</p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8">
             <Button variant="destructive" className="w-full md:w-auto">
                <AlertTriangle className="mr-2 h-4 w-4" /> Request Distributor Change (Report Issue)
             </Button>
             <p className="text-xs text-muted-foreground mt-2">Use this if you have issues with your current department distributor.</p>
          </motion.div>
        </div>
      );
    };

    export default TutorDashboardPage;
  