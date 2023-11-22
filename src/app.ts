import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/all', (req: Request, res: Response) => {
  try {
    const a = 10;

    res.status(200).send(a);
  } catch (err) {
    res.status(400).send('Some Thing Wrong');
  }
});

// app.use((error: any, req: Request, res: Response, next: NextFunction) => {
//   res.status(400).send(error.message);
//   next();
// });

export default app;
