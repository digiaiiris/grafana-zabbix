import React from 'react';
import { Modal } from '@grafana/ui';
import moment from 'moment';

interface Props {
  onDismiss(): void;
  problem: any;
  texts: any;
  priority: string;
  startTime: string;
  age: string;
}

interface State {}

export class AlertModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  onDismiss = () => {
    this.props.onDismiss();
  };

  renderTitle(texts: any) {
    return <div className="iiris-modal-title-text">{texts.information}</div>;
  }

  getDescriptionArray(eventObj: any) {
    const descriptionArray = [];
    if (eventObj.comments) {
      let description = eventObj.comments;
      const urlId = new RegExp('https?://');
      let startIndex = description.search(urlId);
      let endIndex = -1;
      
      while (startIndex > -1) {
        endIndex = description.slice(startIndex).search('\\s');
        endIndex = endIndex >= 0 ? startIndex + endIndex : description.length;
        const pairArray = [];
        pairArray.push(description.substring(0, startIndex));
        pairArray.push(description.substring(startIndex, endIndex));
        descriptionArray.push(pairArray);
        description = description.substring(endIndex);
        startIndex = description.search(urlId);
      }
      if (description) {
        descriptionArray.push([description, '']);
      }
    }
    return descriptionArray;
  }

  render() {
    const { problem, texts, priority, startTime, age } = this.props;
    return (
      <Modal isOpen={true} title={this.renderTitle(texts)} onDismiss={this.onDismiss} className="iiris-modal-box">
        <div className="iiris-modal-content">
          <div className="iiris-event-table full-width-container">
            <table className="table">
              <tbody>
                <tr>
                  <td className="iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap">{texts.priority}</td>
                  <td>{priority}</td>
                </tr>
                <tr>
                  <td className="iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap">{texts.startTime}</td>
                  <td>{startTime}</td>
                </tr>
                <tr>
                  <td className="iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap">{texts.duration}</td>
                  <td>{age}</td>
                </tr>
                <tr>
                  <td className="iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap">{texts.title}</td>
                  <td>{problem.name}</td>
                </tr>
                <tr>
                  <td className="iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap">{texts.description}</td>
                  <td>
                    {
                      this.getDescriptionArray(problem).map((pairArray: any[], idx: number) => {
                        return (
                          <span key={idx}>
                            <span>{pairArray[0]}</span>
                            { pairArray[1] && <a href={pairArray[1]} target="_blank">{pairArray[1]}</a> }
                          </span>
                        );
                      })
                    }
                  </td>
                </tr>
                {problem.url && <tr>
                  <td className="iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap">{texts.dashboard}</td>
                  <td>
                    <a href={problem.url} target="_top">{problem.url}</a>
                  </td>
                </tr>}
                <tr>
                  <td className="iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap">{texts.eventId}</td>
                  <td>{problem.eventid}</td>
                </tr>
                {problem.acknowledges.length > 0 && <tr>
                  <td className="iiris-table-title-cell iiris-cell-width-10 iiris-table-cell-no-wrap">{texts.acknowledgements}</td>
                  <td>
                    <table className="iiris-inner-table">
                      <tbody>
                        {
                          problem.acknowledges.map((acknowledge: any) => {
                            return (
                              <tr>
                                <td>{moment.unix(acknowledge.clock).format('DD.MM.YYYY HH:mm:ss')}</td>
                                <td>{acknowledge.message}</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </td>
                </tr>}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    );
  }
}
