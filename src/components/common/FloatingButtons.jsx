
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { UserPlus } from 'lucide-react'; // Changed icon to reflect requesting/registering
    import { Link } from 'react-router-dom';

    const FloatingButtons = () => {
      return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
          {/* Removed "Ask for Demo" button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button size="lg" className="rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" asChild>
              {/* Link to student registration or request form */}
              <Link to="/#request-tutor">
                <UserPlus className="mr-2 h-5 w-5" /> Request Tutor
              </Link>
            </Button>
          </motion.div>
        </div>
      );
    };

    export default FloatingButtons;
  