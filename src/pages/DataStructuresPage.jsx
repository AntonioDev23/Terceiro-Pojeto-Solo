
import React from 'react';
import { motion } from 'framer-motion';
import { Database, List, GitBranch, Network, BarChart4, Layers } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CodeBlock from '@/components/CodeBlock';

const DataStructuresPage = () => {
  return (
    <div className="space-y-12">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight">Estruturas de Dados</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Explore as principais estruturas de dados e suas aplicações
          </p>
        </motion.div>
      </section>
      
      <section>
        <Tabs defaultValue="arrays" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="arrays">Arrays</TabsTrigger>
            <TabsTrigger value="linked-lists">Listas Ligadas</TabsTrigger>
            <TabsTrigger value="trees">Árvores</TabsTrigger>
            <TabsTrigger value="graphs">Grafos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="arrays" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <List className="h-5 w-5 text-primary" />
                      <CardTitle>Arrays</CardTitle>
                    </div>
                    <CardDescription>
                      Arrays são estruturas de dados que armazenam elementos do mesmo tipo em posições contíguas de memória.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Características:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Acesso direto a qualquer elemento por índice - O(1)</li>
                          <li>• Tamanho fixo em algumas linguagens</li>
                          <li>• Elementos armazenados em posições contíguas de memória</li>
                          <li>• Inserção/remoção no final - O(1), no início/meio - O(n)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Aplicações:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Armazenamento de dados homogêneos</li>
                          <li>• Implementação de outras estruturas (pilhas, filas)</li>
                          <li>• Algoritmos de ordenação e busca</li>
                          <li>• Matrizes multidimensionais</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CodeBlock
                  title="Implementação de Array em JavaScript"
                  code={`// Criando um array
const array = [1, 2, 3, 4, 5];

// Acessando elementos
console.log(array[0]); // 1
console.log(array[2]); // 3

// Adicionando elementos
array.push(6); // Adiciona ao final
array.unshift(0); // Adiciona ao início

// Removendo elementos
array.pop(); // Remove do final
array.shift(); // Remove do início

// Iterando sobre um array
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Métodos úteis
const doubled = array.map(x => x * 2); // [2, 4, 6, 8, 10]
const filtered = array.filter(x => x > 2); // [3, 4, 5]
const sum = array.reduce((acc, val) => acc + val, 0); // 15`}
                />
                
                <div className="mt-6 rounded-lg border bg-card p-6">
                  <h3 className="font-medium">Visualização de Array</h3>
                  <div className="mt-4 flex space-x-2">
                    {[1, 2, 3, 4, 5].map((value, index) => (
                      <div 
                        key={index}
                        className="flex h-12 w-12 items-center justify-center rounded-md border bg-muted text-center"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex space-x-2">
                    {[0, 1, 2, 3, 4].map((value, index) => (
                      <div 
                        key={index}
                        className="flex h-6 w-12 items-center justify-center text-xs text-muted-foreground"
                      >
                        índice {value}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="linked-lists" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <GitBranch className="h-5 w-5 text-primary" />
                      <CardTitle>Listas Ligadas</CardTitle>
                    </div>
                    <CardDescription>
                      Listas ligadas são estruturas de dados lineares onde cada elemento (nó) contém dados e uma referência para o próximo nó.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Características:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Elementos não são armazenados em posições contíguas</li>
                          <li>• Acesso sequencial aos elementos - O(n)</li>
                          <li>• Inserção/remoção eficiente em qualquer posição - O(1)</li>
                          <li>• Tamanho dinâmico</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Tipos:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Lista Simplesmente Ligada: cada nó aponta para o próximo</li>
                          <li>• Lista Duplamente Ligada: cada nó aponta para o próximo e o anterior</li>
                          <li>• Lista Circular: o último nó aponta para o primeiro</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CodeBlock
                  title="Implementação de Lista Ligada em JavaScript"
                  code={`class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Adiciona um elemento ao final da lista
  append(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    
    this.size++;
  }
  
  // Insere um elemento em uma posição específica
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return false;
    }
    
    const newNode = new Node(data);
    
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let count = 0;
      
      while (count < index) {
        prev = current;
        current = current.next;
        count++;
      }
      
      newNode.next = current;
      prev.next = newNode;
    }
    
    this.size++;
    return true;
  }
}`}
                />
                
                <div className="mt-6 rounded-lg border bg-card p-6">
                  <h3 className="font-medium">Visualização de Lista Ligada</h3>
                  <div className="mt-4 flex items-center space-x-2">
                    {[10, 20, 30].map((value, index) => (
                      <React.Fragment key={index}>
                        <div className="flex flex-col items-center">
                          <div className="flex h-12 w-20 items-center justify-center rounded-md border bg-muted">
                            <div className="text-center">{value}</div>
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">Nó {index + 1}</div>
                        </div>
                        {index < 2 && (
                          <div className="text-muted-foreground">→</div>
                        )}
                      </React.Fragment>
                    ))}
                    <div className="text-muted-foreground">→ null</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="trees" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <GitBranch className="h-5 w-5 text-primary" />
                      <CardTitle>Árvores</CardTitle>
                    </div>
                    <CardDescription>
                      Árvores são estruturas de dados hierárquicas com um nó raiz e subárvores de filhos com um nó pai.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Características:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Estrutura hierárquica (não linear)</li>
                          <li>• Cada nó pode ter zero ou mais filhos</li>
                          <li>• Útil para representar relações hierárquicas</li>
                          <li>• Operações de busca, inserção e remoção eficientes</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Tipos:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Árvore Binária: cada nó tem no máximo dois filhos</li>
                          <li>• Árvore Binária de Busca (BST): ordenada para busca eficiente</li>
                          <li>• Árvore AVL: BST balanceada</li>
                          <li>• Árvore B: otimizada para sistemas de armazenamento</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CodeBlock
                  title="Implementação de Árvore Binária de Busca em JavaScript"
                  code={`class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  // Insere um valor na árvore
  insert(data) {
    const newNode = new Node(data);
    
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    
    const insertNode = (node, newNode) => {
      // Se o valor for menor, vai para a esquerda
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } 
      // Se o valor for maior, vai para a direita
      else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };
    
    insertNode(this.root, newNode);
  }
  
  // Busca um valor na árvore
  search(data) {
    const searchNode = (node, data) => {
      if (node === null) {
        return false;
      }
      
      if (data === node.data) {
        return true;
      }
      
      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    };
    
    return searchNode(this.root, data);
  }
}`}
                />
                
                <div className="mt-6 rounded-lg border bg-card p-6">
                  <h3 className="font-medium">Visualização de Árvore Binária</h3>
                  <div className="mt-4 flex justify-center">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-muted">
                        20
                      </div>
                      <div className="relative mt-4 flex w-40 justify-between">
                        <div className="flex flex-col items-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-muted">
                            10
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-muted">
                            30
                          </div>
                        </div>
                        <div className="absolute left-0 right-0 top-[-20px] h-8 border-b border-l border-r"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="graphs" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Network className="h-5 w-5 text-primary" />
                      <CardTitle>Grafos</CardTitle>
                    </div>
                    <CardDescription>
                      Grafos são estruturas de dados não lineares que consistem em vértices (nós) e arestas que conectam esses vértices.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Características:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Representam relações entre objetos</li>
                          <li>• Podem ser direcionados ou não direcionados</li>
                          <li>• Podem ter pesos nas arestas</li>
                          <li>• Úteis para modelar redes, mapas, relações sociais</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Representações:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Matriz de Adjacência: matriz que indica conexões</li>
                          <li>• Lista de Adjacência: lista de vizinhos para cada vértice</li>
                          <li>• Matriz de Incidência: matriz que relaciona vértices e arestas</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CodeBlock
                  title="Implementação de Grafo com Lista de Adjacência em JavaScript"
                  code={`class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  // Adiciona um vértice ao grafo
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  // Adiciona uma aresta entre dois vértices
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1); // Para grafo não direcionado
  }
  
  // Remove uma aresta entre dois vértices
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
  
  // Remove um vértice e todas as suas arestas
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}`}
                />
                
                <div className="mt-6 rounded-lg border bg-card p-6">
                  <h3 className="font-medium">Visualização de Grafo</h3>
                  <div className="mt-4 flex justify-center">
                    <svg width="200" height="150" viewBox="0 0 200 150">
                      {/* Vértices */}
                      <circle cx="50" cy="50" r="20" fill="#3b82f6" />
                      <text x="50" y="55" textAnchor="middle" fill="white">A</text>
                      
                      <circle cx="150" cy="50" r="20" fill="#3b82f6" />
                      <text x="150" y="55" textAnchor="middle" fill="white">B</text>
                      
                      <circle cx="50" cy="120" r="20" fill="#3b82f6" />
                      <text x="50" y="125" textAnchor="middle" fill="white">C</text>
                      
                      <circle cx="150" cy="120" r="20" fill="#3b82f6" />
                      <text x="150" y="125" textAnchor="middle" fill="white">D</text>
                      
                      {/* Arestas */}
                      <line x1="70" y1="50" x2="130" y2="50" stroke="white" strokeWidth="2" />
                      <line x1="50" y1="70" x2="50" y2="100" stroke="white" strokeWidth="2" />
                      <line x1="70" y1="60" x2="130" y2="110" stroke="white" strokeWidth="2" />
                      <line x1="70" y1="120" x2="130" y2="120" stroke="white" strokeWidth="2" />
                      <line x1="150" y1="70" x2="150" y2="100" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Comparação de Estruturas de Dados</h2>
        
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Estrutura</th>
                <th className="px-4 py-3 text-left font-medium">Acesso</th>
                <th className="px-4 py-3 text-left font-medium">Busca</th>
                <th className="px-4 py-3 text-left font-medium">Inserção</th>
                <th className="px-4 py-3 text-left font-medium">Remoção</th>
                <th className="px-4 py-3 text-left font-medium">Uso de Memória</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">Array</td>
                <td className="px-4 py-3 text-green-500">O(1)</td>
                <td className="px-4 py-3 text-yellow-500">O(n)</td>
                <td className="px-4 py-3 text-yellow-500">O(n)</td>
                <td className="px-4 py-3 text-yellow-500">O(n)</td>
                <td className="px-4 py-3 text-green-500">Baixo</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Lista Ligada</td>
                <td className="px-4 py-3 text-yellow-500">O(n)</td>
                <td className="px-4 py-3 text-yellow-500">O(n)</td>
                <td className="px-4 py-3 text-green-500">O(1)</td>
                <td className="px-4 py-3 text-green-500">O(1)</td>
                <td className="px-4 py-3 text-yellow-500">Médio</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">Árvore Binária de Busca</td>
                <td className="px-4 py-3 text-yellow-500">O(log n)</td>
                <td className="px-4 py-3 text-yellow-500">O(log n)</td>
                <td className="px-4 py-3 text-yellow-500">O(log n)</td>
                <td className="px-4 py-3 text-yellow-500">O(log n)</td>
                <td className="px-4 py-3 text-yellow-500">Médio</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Grafo</td>
                <td className="px-4 py-3 text-yellow-500">O(n)</td>
                <td className="px-4 py-3 text-yellow-500">O(n)</td>
                <td className="px-4 py-3 text-yellow-500">O(1)</td>
                <td className="px-4 py-3 text-yellow-500">O(n)</td>
                <td className="px-4 py-3 text-red-500">Alto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DataStructuresPage;
