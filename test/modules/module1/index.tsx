import { Module, customModule, Container } from '@ijstech/components';
import ScomFlipside from '@scom/scom-flipside';

@customModule
export default class Module1 extends Module {
  constructor(parent?: Container, options?: any) {
    super(parent, options);
  }

  async init() {
    super.init();
  }

  render() {
    return (
      <i-vstack
        gap={10}
        padding={{ top: 20, bottom: 20 }}
        verticalAlignment="center"
        horizontalAlignment="center"
      >
        <i-label caption="Flipside 1" font={{ size: '16px', bold: true }} />
        <i-scom-flipside
          id="scomFlipsideElm"
          margin={{ left: 'auto', right: 'auto', bottom: 20 }}
        />

        <i-label caption="Flipside 2" font={{ size: '16px', bold: true }} />
        <i-scom-flipside
          margin={{ left: 'auto', right: 'auto' }}
          componentId={0}
          apiEndpoint="https://api.dune.com/api/v1/query/2030584/results?api_key=GZ0R7Jim7TWLY7umXitxtiswiaD4eM7j"
          options={{
            title: 'Ethereum Beacon Chain Deposits',
            counterColName: 'deposited',
            counterLabel: 'ETH deposited',
          }}
          tag={{
            counterNumberColor: '#b12b2b',
            counterLabelColor: '#f0310f',
          }}
        />
        <i-modal id="mdConfig" width={1000}>
          <i-panel id="pnlConfig" />
        </i-modal>
      </i-vstack>
    );
  }
}
