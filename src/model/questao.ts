export type Alternativa = {
  id: string;
  descricao: string;
};

export type Questao = {
  horaInicio: string;
  tempoMinimo: number;
  tempoMaximo: number;
  secao: string;
  textoApoio?: string;
  enunciado: string;
  alternativas: Alternativa[];
};
