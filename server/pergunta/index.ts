import { Request, Response } from 'express';

import data from './data';

export default (req: Request, res: Response) => {
  data.questao.horaInicio = new Date().toISOString();
  data.questao.tempoMinimo = 10;
  data.exame.horarioServidor = new Date().toISOString();
  res.json(data);
};
