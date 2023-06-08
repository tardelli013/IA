# IA

Chat-GPT API Reference -> [Here](https://platform.openai.com/docs/api-reference/introduction?lang=node.js)

Intall NodeJS [here](https://www.vultr.com/docs/install-nvm-and-node-js-on-ubuntu-20-04/?utm_source=performance-max-latam&utm_medium=paidmedia&obility_id=17096555207&utm_adgroup=&utm_campaign=&utm_term=&utm_content=&gclid=CjwKCAjw-IWkBhBTEiwA2exyO5fq0oEvQ6CPzoPTrOvuMyEMGQZAbDV0uMoyvY-J8DOo_ZW5htiiwRoCQ4EQAvD_BwE)

### 1 - Generate api token and add in .env file

###  2 - Start Node express server
```shell
$ cd express-api
$ npm install nodemon --save-dev
$ npm run dev
```
### 3 - HTTP request 
```shell
$ curl -d '{"text":"hello chat GPT, How are you today?"}' -H "Content-Type: application/json" -X POST http://localhost:8000/ia
```