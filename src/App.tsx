import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import EngageModel from "./pages/EngageModel";
import Workflow from "./pages/Workflow";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AccountingBookkeeping from "./pages/services/AccountingBookkeeping";
import ManagementAccounting from "./pages/services/ManagementAccounting";
import PayrollManagement from "./pages/services/PayrollManagement";
import VATReturn from "./pages/services/VATReturn";
import YearEndAccounting from "./pages/services/YearEndAccounting";
// import AccountsReceivable from "./pages/services/AccountsReceivable";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/accounting-bookkeeping" element={<AccountingBookkeeping />} />
              <Route path="/services/management-accounting" element={<ManagementAccounting />} />
              <Route path="/services/payroll-management" element={<PayrollManagement />} />
              <Route path="/services/VAT-return" element={<VATReturn />} />
              <Route path="/services/year-end-accounting" element={<YearEndAccounting />} />
              {/* <Route path="/services/accounts-receivable" element={<AccountsReceivable />} /> */}
              <Route path="/engage-model" element={<EngageModel />} />
              <Route path="/workflow" element={<Workflow />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
