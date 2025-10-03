import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
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
      { path: '/services/management-accounting', label: 'Management Accounting' },
      { path: '/services/year-end-accounting', label: 'Year-End Accounting' },
      { path: '/services/VAT-return', label: 'VAT Return' },
      { path: '/services/payroll-management', label: 'Payroll Management' },
      ]
    },
    { path: '/engage-model', label: 'ENGAGE MODEL' },
      { 
        path: '/workflow', 
        label: 'How We Work?',
        hasDropdown: true,
        dropdownItems: [
          { path: '/workflow#workflow-section', label: 'Workflow' },
          { path: '/workflow#work-methodology', label: 'Work Methodology' }
        ]
      },
    { path: '/contact', label: 'CONTACT US' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
  <nav className="bg-white border-b border-amber-400 shadow-elegant sticky top-0 z-50 backdrop-blur-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative font-extrabold text-xl tracking-wider uppercase">
              <span className="relative z-10 text-amber-700 px-8 py-3">
                FINERA GLOBAL
              </span>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15)_70%,rgba(0,0,0,0)_100%)] blur-xl"></div>
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
                      className={`text-sm font-semibold tracking-wide transition-smooth px-3 py-2 rounded-md
                        ${isActive(item.path) || item.dropdownItems?.some(subItem => isActive(subItem.path))
                          ? 'text-amber-700 border-b-2 border-amber-500 bg-amber-50'
                          : 'text-neutral-800 hover:text-amber-700 hover:bg-amber-100'}
                      `}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.path} asChild>
                        {dropdownItem.path.startsWith('/workflow#') ? (
                          <a
                            href={dropdownItem.path}
                            className={`w-full px-3 py-2 rounded transition-smooth ${
                              window.location.hash === dropdownItem.path.replace('/workflow', '')
                                ? 'bg-amber-100 text-amber-700 font-semibold'
                                : 'hover:bg-amber-50 hover:text-amber-700 text-neutral-800'
                            }`}
                          >
                            {dropdownItem.label}
                          </a>
                        ) : (
                          <Link
                            to={dropdownItem.path}
                            className={`w-full px-3 py-2 rounded transition-smooth ${
                              isActive(dropdownItem.path)
                                ? 'bg-amber-100 text-amber-700 font-semibold'
                                : 'hover:bg-amber-50 hover:text-amber-700 text-neutral-800'
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold tracking-wide transition-smooth px-3 py-2 rounded-md
                    ${isActive(item.path)
                      ? 'text-amber-700 border-b-2 border-amber-500 bg-amber-50'
                      : 'text-neutral-800 hover:text-amber-700 hover:bg-amber-100'}
                  `}
                >
                  {item.label}
                </Link>
              )
            ))}
            

          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
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
          <div className="lg:hidden border-t border-amber-300 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.path}>
                    <div className="px-3 py-2 text-sm font-semibold tracking-wide text-amber-700">
                      {item.label}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        dropdownItem.path.startsWith('/workflow#') ? (
                          <a
                            key={dropdownItem.path}
                            href={dropdownItem.path}
                            className={`block px-3 py-2 text-sm font-semibold tracking-wide rounded transition-smooth ${
                              window.location.hash === dropdownItem.path.replace('/workflow', '')
                                ? 'text-amber-700 bg-amber-100'
                                : 'text-neutral-800 hover:text-amber-700 hover:bg-amber-100'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </a>
                        ) : (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className={`block px-3 py-2 text-sm font-semibold tracking-wide rounded transition-smooth ${
                              isActive(dropdownItem.path)
                                ? 'text-amber-700 bg-amber-100'
                                : 'text-neutral-800 hover:text-amber-700 hover:bg-amber-100'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 text-sm font-semibold tracking-wide rounded transition-smooth ${
                      isActive(item.path)
                        ? 'text-amber-700 bg-amber-100'
                        : 'text-neutral-800 hover:text-amber-700 hover:bg-amber-100'
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
}

export default Navigation;