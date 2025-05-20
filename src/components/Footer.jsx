
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container px-4 py-6 md:px-6 md:py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">ComputerScienceHub</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Plataforma educacional para estudantes de ciência da computação.
            </p>
          </div>
          
          <div>
            <p className="font-medium">Recursos</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/algoritmos" className="text-muted-foreground hover:text-foreground">
                  Algoritmos
                </Link>
              </li>
              <li>
                <Link to="/estruturas-de-dados" className="text-muted-foreground hover:text-foreground">
                  Estruturas de Dados
                </Link>
              </li>
              <li>
                <Link to="/programacao" className="text-muted-foreground hover:text-foreground">
                  Programação
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Links Úteis</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://stackoverflow.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Stack Overflow
                </a>
              </li>
              <li>
                <a 
                  href="https://leetcode.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  LeetCode
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Contato</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:contato@cshub.com" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  contato@cshub.com
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ComputerScienceHub. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Feito com <Heart className="h-4 w-4 text-red-500" /> para estudantes de computação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
