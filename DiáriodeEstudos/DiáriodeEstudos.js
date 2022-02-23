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

23/02
- CSS é muito flexível e possui diversas formas de fazer algo
    - O bootstrap é um FW de CSS que possui layouts prontos para criar as coisas, o que
    facilita muito na criação das aplicações; cria códigos mais simples
    - Aplica-se estilos com "Class" ou Classes, pois é o melhor caminho; mas vc pode usar id, tags etc
    - É sempre melhor com classes enxutas, para ter maior reuso de cógidos; diminuir a qntd de responsabilidades
    de um único seletor/classe
    - Utilize sempre as mesmas regras de nomeclaturas para seu CSS: ex. 
- CSS hj é dvidido em módulos independentes de criação: Flexbox, CSS grid...
- 

*/