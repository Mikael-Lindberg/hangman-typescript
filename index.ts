import express, { Request, Response } from "express";
import axios from "axios";

async function getWord(): Promise<string> {
    const response = await axios.get<string>(
        "https://random-word-api.herokuapp.com/word?number=1"
    );
    return response.data[0];
}

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    getWord().then((word) => {
        res.send(`<p>${word}</p>`);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
