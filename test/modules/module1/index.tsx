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
          queryRunId="clne3wmzw01zsok0tcouevljl"
          options={{
            title: 'Ethereum Beacon Chain Deposits',
            pageNumber: '1',
            pageLimit: '1000',
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
