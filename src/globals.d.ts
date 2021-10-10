type InjectedCardano = {
  isEnabled: () => Promise<boolean>;
  enable: () => Promise<boolean>;
  getBalance: () => Promise<string>;
  getRewardAddress: () => Promise<string>;
};

declare var cardano: InjectedCardano
