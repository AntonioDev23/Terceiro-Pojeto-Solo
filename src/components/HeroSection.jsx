
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background animation */}
      <div className="absolute inset-0 animated-bg -z-10" />
      
      {/* Floating elements */}
      <FloatingIcon 
        icon={<Code className="h-8 w-8 text-blue-400" />} 
        x={-20} 
        y={-15} 
        delay={0} 
      />
      <FloatingIcon 
        icon={<Database className="h-6 w-6 text-purple-400" />} 
        x={25} 
        y={20} 
        delay={0.2} 
      />
      <FloatingIcon 
        icon={<Terminal className="h-7 w-7 text-green-400" />} 
        x={-15} 
        y={25} 
        delay={0.4} 
      />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Aprenda e Pratique <span className="gradient-text">Ciência da Computação</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Explore algoritmos, estruturas de dados e conceitos de programação com exemplos práticos e interativos.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button asChild size="lg" className="gap-2">
              <Link to="/algoritmos">
                Começar a Aprender
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/estruturas-de-dados">
                Explorar Estruturas de Dados
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FloatingIcon = ({ icon, x, y, delay }) => {
  return (
    <motion.div
      className="absolute hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0.8, 1],
        x: [0, x, x/2, x],
        y: [0, y, y/2, y]
      }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      style={{
        top: `${50 + Math.random() * 20}%`,
        left: `${50 + Math.random() * 20}%`,
      }}
    >
      {icon}
    </motion.div>
  );
};

export default HeroSection;
