
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Label } from '@/components/ui/label';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Button } from '@/components/ui/button';
    import { useToast } from "@/components/ui/use-toast";
    import { Send } from 'lucide-react';

    const ContactSection = () => {
      const { toast } = useToast();

      const handleSubmit = (e) => {
        e.preventDefault();
        
        
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        e.target.reset(); 
      };

      return (
        <section id="contact" className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions or need assistance? Fill out the form below, and we'll respond as soon as possible.
                Want to support our mission? Check out our <Link to="/contributors" className="text-primary hover:underline">Contributors Page</Link>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-lg border border-border/50">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>We're here to help!</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Subject of your message" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Type your message here..." required rows={5} />
                    </div>
                    <div className="text-right">
                      <Button type="submit" size="lg">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      );
    };

    export default ContactSection;
  