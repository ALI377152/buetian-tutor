
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import { Toaster } from '@/components/ui/toaster';
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import HomePage from '@/pages/HomePage';
    import AboutUsPage from '@/pages/AboutUsPage';
    import PlaceholderPage from '@/pages/PlaceholderPage';
    import { ThemeProvider } from '@/components/theme-provider';

    import StudentRegistrationPage from '@/pages/auth/StudentRegistrationPage';
    import TutorRegistrationPage from '@/pages/auth/TutorRegistrationPage';
    import LoginPage from '@/pages/auth/LoginPage';

    import StudentDashboardPage from '@/pages/dashboards/StudentDashboardPage';
    import TutorDashboardPage from '@/pages/dashboards/TutorDashboardPage';
    import DistributorDashboardPage from '@/pages/dashboards/DistributorDashboardPage';
    import AdminDashboardPage from '@/pages/dashboards/AdminDashboardPage';
    import IndentureAgreementPage from '@/pages/IndentureAgreementPage';
    import ContributorsPage from '@/pages/ContributorsPage';


    function App() {
      return (
        <ThemeProvider defaultTheme="light" storageKey="buetian-tutor-theme">
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about-us" element={<AboutUsPage />} />
                  <Route path="/about-creator" element={<PlaceholderPage pageName="About the Creator" />} />
                  <Route path="/contributors" element={<ContributorsPage />} />

                  {/* Registration Routes */}
                  <Route path="/register-student" element={<StudentRegistrationPage />} />
                  <Route path="/register-tutor" element={<TutorRegistrationPage />} />
                  <Route path="/login" element={<LoginPage />} />

                  {/* Dashboard Routes */}
                  <Route path="/dashboard/student" element={<StudentDashboardPage />} />
                  <Route path="/dashboard/tutor" element={<TutorDashboardPage />} />
                  <Route path="/dashboard/distributor" element={<DistributorDashboardPage />} />
                  <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
                  
                  {/* Core Feature Pages */}
                  <Route path="/indenture-agreement" element={<IndentureAgreementPage />} />

                  {/* Existing Placeholder Routes */}
                  <Route path="/tutors" element={<PlaceholderPage pageName="Tutor Management (Internal)" />} />
                  <Route path="/admin" element={<PlaceholderPage pageName="Admin Panel Overview" />} />
                  <Route path="/distributor" element={<PlaceholderPage pageName="Distributor Panel Overview" />} />
                  <Route path="/library" element={<PlaceholderPage pageName="Tutor Library" />} />
                  <Route path="/notice-board" element={<PlaceholderPage pageName="Notice Board" />} />
                  <Route path="/complaint-box" element={<PlaceholderPage pageName="Complaint Box" />} />
                  <Route path="/contribute" element={<PlaceholderPage pageName="Contribution Page (Legacy)" />} />
                  <Route path="/results" element={<PlaceholderPage pageName="Result Share Page" />} />
                </Routes>
              </main>
              <Footer />
              <Toaster />
            </div>
          </Router>
        </ThemeProvider>
      );
    }

    export default App;
  