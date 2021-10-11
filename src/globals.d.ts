type InjectedCardano = {
  isEnabled: () => Promise<boolean>;
  enable: () => Promise<boolean>;
  getBalance: () => Promise<string>;
  getRewardAddress: () => Promise<string>;
  getUsedAddresses: () => Promise<Array<string>>;
};

declare var cardano: InjectedCardano
