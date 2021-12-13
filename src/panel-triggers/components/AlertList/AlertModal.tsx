import React from 'react';
import { Modal } from '@grafana/ui';

interface Props {
  onDismiss(): void;
  problem: any;
  isEnglish: boolean;
}

interface State {}

export class AlertModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  onDismiss = () => {
    this.props.onDismiss();
  };

  renderTitle(isEnglish?: boolean) {
    return <div className="iiris-modal-title-text">{isEnglish ? 'Maintenance Information' : 'Huollon tiedot'}</div>;
  }

  render() {
    const { problem, isEnglish } = this.props;
    return (
      <Modal isOpen={true} title={this.renderTitle(isEnglish)} onDismiss={this.onDismiss} className="iiris-modal-box">
        <div className="iiris-modal-content">
          {problem + ''}
        </div>
      </Modal>
    );
  }
}
