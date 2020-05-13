import * as express from 'express';
// import * as bodyParser from 'body-parser';

import pergunta from './pergunta';
import resposta from './resposta';

const app: express.Application = express();

app.get('/teste', (req, res) => {
  res.status(200).json({
    status: 'ok',
  });
});

app.post('/pergunta', pergunta);
app.post('/resposta', resposta);

app.listen(3033, () => {
  console.log('Example app listening on port 3033!');
});
