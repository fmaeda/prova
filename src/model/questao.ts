export type Alternativa = {
  id: string;
  descricao: string;
};

export type Questao = {
  horaInicio: string;
  tempoMinimo: number;
  tempoMaximo: number;
  enunciado: string;
  alternativas: Alternativa[];
};
