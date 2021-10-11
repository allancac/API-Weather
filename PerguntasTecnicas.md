# ENTREVISTA TÉCNICA FASTERS

## Respostas às Perguntas Técnicas -

## Concorrente Entrevistado: Allan Chaves

1. O tempo total da solução foi de 5 horas. Caso tivesse mais tempo, implementaria um Front-end, implementando informações visuais baseada na resposta completa da API do OpenWeatherMap.
2. Foi utilizado, como Framework, o NestJS. Tal Framework foi utilizado para cumprir os seguintes requisitos da entrevista:

   - Isolamento de camadas - O projeto foi organizado em um módulo Weather, que agrupou os controllers e os serviços do domínio em questão. Esse módulo foi importado ao módulo principal do aplicativo.
   - Dependências - Foi criado um provider para a API OpenWeather. O mesmo foi injetado através de construtor na classe de servico WeatherService

3. A API recebe requisições através do Endpoint /weather. O endpoint recebe nomes de cidades e retorna uma resposta no seguinte formato:
   {"kelvin":292.68,"celsius":"19.53"}. A API permite obter a resposta nos dois formatos de temperatura, Kelvin e Celsius.

### Conclusão:

Conforme descrito acima, foi possível implementar uma arquitetura que separa as camadas de serviço, e controle e organizando o projeto em módulos.

Allan Chaves.

Projeto disponível em https://github.com/allancac/API-Weather.git
