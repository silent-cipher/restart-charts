export type ChartData = {
  data: {
    [key: string]: {
      [key: string]: number;
    };
  };
};

export type ChainState = {
  chain: string;
  month: string;
  graphType: string;
  cummulative: boolean;
};
