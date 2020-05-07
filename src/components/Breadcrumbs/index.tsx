import React from 'react';

import { connect } from 'react-redux';
import { FaFlagCheckered, FaQuestion } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

import { RootState } from 'store';
import { stepActions, stepSelectors } from 'store/steps';
import {
  Disciplina,
  Step,
  disciplinaIcons,
  disciplinaLabels,
} from 'model/disciplina';

import { Container } from './styled';
import StepComponent from './Step';

const mapStateToProps = ({ steps }: RootState) => ({
  steps,
  currentStep: stepSelectors.currentStep(steps),
});

type Props = {
  collapsed: boolean;
  setSteps: typeof stepActions.setSteps;
} & ReturnType<typeof mapStateToProps>;

class Breadcrumbs extends React.Component<Props> {
  componentDidMount() {
    const { setSteps } = this.props;
    setSteps([
      {
        disciplina: Disciplina.LINGUA_PORTUGUESA,
        total: 10,
        concluidos: 10,
      },
      {
        disciplina: Disciplina.RACIOCINIO_LOGICO,
        total: 10,
        concluidos: 4,
      },
      {
        disciplina: Disciplina.ADMINISTRACAO_PUBLICA,
        total: 0,
        concluidos: 0,
      },
      {
        disciplina: Disciplina.SOLUCOES_ANALITICAS,
        total: 0,
        concluidos: 0,
      },
    ]);
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  renderStep = ({ disciplina, total, concluidos }: Step) => {
    const { currentStep } = this.props;

    const hideIcon = total === 0;
    return (
      <StepComponent
        key={disciplina}
        total={total}
        concluidos={concluidos}
        icon={hideIcon ? FaQuestion : disciplinaIcons[disciplina]}
        label={
          hideIcon ? 'Finalize a seção anterior' : disciplinaLabels[disciplina]
        }
        disabled={hideIcon}
        active={currentStep?.disciplina === disciplina}
      />
    );
  };

  render() {
    const { collapsed, steps } = this.props;
    const allComplete = steps.reduce(
      (agg, step) => agg && step.total === step.concluidos,
      true,
    );

    return (
      <Container collapsed={collapsed}>
        {steps.map(this.renderStep)}
        <StepComponent
          icon={FaFlagCheckered}
          label="Fim"
          total={0}
          concluidos={0}
          disabled={!allComplete}
          active={allComplete}
          hideProgress
        />
        <ReactTooltip effect="solid" place="bottom" />
      </Container>
    );
  }
}

export default connect(mapStateToProps, {
  setSteps: stepActions.setSteps,
})(Breadcrumbs);
