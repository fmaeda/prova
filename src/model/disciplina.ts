import React from 'react';
import {
  // FaBrain,
  FaSearch,
  FaCity,
  FaBook,
  FaLandmark,
  FaChartLine,
} from 'react-icons/fa';

export enum Disciplina {
  RACIOCINIO_LOGICO = 'RACIOCINIO_LOGICO',
  ADMINISTRACAO_EMPRESAS = 'ADMINISTRACAO_EMPRESAS',
  LINGUA_PORTUGUESA = 'LINGUA_PORTUGUESA',
  ADMINISTRACAO_PUBLICA = 'ADMINISTRACAO_PUBLICA',
  SOLUCOES_ANALITICAS = 'SOLUCOES_ANALITICAS',
}

export type Step = {
  disciplina: Disciplina;
  total: number;
  concluidos: number;
};

export const disciplinaIcons: {
  [key in Disciplina]: React.ComponentType;
} = {
  [Disciplina.RACIOCINIO_LOGICO]: FaSearch,
  [Disciplina.ADMINISTRACAO_EMPRESAS]: FaCity,
  [Disciplina.LINGUA_PORTUGUESA]: FaBook,
  [Disciplina.ADMINISTRACAO_PUBLICA]: FaLandmark,
  [Disciplina.SOLUCOES_ANALITICAS]: FaChartLine,
};

export const disciplinaLabels: {
  [key in Disciplina]: string;
} = {
  [Disciplina.RACIOCINIO_LOGICO]: 'Raciocínio lógico e analítico',
  [Disciplina.ADMINISTRACAO_EMPRESAS]: 'Administração de empresas',
  [Disciplina.LINGUA_PORTUGUESA]: 'Língua Portuguesa',
  [Disciplina.ADMINISTRACAO_PUBLICA]: 'Administração Pública',
  [Disciplina.SOLUCOES_ANALITICAS]: 'Soluções analíticas de Supply Chain',
};
