import express,{Request,Response} from 'express';
import dotnet from 'dotenv';

dotnet.config();
const app = express();
const port = process.env.PORT || 7000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});