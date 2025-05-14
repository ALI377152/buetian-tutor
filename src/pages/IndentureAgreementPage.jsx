
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { useNavigate } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Checkbox } from '@/components/ui/checkbox';
    import { Label } from '@/components/ui/label';
    import { Input } from '@/components/ui/input';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useToast } from "@/components/ui/use-toast";
    import { FileText, Edit2, CheckSquare } from 'lucide-react';

    const indentureClauses = [
      { id: 'clause1', text: 'আমি এই মর্মে অঙ্গীকার করিতেছি যে, টিউশনির সকল নিয়মকানুন মানিয়া চলিব।' },
      { id: 'clause2', text: 'শিক্ষক/শিক্ষিকা সময়মত পড়াইতে আসিবেন এবং শিক্ষার্থী মনোযোগ সহকারে পড়িবে।' },
      { id: 'clause3', text: 'কোন প্রকার আর্থিক লেনদেন সরাসরি শিক্ষক/শিক্ষার্থীর মধ্যে হইবে না, সকল পেমেন্ট প্ল্যাটফর্মের মাধ্যমে হইবে।' },
      { id: 'clause4', text: 'নির্ধারিত সময়ের পূর্বে টিউশনি বাতিল করিতে হইলে mindestens (minimum) ২৪ ঘন্টা পূর্বে জানাইতে হইবে।' },
      { id: 'clause5', text: 'প্ল্যাটফর্মের নীতিমালা ভঙ্গ করিলে কর্তৃপক্ষ যে কোন সিদ্ধান্ত নিতে পারিবে।' },
      { id: 'clause6', text: 'আমি উপরের সকল শর্তাবলী পড়িয়াছি এবং মানিয়া নিতে সম্মত আছি।' },
    ];

    const IndentureAgreementPage = () => {
      const { toast } = useToast();
      const navigate = useNavigate();
      const [checkedClauses, setCheckedClauses] = useState({});
      const [studentSignature, setStudentSignature] = useState('');
      const [tutorSignature, setTutorSignature] = useState('');

      const handleCheckboxChange = (clauseId) => {
        setCheckedClauses(prev => ({ ...prev, [clauseId]: !prev[clauseId] }));
      };

      const allClausesChecked = indentureClauses.every(clause => checkedClauses[clause.id]);

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!allClausesChecked) {
          toast({ variant: "destructive", title: "Error", description: "দয়া করে সকল শর্তে টিক চিহ্ন দিন।" });
          return;
        }
        if (!studentSignature.trim() || !tutorSignature.trim()) {
           toast({ variant: "destructive", title: "Error", description: "শিক্ষার্থী এবং শিক্ষক উভয়ের স্বাক্ষর প্রয়োজন।" });
          return;
        }

        toast({
          title: "চুক্তিপত্র স্বাক্ষরিত হয়েছে!",
          description: "টিউশনি সফলভাবে শুরু হয়েছে। চ্যাট এবং অন্যান্য সুবিধা এখন উপলব্ধ। (তথ্য স্থানীয়ভাবে সংরক্ষিত)",
        });
        console.log("Indenture Signed:", { studentSignature, tutorSignature, checkedClauses });
        navigate('/dashboard/student');
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
                <FileText className="mx-auto h-12 w-12 text-primary mb-2" />
                <CardTitle className="text-3xl font-bold" lang="bn">টিউশনির নীতিমালা ও শর্তাবলী</CardTitle>
                <CardDescription lang="bn">দয়া করে নিচের সকল শর্তাবলী মনোযোগ সহকারে পড়ুন এবং সম্মতি প্রদান করুন।</CardDescription>
              </CardHeader>
              <CardContent lang="bn">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4 p-4 border rounded-md bg-secondary/30 dark:bg-secondary/50">
                    {indentureClauses.map((clause) => (
                      <div key={clause.id} className="flex items-start space-x-3">
                        <Checkbox
                          id={clause.id}
                          checked={!!checkedClauses[clause.id]}
                          onCheckedChange={() => handleCheckboxChange(clause.id)}
                          className="mt-1"
                        />
                        <Label htmlFor={clause.id} className="text-sm leading-relaxed select-none cursor-pointer">
                          {clause.text}
                        </Label>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="studentSignature" className="flex items-center"><Edit2 className="mr-2 h-4 w-4"/>শিক্ষার্থীর ডিজিটাল স্বাক্ষর (সম্পূর্ণ নাম লিখুন)</Label>
                      <Input 
                        id="studentSignature" 
                        placeholder="এখানে আপনার সম্পূর্ণ নাম লিখুন" 
                        value={studentSignature}
                        onChange={(e) => setStudentSignature(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tutorSignature" className="flex items-center"><Edit2 className="mr-2 h-4 w-4"/>শিক্ষকের ডিজিটাল স্বাক্ষর (সম্পূর্ণ নাম লিখুন)</Label>
                      <Input 
                        id="tutorSignature" 
                        placeholder="এখানে আপনার সম্পূর্ণ নাম লিখুন" 
                        value={tutorSignature}
                        onChange={(e) => setTutorSignature(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">ডিস্ট্রিবিউটর সদস্য তাদের ড্যাশবোর্ড থেকে এই চুক্তিতে স্বাক্ষর করবেন।</p>


                  <Button type="submit" className="w-full mt-4" size="lg" disabled={!allClausesChecked || !studentSignature.trim() || !tutorSignature.trim()}>
                    <CheckSquare className="mr-2 h-5 w-5" /> শর্তাবলী মেনে নিলাম ও চুড়ান্ত করলাম
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-center block">
                <p className="text-sm text-muted-foreground" lang="bn">এই শর্তাবলী প্রতিটি নতুন টিউশনির জন্য প্রযোজ্য হইবে।</p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      );
    };

    export default IndentureAgreementPage;
  