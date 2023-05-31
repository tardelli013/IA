const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion(text) {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
    });
    console.log(completion.data.choices[0].text);
}

app.post('/ia', (req, res) => {
    const test = req.body.test
    console.log(test)

    runCompletion(test);

    return res.json({ success: true })
})

const port = 8000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});