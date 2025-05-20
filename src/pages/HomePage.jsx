
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, BookOpen, Cpu, Server } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import TopicCard from '@/components/TopicCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const HomePage = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      
      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Principais Tópicos
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Explore os fundamentos da ciência da computação com nossos recursos interativos.
            </p>
          </motion.div>
          
          <Tabs defaultValue="all" className="w-full max-w-4xl mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="popular">Populares</TabsTrigger>
              <TabsTrigger value="new">Novos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <TopicCard
                  title="Algoritmos de Ordenação"
                  description="Aprenda os principais algoritmos de ordenação e suas complexidades."
                  icon={<Code2 className="h-5 w-5" />}
                  to="/algoritmos"
                  difficulty="Médio"
                />
                
                <TopicCard
                  title="Estruturas de Dados"
                  description="Explore listas, árvores, grafos e outras estruturas fundamentais."
                  icon={<Database className="h-5 w-5" />}
                  to="/estruturas-de-dados"
                  difficulty="Médio"
                />
                
                <TopicCard
                  title="Programação Orientada a Objetos"
                  description="Entenda os conceitos de classes, objetos, herança e polimorfismo."
                  icon={<Terminal className="h-5 w-5" />}
                  to="/programacao"
                  difficulty="Fácil"
                />
                
                <TopicCard
                  title="Complexidade de Algoritmos"
                  description="Aprenda a analisar a eficiência de algoritmos com notação Big O."
                  icon={<Cpu className="h-5 w-5" />}
                  to="/algoritmos"
                  difficulty="Difícil"
                />
                
                <TopicCard
                  title="Recursão"
                  description="Domine o conceito de recursão e resolva problemas complexos."
                  icon={<BookOpen className="h-5 w-5" />}
                  to="/programacao"
                  difficulty="Médio"
                />
                
                <TopicCard
                  title="Bancos de Dados"
                  description="Entenda os fundamentos de bancos de dados relacionais e NoSQL."
                  icon={<Server className="h-5 w-5" />}
                  to="/estruturas-de-dados"
                  difficulty="Médio"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="popular" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <TopicCard
                  title="Algoritmos de Ordenação"
                  description="Aprenda os principais algoritmos de ordenação e suas complexidades."
                  icon={<Code2 className="h-5 w-5" />}
                  to="/algoritmos"
                  difficulty="Médio"
                />
                
                <TopicCard
                  title="Estruturas de Dados"
                  description="Explore listas, árvores, grafos e outras estruturas fundamentais."
                  icon={<Database className="h-5 w-5" />}
                  to="/estruturas-de-dados"
                  difficulty="Médio"
                />
                
                <TopicCard
                  title="Programação Orientada a Objetos"
                  description="Entenda os conceitos de classes, objetos, herança e polimorfismo."
                  icon={<Terminal className="h-5 w-5" />}
                  to="/programacao"
                  difficulty="Fácil"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <TopicCard
                  title="Complexidade de Algoritmos"
                  description="Aprenda a analisar a eficiência de algoritmos com notação Big O."
                  icon={<Cpu className="h-5 w-5" />}
                  to="/algoritmos"
                  difficulty="Difícil"
                />
                
                <TopicCard
                  title="Recursão"
                  description="Domine o conceito de recursão e resolva problemas complexos."
                  icon={<BookOpen className="h-5 w-5" />}
                  to="/programacao"
                  difficulty="Médio"
                />
                
                <TopicCard
                  title="Bancos de Dados"
                  description="Entenda os fundamentos de bancos de dados relacionais e NoSQL."
                  icon={<Server className="h-5 w-5" />}
                  to="/estruturas-de-dados"
                  difficulty="Médio"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="bg-muted/50 py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Aprenda na Prática
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nossa plataforma oferece exemplos práticos e interativos para ajudar você a entender conceitos complexos de ciência da computação.
              </p>
              <ul className="mt-6 space-y-3">
                <FeatureItem>Exemplos de código interativos</FeatureItem>
                <FeatureItem>Visualizações de algoritmos</FeatureItem>
                <FeatureItem>Exercícios práticos</FeatureItem>
                <FeatureItem>Explicações detalhadas</FeatureItem>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg border bg-card p-6 shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="code-block">
                  <pre className="text-sm">
                    <code>
{`// Exemplo de algoritmo de ordenação
function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Troca os elementos
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}

// Teste
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array));`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureItem = ({ children }) => (
  <li className="flex items-center gap-2">
    <div className="h-2 w-2 rounded-full bg-primary" />
    <span>{children}</span>
  </li>
);

export default HomePage;
