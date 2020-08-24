# fuzzy-trader-server

Servidor feito com **Node.js**, **Express** e **MongoDB** (usando **mongoose**) para o front-end [fuzzy-trader](https://github.com/miguelriosoliveira/fuzzy-trader).

## Principais responsabilidades

1. Gerenciar a carteira de ativos comprados (_endpoints_ `/wallet` e `/purchase`).
1. Servir de ponte entre o front-end e a API provida pela [marketstack](https://marketstack.com/) (_endpoint_ `/marketstack`), pois a mesma disponibiliza apenas _endpoints_ HTTP, o que causa problemas para o front-end ([Mixed Content](https://stackoverflow.com/questions/37043719/how-can-i-allow-mixed-contents-http-with-https-using-content-security-policy-m)).<br/>
   Como esta API tem seu deploy feito pelo Heroku, todos os endpoints são providos por ela no formato HTTPS.
1. Deletar todos os dados salvos no banco para uma inicialização limpa do sistema (comando `yarn seed`).
