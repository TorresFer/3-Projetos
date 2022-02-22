// Distribuída/Teia
/* Conexão TCP/IP Padrão Layers -> 
    >Aplicação - HTTP, FTP, SMTP; Comunicação Processo a processo; Número da Porta
    >Transporte - 
    >Internet - 
    >Rede/Física <<<< - 
        - Assim é feita a comunicação de Máquina >< Máquina

Endereços de IP -> IPV6 e IPV4:
IPV4 - Classe A: 192.168.100.230; Rede > Host (computadores dentro da rede)
         - Máscara de Subrede: Bit 0 é endereço do Host, 1 é Rede (representado por 2,3,4...), ex: 255.0.0.0
    - Classe B: 192.168.100.230; Rede = Host; 
        - A Máscara demonstra isso: 255.255.0.0 = 1.1.0.0
    - Classe C: Fácil comunicação; + Rede - Host
Porta:
- 80; 8080; 13000; 13003 etc.
- IP máquina + Porta (Node manda para o Browser), ex: http://10.85.0.4:8080
- HTTP (Hyper Text Transfer Protocol): Conecta textos grandes. Baseado em Aplicação, Stateless e Cliente-Servidor
    - HTML: Faz referências aos textos ou a outros formatos: CSS, JS, Imagens...
    - HTTP é stateless, como se toda comunicação fosse a primeira, manda e recebe os dados de maneira stateless
    - Requisição a partir de uma URL e parametros e o Servidor devolve a resposta;
        - Traz conteúdo HTML, CSS, JS, Mídias; JSON
        - GET / HTTTP / 1.1 
        - Métodos do HTTP: GET, POST, PUSH, DELETE - São maneiras de requisições
 Cliente > Servidor: URL + Params | Servidor > Cliente: JS, CSS...
    - O ideal é juntar vários JS em um só arquivo ou CSS em um só arquivo para diminuir a carga enviada.
    - Get: Texto + Parametros: q=... (Query)
    - Post: os parametros vão no corpo da requisição (senhas, login etc);
        - Mas segura mesmo é a HTTPS 
HTTPS é o protocolo mais seguro a ser utilizado: params, headers etc. são criptografados
    - Possui vários Status de resultado: 100: Informação, 200: Sucesso, 300: Redirecionamento, 
    400: Erro no Cliente, ex err 404, 500: Erro no Servidor, ex: banco de dados fora do ar


*/ 