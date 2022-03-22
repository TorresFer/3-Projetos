/*
15/02
- Surgimento da Web
- /* Conexão TCP/IP Padrão Layers -> 
- Endereços de IP -> IPV6 e IPV4:
- Portas
- IP máquina + Porta (Node manda para o Browser), ex: http://10.85.0.4:8080
- HTTP (Hyper Text Transfer Protocol): Conecta textos grandes. Baseado em Aplicação, 
Stateless e Cliente-Servidor
- Cliente > Servidor: URL + Params | Servidor > Cliente: JS, CSS...
- HTTPS é o protocolo mais seguro a ser utilizado: params, headers etc. são criptografados
- Client Side vs Server Side
- DNS
- Conteúdo Estático vs Dinamico
- HTML X CSS X JS

16/02
- HTTPS (S = Seguro): HTTP + SSL/TLS (TLS é a evolução 4 do SSL); 
reponsável por criptografar as urls e sem intereferência de meios
    - Tem opções pagas, mas tem o LetsEncrypt gratuito
    - Importante criptografar a aplicação inteira, não só uma pg
- Webservices: são integrações entre sistemas para fins de consumo de outros serviços
    - Comunicação feita através do formato textual XML ou JSON
- Arquitetura: SOA e de Microserviços
- Computação em Nuvem
    - Infraestruturas como serviço (AWS); Plataformas, prontas para jogar o Software na nuvem (GoogleCloud); 
    Software as a Service (SalesForce): vc pega o software e deixa do jeito que achar melhor.
HTML
    - <!-- Possui TAGS/chamadas PRÓPRIAS -->
    - Vc pode possuir TAGS personalizadas/próprias, principalmente utilizando Frameworks. Isso
    é a <<componentização>> e reutilização de códigos.
    - <!-- Estrutura e Semantica/Significado de cada TAG de HTML-->

<<HTML>>

17/02
- HTML
- CSS
    - Preprocessadores: SAS, LESS
    - Referencia as tags com "id" ou "class";
    - É referenciado por "."(atributo novo) ou "#" (id ou identificador maior já criado); 
    vc pode referenciar mais de uma classe com cores e tipos associados a uma TAG;
        - Pelo QuerySelector no browser, acha-se o elemento pelo ID(#), Classe (.) 
     - É possível colocar 2 classes em um span;
Live Server para referenciar http melhor. Simula o local para as páginas dinamicas e estáticas

18/02
- <!-- Fazendo requisição ajax e chamando o link de maneira que ele fique apenas na 
primeira página. Assim é anexado sempre em um único link tudo aquilo que vc quer em uma página-->
- Aprendendo a utilização das TAGS e seus objetivos
    - Chamando links externos e utilizando tags
- Criando Listas - Ordenadas (1., 2...), não Ordenadas (*) e Glossário
- Lista Aninhada
    - Como criar listas que se ocultam a cada click (onclick)

19/02
- URL Absoluta e Relativa;
- URL ancora e email
- <!-- referencia-se id com "#"--> <!--span.teste, cria classe-->
- Forms ->

21/02
- Imagens em HTML -> Imagens absolutas
    - Pode usar gifs de "Progresso ou loanding gifs"-->
    - PNG possui transparencia nas imagens-->
    - Class são sempre criadas em CSS, assim como "." "#"-->
- Vc pode referenciar todos os links das imagens e após isso criar Classes CSS para customizar as imagens, mudar o formato, as cores, cores do fundo...
- Vídeos em HTML: referenciando e exportando para web; criando e editando botões e barras de progresso do vídeo

22/02
- Vídeo
- Tags não visuais: Div (divisoes com componentes/elementos dentros), Span (); são agrupadores, assim vc pode colocar elementos e aplicar estilos
    - Semanticas: Traz significados por traz delas
    - As Famosas: div e span

div - divisao ou seção; ocupa uma linha.
span - agrupa elementos em uma linha/inline; comportamento podendo ser mudados em CSS

<<<CSS>>>
23/02
- CSS é muito flexível e possui diversas formas de fazer algo
    - O bootstrap é um FW de CSS que possui layouts prontos para criar as coisas, o que
    facilita muito na criação das aplicações; cria códigos mais simples
    - Aplica-se estilos com "Class" ou Classes, pois é o melhor caminho; mas vc pode usar id, tags etc
    - É sempre melhor com classes enxutas, para ter maior reuso de cógidos; diminuir a qntd de responsabilidades
    de um único seletor/classe
    - Utilize sempre as mesmas regras de nomeclaturas para seu CSS.
        - Estamos utilizando a nomeclatura "dash-case" para o padrão dos códigos!
    - CSS hj é dvidido em módulos independentes de criação: Flexbox, CSS grid...
- <<Criado a classe CSS em html>>
    - Utilizando CSS, HTML e JS (função para executar ou não o comando de inclusão de labels onde n tinha)
    - Customizando as listas e tags (paragrafos, div, sections etc...)
- <<Seletores>>
    - /* Tipos de Seletores: ., Elem, .Class, ID, #, atributos; Pseudo-classes e Pseudo-elementos  
        Combinação de Seletores: div + p (adjacent sibling)), div~p(general sibling)), div > p (child), 
        div p (filho/descendente)
    - Sempre selecione de maneira simples: html > class/id > elemento
- <<Especificidades do CSS>>: níveis de importancia determinam a execucação das classes criadas.
    - Especificidades: 1. Regra de importancia maior para o menor, "Important". Mas esse n é indicado.
        2. Seletores mais especificos
        3. Ultimo CSS processado (em caso de impate de importancia)
        4. "ID" tem mais importancia na hora de executar do que uma "class"

26/02
- Utilizando React e JSX(parece html só que em JS, para criar um contador), e aí a extensão Babbel transforma o JS
em formato HTML, para criação de elementos React. 
- Especificidades 2 do CSS (Ordem dos comandos que tem preferencia na mudança de cores, sobre os outros): 
    1. Inline
        2. ID
    3. Classe, Pseudo-Classe, atributo
    4. Elemento, Pseudo-Elementos
- Henrança: font-family, e como colocar herança por conta própria
- Box Model (Caixas que envolvem cada estilo criado em torno das tags):
    1. Conteudo
    2. Padding - Espaço colocado no texto/conteúdo criado pela tag; Podendo preencher de todos os lados
    3. Border
    4. Margin

28/02
- Box model 2: alinhando e estabelecendo cores e css dentro dos parametros de um box/caixa que envolve o elemento
    - Em algumas situações as Margens se sobrepõem. Fique atento a isso na criação de Styles
        - Use float: left/right; position: absolute; display: inline-block
- Display
    -  Utiliza-se em CSS Grid e Flex Box; outras opções
    - Display block, inline, inline-block
        - Comportamento estranho do inline-block(coloca as navegações em linha e bloqueia as separações)
        que pode separar ou não navegações dependendo da maneira colocada.
- Altura e Largura dos boxes
- Overflow: esconde ou cria rolagem em uma Divisão/Div para leitura completa de um texto/box
- Cores: Aleatórias; Paleta de Cores e Material Design; RGB (Red, Green, Blue) cada um tem o máx de 255, ex: 110, 110, 255
- Unidades: 
    - Abolutas: 
        - Pixel, cm ou mm.
    - Relativas:
        - Viewport(Tamanho visível da página) - VH(altura), VW(largura), sempre 1/100 ou 100/100;
        - Font-size - Rem e Em;
        - Viewp e Font - Utilizam %

01/03
- Unidades 2: As Relativas são mais usadas que as Absolutas, pois elas se ajustam ao tamanho da tela.
    - Relativas:
        - Font-size com "em", ex: 4em, que multiplica por 4 os pixels das palavras 
- Unidades 3: A % impacta a largura dos boxes nas páginas
- Texto: Editando texto; criando botões e estabeecendo regras
- Media Query:
    - Responsividade na posição e tamanho dos elementos
    - Vc pode n usar ele tbm ter boa responsividade dos elementos/estilos que aparecem nas diferentes telas

02/03
- Dicas Programação:
    - Leia códigos de outros. Entenda o raciocínio e aplique esse código.
    - Pratique, pratique! Crie algo relacionado ao mundo real; erre, erre, até ser bom.
        - O objetivo é criar e resolver algum problema!
- Desafio Menu
    - A "#" para criar os menus é em SSA(singlge page ap)
    - Criando classes para cada link setado;
    - Criando @meia para responsividade da página em telas menores
    - Criando cliques com rastros com script JS
- Desafio Card
    - Estabelecendo tamanhos, margens, alinhando itens, float e sombra no box
- Flex Box e CSS Grid (Grid é mais atual) e se complementam:
    - Flex Box: Layout/display flex, unidirecional (linha ou coluna)
        - O css possui Caixas/Conteainers; mas com FlexBox, que é marcado por display-flex, vc alinha o display
        e seus itens
    - CSS Grid: Layout macro da aplicação, ex: Header, Menu, Content, Footer... (linhas E colunas) 

04/03
- Flexbox
    - Ele faz os layouts na Web; Organiza no ReactNative ou tbm no Flutter; + Aplicado que o CSS Grid; 
        - Criando o flexbox -> display: flex
        - Alterando as estruturas desse box: tamanho, posição, ordem etc.
        - Testando funcionalidades; aumentando partes do box/grow e encolhendo/shrink
        - Aplicado tudo de uma vez: grow, shrink, basis
- Desafio Menu com Flex Box
    - Solução mais rápida e unidirecional
    - Cross Axis - e Main Axis |; que pode ser trocado com o 'flex-direction'
    - Revisão Flex Box com projeto utilizando Vue;

07/03 
- CSS3 
    - CSS Grid; obs. ele junto ao flexbox é excelente:
        - Aplicando possibilidades do CSSGrid
        - Ajustando tamanho de linhas e colunas a cada linha ou coluna no CSS Grid(grade)

08/03
- CSS Grid: organizando os elementos, posicionado em linhas e colunas diferentes e criando gaps
- CSS Grid 3: maneira mais simples de posicionamento
    - Posicionando as classes em grids
    - A aplicação fica responsiva, cabendo em qualquer dispositivo que esteja visualizando;
    exibe alguns elementos da página web/layout no mobile e todos no desktop
- Trabalhando com Eventos, manipulando DOM e integração entre HTML, CSS e JS
    - Arquivo ZIP dom com os exercícios
    - DOM: 
        - Document Object Model, representa a estrutura do HTML e o relacionamento entre os elementos, as tags.
            - Ele estrutura o HTML sem a necessidade de fazer um por um ou ajustes demorados no futuro

09/03
- DOM:
    - Selecionando elementos
        - Chamando elementos através do ID e selecionando uma lista de classe (classList.add)
        - Transformando HTML Collections em Array
        - Chamando HTML Collections através de uma classe
            - Pode se percorrer essa coleção e criar comando entre as estruturas do html chamado
        - Selecionado com o QuerySelectorAll (função que chama) de diversas maneiras, cada um dos elementos/classes

10/03
-  NetflixClone
    - Criando o React app com create-react-app
    - Importanto o React com React from 'react';
    - Utilizando fetch API para importar API
        - Importando de acordo com cada critério: generos, avaliações etc.
    - Importando TMDM from './Tmdb'; do arquivo
    - 

11/03
- DOM:
    - Acessando atributos através da DOM 
    - getattribute('scr') acessa Atributos Personalizados (ex <label for="compras"...>)
        - getAttribute, setAttribute, hasAttribute, removeAttribute
    - O importante desse capítulo é mostrar como o JS pode auxiliar a manipular o HTML
        - Ex: vc consegue selecionar um TAG e trocar o nome dela, sem precisar refazer ou procurar ela
        em códigos grandes ou Index grandes.
    - Nem sempre o atributo definido no HTML estará disponível com o mesmo nome a ser chamado pela dom
        - vc precisa incluir o 'html' "console.log(label.htmlFor)"
    - Acessando classes através da DOM; utiliza-se o "queryselecor('...').classList" !!!
        - É feito através do acesso a lista de classes

16/03
- Testes unitários:
    - Os testes são realizados a cada função ou método criado (ex: dentro de uma classe) dentro
    de uma aplicação. Porém, a maneira tradicional é executando o console.log() em cada etapa, 
    o que torna cansativo e repetitivo. E por esse motivo, é interessante usar aplicações como JEST ou DENO 
    para testar de maneira mais efetiva e rápida.
    - Vc n testa de maneira integra, ou seja, tudo que foi escrito no código, apenas uma parte;
    - Primeiro se faz os testes unitários, e só dps de aprender, faça os integrados com API etc.
    - Testes unitários podem ser feitos com Deno, JEST ou outros:
        - O exemplo do vídeo foi realizado com Typescript
        - Vc cria variáveis/const e digita a função ou a propriedade que vc quer testar
        - Abre o cmd e testa com "deno test"
- DOM
    - Mofificando HTML com o DOM
        - Criando Elementos CSS a partir do DOM e inserindo eles pelo Javascript no HTML
    - Em caso de uso de Framework, isso já não precisa mais ser feito, pois eles já fazem
    essa criação e integração dos elementos
        - A base é importante para entender melhor como os Frameworks funcionam

17/03
- Modificando html com o dom(document.queryselector)
- Controle dos Eventos com essa integração de JS com HTML
    - Design Patterns - Designs que servem como exemplo de solução de problemas de uma projeto
        - Ex: Padrão Observer
    - 1. É sempre bom ao manipular eventos (Ex: mudar o tempo de resposta de um click) de maneira explicita e 
    não implicita, colocando a ação no corpo da Div e tag HTML, e não no script criado, pois ficará escondido o que
    está ocorrendo
        - Além disso, é melhor ainda, depois de criar a função e seus parametros, criar um atributo personalizado
        que executará o comando criado, através do corpo da tag<a> HTML.
        - Sempre usando o dom para selecionar/integrar
    - 2. Eventos - Arrastando o elemento pela tela
    - 3. Drag and Drop - Troca o lado do elemento na tela; draggzone, dragstart, dragdrop...
    - 4.

18/03
- Curso HTML5, CSS3 e JS na prática
    - Criando Login-Helper:
        - Estruturando o HTML; criando aba de Login; criando a visualização ou n de Senha;

21/03
- Login-Helper criado:
    - HTML, CSS e JS; chamando classes no HTML; chamando HTML no JS com getelementbyID; estilizando a página;
    - Criando lógica no JS para visualização ou não da senha quando clicar no "eye" e "eyeSlash"


*/

