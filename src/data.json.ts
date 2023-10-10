export default [
  {
    id: 0,
    title: '[Counter] Ethereum Sales Count',
    path: 'scom-counter',
    properties: {
      dataSource: 'Flipside',
      queryRunId: 'clnjpz9g100m5oi0tnsrfv0oq',
      title: 'Ethereum Sales Count',
      options: {
        counterColName: 'sales_count',
        counterLabel: 'Sales Count',
      },
    },
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
