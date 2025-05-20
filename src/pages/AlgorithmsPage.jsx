
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Clock, BarChart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/CodeBlock';

const AlgorithmsPage = () => {
  return (
    <div className="space-y-12">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight">Algoritmos</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Explore os principais algoritmos e entenda como eles funcionam
          </p>
        </motion.div>
      </section>
      
      <section className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Algoritmos de Ordenação</h2>
          <p className="text-muted-foreground">
            Algoritmos de ordenação são métodos para reorganizar uma lista de elementos em uma certa ordem (geralmente em ordem crescente ou decrescente).
          </p>
          
          <div className="mt-6 space-y-6">
            <AlgorithmCard
              title="Bubble Sort"
              description="Um algoritmo simples que percorre repetidamente a lista, compara elementos adjacentes e os troca se estiverem na ordem errada."
              complexity="O(n²)"
              code={`function bubbleSort(arr) {
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
}`}
            />
            
            <AlgorithmCard
              title="Quick Sort"
              description="Um algoritmo eficiente que usa a estratégia de dividir para conquistar. Escolhe um elemento como pivô e particiona o array ao redor do pivô."
              complexity="O(n log n) - médio caso"
              code={`function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];
  
  for (let element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      equal.push(element);
    }
  }
  
  return [...quickSort(left), ...equal, ...quickSort(right)];
}`}
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Algoritmos de Busca</h2>
          <p className="text-muted-foreground">
            Algoritmos de busca são projetados para recuperar informações armazenadas dentro de alguma estrutura de dados.
          </p>
          
          <div className="mt-6 space-y-6">
            <AlgorithmCard
              title="Busca Linear"
              description="Verifica cada elemento da lista até encontrar o valor desejado ou chegar ao final da lista."
              complexity="O(n)"
              code={`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Retorna o índice do elemento encontrado
    }
  }
  return -1; // Retorna -1 se o elemento não for encontrado
}`}
            />
            
            <AlgorithmCard
              title="Busca Binária"
              description="Um algoritmo eficiente para encontrar um item em uma lista ordenada. Divide repetidamente pela metade a porção da lista que pode conter o item."
              complexity="O(log n)"
              code={`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Elemento encontrado
    }
    
    if (arr[mid] < target) {
      left = mid + 1; // Busca na metade direita
    } else {
      right = mid - 1; // Busca na metade esquerda
    }
  }
  
  return -1; // Elemento não encontrado
}`}
            />
          </div>
        </motion.div>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>O que é complexidade de algoritmo?</AccordionTrigger>
            <AccordionContent>
              A complexidade de um algoritmo é uma medida de quanto recurso (tempo ou espaço) um algoritmo precisa em relação ao tamanho da entrada. A notação Big O é usada para descrever o limite superior do tempo ou espaço necessário por um algoritmo.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>Qual é o melhor algoritmo de ordenação?</AccordionTrigger>
            <AccordionContent>
              Não existe um "melhor" algoritmo de ordenação para todas as situações. A escolha depende de vários fatores, como o tamanho dos dados, se os dados já estão parcialmente ordenados, restrições de memória, e se a estabilidade é importante. Algoritmos como QuickSort, MergeSort e HeapSort são geralmente eficientes para grandes conjuntos de dados.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>O que é um algoritmo estável?</AccordionTrigger>
            <AccordionContent>
              Um algoritmo de ordenação é considerado estável se ele mantém a ordem relativa dos elementos iguais. Por exemplo, se tivermos dois objetos com a mesma chave de ordenação, um algoritmo estável garantirá que o objeto que apareceu primeiro na entrada também apareça primeiro na saída.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger>Quando devo usar busca binária em vez de busca linear?</AccordionTrigger>
            <AccordionContent>
              A busca binária só pode ser usada em listas ordenadas, mas é muito mais eficiente que a busca linear para listas grandes. Se sua lista já está ordenada ou se você precisa fazer muitas buscas na mesma lista (tornando vantajoso ordená-la primeiro), a busca binária é preferível. Para listas pequenas ou não ordenadas onde ordenar seria mais custoso, a busca linear pode ser mais prática.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

const AlgorithmCard = ({ title, description, complexity, code }) => {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" />
          <h3 className="font-bold">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{complexity}</span>
        </div>
      </div>
      
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      
      <CodeBlock code={code} title={`${title} - Implementação`} />
      
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span>Eficiência</span>
          <span className="font-medium">
            {complexity === "O(n²)" ? "Baixa" : 
             complexity === "O(n log n) - médio caso" ? "Alta" : 
             complexity === "O(n)" ? "Média" : 
             complexity === "O(log n)" ? "Muito Alta" : ""}
          </span>
        </div>
        <Progress 
          value={
            complexity === "O(n²)" ? 30 : 
            complexity === "O(n log n) - médio caso" ? 80 : 
            complexity === "O(n)" ? 60 : 
            complexity === "O(log n)" ? 90 : 50
          } 
          className="mt-2 h-2" 
        />
      </div>
    </div>
  );
};

export default AlgorithmsPage;
