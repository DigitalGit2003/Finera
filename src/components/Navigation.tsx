import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT FINERA' },
    { 
      path: '/services', 
      label: 'SERVICES',
      hasDropdown: true,
      dropdownItems: [
        { path: '/services', label: 'All Services' },
        { path: '/services/accounting-bookkeeping', label: 'Accounting & Bookkeeping' },
        { path: '/services/finalization-accounts', label: 'Finalization of Accounts' },
        { path: '/services/accounts-receivable', label: 'Accounts Receivable' },
        { path: '/services/accounts-payable', label: 'Accounts Payable' },
        { path: '/services/payroll-management', label: 'Payroll Management' },
        { path: '/services/vat-returns', label: 'VAT Returns' },
        { path: '/services/tax-preparations', label: 'Tax Preparations' },
        { path: '/services/management-accounting', label: 'Management Accounting' },
      ]
    },
    { path: '/engage-model', label: 'ENGAGE MODEL' },
    { path: '/workflow', label: 'WORKFLOW' },
    { path: '/contact', label: 'CONTACT US' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border shadow-elegant sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative font-extrabold text-xl tracking-wider uppercase">
              <span className="relative z-10 text-black px-8 py-3">
                FINERA GLOBAL
              </span>
              <div className="absolute inset-0 
                              bg-[radial-gradient(circle_at_center,rgba(251,191,36,1)_70%,rgba(0,0,0,0)_100%)] 
                              blur-xl"></div>
            </div>
          </Link>
          {/* <Link to="/" className="flex items-center">
            <div className="relative font-extrabold text-xl tracking-wider uppercase">
              
              <span className="relative z-10 text-black px-8 py-3 rounded-xl 
                              bg-gradient-to-r from-amber-500 to-yellow-700">
                FINERA GLOBAL
              </span>
              
              <div className="absolute inset-0 rounded-2xl 
                              bg-gradient-to-r from-amber-600/40 to-yellow-800/40 
                              blur-2xl"></div>
            </div>
          </Link> */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.path}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`text-sm font-medium tracking-wide transition-smooth hover:text-accent ${
                        isActive(item.path) || item.dropdownItems?.some(subItem => isActive(subItem.path))
                          ? 'text-accent border-b-2 border-accent'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.path} asChild>
                        <Link
                          to={dropdownItem.path}
                          className={`w-full ${
                            isActive(dropdownItem.path) ? 'bg-accent/10 text-accent' : ''
                          }`}
                        >
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium tracking-wide transition-smooth hover:text-accent ${
                    isActive(item.path)
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.path}>
                    <div className="px-3 py-2 text-sm font-medium tracking-wide text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className={`block px-3 py-2 text-sm font-medium tracking-wide transition-smooth ${
                            isActive(dropdownItem.path)
                              ? 'text-accent bg-accent/10'
                              : 'text-muted-foreground hover:text-accent hover:bg-accent/5'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 text-sm font-medium tracking-wide transition-smooth ${
                      isActive(item.path)
                        ? 'text-accent bg-accent/10'
                        : 'text-muted-foreground hover:text-accent hover:bg-accent/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;