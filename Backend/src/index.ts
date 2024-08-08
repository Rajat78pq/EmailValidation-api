import express, { Request, Response } from 'express';
import dotnet from 'dotenv';
import cors from 'cors';
import UserportalRoutes from './Routes/UserPortalRoutes/UserPortal.routes';
import CompanyRoutes from './Routes/CompanyRoutes/Company.routes';
import CompanyUserRoutes from './Routes/CompanyUserRoutes/CompanyUser.routes';
import TeamRoutes from './Routes/TeamRoutes/Team.routes';

dotnet.config();
const app = express();
const port = process.env.PORT || 7000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(cors());
app.use(express.json());
app.use('/api', UserportalRoutes);
app.use('/api', CompanyRoutes);
app.use('/api', CompanyUserRoutes);
app.use('/api', TeamRoutes);

const corOption = {
  origin: 'http://localhost:3000'
}
app.use(cors(corOption))

export default app;