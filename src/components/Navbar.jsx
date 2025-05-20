
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, BookOpen, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = ({ setSidebarOpen }) => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">
              <span className="gradient-text">ComputerScience</span>Hub
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" active={location.pathname === "/"}>
            Início
          </NavLink>
          <NavLink to="/algoritmos" active={location.pathname === "/algoritmos"}>
            Algoritmos
          </NavLink>
          <NavLink to="/estruturas-de-dados" active={location.pathname === "/estruturas-de-dados"}>
            Estruturas de Dados
          </NavLink>
          <NavLink to="/programacao" active={location.pathname === "/programacao"}>
            Programação
          </NavLink>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, active, children }) => {
  return (
    <Link 
      to={to} 
      className={`relative px-2 py-1 text-sm font-medium transition-colors ${
        active ? 'text-primary' : 'text-muted-foreground hover:text-primary'
      }`}
    >
      {children}
      {active && (
        <motion.div 
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default Navbar;
