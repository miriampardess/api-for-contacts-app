import express from 'express';
import { router } from "./router.js";
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
const port = 3000;
app.use(bodyParser.json())
app.use(cors())

app.use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
