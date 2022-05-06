const sumNetPrices = (prices) =>
  prices.reduce((previous, current) => previous + current, 0) * 1.27;

export default sumNetPrices;
