
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TopicCard = ({ title, description, icon, to, difficulty }) => {
  const difficultyColor = {
    fácil: 'bg-green-500',
    médio: 'bg-yellow-500',
    difícil: 'bg-red-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full card-hover">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-primary/10 p-2">
              {icon}
            </div>
            {difficulty && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  Dificuldade:
                </span>
                <span className={`h-2 w-2 rounded-full ${difficultyColor[difficulty.toLowerCase()]}`} />
                <span className="text-xs font-medium">{difficulty}</span>
              </div>
            )}
          </div>
          <CardTitle className="mt-4">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-24 overflow-hidden">
            {/* Conteúdo do card */}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to={to}>
              <span>Explorar</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TopicCard;
