# ServerlessTube

Um exemplo básico de como criar um “YouTube” serverless.

## Descrição

![Cloud na Prática - ServerlessTube](https://blog.geekhunter.com.br/wp-content/uploads/2019/04/serverless-aws.png)

Esse projeto é resultado de um [artigo](https://blog.geekhunter.com.br/aplicacao-serverless-com-aws-como-desenvolver-uma-do-0/) escrito para o blog da GeekHunter Brasil.

A ideia foi criar uma versão simplificada de um site de vídeos como o YouTube, onde usuários poderiam fazer upload, assistir e remover vídeos.

Se quiser saber mais, dá uma olhada lá no [blog da GeekHunter](https://blog.geekhunter.com.br/aplicacao-serverless-com-aws-como-desenvolver-uma-do-0/). :wink:

### Pré-requisitos

Para criar a sua versão do projeto, você vai precisar do seguinte:

* uma conta na AWS
* ter o Serverless Framework instalado na sua máquina

Se você quiser um passo-a-passo de como rodar esse projeto, é só clicar [aqui](https://blog.geekhunter.com.br/aplicacao-serverless-com-aws-como-desenvolver-uma-do-0/).

## Tecnologias utilizadas

* [Lambda](https://aws.amazon.com/pt/lambda/) - *Function as a Service* para execução do código
* [API Gateway](https://aws.amazon.com/pt/api-gateway/) - serviço utilizado para criar a API REST do projeto
* [S3](https://aws.amazon.com/pt/s3/) - Armazenamento dos vídeos
* [ServerlessFramework](https://serverless.com/) - Framework para deploy da aplicação

## Autor

* **Fernando Gonçalves** - *Código inicial* - [LinkedIn](https://www.linkedin.com/in/fernandosg/)

Veja também a lista de [contribuidores](https://github.com/cloudnapratica/serverlesstube/contributors) que participaram desse projeto.

## Licença

Esse projeto é licenciado sob a licença do MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

## Agradecimentos

* [GeekHunter](https://blog.geekhunter.com.br) pela oportunidade de escrever o artigo que deu origem a esse projeto.
