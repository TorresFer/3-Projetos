/*
- Webservices: são integrações entre sistemas para fins de consumo de outros serviços
    - Comunicação feita através do formato textual XML ou JSON
    - GraphQL
    - REST (Representational State Transfer) e SOAP 
        - Rest: JSON + HTTP + Simples; faz a requisição 'Restfull' seguindo as requisições estruturais;
        feito através do GET, PULL...;
            - URL (/clientes) > Método (POST)> Descrição (Novo Cliente);
            - URL (/clientes) > Método (GET)> Descrição (Todos Clientes);
            - URL (/clientes/36) > Método (GET)> Descrição (O Cliente x);
            - URL (/clientes/12) > Método (PUT)> Descrição (Atualiza o cliente x);
            - URL (/clientes/41) > Método (DELETE)> Descrição (Exclui Cliente x);
                - CRUD: Create, Read, Update e Delete; vc insere, altera ou exclui documentos do banco de dados
    - Arquitetura: SOA e Microservices
        - SOA: mais antigo, é bom, mas é monolítico e por isso fica difícil de evoluir a aplicação.
        - Microserviços: equipes se diversificam por cada parte dos serviços.
            - Ex: Produção; Testes; Buscas; Atualização. Serviços especializados
            - Autonomia maior nas equipes

*/