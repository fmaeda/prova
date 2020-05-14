import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
  setTimeout(() => res.end(), 3000);
};
