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
        - O css possui Caixas/Conteainers; mas com FlexBox, que é marcado por display-flex, vc alinha o display e seus itens
    - CSS Grid: Layout macro da aplicação, ex: Header, Menu, Content, Footer... (linhas E colunas) 
- Flexbox

*/

        
