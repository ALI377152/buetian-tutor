
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Construction } from 'lucide-react';

    const PlaceholderPage = ({ pageName = "Page" }) => {
      return (
        <div className="container py-16 md:py-24 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]"> {/* Adjust min-height based on header/footer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Construction className="h-16 w-16 text-primary animate-pulse" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {pageName} - Coming Soon!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-md"
          >
            We are currently working hard on building this section. Please check back later for updates.
          </motion.p>
        </div>
      );
    };

    export default PlaceholderPage;
  