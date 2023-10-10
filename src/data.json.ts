export default [
  {
    id: 0,
    title: '[Counter] Axie',
    path: 'scom-counter',
    properties: {
      dataSource: 'Flipside',
      queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
      title: 'Axie',
      options: {
        counterColName: 'AXIE_NINETY_DAY_PCT',
        counterLabel: 'Axie Infinity 90 Days Active User Changes',
        stringDecimal: 2,
        stringSuffix: '%'
      },
    },
  },
  {
    id: 1,
    title: '[Table] Gaming Stat - Daily Active User',
    path: 'scom-table',
    properties: {
      dataSource: 'Flipside',
      queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
      title: 'Gaming Stat - Daily Active User',
      options: {
        columns: [
          {
            name: 'ALIEN_DAILY_ACTIVE_USER',
            title: 'Alien'
          },
          {
            name: 'GENOPETS_DAILY_ACTIVE_USER',
            title: 'Genopets'
          },
          {
            name: 'NCG_DAILY_ACTIVE_USER',
            title: 'NCG'
          },
          {
            name: 'SWEAT_DAILY_ACTIVE_USER',
            title: 'Sweat'
          }
        ]
      }
    }
  },
  {
    id: 2,
    title: '[Pie Chart] Distribution of Swaps By Volume (Avalanche TraderJoe)',
    path: 'scom-pie-chart',
    properties: {
      dataSource: 'Flipside',
      queryId: 'fb7f8784-b948-4c6f-a96e-51b48a66a417',
      title: 'Distribution of Swaps By Volume (Avalanche TraderJoe)',
      options: {
        xColumn: 'TYPE',
        yColumn: 'TX_COUNT',
        serieName: 'Tx Count',
        numberFormat: '0,000.0a',
        showDataLabels: true,
        valuesOptions: [
          { name: 'More Than $10,000', color: '#e58f8f' }
        ]
      }
    }
  },
  {
    id: 3,
    title: '[Bar Chart] Active User - Transaction Count - Axie Infinity',
    path: 'scom-bar-chart',
    properties: {
      dataSource: 'Flipside',
      queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
      title: 'Active User - Transaction Count - Axie Infinity',
      options: {
        xColumn: {
          key: 'DT',
          type: 'time'
        },
        yColumns: [
          'AXIE_DAILY_ACTIVE_USER',
          'AXIE_DAILY_TX_COUNT'
        ],
        seriesOptions: [
          {
            key: 'AXIE_DAILY_ACTIVE_USER',
            title: 'Active User',
            color: '#e58f8f'
          },
          {
            key: 'AXIE_DAILY_TX_COUNT',
            title: 'TX Count',
            color: '#a9a4a4'
          },
        ],
        legend: {
          show: true
        },
        xAxis: {
          title: 'Date',
          tickFormat: 'MMM DD'
        },
        yAxis: {
          title: 'ETH',
          position: 'left',
          tickFormat: '0[]a',
          labelFormat: '0,000.ma'
        }
      }
    }
  },
  {
    id: 4,
    title: '[Line Chart] Transaction Count - Axie Infinity',
    path: 'scom-line-chart',
    properties: {
      dataSource: 'Flipside',
      queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
      title: 'Transaction Count - Axie Infinity',
      options: {
        xColumn: {
          key: 'DT',
          type: 'time'
        },
        yColumns: [
          'AXIE_DAILY_TX_COUNT'
        ],
        seriesOptions: [
          {
            key: 'AXIE_DAILY_TX_COUNT',
            title: 'TX Count',
            color: '#000'
          }
        ],
        xAxis: {
          title: 'Date',
          tickFormat: 'MMM DD'
        },
        yAxis: {
          tickFormat: '0[]a',
          position: 'left'
        }
      }
    }
  },
  {
    id: 5,
    title: '[Area Chart] Transaction Count Per User By Protocol',
    path: 'scom-area-chart',
    properties: {
      dataSource: 'Flipside',
      queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
      title: 'Transaction Count Per User By Protocol',
      options: {
        xColumn: {
          key: 'DT',
          type: 'time'
        },
        yColumns: [
          'ALIEN_TX_PER_USER',
          'AXIE_TX_PER_USER',
          'SWEAT_TX_PER_USER',
          'GENOPETS_TX_PER_USER',
          'NCG_TX_PER_USER'
        ],
        legend: {
          show: true
        },
        seriesOptions: [
          {
            key: 'ALIEN_TX_PER_USER',
            title: 'Alien',
            color: '#04e1cb'
          },
          {
            key: 'AXIE_TX_PER_USER',
            title: 'Axie',
            color: '#1b96ff'
          },
          {
            key: 'SWEAT_TX_PER_USER',
            title: 'Sweat',
            color: '#ba01ff'
          },
          {
            key: 'GENOPETS_TX_PER_USER',
            title: 'Genopets',
            color: '#baec70'
          },
          {
            key: 'NCG_TX_PER_USER',
            title: 'NCG',
            color: '#ff5d2d'
          }
        ],
        xAxis: {
          tickFormat: 'MMM YYYY'
        },
        yAxis: {
          labelFormat: '0[,].00',
          tickerFormat: '0[,].00',
          position: 'left'
        }
      }
    }
  },
  {
    id: 6,
    title: '[Scatter Chart] Transaction Count - Alien Worlds',
    path: 'scom-scatter-chart',
    properties: {
      dataSource: 'Flipside',
      queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
      title: 'Transaction Count - Alien Worlds',
      options: {
        xColumn: {
          key: 'DT',
          type: 'time'
        },
        yColumns: [
          'AXIE_DAILY_TX_COUNT'
        ],
        seriesOptions: [
          {
            key: 'AXIE_DAILY_TX_COUNT',
            title: 'Axie Daily TX Count'
          }
        ],
        xAxis: {
          title: 'Date',
          tickFormat: 'MMM DD'
        },
        yAxis: {
          tickerFormat: '0[]a',
          labelFormat: '0[].0a',
          position: 'left'
        }
      }
    }
  },
  {
    id: 7,
    title: '[Mixed Chart] Active User & Transaction Count - Axie Infinity',
    path: 'scom-mixed-chart',
    properties: {
      dataSource: 'Flipside',
      queryId: '32a14c16-83f1-404d-aa85-819e6ce9342f',
      title: 'Active User & Transaction Count - Axie Infinity',
      options: {
        xColumn: {
          key: 'DT',
          type: 'time'
        },
        yColumns: [
          'AXIE_DAILY_ACTIVE_USER',
          'AXIE_DAILY_TX_COUNT'
        ],
        globalSeriesType: 'bar',
        stacking: false,
        seriesOptions: [
          {
            key: 'AXIE_DAILY_ACTIVE_USER',
            title: 'Active User',
            type: 'bar',
            yAxis: 'left',
            color: '#2cb0d1'
          },
          {
            key: 'AXIE_DAILY_TX_COUNT',
            title: 'TX Count',
            type: 'line',
            yAxis: 'right',
            color: '#26de26'
          }
        ],
        xAxis: {
          title: 'Date',
          tickFormat: 'MMM DD'
        },
        leftYAxis: {
          title: 'Active User',
          tickFormat: '0[]a',
          labelFormat: '0[].0a'
        },
        rightYAxis: {
          title: 'TX Count',
          tickFormat: '0[]a',
          labelFormat: '0[].0a'
        }
      }
    }
  },
] as {
  id: number;
  title: string;
  description?: string;
  path: string;
  properties: {
    [key: string]: string | number | object;
  };
}[];
