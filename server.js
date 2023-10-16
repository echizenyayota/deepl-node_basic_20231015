import { createRequire } from "module";
const require = createRequire(import.meta.url);

import * as deepl from "deepl-node";

const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.listen(PORT, () => console.log("Server running on PORT " + PORT));

const authKey = process.env.DEEPL_API_KEY; // Replace with your key
const translator = new deepl.Translator(authKey);

const sourceLanguages = await translator.getSourceLanguages();
for (let i = 0; i < sourceLanguages.length; i++) {
    const lang = sourceLanguages[i];
    console.log(`${lang.name} (${lang.code})`); // Example: 'English (en)'
}
