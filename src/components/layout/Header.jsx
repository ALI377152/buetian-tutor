
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { useTheme } from '@/components/theme-provider';
    import { Moon, Sun, Menu, Languages } from 'lucide-react';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
      DropdownMenuSeparator
    } from "@/components/ui/dropdown-menu"
    import { Switch } from "@/components/ui/switch"
    import { Label } from "@/components/ui/label"
    import { useToast } from "@/components/ui/use-toast"


    const Header = () => {
      const { theme, setTheme } = useTheme();
      const { toast } = useToast();

      const handleLanguageToggle = (lang) => {
        toast({
          title: "Language Switch",
          description: `Language switched to ${lang}. (Full functionality pending implementation)`,
        });
      };

      return (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <div className="container flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img className="h-10 w-auto" alt="BUET Logo" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/b1591a06-302d-4759-acb6-b0214ad18f65/c8e1754807114a671c8d4cedd3218b81.png" />
              <span className="font-bold text-lg bg-gradient-to-r from-red-600 via-red-500 to-orange-400 text-transparent bg-clip-text hidden sm:inline">
                BUETIAN TUTOR
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Home</Link>
              <Link to="/about-us" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">About Us</Link>
              <Link to="/results" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Results</Link>
              <Link to="/contribute" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Contribute</Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Register
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4"><path d="m6 9 6 6 6-6"/></svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild><Link to="/register-student">Student Registration</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/register-tutor">Tutor Registration</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button size="sm" asChild>
                 <Link to="/login">Login</Link>
               </Button>
            </nav>

             <div className="flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Languages className="h-5 w-5" />
                      <span className="sr-only">Change language</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleLanguageToggle('English')}>English</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLanguageToggle('Bangla')}>বাংলা</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

               <Label htmlFor="dark-mode-toggle" className="sr-only">Dark Mode</Label>
                <Switch
                  id="dark-mode-toggle"
                  checked={theme === 'dark'}
                  onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  aria-label="Toggle dark mode"
                />
                <span className="text-sm text-muted-foreground hidden sm:inline">
                   {theme === 'dark' ? <Moon className="h-5 w-5"/> : <Sun className="h-5 w-5"/> }
                 </span>

               <DropdownMenu>
                  <DropdownMenuTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6"/>
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild><Link to="/">Home</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link to="/about-us">About Us</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link to="/results">Results</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link to="/contribute">Contribute</Link></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild><Link to="/register-student">Register as Student</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link to="/register-tutor">Register as Tutor</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link to="/login">Login</Link></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <div className="flex items-center justify-between w-full">
                        <span>Dark Mode</span>
                        <Switch
                          checked={theme === 'dark'}
                          onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                          className="ml-2"
                        />
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
          </div>
        </motion.header>
      );
    };

    export default Header;
  