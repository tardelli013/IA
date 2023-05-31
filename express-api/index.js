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

app.post('/ia', async (req, res) => {
    const test = req.body.test
    console.log(test)

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: test,
    });
    responseChatGPT = completion.data.choices[0].text;
    console.log(responseChatGPT);

    return res.json({ success: responseChatGPT });
})

const port = 8000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});