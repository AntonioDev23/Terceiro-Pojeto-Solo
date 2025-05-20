
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Code2, Database, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();
  
  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };
  
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
      
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={open ? 'open' : 'closed'}
        className="fixed top-0 left-0 z-50 h-full w-72 border-r bg-background p-6 shadow-lg md:static md:z-0 md:h-auto md:w-64 md:shadow-none"
      >
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CSHub</span>
          </Link>
          
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Fechar menu</span>
          </Button>
        </div>
        
        <nav className="space-y-2">
          <SidebarLink 
            to="/" 
            icon={<Home className="h-5 w-5" />} 
            active={location.pathname === "/"} 
            onClick={() => setOpen(false)}
            variants={itemVariants}
          >
            Início
          </SidebarLink>
          
          <SidebarLink 
            to="/algoritmos" 
            icon={<Code2 className="h-5 w-5" />} 
            active={location.pathname === "/algoritmos"} 
            onClick={() => setOpen(false)}
            variants={itemVariants}
          >
            Algoritmos
          </SidebarLink>
          
          <SidebarLink 
            to="/estruturas-de-dados" 
            icon={<Database className="h-5 w-5" />} 
            active={location.pathname === "/estruturas-de-dados"} 
            onClick={() => setOpen(false)}
            variants={itemVariants}
          >
            Estruturas de Dados
          </SidebarLink>
          
          <SidebarLink 
            to="/programacao" 
            icon={<Terminal className="h-5 w-5" />} 
            active={location.pathname === "/programacao"} 
            onClick={() => setOpen(false)}
            variants={itemVariants}
          >
            Programação
          </SidebarLink>
        </nav>
      </motion.aside>
    </>
  );
};

const SidebarLink = ({ to, icon, active, onClick, variants, children }) => {
  return (
    <motion.div variants={variants}>
      <Link
        to={to}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
          active 
            ? 'bg-accent text-accent-foreground' 
            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
        }`}
        onClick={onClick}
      >
        {icon}
        <span>{children}</span>
      </Link>
    </motion.div>
  );
};

export default Sidebar;
