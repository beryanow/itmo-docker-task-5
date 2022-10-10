import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

let counter = 0;

app.get("/", (_, res: Response) => {
    res.end(JSON.stringify(counter));
});

app.get("/stat", (_, res: Response) => {
    res.end(JSON.stringify(counter++));
});

app.get("/about", (_, res: Response) => {
    const name = "Maxim Beryanov";
    const html = `<h3>Hello, ${name}!</h3>`;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.listen(port, () => {
    console.log(`⚡️ Server is running at http://localhost:${port}`);
});