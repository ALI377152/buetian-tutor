
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Users, UserPlus, ListChecks, Bell, GitPullRequestArrow } from 'lucide-react';

    const DistributorDashboardPage = () => {
      
      const distributorData = {
        name: 'Distributor Name',
        department: 'CSE', 
        pendingRequests: [
          { id: 1, studentName: 'Student A', subject: 'Calculus', level: 'HSC', date: '2025-05-06' },
          { id: 2, studentName: 'Student B', subject: 'Physics', level: 'SSC', date: '2025-05-05' },
        ],
        activeTutors: 15, 
        ongoingTuitions: 8, 
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
                    <h1 className="text-3xl md:text-4xl font-bold">Distributor Dashboard</h1>
                     <p className="text-muted-foreground">Welcome, {distributorData.name} ({distributorData.department} Department).</p>
                </div>
                 <Button variant="outline">
                    <Bell className="mr-2 h-4 w-4" /> View Notifications
                </Button>
            </div>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Student Requests</CardTitle>
                  <UserPlus className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{distributorData.pendingRequests.length}</div>
                  <p className="text-xs text-muted-foreground">New requests to assign</p>
                </CardContent>
              </Card>
            </motion.div>
             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tutors in Your Dept.</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{distributorData.activeTutors}</div>
                  <p className="text-xs text-muted-foreground">Total available tutors</p>
                </CardContent>
              </Card>
            </motion.div>
             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ongoing Tuitions</CardTitle>
                  <ListChecks className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{distributorData.ongoingTuitions}</div>
                   <p className="text-xs text-muted-foreground">Tuitions you're managing</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardHeader>
                <CardTitle>Pending Student Requests</CardTitle>
                <CardDescription>Assign these requests to available tutors from your department.</CardDescription>
              </CardHeader>
              <CardContent>
                 {distributorData.pendingRequests.length > 0 ? (
                  <div className="space-y-4">
                    {distributorData.pendingRequests.map((req) => (
                      <Card key={req.id} className="bg-secondary/50 dark:bg-secondary/30">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Request for {req.subject} ({req.level})</CardTitle>
                           <CardDescription>Student: {req.studentName} | Received: {req.date}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-2">
                           
                           <Button size="sm">
                            <GitPullRequestArrow className="mr-2 h-4 w-4" /> Assign Tutor
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">No pending student requests. Great job!</p>
                )}
              </CardContent>
            </Card>
          </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Tutor Management</CardTitle>
                        <CardDescription>View and manage tutors within the {distributorData.department} department.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        
                        <p className="text-muted-foreground">Tutor list with availability (max 2 green dots) and notes/warnings feature will be implemented here.</p>
                        <Button className="mt-2">View Department Tutors</Button>
                    </CardContent>
                </Card>
            </motion.div>

        </div>
      );
    };

    export default DistributorDashboardPage;
  