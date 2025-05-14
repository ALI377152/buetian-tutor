
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Heart, Users, DollarSign } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { Link } from 'react-router-dom';

    const contributors = [
      { name: 'Your Name Here', contribution: 'Platform Development Lead', type: 'Development', avatarText: 'YN' },
      { name: 'Anonymous Donor', contribution: 'Seed Funding', type: 'Financial', avatarText: 'AD' },
      { name: 'BUET Alumni Association (Conceptual)', contribution: 'Community Outreach', type: 'Support', avatarText: 'BA' },
    ];

    const contributionMethods = [
      { name: 'Bkash', icon: 'https://cdn.iconscout.com/icon/free/png-256/bkash-2-684853.png', details: 'Send to: 01XXXXXXXXX (Merchant)'},
      { name: 'Nagad', icon: 'https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png', details: 'Send to: 01XXXXXXXXX (Personal)'},
      { name: 'Visa/Mastercard/Credit Card', icon: 'https://cdn.iconscout.com/icon/free/png-256/mastercard-3521564-2944982.png', details: 'Via Secure Payment Gateway (Coming Soon)'},
    ];


    const ContributorsPage = () => {
      return (
        <div className="container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Heart className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support BUETIAN TUTOR</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform thrives on community support. Your contributions help us maintain and improve our services, connecting more students with quality BUET tutors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="mb-12 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center"><DollarSign className="mr-2 h-6 w-6 text-green-500" />How to Contribute</CardTitle>
                <CardDescription>Choose your preferred method to support our mission. Every contribution makes a difference!</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contributionMethods.map(method => (
                  <Card key={method.name} className="bg-secondary/30 dark:bg-secondary/50">
                    <CardHeader className="flex flex-row items-center space-x-3 pb-3">
                      <img  src={method.icon} alt={`${method.name} logo`} className="h-8 w-8 object-contain" />
                      <CardTitle className="text-xl">{method.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{method.details}</p>
                      {method.name.includes('Card') && <Button size="sm" className="mt-2" disabled>Pay Now (Coming Soon)</Button>}
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
               <CardFooter>
                <p className="text-xs text-muted-foreground">
                  For direct bank transfers or other inquiries, please <Link to="/#contact" className="text-primary hover:underline">contact us</Link>.
                </p>
              </CardFooter>
            </Card>
          </motion.div>
          

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
              <Users className="mr-3 h-8 w-8 text-blue-500" /> Our Valued Contributors (Conceptual)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contributors.map((contributor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                       <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-semibold">
                        {contributor.avatarText}
                      </div>
                      <CardTitle>{contributor.name}</CardTitle>
                      <CardDescription>{contributor.type} Contribution</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">"{contributor.contribution}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
             <p className="text-center mt-8 text-muted-foreground">
              Want to be featured here? <Link to="/#contact" className="text-primary hover:underline">Let us know about your contribution!</Link>
            </p>
          </motion.div>
        </div>
      );
    };

    export default ContributorsPage;
  