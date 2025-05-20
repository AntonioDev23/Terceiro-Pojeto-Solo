
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, BookOpen, Cpu, Server, GitBranch } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CodeBlock from '@/components/CodeBlock';

const ProgrammingPage = () => {
  return (
    <div className="space-y-12">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight">Programação</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Aprenda conceitos fundamentais de programação e paradigmas
          </p>
        </motion.div>
      </section>
      
      <section>
        <Tabs defaultValue="oop" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="oop">Orientação a Objetos</TabsTrigger>
            <TabsTrigger value="functional">Programação Funcional</TabsTrigger>
            <TabsTrigger value="async">Programação Assíncrona</TabsTrigger>
            <TabsTrigger value="patterns">Padrões de Projeto</TabsTrigger>
          </TabsList>
          
          <TabsContent value="oop" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Terminal className="h-5 w-5 text-primary" />
                      <CardTitle>Programação Orientada a Objetos</CardTitle>
                    </div>
                    <CardDescription>
                      A Programação Orientada a Objetos (POO) é um paradigma baseado no conceito de "objetos", que podem conter dados e código.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Pilares da POO:</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="encapsulation">
                            <AccordionTrigger>Encapsulamento</AccordionTrigger>
                            <AccordionContent>
                              O encapsulamento é o conceito de esconder os detalhes de implementação e expor apenas o necessário. Isso é feito usando modificadores de acesso (public, private, protected) para controlar o acesso aos atributos e métodos de uma classe.
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="inheritance">
                            <AccordionTrigger>Herança</AccordionTrigger>
                            <AccordionContent>
                              A herança permite que uma classe (subclasse) herde atributos e métodos de outra classe (superclasse). Isso promove a reutilização de código e estabelece uma relação "é um" entre classes.
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="polymorphism">
                            <AccordionTrigger>Polimorfismo</AccordionTrigger>
                            <AccordionContent>
                              O polimorfismo permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum. Isso pode ser alcançado através de sobrecarga de métodos, sobrescrita de métodos e interfaces.
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="abstraction">
                            <AccordionTrigger>Abstração</AccordionTrigger>
                            <AccordionContent>
                              A abstração é o processo de identificar as características essenciais de um objeto e ignorar o resto. Classes abstratas e interfaces são mecanismos que suportam a abstração.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
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
                  title="Exemplo de Classe em JavaScript"
                  code={`// Definição de uma classe
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  // Método
  speak() {
    console.log(\`\${this.name} faz um som.\`);
  }
}

// Herança
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Chama o construtor da classe pai
    this.breed = breed;
  }
  
  // Sobrescrita de método
  speak() {
    console.log(\`\${this.name} late: Woof!\`);
  }
  
  // Método adicional
  fetch() {
    console.log(\`\${this.name} busca a bola!\`);
  }
}

// Criando instâncias
const animal = new Animal('Animal');
animal.speak(); // "Animal faz um som."

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // "Rex late: Woof!"
dog.fetch(); // "Rex busca a bola!"

// Polimorfismo
function makeSpeak(animal) {
  animal.speak();
}

makeSpeak(animal); // "Animal faz um som."
makeSpeak(dog); // "Rex late: Woof!"`}
                />
                
                <div className="mt-6 rounded-lg border bg-card p-6">
                  <h3 className="font-medium">Diagrama de Classes</h3>
                  <div className="mt-4">
                    <div className="rounded-t-md border bg-muted p-2 text-center font-medium">
                      Animal
                    </div>
                    <div className="border-x border-b p-2">
                      <div className="text-sm">- name: String</div>
                    </div>
                    <div className="border-x border-b p-2">
                      <div className="text-sm">+ speak(): void</div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="h-8 w-0.5 bg-border"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-4 border-t"></div>
                    </div>
                    
                    <div className="rounded-t-md border bg-muted p-2 text-center font-medium">
                      Dog
                    </div>
                    <div className="border-x border-b p-2">
                      <div className="text-sm">- breed: String</div>
                    </div>
                    <div className="border-x border-b p-2">
                      <div className="text-sm">+ speak(): void</div>
                      <div className="text-sm">+ fetch(): void</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="functional" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      <CardTitle>Programação Funcional</CardTitle>
                    </div>
                    <CardDescription>
                      A Programação Funcional é um paradigma que trata a computação como a avaliação de funções matemáticas e evita estados mutáveis e dados compartilhados.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Conceitos Fundamentais:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• <strong>Funções Puras:</strong> Sempre retornam o mesmo resultado para os mesmos argumentos e não têm efeitos colaterais.</li>
                          <li>• <strong>Imutabilidade:</strong> Os dados não são alterados após a criação.</li>
                          <li>• <strong>Funções de Primeira Classe:</strong> Funções são tratadas como valores, podendo ser passadas como argumentos e retornadas de outras funções.</li>
                          <li>• <strong>Funções de Ordem Superior:</strong> Funções que operam em outras funções.</li>
                          <li>• <strong>Recursão:</strong> Preferência por recursão em vez de iteração com loops.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Vantagens:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Código mais previsível e fácil de testar</li>
                          <li>• Redução de bugs relacionados a estados mutáveis</li>
                          <li>• Facilidade para paralelização</li>
                          <li>• Composição de funções para criar soluções complexas</li>
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
                  title="Exemplos de Programação Funcional em JavaScript"
                  code={`// Função pura
function add(a, b) {
  return a + b;
}

// Imutabilidade
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4]; // Cria um novo array em vez de modificar o original
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]

// Funções de ordem superior
const numbers = [1, 2, 3, 4, 5];

// map: transforma cada elemento
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: seleciona elementos que satisfazem uma condição
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce: acumula valores
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// Composição de funções
const compose = (f, g) => x => f(g(x));
const addOne = x => x + 1;
const double = x => x * 2;
const addOneThenDouble = compose(double, addOne);

console.log(addOneThenDouble(3)); // 8 (3+1)*2

// Recursão em vez de loops
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120`}
                />
                
                <div className="mt-6 rounded-lg border bg-card p-6">
                  <h3 className="font-medium">Comparação: Imperativo vs Funcional</h3>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="font-medium text-sm">Abordagem Imperativa</div>
                      <pre className="mt-2 rounded bg-muted p-2 text-xs">
{`let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum); // 15`}
                      </pre>
                    </div>
                    
                    <div>
                      <div className="font-medium text-sm">Abordagem Funcional</div>
                      <pre className="mt-2 rounded bg-muted p-2 text-xs">
{`const sum = [1, 2, 3, 4, 5]
  .reduce((acc, n) => acc + n, 0);
console.log(sum); // 15`}
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="async" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-primary" />
                      <CardTitle>Programação Assíncrona</CardTitle>
                    </div>
                    <CardDescription>
                      A programação assíncrona permite que operações sejam executadas sem bloquear a execução do programa, melhorando a eficiência e a responsividade.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Conceitos Fundamentais:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• <strong>Callbacks:</strong> Funções passadas como argumentos para serem executadas após a conclusão de uma operação.</li>
                          <li>• <strong>Promises:</strong> Objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona.</li>
                          <li>• <strong>Async/Await:</strong> Sintaxe que facilita a escrita de código assíncrono de forma mais legível.</li>
                          <li>• <strong>Event Loop:</strong> Mecanismo que permite a execução de código assíncrono em JavaScript.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Aplicações:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• Requisições de rede (HTTP)</li>
                          <li>• Operações de I/O (leitura/escrita de arquivos)</li>
                          <li>• Temporizadores e intervalos</li>
                          <li>• Processamento de grandes volumes de dados</li>
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
                  title="Exemplos de Programação Assíncrona em JavaScript"
                  code={`// Callback
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback('Dados obtidos com callback');
  }, 1000);
}

fetchDataWithCallback(data => {
  console.log(data); // 'Dados obtidos com callback'
});

// Promise
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dados obtidos com promise');
      // Em caso de erro: reject(new Error('Falha ao obter dados'));
    }, 1000);
  });
}

fetchDataWithPromise()
  .then(data => {
    console.log(data); // 'Dados obtidos com promise'
  })
  .catch(error => {
    console.error(error);
  });

// Async/Await
async function fetchData() {
  try {
    const data = await fetchDataWithPromise();
    console.log(data); // 'Dados obtidos com promise'
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// Exemplo prático: Requisição HTTP
async function fetchUser(id) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${id}\`);
    
    if (!response.ok) {
      throw new Error('Falha ao obter usuário');
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}`}
                />
                
                <div className="mt-6 rounded-lg border bg-card p-6">
                  <h3 className="font-medium">Evolução da Programação Assíncrona</h3>
                  <div className="mt-4 space-y-6">
                    <div>
                      <div className="font-medium text-sm">1. Callback Hell</div>
                      <pre className="mt-2 rounded bg-muted p-2 text-xs">
{`getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getYetEvenMoreData(c, function(d) {
        getFinalData(d, function(result) {
          console.log(result);
        });
      });
    });
  });
});`}
                      </pre>
                    </div>
                    
                    <div>
                      <div className="font-medium text-sm">2. Promises</div>
                      <pre className="mt-2 rounded bg-muted p-2 text-xs">
{`getData()
  .then(a => getMoreData(a))
  .then(b => getEvenMoreData(b))
  .then(c => getYetEvenMoreData(c))
  .then(d => getFinalData(d))
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });`}
                      </pre>
                    </div>
                    
                    <div>
                      <div className="font-medium text-sm">3. Async/Await</div>
                      <pre className="mt-2 rounded bg-muted p-2 text-xs">
{`async function processData() {
  try {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMoreData(b);
    const d = await getYetEvenMoreData(c);
    const result = await getFinalData(d);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

processData();`}
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="patterns" className="mt-6">
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
                      <CardTitle>Padrões de Projeto</CardTitle>
                    </div>
                    <CardDescription>
                      Padrões de projeto são soluções típicas para problemas comuns em design de software. Eles são como plantas pré-fabricadas que você pode personalizar para resolver um problema recorrente em seu código.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Categorias de Padrões:</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• <strong>Padrões Criacionais:</strong> Lidam com mecanismos de criação de objetos.</li>
                          <li>• <strong>Padrões Estruturais:</strong> Explicam como montar objetos e classes em estruturas maiores.</li>
                          <li>• <strong>Padrões Comportamentais:</strong> Cuidam da comunicação eficiente entre objetos.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium">Padrões Comuns:</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="singleton">
                            <AccordionTrigger>Singleton (Criacional)</AccordionTrigger>
                            <AccordionContent>
                              Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela. Útil para serviços compartilhados como conexões de banco de dados ou caches.
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="factory">
                            <AccordionTrigger>Factory Method (Criacional)</AccordionTrigger>
                            <AccordionContent>
                              Define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe instanciar. Permite que uma classe adie a instanciação para subclasses.
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="observer">
                            <AccordionTrigger>Observer (Comportamental)</AccordionTrigger>
                            <AccordionContent>
                              Define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="strategy">
                            <AccordionTrigger>Strategy (Comportamental)</AccordionTrigger>
                            <AccordionContent>
                              Define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis. Permite que o algoritmo varie independentemente dos clientes que o utilizam.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
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
                  title="Exemplo de Padrão Singleton em JavaScript"
                  code={`class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    
    // Inicialização
    this.data = [];
    Singleton.instance = this;
  }
  
  addItem(item) {
    this.data.push(item);
  }
  
  getItems() {
    return this.data;
  }
}

// Uso
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true

instance1.addItem('item 1');
console.log(instance2.getItems()); // ['item 1']`}
                />
                
                <CodeBlock
                  title="Exemplo de Padrão Observer em JavaScript"
                  code={`class Subject {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }
  
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  
  update(data) {
    console.log(\`\${this.name} recebeu: \${data}\`);
  }
}

// Uso
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Notificação importante!');
// Observer 1 recebeu: Notificação importante!
// Observer 2 recebeu: Notificação importante!

subject.unsubscribe(observer1);
subject.notify('Segunda notificação');
// Observer 2 recebeu: Segunda notificação`}
                />
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default ProgrammingPage;
