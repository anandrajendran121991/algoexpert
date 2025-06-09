class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }

    this.settings = {
      env: "development",
      apiKey: "test",
      exchangeRates: {
        CAD_USA: 1.35,
        USA_CAD: 0.74,
      },
    };

    Config.instance = this;
  }

  get(key) {
    return this.settings[key];
  }

  getExchangeRate(pair) {
    return this.settings.exchangeRates[pair];
  }

  set(key, value) {
    this.settings[key] = value;
  }
}

const config = new Config();
Object.freeze(config);

export default Config;
