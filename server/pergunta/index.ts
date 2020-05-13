import { Request, Response } from 'express';

import data from './data';

export default (req: Request, res: Response) => {
  res.json(data);
};
