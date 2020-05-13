export type Resposta = {
  enunciado: string;
  resposta: string | null;
};

export type Gabarito = {
  secao: string;
  questoes: Resposta[];
};
