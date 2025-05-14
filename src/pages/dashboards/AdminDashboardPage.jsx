
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
    import { Users, ShieldAlert, Settings, FileText, BellDot, GitPullRequestArrow, Server, MessageCircle as MessageCircleQuestion, UserX } from 'lucide-react';

    const AdminDashboardPage = () => {
      
      const adminData = {
        websiteAdmins: 5,
        complaintAdmins: 5,
        pendingStudentRequests: 3, 
        openComplaints: 2,
        totalTutors: 50,
        totalStudents: 120,
      };

      const recentComplaints = [
        { id: 1, from: 'Tutor X', against: 'Distributor Y', issue: 'Unresponsive', date: '2025-05-06', status: 'Open' },
        { id: 2, from: 'Student Z', regarding: 'Tutor W', issue: 'Missed session', date: '2025-05-05', status: 'Investigating' },
      ];
      
      const studentRequestsToForward = [
        { id: 101, studentName: 'New Student 1', subject: 'Chemistry', level: 'Admission', date: '2025-05-07', targetDept: 'ChE' },
        { id: 102, studentName: 'New Student 2', subject: 'English', level: 'HSC', date: '2025-05-07', targetDept: 'N/A (General)'},
      ];


      return (
        <div className="container py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold">Admin Control Panel</h1>
            <p className="text-muted-foreground">Overall system management and oversight.</p>
          </motion.div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="complaints">Complaint Mgmt</TabsTrigger>
              <TabsTrigger value="website">Website Mgmt</TabsTrigger>
              <TabsTrigger value="users">User Mgmt</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <StatCard icon={Users} title="Total Users" value={`${adminData.totalTutors + adminData.totalStudents}`} description="Tutors & Students" />
                  <StatCard icon={GitPullRequestArrow} title="Pending Requests" value={adminData.pendingStudentRequests} description="Awaiting distributor assignment" />
                  <StatCard icon={ShieldAlert} title="Open Complaints" value={adminData.openComplaints} description="Require attention" />
                  <StatCard icon={Server} title="System Status" value="Online" description="All services operational" className="text-green-600" />
                </div>
                 <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        <Button><BellDot className="mr-2 h-4 w-4"/> Post Notice</Button>
                        <Button variant="outline"><FileText className="mr-2 h-4 w-4"/> Manage Library</Button>
                        <Button variant="destructive"><UserX className="mr-2 h-4 w-4"/> Ban User (Placeholder)</Button>
                    </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="complaints">
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center"><GitPullRequestArrow className="mr-2 h-5 w-5 text-primary"/> Forward Student Requests</CardTitle>
                    <CardDescription>Review new student tuition requests and forward them to the appropriate department distributors.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {studentRequestsToForward.length > 0 ? (
                      <div className="space-y-3">
                        {studentRequestsToForward.map(req => (
                          <div key={req.id} className="p-3 border rounded-md flex justify-between items-center">
                            <div>
                              <p className="font-semibold">{req.studentName} - {req.subject} ({req.level})</p>
                              <p className="text-xs text-muted-foreground">Received: {req.date} | Target Dept: {req.targetDept}</p>
                            </div>
                            <Button size="sm">Forward to {req.targetDept} Distributor</Button>
                          </div>
                        ))}
                      </div>
                    ) : <p className="text-muted-foreground">No new student requests to forward.</p>}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center"><MessageCircleQuestion className="mr-2 h-5 w-5 text-destructive"/> Manage Complaints</CardTitle>
                    <CardDescription>Handle complaints from tutors against distributors or serious student-tutor conflicts.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {recentComplaints.length > 0 ? (
                       <div className="space-y-3">
                        {recentComplaints.map(complaint => (
                           <div key={complaint.id} className="p-3 border rounded-md">
                            <p className="font-semibold">From: {complaint.from} | Regarding/Against: {complaint.against || complaint.regarding}</p>
                            <p className="text-sm">Issue: {complaint.issue}</p>
                            <p className="text-xs text-muted-foreground">Date: {complaint.date} | Status: <span className="font-medium">{complaint.status}</span></p>
                            <Button size="sm" variant="outline" className="mt-1">View Details</Button>
                          </div>
                        ))}
                      </div>
                    ) : <p className="text-muted-foreground">No open complaints.</p>}
                  </CardContent>
                </Card>
               </motion.div>
            </TabsContent>

            <TabsContent value="website">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center"><Settings className="mr-2 h-5 w-5 text-primary"/> Website Technical Management</CardTitle>
                    <CardDescription>Manage content, design, security, notices, library uploads, and backups.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">Controls for page editing, content updates, security settings, notice board management, tutor library approval, session log viewing, and data backups will be available here.</p>
                    <div className="flex flex-wrap gap-2">
                        <Button variant="secondary">Edit Homepage Content (Placeholder)</Button>
                        <Button variant="secondary">Manage Notices</Button>
                        <Button variant="secondary">Approve Library Uploads</Button>
                        <Button variant="secondary">View Session Logs</Button>
                        <Button variant="secondary">Perform Backup (Placeholder)</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="users">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center"><Users className="mr-2 h-5 w-5 text-primary"/> User & Panel Management</CardTitle>
                    <CardDescription>Manage student, tutor, distributor, and admin accounts. Set permissions and handle bans.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">Functionality to search, view, edit, and manage all user types (students, tutors, distributors, admins) including their permissions and status (active/banned) will be here.</p>
                     <div className="flex flex-wrap gap-2">
                        <Button variant="secondary">Manage Students</Button>
                        <Button variant="secondary">Manage Tutors</Button>
                        <Button variant="secondary">Manage Distributors</Button>
                        <Button variant="secondary">Manage Admin Accounts</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      );
    };

    const StatCard = ({ icon: Icon, title, value, description, className }) => (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className={`h-4 w-4 text-muted-foreground ${className || ''}`} />
            </CardHeader>
            <CardContent>
                <div className={`text-2xl font-bold ${className || ''}`}>{value}</div>
                <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );

    export default AdminDashboardPage;
  