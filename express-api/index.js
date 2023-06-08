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
    const text = req.body.text
    console.log(text)

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: text}],
    });
    responseChatGPT = completion.data.choices[0].message;
    console.log(responseChatGPT);

    return res.json({ success: responseChatGPT });
})

const port = 8000;
app.listen(port, () =>  console.log('Listening on port ' + port));