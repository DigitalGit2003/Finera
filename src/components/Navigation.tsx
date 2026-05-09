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
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Record<string, boolean>>({});
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
        label: 'HOW WE WORK?',
        hasDropdown: true,
        dropdownItems: [
          { path: '/workflow#workflow-section', label: 'Workflow' },
          { path: '/workflow#work-methodology', label: 'Work Methodology' }
        ]
      },
    { path: '/contact', label: 'CONTACT US' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const toggleMobileDropdown = (path: string) => {
    setOpenMobileDropdowns((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  return (
  <nav className="bg-white border-b border-amber-400 shadow-elegant sticky top-0 z-50 backdrop-blur-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-3 px-[1px] py-[1px] max-w-max">
              <img
              src="/FineraLogo.jpg"
              alt="Finera Global logo"
              className="h-14 md:h-16 lg:h-16 w-auto object-contain"
              />
              <div className="relative">
              <span className="text-blue-600 font-extrabold text-lg md:text-xl lg:text-2xl tracking-wider uppercase leading-none">
                FINERA GLOBAL
              </span>
              <div className="absolute inset-0 -z-10 rounded bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07)_60%,rgba(251,191,36,0.05)_100%)] blur-sm"></div>
              </div>
            </div>
          </Link>

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
                          ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50'
                          : 'text-neutral-800 hover:text-blue-600 hover:bg-blue-100'}
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
                                ? 'bg-blue-100 text-blue-600 font-semibold'
                                : 'hover:bg-blue-50 hover:text-blue-600 text-neutral-800'
                            }`}
                          >
                            {dropdownItem.label}
                          </a>
                        ) : (
                          <Link
                            to={dropdownItem.path}
                            className={`w-full px-3 py-2 rounded transition-smooth ${
                              isActive(dropdownItem.path)
                                ? 'bg-blue-100 text-blue-600 font-semibold'
                                : 'hover:bg-blue-50 hover:text-blue-600 text-neutral-800'
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
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(item.path)}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold tracking-wide text-amber-700 rounded hover:bg-amber-50"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openMobileDropdowns[item.path] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openMobileDropdowns[item.path] && (
                      <div className="ml-4 mt-1 space-y-1">
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
                    )}
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