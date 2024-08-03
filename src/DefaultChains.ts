export const DefaultChains = {
  TERP_TESTNET_90U_4: {
    rpc: "https://terp-testnet-rpc.itrocket.net",
    rest: "https://terp-testnet-api.itrocket.net",
    nodeProvider: {
      name: "ITRocket",
      email: "terp.network@skiff.com",
      website: "https://itrocket.net/",
    },
    chainId: "90u-4",
    chainName: "Terp Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/90u/chain.png",
    stakeCurrency: {
      coinDenom: "TERPX",
      coinMinimalDenom: "uterpx",
      coinDecimals: 6,
    },
    walletUrlForStaking: "https://testnet.itrocket.net/terp/staking",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "terp",
      bech32PrefixAccPub: "terppub",
      bech32PrefixValAddr: "terpvaloper",
      bech32PrefixValPub: "terpvaloperpub",
      bech32PrefixConsAddr: "terpvalcons",
      bech32PrefixConsPub: "terpvalconspub",
    },
    currencies: [
      {
        coinDenom: "TERPX",
        coinMinimalDenom: "uterpx",
        coinDecimals: 6,
      },
      {
        coinDenom: "THIOLX",
        coinMinimalDenom: "uthiolx",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "THIOLX",
        coinMinimalDenom: "uthiolx",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.5,
          average: 0.75,
          high: 1,
        },
      },
      {
        coinDenom: "TERPX",
        coinMinimalDenom: "uterpx",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.02,
          average: 0.04,
          high: 0.075,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  UNIFICATION_FUND_MAINNET_2: {
    chainId: "FUND-MainNet-2",
    chainName: "Unification",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/FUND-MainNet/chain.png",
    rpc: "https://rpc1.unification.io",
    rest: "https://rest.unification.io",
    nodeProvider: {
      name: "Unification",
      email: "hello@unification.com",
      website: "https://unification.com/",
    },
    walletUrlForStaking:
      "https://explorer.unification.chainmasters.ninja/wallet",
    bip44: {
      coinType: 5555,
    },
    bech32Config: {
      bech32PrefixAccAddr: "und",
      bech32PrefixAccPub: "undpub",
      bech32PrefixValAddr: "undvaloper",
      bech32PrefixValPub: "undvaloperpub",
      bech32PrefixConsAddr: "undvalcons",
      bech32PrefixConsPub: "undvalconspub",
    },
    currencies: [
      {
        coinDenom: "FUND",
        coinMinimalDenom: "nund",
        coinDecimals: 9,
        coinGeckoId: "unification",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FUND",
        coinMinimalDenom: "nund",
        coinDecimals: 9,
        coinGeckoId: "unification",
        gasPriceStep: {
          low: 300,
          average: 400,
          high: 500,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "FUND",
      coinMinimalDenom: "nund",
      coinDecimals: 9,
      coinGeckoId: "unification",
    },
    features: [],
  },
  HICKORY_TEST_HICKORY: {
    chainId: "HICKORY",
    chainName: "HICKORY-TEST",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/HICKORY/logo_hic.png",
    rpc: "http://test.hickoryblockchain.com:26657/",
    rest: "http://test.hickoryblockchain.com:1317/",
    nodeProvider: {
      name: "Hickory Blockchain Development",
      email: "mail@hickoryblockchain.com",
      website: "https://www.hickoryblockchain.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "hic",
      bech32PrefixAccPub: "hicpub",
      bech32PrefixValAddr: "hicvaloper",
      bech32PrefixValPub: "hicvaloperpub",
      bech32PrefixConsAddr: "hicvalcons",
      bech32PrefixConsPub: "hicvalconspub",
    },
    currencies: [
      {
        coinDenom: "HIC",
        coinMinimalDenom: "uhic",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "HIC",
        coinMinimalDenom: "uhic",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "HIC",
      coinMinimalDenom: "uhic",
      coinDecimals: 6,
    },
    features: ["cosmwasm"],
  },
  HONEYWOOD_HONEY_WOOD: {
    chainId: "HoneyWood",
    chainName: "HoneyWood",
    rpc: "https://honeywood.io/node",
    rest: "https://honeywood.io/node-rest/",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/HoneyWood/chain.png",
    nodeProvider: {
      name: "HoneyWood",
      email: "media@honeywood.io",
      website: "https://honeywood.io/",
    },
    stakeCurrency: {
      coinDenom: "CONE",
      coinMinimalDenom: "cone",
      coinDecimals: 0,
      coinGeckoId: "honeywood",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/HoneyWood/cone.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "bears",
      bech32PrefixAccPub: "bearspub",
      bech32PrefixValAddr: "bearsvaloper",
      bech32PrefixValPub: "bearsvaloperpub",
      bech32PrefixConsAddr: "bearsvalcons",
      bech32PrefixConsPub: "bearsvalconspub",
    },
    currencies: [
      {
        coinDenom: "HONEY",
        coinMinimalDenom: "uhoney",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/HoneyWood/uhoney.png",
      },
      {
        coinDenom: "CONE",
        coinMinimalDenom: "cone",
        coinDecimals: 0,
        coinGeckoId: "honeywood",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/HoneyWood/cone.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "HONEY",
        coinMinimalDenom: "uhoney",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/HoneyWood/uhoney.png",
        gasPriceStep: {
          low: 0.05,
          average: 0.1,
          high: 0.15,
        },
      },
    ],
    features: [],
  },
  LUMENX_LUMEN_X: {
    chainId: "LumenX",
    chainName: "LumenX",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/LumenX/chain.png",
    rpc: "https://rpc-lumenx.cryptonet.pl",
    rest: "https://api-lumenx.cryptonet.pl",
    nodeProvider: {
      name: "CryptoNet",
      email: "contact@cryptonet.pl",
      website: "https://cryptonet.pl",
    },
    walletUrlForStaking: "https://explorer.kynraze.com/lumenx/staking",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "lumen",
      bech32PrefixAccPub: "lumenpub",
      bech32PrefixValAddr: "lumenvaloper",
      bech32PrefixValPub: "lumenvaloperpub",
      bech32PrefixConsAddr: "lumenvalcons",
      bech32PrefixConsPub: "lumenvalconspub",
    },
    currencies: [
      {
        coinDenom: "LUMEN",
        coinMinimalDenom: "ulumen",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUMEN",
        coinMinimalDenom: "ulumen",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0125,
          average: 0.025,
          high: 0.05,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "LUMEN",
      coinMinimalDenom: "ulumen",
      coinDecimals: 6,
    },
    features: [],
  },
  NEUTARO_NEUTARO_1: {
    chainId: "Neutaro-1",
    chainName: "Neutaro",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Neutaro/chain.png",
    rpc: "http://rpc.neutaro.tech:26657/",
    rest: "http://api.neutaro.tech:1317/",
    nodeProvider: {
      name: "Neutaro",
      email: "info@neutaro.com",
      website: "https://neutaro.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "neutaro",
      bech32PrefixAccPub: "neutaropub",
      bech32PrefixValAddr: "neutarovaloper",
      bech32PrefixValPub: "neutarovaloperpub",
      bech32PrefixConsAddr: "neutarovalcons",
      bech32PrefixConsPub: "neutarovalconspub",
    },
    currencies: [
      {
        coinDenom: "NTMPI",
        coinMinimalDenom: "uneutaro",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NTMPI",
        coinMinimalDenom: "uneutaro",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "NTMPI",
      coinMinimalDenom: "uneutaro",
      coinDecimals: 6,
    },
    features: ["cosmwasm"],
  },
  ORAICHAIN_ORAICHAIN: {
    rpc: "https://rpc.orai.io",
    rest: "http://lcd.orai.io",
    nodeProvider: {
      name: "Oraichain",
      email: "contact@orai.io",
      website: "https://orai.io/",
    },
    chainId: "Oraichain",
    chainName: "Oraichain",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Oraichain/chain.png",
    bech32Config: {
      bech32PrefixAccPub: "oraipub",
      bech32PrefixValPub: "oraivaloperpub",
      bech32PrefixAccAddr: "orai",
      bech32PrefixConsPub: "oraivalconspub",
      bech32PrefixValAddr: "oraivaloper",
      bech32PrefixConsAddr: "oraivalcons",
    },
    bip44: {
      coinType: 118,
    },
    stakeCurrency: {
      coinDenom: "ORAI",
      coinDecimals: 6,
      coinMinimalDenom: "orai",
      coinGeckoId: "oraichain-token",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Oraichain/orai.png",
    },
    currencies: [
      {
        coinDenom: "ORAI",
        coinDecimals: 6,
        coinMinimalDenom: "orai",
        coinGeckoId: "oraichain-token",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Oraichain/orai.png",
      },
      {
        coinDenom: "ORAIX",
        coinDecimals: 6,
        coinMinimalDenom:
          "factory/orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge/oraix",
        coinGeckoId: "oraidex",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Oraichain/factory/orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge/oraix.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ORAI",
        coinDecimals: 6,
        coinMinimalDenom: "orai",
        coinGeckoId: "oraichain-token",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/Oraichain/orai.png",
        gasPriceStep: {
          low: 0.003,
          average: 0.005,
          high: 0.007,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  SHARELEDGER_SHARE_RING__VOYAGER_NET: {
    chainId: "ShareRing-VoyagerNet",
    chainName: "Shareledger",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ShareRing-VoyagerNet/chain.png",
    rpc: "https://rpc.explorer.shareri.ng",
    rest: "https://lcd.explorer.shareri.ng",
    nodeProvider: {
      name: "ShareRing",
      email: "hello@sharering.network",
      website: "https://www.sharering.network/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "shareledger",
      bech32PrefixAccPub: "shareledgerpub",
      bech32PrefixConsAddr: "shareledgervalcons",
      bech32PrefixConsPub: "shareledgervalconspub",
      bech32PrefixValAddr: "shareledgervaloper",
      bech32PrefixValPub: "shareledgervaloperpub",
    },
    currencies: [
      {
        coinDenom: "shr",
        coinMinimalDenom: "nshr",
        coinDecimals: 9,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "shr",
        coinMinimalDenom: "nshr",
        coinDecimals: 9,
        gasPriceStep: {
          low: 30000,
          average: 40000,
          high: 50000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "shr",
      coinMinimalDenom: "nshr",
      coinDecimals: 9,
    },
    features: ["cosmwasm"],
  },
  AGORIC_AGORIC_3: {
    rpc: "https://rpc-agoric.keplr.app",
    rest: "https://lcd-agoric.keplr.app",
    chainId: "agoric-3",
    chainName: "Agoric",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/chain.png",
    stakeCurrency: {
      coinDenom: "BLD",
      coinMinimalDenom: "ubld",
      coinDecimals: 6,
      coinGeckoId: "agoric",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/agoric",
    walletUrlForStaking: "https://wallet.keplr.app/chains/agoric",
    bip44: {
      coinType: 564,
    },
    bech32Config: {
      bech32PrefixAccAddr: "agoric",
      bech32PrefixAccPub: "agoricpub",
      bech32PrefixValAddr: "agoricvaloper",
      bech32PrefixValPub: "agoricvaloperpub",
      bech32PrefixConsAddr: "agoricvalcons",
      bech32PrefixConsPub: "agoricvalconspub",
    },
    currencies: [
      {
        coinDenom: "BLD",
        coinMinimalDenom: "ubld",
        coinDecimals: 6,
        coinGeckoId: "agoric",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
      },
      {
        coinDenom: "IST",
        coinMinimalDenom: "uist",
        coinDecimals: 6,
        coinGeckoId: "inter-stable-token",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BLD",
        coinMinimalDenom: "ubld",
        coinDecimals: 6,
        coinGeckoId: "agoric",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
        gasPriceStep: {
          low: 0.03,
          average: 0.05,
          high: 0.07,
        },
      },
      {
        coinDenom: "IST",
        coinMinimalDenom: "uist",
        coinDecimals: 6,
        coinGeckoId: "inter-stable-token",
        gasPriceStep: {
          low: 0.0034,
          average: 0.007,
          high: 0.02,
        },
      },
    ],
    features: [],
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
  },
  AIOZ_NETWORK_AIOZ_168_1: {
    chainId: "aioz_168-1",
    chainName: "AIOZ Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/aioz_168/chain.png",
    rpc: "https://rpc-dataseed.aioz.network",
    rest: "https://lcd-dataseed.aioz.network",
    nodeProvider: {
      name: "AIOZ Network",
      email: "contact@aioz.network",
      website: "https://aioz.network",
    },
    stakeCurrency: {
      coinDenom: "AIOZ",
      coinMinimalDenom: "attoaioz",
      coinDecimals: 18,
      coinGeckoId: "aioz-network",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "aioz",
      bech32PrefixAccPub: "aiozpub",
      bech32PrefixValAddr: "aiozvaloper",
      bech32PrefixValPub: "aiozvaloperpub",
      bech32PrefixConsAddr: "aiozvalcons",
      bech32PrefixConsPub: "aiozvalconspub",
    },
    currencies: [
      {
        coinDenom: "AIOZ",
        coinMinimalDenom: "attoaioz",
        coinDecimals: 18,
        coinGeckoId: "aioz-network",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "AIOZ",
        coinMinimalDenom: "attoaioz",
        coinDecimals: 18,
        coinGeckoId: "aioz-network",
        gasPriceStep: {
          low: 7000000000,
          average: 7000000000,
          high: 10000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  AKASH_AKASHNET_2: {
    rpc: "https://rpc-akash.keplr.app",
    rest: "https://lcd-akash.keplr.app",
    chainId: "akashnet-2",
    chainName: "Akash",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/akashnet/chain.png",
    stakeCurrency: {
      coinDenom: "AKT",
      coinMinimalDenom: "uakt",
      coinDecimals: 6,
      coinGeckoId: "akash-network",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/akashnet/uakt.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/akash",
    walletUrlForStaking: "https://wallet.keplr.app/chains/akash",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "akash",
      bech32PrefixAccPub: "akashpub",
      bech32PrefixValAddr: "akashvaloper",
      bech32PrefixValPub: "akashvaloperpub",
      bech32PrefixConsAddr: "akashvalcons",
      bech32PrefixConsPub: "akashvalconspub",
    },
    currencies: [
      {
        coinDenom: "AKT",
        coinMinimalDenom: "uakt",
        coinDecimals: 6,
        coinGeckoId: "akash-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/akashnet/uakt.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "AKT",
        coinMinimalDenom: "uakt",
        coinDecimals: 6,
        coinGeckoId: "akash-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/akashnet/uakt.png",
      },
    ],
    features: [],
  },
  WARDEN_PROTOCOL_ALFAMA_TESTNET_ALFAMA: {
    bech32Config: {
      bech32PrefixAccAddr: "warden",
      bech32PrefixAccPub: "wardenpub",
      bech32PrefixConsAddr: "wardenvalcons",
      bech32PrefixConsPub: "wardenvalconspub",
      bech32PrefixValAddr: "wardenvaloper",
      bech32PrefixValPub: "wardenvaloperpub",
    },
    bip44: {
      coinType: 118,
    },
    chainId: "alfama",
    chainName: "Warden Protocol Alfama Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/alfama/chain.png",
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "WARD",
        coinMinimalDenom: "uward",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/alfama/uward.png",
      },
    ],
    features: [],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: "WARD",
        coinMinimalDenom: "uward",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/alfama/uward.png",
        gasPriceStep: {
          average: 0.025,
          high: 0.03,
          low: 0.005,
        },
      },
    ],
    rest: "https://rest.alfama.wardenprotocol.org",
    rpc: "https://rpc.alfama.wardenprotocol.org",
    nodeProvider: {
      name: "Warden Protocol",
      email: "tech@wardenprotocol.org",
      website: "https://wardenprotocol.org/",
    },
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "WARD",
      coinMinimalDenom: "uward",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/alfama/uward.png",
    },
  },
  ANDROMEDA_ANDROMEDA_1: {
    chainId: "andromeda-1",
    chainName: "Andromeda",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/andromeda/andromeda.png",
    rpc: "https://andromeda.rpc.kjnodes.com",
    rest: "https://andromeda.api.kjnodes.com",
    nodeProvider: {
      name: "KJ Nodes",
      email: "stake@kjnodes.com",
      website: "https://kjnodes.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "andr",
      bech32PrefixAccPub: "andrpub",
      bech32PrefixValAddr: "andrvaloper",
      bech32PrefixValPub: "andrvaloperpub",
      bech32PrefixConsAddr: "andrvalcons",
      bech32PrefixConsPub: "andrvalconspub",
    },
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "ANDR",
        coinMinimalDenom: "uandr",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/andromeda/andromeda.png",
      },
    ],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: "ANDR",
        coinMinimalDenom: "uandr",
        gasPriceStep: {
          low: 0.03,
          average: 0.05,
          high: 0.075,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/andromeda/andromeda.png",
      },
    ],
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "ANDR",
      coinMinimalDenom: "uandr",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/andromeda/andromeda.png",
    },
    features: ["cosmwasm"],
  },
  ARCHWAY_ARCHWAY_1: {
    bech32Config: {
      bech32PrefixAccAddr: "archway",
      bech32PrefixAccPub: "archwaypub",
      bech32PrefixConsAddr: "archwayvalcons",
      bech32PrefixConsPub: "archwayvalconspub",
      bech32PrefixValAddr: "archwayvaloper",
      bech32PrefixValPub: "archwayvaloperpub",
    },
    bip44: {
      coinType: 118,
    },
    chainId: "archway-1",
    chainName: "Archway",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/chain.png",
    currencies: [
      {
        coinDecimals: 18,
        coinDenom: "ARCH",
        coinGeckoId: "archway",
        coinMinimalDenom: "aarch",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
      },
    ],
    features: ["cosmwasm"],
    feeCurrencies: [
      {
        coinDecimals: 18,
        coinDenom: "ARCH",
        coinGeckoId: "archway",
        coinMinimalDenom: "aarch",
        gasPriceStep: {
          low: 140000000000,
          average: 196000000000,
          high: 225400000000,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
      },
    ],
    rest: "https://api.mainnet.archway.io",
    rpc: "https://rpc.mainnet.archway.io",
    stakeCurrency: {
      coinDecimals: 18,
      coinDenom: "ARCH",
      coinGeckoId: "archway",
      coinMinimalDenom: "aarch",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
    },
    nodeProvider: {
      name: "Phi Labs",
      email: "support@philabs.xyz",
      website: "https://philabs.xyz",
    },
  },
  SEI_DEVNET_ARCTIC_1: {
    rpc: "https://rpc.wallet.arctic-1.sei.io",
    rest: "https://rest.wallet.arctic-1.sei.io",
    chainId: "arctic-1",
    chainName: "Sei Devnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/arctic/chain.png",
    bip44: {
      coinType: 118,
    },
    stakeCurrency: {
      coinDenom: "SEI",
      coinMinimalDenom: "usei",
      coinDecimals: 6,
    },
    bech32Config: {
      bech32PrefixAccAddr: "sei",
      bech32PrefixAccPub: "seipub",
      bech32PrefixValAddr: "seivaloper",
      bech32PrefixValPub: "seivaloperpub",
      bech32PrefixConsAddr: "seivalcons",
      bech32PrefixConsPub: "seivalconspub",
    },
    nodeProvider: {
      name: "Sei",
      email: "ecosystem@seinetwork.io",
      website: "https://sei.io",
    },
    currencies: [
      {
        coinDenom: "SEI",
        coinMinimalDenom: "usei",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SEI",
        coinMinimalDenom: "usei",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.1,
          average: 0.2,
          high: 0.3,
        },
      },
    ],
  },
  MARS_HUB_TESTNET_ARES_1: {
    rpc: "https://testnet-rpc.marsprotocol.io",
    rest: "https://testnet-rest.marsprotocol.io",
    chainId: "ares-1",
    chainName: "Mars Hub Testnet",
    stakeCurrency: {
      coinDenom: "MARS",
      coinMinimalDenom: "umars",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/umars.png",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/chain.png",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [
      {
        coinType: 330,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "mars",
      bech32PrefixAccPub: "marspub",
      bech32PrefixValAddr: "marsvaloper",
      bech32PrefixValPub: "marsvaloperpub",
      bech32PrefixConsAddr: "marsvalcons",
      bech32PrefixConsPub: "marsvalconspub",
    },
    currencies: [
      {
        coinDenom: "MARS",
        coinMinimalDenom: "umars",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/umars.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MARS",
        coinMinimalDenom: "umars",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/umars.png",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0.01,
        },
      },
    ],
    features: [],
  },
  ARKEO_TESTNET_ARKEO: {
    chainId: "arkeo",
    chainName: "Arkeo Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/arkeo/chain.png",
    rpc: "http://seed.arkeo.network:26657",
    rest: "http://seed.arkeo.network:1317",
    nodeProvider: {
      name: "Arkeo Protocol",
      email: "randy@arkeo.network",
      website: "http://arkeo.network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "tarkeo",
      bech32PrefixAccPub: "tarkeopub",
      bech32PrefixValAddr: "tarkeovaloper",
      bech32PrefixValPub: "tarkeovaloperpub",
      bech32PrefixConsAddr: "tarkeovalcons",
      bech32PrefixConsPub: "tarkeovalconspub",
    },
    currencies: [
      {
        coinDenom: "arkeo",
        coinMinimalDenom: "uarkeo",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "arkeo",
        coinMinimalDenom: "uarkeo",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "arkeo",
      coinMinimalDenom: "uarkeo",
      coinDecimals: 6,
    },
    features: [],
  },
  ZETACHAIN_ATHENS_3_TESTNET_ATHENS_7001_1: {
    rpc: "https://zetachain-athens.blockpi.network/rpc/v1/public",
    rest: "https://zetachain-athens.blockpi.network/lcd/v1/public",
    chainId: "athens_7001-1",
    chainName: "ZetaChain Athens 3 Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/athens_7001/chain.png",
    stakeCurrency: {
      coinDenom: "ZETA",
      coinMinimalDenom: "azeta",
      coinDecimals: 18,
    },
    nodeProvider: {
      name: "BlockPI",
      email: "help@blockpi.io",
      website: "https://blockpi.io/",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "zeta",
      bech32PrefixAccPub: "zetapub",
      bech32PrefixValAddr: "zetavaloper",
      bech32PrefixValPub: "zetavaloperpub",
      bech32PrefixConsAddr: "ezetaalcons",
      bech32PrefixConsPub: "zetavalconspub",
    },
    currencies: [
      {
        coinDenom: "tZETA",
        coinMinimalDenom: "azeta",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "tZETA",
        coinMinimalDenom: "azeta",
        coinDecimals: 18,
        gasPriceStep: {
          low: 80000000000,
          average: 80000000000,
          high: 80000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  SEI_TESTNET_ATLANTIC_2: {
    rpc: "https://rpc.wallet.atlantic-2.sei.io",
    rest: "https://rest.wallet.atlantic-2.sei.io",
    chainId: "atlantic-2",
    chainName: "Sei Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/atlantic/chain.png",
    bip44: {
      coinType: 118,
    },
    stakeCurrency: {
      coinDenom: "SEI",
      coinMinimalDenom: "usei",
      coinDecimals: 6,
    },
    bech32Config: {
      bech32PrefixAccAddr: "sei",
      bech32PrefixAccPub: "seipub",
      bech32PrefixValAddr: "seivaloper",
      bech32PrefixValPub: "seivaloperpub",
      bech32PrefixConsAddr: "seivalcons",
      bech32PrefixConsPub: "seivalconspub",
    },
    currencies: [
      {
        coinDenom: "SEI",
        coinMinimalDenom: "usei",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SEI",
        coinMinimalDenom: "usei",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.08,
          average: 0.1,
          high: 0.12,
        },
      },
    ],
  },
  AURA_NETWORK_AURA_6322_2: {
    chainId: "aura_6322-2",
    chainName: "Aura Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/aura_6322/chain.png",
    rpc: "https://rpc.aura.network",
    rest: "https://lcd.aura.network",
    nodeProvider: {
      name: "Aura Foundation",
      email: "support@aura.network",
      website: "https://aura.network/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "aura",
      bech32PrefixAccPub: "aurapub",
      bech32PrefixValAddr: "auravaloper",
      bech32PrefixValPub: "auravaloperpub",
      bech32PrefixConsAddr: "auravalcons",
      bech32PrefixConsPub: "auravalconspub",
    },
    currencies: [
      {
        coinDenom: "AURA",
        coinMinimalDenom: "uaura",
        coinDecimals: 6,
        coinGeckoId: "aura-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/aura_6322/uaura.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "AURA",
        coinMinimalDenom: "uaura",
        coinDecimals: 6,
        coinGeckoId: "aura-network",
        gasPriceStep: {
          low: 0.001,
          average: 0.0025,
          high: 0.004,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/aura_6322/uaura.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "AURA",
      coinMinimalDenom: "uaura",
      coinDecimals: 6,
      coinGeckoId: "aura-network",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/aura_6322/uaura.png",
    },
    features: ["cosmwasm"],
    walletUrlForStaking: "https://aurascan.io/",
  },
  AXELAR_AXELAR_DOJO_1: {
    rpc: "https://rpc-axelar.keplr.app",
    rest: "https://lcd-axelar.keplr.app",
    chainId: "axelar-dojo-1",
    chainName: "Axelar",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/chain.png",
    stakeCurrency: {
      coinDenom: "AXL",
      coinMinimalDenom: "uaxl",
      coinDecimals: 6,
      coinGeckoId: "axelar",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/uaxl.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/axelar",
    walletUrlForStaking: "https://wallet.keplr.app/chains/axelar",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "axelar",
      bech32PrefixAccPub: "axelarpub",
      bech32PrefixValAddr: "axelarvaloper",
      bech32PrefixValPub: "axelarvaloperpub",
      bech32PrefixConsAddr: "axelarvalcons",
      bech32PrefixConsPub: "axelarvalconspub",
    },
    currencies: [
      {
        coinDenom: "AXL",
        coinMinimalDenom: "uaxl",
        coinDecimals: 6,
        coinGeckoId: "axelar",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/uaxl.png",
      },
      {
        coinDenom: "ETH.axl",
        coinMinimalDenom: "weth-wei",
        coinDecimals: 18,
        coinGeckoId: "weth",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/weth-wei.png",
      },
      {
        coinDenom: "USDC.axl",
        coinMinimalDenom: "uusdc",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/uusdc.png",
      },
      {
        coinDenom: "FRAX.axl",
        coinMinimalDenom: "frax-wei",
        coinDecimals: 18,
        coinGeckoId: "frax",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/frax-wei.png",
      },
      {
        coinDenom: "DAI.axl",
        coinMinimalDenom: "dai-wei",
        coinDecimals: 18,
        coinGeckoId: "dai",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/dai.png",
      },
      {
        coinDenom: "USDT.axl",
        coinMinimalDenom: "uusdt",
        coinDecimals: 6,
        coinGeckoId: "tether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/uusdt.png",
      },
      {
        coinDenom: "WBTC.axl",
        coinMinimalDenom: "wbtc-satoshi",
        coinDecimals: 8,
        coinGeckoId: "wrapped-bitcoin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/wbtc-satoshi.png",
      },
      {
        coinDenom: "LINK.axl",
        coinMinimalDenom: "link-wei",
        coinDecimals: 18,
        coinGeckoId: "chainlink",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/link-wei.png",
      },
      {
        coinDenom: "AAVE.axl",
        coinMinimalDenom: "aave-wei",
        coinDecimals: 18,
        coinGeckoId: "aave",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/aave-wei.png",
      },
      {
        coinDenom: "APE.axl",
        coinMinimalDenom: "ape-wei",
        coinDecimals: 18,
        coinGeckoId: "apecoin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/ape-wei.png",
      },
      {
        coinDenom: "AXS.axl",
        coinMinimalDenom: "axs-wei",
        coinDecimals: 18,
        coinGeckoId: "axie-infinity",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/axs-wei.png",
      },
      {
        coinDenom: "MKR.axl",
        coinMinimalDenom: "mkr-wei",
        coinDecimals: 18,
        coinGeckoId: "maker",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/mkr-wei.png",
      },
      {
        coinDenom: "RAI.axl",
        coinMinimalDenom: "rai-wei",
        coinDecimals: 18,
        coinGeckoId: "rai",
      },
      {
        coinDenom: "SHIB.axl",
        coinMinimalDenom: "shib-wei",
        coinDecimals: 18,
        coinGeckoId: "shiba-inu",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/shib-wei.png",
      },
      {
        coinDenom: "stETH.axl",
        coinMinimalDenom: "steth-wei",
        coinDecimals: 18,
        coinGeckoId: "staked-ether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/steth-wei.png",
      },
      {
        coinDenom: "UNI.axl",
        coinMinimalDenom: "uni-wei",
        coinDecimals: 18,
        coinGeckoId: "uniswap",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/uni-wei.png",
      },
      {
        coinDenom: "XCN.axl",
        coinMinimalDenom: "xcn-wei",
        coinDecimals: 18,
        coinGeckoId: "chain-2",
      },
      {
        coinDenom: "WGLMR.axl",
        coinMinimalDenom: "wglmr-wei",
        coinDecimals: 18,
        coinGeckoId: "wrapped-moonbeam",
      },
      {
        coinDenom: "DOT.axl",
        coinMinimalDenom: "dot-planck",
        coinDecimals: 10,
        coinGeckoId: "polkadot",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/dot-planck.png",
      },
      {
        coinDenom: "WBNB.axl",
        coinMinimalDenom: "wbnb-wei",
        coinDecimals: 18,
        coinGeckoId: "wbnb",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/wbnb-wei.png",
      },
      {
        coinDenom: "WAVAX.axl",
        coinMinimalDenom: "wavax-wei",
        coinDecimals: 18,
        coinGeckoId: "wrapped-avax",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/wavax-wei.png",
      },
      {
        coinDenom: "WFTM.axl",
        coinMinimalDenom: "wftm-wei",
        coinDecimals: 18,
        coinGeckoId: "wrapped-fantom",
      },
      {
        coinDenom: "rETH.axl",
        coinMinimalDenom: "reth-wei",
        coinDecimals: 18,
        coinGeckoId: "rocket-pool-eth",
      },
      {
        coinDenom: "wstETH.axl",
        coinMinimalDenom: "wsteth-wei",
        coinDecimals: 18,
        coinGeckoId: "wrapped-steth",
      },
      {
        coinDenom: "PolygonUSDC.axl",
        coinMinimalDenom: "polygon-uusdc",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/polygon-uusdc.png",
      },
      {
        coinDenom: "AvalancheUSDC.axl",
        coinMinimalDenom: "avalanche-uusdc",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/avalanche-uusdc.png",
      },
      {
        coinDenom: "WMATIC.axl",
        coinMinimalDenom: "wmatic-wei",
        coinDecimals: 18,
        coinGeckoId: "wmatic",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/wmatic-wei.png",
      },
      {
        coinDenom: "ARB.axl",
        coinMinimalDenom: "arb-wei",
        coinDecimals: 18,
        coinGeckoId: "arbitrum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/arb-wei.png",
      },
      {
        coinDenom: "YUM.axl",
        coinMinimalDenom: "yum-wei",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/yum-wei.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "AXL",
        coinMinimalDenom: "uaxl",
        coinDecimals: 6,
        coinGeckoId: "axelar",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-dojo/uaxl.png",
        gasPriceStep: {
          low: 0.007,
          average: 0.007,
          high: 0.01,
        },
      },
    ],
    features: ["axelar-evm-bridge"],
  },
  AXELAR_TESTNET_AXELAR_TESTNET_LISBON_3: {
    rpc: "https://rpc-axelar-testnet.imperator.co",
    rest: "https://lcd-axelar-testnet.imperator.co",
    chainId: "axelar-testnet-lisbon-3",
    chainName: "Axelar Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-testnet-lisbon/chain.png",
    stakeCurrency: {
      coinDenom: "AXL",
      coinMinimalDenom: "uaxl",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-testnet-lisbon/uaxl.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "axelar",
      bech32PrefixAccPub: "axelarpub",
      bech32PrefixValAddr: "axelarvaloper",
      bech32PrefixValPub: "axelarvaloperpub",
      bech32PrefixConsAddr: "axelarvalcons",
      bech32PrefixConsPub: "axelarvalconspub",
    },
    currencies: [
      {
        coinDenom: "AXL",
        coinMinimalDenom: "uaxl",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-testnet-lisbon/uaxl.png",
      },
      {
        coinDenom: "ETH",
        coinMinimalDenom: "weth-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "uusdc",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-testnet-lisbon/uusdc.png",
      },
      {
        coinDenom: "FRAX",
        coinMinimalDenom: "frax-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "DAI",
        coinMinimalDenom: "dai-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "USDT",
        coinMinimalDenom: "uusdt",
        coinDecimals: 6,
      },
      {
        coinDenom: "WBTC",
        coinMinimalDenom: "wbtc-satoshi",
        coinDecimals: 8,
      },
      {
        coinDenom: "LINK",
        coinMinimalDenom: "link-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "AAVE",
        coinMinimalDenom: "aave-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "APE",
        coinMinimalDenom: "ape-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "AXS",
        coinMinimalDenom: "axs-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "MKR",
        coinMinimalDenom: "mkr-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "RAI",
        coinMinimalDenom: "rai-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "SHIB",
        coinMinimalDenom: "shib-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "stETH",
        coinMinimalDenom: "steth-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "UNI",
        coinMinimalDenom: "uni-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "XCN",
        coinMinimalDenom: "xcn-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "WGLMR",
        coinMinimalDenom: "wglmr-wei",
        coinDecimals: 18,
      },
      {
        coinDenom: "DOT",
        coinMinimalDenom: "dot-planck",
        coinDecimals: 10,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "AXL",
        coinMinimalDenom: "uaxl",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/axelar-testnet-lisbon/uaxl.png",
        gasPriceStep: {
          low: 0.007,
          average: 0.007,
          high: 0.01,
        },
      },
    ],
    features: ["axelar-evm-bridge"],
  },
  BANDCHAIN_TESTNET_BAND_LAOZI_TESTNET6: {
    chainId: "band-laozi-testnet6",
    chainName: "BandChain Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/band-laozi-testnet6/chain.png",
    rpc: "https://rpc.laozi-testnet6.bandchain.org:443",
    rest: "https://laozi-testnet6.bandchain.org/api",
    nodeProvider: {
      name: "Band Protocol",
      email: "dev@bandprotocol.com",
      website: "https://bandprotocol.com",
    },
    bip44: {
      coinType: 494,
    },
    bech32Config: {
      bech32PrefixAccAddr: "band",
      bech32PrefixAccPub: "bandpub",
      bech32PrefixValAddr: "bandvaloper",
      bech32PrefixValPub: "bandvaloperpub",
      bech32PrefixConsAddr: "bandvalcons",
      bech32PrefixConsPub: "bandvalconspub",
    },
    currencies: [
      {
        coinDenom: "BAND",
        coinMinimalDenom: "uband",
        coinDecimals: 6,
        coinGeckoId: "band-protocol",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BAND",
        coinMinimalDenom: "uband",
        coinDecimals: 6,
        coinGeckoId: "band-protocol",
        gasPriceStep: {
          low: 0.0025,
          average: 0.003,
          high: 0.005,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "BAND",
      coinMinimalDenom: "uband",
      coinDecimals: 6,
      coinGeckoId: "band-protocol",
    },
    features: [],
  },
  PICASSO_TESTNET_BANKSY_TESTNET_5: {
    rpc: "https://rpc-testnet5.composable-cosmos.composablenodes.tech",
    rest: "https://api-testnet5.composable-cosmos.composablenodes.tech",
    nodeProvider: {
      name: "Composable",
      email: "jafar@composable.finance",
      website: "https://www.picasso.network/",
    },
    chainId: "banksy-testnet-5",
    chainName: "Picasso Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/banksy-testnet/chain.png",
    stakeCurrency: {
      coinDenom: "PICA",
      coinMinimalDenom: "ppica",
      coinDecimals: 12,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/banksy-testnet/ppica.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "pica",
      bech32PrefixAccPub: "picapub",
      bech32PrefixValAddr: "picavaloper",
      bech32PrefixValPub: "picavaloperpub",
      bech32PrefixConsAddr: "picavalcons",
      bech32PrefixConsPub: "picavalconspub",
    },
    currencies: [
      {
        coinDenom: "PICA",
        coinMinimalDenom: "ppica",
        coinDecimals: 12,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/banksy-testnet/ppica.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "PICA",
        coinMinimalDenom: "ppica",
        coinDecimals: 12,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/banksy-testnet/ppica.png",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0,
        },
      },
    ],
    features: [],
  },
  BABYLON_DEVNET_BBN_DEV_5: {
    chainId: "bbn-dev-5",
    chainName: "Babylon Devnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-dev/chain.png",
    rpc: "https://rpc.devnet.babylonchain.io",
    rest: "https://lcd.devnet.babylonchain.io",
    nodeProvider: {
      name: "Babylonchain",
      email: "contact@babylonchain.io",
      website: "https://babylonchain.io/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "bbn",
      bech32PrefixAccPub: "bbnpub",
      bech32PrefixValAddr: "bbnvaloper",
      bech32PrefixValPub: "bbnvaloperpub",
      bech32PrefixConsAddr: "bbnvalcons",
      bech32PrefixConsPub: "bbnvalconspub",
    },
    currencies: [
      {
        coinDenom: "BBN",
        coinMinimalDenom: "ubbn",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-dev/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BBN",
        coinMinimalDenom: "ubbn",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-dev/chain.png",
        gasPriceStep: {
          low: 0.007,
          average: 0.007,
          high: 0.01,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "BBN",
      coinMinimalDenom: "ubbn",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-dev/chain.png",
    },
    features: ["cosmwasm"],
  },
  BABYLON_TESTNET_BBN_TEST_3: {
    chainId: "bbn-test-3",
    chainName: "Babylon Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png",
    rpc: "https://rpc.testnet3.babylonchain.io",
    rest: "https://lcd.testnet3.babylonchain.io",
    nodeProvider: {
      name: "Babylonchain",
      email: "contact@babylonchain.io",
      website: "https://babylonchain.io/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "bbn",
      bech32PrefixAccPub: "bbnpub",
      bech32PrefixValAddr: "bbnvaloper",
      bech32PrefixValPub: "bbnvaloperpub",
      bech32PrefixConsAddr: "bbnvalcons",
      bech32PrefixConsPub: "bbnvalconspub",
    },
    currencies: [
      {
        coinDenom: "BBN",
        coinMinimalDenom: "ubbn",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BBN",
        coinMinimalDenom: "ubbn",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png",
        gasPriceStep: {
          low: 0.007,
          average: 0.007,
          high: 0.01,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "BBN",
      coinMinimalDenom: "ubbn",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bbn-test/chain.png",
    },
    features: ["cosmwasm"],
  },
  BEEZEE_BEEZEE_1: {
    chainId: "beezee-1",
    chainName: "BeeZee",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/beezee/chain.png",
    rpc: "https://rpc.getbze.com",
    rest: "https://rest.getbze.com",
    nodeProvider: {
      name: "BZE Alpha Team",
      email: "alphateam@getbze.com",
      website: "https://getbze.com",
    },
    stakeCurrency: {
      coinDenom: "BZE",
      coinMinimalDenom: "ubze",
      coinDecimals: 6,
      coinGeckoId: "bzedge",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/beezee/chain.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "bze",
      bech32PrefixAccPub: "bzepub",
      bech32PrefixValAddr: "bzevaloper",
      bech32PrefixValPub: "bzevaloperpub",
      bech32PrefixConsAddr: "bzevalcons",
      bech32PrefixConsPub: "bzevalconspub",
    },
    currencies: [
      {
        coinDenom: "BZE",
        coinMinimalDenom: "ubze",
        coinDecimals: 6,
        coinGeckoId: "bzedge",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/beezee/chain.png",
      },
      {
        coinDenom: "VDL",
        coinMinimalDenom:
          "factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl",
        coinDecimals: 6,
        coinGeckoId: "vidulum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/beezee/factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl.png",
      },
      {
        coinDenom: "C2M",
        coinMinimalDenom:
          "factory/bze15pqjgk4la0mfphwddce00d05n3th3u66n3ptcv/2MARS",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/beezee/factory/bze15pqjgk4la0mfphwddce00d05n3th3u66n3ptcv/c2m.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BZE",
        coinMinimalDenom: "ubze",
        coinDecimals: 6,
        coinGeckoId: "bzedge",
        gasPriceStep: {
          low: 0.001,
          average: 0.01,
          high: 0.1,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/beezee/chain.png",
      },
    ],
    features: [],
  },
  HEDGE__TESTNET__BERBERIS_1: {
    rpc: "https://rpc-berberis.hedgeblock.io",
    rest: "https://lcd-berberis.hedgeblock.io",
    nodeProvider: {
      name: "Hedge",
      email: "support@hedgeblock.io",
      website: "https://www.hedgeblock.io/",
    },
    chainId: "berberis-1",
    chainName: "Hedge (Testnet)",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/berberis/chain.png",
    bech32Config: {
      bech32PrefixAccAddr: "hedge",
      bech32PrefixAccPub: "hedgepub",
      bech32PrefixValAddr: "hedgevaloper",
      bech32PrefixValPub: "hedgevaloperpub",
      bech32PrefixConsAddr: "hedgevalcons",
      bech32PrefixConsPub: "hedgevalconspub",
    },
    bip44: {
      coinType: 118,
    },
    stakeCurrency: {
      coinDenom: "hedge",
      coinDecimals: 6,
      coinMinimalDenom: "uhedge",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/berberis/berberis.png",
    },
    currencies: [
      {
        coinDenom: "hedge",
        coinDecimals: 6,
        coinMinimalDenom: "uhedge",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/berberis/berberis.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "hedge",
        coinDecimals: 6,
        coinMinimalDenom: "uhedge",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/berberis/berberis.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  TUCANA_TESTNET_BIRDEE_1: {
    rpc: "https://rpc.birdee-1.tucana.zone",
    rest: "https://lcd.birdee-1.tucana.zone",
    chainId: "birdee-1",
    chainName: "Tucana Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/birdee/chain.png",
    walletUrlForStaking: "https://testnet.keplr.app/chains/tucana",
    nodeProvider: {
      name: "Tucana",
      email: "infra@tucana.zone",
      website: "https://tucana.zone",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "init",
      bech32PrefixAccPub: "initpub",
      bech32PrefixValAddr: "initvaloper",
      bech32PrefixValPub: "initvaloperpub",
      bech32PrefixConsAddr: "initvalcons",
      bech32PrefixConsPub: "initvalconspub",
    },
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "TUC",
      coinMinimalDenom: "utuc",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/birdee/chain.png",
    },
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "TUC",
        coinMinimalDenom: "utuc",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/birdee/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TUC",
        coinMinimalDenom: "utuc",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/birdee/chain.png",
        gasPriceStep: {
          low: 0.15,
          average: 0.3,
          high: 1,
        },
      },
    ],
    features: [],
  },
  BITCANNA_V1_BITCANNA_1: {
    chainId: "bitcanna-1",
    chainName: "BitCanna v1",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bitcanna/chain.png",
    rpc: "https://rpc.bitcanna.io/",
    rest: "https://lcd.bitcanna.io/",
    nodeProvider: {
      name: "BitCanna Node",
      email: "dev@bitcanna.io",
      website: "https://www.bitcanna.io",
    },
    stakeCurrency: {
      coinDenom: "BCNA",
      coinMinimalDenom: "ubcna",
      coinDecimals: 6,
      coinGeckoId: "bitcanna",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "bcna",
      bech32PrefixAccPub: "bcnapub",
      bech32PrefixValAddr: "bcnavaloper",
      bech32PrefixValPub: "bcnavaloperpub",
      bech32PrefixConsAddr: "bcnavalcons",
      bech32PrefixConsPub: "bcnavalconspub",
    },
    currencies: [
      {
        coinDenom: "BCNA",
        coinMinimalDenom: "ubcna",
        coinDecimals: 6,
        coinGeckoId: "bitcanna",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bitcanna/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BCNA",
        coinMinimalDenom: "ubcna",
        coinDecimals: 6,
        coinGeckoId: "bitcanna",
        gasPriceStep: {
          low: 0.001,
          average: 0.0025,
          high: 0.01,
        },
      },
    ],
    features: [],
    walletUrlForStaking: "https://wallet.bitcanna.io",
  },
  BITSONG_BITSONG_2B: {
    rpc: "https://rpc.explorebitsong.com",
    rest: "https://lcd.explorebitsong.com",
    nodeProvider: {
      name: "BitSong",
      email: "hello@bitsong.io",
      website: "https://bitsong.io/",
    },
    chainId: "bitsong-2b",
    chainName: "BitSong",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bitsong-2b/image.png",
    stakeCurrency: {
      coinDenom: "BTSG",
      coinMinimalDenom: "ubtsg",
      coinDecimals: 6,
      coinGeckoId: "bitsong",
    },
    walletUrl: "https://wallet.bitsong.io",
    walletUrlForStaking: "https://wallet.bitsong.io/#/validators",
    bip44: {
      coinType: 639,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "bitsong",
      bech32PrefixAccPub: "bitsongpub",
      bech32PrefixValAddr: "bitsongvaloper",
      bech32PrefixValPub: "bitsongvaloperpub",
      bech32PrefixConsAddr: "bitsongvalcons",
      bech32PrefixConsPub: "bitsongvalconspub",
    },
    currencies: [
      {
        coinDenom: "BTSG",
        coinMinimalDenom: "ubtsg",
        coinDecimals: 6,
        coinGeckoId: "bitsong",
      },
      {
        coinDenom: "CLAY",
        coinMinimalDenom: "ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09",
        coinDecimals: 6,
      },
      {
        coinDenom: "LDON",
        coinMinimalDenom: "ft347B1612A2B7659913679CF6CD45B8B130C50A00",
        coinDecimals: 6,
      },
      {
        coinDenom: "CMQZ",
        coinMinimalDenom: "ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3",
        coinDecimals: 6,
      },
      {
        coinDenom: "TESTA",
        coinMinimalDenom: "ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12",
        coinDecimals: 6,
      },
      {
        coinDenom: "FASANO",
        coinMinimalDenom: "ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7",
        coinDecimals: 6,
      },
      {
        coinDenom: "D9X",
        coinMinimalDenom: "ft575B10B0CEE2C164D9ED6A96313496F164A9607C",
        coinDecimals: 6,
      },
      {
        coinDenom: "VIBRA",
        coinMinimalDenom: "ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B",
        coinDecimals: 6,
      },
      {
        coinDenom: "RWNE",
        coinMinimalDenom: "ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A",
        coinDecimals: 6,
      },
      {
        coinDenom: "BJKS",
        coinMinimalDenom: "ft52EEB0EE509AC546ED92EAC8591F731F213DDD16",
        coinDecimals: 6,
      },
      {
        coinDenom: "FONTI",
        coinMinimalDenom: "ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305",
        coinDecimals: 6,
      },
      {
        coinDenom: "LOBO",
        coinMinimalDenom: "ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB",
        coinDecimals: 6,
      },
      {
        coinDenom: "KARINA",
        coinMinimalDenom: "ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE",
        coinDecimals: 6,
      },
      {
        coinDenom: "N43",
        coinMinimalDenom: "ft387C1C279D962ED80C09C1D592A92C4275FD7C5D",
        coinDecimals: 6,
      },
      {
        coinDenom: "404DR",
        coinMinimalDenom: "ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A",
        coinDecimals: 6,
      },
      {
        coinDenom: "ENMODA",
        coinMinimalDenom: "ft85AE1716C5E39EA6D64BBD7898C3899A7B500626",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BTSG",
        coinMinimalDenom: "ubtsg",
        coinDecimals: 6,
        coinGeckoId: "bitsong",
        gasPriceStep: {
          low: 0.5,
          average: 3,
          high: 5,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  BLOCKX_BLOCKX_100_1: {
    chainId: "blockx_100-1",
    chainName: "BlockX",
    rpc: "https://rpc.blockxnet.com",
    rest: "https://api.blockxnet.com",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/blockx_100/chain.png",
    nodeProvider: {
      name: "BlockX",
      email: "contact@blockxnet.com",
      website: "https://blockxnet.com/",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "blockx",
      bech32PrefixAccPub: "blockxpub",
      bech32PrefixValAddr: "blockxvaloper",
      bech32PrefixValPub: "blockxvaloperpub",
      bech32PrefixConsAddr: "blockxvalcons",
      bech32PrefixConsPub: "blockxvalconspub",
    },
    currencies: [
      {
        coinDenom: "BCX",
        coinMinimalDenom: "abcx",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BCX",
        coinMinimalDenom: "abcx",
        coinDecimals: 18,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "BCX",
      coinMinimalDenom: "abcx",
      coinDecimals: 18,
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  BLUZELLE_TESTNET_BLUZELLE_TESTNET_10: {
    rpc: "https://a.client.sentry.neerajnet.bluzelle.com:26657",
    rest: "https://a.client.sentry.neerajnet.bluzelle.com:1317",
    nodeProvider: {
      name: "Bluzelle",
      email: "support@bluzelle.com",
      website: "https://bluzelle.com/",
    },
    chainId: "bluzelle-testnet-10",
    chainName: "Bluzelle Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bluzelle-testnet/chain.png",
    stakeCurrency: {
      coinDenom: "BNT",
      coinMinimalDenom: "ubnt",
      coinDecimals: 6,
    },
    walletUrl: "https://a.ping.explorer.neerajnet.bluzelle.com/bluzelle",
    walletUrlForStaking:
      "https://a.ping.explorer.neerajnet.bluzelle.com/bluzelle/staking",
    bip44: {
      coinType: 483,
    },
    bech32Config: {
      bech32PrefixAccAddr: "bluzelle",
      bech32PrefixAccPub: "bluzellepub",
      bech32PrefixValAddr: "bluzellevaloper",
      bech32PrefixValPub: "bluzellevaloperpub",
      bech32PrefixConsAddr: "bluzellevalcons",
      bech32PrefixConsPub: "bluzellevalconspub",
    },
    currencies: [
      {
        coinDenom: "BLZ",
        coinMinimalDenom: "ubnt",
        coinDecimals: 6,
      },
      {
        coinDenom: "ELT",
        coinMinimalDenom: "uelt",
        coinDecimals: 6,
      },
      {
        coinDenom: "G4",
        coinMinimalDenom: "ug4",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BNT",
        coinMinimalDenom: "ubnt",
        coinDecimals: 6,
      },
    ],
    features: [],
  },
  BLUZELLE_BLUZELLE_9: {
    rpc: "https://a.client.sentry.net.bluzelle.com:26657",
    rest: "https://a.client.sentry.net.bluzelle.com:1317",
    nodeProvider: {
      name: "Bluzelle",
      email: "support@bluzelle.com",
      website: "https://bluzelle.com/",
    },
    chainId: "bluzelle-9",
    chainName: "Bluzelle",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bluzelle/chain.png",
    stakeCurrency: {
      coinDenom: "BNT",
      coinMinimalDenom: "ubnt",
      coinDecimals: 6,
      coinGeckoId: "bluzelle",
    },
    walletUrl: "https://ping.explorer.net.bluzelle.com/Bluzelle",
    walletUrlForStaking:
      "https://ping.explorer.net.bluzelle.com/Bluzelle/staking",
    bip44: {
      coinType: 483,
    },
    bech32Config: {
      bech32PrefixAccAddr: "bluzelle",
      bech32PrefixAccPub: "bluzellepub",
      bech32PrefixValAddr: "bluzellevaloper",
      bech32PrefixValPub: "bluzellevaloperpub",
      bech32PrefixConsAddr: "bluzellevalcons",
      bech32PrefixConsPub: "bluzellevalconspub",
    },
    currencies: [
      {
        coinDenom: "BLZ",
        coinMinimalDenom: "ubnt",
        coinDecimals: 6,
        coinGeckoId: "bluzelle",
      },
      {
        coinDenom: "ELT",
        coinMinimalDenom: "uelt",
        coinDecimals: 6,
      },
      {
        coinDenom: "G4",
        coinMinimalDenom: "ug4",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BNT",
        coinMinimalDenom: "ubnt",
        coinDecimals: 6,
        coinGeckoId: "bluzelle",
      },
    ],
    features: [],
  },
  BOSTROM_BOSTROM: {
    rpc: "https://rpc-cyber.keplr.app",
    rest: "https://lcd-cyber.keplr.app",
    chainId: "bostrom",
    chainName: "Bostrom",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bostrom/chain.png",
    stakeCurrency: {
      coinDenom: "BOOT",
      coinMinimalDenom: "boot",
      coinDecimals: 0,
      coinGeckoId: "bostrom",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bostrom/boot.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/bostrom",
    walletUrlForStaking: "https://wallet.keplr.app/chains/bostrom",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "bostrom",
      bech32PrefixAccPub: "bostrompub",
      bech32PrefixValAddr: "bostromvaloper",
      bech32PrefixValPub: "bostromvaloperpub",
      bech32PrefixConsAddr: "bostromvalcons",
      bech32PrefixConsPub: "bostromvalconspub",
    },
    currencies: [
      {
        coinDenom: "BOOT",
        coinMinimalDenom: "boot",
        coinDecimals: 0,
        coinGeckoId: "bostrom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bostrom/boot.png",
      },
      {
        coinDenom: "H",
        coinMinimalDenom: "hydrogen",
        coinDecimals: 0,
      },
      {
        coinDenom: "V",
        coinMinimalDenom: "millivolt",
        coinDecimals: 3,
      },
      {
        coinDenom: "A",
        coinMinimalDenom: "milliampere",
        coinDecimals: 3,
      },
      {
        coinDenom: "TOCYB",
        coinMinimalDenom: "tocyb",
        coinDecimals: 0,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BOOT",
        coinMinimalDenom: "boot",
        coinDecimals: 0,
        coinGeckoId: "bostrom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bostrom/boot.png",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0.01,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  WARDEN_PROTOCOL_BUENAVISTA_BUENAVISTA_1: {
    bech32Config: {
      bech32PrefixAccAddr: "warden",
      bech32PrefixAccPub: "wardenpub",
      bech32PrefixConsAddr: "wardenvalcons",
      bech32PrefixConsPub: "wardenvalconspub",
      bech32PrefixValAddr: "wardenvaloper",
      bech32PrefixValPub: "wardenvaloperpub",
    },
    bip44: {
      coinType: 118,
    },
    chainId: "buenavista-1",
    chainName: "Warden Protocol Buenavista",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/buenavista/chain.png",
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "WARD",
        coinMinimalDenom: "uward",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/buenavista/uward.png",
      },
    ],
    features: [],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: "WARD",
        coinMinimalDenom: "uward",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/buenavista/uward.png",
        gasPriceStep: {
          average: 0.025,
          high: 0.03,
          low: 0.005,
        },
      },
    ],
    rest: "https://api.buenavista.wardenprotocol.org",
    rpc: "https://rpc.buenavista.wardenprotocol.org",
    nodeProvider: {
      name: "Warden Protocol",
      email: "tech@wardenprotocol.org",
      website: "https://wardenprotocol.org/",
    },
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "WARD",
      coinMinimalDenom: "uward",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/buenavista/uward.png",
    },
  },
  BEEZEE_TESTNET_BZETESTNET_2: {
    chainId: "bzetestnet-2",
    chainName: "BeeZee Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bzetestnet/chain.png",
    rpc: "https://testnet-rpc.getbze.com",
    rest: "https://testnet.getbze.com",
    nodeProvider: {
      name: "BZE Alpha Team",
      email: "alphateam@getbze.com",
      website: "https://getbze.com",
    },
    stakeCurrency: {
      coinDenom: "TBZE",
      coinMinimalDenom: "utbz",
      coinDecimals: 6,
      coinGeckoId: "bzedge",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bzetestnet/chain.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "testbz",
      bech32PrefixAccPub: "testbzpub",
      bech32PrefixValAddr: "testbzvaloper",
      bech32PrefixValPub: "testbzvaloperpub",
      bech32PrefixConsAddr: "testbzvalcons",
      bech32PrefixConsPub: "testbzvalconspub",
    },
    currencies: [
      {
        coinDenom: "TBZE",
        coinMinimalDenom: "utbz",
        coinDecimals: 6,
        coinGeckoId: "bzedge",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bzetestnet/chain.png",
      },
      {
        coinDenom: "TVDL",
        coinMinimalDenom:
          "factory/testbz1z3mkcr2jz424w6m49frgjmy9uhlrx69p4cvrgf/vidulum",
        coinDecimals: 6,
        coinGeckoId: "vidulum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bzetestnet/factory/testbz1z3mkcr2jz424w6m49frgjmy9uhlrx69p4cvrgf/vidulum.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TBZE",
        coinMinimalDenom: "utbz",
        coinDecimals: 6,
        coinGeckoId: "bzedge",
        gasPriceStep: {
          low: 0.001,
          average: 0.01,
          high: 0.1,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/bzetestnet/chain.png",
      },
    ],
    features: [],
  },
  CANTO_CANTO_7700_1: {
    rpc: "http://canto.plexnode.dev:16657",
    rest: "https://canto-rest.plexnode.wtf",
    chainId: "canto_7700-1",
    chainName: "Canto",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/canto_7700/chain.png",
    nodeProvider: {
      name: "Plex Labs",
      email: "contact@plex.engineer",
      website: "https://plex.engineer/",
    },
    stakeCurrency: {
      coinDenom: "CANTO",
      coinMinimalDenom: "acanto",
      coinDecimals: 18,
      coinGeckoId: "canto",
    },
    walletUrl: "https://canto.io/",
    walletUrlForStaking: "https://canto.io/staking",
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "canto",
      bech32PrefixAccPub: "cantopub",
      bech32PrefixValAddr: "cantovaloper",
      bech32PrefixValPub: "cantovaloperpub",
      bech32PrefixConsAddr: "cantovalcons",
      bech32PrefixConsPub: "cantovalconspub",
    },
    currencies: [
      {
        coinDenom: "CANTO",
        coinMinimalDenom: "acanto",
        coinDecimals: 18,
        coinGeckoId: "canto",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CANTO",
        coinMinimalDenom: "acanto",
        coinDecimals: 18,
        coinGeckoId: "canto",
        gasPriceStep: {
          low: 1250000000000,
          average: 2500000000000,
          high: 3750000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  CARBON_CARBON_1: {
    chainId: "carbon-1",
    chainName: "Carbon",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/carbon/chain.png",
    rpc: "https://tm-api.carbon.network",
    rest: "https://api.carbon.network",
    nodeProvider: {
      name: "Switcheo Labs",
      email: "info@switcheo.network",
      website: "https://www.switcheo.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "swth",
      bech32PrefixAccPub: "swthpub",
      bech32PrefixValAddr: "swthvaloper",
      bech32PrefixValPub: "swthvaloperpub",
      bech32PrefixConsAddr: "swthvalcons",
      bech32PrefixConsPub: "swthvalconspub",
    },
    currencies: [
      {
        coinDenom: "SWTH",
        coinMinimalDenom: "swth",
        coinDecimals: 8,
        coinGeckoId: "switcheo",
      },
      {
        coinDenom: "BNB",
        coinMinimalDenom: "bnb.1.6.773edb",
        coinDecimals: 18,
        coinGeckoId: "binancecoin",
      },
      {
        coinDenom: "bNEO",
        coinMinimalDenom: "bneo.1.14.e2e5f6",
        coinDecimals: 8,
        coinGeckoId: "neo",
      },
      {
        coinDenom: "BUSD",
        coinMinimalDenom: "busd.1.6.754a80",
        coinDecimals: 18,
        coinGeckoId: "binance-usd",
      },
      {
        coinDenom: "CGLP",
        coinMinimalDenom: "cglp.1.19.1698d3",
        coinDecimals: 18,
      },
      {
        coinDenom: "ETH",
        coinMinimalDenom: "eth.1.19.c3b805",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
      },
      {
        coinDenom: "ETH",
        coinMinimalDenom: "eth.1.2.942d87",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
      },
      {
        coinDenom: "USC",
        coinMinimalDenom: "usc",
        coinDecimals: 6,
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "usdc.1.2.343151",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "usdc.1.6.53ff75",
        coinDecimals: 18,
        coinGeckoId: "usd-coin",
      },
      {
        coinDenom: "USD",
        coinMinimalDenom: "cgt/1",
        coinDecimals: 18,
        coinGeckoId: "usd-coin",
      },
      {
        coinDenom: "ZIL",
        coinMinimalDenom: "zil.1.18.1a4a06",
        coinDecimals: 12,
        coinGeckoId: "zilliqa",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SWTH",
        coinMinimalDenom: "swth",
        coinDecimals: 8,
        coinGeckoId: "switcheo",
        gasPriceStep: {
          low: 100,
          average: 100,
          high: 100,
        },
      },
      {
        coinDenom: "BNB",
        coinMinimalDenom: "bnb.1.6.773edb",
        coinDecimals: 18,
        coinGeckoId: "binancecoin",
        gasPriceStep: {
          low: 33333333.3333334,
          average: 33333333.3333334,
          high: 33333333.3333334,
        },
      },
      {
        coinDenom: "bNEO",
        coinMinimalDenom: "bneo.1.14.e2e5f6",
        coinDecimals: 8,
        coinGeckoId: "neo",
        gasPriceStep: {
          low: 0.05,
          average: 0.05,
          high: 0.05,
        },
      },
      {
        coinDenom: "BUSD",
        coinMinimalDenom: "busd.1.6.754a80",
        coinDecimals: 18,
        coinGeckoId: "binance-usd",
        gasPriceStep: {
          low: 3333333333.33334,
          average: 3333333333.33334,
          high: 3333333333.33334,
        },
      },
      {
        coinDenom: "CGLP",
        coinMinimalDenom: "cglp.1.19.1698d3",
        coinDecimals: 18,
        gasPriceStep: {
          low: 3333333333.33334,
          average: 3333333333.33334,
          high: 3333333333.33334,
        },
      },
      {
        coinDenom: "ETH",
        coinMinimalDenom: "eth.1.19.c3b805",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        gasPriceStep: {
          low: 3333333.33333334,
          average: 3333333.33333334,
          high: 3333333.33333334,
        },
      },
      {
        coinDenom: "ETH",
        coinMinimalDenom: "eth.1.2.942d87",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        gasPriceStep: {
          low: 3333333.33333334,
          average: 3333333.33333334,
          high: 3333333.33333334,
        },
      },
      {
        coinDenom: "STARS",
        coinMinimalDenom:
          "ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C",
        coinDecimals: 6,
        coinGeckoId: "stargaze",
        gasPriceStep: {
          low: 0.116666666667,
          average: 0.116666666667,
          high: 0.116666666667,
        },
      },
      {
        coinDenom: "LUNA",
        coinMinimalDenom:
          "ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.001666666667,
          average: 0.001666666667,
          high: 0.001666666667,
        },
      },
      {
        coinDenom: "STRD",
        coinMinimalDenom:
          "ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5",
        coinDecimals: 6,
        coinGeckoId: "stride",
        gasPriceStep: {
          low: 0.010666666667,
          average: 0.010666666667,
          high: 0.010666666667,
        },
      },
      {
        coinDenom: "EVMOS",
        coinMinimalDenom:
          "ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364",
        coinDecimals: 18,
        coinGeckoId: "evmos",
        gasPriceStep: {
          low: 10000000000,
          average: 10000000000,
          high: 10000000000,
        },
      },
      {
        coinDenom: "IRIS",
        coinMinimalDenom:
          "ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118",
        coinDecimals: 6,
        coinGeckoId: "iris-network",
        gasPriceStep: {
          low: 0.02,
          average: 0.02,
          high: 0.02,
        },
      },
      {
        coinDenom: "KUJI",
        coinMinimalDenom:
          "ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5",
        coinDecimals: 6,
        coinGeckoId: "kujira",
        gasPriceStep: {
          low: 0.005,
          average: 0.005,
          high: 0.005,
        },
      },
      {
        coinDenom: "stOSMO",
        coinMinimalDenom:
          "ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        gasPriceStep: {
          low: 0.005,
          average: 0.005,
          high: 0.005,
        },
      },
      {
        coinDenom: "CANTO",
        coinMinimalDenom:
          "ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861",
        coinDecimals: 18,
        coinGeckoId: "canto",
        gasPriceStep: {
          low: 6666666666.66667,
          average: 6666666666.66667,
          high: 6666666666.66667,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        gasPriceStep: {
          low: 0.000333333334,
          average: 0.000333333334,
          high: 0.000333333334,
        },
      },
      {
        coinDenom: "stATOM",
        coinMinimalDenom:
          "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.000333333334,
          average: 0.000333333334,
          high: 0.000333333334,
        },
      },
      {
        coinDenom: "OSMO",
        coinMinimalDenom:
          "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        gasPriceStep: {
          low: 0.005,
          average: 0.005,
          high: 0.005,
        },
      },
      {
        coinDenom: "USC",
        coinMinimalDenom: "usc",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.003333333334,
          average: 0.003333333334,
          high: 0.003333333334,
        },
      },
      {
        coinDenom: "USD",
        coinMinimalDenom: "cgt/1",
        coinDecimals: 18,
        coinGeckoId: "usd-coin",
        gasPriceStep: {
          low: 3333333333.33334,
          average: 3333333333.33334,
          high: 3333333333.33334,
        },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "usdc.1.2.343151",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        gasPriceStep: {
          low: 0.00333333333333334,
          average: 0.00333333333333334,
          high: 0.00333333333333334,
        },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "usdc.1.6.53ff75",
        coinDecimals: 18,
        coinGeckoId: "usd-coin",
        gasPriceStep: {
          low: 3333333333.33334,
          average: 3333333333.33334,
          high: 3333333333.33334,
        },
      },
      {
        coinDenom: "ZIL",
        coinMinimalDenom: "zil.1.18.1a4a06",
        coinDecimals: 12,
        coinGeckoId: "zilliqa",
        gasPriceStep: {
          low: 200000,
          average: 200000,
          high: 200000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "SWTH",
      coinMinimalDenom: "swth",
      coinDecimals: 8,
      coinGeckoId: "switcheo",
    },
    features: [],
  },
  NIBIRU_CATACLYSM_1: {
    chainId: "cataclysm-1",
    chainName: "Nibiru",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cataclysm/chain.png",
    rpc: "https://rpc.nibiru.fi/",
    rest: "https://lcd.nibiru.fi/",
    nodeProvider: {
      name: "Nibiru Team",
      email: "dev@nibiru.org",
      website: "https://nibiru.fi",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "nibi",
      bech32PrefixAccPub: "nibipub",
      bech32PrefixValAddr: "nibivaloper",
      bech32PrefixValPub: "nibivaloperpub",
      bech32PrefixConsAddr: "nibivalcons",
      bech32PrefixConsPub: "nibivalconspub",
    },
    currencies: [
      {
        coinDenom: "NIBI",
        coinMinimalDenom: "unibi",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cataclysm/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NIBI",
        coinMinimalDenom: "unibi",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cataclysm/chain.png",
        gasPriceStep: {
          low: 0.025,
          average: 0.05,
          high: 0.1,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "NIBI",
      coinMinimalDenom: "unibi",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cataclysm/chain.png",
    },
    features: ["cosmwasm"],
  },
  CELESTIA_CELESTIA: {
    bech32Config: {
      bech32PrefixAccAddr: "celestia",
      bech32PrefixAccPub: "celestiapub",
      bech32PrefixConsAddr: "celestiavalcons",
      bech32PrefixConsPub: "celestiavalconspub",
      bech32PrefixValAddr: "celestiavaloper",
      bech32PrefixValPub: "celestiavaloperpub",
    },
    bip44: {
      coinType: 118,
    },
    chainId: "celestia",
    chainName: "Celestia",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "TIA",
        coinGeckoId: "celestia",
        coinMinimalDenom: "utia",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
      },
    ],
    features: [],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: "TIA",
        coinGeckoId: "celestia",
        coinMinimalDenom: "utia",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.02,
          high: 0.1,
        },
      },
    ],
    rpc: "https://rpc-celestia.keplr.app",
    rest: "https://lcd-celestia.keplr.app",
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "TIA",
      coinGeckoId: "celestia",
      coinMinimalDenom: "utia",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/utia.png",
    },
    walletUrlForStaking: "https://wallet.keplr.app/chains/celestia",
  },
  PICASSO_CENTAURI_1: {
    rpc: "https://composable-rpc.lavenderfive.com:443",
    rest: "https://composable-api.lavenderfive.com:443",
    nodeProvider: {
      name: "Lavender.Five Nodes",
      email: "hello@lavenderfive.com",
      website: "https://lavenderfive.com/",
    },
    chainId: "centauri-1",
    chainName: "Picasso",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/chain.png",
    stakeCurrency: {
      coinDenom: "PICA",
      coinMinimalDenom: "ppica",
      coinDecimals: 12,
      coinGeckoId: "picasso",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/ppica.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "pica",
      bech32PrefixAccPub: "picapub",
      bech32PrefixValAddr: "picavaloper",
      bech32PrefixValPub: "picavaloperpub",
      bech32PrefixConsAddr: "picavalcons",
      bech32PrefixConsPub: "picavalconspub",
    },
    currencies: [
      {
        coinDenom: "PICA",
        coinMinimalDenom: "ppica",
        coinDecimals: 12,
        coinGeckoId: "picasso",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/ppica.png",
      },
      {
        coinDenom: "KSM",
        coinMinimalDenom:
          "ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9",
        coinDecimals: 12,
        coinGeckoId: "kusama",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/ksm.png",
      },
      {
        coinDenom: "DOT",
        coinMinimalDenom:
          "ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366",
        coinDecimals: 10,
        coinGeckoId: "polkadot",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/dot.png",
      },
      {
        coinDenom: "ETH",
        coinMinimalDenom:
          "ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/eth.png",
      },
      {
        coinDenom: "DAI",
        coinMinimalDenom:
          "ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533",
        coinDecimals: 18,
        coinGeckoId: "dai",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/dai.png",
      },
      {
        coinDenom: "FXS",
        coinMinimalDenom:
          "ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29",
        coinDecimals: 18,
        coinGeckoId: "frax-share",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/fxs.png",
      },
      {
        coinDenom: "FRAX",
        coinMinimalDenom:
          "ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB",
        coinDecimals: 18,
        coinGeckoId: "frax",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/frax.png",
      },
      {
        coinDenom: "frxETH",
        coinMinimalDenom:
          "ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90",
        coinDecimals: 18,
        coinGeckoId: "frax-ether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/frxeth.png",
      },
      {
        coinDenom: "sfrxETH",
        coinMinimalDenom:
          "ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A",
        coinDecimals: 18,
        coinGeckoId: "staked-frax-ether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/sfrxeth.png",
      },
      {
        coinDenom: "sFRAX",
        coinMinimalDenom:
          "ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9",
        coinDecimals: 18,
        coinGeckoId: "staked-frax",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/sfrax.png",
      },
      {
        coinDenom: "USDT",
        coinMinimalDenom:
          "ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD",
        coinDecimals: 6,
        coinGeckoId: "tether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/usdt.png",
      },
      {
        coinDenom: "USDe",
        coinMinimalDenom:
          "ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983",
        coinDecimals: 18,
        coinGeckoId: "ethena-usde",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/usde.png",
      },
      {
        coinDenom: "ENA",
        coinMinimalDenom:
          "ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929",
        coinDecimals: 18,
        coinGeckoId: "ethena",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/ena.png",
      },
      {
        coinDenom: "wSOL",
        coinMinimalDenom:
          "ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C",
        coinDecimals: 9,
        coinGeckoId: "solana",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/sol.png",
      },
      {
        coinDenom: "mSOL",
        coinMinimalDenom:
          "ibc/C280CB39B97E7CD33A0BF149CFD392C2A3F95FF896AFF89CFF2FA181479BED8D",
        coinDecimals: 9,
        coinGeckoId: "msol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/msol.png",
      },
      {
        coinDenom: "jitoSOL",
        coinMinimalDenom:
          "ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2",
        coinDecimals: 9,
        coinGeckoId: "jito-staked-sol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/jitosol.png",
      },
      {
        coinDenom: "bSOL",
        coinMinimalDenom:
          "ibc/F52A71607B3AA7BBA8A222A9176E9939E92AB3656A094289CD218907D45DB716",
        coinDecimals: 9,
        coinGeckoId: "blazestake-staked-sol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/bsol.png",
      },
      {
        coinDenom: "LST",
        coinMinimalDenom:
          "ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D",
        coinDecimals: 9,
        coinGeckoId: "liquid-staking-token",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/lst.png",
      },
      {
        coinDenom: "edgeSOL",
        coinMinimalDenom:
          "ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C",
        coinDecimals: 9,
        coinGeckoId: "edgevana-staked-sol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/edgesol.png",
      },
      {
        coinDenom: "hSOL",
        coinMinimalDenom:
          "ibc/531C52D572698BCBA29F44D959E73CD2148EE6542A3118F9E56621A28E1FF4C6",
        coinDecimals: 9,
        coinGeckoId: "helius-staked-sol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/hsol.png",
      },
      {
        coinDenom: "jupSOL",
        coinMinimalDenom:
          "ibc/6976998E24F1CFC373A9F799C9CE901F5EC32C3E33B2B09384A05774D9339626",
        coinDecimals: 9,
        coinGeckoId: "jupiter-staked-sol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/jupsol.png",
      },
      {
        coinDenom: "WIF",
        coinMinimalDenom:
          "ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071",
        coinDecimals: 6,
        coinGeckoId: "dogwifcoin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/wif.png",
      },
      {
        coinDenom: "BONK",
        coinMinimalDenom:
          "ibc/A09E5A2B0DE6CB5E8EC67F1662C7EE4202CEC192923DA1D4FCAEA078B4FCF5AC",
        coinDecimals: 5,
        coinGeckoId: "bonk",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/bonk.png",
      },
      {
        coinDenom: "USDT",
        coinMinimalDenom:
          "ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575",
        coinDecimals: 6,
        coinGeckoId: "tether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/usdt.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "PICA",
        coinMinimalDenom: "ppica",
        coinDecimals: 12,
        coinGeckoId: "picasso",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/centauri/ppica.png",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0,
        },
      },
    ],
    features: [],
  },
  CHEQD_CHEQD_MAINNET_1: {
    chainId: "cheqd-mainnet-1",
    chainName: "Cheqd",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cheqd-mainnet/chain.png",
    rpc: "https://rpc.cheqd.net",
    rest: "https://api.cheqd.net",
    nodeProvider: {
      name: "Cheqd Network",
      email: "security-github@cheqd.io",
      website: "https://cheqd.io/",
    },
    walletUrlForStaking: "https://cheqd.omniflix.co",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cheqd",
      bech32PrefixAccPub: "cheqdpub",
      bech32PrefixValAddr: "cheqdvaloper",
      bech32PrefixValPub: "cheqdvaloperpub",
      bech32PrefixConsAddr: "cheqdvalcons",
      bech32PrefixConsPub: "cheqdvalconspub",
    },
    currencies: [
      {
        coinDenom: "CHEQ",
        coinMinimalDenom: "ncheq",
        coinDecimals: 9,
        coinGeckoId: "cheqd-network",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CHEQ",
        coinMinimalDenom: "ncheq",
        coinDecimals: 9,
        coinGeckoId: "cheqd-network",
        gasPriceStep: {
          low: 25,
          average: 50,
          high: 100,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "CHEQ",
      coinMinimalDenom: "ncheq",
      coinDecimals: 9,
      coinGeckoId: "cheqd-network",
    },
    features: [],
  },
  CHIHUAHUA_CHIHUAHUA_1: {
    chainId: "chihuahua-1",
    chainName: "Chihuahua",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
    rpc: "https://rpc-chihuahua.keplr.app",
    rest: "https://lcd-chihuahua.keplr.app",
    stakeCurrency: {
      coinDenom: "HUAHUA",
      coinMinimalDenom: "uhuahua",
      coinDecimals: 6,
      coinGeckoId: "chihuahua-token",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "chihuahua",
      bech32PrefixAccPub: "chihuahuapub",
      bech32PrefixValAddr: "chihuahuavaloper",
      bech32PrefixValPub: "chihuahuavaloperpub",
      bech32PrefixConsAddr: "chihuahuavalcons",
      bech32PrefixConsPub: "chihuahuavalconspub",
    },
    currencies: [
      {
        coinDenom: "HUAHUA",
        coinMinimalDenom: "uhuahua",
        coinDecimals: 6,
        coinGeckoId: "chihuahua-token",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
      },
      {
        coinDenom: "BADDOG",
        coinMinimalDenom:
          "factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat.png",
      },
      {
        coinDenom: "WOOF",
        coinMinimalDenom:
          "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/woof.png",
      },
      {
        coinDenom: "TACOS",
        coinMinimalDenom:
          "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/tacos.png",
      },
      {
        coinDenom: "WEED",
        coinMinimalDenom:
          "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/weed.png",
      },
      {
        coinDenom: "BDOG",
        coinMinimalDenom:
          "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/bdog.png",
      },
      {
        coinDenom: "CORSO",
        coinMinimalDenom:
          "factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/corso.png",
      },
      {
        coinDenom: "ashHUAHUA",
        coinMinimalDenom:
          "factory/chihuahua1hplyuj2hzxd75q8686g9vm3uzrrny9ggvt8aza2csupgdp98vg2sp0e3h0/uhuahua.ash",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/factory/chihuahua1hplyuj2hzxd75q8686g9vm3uzrrny9ggvt8aza2csupgdp98vg2sp0e3h0/uhuahua.ash.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "HUAHUA",
        coinMinimalDenom: "uhuahua",
        coinDecimals: 6,
        coinGeckoId: "chihuahua-token",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
        gasPriceStep: {
          low: 500,
          average: 1250,
          high: 2000,
        },
      },
    ],
    features: ["cosmwasm"],
    walletUrlForStaking: "https://wallet.keplr.app/chains/chihuahua",
  },
  CIFER_CIFER_2: {
    chainId: "cifer-2",
    chainName: "Cifer",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cifer/cif.png",
    rpc: "https://cif_node.cifer.ai",
    rest: "https://api.cifer.ai",
    nodeProvider: {
      name: "Cifer",
      email: "info@cifer.ai",
      website: "https://www.cifer.ai",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cife",
      bech32PrefixAccPub: "cifepub",
      bech32PrefixValAddr: "cifevaloper",
      bech32PrefixValPub: "cifevaloperpub",
      bech32PrefixConsAddr: "cifevalcons",
      bech32PrefixConsPub: "cifevalconspub",
    },
    currencies: [
      {
        coinDenom: "CIF",
        coinMinimalDenom: "ucif",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cifer/cif.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CIF",
        coinMinimalDenom: "ucif",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0025,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "CIF",
      coinMinimalDenom: "ucif",
      coinDecimals: 6,
    },
  },
  FIRMACHAIN_COLOSSEUM_1: {
    chainId: "colosseum-1",
    chainName: "FirmaChain",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/colosseum/chain.png",
    rpc: "https://lcd-mainnet.firmachain.dev:26657",
    rest: "https://lcd-mainnet.firmachain.dev:1317",
    nodeProvider: {
      name: "FirmaChain",
      email: "contact@firmachain.org",
      website: "https://www.firmachain.org",
    },
    bip44: {
      coinType: 7777777,
    },
    bech32Config: {
      bech32PrefixAccAddr: "firma",
      bech32PrefixAccPub: "firmapub",
      bech32PrefixValAddr: "firmavaloper",
      bech32PrefixValPub: "firmavaloperpub",
      bech32PrefixConsAddr: "firmavalcons",
      bech32PrefixConsPub: "firmavalconspub",
    },
    currencies: [
      {
        coinDenom: "FCT",
        coinMinimalDenom: "ufct",
        coinDecimals: 6,
        coinGeckoId: "firmachain",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FCT",
        coinMinimalDenom: "ufct",
        coinDecimals: 6,
        coinGeckoId: "firmachain",
        gasPriceStep: {
          low: 0.1,
          average: 0.25,
          high: 0.3,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "FCT",
      coinMinimalDenom: "ufct",
      coinDecimals: 6,
      coinGeckoId: "firmachain",
    },
    features: [],
  },
  TERRA_CLASSIC_COLUMBUS_5: {
    rpc: "https://rpc-columbus.keplr.app",
    rest: "https://lcd-columbus.keplr.app",
    chainId: "columbus-5",
    chainName: "Terra Classic",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/columbus/chain.png",
    stakeCurrency: {
      coinDenom: "LUNC",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/columbus/uluna.png",
    },
    bip44: {
      coinType: 330,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "terra",
      bech32PrefixAccPub: "terrapub",
      bech32PrefixValAddr: "terravaloper",
      bech32PrefixValPub: "terravaloperpub",
      bech32PrefixConsAddr: "terravalcons",
      bech32PrefixConsPub: "terravalconspub",
    },
    currencies: [
      {
        coinDenom: "LUNC",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/columbus/uluna.png",
      },
      {
        coinDenom: "USTC",
        coinMinimalDenom: "uusd",
        coinDecimals: 6,
        coinGeckoId: "terrausd",
      },
      {
        coinDenom: "KRT",
        coinMinimalDenom: "ukrw",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUNC",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/columbus/uluna.png",
        gasPriceStep: {
          low: 28.325,
          average: 28.325,
          high: 28.325,
        },
      },
      {
        coinDenom: "USTC",
        coinMinimalDenom: "uusd",
        coinDecimals: 6,
        coinGeckoId: "terrausd",
        gasPriceStep: {
          low: 0.75,
          average: 0.75,
          high: 0.75,
        },
      },
    ],
    features: ["terra-classic-fee", "cosmwasm"],
  },
  COMDEX_TESTNET_COMDEX_TEST_4: {
    rpc: "https://testnet-rpc.comdex.one",
    rest: "https://testnet-rest.comdex.one/",
    chainId: "comdex-test-4",
    chainName: "Comdex Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/comdex-test/chain.png",
    nodeProvider: {
      name: "Comdex Testnet Node",
      email: "info@comdex.one",
      website: "https://comdex.one",
    },
    stakeCurrency: {
      coinDenom: "CMDX",
      coinMinimalDenom: "ucmdx",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "comdex",
      bech32PrefixAccPub: "comdexpub",
      bech32PrefixValAddr: "comdexvaloper",
      bech32PrefixValPub: "comdexvaloperpub",
      bech32PrefixConsAddr: "comdexvalcons",
      bech32PrefixConsPub: "comdexvalconspub",
    },
    currencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/comdex-test/chain.png",
      },
      {
        coinDenom: "CMST",
        coinMinimalDenom: "ucmst",
        coinDecimals: 6,
      },
      {
        coinDenom: "HARBOR",
        coinMinimalDenom: "uharbor",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        gasPriceStep: {
          low: 2,
          average: 3,
          high: 4,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/9117A26BA81E29FA4F78F57DC2BD90CD3D26848101BA880445F119B22A1E254E",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01,
        },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0002,
          average: 0.0005,
          high: 0.0008,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  COMDEX_COMDEX_1: {
    rpc: "https://rpc.comdex.one",
    rest: "https://rest.comdex.one",
    chainId: "comdex-1",
    chainName: "Comdex",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/comdex/chain.png",
    nodeProvider: {
      name: "Comdex Node",
      email: "info@comdex.one",
      website: "https://comdex.one",
    },
    stakeCurrency: {
      coinDenom: "CMDX",
      coinMinimalDenom: "ucmdx",
      coinDecimals: 6,
      coinGeckoId: "comdex",
    },
    walletUrl: "https://app.harborprotocol.one",
    walletUrlForStaking: "https://comdex.omniflix.co/stake",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "comdex",
      bech32PrefixAccPub: "comdexpub",
      bech32PrefixValAddr: "comdexvaloper",
      bech32PrefixValPub: "comdexvaloperpub",
      bech32PrefixConsAddr: "comdexvalcons",
      bech32PrefixConsPub: "comdexvalconspub",
    },
    currencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        coinGeckoId: "comdex",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/comdex/chain.png",
      },
      {
        coinDenom: "CMST",
        coinMinimalDenom: "ucmst",
        coinDecimals: 6,
      },
      {
        coinDenom: "HARBOR",
        coinMinimalDenom: "uharbor",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        coinGeckoId: "comdex",
        gasPriceStep: {
          low: 2,
          average: 3,
          high: 4,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/961FA3E54F5DCCA639F37A7C45F7BBE41815579EF1513B5AFBEFCFEB8F256352",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01,
        },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "ibc/D031367F58DFD5EED54A49ADCB4EFB44AD9ECCAE383708BFDCCACF3CF463B77C",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        gasPriceStep: {
          low: 0.0002,
          average: 0.0005,
          high: 0.0008,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  ARCHWAY__TESTNET__CONSTANTINE_3: {
    bech32Config: {
      bech32PrefixAccAddr: "archway",
      bech32PrefixAccPub: "archwaypub",
      bech32PrefixConsAddr: "archwayvalcons",
      bech32PrefixConsPub: "archwayvalconspub",
      bech32PrefixValAddr: "archwayvaloper",
      bech32PrefixValPub: "archwayvaloperpub",
    },
    bip44: {
      coinType: 118,
    },
    chainId: "constantine-3",
    chainName: "Archway (Testnet)",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/constantine/chain.png",
    currencies: [
      {
        coinDecimals: 18,
        coinDenom: "CONST",
        coinMinimalDenom: "aconst",
      },
    ],
    features: ["cosmwasm"],
    feeCurrencies: [
      {
        coinDecimals: 18,
        coinDenom: "CONST",
        coinMinimalDenom: "aconst",
        gasPriceStep: {
          low: 140000000000,
          average: 196000000000,
          high: 225400000000,
        },
      },
    ],
    rest: "https://api.constantine.archway.io",
    rpc: "https://rpc.constantine.archway.io",
    stakeCurrency: {
      coinDecimals: 18,
      coinDenom: "CONST",
      coinMinimalDenom: "aconst",
    },
    nodeProvider: {
      name: "Phi Labs",
      email: "support@philabs.xyz",
      website: "https://philabs.xyz",
    },
  },
  PERSISTENCE_CORE_1: {
    rpc: "https://rpc-persistence.keplr.app",
    rest: "https://lcd-persistence.keplr.app",
    chainId: "core-1",
    chainName: "Persistence",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/chain.png",
    stakeCurrency: {
      coinDenom: "XPRT",
      coinMinimalDenom: "uxprt",
      coinDecimals: 6,
      coinGeckoId: "persistence",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/uxprt.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/persistence",
    walletUrlForStaking: "https://wallet.keplr.app/chains/persistence",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [
      {
        coinType: 750,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "persistence",
      bech32PrefixAccPub: "persistencepub",
      bech32PrefixValAddr: "persistencevaloper",
      bech32PrefixValPub: "persistencevaloperpub",
      bech32PrefixConsAddr: "persistencevalcons",
      bech32PrefixConsPub: "persistencevalconspub",
    },
    currencies: [
      {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinGeckoId: "persistence",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/uxprt.png",
      },
      {
        coinDenom: "stkATOM",
        coinMinimalDenom: "stk/uatom",
        coinDecimals: 6,
        coinGeckoId: "stkatom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkatom.png",
      },
      {
        coinDenom: "stkOSMO",
        coinMinimalDenom: "stk/uosmo",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkosmo.png",
      },
      {
        coinDenom: "stkDYDX",
        coinMinimalDenom: "stk/adydx",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkdydx.png",
      },
      {
        coinDenom: "stkSTARS",
        coinMinimalDenom: "stk/ustars",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkstars.png",
      },
      {
        coinDenom: "stkHUAHUA",
        coinMinimalDenom: "stk/uhuahua",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkhuahua.png",
      },
      {
        coinDenom: "stkXPRT",
        coinMinimalDenom: "stk/uxprt",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkxprt.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinGeckoId: "persistence",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/uxprt.png",
        gasPriceStep: {
          low: 0,
          average: 0.025,
          high: 0.04,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01,
        },
      },
      {
        coinDenom: "stkATOM",
        coinMinimalDenom: "stk/uatom",
        coinDecimals: 6,
        coinGeckoId: "stkatom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkatom.png",
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01,
        },
      },
      {
        coinDenom: "PSTAKE",
        coinMinimalDenom:
          "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
        coinDecimals: 18,
        coinGeckoId: "pstake-finance",
        gasPriceStep: {
          low: 100000000,
          average: 1000000000,
          high: 10000000000,
        },
      },
      {
        coinDenom: "OSMO",
        coinMinimalDenom:
          "ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01,
        },
      },
      {
        coinDenom: "stkOSMO",
        coinMinimalDenom: "stk/uosmo",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkosmo.png",
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01,
        },
      },
      {
        coinDenom: "DYDX",
        coinMinimalDenom:
          "ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E",
        coinDecimals: 18,
        coinGeckoId: "dydx-chain",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/adydx.png",
        gasPriceStep: {
          low: 15000000000,
          average: 15000000000,
          high: 15000000000,
        },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/uusdc.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.05,
          high: 0.1,
        },
      },
      {
        coinDenom: "stkDYDX",
        coinMinimalDenom: "stk/adydx",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/core/stkdydx.png",
        gasPriceStep: {
          low: 15000000000,
          average: 15000000000,
          high: 15000000000,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  COREUM_COREUM_MAINNET_1: {
    chainId: "coreum-mainnet-1",
    chainName: "Coreum",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/coreum-mainnet/chain.png",
    rpc: "https://full-node.mainnet-1.coreum.dev:26657",
    rest: "https://full-node.mainnet-1.coreum.dev:1317",
    nodeProvider: {
      name: "Coreum Full Node",
      website: "https://www.coreum.com/",
      email: "hello@coreum.com",
    },
    bip44: {
      coinType: 990,
    },
    bech32Config: {
      bech32PrefixAccAddr: "core",
      bech32PrefixAccPub: "corepub",
      bech32PrefixValAddr: "corevaloper",
      bech32PrefixValPub: "corevaloperpub",
      bech32PrefixConsAddr: "corevalcons",
      bech32PrefixConsPub: "corevalconspub",
    },
    currencies: [
      {
        coinDenom: "CORE",
        coinMinimalDenom: "ucore",
        coinDecimals: 6,
        coinGeckoId: "coreum",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CORE",
        coinMinimalDenom: "ucore",
        coinDecimals: 6,
        coinGeckoId: "coreum",
        gasPriceStep: {
          low: 0.0625,
          average: 0.0625,
          high: 0.0625,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "CORE",
      coinMinimalDenom: "ucore",
      coinDecimals: 6,
      coinGeckoId: "coreum",
    },
    features: ["cosmwasm"],
  },
  COREUM_TESTNET_COREUM_TESTNET_1: {
    chainId: "coreum-testnet-1",
    chainName: "Coreum Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/coreum-testnet/chain.png",
    rpc: "https://full-node.testnet-1.coreum.dev:26657",
    rest: "https://full-node.testnet-1.coreum.dev:1317",
    nodeProvider: {
      name: "Coreum Full Node",
      website: "https://www.coreum.com/",
      email: "hello@coreum.com",
    },
    bip44: {
      coinType: 990,
    },
    bech32Config: {
      bech32PrefixAccAddr: "testcore",
      bech32PrefixAccPub: "testcorepub",
      bech32PrefixValAddr: "testcorevaloper",
      bech32PrefixValPub: "testcorevaloperpub",
      bech32PrefixConsAddr: "testcorevalcons",
      bech32PrefixConsPub: "testcorevalconspub",
    },
    currencies: [
      {
        coinDenom: "TESTCORE",
        coinMinimalDenom: "utestcore",
        coinDecimals: 6,
        coinGeckoId: "coreum",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TESTCORE",
        coinMinimalDenom: "utestcore",
        coinDecimals: 6,
        coinGeckoId: "coreum",
        gasPriceStep: {
          low: 0.0625,
          average: 0.0625,
          high: 0.0625,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "TESTCORE",
      coinMinimalDenom: "utestcore",
      coinDecimals: 6,
      coinGeckoId: "coreum",
    },
    features: ["cosmwasm"],
  },
  COSMOS_HUB_COSMOSHUB_4: {
    bech32Config: {
      bech32PrefixAccAddr: "cosmos",
      bech32PrefixAccPub: "cosmospub",
      bech32PrefixConsAddr: "cosmosvalcons",
      bech32PrefixConsPub: "cosmosvalconspub",
      bech32PrefixValAddr: "cosmosvaloper",
      bech32PrefixValPub: "cosmosvaloperpub",
    },
    bip44: {
      coinType: 118,
    },
    chainId: "cosmoshub-4",
    chainName: "Cosmos Hub",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/chain.png",
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "ATOM",
        coinGeckoId: "cosmos",
        coinMinimalDenom: "uatom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
      },
    ],
    features: [],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: "ATOM",
        coinGeckoId: "cosmos",
        coinMinimalDenom: "uatom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
        gasPriceStep: {
          average: 0.025,
          high: 0.03,
          low: 0.005,
        },
      },
    ],
    rest: "https://lcd-cosmoshub.keplr.app",
    rpc: "https://rpc-cosmoshub.keplr.app",
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "ATOM",
      coinGeckoId: "cosmos",
      coinMinimalDenom: "uatom",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
    },
    walletUrlForStaking: "https://wallet.keplr.app/chains/cosmos-hub",
  },
  COSS_COSS_1: {
    rpc: "https://coss-rpc.coss.ink",
    rest: "https://coss-rest.coss.ink",
    chainId: "coss-1",
    chainName: "Coss",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/coss/chain.png",
    nodeProvider: {
      name: "Coss Node",
      email: "coss.inscription@gmail.com",
    },
    stakeCurrency: {
      coinDenom: "CGAS",
      coinMinimalDenom: "ucgas",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "coss",
      bech32PrefixAccPub: "cosspub",
      bech32PrefixValAddr: "cossvaloper",
      bech32PrefixValPub: "cossvaloperpub",
      bech32PrefixConsAddr: "cossvalcons",
      bech32PrefixConsPub: "cossvalconspub",
    },
    currencies: [
      {
        coinDenom: "CGAS",
        coinMinimalDenom: "ucgas",
        coinDecimals: 6,
      },
      {
        coinDenom: "CIAS",
        coinMinimalDenom: "ucias",
        coinDecimals: 6,
        coinGeckoId: "cias",
      },
      {
        coinDenom: "COSS",
        coinMinimalDenom: "ucoss",
        coinDecimals: 6,
        coinGeckoId: "coss-2",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CIAS",
        coinMinimalDenom: "ucias",
        coinDecimals: 6,
        coinGeckoId: "cias",
        gasPriceStep: {
          low: 0.025,
          average: 0.03,
          high: 0.04,
        },
      },
      {
        coinDenom: "COSS",
        coinMinimalDenom: "ucoss",
        coinDecimals: 6,
        coinGeckoId: "coss-2",
        gasPriceStep: {
          low: 0.025,
          average: 0.03,
          high: 0.04,
        },
      },
      {
        coinDenom: "CGAS",
        coinMinimalDenom: "ucgas",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.025,
          average: 0.03,
          high: 0.04,
        },
      },
    ],
    features: [],
  },
  CRESCENT_NETWORK_CRESCENT_1: {
    rpc: "https://mainnet.crescent.network:26657",
    rest: "https://mainnet.crescent.network:1317",
    chainId: "crescent-1",
    chainName: "Crescent Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crescent/chain.png",
    nodeProvider: {
      name: "Crescent Node",
      email: "contact@crescent.network",
      website: "https://crescent.network",
    },
    stakeCurrency: {
      coinDenom: "CRE",
      coinMinimalDenom: "ucre",
      coinDecimals: 6,
      coinGeckoId: "crescent-network",
    },
    walletUrl: "https://app.crescent.network/",
    walletUrlForStaking: "https://app.crescent.network/staking",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cre",
      bech32PrefixAccPub: "crepub",
      bech32PrefixValAddr: "crevaloper",
      bech32PrefixValPub: "crevaloperpub",
      bech32PrefixConsAddr: "crevalcons",
      bech32PrefixConsPub: "crevalconspub",
    },
    currencies: [
      {
        coinDenom: "CRE",
        coinMinimalDenom: "ucre",
        coinDecimals: 6,
        coinGeckoId: "crescent-network",
      },
      {
        coinDenom: "bCRE",
        coinMinimalDenom: "ubcre",
        coinDecimals: 6,
        coinGeckoId: "liquid-staking-crescent",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CRE",
        coinMinimalDenom: "ucre",
        coinDecimals: 6,
        coinGeckoId: "crescent-network",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
      {
        coinDenom: "bCRE",
        coinMinimalDenom: "ubcre",
        coinDecimals: 6,
        coinGeckoId: "liquid-staking-crescent",
        gasPriceStep: {
          low: 0.0083,
          average: 0.02075,
          high: 0.0249,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        gasPriceStep: {
          low: 0.000063,
          average: 0.0001575,
          high: 0.000189,
        },
      },
      {
        coinDenom: "USDC.grav",
        coinMinimalDenom:
          "ibc/CD01034D6749F20AAC5330EF4FD8B8CA7C40F7527AB8C4A302FBD2A070852EE1",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        gasPriceStep: {
          low: 0.000842,
          average: 0.002105,
          high: 0.002526,
        },
      },
      {
        coinDenom: "USDC.axl",
        coinMinimalDenom:
          "ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        gasPriceStep: {
          low: 0.000842,
          average: 0.002105,
          high: 0.002526,
        },
      },
      {
        coinDenom: "IST",
        coinMinimalDenom:
          "ibc/CA1261224952DF089EFD363D8DBB30A8AB6D8CD181E60EE9E68E432F8DE14FE3",
        coinDecimals: 6,
        coinGeckoId: "inter-stable-token",
        gasPriceStep: {
          low: 0.000842,
          average: 0.002105,
          high: 0.002526,
        },
      },
      {
        coinDenom: "CMST",
        coinMinimalDenom:
          "ibc/9EC8A1701813BB7B73BFED2496009ABB2C8BF187E6CDFA788D77F68E08BC05CD",
        coinDecimals: 6,
        coinGeckoId: "composite",
        gasPriceStep: {
          low: 0.000842,
          average: 0.002105,
          high: 0.002526,
        },
      },
      {
        coinDenom: "JUNO",
        coinMinimalDenom:
          "ibc/C814F0B662234E24248AE3B2FE2C1B54BBAF12934B757F6E7BC5AEC119963895",
        coinDecimals: 6,
        coinGeckoId: "juno-network",
        gasPriceStep: {
          low: 0.000568,
          average: 0.00142,
          high: 0.001704,
        },
      },
      {
        coinDenom: "BLD",
        coinMinimalDenom:
          "ibc/11F940BCDFD7CFBFD7EDA13F25DA95D308286D441209D780C9863FD4271514EB",
        coinDecimals: 6,
        coinGeckoId: "agoric",
        gasPriceStep: {
          low: 0.002,
          average: 0.005,
          high: 0.006,
        },
      },
      {
        coinDenom: "CMDX",
        coinMinimalDenom:
          "ibc/61DF64ADF65230540C14C63D64897BE08A3DC9A516A91425913F01240E2F432F",
        coinDecimals: 6,
        coinGeckoId: "comdex",
        gasPriceStep: {
          low: 0.008146,
          average: 0.020365,
          high: 0.024438,
        },
      },
      {
        coinDenom: "GRAV",
        coinMinimalDenom:
          "ibc/C950356239AD2A205DE09FDF066B1F9FF19A7CA7145EA48A5B19B76EE47E52F7",
        coinDecimals: 6,
        coinGeckoId: "graviton",
        gasPriceStep: {
          low: 0.065405,
          average: 0.1635125,
          high: 0.196215,
        },
      },
      {
        coinDenom: "INJ",
        coinMinimalDenom:
          "ibc/5A76568E079A31FA12165E4559BA9F1E9D4C97F9C2060B538C84DCD503815E30",
        coinDecimals: 18,
        coinGeckoId: "injective-protocol",
        gasPriceStep: {
          low: 3350000000,
          average: 8375000000,
          high: 10050000000,
        },
      },
      {
        coinDenom: "LUNA",
        coinMinimalDenom:
          "ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75",
        coinDecimals: 6,
        coinGeckoId: "terra-luna-2",
        gasPriceStep: {
          low: 0.0004,
          average: 0.001,
          high: 0.0012,
        },
      },
      {
        coinDenom: "LUNC",
        coinMinimalDenom:
          "ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8",
        coinDecimals: 6,
        coinGeckoId: "terra-luna",
        gasPriceStep: {
          low: 5,
          average: 12.5,
          high: 15,
        },
      },
      {
        coinDenom: "stATOM",
        coinMinimalDenom:
          "ibc/D64F87FAE0B35C1954DD7921BA7A2939705DE77CBF72B8002F2E3552EDE4DE52",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-atom",
        gasPriceStep: {
          low: 0.00006,
          average: 0.00015,
          high: 0.00018,
        },
      },
      {
        coinDenom: "OKT",
        coinMinimalDenom:
          "ibc/764D1629980B02BAFF3D25BEE4FB1E0C5E350AFA252FDF66E68E10D2179A826A",
        coinDecimals: 18,
        coinGeckoId: "oec-token",
        gasPriceStep: {
          low: 200000000,
          average: 500000000,
          high: 600000000,
        },
      },
      {
        coinDenom: "AXL",
        coinMinimalDenom:
          "ibc/0634D0993744740D675AD01E81156EAC945AEAAE17C074918DC7FF52F41B263E",
        coinDecimals: 6,
        coinGeckoId: "axelar",
        gasPriceStep: {
          low: 0.0014,
          average: 0.0035,
          high: 0.0042,
        },
      },
    ],
    features: [],
  },
  CROSSFI_TESTNET_CROSSFI_EVM_TESTNET_1: {
    rpc: "https://tendermint-rpc.testnet.ms/",
    rest: "https://cosmos-api.testnet.ms/",
    chainId: "crossfi-evm-testnet-1",
    chainName: "CrossFi Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crossfi-evm-testnet/crossfi.png",
    nodeProvider: {
      name: "CrossFi Foundation",
      website: "https://crossfi.org/",
      email: "info@crossfi.org",
    },
    stakeCurrency: {
      coinDenom: "MPX",
      coinMinimalDenom: "mpx",
      coinDecimals: 18,
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "mx",
      bech32PrefixAccPub: "mxpub",
      bech32PrefixValAddr: "mxvaloper",
      bech32PrefixValPub: "mxvaloperpub",
      bech32PrefixConsAddr: "mxvalcons",
      bech32PrefixConsPub: "mxvalconspub",
    },
    currencies: [
      {
        coinDenom: "XFI",
        coinMinimalDenom: "xfi",
        coinDecimals: 18,
      },
      {
        coinDenom: "MPX",
        coinMinimalDenom: "mpx",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "XFI",
        coinMinimalDenom: "xfi",
        coinDecimals: 18,
        gasPriceStep: {
          low: 20000000000,
          average: 25000000000,
          high: 30000000000,
        },
      },
      {
        coinDenom: "MPX",
        coinMinimalDenom: "mpx",
        coinDecimals: 18,
        gasPriceStep: {
          low: 20000000000,
          average: 25000000000,
          high: 30000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  CRONOS_POS_CRYPTO_ORG_CHAIN_MAINNET_1: {
    rpc: "https://rpc-crypto-org.keplr.app",
    rest: "https://lcd-crypto-org.keplr.app",
    chainId: "crypto-org-chain-mainnet-1",
    chainName: "Cronos POS",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crypto-org-chain-mainnet/chain.png",
    stakeCurrency: {
      coinDenom: "CRO",
      coinMinimalDenom: "basecro",
      coinDecimals: 8,
      coinGeckoId: "crypto-com-chain",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crypto-org-chain-mainnet/basecro.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/crypto-org",
    walletUrlForStaking: "https://wallet.keplr.app/chains/crypto-org",
    bip44: {
      coinType: 394,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cro",
      bech32PrefixAccPub: "cropub",
      bech32PrefixValAddr: "crocncl",
      bech32PrefixValPub: "crocnclpub",
      bech32PrefixConsAddr: "crocnclcons",
      bech32PrefixConsPub: "crocnclconspub",
    },
    currencies: [
      {
        coinDenom: "CRO",
        coinMinimalDenom: "basecro",
        coinDecimals: 8,
        coinGeckoId: "crypto-com-chain",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crypto-org-chain-mainnet/basecro.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CRO",
        coinMinimalDenom: "basecro",
        coinDecimals: 8,
        coinGeckoId: "crypto-com-chain",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crypto-org-chain-mainnet/basecro.png",
        gasPriceStep: {
          low: 0.025,
          average: 0.03,
          high: 0.04,
        },
      },
    ],
    features: ["authz-msg-revoke-fixed"],
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
  },
  CUDOS_CUDOS_1: {
    chainId: "cudos-1",
    chainName: "CUDOS",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cudos/chain.png",
    rest: "https://rest.cudos.org/",
    rpc: "https://rpc.cudos.org:443",
    nodeProvider: {
      name: "Cudo Ventures",
      email: "support@cudoventures.com",
      website: "https://cudos.org",
    },
    walletUrl: "https://dashboard.cudos.org/",
    walletUrlForStaking: "https://dashboard.cudos.org/staking",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cudos",
      bech32PrefixAccPub: "cudospub",
      bech32PrefixConsAddr: "cudosvalcons",
      bech32PrefixConsPub: "cudosvalconspub",
      bech32PrefixValAddr: "cudosvaloper",
      bech32PrefixValPub: "cudosvaloperpub",
    },
    currencies: [
      {
        coinDecimals: 18,
        coinDenom: "CUDOS",
        coinGeckoId: "cudos",
        coinMinimalDenom: "acudos",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cudos/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDecimals: 18,
        coinDenom: "CUDOS",
        coinGeckoId: "cudos",
        coinMinimalDenom: "acudos",
        gasPriceStep: {
          low: 5000000000000,
          average: 5000000000000,
          high: 6600000000000,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cudos/chain.png",
      },
    ],
    stakeCurrency: {
      coinDecimals: 18,
      coinDenom: "CUDOS",
      coinGeckoId: "cudos",
      coinMinimalDenom: "acudos",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cudos/chain.png",
    },
    features: ["cosmwasm"],
  },
  CVM_CVM_323_1: {
    rpc: "https://cvm.cosvm.net",
    rest: "https://api.cosvm.net",
    chainId: "cvm_323-1",
    chainName: "CVM",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvm_323/chain.png",
    nodeProvider: {
      name: "CosVM Network",
      email: "contact@cosvm.network",
      website: "https://cosvm.network/",
    },
    stakeCurrency: {
      coinDenom: "CVM",
      coinMinimalDenom: "ucvm",
      coinDecimals: 18,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvm_323/acvm.png",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cvm",
      bech32PrefixAccPub: "cvmpub",
      bech32PrefixValAddr: "cvmvaloper",
      bech32PrefixValPub: "cvmvaloperpub",
      bech32PrefixConsAddr: "cvmvalcons",
      bech32PrefixConsPub: "cvmvalconspub",
    },
    currencies: [
      {
        coinDenom: "CVM",
        coinMinimalDenom: "ucvm",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvm_323/acvm.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CVM",
        coinMinimalDenom: "ucvm",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvm_323/acvm.png",
        gasPriceStep: {
          low: 80000000000,
          average: 80000000000,
          high: 80000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  CONSCIOUS_CVN_2032_1: {
    rpc: "https://rpc.cvn.io",
    rest: "https://api.cvn.io",
    nodeProvider: {
      name: "consciousDao",
      email: "messages@consciousdao.com",
      website: "https://cvn.io",
    },
    chainId: "cvn_2032-1",
    chainName: "conscious",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvn_2032/chain.png",
    stakeCurrency: {
      coinDenom: "CVN",
      coinMinimalDenom: "acvnt",
      coinDecimals: 18,
      coinGeckoId: "consciousdao",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvn_2032/acvnt.png",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cvn",
      bech32PrefixAccPub: "cvnpub",
      bech32PrefixValAddr: "cvnvaloper",
      bech32PrefixValPub: "cvnvaloperpub",
      bech32PrefixConsAddr: "cvnvalcons",
      bech32PrefixConsPub: "cvnvalconspub",
    },
    currencies: [
      {
        coinDenom: "CVN",
        coinMinimalDenom: "acvnt",
        coinDecimals: 18,
        coinGeckoId: "consciousdao",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvn_2032/acvnt.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CVN",
        coinMinimalDenom: "acvnt",
        coinDecimals: 18,
        coinGeckoId: "consciousdao",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvn_2032/acvnt.png",
        gasPriceStep: {
          low: 100000000,
          average: 200000000,
          high: 300000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  DESMOS_DESMOS_MAINNET: {
    chainId: "desmos-mainnet",
    chainName: "Desmos",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/desmos-mainnet/chain.png",
    rpc: "https://rpc.mainnet.desmos.network",
    rest: "https://api.mainnet.desmos.network",
    nodeProvider: {
      name: "Forbole",
      email: "info@forbole.com",
      website: "https://www.forbole.com",
    },
    bip44: {
      coinType: 852,
    },
    bech32Config: {
      bech32PrefixAccAddr: "desmos",
      bech32PrefixAccPub: "desmospub",
      bech32PrefixValAddr: "desmosvaloper",
      bech32PrefixValPub: "desmosvaloperpub",
      bech32PrefixConsAddr: "desmosvalcons",
      bech32PrefixConsPub: "desmosvalconspub",
    },
    currencies: [
      {
        coinDenom: "DSM",
        coinMinimalDenom: "udsm",
        coinDecimals: 6,
        coinGeckoId: "desmos",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DSM",
        coinMinimalDenom: "udsm",
        coinDecimals: 6,
        coinGeckoId: "desmos",
        gasPriceStep: {
          low: 0.01,
          average: 0.03,
          high: 0.05,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "DSM",
      coinMinimalDenom: "udsm",
      coinDecimals: 6,
      coinGeckoId: "desmos",
    },
    features: [],
  },
  DHEALTH_TESTNET_DHEALTH_TESTNET_2: {
    chainId: "dhealth-testnet-2",
    chainName: "dHealth Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dhealth-testnet/chain.png",
    rpc: "https://rpc-testnet.dhealth.dev",
    rest: "https://lcd-testnet.dhealth.dev",
    nodeProvider: {
      name: "dHealth Network",
      email: "son@dhealth.com",
      website: "https://dhealth.com",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "tdh02",
      bech32PrefixAccPub: "tdh02pub",
      bech32PrefixValAddr: "tdh02valoper",
      bech32PrefixValPub: "tdh02valoperpub",
      bech32PrefixConsAddr: "tdh02valcons",
      bech32PrefixConsPub: "tdh02valconspub",
    },
    currencies: [
      {
        coinDenom: "tDHP",
        coinMinimalDenom: "utdhp",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dhealth-testnet/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "tDHP",
        coinMinimalDenom: "utdhp",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dhealth-testnet/chain.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "tDHP",
      coinMinimalDenom: "utdhp",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dhealth-testnet/chain.png",
    },
    features: ["cosmwasm"],
  },
  DHEALTH_DHEALTH: {
    chainId: "dhealth",
    chainName: "dHealth",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dhealth/chain.png",
    rpc: "https://rpc.dhealth.com",
    rest: "https://lcd.dhealth.com",
    nodeProvider: {
      name: "dHealth Network",
      email: "son@dhealth.com",
      website: "https://dhealth.com",
    },
    bip44: {
      coinType: 10111,
    },
    bech32Config: {
      bech32PrefixAccAddr: "dh",
      bech32PrefixAccPub: "dhpub",
      bech32PrefixValAddr: "dhvaloper",
      bech32PrefixValPub: "dhvaloperpub",
      bech32PrefixConsAddr: "dhvalcons",
      bech32PrefixConsPub: "dhvalconspub",
    },
    currencies: [
      {
        coinDenom: "DHP",
        coinMinimalDenom: "udhp",
        coinDecimals: 6,
        coinGeckoId: "dhealth",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dhealth/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DHP",
        coinMinimalDenom: "udhp",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
        coinGeckoId: "dhealth",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dhealth/chain.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "DHP",
      coinMinimalDenom: "udhp",
      coinDecimals: 6,
      coinGeckoId: "dhealth",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dhealth/chain.png",
    },
    features: ["cosmwasm"],
  },
  XPLA_DIMENSION_37_1: {
    rpc: "https://rpc-dimension.keplr.app",
    rest: "https://lcd-dimension.keplr.app",
    chainId: "dimension_37-1",
    chainName: "XPLA",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dimension_37/chain.png",
    walletUrlForStaking: "https://wallet.keplr.app/chains/xpla",
    stakeCurrency: {
      coinDenom: "XPLA",
      coinMinimalDenom: "axpla",
      coinDecimals: 18,
      coinGeckoId: "xpla",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dimension_37/axpla.png",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "xpla",
      bech32PrefixAccPub: "xplapub",
      bech32PrefixValAddr: "xplavaloper",
      bech32PrefixValPub: "xplavaloperpub",
      bech32PrefixConsAddr: "xplavalcons",
      bech32PrefixConsPub: "xplavalconspub",
    },
    currencies: [
      {
        coinDenom: "XPLA",
        coinMinimalDenom: "axpla",
        coinDecimals: 18,
        coinGeckoId: "xpla",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dimension_37/axpla.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "XPLA",
        coinMinimalDenom: "axpla",
        coinDecimals: 18,
        coinGeckoId: "xpla",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dimension_37/axpla.png",
        gasPriceStep: {
          low: 850000000000,
          average: 1147500000000,
          high: 1487500000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign", "cosmwasm"],
  },
  DYDX_DYDX_MAINNET_1: {
    rpc: "https://rpc-dydx.keplr.app",
    rest: "https://lcd-dydx.keplr.app",
    chainId: "dydx-mainnet-1",
    chainName: "dYdX",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dydx-mainnet/adydx.png",
    stakeCurrency: {
      coinDenom: "DYDX",
      coinDecimals: 18,
      coinMinimalDenom: "adydx",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dydx-mainnet/adydx.png",
      coinGeckoId: "dydx-chain",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "dydx",
      bech32PrefixAccPub: "dydxpub",
      bech32PrefixValAddr: "dydxvaloper",
      bech32PrefixValPub: "dydxvaloperpub",
      bech32PrefixConsAddr: "dydxvalcons",
      bech32PrefixConsPub: "dydxvalconspub",
    },
    currencies: [
      {
        coinDenom: "DYDX",
        coinDecimals: 18,
        coinMinimalDenom: "adydx",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dydx-mainnet/adydx.png",
        coinGeckoId: "dydx-chain",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DYDX",
        coinDecimals: 18,
        coinMinimalDenom: "adydx",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dydx-mainnet/adydx.png",
        coinGeckoId: "dydx-chain",
        gasPriceStep: {
          low: 12500000000,
          average: 12500000000,
          high: 20000000000,
        },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.025,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    walletUrlForStaking: "https://wallet.keplr.app/chains/dydx",
    features: [],
  },
  DYDX_TESTNET_DYDX_TESTNET_4: {
    rpc: "https://rpc-dydx-testnet.keplr.app",
    rest: "https://lcd-dydx-testnet.keplr.app",
    chainId: "dydx-testnet-4",
    chainName: "dydx Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dydx-testnet/chain.png",
    bech32Config: {
      bech32PrefixAccAddr: "dydx",
      bech32PrefixAccPub: "dydxpub",
      bech32PrefixValAddr: "dydxvaloper",
      bech32PrefixValPub: "dydxvaloperpub",
      bech32PrefixConsAddr: "dydxvalcons",
      bech32PrefixConsPub: "dydxvalconspub",
    },
    bip44: {
      coinType: 118,
    },
    stakeCurrency: {
      coinDenom: "DV4TNT",
      coinDecimals: 18,
      coinMinimalDenom: "adv4tnt",
    },
    currencies: [
      {
        coinDenom: "DV4TNT",
        coinDecimals: 18,
        coinMinimalDenom: "adv4tnt",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DV4TNT",
        coinDecimals: 18,
        coinMinimalDenom: "adv4tnt",
        gasPriceStep: {
          low: 25000000000,
          average: 25000000000,
          high: 50000000000,
        },
      },
    ],
    features: [],
  },
  DYMENSION_DYMENSION_1100_1: {
    chainId: "dymension_1100-1",
    chainName: "Dymension",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dymension_1100/chain.png",
    rpc: "https://rpc-dymension.keplr.app",
    rest: "https://lcd-dymension.keplr.app",
    evm: {
      chainId: 1100,
      rpc: "https://evm-dymension.keplr.app",
    },
    currencies: [
      {
        coinMinimalDenom: "adym",
        coinDenom: "DYM",
        coinDecimals: 18,
        coinGeckoId: "dymension",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dymension_1100/chain.png",
      },
    ],
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "dym",
      bech32PrefixAccPub: "dympub",
      bech32PrefixValAddr: "dymvaloper",
      bech32PrefixValPub: "dymvaloperpub",
      bech32PrefixConsAddr: "dymvalcons",
      bech32PrefixConsPub: "dymvalconspub",
    },
    stakeCurrency: {
      coinMinimalDenom: "adym",
      coinDenom: "DYM",
      coinDecimals: 18,
      coinGeckoId: "dymension",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dymension_1100/chain.png",
    },
    feeCurrencies: [
      {
        coinMinimalDenom: "adym",
        coinDenom: "DYM",
        coinDecimals: 18,
        coinGeckoId: "dymension",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dymension_1100/chain.png",
        gasPriceStep: {
          average: 20000000000,
          high: 20000000000,
          low: 20000000000,
        },
      },
    ],
    walletUrlForStaking: "https://wallet.keplr.app/chains/dymension",
    features: ["eth-address-gen", "eth-key-sign"],
  },
  DYSON_PROTOCOL_DYSON_MAINNET_01: {
    chainId: "dyson-mainnet-01",
    chainName: "Dyson Protocol",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/dyson-mainnet/chain.png",
    rpc: "https://dys-tm.dysonprotocol.com/",
    rest: "https://dys-api.dysonprotocol.com/",
    nodeProvider: {
      name: "Dyson Protocol",
      email: "dysonprotocol@protonmail.com",
      website: "https://dysonprotocol.com/",
    },
    walletUrlForStaking: "https://explorer.dys.dysonprotocol.com/",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "dys",
      bech32PrefixAccPub: "dyspub",
      bech32PrefixValAddr: "dysvaloper",
      bech32PrefixValPub: "dysvaloperpub",
      bech32PrefixConsAddr: "dysvalcons",
      bech32PrefixConsPub: "dysvalconspub",
    },
    currencies: [
      {
        coinDenom: "DYS",
        coinMinimalDenom: "dys",
        coinDecimals: 0,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DYS",
        coinMinimalDenom: "dys",
        coinDecimals: 0,
        gasPriceStep: {
          low: 0.0001,
          average: 0.0002,
          high: 0.0003,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "DYS",
      coinMinimalDenom: "dys",
      coinDecimals: 0,
    },
    features: [],
  },
  QWOYN_TESTNET_EARENDEL_1: {
    chainId: "earendel-1",
    chainName: "Qwoyn Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/earendel/earendel.png",
    rpc: "https://testnet-rpc.qwoyn.studio",
    rest: "https://testnet-api.qwoyn.studio",
    nodeProvider: {
      name: "Qwoyn Network",
      email: "devops@cosmic-horizon.com",
      website: "https://qwoyn.studio/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "qwoyn",
      bech32PrefixAccPub: "qwoynpub",
      bech32PrefixValAddr: "qwoynvaloper",
      bech32PrefixValPub: "qwoynvaloperpub",
      bech32PrefixConsAddr: "qwoynvalcons",
      bech32PrefixConsPub: "qwoynvalconspub",
    },
    currencies: [
      {
        coinDenom: "QWOYN",
        coinMinimalDenom: "uqwoyn",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "QWOYN",
        coinMinimalDenom: "uqwoyn",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "QWOYN",
      coinMinimalDenom: "uqwoyn",
      coinDecimals: 6,
    },
    features: [],
  },
  EBONY_EBONY_2: {
    chainId: "ebony-2",
    chainName: "Ebony",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ebony/chain.png",
    rpc: "https://ebony-rpc.finschia.io",
    rest: "https://ebony-api.finschia.io",
    nodeProvider: {
      name: "Finschia Foundation",
      email: "dev@finschia.org",
      website: "https://www.finschia.io",
    },
    bip44: {
      coinType: 438,
    },
    bech32Config: {
      bech32PrefixAccAddr: "tlink",
      bech32PrefixAccPub: "tlinkpub",
      bech32PrefixValAddr: "tlinkvaloper",
      bech32PrefixValPub: "tlinkvaloperpub",
      bech32PrefixConsAddr: "tlinkvalcons",
      bech32PrefixConsPub: "tlinkvalconspub",
    },
    currencies: [
      {
        coinDenom: "TFNSA",
        coinMinimalDenom: "tcony",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ebony/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TFNSA",
        coinMinimalDenom: "tcony",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ebony/chain.png",
        gasPriceStep: {
          average: 0.015,
          high: 0.015,
          low: 0.015,
        },
      },
    ],
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "TFNSA",
      coinMinimalDenom: "tcony",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ebony/chain.png",
    },
    features: ["cosmwasm"],
  },
  STARGAZE_TESTNET_ELGAFAR_1: {
    rpc: "https://rpc.elgafar-1.stargaze-apis.com",
    rest: "https://rest.elgafar-1.stargaze-apis.com",
    chainId: "elgafar-1",
    chainName: "Stargaze Testnet",
    nodeProvider: {
      name: "Stargaze",
      email: "admin@stargaze.zone",
      website: "https://www.stargaze.zone/",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/chain.png",
    stakeCurrency: {
      coinDenom: "STARS",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "stars",
      bech32PrefixAccPub: "starspub",
      bech32PrefixValAddr: "starsvaloper",
      bech32PrefixValPub: "starsvaloperpub",
      bech32PrefixConsAddr: "starsvalcons",
      bech32PrefixConsPub: "starsvalconspub",
    },
    currencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
      },
    ],
    features: [],
  },
  ELYS_NETWORK_TESTNET_ELYSTESTNET_1: {
    chainId: "elystestnet-1",
    chainName: "Elys Network Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/elystestnet/chain.png",
    rpc: "https://rpc.testnet.elys.network:443",
    rest: "https://api.testnet.elys.network",
    walletUrlForStaking: "https://testnet.elys.network/earn/staking",
    nodeProvider: {
      name: "Elys Network",
      email: "team@elys.network",
      website: "https://elys.network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "elys",
      bech32PrefixAccPub: "elyspub",
      bech32PrefixValAddr: "elysvaloper",
      bech32PrefixValPub: "elysvaloperpub",
      bech32PrefixConsAddr: "elysvalcons",
      bech32PrefixConsPub: "elysvalconspub",
    },
    currencies: [
      {
        coinDenom: "ELYS",
        coinMinimalDenom: "uelys",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/elystestnet/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ELYS",
        coinMinimalDenom: "uelys",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/elystestnet/chain.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "ibc/2180E84E20F5679FCC760D8C165B60F42065DEF7F46A72B447CFF1B7DC6C0A65",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/elystestnet/uusdc.png",
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/elystestnet/uatom.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "ELYS",
      coinMinimalDenom: "uelys",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/elystestnet/chain.png",
    },
    features: [],
  },
  E_MONEY_EMONEY_3: {
    rpc: "https://emoney.validator.network",
    rest: "https://emoney.validator.network/api",
    nodeProvider: {
      name: "Validator Network",
      email: "contact@validator.network",
      website: "https://twitter.com/validator_net",
    },
    chainId: "emoney-3",
    chainName: "e-Money",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/emoney/chain.png",
    stakeCurrency: {
      coinDenom: "NGM",
      coinMinimalDenom: "ungm",
      coinDecimals: 6,
      coinGeckoId: "e-money",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/emoney/ungm.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "emoney",
      bech32PrefixAccPub: "emoneypub",
      bech32PrefixValAddr: "emoneyvaloper",
      bech32PrefixValPub: "emoneyvaloperpub",
      bech32PrefixConsAddr: "emoneyvalcons",
      bech32PrefixConsPub: "emoneyvalconspub",
    },
    currencies: [
      {
        coinDenom: "NGM",
        coinMinimalDenom: "ungm",
        coinDecimals: 6,
        coinGeckoId: "e-money",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/emoney/ungm.png",
      },
      {
        coinDenom: "EEUR",
        coinMinimalDenom: "eeur",
        coinDecimals: 6,
        coinGeckoId: "e-money-eur",
      },
      {
        coinDenom: "EDKK",
        coinMinimalDenom: "edkk",
        coinDecimals: 6,
      },
      {
        coinDenom: "ESEK",
        coinMinimalDenom: "esek",
        coinDecimals: 6,
      },
      {
        coinDenom: "ENOK",
        coinMinimalDenom: "enok",
        coinDecimals: 6,
      },
      {
        coinDenom: "ECHF",
        coinMinimalDenom: "echf",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NGM",
        coinMinimalDenom: "ungm",
        coinDecimals: 6,
        coinGeckoId: "e-money",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/emoney/ungm.png",
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 1,
        },
      },
      {
        coinDenom: "EEUR",
        coinMinimalDenom: "eeur",
        coinDecimals: 6,
        coinGeckoId: "e-money-eur",
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 1,
        },
      },
      {
        coinDenom: "ECHF",
        coinMinimalDenom: "echf",
        coinDecimals: 6,
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 1,
        },
      },
      {
        coinDenom: "ESEK",
        coinMinimalDenom: "esek",
        coinDecimals: 6,
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 1,
        },
      },
      {
        coinDenom: "ENOK",
        coinMinimalDenom: "enok",
        coinDecimals: 6,
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 1,
        },
      },
      {
        coinDenom: "EDKK",
        coinMinimalDenom: "edkk",
        coinDecimals: 6,
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 1,
        },
      },
    ],
    features: [],
  },
  EMPE_TESTNET_EMPE_TESTNET_2: {
    chainId: "empe-testnet-2",
    chainName: "Empe Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/empe-testnet/empe.png",
    rpc: "https://rpc-testnet.empe.io/",
    rest: "https://lcd-testnet.empe.io/",
    nodeProvider: {
      name: "Empe Team",
      email: "dev@empe.io",
      website: "https://empe.io",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "empe",
      bech32PrefixAccPub: "empepub",
      bech32PrefixValAddr: "empevaloper",
      bech32PrefixValPub: "empevaloperpub",
      bech32PrefixConsAddr: "empevalcons",
      bech32PrefixConsPub: "empevalconspub",
    },
    currencies: [
      {
        coinDenom: "EMPE",
        coinMinimalDenom: "uempe",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/empe-testnet/empe.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "EMPE",
        coinMinimalDenom: "uempe",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/empe-testnet/empe.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "EMPE",
      coinMinimalDenom: "uempe",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/empe-testnet/empe.png",
    },
  },
  ENTRYPOINT_TESTNET_ENTRYPOINT_PUBTEST_2: {
    chainId: "entrypoint-pubtest-2",
    chainName: "EntryPoint Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/entrypoint-pubtest/chain.png",
    rpc: "https://testnet-rpc.entrypoint.zone",
    rest: "https://testnet-rest.entrypoint.zone",
    nodeProvider: {
      name: "Simply Staking",
      email: "staking@simplystaking.com",
      website: "https://simplystaking.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "entrypoint",
      bech32PrefixAccPub: "entrypointpub",
      bech32PrefixValAddr: "entrypointvaloper",
      bech32PrefixValPub: "entrypointvaloperpub",
      bech32PrefixConsAddr: "entrypointvalcons",
      bech32PrefixConsPub: "entrypointvalconspub",
    },
    currencies: [
      {
        coinDenom: "ENTRY",
        coinMinimalDenom: "uentry",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/entrypoint-pubtest/uentry.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.01,
          high: 0.02,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "ENTRY",
      coinMinimalDenom: "uentry",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/entrypoint-pubtest/uentry.png",
    },
    features: [],
  },
  EVMOS_EVMOS_9001_2: {
    rpc: "https://rpc-evmos.keplr.app",
    rest: "https://lcd-evmos.keplr.app",
    chainId: "evmos_9001-2",
    chainName: "Evmos",
    evm: {
      chainId: 9001,
      rpc: "https://evm-evmos.keplr.app",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/evmos_9001/chain.png",
    stakeCurrency: {
      coinDenom: "EVMOS",
      coinMinimalDenom: "aevmos",
      coinDecimals: 18,
      coinGeckoId: "evmos",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/evmos_9001/aevmos.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/evmos",
    walletUrlForStaking: "https://wallet.keplr.app/chains/evmos",
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "evmos",
      bech32PrefixAccPub: "evmospub",
      bech32PrefixValAddr: "evmosvaloper",
      bech32PrefixValPub: "evmosvaloperpub",
      bech32PrefixConsAddr: "evmosvalcons",
      bech32PrefixConsPub: "evmosvalconspub",
    },
    currencies: [
      {
        coinDenom: "EVMOS",
        coinMinimalDenom: "aevmos",
        coinDecimals: 18,
        coinGeckoId: "evmos",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/evmos_9001/aevmos.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "EVMOS",
        coinMinimalDenom: "aevmos",
        coinDecimals: 18,
        coinGeckoId: "evmos",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/evmos_9001/aevmos.png",
        gasPriceStep: {
          low: 80000000000,
          average: 80000000000,
          high: 80000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  FAIRBLOCK_FAIRYRING_TESTNET_FAIRYRING_TESTNET_1: {
    chainId: "fairyring-testnet-1",
    chainName: "Fairblock FairyRing Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fairyring-testnet/chain.png",
    rpc: "https://testnet-rpc.fairblock.network",
    rest: "https://testnet-api.fairblock.network",
    nodeProvider: {
      name: "Fairblock",
      email: "hello@fairblock.network",
      website: "https://fairblock.network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "fairy",
      bech32PrefixAccPub: "fairypub",
      bech32PrefixValAddr: "fairyvaloper",
      bech32PrefixValPub: "fairyvaloperpub",
      bech32PrefixConsAddr: "fairyvalcons",
      bech32PrefixConsPub: "fairyvalconspub",
    },
    currencies: [
      {
        coinDenom: "FAIRY",
        coinMinimalDenom: "ufairy",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FAIRY",
        coinMinimalDenom: "ufairy",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "FAIRY",
      coinMinimalDenom: "ufairy",
      coinDecimals: 6,
    },
    features: ["cosmwasm"],
  },
  FETCHHUB_FETCHHUB_4: {
    chainName: "fetchhub",
    chainId: "fetchhub-4",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fetchhub/fet.png",
    rpc: "https://rpc-fetchhub.fetch.ai:443",
    rest: "https://rest-fetchhub.fetch.ai",
    nodeProvider: {
      name: "fetch.ai",
      email: "info@fetchai.foundation",
      website: "https://fetch.ai/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "fetch",
      bech32PrefixAccPub: "fetchpub",
      bech32PrefixValAddr: "fetchvaloper",
      bech32PrefixValPub: "fetchvaloperpub",
      bech32PrefixConsAddr: "fetchvalcons",
      bech32PrefixConsPub: "fetchvalconspub",
    },
    currencies: [
      {
        coinDenom: "FET",
        coinMinimalDenom: "afet",
        coinDecimals: 18,
        coinGeckoId: "fetch-ai",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fetchhub/fet.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FET",
        coinMinimalDenom: "afet",
        coinDecimals: 18,
        coinGeckoId: "fetch-ai",
        gasPriceStep: {
          low: 0.025,
          average: 0.025,
          high: 0.035,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "FET",
      coinMinimalDenom: "afet",
      coinDecimals: 18,
      coinGeckoId: "fetch-ai",
    },
    features: ["cosmwasm"],
  },
  FIAMMA_TESTNET_FIAMMA_TESTNET_1: {
    chainId: "fiamma-testnet-1",
    chainName: "Fiamma Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fiamma-testnet/chain.png",
    rpc: "https://testnet-rpc.fiammachain.io",
    rest: "https://testnet-api.fiammachain.io",
    nodeProvider: {
      name: "Fiammachain",
      email: "contact@fiammachain.io",
      website: "https://fiammachain.io/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "fiamma",
      bech32PrefixAccPub: "fiammapub",
      bech32PrefixValAddr: "fiammavaloper",
      bech32PrefixValPub: "fiammavaloperpub",
      bech32PrefixConsAddr: "fiammavalcons",
      bech32PrefixConsPub: "fiammavalconspub",
    },
    currencies: [
      {
        coinDenom: "FIA",
        coinMinimalDenom: "ufia",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fiamma-testnet/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FIA",
        coinMinimalDenom: "ufia",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fiamma-testnet/chain.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.02,
          high: 0.1,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "FIA",
      coinMinimalDenom: "ufia",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fiamma-testnet/chain.png",
    },
    features: ["cosmwasm"],
  },
  FINSCHIA_FINSCHIA_2: {
    chainId: "finschia-2",
    chainName: "Finschia",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/finschia/chain.png",
    rpc: "https://finschia-rpc.finschia.io/",
    rest: "https://finschia-api.finschia.io",
    nodeProvider: {
      name: "Finschia Foundation",
      email: "dev@finschia.org",
      website: "https://www.finschia.io",
    },
    bip44: {
      coinType: 438,
    },
    bech32Config: {
      bech32PrefixAccAddr: "link",
      bech32PrefixAccPub: "linkpub",
      bech32PrefixValAddr: "linkvaloper",
      bech32PrefixValPub: "linkvaloperpub",
      bech32PrefixConsAddr: "linkvalcons",
      bech32PrefixConsPub: "linkvalconspub",
    },
    currencies: [
      {
        coinDenom: "FNSA",
        coinMinimalDenom: "cony",
        coinDecimals: 6,
        coinGeckoId: "link",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/finschia/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FNSA",
        coinMinimalDenom: "cony",
        coinDecimals: 6,
        coinGeckoId: "link",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/finschia/chain.png",
        gasPriceStep: {
          average: 0.015,
          high: 0.015,
          low: 0.015,
        },
      },
    ],
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "FNSA",
      coinMinimalDenom: "cony",
      coinGeckoId: "link",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/finschia/chain.png",
    },
    features: ["cosmwasm"],
  },
  SIX_PROTOCOL_TESTNET_FIVENET: {
    rpc: "https://rpc1.fivenet.sixprotocol.net",
    rest: "https://api1.fivenet.sixprotocol.net",
    nodeProvider: {
      name: "SIX NodeOps",
      email: "nantanart@six.network",
      website: "https://sixprotocol.com/",
    },
    chainId: "fivenet",
    chainName: "SIX Protocol Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fivenet/chain.png",
    stakeCurrency: {
      coinDenom: "SIX",
      coinMinimalDenom: "usix",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "6x",
      bech32PrefixAccPub: "6xpub",
      bech32PrefixValAddr: "6xvaloper",
      bech32PrefixValPub: "6xvaloperpub",
      bech32PrefixConsAddr: "6xvalcons",
      bech32PrefixConsPub: "6xvalconspub",
    },
    currencies: [
      {
        coinDenom: "SIX",
        coinMinimalDenom: "usix",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fivenet/usix.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SIX",
        coinMinimalDenom: "usix",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fivenet/usix.png",
        gasPriceStep: {
          low: 1.25,
          average: 1.5,
          high: 1.75,
        },
      },
    ],
    features: [],
  },
  DYMENSION_TESTNET_FROOPYLAND_100_1: {
    chainId: "froopyland_100-1",
    chainName: "Dymension Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/froopyland_100/chain.png",
    rpc: "https://froopyland.blockpi.network/rpc/v1/public",
    rest: "https://froopyland.blockpi.network/lcd/v1/public",
    nodeProvider: {
      name: "BlockPI",
      email: "info@blockpi.io",
      website: "https://blockpi.io/",
    },
    currencies: [
      {
        coinMinimalDenom: "udym",
        coinDenom: "DYM",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/froopyland_100/chain.png",
      },
    ],
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "dym",
      bech32PrefixAccPub: "dympub",
      bech32PrefixValAddr: "dymvaloper",
      bech32PrefixValPub: "dymvaloperpub",
      bech32PrefixConsAddr: "dymvalcons",
      bech32PrefixConsPub: "dymvalconspub",
    },
    stakeCurrency: {
      coinMinimalDenom: "udym",
      coinDenom: "DYM",
      coinDecimals: 18,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/froopyland_100/chain.png",
    },
    feeCurrencies: [
      {
        coinMinimalDenom: "udym",
        coinDenom: "DYM",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/froopyland_100/chain.png",
        gasPriceStep: {
          average: 0.4,
          high: 0.55,
          low: 0.25,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  FURYA_FURYA_1: {
    chainId: "furya-1",
    chainName: "Furya",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/furya/chain.png",
    rpc: "https://furya.rpc.nodeshub.online",
    rest: "https://furya.api.nodeshub.online",
    nodeProvider: {
      name: "Furya",
      email: "team@furya.network",
      website: "https://docs.furya.network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "furya",
      bech32PrefixAccPub: "furyapub",
      bech32PrefixValAddr: "furyavaloper",
      bech32PrefixValPub: "furyavaloperpub",
      bech32PrefixConsAddr: "furyavalcons",
      bech32PrefixConsPub: "furyavalconspub",
    },
    currencies: [
      {
        coinDenom: "FURY",
        coinMinimalDenom: "ufury",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/furya/ufury.png",
        coinGeckoId: "fanfury",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FURY",
        coinMinimalDenom: "ufury",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/furya/ufury.png",
        coinDecimals: 6,
        coinGeckoId: "fanfury",
        gasPriceStep: {
          low: 0,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "FURY",
      coinMinimalDenom: "ufury",
      coinDecimals: 6,
      coinGeckoId: "fanfury",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/furya/ufury.png",
    },
    features: ["cosmwasm"],
    walletUrlForStaking: "https://explorer.furya.network/furya-1/staking",
  },
  F_X_CORE_FXCORE: {
    chainId: "fxcore",
    chainName: "f(x)Core",
    rpc: "https://fx-json.functionx.io",
    rest: "https://fx-rest.functionx.io",
    walletUrl: "https://wallet.keplr.app/chains/fxcore",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fxcore/chain.png",
    bip44: {
      coinType: 60,
    },
    nodeProvider: {
      name: "fxCore Network",
      email: "contact@functionx.io",
      website: "https://functionx.io",
    },
    bech32Config: {
      bech32PrefixAccAddr: "fx",
      bech32PrefixAccPub: "fxpub",
      bech32PrefixValAddr: "fxvaloper",
      bech32PrefixValPub: "fxvaloperpub",
      bech32PrefixConsAddr: "fxvalcons",
      bech32PrefixConsPub: "fxvalconspub",
    },
    currencies: [
      {
        coinDenom: "FX",
        coinMinimalDenom: "FX",
        coinDecimals: 18,
        coinGeckoId: "fx-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fxcore/fx.png",
      },
      {
        coinDenom: "PUNDIX",
        coinMinimalDenom: "eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
        coinDecimals: 18,
        coinGeckoId: "pundi-x-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fxcore/pundix.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FX",
        coinMinimalDenom: "FX",
        coinDecimals: 18,
        coinGeckoId: "fx-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fxcore/fx.png",
        gasPriceStep: {
          low: 4000000000000,
          average: 4200000000000,
          high: 5000000000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "FX",
      coinMinimalDenom: "FX",
      coinDecimals: 18,
      coinGeckoId: "fx-coin",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/fxcore/fx.png",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  GALACTICA_RETICULUM_TESTNET_GALACTICA_9302_1: {
    chainId: "galactica_9302-1",
    chainName: "Galactica Reticulum Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/galactica_9302/chain.png",
    rpc: "https://rpc-reticulum.galactica.com",
    rest: "https://lcd-reticulum.galactica.com",
    nodeProvider: {
      name: "Galactica Network",
      email: "support@galactica.com",
      website: "https://galactica.com/",
    },
    evm: {
      chainId: 9302,
      rpc: "https://evm-rpc-http-reticulum.galactica.com",
    },
    stakeCurrency: {
      coinDenom: "GNET",
      coinMinimalDenom: "agnet",
      coinDecimals: 18,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/galactica_9302/agnet.png",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "gala",
      bech32PrefixAccPub: "galapub",
      bech32PrefixValAddr: "galavaloper",
      bech32PrefixValPub: "galavaloperpub",
      bech32PrefixConsAddr: "galavalcons",
      bech32PrefixConsPub: "galavalconspub",
    },
    currencies: [
      {
        coinDenom: "GNET",
        coinMinimalDenom: "agnet",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/galactica_9302/agnet.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "GNET",
        coinMinimalDenom: "agnet",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/galactica_9302/agnet.png",
        gasPriceStep: {
          low: 10000,
          average: 500000,
          high: 10000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  GITOPIA_GITOPIA: {
    chainId: "gitopia",
    chainName: "Gitopia",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gitopia/chain.png",
    rpc: "https://rpc-gitopia.keplr.app",
    rest: "https://lcd-gitopia.keplr.app",
    bip44: {
      coinType: 118,
    },
    stakeCurrency: {
      coinDenom: "LORE",
      coinMinimalDenom: "ulore",
      coinGeckoId: "gitopia",
      coinDecimals: 6,
    },
    bech32Config: {
      bech32PrefixAccAddr: "gitopia",
      bech32PrefixAccPub: "gitopiapub",
      bech32PrefixValAddr: "gitopiavaloper",
      bech32PrefixValPub: "gitopiavaloperpub",
      bech32PrefixConsAddr: "gitopiavalcons",
      bech32PrefixConsPub: "gitopiavalconspub",
    },
    currencies: [
      {
        coinDenom: "LORE",
        coinMinimalDenom: "ulore",
        coinGeckoId: "gitopia",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gitopia/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LORE",
        coinMinimalDenom: "ulore",
        coinGeckoId: "gitopia",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0012,
          average: 0.0016,
          high: 0.0024,
        },
      },
    ],
    features: [],
  },
  GOVGEN_GOVGEN_1: {
    rpc: "https://rpc-govgen.keplr.app",
    rest: "https://lcd-govgen.keplr.app",
    chainId: "govgen-1",
    chainName: "GovGen",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/govgen/chain.png",
    bip44: {
      coinType: 118,
    },
    walletUrlForStaking: "https://testnet.keplr.app/chains/govgen",
    bech32Config: {
      bech32PrefixAccAddr: "govgen",
      bech32PrefixAccPub: "govgenpub",
      bech32PrefixValAddr: "govgenvaloper",
      bech32PrefixValPub: "govgenvaloperpub",
      bech32PrefixConsAddr: "govgenvalcons",
      bech32PrefixConsPub: "govgenvalconspub",
    },
    currencies: [
      {
        coinDenom: "GOVGEN",
        coinMinimalDenom: "ugovgen",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/govgen/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "GOVGEN",
        coinMinimalDenom: "ugovgen",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/govgen/chain.png",
        gasPriceStep: {
          low: 0.006,
          average: 0.006,
          high: 0.009,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "GOVGEN",
      coinMinimalDenom: "ugovgen",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/govgen/chain.png",
    },
    features: [],
  },
  GRAND_GRAND_1: {
    chainId: "grand-1",
    chainName: "Grand",
    rpc: "https://noble-testnet-rpc.polkachu.com",
    rest: "https://noble-testnet-api.polkachu.com",
    nodeProvider: {
      name: "Polkachu",
      email: "hello@polkachu.com",
      website: "https://polkachu.com",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/grand/chain.png",
    stakeCurrency: {
      coinDenom: "STAKE",
      coinMinimalDenom: "ustake",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "noble",
      bech32PrefixAccPub: "noblepub",
      bech32PrefixValAddr: "noblevaloper",
      bech32PrefixValPub: "noblevaloperpub",
      bech32PrefixConsAddr: "noblevalcons",
      bech32PrefixConsPub: "noblevalconspub",
    },
    currencies: [
      {
        coinDenom: "USDC",
        coinMinimalDenom: "uusdc",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/grand/uusdc.png",
      },
      {
        coinDenom: "USDY",
        coinMinimalDenom: "ausdy",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/grand/ausdy.png",
      },
      {
        coinDenom: "STAKE",
        coinMinimalDenom: "ustake",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/grand/ustake.png",
      },
      {
        coinDenom: "LOVE",
        coinMinimalDenom: "ulove",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "USDC",
        coinMinimalDenom: "uusdc",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/grand/uusdc.png",
        gasPriceStep: {
          low: 0.1,
          average: 0.1,
          high: 0.2,
        },
      },
    ],
    features: [],
  },
  GRAVITY_BRIDGE_GRAVITY_BRIDGE_3: {
    rpc: "https://rpc-gravity-bridge.keplr.app",
    rest: "https://lcd-gravity-bridge.keplr.app",
    chainId: "gravity-bridge-3",
    chainName: "Gravity Bridge",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/chain.png",
    stakeCurrency: {
      coinDenom: "GRAV",
      coinMinimalDenom: "ugraviton",
      coinDecimals: 6,
      coinGeckoId: "graviton",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/ugraviton.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/gravity-bridge",
    walletUrlForStaking: "https://wallet.keplr.app/chains/gravity-bridge",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "gravity",
      bech32PrefixAccPub: "gravitypub",
      bech32PrefixValAddr: "gravityvaloper",
      bech32PrefixValPub: "gravityvaloperpub",
      bech32PrefixConsAddr: "gravityvalcons",
      bech32PrefixConsPub: "gravityvalconspub",
    },
    currencies: [
      {
        coinDenom: "GRAV",
        coinMinimalDenom: "ugraviton",
        coinDecimals: 6,
        coinGeckoId: "graviton",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/ugraviton.png",
      },
      {
        coinDenom: "PSTAKE",
        coinMinimalDenom: "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
        coinDecimals: 18,
        coinGeckoId: "pstake-finance",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48.png",
      },
      {
        coinDenom: "USDT",
        coinMinimalDenom: "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xdAC17F958D2ee523a2206206994597C13D831ec7.png",
      },
      {
        coinDenom: "GTON",
        coinMinimalDenom: "gravity0x01e0E2e61f554eCAaeC0cC933E739Ad90f24a86d",
        coinDecimals: 18,
      },
      {
        coinDenom: "EROWAN",
        coinMinimalDenom: "gravity0x07baC35846e5eD502aA91AdF6A9e7aA210F2DcbE",
        coinDecimals: 18,
      },
      {
        coinDenom: "GEO",
        coinMinimalDenom: "gravity0x147faF8De9d8D8DAAE129B187F0D02D819126750",
        coinDecimals: 18,
      },
      {
        coinDenom: "UNI",
        coinMinimalDenom: "gravity0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984.png",
      },
      {
        coinDenom: "WBTC",
        coinMinimalDenom: "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599.png",
      },
      {
        coinDenom: "WSCRT",
        coinMinimalDenom: "gravity0x2B89bF8ba858cd2FCee1faDa378D5cd6936968Be",
        coinDecimals: 6,
      },
      {
        coinDenom: "stkETH",
        coinMinimalDenom: "gravity0x2C5Bcad9Ade17428874855913Def0A02D8bE2324",
        coinDecimals: 18,
      },
      {
        coinDenom: "SD",
        coinMinimalDenom: "gravity0x30D20208d987713f46DFD34EF128Bb16C404D10f",
        coinDecimals: 18,
      },
      {
        coinDenom: "WDOGE",
        coinMinimalDenom: "gravity0x35a532d376FFd9a705d0Bb319532837337A398E7",
        coinDecimals: 18,
      },
      {
        coinDenom: "PAXG",
        coinMinimalDenom: "gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78.png",
      },
      {
        coinDenom: "AXL",
        coinMinimalDenom: "gravity0x467719aD09025FcC6cF6F8311755809d45a5E5f3",
        coinDecimals: 6,
      },
      {
        coinDenom: "XKI",
        coinMinimalDenom: "gravity0x4f6103BAd230295baCF30f914FDa7D4273B7F585",
        coinDecimals: 6,
      },
      {
        coinDenom: "LINK",
        coinMinimalDenom: "gravity0x514910771AF9Ca656af840dff83E8264EcF986CA",
        coinDecimals: 18,
      },
      {
        coinDenom: "PAGE",
        coinMinimalDenom: "gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e",
        coinDecimals: 8,
      },
      {
        coinDenom: "DAI",
        coinMinimalDenom: "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x6B175474E89094C44Da98b954EedeAC495271d0F.png",
      },
      {
        coinDenom: "MATIC",
        coinMinimalDenom: "gravity0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0.png",
      },
      {
        coinDenom: "CUDOS",
        coinMinimalDenom: "gravity0x817bbDbC3e8A1204f3691d14bB44992841e3dB35",
        coinDecimals: 18,
      },
      {
        coinDenom: "FRAX",
        coinMinimalDenom: "gravity0x853d955aCEf822Db058eb8505911ED77F175b99e",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x853d955aCEf822Db058eb8505911ED77F175b99e.png",
      },
      {
        coinDenom: "xFUND",
        coinMinimalDenom: "gravity0x892A6f9dF0147e5f079b0993F486F9acA3c87881",
        coinDecimals: 9,
      },
      {
        coinDenom: "GET",
        coinMinimalDenom: "gravity0x8a854288a5976036A725879164Ca3e91d30c6A1B",
        coinDecimals: 18,
      },
      {
        coinDenom: "WEVMOS",
        coinMinimalDenom: "gravity0x93581991f68DBaE1eA105233b67f7FA0D6BDeE7b",
        coinDecimals: 18,
      },
      {
        coinDenom: "SHIB",
        coinMinimalDenom: "gravity0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE.png",
      },
      {
        coinDenom: "CRO",
        coinMinimalDenom: "gravity0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b.png",
      },
      {
        coinDenom: "STORJ",
        coinMinimalDenom: "gravity0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC.png",
      },
      {
        coinDenom: "BAND",
        coinMinimalDenom: "gravity0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
        coinDecimals: 18,
      },
      {
        coinDenom: "WETH",
        coinMinimalDenom: "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        coinDecimals: 18,
      },
      {
        coinDenom: "USTC",
        coinMinimalDenom: "gravity0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
        coinDecimals: 18,
      },
      {
        coinDenom: "somm",
        coinMinimalDenom: "gravity0xa670d7237398238DE01267472C6f13e5B8010FD1",
        coinDecimals: 6,
      },
      {
        coinDenom: "UST",
        coinMinimalDenom: "gravity0xa693B19d2931d498c5B318dF961919BB4aee87a5",
        coinDecimals: 6,
      },
      {
        coinDenom: "stETH",
        coinMinimalDenom: "gravity0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84.png",
      },
      {
        coinDenom: "FET",
        coinMinimalDenom: "gravity0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
        coinDecimals: 18,
      },
      {
        coinDenom: "UMEE",
        coinMinimalDenom: "gravity0xc0a4Df35568F116C370E6a6A6022Ceb908eedDaC",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "GRAV",
        coinMinimalDenom: "ugraviton",
        coinDecimals: 6,
        coinGeckoId: "graviton",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/ugraviton.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48.png",
        gasPriceStep: {
          low: 0.0002,
          average: 0.0005,
          high: 0.0008,
        },
      },
      {
        coinDenom: "USDT",
        coinMinimalDenom: "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0002,
          average: 0.0005,
          high: 0.0008,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xdAC17F958D2ee523a2206206994597C13D831ec7.png",
      },
      {
        coinDenom: "FUND",
        coinMinimalDenom:
          "ibc/D157AD8A50DAB0FC4EB95BBE1D9407A590FA2CDEE04C90A76C005089BF76E519",
        coinDecimals: 9,
      },
      {
        coinDenom: "MNTL",
        coinMinimalDenom:
          "ibc/00F2B62EB069321A454B708876476AFCD9C23C8C9C4A5A206DDF1CD96B645057",
        coinDecimals: 6,
      },
      {
        coinDenom: "CHEQ",
        coinMinimalDenom:
          "ibc/5012B1C96F286E8A6604A87037CE51241C6F1CA195B71D1E261FCACB69FB6BC2",
        coinDecimals: 9,
      },
      {
        coinDenom: "HUAHUA",
        coinMinimalDenom:
          "ibc/048BE20AE2E6BFD4142C547E04F17E5F94363003A12B7B6C084E08101BFCF7D1",
        coinDecimals: 6,
      },
      {
        coinDenom: "STARS",
        coinMinimalDenom:
          "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
        coinDecimals: 6,
      },
      {
        coinDenom: "CMDX",
        coinMinimalDenom:
          "ibc/29A7122D024B5B8FA8A2EFBB4FA47272C25C8926AA005A96807127208082DAB3",
        coinDecimals: 6,
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/2E5D0AC026AC1AFA65A23023BA4F24BB8DDF94F118EDC0BAD6F625BFC557CDED",
        coinDecimals: 6,
      },
      {
        coinDenom: "NYM",
        coinMinimalDenom:
          "ibc/0C273962C274B2C05B22D9474BFE5B84D6A6FCAD198CB9B0ACD35EA521A36606",
        coinDecimals: 6,
      },
      {
        coinDenom: "GTON",
        coinMinimalDenom: "gravity0x01e0E2e61f554eCAaeC0cC933E739Ad90f24a86d",
        coinDecimals: 18,
      },
      {
        coinDenom: "EROWAN",
        coinMinimalDenom: "gravity0x07baC35846e5eD502aA91AdF6A9e7aA210F2DcbE",
        coinDecimals: 18,
      },
      {
        coinDenom: "GEO",
        coinMinimalDenom: "gravity0x147faF8De9d8D8DAAE129B187F0D02D819126750",
        coinDecimals: 18,
      },
      {
        coinDenom: "UNI",
        coinMinimalDenom: "gravity0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984.png",
      },
      {
        coinDenom: "WBTC",
        coinMinimalDenom: "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599.png",
      },
      {
        coinDenom: "WSCRT",
        coinMinimalDenom: "gravity0x2B89bF8ba858cd2FCee1faDa378D5cd6936968Be",
        coinDecimals: 6,
      },
      {
        coinDenom: "stkETH",
        coinMinimalDenom: "gravity0x2C5Bcad9Ade17428874855913Def0A02D8bE2324",
        coinDecimals: 18,
      },
      {
        coinDenom: "SD",
        coinMinimalDenom: "gravity0x30D20208d987713f46DFD34EF128Bb16C404D10f",
        coinDecimals: 18,
      },
      {
        coinDenom: "WDOGE",
        coinMinimalDenom: "gravity0x35a532d376FFd9a705d0Bb319532837337A398E7",
        coinDecimals: 18,
      },
      {
        coinDenom: "PAXG",
        coinMinimalDenom: "gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78.png",
      },
      {
        coinDenom: "AXL",
        coinMinimalDenom: "gravity0x467719aD09025FcC6cF6F8311755809d45a5E5f3",
        coinDecimals: 6,
      },
      {
        coinDenom: "XKI",
        coinMinimalDenom: "gravity0x4f6103BAd230295baCF30f914FDa7D4273B7F585",
        coinDecimals: 6,
      },
      {
        coinDenom: "LINK",
        coinMinimalDenom: "gravity0x514910771AF9Ca656af840dff83E8264EcF986CA",
        coinDecimals: 18,
      },
      {
        coinDenom: "PAGE",
        coinMinimalDenom: "gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e",
        coinDecimals: 8,
      },
      {
        coinDenom: "DAI",
        coinMinimalDenom: "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x6B175474E89094C44Da98b954EedeAC495271d0F.png",
      },
      {
        coinDenom: "MATIC",
        coinMinimalDenom: "gravity0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0.png",
      },
      {
        coinDenom: "CUDOS",
        coinMinimalDenom: "gravity0x817bbDbC3e8A1204f3691d14bB44992841e3dB35",
        coinDecimals: 18,
      },
      {
        coinDenom: "FRAX",
        coinMinimalDenom: "gravity0x853d955aCEf822Db058eb8505911ED77F175b99e",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x853d955aCEf822Db058eb8505911ED77F175b99e.png",
      },
      {
        coinDenom: "xFUND",
        coinMinimalDenom: "gravity0x892A6f9dF0147e5f079b0993F486F9acA3c87881",
        coinDecimals: 9,
      },
      {
        coinDenom: "GET",
        coinMinimalDenom: "gravity0x8a854288a5976036A725879164Ca3e91d30c6A1B",
        coinDecimals: 18,
      },
      {
        coinDenom: "WEVMOS",
        coinMinimalDenom: "gravity0x93581991f68DBaE1eA105233b67f7FA0D6BDeE7b",
        coinDecimals: 18,
      },
      {
        coinDenom: "SHIB",
        coinMinimalDenom: "gravity0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE.png",
      },
      {
        coinDenom: "CRO",
        coinMinimalDenom: "gravity0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b.png",
      },
      {
        coinDenom: "STORJ",
        coinMinimalDenom: "gravity0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC.png",
      },
      {
        coinDenom: "BAND",
        coinMinimalDenom: "gravity0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
        coinDecimals: 18,
      },
      {
        coinDenom: "WETH",
        coinMinimalDenom: "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        coinDecimals: 18,
      },
      {
        coinDenom: "USTC",
        coinMinimalDenom: "gravity0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
        coinDecimals: 18,
      },
      {
        coinDenom: "somm",
        coinMinimalDenom: "gravity0xa670d7237398238DE01267472C6f13e5B8010FD1",
        coinDecimals: 6,
      },
      {
        coinDenom: "UST",
        coinMinimalDenom: "gravity0xa693B19d2931d498c5B318dF961919BB4aee87a5",
        coinDecimals: 6,
      },
      {
        coinDenom: "stETH",
        coinMinimalDenom: "gravity0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/gravity-bridge/gravity0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84.png",
      },
      {
        coinDenom: "FET",
        coinMinimalDenom: "gravity0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
        coinDecimals: 18,
      },
      {
        coinDenom: "UMEE",
        coinMinimalDenom: "gravity0xc0a4Df35568F116C370E6a6A6022Ceb908eedDaC",
        coinDecimals: 6,
      },
    ],
    features: [],
  },
  HAQQ_NETWORK_HAQQ_11235_1: {
    chainId: "haqq_11235-1",
    chainName: "HAQQ Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/haqq_11235/chain.png",
    rpc: "https://rpc.tm.haqq.network",
    rest: "https://rest.cosmos.haqq.network",
    nodeProvider: {
      name: "Haqq Association",
      email: "privacy@islamiccoin.net",
      website: "https://haqq.network",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "haqq",
      bech32PrefixAccPub: "haqqpub",
      bech32PrefixValAddr: "haqqvaloper",
      bech32PrefixValPub: "haqqvaloperpub",
      bech32PrefixConsAddr: "haqqvalcons",
      bech32PrefixConsPub: "haqqvalconspub",
    },
    currencies: [
      {
        coinDenom: "ISLM",
        coinMinimalDenom: "aISLM",
        coinDecimals: 18,
        coinGeckoId: "islamic-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/haqq_11235/islm.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ISLM",
        coinMinimalDenom: "aISLM",
        coinDecimals: 18,
        coinGeckoId: "islamic-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/haqq_11235/islm.png",
        gasPriceStep: {
          average: 25000000000,
          high: 40000000000,
          low: 20000000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "ISLM",
      coinMinimalDenom: "aISLM",
      coinDecimals: 18,
      coinGeckoId: "islamic-coin",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/haqq_11235/islm.png",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  HELICHAIN_HELICHAIN: {
    chainId: "helichain",
    chainName: "HeliChain",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/helichain/chain.png",
    rpc: "https://rpc.helichain.com",
    rest: "https://lcd.helichain.com",
    nodeProvider: {
      name: "HeliChain",
      email: "support@helichain.com",
      website: "https://helichain.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "heli",
      bech32PrefixAccPub: "helipub",
      bech32PrefixValAddr: "helivaloper",
      bech32PrefixValPub: "helivaloperpub",
      bech32PrefixConsAddr: "helivalcons",
      bech32PrefixConsPub: "helivalconspub",
    },
    currencies: [
      {
        coinDenom: "HELI",
        coinMinimalDenom: "uheli",
        coinDecimals: 6,
        coinGeckoId: "helichain",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/helichain/uheli.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "HELI",
        coinMinimalDenom: "uheli",
        coinDecimals: 6,
        coinGeckoId: "helichain",
        gasPriceStep: {
          low: 0.001,
          average: 0.0025,
          high: 0.004,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/helichain/uheli.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "HELI",
      coinMinimalDenom: "uheli",
      coinDecimals: 6,
      coinGeckoId: "helichain",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/helichain/uheli.png",
    },
    features: ["cosmwasm"],
    walletUrlForStaking: "https://explorer.helichain.com/Helichain/",
  },
  HUMANS_AI_HUMANS_1089_1: {
    rpc: "https://humans.rpc.kjnodes.com/",
    rest: "https://humans.api.kjnodes.com/",
    chainId: "humans_1089-1",
    chainName: "Humans.ai",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/humans_1089/logo.png",
    nodeProvider: {
      name: "Humans.ai",
      email: "contact@humans.ai",
      website: "https://humans.ai/",
    },
    stakeCurrency: {
      coinDenom: "HEART",
      coinMinimalDenom: "aheart",
      coinDecimals: 18,
      coinGeckoId: "humans-ai",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/humans_1089/logo.png",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "human",
      bech32PrefixAccPub: "humanpub",
      bech32PrefixValAddr: "humanvaloper",
      bech32PrefixValPub: "humanvaloperpub",
      bech32PrefixConsAddr: "humanvalcons",
      bech32PrefixConsPub: "humanvalconspub",
    },
    currencies: [
      {
        coinDenom: "HEART",
        coinMinimalDenom: "aheart",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "HEART",
        coinMinimalDenom: "aheart",
        coinDecimals: 18,
        gasPriceStep: {
          low: 80000000000,
          average: 120000000000,
          high: 160000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  ICONLAKE_TESTNET_ICONLAKE_TESTNET_1: {
    rpc: "https://rpc.testnet.iconlake.com",
    rest: "https://lcd.testnet.iconlake.com",
    nodeProvider: {
      name: "iconLake",
      email: "support@iconlake.com",
      website: "https://iconlake.com/",
    },
    chainId: "iconlake-testnet-1",
    chainName: "iconLake Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake-testnet/logo.png",
    bip44: {
      coinType: 1009,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "iconlake",
      bech32PrefixAccPub: "iconlakepub",
      bech32PrefixValAddr: "iconlakevaloper",
      bech32PrefixValPub: "iconlakevaloperpub",
      bech32PrefixConsAddr: "iconlakevalcons",
      bech32PrefixConsPub: "iconlakevalconspub",
    },
    stakeCurrency: {
      coinDenom: "LAKE",
      coinMinimalDenom: "ulake",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake-testnet/ulake.png",
    },
    currencies: [
      {
        coinDenom: "LAKE",
        coinMinimalDenom: "ulake",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake-testnet/ulake.png",
      },
      {
        coinDenom: "DROP",
        coinMinimalDenom: "udrop",
        coinDecimals: 4,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake-testnet/udrop.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DROP",
        coinMinimalDenom: "udrop",
        coinDecimals: 4,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake-testnet/udrop.png",
        gasPriceStep: {
          low: 0.1,
          average: 0.5,
          high: 1,
        },
      },
      {
        coinDenom: "LAKE",
        coinMinimalDenom: "ulake",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake-testnet/ulake.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: [],
  },
  ICONLAKE_ICONLAKE_1: {
    rpc: "https://rpc.iconlake.com",
    rest: "https://lcd.iconlake.com",
    nodeProvider: {
      name: "iconLake",
      email: "support@iconlake.com",
      website: "https://iconlake.com/",
    },
    chainId: "iconlake-1",
    chainName: "iconLake",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake/logo.png",
    bip44: {
      coinType: 1009,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "iconlake",
      bech32PrefixAccPub: "iconlakepub",
      bech32PrefixValAddr: "iconlakevaloper",
      bech32PrefixValPub: "iconlakevaloperpub",
      bech32PrefixConsAddr: "iconlakevalcons",
      bech32PrefixConsPub: "iconlakevalconspub",
    },
    stakeCurrency: {
      coinDenom: "LAKE",
      coinMinimalDenom: "ulake",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake/ulake.png",
    },
    currencies: [
      {
        coinDenom: "LAKE",
        coinMinimalDenom: "ulake",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake/ulake.png",
      },
      {
        coinDenom: "DROP",
        coinMinimalDenom: "udrop",
        coinDecimals: 4,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake/udrop.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DROP",
        coinMinimalDenom: "udrop",
        coinDecimals: 4,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake/udrop.png",
        gasPriceStep: {
          low: 0.1,
          average: 0.5,
          high: 1,
        },
      },
      {
        coinDenom: "LAKE",
        coinMinimalDenom: "ulake",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iconlake/ulake.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: [],
  },
  PRYZMTESTNET_INDIGO_1: {
    rpc: "https://testnet-rpc.pryzm.zone",
    rest: "https://testnet-api.pryzm.zone",
    nodeProvider: {
      name: "PRYZM",
      email: "support@pryzm.zone",
      website: "https://pryzm.zone/",
    },
    chainId: "indigo-1",
    chainName: "pryzmtestnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/indigo/chain.png",
    stakeCurrency: {
      coinDenom: "PRYZM",
      coinMinimalDenom: "upryzm",
      coinDecimals: 6,
    },
    walletUrlForStaking:
      "https://testnets.cosmosrun.info/pryzm-indigo-1/staking",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "pryzm",
      bech32PrefixAccPub: "pryzmpub",
      bech32PrefixValAddr: "pryzmvaloper",
      bech32PrefixValPub: "pryzmvaloperpub",
      bech32PrefixConsAddr: "pryzmvalcons",
      bech32PrefixConsPub: "pryzmvalconspub",
    },
    currencies: [
      {
        coinDenom: "PRYZM",
        coinMinimalDenom: "upryzm",
        coinDecimals: 6,
      },
      {
        coinDenom: "USDSim",
        coinMinimalDenom:
          "factory/pryzm15k9s9p0ar0cx27nayrgk6vmhyec3lj7vkry7rx/uusdsim",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "PRYZM",
        coinMinimalDenom: "upryzm",
        coinDecimals: 6,
      },
      {
        coinDenom: "PRYZM",
        coinMinimalDenom:
          "factory/pryzm15k9s9p0ar0cx27nayrgk6vmhyec3lj7vkry7rx/uusdsim",
        coinDecimals: 6,
      },
      {
        coinDenom: "OSMO",
        coinMinimalDenom:
          "ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333",
        coinDecimals: 6,
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        coinDecimals: 6,
      },
      {
        coinDenom: "LUNA",
        coinMinimalDenom:
          "ibc/265435C653FE85CD659E88CD51D4A735BDD4D3804871400378A488C71D68C72B",
        coinDecimals: 6,
      },
      {
        coinDenom: "INJ",
        coinMinimalDenom:
          "ibc/1704820C9E1F4A9925E0F23D3B92ED0E53DEE28726257E39FABD444BFC6B6AE3",
        coinDecimals: 18,
      },
    ],
    features: ["cosmwasm"],
  },
  INITIA_TESTNET_INITIATION_1: {
    rpc: "https://rpc-initia-testnet.keplr.app",
    rest: "https://lcd-initia-testnet.keplr.app",
    chainId: "initiation-1",
    chainName: "Initia Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/initiation/chain.png",
    walletUrlForStaking: "https://testnet.keplr.app/chains/initia",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "init",
      bech32PrefixAccPub: "initpub",
      bech32PrefixValAddr: "initvaloper",
      bech32PrefixValPub: "initvaloperpub",
      bech32PrefixConsAddr: "initvalcons",
      bech32PrefixConsPub: "initvalconspub",
    },
    currencies: [
      {
        coinDenom: "INIT",
        coinMinimalDenom: "uinit",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/initiation/chain.png",
      },
      {
        coinDenom: "GAS",
        coinMinimalDenom:
          "move/944f8dd8dc49f96c25fea9849f16436dcfa6d564eec802f3ef7f8b3ea85368ff",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/initiation/gas.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "INIT",
      coinMinimalDenom: "uinit",
      coinDecimals: 6,
    },
    feeCurrencies: [
      {
        coinDenom: "GAS",
        coinMinimalDenom:
          "move/944f8dd8dc49f96c25fea9849f16436dcfa6d564eec802f3ef7f8b3ea85368ff",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.15,
          average: 0.3,
          high: 1,
        },
      },
    ],
  },
  INJECTIVE__TESTNET__INJECTIVE_888: {
    rpc: "https://testnet.sentry.tm.injective.network",
    rest: "https://testnet.sentry.lcd.injective.network",
    chainId: "injective-888",
    chainName: "Injective (Testnet)",
    nodeProvider: {
      name: "Injective",
      email: "contact@injectivelabs.org",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective-888/chain.png",
    bech32Config: {
      bech32PrefixAccPub: "injpub",
      bech32PrefixValPub: "injvaloperpub",
      bech32PrefixAccAddr: "inj",
      bech32PrefixConsPub: "injvalconspub",
      bech32PrefixValAddr: "injvaloper",
      bech32PrefixConsAddr: "injvalcons",
    },
    bip44: {
      coinType: 60,
    },
    stakeCurrency: {
      coinDenom: "INJ (Testnet)",
      coinDecimals: 18,
      coinMinimalDenom: "inj",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective-888/inj.png",
    },
    currencies: [
      {
        coinDenom: "INJ (Testnet)",
        coinDecimals: 18,
        coinMinimalDenom: "inj",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective-888/inj.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "INJ (Testnet)",
        coinDecimals: 18,
        coinMinimalDenom: "inj",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective-888/inj.png",
        gasPriceStep: {
          low: 500000000,
          average: 1000000000,
          high: 1500000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign", "cosmwasm"],
  },
  INJECTIVE_INJECTIVE_1: {
    rpc: "https://rpc-injective.keplr.app",
    rest: "https://lcd-injective.keplr.app",
    chainId: "injective-1",
    chainName: "Injective",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/chain.png",
    bech32Config: {
      bech32PrefixAccPub: "injpub",
      bech32PrefixValPub: "injvaloperpub",
      bech32PrefixAccAddr: "inj",
      bech32PrefixConsPub: "injvalconspub",
      bech32PrefixValAddr: "injvaloper",
      bech32PrefixConsAddr: "injvalcons",
    },
    bip44: {
      coinType: 60,
    },
    stakeCurrency: {
      coinDenom: "INJ",
      coinDecimals: 18,
      coinMinimalDenom: "inj",
      coinGeckoId: "injective-protocol",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
    },
    currencies: [
      {
        coinDenom: "INJ",
        coinDecimals: 18,
        coinMinimalDenom: "inj",
        coinGeckoId: "injective-protocol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
      },
      {
        coinDenom: "NINJA",
        coinDecimals: 6,
        coinMinimalDenom:
          "factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja",
        coinGeckoId: "dog-wif-nuchucks",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/ninja.png",
      },
      {
        coinDenom: "Talis",
        coinDecimals: 6,
        coinMinimalDenom:
          "factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/Talis",
        coinGeckoId: "talis-protocol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/talis.png",
      },
      {
        coinDenom: "HAVA",
        coinMinimalDenom:
          "factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/hava.png",
      },
      {
        coinDenom: "KIRA",
        coinDecimals: 6,
        coinMinimalDenom:
          "factory/inj1xy3kvlr4q4wdd6lrelsrw2fk2ged0any44hhwq/KIRA",
        coinGeckoId: "kira-the-injective-cat",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1xy3kvlr4q4wdd6lrelsrw2fk2ged0any44hhwq/KIRA.png",
      },
      {
        coinDenom: "HDRO",
        coinMinimalDenom:
          "factory/inj1etz0laas6h7vemg3qtd67jpr6lh8v7xz7gfzqw/hdro",
        coinDecimals: 6,
        coinGeckoId: "hydro-protocol-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1etz0laas6h7vemg3qtd67jpr6lh8v7xz7gfzqw/hdro.png",
      },
      {
        coinDenom: "QUNT",
        coinDecimals: 6,
        coinMinimalDenom:
          "factory/inj127l5a2wmkyvucxdlupqyac3y0v6wqfhq03ka64/qunt",
        coinGeckoId: "injective-quants",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj127l5a2wmkyvucxdlupqyac3y0v6wqfhq03ka64/QUNT.png",
      },
      {
        coinDenom: "HOUND",
        coinDecimals: 6,
        coinMinimalDenom:
          "factory/inj1nccncwqx5q22lf4uh83dhe89e3f0sh8kljf055/HOUND",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1nccncwqx5q22lf4uh83dhe89e3f0sh8kljf055/HOUND.png",
      },
      {
        coinDenom: "bINJ",
        coinDecimals: 18,
        coinMinimalDenom:
          "factory/inj1dxp690rd86xltejgfq2fa7f2nxtgmm5cer3hvu/bINJ",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1dxp690rd86xltejgfq2fa7f2nxtgmm5cer3hvu/bINJ.png",
      },
      {
        coinDenom: "SYN",
        coinDecimals: 6,
        coinMinimalDenom:
          "factory/inj1a6xdezq7a94qwamec6n6cnup02nvewvjtz6h6e/SYN",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1a6xdezq7a94qwamec6n6cnup02nvewvjtz6h6e/syn.png",
      },
      {
        coinDenom: "ashSYN",
        coinMinimalDenom:
          "factory/inj1ej2f3lmpxj4djsmmuxvnfuvplrut7zmwrq7zj8/syn.ash",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/factory/inj1ej2f3lmpxj4djsmmuxvnfuvplrut7zmwrq7zj8/syn.ash.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "INJ",
        coinDecimals: 18,
        coinMinimalDenom: "inj",
        coinGeckoId: "injective-protocol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
        gasPriceStep: {
          low: 500000000,
          average: 1000000000,
          high: 1500000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign", "cosmwasm"],
  },
  INNS_INNS_1: {
    chainId: "inns-1",
    chainName: "Inns",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/inns/chain.png",
    rpc: "https://rpc.inns.fun",
    rest: "https://rest.inns.fun",
    nodeProvider: {
      name: "InnsFun",
      email: "inns@inns.fun",
      website: "https://www.inns.fun/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "inns",
      bech32PrefixAccPub: "innspub",
      bech32PrefixValAddr: "innsvaloper",
      bech32PrefixValPub: "innsvaloperpub",
      bech32PrefixConsAddr: "innsvalcons",
      bech32PrefixConsPub: "innsvalconspub",
    },
    currencies: [
      {
        coinDenom: "INNS",
        coinMinimalDenom: "uinns",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "INNS",
        coinMinimalDenom: "uinns",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "INNS",
      coinMinimalDenom: "uinns",
      coinDecimals: 6,
    },
    features: ["cosmwasm"],
  },
  STARNAME_IOV_MAINNET_IBC: {
    rpc: "https://rpc.starname.app",
    rest: "https://rest.starname.app",
    nodeProvider: {
      name: "Chainmasters",
      email: "jo.chainmasters@gmail.com",
      website: "https://chainmasters.ninja",
    },
    chainId: "iov-mainnet-ibc",
    chainName: "Starname",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iov-mainnet-ibc/chain.png",
    stakeCurrency: {
      coinDenom: "IOV",
      coinMinimalDenom: "uiov",
      coinDecimals: 6,
      coinGeckoId: "starname",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iov-mainnet-ibc/uiov.png",
    },
    bip44: {
      coinType: 234,
    },
    bech32Config: {
      bech32PrefixAccAddr: "star",
      bech32PrefixAccPub: "starpub",
      bech32PrefixValAddr: "starvaloper",
      bech32PrefixValPub: "starvaloperpub",
      bech32PrefixConsAddr: "starvalcons",
      bech32PrefixConsPub: "starvalconspub",
    },
    currencies: [
      {
        coinDenom: "IOV",
        coinMinimalDenom: "uiov",
        coinDecimals: 6,
        coinGeckoId: "starname",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iov-mainnet-ibc/uiov.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "IOV",
        coinMinimalDenom: "uiov",
        coinDecimals: 6,
        coinGeckoId: "starname",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/iov-mainnet-ibc/uiov.png",
        gasPriceStep: {
          low: 1,
          average: 2,
          high: 3,
        },
      },
    ],
    features: [],
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
  },
  IRISNET_IRISHUB_1: {
    rpc: "https://rpc-iris.keplr.app",
    rest: "https://lcd-iris.keplr.app",
    chainId: "irishub-1",
    chainName: "IRISnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/irishub/chain.png",
    stakeCurrency: {
      coinDenom: "IRIS",
      coinMinimalDenom: "uiris",
      coinDecimals: 6,
      coinGeckoId: "iris-network",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/irishub/uiris.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/irisnet",
    walletUrlForStaking: "https://wallet.keplr.app/chains/irisnet",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [
      {
        coinType: 566,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "iaa",
      bech32PrefixAccPub: "iap",
      bech32PrefixValAddr: "iva",
      bech32PrefixValPub: "ivp",
      bech32PrefixConsAddr: "ica",
      bech32PrefixConsPub: "icp",
    },
    currencies: [
      {
        coinDenom: "IRIS",
        coinMinimalDenom: "uiris",
        coinDecimals: 6,
        coinGeckoId: "iris-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/irishub/uiris.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "IRIS",
        coinMinimalDenom: "uiris",
        coinDecimals: 6,
        coinGeckoId: "iris-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/irishub/uiris.png",
        gasPriceStep: {
          low: 0.2,
          average: 0.3,
          high: 0.4,
        },
      },
    ],
    features: [],
  },
  IXO_IXO_5: {
    rpc: "https://ixo.rpc.m.stavr.tech",
    rest: "https://ixo.api.m.stavr.tech",
    nodeProvider: {
      name: "STAVR",
      email: "stavr.tech@gmail.com",
      website: "https://stavr-team.gitbook.io/",
    },
    chainId: "ixo-5",
    chainName: "ixo",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ixo/chain.png",
    stakeCurrency: {
      coinDenom: "IXO",
      coinMinimalDenom: "uixo",
      coinDecimals: 6,
      coinGeckoId: "ixo",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ixo/uixo.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "ixo",
      bech32PrefixAccPub: "ixopub",
      bech32PrefixValAddr: "ixovaloper",
      bech32PrefixValPub: "ixovaloperpub",
      bech32PrefixConsAddr: "ixovalcons",
      bech32PrefixConsPub: "ixovalconspub",
    },
    currencies: [
      {
        coinDenom: "IXO",
        coinMinimalDenom: "uixo",
        coinDecimals: 6,
        coinGeckoId: "ixo",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ixo/uixo.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "IXO",
        coinMinimalDenom: "uixo",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ixo/uixo.png",
        gasPriceStep: {
          low: 0.015,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: [],
  },
  JACKAL_JACKAL_1: {
    chainId: "jackal-1",
    chainName: "Jackal",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/jackal/chain.png",
    rpc: "https://rpc.jackalprotocol.com",
    rest: "https://api.jackalprotocol.com",
    nodeProvider: {
      name: "Jackal Labs",
      email: "devadmin@jackallabs.io",
      website: "https://jackalprotocol.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "jkl",
      bech32PrefixAccPub: "jklpub",
      bech32PrefixValAddr: "jklvaloper",
      bech32PrefixValPub: "jklvaloperpub",
      bech32PrefixConsAddr: "jklvalcons",
      bech32PrefixConsPub: "jklvalconspub",
    },
    currencies: [
      {
        coinDenom: "JKL",
        coinMinimalDenom: "ujkl",
        coinDecimals: 6,
        coinGeckoId: "jackal-protocol",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "JKL",
        coinMinimalDenom: "ujkl",
        coinDecimals: 6,
        coinGeckoId: "jackal-protocol",
        gasPriceStep: {
          low: 0.002,
          average: 0.002,
          high: 0.02,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "JKL",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6,
      coinGeckoId: "jackal-protocol",
    },
    features: ["cosmwasm"],
  },
  JOLTIFY_JOLTIFY_1729_1: {
    rpc: "https://rpc.joltify.io",
    rest: "https://lcd.joltify.io",
    nodeProvider: {
      name: "Joltify",
      email: "contact@joltify.io",
      website: "https://joltify.io",
    },
    chainId: "joltify_1729-1",
    chainName: "Joltify",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/joltify_1729/chain.png",
    stakeCurrency: {
      coinDenom: "JOLT",
      coinMinimalDenom: "ujolt",
      coinDecimals: 6,
      coinGeckoId: "joltify",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/joltify_1729/ujolt.png",
    },
    walletUrlForStaking: "https://app.joltify.io/gov/validators",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "jolt",
      bech32PrefixAccPub: "joltpub",
      bech32PrefixValAddr: "joltvaloper",
      bech32PrefixValPub: "joltvaloperpub",
      bech32PrefixConsAddr: "joltvalcons",
      bech32PrefixConsPub: "joltvalconspub",
    },
    currencies: [
      {
        coinDenom: "JOLT",
        coinMinimalDenom: "ujolt",
        coinDecimals: 6,
        coinGeckoId: "joltify",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/joltify_1729/ujolt.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "JOLT",
        coinMinimalDenom: "ujolt",
        coinDecimals: 6,
        coinGeckoId: "joltify",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/joltify_1729/ujolt.png",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0.075,
        },
      },
    ],
    features: [],
  },
  JUNO_JUNO_1: {
    rpc: "https://rpc-juno.keplr.app",
    rest: "https://lcd-juno.keplr.app",
    chainId: "juno-1",
    chainName: "Juno",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/juno/chain.png",
    stakeCurrency: {
      coinDenom: "JUNO",
      coinMinimalDenom: "ujuno",
      coinDecimals: 6,
      coinGeckoId: "juno-network",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/juno/ujuno.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/juno",
    walletUrlForStaking: "https://wallet.keplr.app/chains/juno",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "juno",
      bech32PrefixAccPub: "junopub",
      bech32PrefixValAddr: "junovaloper",
      bech32PrefixValPub: "junovaloperpub",
      bech32PrefixConsAddr: "junovalcons",
      bech32PrefixConsPub: "junovalconspub",
    },
    currencies: [
      {
        coinDenom: "JUNO",
        coinMinimalDenom: "ujuno",
        coinDecimals: 6,
        coinGeckoId: "juno-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/juno/ujuno.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "JUNO",
        coinMinimalDenom: "ujuno",
        coinDecimals: 6,
        coinGeckoId: "juno-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/juno/ujuno.png",
        gasPriceStep: {
          low: 0.075,
          average: 0.075,
          high: 0.075,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.003,
          average: 0.003,
          high: 0.003,
        },
      },
    ],
    features: ["cosmwasm", "authz-msg-revoke-fixed"],
  },
  KUJIRA_KAIYO_1: {
    chainId: "kaiyo-1",
    chainName: "Kujira",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/chain.png",
    rpc: "https://kujira-rpc.nodes.defiantlabs.net",
    rest: "https://rest.cosmos.directory/kujira/",
    nodeProvider: {
      name: "PFC",
      email: "pfc-validator@protonmail.com",
      website: "https://pfc.zone/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "kujira",
      bech32PrefixAccPub: "kujirapub",
      bech32PrefixValAddr: "kujiravaloper",
      bech32PrefixValPub: "kujiravaloperpub",
      bech32PrefixConsAddr: "kujiravalcons",
      bech32PrefixConsPub: "kujiravalconspub",
    },
    currencies: [
      {
        coinDenom: "KUJI",
        coinMinimalDenom: "ukuji",
        coinDecimals: 6,
        coinGeckoId: "kujira",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png",
      },
      {
        coinDenom: "USK",
        coinMinimalDenom:
          "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
        coinDecimals: 6,
        coinGeckoId: "usk",
      },
      {
        coinDenom: "MNTA",
        coinMinimalDenom:
          "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
        coinDecimals: 6,
        coinGeckoId: "mantadao",
      },
      {
        coinDenom: "bKUJI",
        coinMinimalDenom:
          "factory/kujira15e8q5wzlk5k38gjxlhse3vu6vqnafysncx2ltexd6y9gx50vuj2qpt7dgv/boneKuji",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/factory/kujira15e8q5wzlk5k38gjxlhse3vu6vqnafysncx2ltexd6y9gx50vuj2qpt7dgv/bKUJI.png",
      },
      {
        coinDenom: "AQLA",
        coinMinimalDenom:
          "factory/kujira1xe0awk5planmtsmjel5xtx2hzhqdw5p8z66yqd/uaqla",
        coinDecimals: 6,
        coinGeckoId: "aqualibre",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/factory/kujira1xe0awk5planmtsmjel5xtx2hzhqdw5p8z66yqd/AQLA.png",
      },
      {
        coinDenom: "NAMI",
        coinMinimalDenom:
          "factory/kujira13x2l25mpkhwnwcwdzzd34cr8fyht9jlj7xu9g4uffe36g3fmln8qkvm3qn/unami",
        coinDecimals: 6,
        coinGeckoId: "nami-protocol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/factory/kujira13x2l25mpkhwnwcwdzzd34cr8fyht9jlj7xu9g4uffe36g3fmln8qkvm3qn/unami.png",
      },
      {
        coinDenom: "CORAL",
        coinMinimalDenom:
          "factory/kujira18uqsnxsvxdzg4lfz60tah2k0mdjg6scj8dxggk/CORAL",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/factory/kujira18uqsnxsvxdzg4lfz60tah2k0mdjg6scj8dxggk/CORAL.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "KUJI",
        coinMinimalDenom: "ukuji",
        coinDecimals: 6,
        coinGeckoId: "kujira",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png",
      },
      {
        coinDenom: "USK",
        coinMinimalDenom:
          "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
        coinDecimals: 6,
        coinGeckoId: "usk",
      },
      {
        coinDenom: "axlUSDC",
        coinMinimalDenom:
          "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
      {
        coinDenom: "OSMO",
        coinMinimalDenom:
          "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
      },
      {
        coinDenom: "CMDX",
        coinMinimalDenom:
          "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
        coinDecimals: 6,
        coinGeckoId: "comdex",
      },
      {
        coinDenom: "EVMOS",
        coinMinimalDenom:
          "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
        coinDecimals: 6,
        coinGeckoId: "evmos",
      },
      {
        coinDenom: "JUNO",
        coinMinimalDenom:
          "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
        coinDecimals: 6,
        coinGeckoId: "juno-network",
      },
      {
        coinDenom: "MNTA",
        coinMinimalDenom:
          "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
        coinDecimals: 6,
        coinGeckoId: "mantadao",
      },
      {
        coinDenom: "SCRT",
        coinMinimalDenom:
          "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
        coinDecimals: 6,
        coinGeckoId: "secret",
      },
      {
        coinDenom: "STARS",
        coinMinimalDenom:
          "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
        coinDecimals: 6,
        coinGeckoId: "stargaze",
      },
      {
        coinDenom: "wAVAX",
        coinMinimalDenom:
          "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
        coinDecimals: 18,
        coinGeckoId: "avalanche-2",
      },
      {
        coinDenom: "wETH",
        coinMinimalDenom:
          "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
      },
    ],
    stakeCurrency: {
      coinDenom: "KUJI",
      coinMinimalDenom: "ukuji",
      coinDecimals: 6,
      coinGeckoId: "kujira",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png",
    },
    features: ["cosmwasm"],
  },
  KAON__TESTNET__KAON_1: {
    rpc: "https://rpc-kyve-test.ecostake.com",
    rest: "https://rest-kyve-test.ecostake.com",
    nodeProvider: {
      name: "ecostake",
      email: "hello@ecostake.com",
      website: "https://www.ecostake.com/",
    },
    chainId: "kaon-1",
    chainName: "Kaon (Testnet)",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaon/chain.png",
    stakeCurrency: {
      coinDenom: "KYVE",
      coinMinimalDenom: "tkyve",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "kyve",
      bech32PrefixAccPub: "kyvepub",
      bech32PrefixValAddr: "kyvevaloper",
      bech32PrefixValPub: "kyvevaloperpub",
      bech32PrefixConsAddr: "kyvevalcons",
      bech32PrefixConsPub: "kyvevalconspub",
    },
    currencies: [
      {
        coinDenom: "KYVE",
        coinMinimalDenom: "tkyve",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "KYVE",
        coinMinimalDenom: "tkyve",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.02,
          average: 0.03,
          high: 0.06,
        },
      },
    ],
    features: [],
  },
  KAVA_KAVA_2222_10: {
    rpc: "https://rpc-kava.keplr.app",
    rest: "https://lcd-kava.keplr.app",
    chainId: "kava_2222-10",
    chainName: "Kava",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kava_2222/chain.png",
    stakeCurrency: {
      coinDenom: "KAVA",
      coinMinimalDenom: "ukava",
      coinDecimals: 6,
      coinGeckoId: "kava",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kava_2222/ukava.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/kava",
    walletUrlForStaking: "https://wallet.keplr.app/chains/kava",
    bip44: {
      coinType: 459,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "kava",
      bech32PrefixAccPub: "kavapub",
      bech32PrefixValAddr: "kavavaloper",
      bech32PrefixValPub: "kavavaloperpub",
      bech32PrefixConsAddr: "kavavalcons",
      bech32PrefixConsPub: "kavavalconspub",
    },
    currencies: [
      {
        coinDenom: "KAVA",
        coinMinimalDenom: "ukava",
        coinDecimals: 6,
        coinGeckoId: "kava",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kava_2222/ukava.png",
      },
      {
        coinDenom: "SWP",
        coinMinimalDenom: "swp",
        coinDecimals: 6,
        coinGeckoId: "kava-swap",
      },
      {
        coinDenom: "USDX",
        coinMinimalDenom: "usdx",
        coinDecimals: 6,
        coinGeckoId: "usdx",
      },
      {
        coinDenom: "HARD",
        coinMinimalDenom: "hard",
        coinDecimals: 6,
      },
      {
        coinDenom: "BNB",
        coinMinimalDenom: "bnb",
        coinDecimals: 8,
      },
      {
        coinDenom: "BTCB",
        coinMinimalDenom: "btcb",
        coinDecimals: 8,
      },
      {
        coinDenom: "BUSD",
        coinMinimalDenom: "busd",
        coinDecimals: 8,
      },
      {
        coinDenom: "XRPB",
        coinMinimalDenom: "xrpb",
        coinDecimals: 8,
      },
      {
        coinDenom: "USDt",
        coinMinimalDenom: "erc20/tether/usdt",
        coinDecimals: 6,
        coinGeckoId: "tether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kava_2222/uusdt.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "KAVA",
        coinMinimalDenom: "ukava",
        coinDecimals: 6,
        coinGeckoId: "kava",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kava_2222/ukava.png",
        gasPriceStep: {
          low: 0.05,
          average: 0.1,
          high: 0.25,
        },
      },
    ],
    features: ["authz-msg-revoke-fixed"],
  },
  KORELLIA__DEVNET__KORELLIA_2: {
    rpc: "https://rpc.korellia.kyve.network",
    rest: "https://api.korellia.kyve.network",
    chainId: "korellia-2",
    chainName: "Korellia (Devnet)",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/korellia/chain.png",
    stakeCurrency: {
      coinDenom: "KYVE",
      coinMinimalDenom: "tkyve",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/korellia/tkyve.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "kyve",
      bech32PrefixAccPub: "kyvepub",
      bech32PrefixValAddr: "kyvevaloper",
      bech32PrefixValPub: "kyvevaloperpub",
      bech32PrefixConsAddr: "kyvevalcons",
      bech32PrefixConsPub: "kyvevalconspub",
    },
    nodeProvider: {
      name: "KYVE",
      email: "info@kyve.network",
      website: "https://kyve.network",
    },
    currencies: [
      {
        coinDenom: "KYVE",
        coinMinimalDenom: "tkyve",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/korellia/tkyve.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "KYVE",
        coinMinimalDenom: "tkyve",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/korellia/tkyve.png",
        gasPriceStep: {
          low: 0.02,
          average: 0.03,
          high: 0.06,
        },
      },
    ],
    features: [],
  },
  KYVE_KYVE_1: {
    rpc: "https://rpc-kyve.keplr.app",
    rest: "https://lcd-kyve.keplr.app",
    chainId: "kyve-1",
    chainName: "KYVE",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kyve/chain.png",
    stakeCurrency: {
      coinDenom: "KYVE",
      coinMinimalDenom: "ukyve",
      coinDecimals: 6,
      coinGeckoId: "kyve-network",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kyve/ukyve.png",
    },
    walletUrlForStaking: "https://wallet.keplr.app/chains/kyve",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "kyve",
      bech32PrefixAccPub: "kyvepub",
      bech32PrefixValAddr: "kyvevaloper",
      bech32PrefixValPub: "kyvevaloperpub",
      bech32PrefixConsAddr: "kyvevalcons",
      bech32PrefixConsPub: "kyvevalconspub",
    },
    currencies: [
      {
        coinDenom: "KYVE",
        coinMinimalDenom: "ukyve",
        coinDecimals: 6,
        coinGeckoId: "kyve-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kyve/ukyve.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "KYVE",
        coinMinimalDenom: "ukyve",
        coinDecimals: 6,
        coinGeckoId: "kyve-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kyve/ukyve.png",
        gasPriceStep: {
          low: 0.02,
          average: 0.03,
          high: 0.06,
        },
      },
    ],
    features: [],
  },
  LAMBDA_LAMBDA_92000_1: {
    rpc: "https://rpc.lambda.nodestake.org",
    rest: "https://rest.lambda.im",
    chainId: "lambda_92000-1",
    chainName: "Lambda",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lambda_92000/lambda.png",
    evm: {
      chainId: 92000,
      rpc: "https://evm.lambda.im",
    },
    nodeProvider: {
      name: "NodeStake",
      email: "info@nodestake.top",
      website: "https://nodestake.top",
    },
    stakeCurrency: {
      coinDenom: "LAMB",
      coinMinimalDenom: "ulamb",
      coinDecimals: 18,
      coinGeckoId: "lambda",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lambda_92000/lambda.png",
    },
    walletUrlForStaking: "https://app.lambda.im/staking",
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "lamb",
      bech32PrefixAccPub: "lambpub",
      bech32PrefixValAddr: "lambvaloper",
      bech32PrefixValPub: "lambvaloperpub",
      bech32PrefixConsAddr: "lambvalcons",
      bech32PrefixConsPub: "lambvalconspub",
    },
    currencies: [
      {
        coinDenom: "LAMB",
        coinMinimalDenom: "ulamb",
        coinDecimals: 18,
        coinGeckoId: "lambda",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lambda_92000/lambda.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LAMB",
        coinMinimalDenom: "ulamb",
        coinDecimals: 18,
        coinGeckoId: "lambda",
        gasPriceStep: {
          low: 3750000000000,
          average: 3750000000000,
          high: 6000000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  BANDCHAIN_LAOZI_MAINNET: {
    chainId: "laozi-mainnet",
    chainName: "BandChain",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/laozi-mainnet/chain.png",
    rpc: "https://rpc.laozi3.bandchain.org:443",
    rest: "https://laozi3.bandchain.org/api",
    nodeProvider: {
      name: "Band Protocol",
      email: "dev@bandprotocol.com",
      website: "https://bandprotocol.com/",
    },
    bip44: {
      coinType: 494,
    },
    bech32Config: {
      bech32PrefixAccAddr: "band",
      bech32PrefixAccPub: "bandpub",
      bech32PrefixValAddr: "bandvaloper",
      bech32PrefixValPub: "bandvaloperpub",
      bech32PrefixConsAddr: "bandvalcons",
      bech32PrefixConsPub: "bandvalconspub",
    },
    currencies: [
      {
        coinDenom: "BAND",
        coinMinimalDenom: "uband",
        coinDecimals: 6,
        coinGeckoId: "band-protocol",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BAND",
        coinMinimalDenom: "uband",
        coinDecimals: 6,
        coinGeckoId: "band-protocol",
        gasPriceStep: {
          low: 0.0025,
          average: 0.003,
          high: 0.005,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "BAND",
      coinMinimalDenom: "uband",
      coinDecimals: 6,
      coinGeckoId: "band-protocol",
    },
    features: [],
  },
  LAVA_LAVA_MAINNET_1: {
    rpc: "https://rpc-lava.keplr.app",
    rest: "https://lcd-lava.keplr.app",
    chainId: "lava-mainnet-1",
    chainName: "Lava",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lava-mainnet/chain.png",
    stakeCurrency: {
      coinDenom: "LAVA",
      coinMinimalDenom: "ulava",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lava-mainnet/ulava.png",
      coinGeckoId: "lava-network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "lava@",
      bech32PrefixAccPub: "lava@pub",
      bech32PrefixValAddr: "lava@valoper",
      bech32PrefixValPub: "lava@valoperpub",
      bech32PrefixConsAddr: "lava@valcons",
      bech32PrefixConsPub: "lava@valconspub",
    },
    currencies: [
      {
        coinDenom: "LAVA",
        coinMinimalDenom: "ulava",
        coinDecimals: 6,
        coinGeckoId: "lava-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lava-mainnet/ulava.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LAVA",
        coinMinimalDenom: "ulava",
        coinDecimals: 6,
        coinGeckoId: "lava-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lava-mainnet/ulava.png",
        gasPriceStep: {
          low: 0.00002,
          average: 0.025,
          high: 0.05,
        },
      },
    ],
    features: [],
    walletUrlForStaking: "https://wallet.keplr.app/chains/lava",
  },
  LAVA_TESTNET_LAVA_TESTNET_2: {
    rpc: "https://lav1.tendermintrpc.lava.build",
    rest: "https://lav1.rest.lava.build",
    chainId: "lava-testnet-2",
    chainName: "Lava Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lava-testnet/chain.png",
    stakeCurrency: {
      coinDenom: "LAVA",
      coinMinimalDenom: "ulava",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lava-testnet/ulava.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "lava@",
      bech32PrefixAccPub: "lava@pub",
      bech32PrefixValAddr: "lava@valoper",
      bech32PrefixValPub: "lava@valoperpub",
      bech32PrefixConsAddr: "lava@valcons",
      bech32PrefixConsPub: "lava@valconspub",
    },
    currencies: [
      {
        coinDenom: "LAVA",
        coinMinimalDenom: "ulava",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lava-testnet/ulava.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LAVA",
        coinMinimalDenom: "ulava",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lava-testnet/ulava.png",
        gasPriceStep: {
          low: 0.00002,
          average: 0.025,
          high: 0.05,
        },
      },
    ],
    features: [],
    nodeProvider: {
      name: "Lava",
      website: "https://www.lavanet.xyz/",
      email: "amir@lava.foundation",
    },
  },
  LIKECOIN_LIKECOIN_MAINNET_2: {
    chainId: "likecoin-mainnet-2",
    chainName: "LikeCoin",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/likecoin-mainnet/chain.png",
    rpc: "https://rpc-likecoin.keplr.app",
    rest: "https://lcd-likecoin.keplr.app",
    walletUrl: "https://wallet.keplr.app/chains/likecoin",
    walletUrlForStaking: "https://wallet.keplr.app/chains/likecoin",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "like",
      bech32PrefixAccPub: "likepub",
      bech32PrefixValAddr: "likevaloper",
      bech32PrefixValPub: "likevaloperpub",
      bech32PrefixConsAddr: "likevalcons",
      bech32PrefixConsPub: "likevalconspub",
    },
    currencies: [
      {
        coinDenom: "LIKE",
        coinMinimalDenom: "nanolike",
        coinDecimals: 9,
        coinGeckoId: "likecoin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/likecoin-mainnet/nanolike.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LIKE",
        coinMinimalDenom: "nanolike",
        coinDecimals: 9,
        coinGeckoId: "likecoin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/likecoin-mainnet/nanolike.png",
        gasPriceStep: {
          low: 1000,
          average: 10000,
          high: 1000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "LIKE",
      coinMinimalDenom: "nanolike",
      coinDecimals: 9,
      coinGeckoId: "likecoin",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/likecoin-mainnet/nanolike.png",
    },
    features: [],
  },
  LIKECOIN_TESTNET_LIKECOIN_PUBLIC_TESTNET_5: {
    chainId: "likecoin-public-testnet-5",
    chainName: "LikeCoin Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/likecoin-public-testnet/chain.png",
    rpc: "https://node.testnet-rpc.like.co/",
    rest: "https://node.testnet.like.co/",
    nodeProvider: {
      name: "like.co",
      email: "tech@like.co",
      website: "https://like.co",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "like",
      bech32PrefixAccPub: "likepub",
      bech32PrefixValAddr: "likevaloper",
      bech32PrefixValPub: "likevaloperpub",
      bech32PrefixConsAddr: "likevalcons",
      bech32PrefixConsPub: "likevalconspub",
    },
    currencies: [
      {
        coinDenom: "EKIL",
        coinMinimalDenom: "nanoekil",
        coinDecimals: 9,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/likecoin-public-testnet/nanoekil.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "EKIL",
        coinMinimalDenom: "nanoekil",
        coinDecimals: 9,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/likecoin-public-testnet/nanoekil.png",
        gasPriceStep: {
          low: 1000,
          average: 10000,
          high: 1000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "EKIL",
      coinMinimalDenom: "nanoekil",
      coinDecimals: 9,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/likecoin-public-testnet/nanoekil.png",
    },
    features: [],
  },
  LOOP_FANS_LOOP_1: {
    rpc: "https://rpc.loop.pfc.zone",
    rest: "https://api.loop.pfc.zone",
    nodeProvider: {
      name: "PFC",
      website: "https://pfc.zone/",
      email: "pfc@pfc.zone",
    },
    chainId: "loop-1",
    chainName: "Loop Fans",
    stakeCurrency: {
      coinDenom: "TOKEN",
      coinMinimalDenom: "token",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/loop/token.png",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/loop/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "loop",
      bech32PrefixAccPub: "looppub",
      bech32PrefixValAddr: "loopvaloper",
      bech32PrefixValPub: "loopvaloperpub",
      bech32PrefixConsAddr: "loopvalcons",
      bech32PrefixConsPub: "loopvalconspub",
    },
    currencies: [
      {
        coinDenom: "TOKEN",
        coinMinimalDenom: "token",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/loop/token.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TOKEN",
        coinMinimalDenom: "token",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/loop/token.png",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  LUM_NETWORK_LUM_NETWORK_1: {
    rpc: "https://rpc.node0.mainnet.lum.network",
    rest: "https://rest.node0.mainnet.lum.network",
    chainId: "lum-network-1",
    chainName: "Lum Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/lum-network/chain.png",
    stakeCurrency: {
      coinDenom: "LUM",
      coinMinimalDenom: "ulum",
      coinDecimals: 6,
      coinGeckoId: "lum-network",
    },
    nodeProvider: {
      name: "Lum Network",
      email: "contact@lum.network",
      website: "https://lum.network/",
    },
    walletUrlForStaking: "https://wallet.lum.network",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "lum",
      bech32PrefixAccPub: "lumpub",
      bech32PrefixValAddr: "lumvaloper",
      bech32PrefixValPub: "lumvaloperpub",
      bech32PrefixConsAddr: "lumvalcons",
      bech32PrefixConsPub: "lumvalconspub",
    },
    currencies: [
      {
        coinDenom: "LUM",
        coinMinimalDenom: "ulum",
        coinDecimals: 6,
        coinGeckoId: "lum-network",
      },
      {
        coinDenom: "DFR",
        coinMinimalDenom: "udfr",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUM",
        coinMinimalDenom: "ulum",
        coinDecimals: 6,
        coinGeckoId: "lum-network",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
  },
  TURA_MAINNET_TURA: {
    rpc: "https://rpc-beta1.turablockchain.com",
    rest: "https://lcd-beta1.turablockchain.com",
    chainId: "mainnet-tura",
    chainName: "Tura",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mainnet-tura/chain.png",
    stakeCurrency: {
      coinDenom: "TURA",
      coinMinimalDenom: "utura",
      coinDecimals: 8,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mainnet-tura/utura.png",
    },
    nodeProvider: {
      name: "TuraBlockchain",
      email: "larryliu@roturalabs.com",
      website: "http://turablockchain.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "tura",
      bech32PrefixAccPub: "turapub",
      bech32PrefixValAddr: "turavaloper",
      bech32PrefixValPub: "turavaloperpub",
      bech32PrefixConsAddr: "turavalcons",
      bech32PrefixConsPub: "turavalconspub",
    },
    currencies: [
      {
        coinDenom: "TURA",
        coinMinimalDenom: "utura",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mainnet-tura/utura.png",
      },
      {
        coinDenom: "TAGS",
        coinMinimalDenom: "utags",
        coinDecimals: 8,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TURA",
        coinMinimalDenom: "utura",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mainnet-tura/utura.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: [],
  },
  MANDE_NETWORK_MANDE_18071918_1: {
    rpc: "https://mande-mainnet-tendermint.public.blastapi.io",
    rest: "https://mande-mainnet-rest.public.blastapi.io",
    chainId: "mande_18071918-1",
    chainName: "Mande Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mande_18071918/chain.png",
    stakeCurrency: {
      coinDenom: "MAND",
      coinMinimalDenom: "amand",
      coinDecimals: 18,
    },
    nodeProvider: {
      name: "Bware Labs",
      email: "contact@bwarelabs.com",
      website: "https://bwarelabs.com",
    },
    walletUrlForStaking:
      "https://portal.dymension.xyz/rollapp/mande_18071918-1/staking",
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "mande",
      bech32PrefixAccPub: "mandepub",
      bech32PrefixValAddr: "mandevaloper",
      bech32PrefixValPub: "mandevaloperpub",
      bech32PrefixConsAddr: "mandevalcons",
      bech32PrefixConsPub: "mandevalconspub",
    },
    currencies: [
      {
        coinDenom: "MAND",
        coinMinimalDenom: "amand",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MAND",
        coinMinimalDenom: "amand",
        coinDecimals: 18,
        gasPriceStep: {
          average: 20000000000,
          high: 20000000000,
          low: 20000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  ASSETMANTLE_MANTLE_1: {
    chainId: "mantle-1",
    chainName: "AssetMantle",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png",
    nodeProvider: {
      name: "mantleNode",
      email: "hello@assetmantle.one",
      website: "https://assetmantle.one/",
    },
    rpc: "https://rpc.assetmantle.one",
    rest: "https://rest.assetmantle.one",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "mantle",
      bech32PrefixAccPub: "mantlepub",
      bech32PrefixValAddr: "mantlevaloper",
      bech32PrefixValPub: "mantlevaloperpub",
      bech32PrefixConsAddr: "mantlevalcons",
      bech32PrefixConsPub: "mantlevalconspub",
    },
    currencies: [
      {
        coinDenom: "MNTL",
        coinMinimalDenom: "umntl",
        coinDecimals: 6,
        coinGeckoId: "assetmantle",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MNTL",
        coinMinimalDenom: "umntl",
        coinDecimals: 6,
        coinGeckoId: "assetmantle",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "MNTL",
      coinMinimalDenom: "umntl",
      coinDecimals: 6,
      coinGeckoId: "assetmantle",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantle/chain.png",
    },
    features: [],
    walletUrl: "https://wallet.assetmantle.one",
    walletUrlForStaking: "https://wallet.assetmantle.one/stake",
  },
  MANTRA_HONGBAI_TESTNET_MANTRA_HONGBAI_1: {
    chainId: "mantra-hongbai-1",
    chainName: "MANTRA Hongbai Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mantra-hongbai/chain.png",
    rpc: "https://rpc.hongbai.mantrachain.io",
    rest: "https://api.hongbai.mantrachain.io",
    nodeProvider: {
      name: "MANTRA Chain",
      email: "contact@mantrachain.io",
      website: "https://www.mantrachain.io",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "mantra",
      bech32PrefixAccPub: "mantrapub",
      bech32PrefixValAddr: "mantravaloper",
      bech32PrefixValPub: "mantravaloperpub",
      bech32PrefixConsAddr: "mantravalcons",
      bech32PrefixConsPub: "mantravalconspub",
    },
    currencies: [
      {
        coinDenom: "OM",
        coinMinimalDenom: "uom",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "OM",
        coinMinimalDenom: "uom",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "OM",
      coinMinimalDenom: "uom",
      coinDecimals: 6,
    },
    features: ["cosmwasm"],
  },
  MARS_HUB_MARS_1: {
    rpc: "https://rpc-mars.keplr.app",
    rest: "https://lcd-mars.keplr.app",
    chainId: "mars-1",
    chainName: "Mars Hub",
    stakeCurrency: {
      coinDenom: "MARS",
      coinMinimalDenom: "umars",
      coinDecimals: 6,
      coinGeckoId: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/umars.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/mars-hub",
    walletUrlForStaking: "https://wallet.keplr.app/chains/mars-hub",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/chain.png",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [
      {
        coinType: 330,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "mars",
      bech32PrefixAccPub: "marspub",
      bech32PrefixValAddr: "marsvaloper",
      bech32PrefixValPub: "marsvaloperpub",
      bech32PrefixConsAddr: "marsvalcons",
      bech32PrefixConsPub: "marsvalconspub",
    },
    currencies: [
      {
        coinDenom: "MARS",
        coinMinimalDenom: "umars",
        coinDecimals: 6,
        coinGeckoId: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/umars.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MARS",
        coinMinimalDenom: "umars",
        coinDecimals: 6,
        coinGeckoId: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mars/umars.png",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0.01,
        },
      },
    ],
    features: ["authz-msg-revoke-fixed"],
  },
  MEDAS_DIGITAL_MEDASDIGITAL_1: {
    rpc: "https://rpc.medas-digital.io:26657",
    rest: "https://lcd.medas-digital.io:1317",
    chainId: "medasdigital-1",
    chainName: "Medas Digital",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/medasdigital/chain.png",
    nodeProvider: {
      name: "Medas Digital",
      email: "info@medas-digital.io",
      website: "https://medas-digital.io/",
    },
    walletUrl: "https://app.medas-digital.io",
    walletUrlForStaking: "https://app.medas-digital.io/delegate",
    stakeCurrency: {
      coinDenom: "MEDAS",
      coinMinimalDenom: "umedas",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/medasdigital/umedas.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "medas",
      bech32PrefixAccPub: "medaspub",
      bech32PrefixValAddr: "medasvaloper",
      bech32PrefixValPub: "medasvaloperpub",
      bech32PrefixConsAddr: "medasvalcons",
      bech32PrefixConsPub: "medasvalconspub",
    },
    currencies: [
      {
        coinDenom: "MEDAS",
        coinMinimalDenom: "umedas",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/medasdigital/umedas.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MEDAS",
        coinMinimalDenom: "umedas",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0001,
          average: 0.0001,
          high: 0.00025,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/medasdigital/umedas.png",
      },
    ],
    features: [],
  },
  MEME_NETWORK_MEME_1: {
    chainId: "meme-1",
    chainName: "Meme Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/meme/chain.png",
    rpc: "https://rpc-meme-1.meme.sx/",
    rest: "https://api-meme-1.meme.sx/",
    nodeProvider: {
      name: "MEME Foundation",
      email: "marketing@meme.sx",
      website: "https://meme.sx/",
    },
    stakeCurrency: {
      coinDenom: "MEME",
      coinMinimalDenom: "umeme",
      coinDecimals: 6,
      coinGeckoId: "meme-network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "meme",
      bech32PrefixAccPub: "memepub",
      bech32PrefixValAddr: "memevaloper",
      bech32PrefixValPub: "memevaloperpub",
      bech32PrefixConsAddr: "memevalcons",
      bech32PrefixConsPub: "memevalconspub",
    },
    currencies: [
      {
        coinDenom: "MEME",
        coinMinimalDenom: "umeme",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MEME",
        coinMinimalDenom: "umeme",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.025,
          average: 0.035,
          high: 0.045,
        },
      },
    ],
    features: [],
    walletUrlForStaking: "https://wallet.meme.sx",
  },
  MIGALOO_MIGALOO_1: {
    chainId: "migaloo-1",
    chainName: "Migaloo",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/migaloo/chain.png",
    rpc: "https://migaloo-rpc.polkachu.com:443",
    rest: "https://migaloo-api.polkachu.com:443",
    nodeProvider: {
      name: "Polkachu",
      email: "hello@polkachu.com",
      website: "https://polkachu.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "migaloo",
      bech32PrefixAccPub: "migaloopub",
      bech32PrefixValAddr: "migaloovaloper",
      bech32PrefixValPub: "migaloovaloperpub",
      bech32PrefixConsAddr: "migaloovalcons",
      bech32PrefixConsPub: "migaloovalconspub",
    },
    currencies: [
      {
        coinDenom: "WHALE",
        coinMinimalDenom: "uwhale",
        coinDecimals: 6,
        coinGeckoId: "white-whale",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/migaloo/uwhale.png",
      },
      {
        coinDenom: "GUPPY",
        coinMinimalDenom:
          "factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/migaloo/factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy.png",
      },
      {
        coinDenom: "RAC",
        coinMinimalDenom:
          "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/migaloo/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac.png",
      },
      {
        coinDenom: "SHARK",
        coinMinimalDenom:
          "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/migaloo/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark.png",
      },
      {
        coinDenom: "bWHALE",
        coinMinimalDenom:
          "factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/migaloo/factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/bWHALE.png",
      },
      {
        coinDenom: "RSTK",
        coinMinimalDenom:
          "factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/migaloo/factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk.png",
      },
      {
        coinDenom: "GRAC",
        coinMinimalDenom:
          "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/ugrac",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/migaloo/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/grac.png",
      },
      {
        coinDenom: "ampGASH",
        coinMinimalDenom:
          "factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/migaloo/factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "WHALE",
        coinMinimalDenom: "uwhale",
        coinDecimals: 6,
        coinGeckoId: "white-whale",
        gasPriceStep: {
          low: 1,
          average: 1.2,
          high: 1.4,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "WHALE",
      coinMinimalDenom: "uwhale",
      coinDecimals: 6,
      coinGeckoId: "white-whale",
    },
    features: ["cosmwasm"],
  },
  MINEPLEX_MAINNET_MINEPLEX_MAINNET_1: {
    rpc: "https://tendermint-rpc.xfi.ms/",
    rest: "https://cosmos-api.xfi.ms/",
    chainId: "mineplex-mainnet-1",
    chainName: "MinePlex Mainnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mineplex-mainnet/mineplex.png",
    nodeProvider: {
      name: "CrossFi Foundation",
      website: "https://crossfi.org/",
      email: "info@crossfi.org",
    },
    stakeCurrency: {
      coinDenom: "MPX",
      coinMinimalDenom: "mpx",
      coinDecimals: 18,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "mx",
      bech32PrefixAccPub: "mxpub",
      bech32PrefixValAddr: "mxvaloper",
      bech32PrefixValPub: "mxvaloperpub",
      bech32PrefixConsAddr: "mxvalcons",
      bech32PrefixConsPub: "mxvalconspub",
    },
    currencies: [
      {
        coinDenom: "MPX",
        coinMinimalDenom: "mpx",
        coinDecimals: 18,
      },
      {
        coinDenom: "XFI",
        coinMinimalDenom: "xfi",
        coinDecimals: 18,
      },
      {
        coinDenom: "XFT",
        coinMinimalDenom: "xft",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MPX",
        coinMinimalDenom: "mpx",
        coinDecimals: 18,
        gasPriceStep: {
          low: 10000000000000,
          average: 15000000000000,
          high: 20000000000000,
        },
      },
    ],
    features: [],
  },
  CELESTIA_MOCHA_TESTNET_MOCHA_4: {
    rpc: "https://rpc-celestia-testnet-mocha.keplr.app",
    rest: "https://lcd-celestia-testnet-mocha.keplr.app",
    chainId: "mocha-4",
    chainName: "Celestia Mocha Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mocha/chain.png",
    stakeCurrency: {
      coinDenom: "TIA",
      coinMinimalDenom: "utia",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "celestia",
      bech32PrefixAccPub: "celestiapub",
      bech32PrefixValAddr: "celestiavaloper",
      bech32PrefixValPub: "celestiavaloperpub",
      bech32PrefixConsAddr: "celestiavalcons",
      bech32PrefixConsPub: "celestiavalconspub",
    },
    currencies: [
      {
        coinDenom: "TIA",
        coinMinimalDenom: "utia",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TIA",
        coinMinimalDenom: "utia",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.02,
          high: 0.1,
        },
      },
    ],
    features: [],
  },
  TERP_NETWORK_MOROCCO_1: {
    rpc: "https://rpc-terp.zenchainlabs.io",
    rest: "https://api-terp.zenchainlabs.io",
    nodeProvider: {
      name: "ZenChainLabs",
      email: "support@zenchainlabs.io",
      website: "https://zenchainlabs.io/",
    },
    chainId: "morocco-1",
    chainName: "Terp Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/morocco/chain.png",
    stakeCurrency: {
      coinDenom: "TERP",
      coinMinimalDenom: "uterp",
      coinDecimals: 6,
    },
    walletUrlForStaking: "https://ping.pub/terp/staking",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "terp",
      bech32PrefixAccPub: "terppub",
      bech32PrefixValAddr: "terpvaloper",
      bech32PrefixValPub: "terpvaloperpub",
      bech32PrefixConsAddr: "terpvalcons",
      bech32PrefixConsPub: "terpvalconspub",
    },
    currencies: [
      {
        coinDenom: "TERP",
        coinMinimalDenom: "uterp",
        coinDecimals: 6,
      },
      {
        coinDenom: "THIOL",
        coinMinimalDenom: "uthiol",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TERP",
        coinMinimalDenom: "uterp",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.02,
          average: 0.04,
          high: 0.075,
        },
      },
      {
        coinDenom: "THIOL",
        coinMinimalDenom: "uthiol",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.5,
          average: 0.75,
          high: 1,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  MUTELANDIA_NETWORK_MUTELANDIA1: {
    bech32Config: {
      bech32PrefixAccAddr: "mute",
      bech32PrefixAccPub: "mutepub",
      bech32PrefixConsAddr: "mutevalcons",
      bech32PrefixConsPub: "mutevalconspub",
      bech32PrefixValAddr: "mutevaloper",
      bech32PrefixValPub: "mutevaloperpub",
    },
    bip44: {
      coinType: 118,
    },
    chainId: "mutelandia1",
    chainName: "Mutelandia Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mutelandia1/chain.png",
    nodeProvider: {
      name: "Mutelandia",
      email: "mutecoin@proton.me",
      website: "https://app.mutelandia.xyz",
    },
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "MUTE",
        coinMinimalDenom: "umute",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mutelandia1/chain.png",
      },
    ],
    features: [],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: "MUTE",
        coinMinimalDenom: "umute",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mutelandia1/chain.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.02,
          high: 0.1,
        },
      },
    ],
    rpc: "https://rpc.mutelandia.xyz/",
    rest: "https://api.mutelandia.xyz/",
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "MUTE",
      coinMinimalDenom: "umute",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/mutelandia1/chain.png",
    },
  },
  NEUTRON_NEUTRON_1: {
    rpc: "https://rpc-neutron.keplr.app",
    rest: "https://lcd-neutron.keplr.app",
    chainId: "neutron-1",
    chainName: "Neutron",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "neutron",
      bech32PrefixAccPub: "neutronpub",
      bech32PrefixValAddr: "neutronvaloper",
      bech32PrefixValPub: "neutronvaloperpub",
      bech32PrefixConsAddr: "neutronvalcons",
      bech32PrefixConsPub: "neutronvalconspub",
    },
    currencies: [
      {
        coinDenom: "NTRN",
        coinMinimalDenom: "untrn",
        coinDecimals: 6,
        coinGeckoId: "neutron-3",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/untrn.png",
      },
      {
        coinDenom: "wstETH",
        coinMinimalDenom:
          "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
        coinDecimals: 18,
        coinGeckoId: "wrapped-steth",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH.png",
      },
      {
        coinDenom: "NEWT",
        coinMinimalDenom:
          "factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt",
        coinDecimals: 6,
        coinGeckoId: "newt",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt.png",
      },
      {
        coinDenom: "ECLIP",
        coinMinimalDenom:
          "factory/neutron10sr06r3qkhn7xzpw3339wuj77hu06mzna6uht0/eclip",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron10sr06r3qkhn7xzpw3339wuj77hu06mzna6uht0/eclip.png",
      },
      {
        coinDenom: "BAD",
        coinMinimalDenom:
          "factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad.png",
      },
      {
        coinDenom: "DSR",
        coinMinimalDenom:
          "factory/neutron1guar6dc2scpxtmmq8reh0q5cv2l37vs0uyfdru/dinosaur",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1guar6dc2scpxtmmq8reh0q5cv2l37vs0uyfdru/dinosaur.png",
      },
      {
        coinDenom: "NTRL",
        coinMinimalDenom:
          "factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll.png",
      },
      {
        coinDenom: "RETRO",
        coinMinimalDenom:
          "factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/retro.png",
      },
      {
        coinDenom: "CIRCUS",
        coinMinimalDenom:
          "factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus.png",
      },
      {
        coinDenom: "GODRD",
        coinMinimalDenom:
          "factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard.png",
      },
      {
        coinDenom: "GDD",
        coinMinimalDenom:
          "factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/gdd.png",
      },
      {
        coinDenom: "APOLLO",
        coinMinimalDenom:
          "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/apollo.png",
      },
      {
        coinDenom: "ROOM",
        coinMinimalDenom:
          "factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/ROOM",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/room.png",
      },
      {
        coinDenom: "GOP",
        coinMinimalDenom:
          "factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/GOP",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/GOP.png",
      },
      {
        coinDenom: "BOY",
        coinMinimalDenom:
          "neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv/boy.png",
      },
      {
        coinDenom: "CARTEL",
        coinMinimalDenom:
          "factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel.png",
      },
      {
        coinDenom: "MOO",
        coinMinimalDenom:
          "factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/MOO",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/MOO.png",
      },
      {
        coinDenom: "SCRAP",
        coinMinimalDenom:
          "factory/neutron1qm224945hrkwc5qze40tau499n46ydmulpeagscmsuyxfrds02usf7mnpu/scrap",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1qm224945hrkwc5qze40tau499n46ydmulpeagscmsuyxfrds02usf7mnpu/SCRAP.png",
      },
      {
        coinDenom: "WEIRD",
        coinMinimalDenom:
          "factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD.png",
      },
      {
        coinDenom: "SIN",
        coinMinimalDenom:
          "factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sin",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/sinToken.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NTRN",
        coinMinimalDenom: "untrn",
        coinDecimals: 6,
        coinGeckoId: "neutron-3",
        gasPriceStep: {
          low: 0.0053,
          average: 0.0053,
          high: 0.0053,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0008,
          average: 0.0008,
          high: 0.0008,
        },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.008,
          average: 0.008,
          high: 0.008,
        },
      },
      {
        coinDenom: "wstETH",
        coinMinimalDenom:
          "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
        coinDecimals: 18,
        gasPriceStep: {
          low: 2903231.6597,
          average: 2903231.6597,
          high: 2903231.6597,
        },
      },
      {
        coinDenom: "DYDX",
        coinMinimalDenom:
          "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130",
        coinDecimals: 18,
        gasPriceStep: {
          low: 2564102564.1026,
          average: 2564102564.1026,
          high: 2564102564.1026,
        },
      },
      {
        coinDenom: "TIA",
        coinMinimalDenom:
          "ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0004,
          average: 0.0004,
          high: 0.0004,
        },
      },
      {
        coinDenom: "stATOM",
        coinMinimalDenom:
          "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0006,
          average: 0.0006,
          high: 0.0006,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  NIBIRUDEVNET_NIBIRU_DEVNET_1: {
    chainId: "nibiru-devnet-1",
    chainName: "nibirudevnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nibiru-devnet/chain.png",
    rpc: "https://rpc.devnet-1.nibiru.fi/",
    rest: "https://lcd.devnet-1.nibiru.fi/",
    nodeProvider: {
      name: "Nibiru Team",
      email: "dev@nibiru.fi",
      website: "https://nibiru.fi",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "nibi",
      bech32PrefixAccPub: "nibipub",
      bech32PrefixValAddr: "nibivaloper",
      bech32PrefixValPub: "nibivaloperpub",
      bech32PrefixConsAddr: "nibivalcons",
      bech32PrefixConsPub: "nibivalconspub",
    },
    currencies: [
      {
        coinDenom: "NIBI",
        coinMinimalDenom: "unibi",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nibiru-devnet/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NIBI",
        coinMinimalDenom: "unibi",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nibiru-devnet/chain.png",
        gasPriceStep: {
          low: 0.05,
          average: 0.125,
          high: 0.2,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "NIBI",
      coinMinimalDenom: "unibi",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nibiru-devnet/chain.png",
    },
    features: ["cosmwasm"],
  },
  NIBIRUTESTNET_NIBIRU_TESTNET_1: {
    chainId: "nibiru-testnet-1",
    chainName: "nibirutestnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nibiru-testnet/chain.png",
    rpc: "https://rpc.testnet-1.nibiru.fi/",
    rest: "https://lcd.testnet-1.nibiru.fi/",
    nodeProvider: {
      name: "Nibiru Team",
      email: "dev@nibiru.fi",
      website: "https://nibiru.fi",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "nibi",
      bech32PrefixAccPub: "nibipub",
      bech32PrefixValAddr: "nibivaloper",
      bech32PrefixValPub: "nibivaloperpub",
      bech32PrefixConsAddr: "nibivalcons",
      bech32PrefixConsPub: "nibivalconspub",
    },
    currencies: [
      {
        coinDenom: "NIBI",
        coinMinimalDenom: "unibi",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nibiru-testnet/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NIBI",
        coinMinimalDenom: "unibi",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nibiru-testnet/chain.png",
        gasPriceStep: {
          low: 0.05,
          average: 0.125,
          high: 0.2,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "NIBI",
      coinMinimalDenom: "unibi",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nibiru-testnet/chain.png",
    },
    features: ["cosmwasm"],
  },
  NILLION_TESTNET_NILLION_CHAIN_TESTNET_1: {
    rpc: "https://testnet-nillion-rpc.lavenderfive.com",
    rest: "https://testnet-nillion-api.lavenderfive.com",
    nodeProvider: {
      name: "Lavender.Five",
      email: "hello@lavenderfive.com",
      website: "https://www.lavenderfive.com/",
    },
    chainId: "nillion-chain-testnet-1",
    chainName: "Nillion Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png",
    stakeCurrency: {
      coinDenom: "NIL",
      coinMinimalDenom: "unil",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "nillion",
      bech32PrefixAccPub: "nillionpub",
      bech32PrefixValAddr: "nillionvaloper",
      bech32PrefixValPub: "nillionvaloperpub",
      bech32PrefixConsAddr: "nillionvalcons",
      bech32PrefixConsPub: "nillionvalconspub",
    },
    currencies: [
      {
        coinDenom: "NIL",
        coinMinimalDenom: "unil",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NIL",
        coinMinimalDenom: "unil",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png",
        gasPriceStep: {
          low: 0.001,
          average: 0.001,
          high: 0.01,
        },
      },
    ],
    features: [],
  },
  NIM_NETWORK_NIM_1122_1: {
    rpc: "https://nim-mainnet-tendermint.public.blastapi.io",
    rest: "https://nim-mainnet-rest.public.blastapi.io",
    chainId: "nim_1122-1",
    chainName: "NIM Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nim_1122/chain.png",
    stakeCurrency: {
      coinDenom: "NIM",
      coinMinimalDenom: "anim",
      coinDecimals: 18,
    },
    nodeProvider: {
      name: "Bware Labs",
      email: "contact@bwarelabs.com",
      website: "https://bwarelabs.com",
    },
    walletUrlForStaking:
      "https://portal.dymension.xyz/rollapp/nim_1122-1/staking",
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "nim",
      bech32PrefixAccPub: "nimpub",
      bech32PrefixValAddr: "nimvaloper",
      bech32PrefixValPub: "nimvaloperpub",
      bech32PrefixConsAddr: "nimvalcons",
      bech32PrefixConsPub: "nimvalconspub",
    },
    currencies: [
      {
        coinDenom: "NIM",
        coinMinimalDenom: "anim",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NIM",
        coinMinimalDenom: "anim",
        coinDecimals: 18,
        gasPriceStep: {
          average: 20000000000,
          high: 20000000000,
          low: 20000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  NOBLE_NOBLE_1: {
    rpc: "https://rpc-noble.keplr.app",
    rest: "https://lcd-noble.keplr.app",
    chainId: "noble-1",
    chainName: "Noble",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/noble/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "noble",
      bech32PrefixAccPub: "noblepub",
      bech32PrefixValAddr: "noblevaloper",
      bech32PrefixValPub: "noblevaloperpub",
      bech32PrefixConsAddr: "noblevalcons",
      bech32PrefixConsPub: "noblevalconspub",
    },
    currencies: [
      {
        coinDenom: "USDC",
        coinMinimalDenom: "uusdc",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/noble/uusdc.png",
      },
      {
        coinDenom: "USDY",
        coinMinimalDenom: "ausdy",
        coinDecimals: 18,
        coinGeckoId: "ondo-us-dollar-yield",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/noble/ausdy.png",
      },
      {
        coinDenom: "FRNZ",
        coinMinimalDenom: "ufrienzies",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/noble/ufrienzies.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "USDC",
        coinMinimalDenom: "uusdc",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/noble/uusdc.png",
        gasPriceStep: {
          low: 0.1,
          average: 0.1,
          high: 0.2,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.01,
          high: 0.02,
        },
      },
    ],
    features: [],
  },
  NOIS_NOIS_1: {
    rpc: "https://nois-rpc.nysa.network",
    rest: "https://nois-api.polkachu.com",
    chainId: "nois-1",
    chainName: "Nois",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nois/chain.png",
    nodeProvider: {
      name: "nysa.network",
      website: "https://nysa.network/",
      email: "contact@nysa.network",
    },
    stakeCurrency: {
      coinDenom: "NOIS",
      coinMinimalDenom: "unois",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "nois",
      bech32PrefixAccPub: "noispub",
      bech32PrefixValAddr: "noisvaloper",
      bech32PrefixValPub: "noisvaloperpub",
      bech32PrefixConsAddr: "noisvalcons",
      bech32PrefixConsPub: "noisvalconspub",
    },
    currencies: [
      {
        coinDenom: "NOIS",
        coinMinimalDenom: "unois",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nois/unois.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NOIS",
        coinMinimalDenom: "unois",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.05,
          average: 0.05,
          high: 0.1,
        },
      },
    ],
    features: [],
  },
  NUBIT_ALPHA_TESTNET_NUBIT_ALPHATESTNET_1: {
    chainId: "nubit-alphatestnet-1",
    chainName: "Nubit Alpha Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nubit-alphatestnet/chain.png",
    rpc: "https://validator.nubit-alphatestnet-1.com:26657",
    rest: "https://validator.nubit-alphatestnet-1.com:1317",
    nodeProvider: {
      name: "Nubit",
      email: "developers@riema.xyz",
      website: "https://nubit.org",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "nubit",
      bech32PrefixAccPub: "nubitpub",
      bech32PrefixValAddr: "nubitvaloper",
      bech32PrefixValPub: "nubitvaloperpub",
      bech32PrefixConsAddr: "nubitvalcons",
      bech32PrefixConsPub: "nubitvalconspub",
    },
    currencies: [
      {
        coinDenom: "NUB",
        coinMinimalDenom: "unub",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NUB",
        coinMinimalDenom: "unub",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.02,
          high: 0.1,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "NUB",
      coinMinimalDenom: "unub",
      coinDecimals: 6,
    },
    features: [],
  },
  NYX_NYX: {
    chainId: "nyx",
    chainName: "Nyx",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nyx/chain.png",
    rpc: "https://rpc.nyx.nodes.guru",
    rest: "https://api.nyx.nodes.guru/",
    nodeProvider: {
      name: "NodesGuru",
      email: "andreym@nodes.guru",
      website: "https://nodes.guru/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "n",
      bech32PrefixAccPub: "npub",
      bech32PrefixValAddr: "nvaloper",
      bech32PrefixValPub: "nvaloperpub",
      bech32PrefixConsAddr: "nvalcons",
      bech32PrefixConsPub: "nvalconspub",
    },
    stakeCurrency: {
      coinDenom: "nyx",
      coinMinimalDenom: "unyx",
      coinDecimals: 6,
    },
    currencies: [
      {
        coinDenom: "NYM",
        coinMinimalDenom: "unym",
        coinDecimals: 6,
        coinGeckoId: "nym",
      },
      {
        coinDenom: "NYX",
        coinMinimalDenom: "unyx",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "nym",
        coinMinimalDenom: "unym",
        coinDecimals: 6,
        coinGeckoId: "nym",
        gasPriceStep: {
          low: 0.025,
          average: 0.025,
          high: 0.04,
        },
      },
      {
        coinDenom: "nyx",
        coinMinimalDenom: "unyx",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.025,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  ODIN_ODIN_MAINNET_FREYA: {
    chainId: "odin-mainnet-freya",
    chainName: "ODIN",
    rpc: "https://rpc.odinprotocol.io/",
    rest: "https://api.odinprotocol.io",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/odin-mainnet-freya/chain.png",
    nodeProvider: {
      name: "Odin Protocol",
      email: "hello@odinprotocol.io",
      website: "https://odinprotocol.io/",
    },
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [
      {
        coinType: 494,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "odin",
      bech32PrefixAccPub: "odinpub",
      bech32PrefixValAddr: "odinvaloper",
      bech32PrefixValPub: "odinvaloperpub",
      bech32PrefixConsAddr: "odinvalcons",
      bech32PrefixConsPub: "odinvalconspub",
    },
    currencies: [
      {
        coinDenom: "ODIN",
        coinMinimalDenom: "loki",
        coinDecimals: 6,
        coinGeckoId: "odin-protocol",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/odin-mainnet-freya/loki.png",
      },
      {
        coinDenom: "GEO",
        coinMinimalDenom: "mGeo",
        coinDecimals: 6,
        coinGeckoId: "geodb",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/odin-mainnet-freya/mGeo.png",
      },
      {
        coinDenom: "DOKI",
        coinMinimalDenom: "udoki",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/odin-mainnet-freya/udoki.png",
      },
      {
        coinDenom: "MYRK",
        coinMinimalDenom: "umyrk",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/odin-mainnet-freya/umyrk.png",
      },
      {
        coinDenom: "O9W",
        coinMinimalDenom: "mO9W",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/odin-mainnet-freya/mO9W.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ODIN",
        coinMinimalDenom: "loki",
        coinDecimals: 6,
        coinGeckoId: "odin-protocol",
        gasPriceStep: {
          low: 0.0125,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "ODIN",
      coinMinimalDenom: "loki",
      coinDecimals: 6,
      coinGeckoId: "odin-protocol",
    },
  },
  OMNIFLIX_OMNIFLIXHUB_1: {
    rpc: "https://rpc-omniflixhub.keplr.app",
    rest: "https://lcd-omniflixhub.keplr.app",
    chainId: "omniflixhub-1",
    chainName: "OmniFlix",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/omniflixhub/chain.png",
    walletUrlForStaking: "https://wallet.keplr.app/chains/omniflix",
    stakeCurrency: {
      coinDenom: "FLIX",
      coinMinimalDenom: "uflix",
      coinDecimals: 6,
      coinGeckoId: "omniflix-network",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/omniflixhub/uflix.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "omniflix",
      bech32PrefixAccPub: "omniflixpub",
      bech32PrefixValAddr: "omniflixvaloper",
      bech32PrefixValPub: "omniflixvaloperpub",
      bech32PrefixConsAddr: "omniflixvalcons",
      bech32PrefixConsPub: "omniflixvalconspub",
    },
    currencies: [
      {
        coinDenom: "FLIX",
        coinMinimalDenom: "uflix",
        coinDecimals: 6,
        coinGeckoId: "omniflix-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/omniflixhub/uflix.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FLIX",
        coinMinimalDenom: "uflix",
        coinDecimals: 6,
        coinGeckoId: "omniflix-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/omniflixhub/uflix.png",
        gasPriceStep: {
          low: 0.001,
          average: 0.0025,
          high: 0.025,
        },
      },
    ],
    features: [],
  },
  OSMOSIS_TESTNET_OSMO_TEST_5: {
    rpc: "https://rpc.testnet.osmosis.zone",
    rest: "https://lcd.testnet.osmosis.zone",
    chainId: "osmo-test-5",
    chainName: "Osmosis Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "osmo",
      bech32PrefixAccPub: "osmopub",
      bech32PrefixValAddr: "osmovaloper",
      bech32PrefixValPub: "osmovaloperpub",
      bech32PrefixConsAddr: "osmovalcons",
      bech32PrefixConsPub: "osmovalconspub",
    },
    stakeCurrency: {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
    },
    currencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
      },
      {
        coinDenom: "ION",
        coinMinimalDenom: "uion",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uion.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
        gasPriceStep: {
          low: 0.0025,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: [],
  },
  OSMOSIS_OSMOSIS_1: {
    rpc: "https://rpc-osmosis.keplr.app",
    rest: "https://lcd-osmosis.keplr.app",
    chainId: "osmosis-1",
    chainName: "Osmosis",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/chain.png",
    stakeCurrency: {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
    },
    walletUrl: "https://app.osmosis.zone",
    walletUrlForStaking: "https://wallet.keplr.app/chains/osmosis",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "osmo",
      bech32PrefixAccPub: "osmopub",
      bech32PrefixValAddr: "osmovaloper",
      bech32PrefixValPub: "osmovaloperpub",
      bech32PrefixConsAddr: "osmovalcons",
      bech32PrefixConsPub: "osmovalconspub",
    },
    currencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
      },
      {
        coinDenom: "ION",
        coinMinimalDenom: "uion",
        coinDecimals: 6,
        coinGeckoId: "ion",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uion.png",
      },
      {
        coinDenom: "IBCX",
        coinMinimalDenom:
          "factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx.png",
      },
      {
        coinDenom: "stIBCX",
        coinMinimalDenom:
          "factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx.png",
      },
      {
        coinDenom: "LVN",
        coinMinimalDenom:
          "factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn.png",
        coinGeckoId: "levana-protocol",
      },
      {
        coinDenom: "MBRN",
        coinMinimalDenom:
          "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn.png",
      },
      {
        coinDenom: "CDT",
        coinMinimalDenom:
          "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt",
        coinDecimals: 6,
        coinGeckoId: "collateralized-debt-token",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt.png",
      },
      {
        coinDenom: "milkTIA",
        coinMinimalDenom:
          "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
        coinDecimals: 6,
        coinGeckoId: "milkyway-staked-tia",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/milktia.png",
      },
      {
        coinDenom: "WOSMO",
        coinMinimalDenom:
          "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO.png",
      },
      {
        coinDenom: "SAIL",
        coinMinimalDenom:
          "factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail.png",
      },
      {
        coinDenom: "BADKID",
        coinMinimalDenom:
          "factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/badkid.png",
      },
      {
        coinDenom: "WBTC",
        coinMinimalDenom:
          "factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc",
        coinDecimals: 8,
        coinGeckoId: "wrapped-bitcoin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc.png",
      },
      {
        coinDenom: "YMOS",
        coinMinimalDenom:
          "factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos.png",
      },
      {
        coinDenom: "bOSMO",
        coinMinimalDenom:
          "factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/bOSMO.png",
      },
      {
        coinDenom: "LAB",
        coinMinimalDenom:
          "factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB.png",
      },
      {
        coinDenom: "TORO",
        coinMinimalDenom:
          "factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro.png",
      },
      {
        coinDenom: "BERNESE",
        coinMinimalDenom:
          "factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE.png",
      },
      {
        coinDenom: "USDT",
        coinMinimalDenom:
          "factory/osmo1em6xs47hd82806f5cxgyufguxrrc7l0aqx7nzzptjuqgswczk8csavdxek/alloyed/allUSDT",
        coinDecimals: 6,
        coinGeckoId: "tether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1em6xs47hd82806f5cxgyufguxrrc7l0aqx7nzzptjuqgswczk8csavdxek/alloyed/allUSDT.png",
      },
      {
        coinDenom: "allBTC",
        coinMinimalDenom:
          "factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC",
        coinDecimals: 8,
        coinGeckoId: "bitcoin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1z6r6qdknhgsc0zeracktgpcxf43j6sekq07nw8sxduc9lg0qjjlqfu25e3/alloyed/allBTC.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "OSMO",
        coinMinimalDenom: "uosmo",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
        gasPriceStep: {
          low: 0.0025,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: ["cosmwasm", "osmosis-txfees", "osmosis-base-fee-beta"],
  },
  OVG_OVG: {
    chainId: "ovg",
    chainName: "ovg",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ovg/chain.png",
    rpc: "https://rpc.chain.overgold.app",
    rest: "https://api.chain.overgold.app",
    nodeProvider: {
      name: "Overgold",
      email: "info@overgold.app",
      website: "https://overgold.io",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "ovg",
      bech32PrefixAccPub: "ovgpub",
      bech32PrefixValAddr: "ovgvaloper",
      bech32PrefixValPub: "ovgvaloperpub",
      bech32PrefixConsAddr: "ovgvalcons",
      bech32PrefixConsPub: "ovgvalconspub",
    },
    currencies: [
      {
        coinDenom: "OVG",
        coinMinimalDenom: "ovg",
        coinDecimals: 8,
      },
      {
        coinDenom: "STOVG",
        coinMinimalDenom: "stovg",
        coinDecimals: 8,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "OVG",
        coinMinimalDenom: "ovg",
        coinDecimals: 8,
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 14,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "STOVG",
      coinMinimalDenom: "stovg",
      coinDecimals: 8,
    },
    features: [],
  },
  SEI_PACIFIC_1: {
    rpc: "https://rpc.wallet.pacific-1.sei.io",
    rest: "https://rest.wallet.pacific-1.sei.io",
    chainId: "pacific-1",
    chainName: "Sei",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pacific/chain.png",
    bip44: {
      coinType: 118,
    },
    stakeCurrency: {
      coinDenom: "SEI",
      coinMinimalDenom: "usei",
      coinDecimals: 6,
      coinGeckoId: "sei-network",
    },
    bech32Config: {
      bech32PrefixAccAddr: "sei",
      bech32PrefixAccPub: "seipub",
      bech32PrefixValAddr: "seivaloper",
      bech32PrefixValPub: "seivaloperpub",
      bech32PrefixConsAddr: "seivalcons",
      bech32PrefixConsPub: "seivalconspub",
    },
    nodeProvider: {
      name: "Sei",
      email: "ecosystem@seinetwork.io",
      website: "https://sei.io",
    },
    currencies: [
      {
        coinDenom: "SEI",
        coinMinimalDenom: "usei",
        coinDecimals: 6,
        coinGeckoId: "sei-network",
      },
      {
        coinDenom: "WETH",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/4tLQqCLaoKKfNFuPjA9o39YbKUwhR1F8N29Tz3hEbfP2",
        coinDecimals: 8,
        coinGeckoId: "weth",
      },
      {
        coinDenom: "iSEI",
        coinMinimalDenom:
          "factory/sei1e3gttzq5e5k49f9f5gzvrl0rltlav65xu6p9xc0aj7e84lantdjqp7cncc/isei",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pacific/factory/sei1e3gttzq5e5k49f9f5gzvrl0rltlav65xu6p9xc0aj7e84lantdjqp7cncc/iSEI.png",
      },
      {
        coinDenom: "USDCet",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/Hq4tuDzhRBnxw3tFA5n6M52NVMVcC19XggbyDiJKCD6H",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
      },
      {
        coinDenom: "USDTet",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/HktfLoADCk9mnjv7XJiN4YXK9ayE6xinLzt8wzcsR2rY",
        coinDecimals: 6,
        coinGeckoId: "tether",
      },
      {
        coinDenom: "WBTC",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/7omXa4gryZ5NiBmLep7JsTtTtANCVKXwT9vbN91aS1br",
        coinDecimals: 8,
        coinGeckoId: "bitcoin",
      },
      {
        coinDenom: "USDCar",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/7edDfnf4mku8So3t4Do215GNHwASEwCWrdhM5GqD51xZ",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
      },
      {
        coinDenom: "WETHar",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/9hJDBDaxqQQhF5HhaPUykeLncBa38XQ5uoNxN3tPQu5r",
        coinDecimals: 8,
        coinGeckoId: "weth",
      },
      {
        coinDenom: "USDCpo",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/DUVFMY2neJdL8aE4d3stcpttDDm5aoyfGyVvm29iA9Yp",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
      },
      {
        coinDenom: "USDCop",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/3VKKYtbQ9iq8f9CaZfgR6Cr3TUj6ypXPAn6kco6wjcAu",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
      },
      {
        coinDenom: "USDCso",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/9fELvUhFo6yWL34ZaLgPbCPzdk9MD1tAzMycgH45qShH",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
      },
      {
        coinDenom: "USDCbs",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/3Ri4N719RQfQaudHiB9CMCYACtK3aieoz1q1Ph24VdAb",
        coinDecimals: 8,
        coinGeckoId: "usd-coin",
      },
      {
        coinDenom: "WETHbs",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/9tTHn18vLnfyBvrQaia6N15zwrfRCAebZDshoPZ39ahN",
        coinDecimals: 8,
        coinGeckoId: "weth",
      },
      {
        coinDenom: "USDTbs",
        coinMinimalDenom:
          "factory/sei189adguawugk3e55zn63z8r9ll29xrjwca636ra7v7gxuzn98sxyqwzt47l/871jbn9unTavWsAe83f2Ma9GJWSv6BKsyWYLiQ6z3Pva",
        coinDecimals: 8,
        coinGeckoId: "tether",
      },
      {
        coinDenom: "$GNR",
        coinMinimalDenom:
          "factory/sei1vrz7ndadkf6gwanf6ccy2d2v706yzrx2957fjd/GOLDENRULES",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pacific/factory/sei1vrz7ndadkf6gwanf6ccy2d2v706yzrx2957fjd/goldenrules.png",
      },
      {
        coinDenom: "POPEYE",
        coinMinimalDenom:
          "factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pacific/factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SEI",
        coinMinimalDenom: "usei",
        coinDecimals: 6,
        coinGeckoId: "sei-network",
        gasPriceStep: {
          low: 0.1,
          average: 0.2,
          high: 0.3,
        },
      },
    ],
  },
  MEDIBLOC_PANACEA_3: {
    chainId: "panacea-3",
    chainName: "MediBloc",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/panacea/chain.png",
    rpc: "https://rpc.gopanacea.org",
    rest: "https://api.gopanacea.org",
    nodeProvider: {
      name: "MediBloc",
      email: "blockchain@medibloc.org",
      website: "https://medibloc.com",
    },
    bip44: {
      coinType: 371,
    },
    bech32Config: {
      bech32PrefixAccAddr: "panacea",
      bech32PrefixAccPub: "panaceapub",
      bech32PrefixValAddr: "panaceavaloper",
      bech32PrefixValPub: "panaceavaloperpub",
      bech32PrefixConsAddr: "panaceavalcons",
      bech32PrefixConsPub: "panaceavalconspub",
    },
    currencies: [
      {
        coinDenom: "MED",
        coinMinimalDenom: "umed",
        coinDecimals: 6,
        coinGeckoId: "medibloc",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MED",
        coinMinimalDenom: "umed",
        coinDecimals: 6,
        coinGeckoId: "medibloc",
        gasPriceStep: {
          low: 5,
          average: 7,
          high: 9,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "MED",
      coinMinimalDenom: "umed",
      coinDecimals: 6,
      coinGeckoId: "medibloc",
    },
    features: [],
  },
  PASSAGE_PASSAGE_2: {
    rpc: "https://rpc-passage.keplr.app",
    rest: "https://lcd-passage.keplr.app",
    chainId: "passage-2",
    chainName: "Passage",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/passage/chain.png",
    stakeCurrency: {
      coinDenom: "PASG",
      coinMinimalDenom: "upasg",
      coinDecimals: 6,
      coinGeckoId: "passage",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/passage/upasg.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "pasg",
      bech32PrefixAccPub: "pasgpub",
      bech32PrefixValAddr: "pasgvaloper",
      bech32PrefixValPub: "pasgvaloperpub",
      bech32PrefixConsAddr: "pasgvalcons",
      bech32PrefixConsPub: "pasgvalconspub",
    },
    walletUrlForStaking: "https://wallet.keplr.app/chains/passage",
    currencies: [
      {
        coinDenom: "PASG",
        coinMinimalDenom: "upasg",
        coinDecimals: 6,
        coinGeckoId: "passage",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/passage/upasg.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "PASG",
        coinMinimalDenom: "upasg",
        coinDecimals: 6,
        coinGeckoId: "passage",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/passage/upasg.png",
      },
    ],
    features: ["cosmwasm"],
  },
  CHAIN4ENERGY_PERUN_1: {
    chainId: "perun-1",
    chainName: "Chain4Energy",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/perun/chain.png",
    rpc: "https://rpc.c4e.io",
    rest: "https://lcd.c4e.io",
    nodeProvider: {
      name: "C4E",
      email: "intergation.support@c4e.io",
      website: "https://c4e.io",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "c4e",
      bech32PrefixAccPub: "c4epub",
      bech32PrefixValAddr: "c4evaloper",
      bech32PrefixValPub: "c4evaloperpub",
      bech32PrefixConsAddr: "c4evalcons",
      bech32PrefixConsPub: "c4evalconspub",
    },
    currencies: [
      {
        coinDenom: "C4E",
        coinMinimalDenom: "uc4e",
        coinDecimals: 6,
        coinGeckoId: "chain4energy",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/perun/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "C4E",
        coinMinimalDenom: "uc4e",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
        coinGeckoId: "chain4energy",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/perun/chain.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "C4E",
      coinMinimalDenom: "uc4e",
      coinDecimals: 6,
      coinGeckoId: "chain4energy",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/perun/chain.png",
    },
    features: ["cosmwasm"],
  },
  TERRA_PHOENIX_1: {
    chainId: "phoenix-1",
    chainName: "Terra",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/phoenix/chain.png",
    rpc: "https://rpc-phoenix.keplr.app",
    rest: "https://lcd-phoenix.keplr.app",
    bip44: {
      coinType: 330,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "terra",
      bech32PrefixAccPub: "terrapub",
      bech32PrefixValAddr: "terravaloper",
      bech32PrefixValPub: "terravaloperpub",
      bech32PrefixConsAddr: "terravalcons",
      bech32PrefixConsPub: "terravalconspub",
    },
    currencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/phoenix/uluna.png",
      },
      {
        coinDenom: "ashLUNA",
        coinMinimalDenom:
          "factory/terra1f5cfm48gcezl3cx25l64ngc4yktnmx7rcpj3kggu6v273742sqqs5yn5ks/luna.ash",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/phoenix/factory/terra1f5cfm48gcezl3cx25l64ngc4yktnmx7rcpj3kggu6v273742sqqs5yn5ks/luna.ash.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/phoenix/uluna.png",
        gasPriceStep: {
          low: 0.02,
          average: 0.02,
          high: 0.04,
        },
      },
      {
        coinDenom: "USDC.axl",
        coinMinimalDenom:
          "ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/phoenix/uusdc.png",
        gasPriceStep: {
          low: 0.018,
          average: 0.02,
          high: 0.04,
        },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "ibc/2C962DAB9F57FE0921435426AE75196009FAA1981BF86991203C8411F8980FDB",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/phoenix/uusdc.png",
        gasPriceStep: {
          low: 0.018,
          average: 0.02,
          high: 0.04,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "LUNA",
      coinMinimalDenom: "uluna",
      coinDecimals: 6,
      coinGeckoId: "terra-luna-2",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/phoenix/uluna.png",
    },
    walletUrlForStaking: "https://wallet.keplr.app/chains/terra",
    features: ["cosmwasm"],
  },
  PROVENANCE_PIO_MAINNET_1: {
    bech32Config: {
      bech32PrefixAccAddr: "pb",
      bech32PrefixAccPub: "pbpub",
      bech32PrefixConsAddr: "pbvalcons",
      bech32PrefixConsPub: "pbvalconspub",
      bech32PrefixValAddr: "pbvaloper",
      bech32PrefixValPub: "pbvaloperpub",
    },
    bip44: {
      coinType: 505,
    },
    chainId: "pio-mainnet-1",
    chainName: "Provenance",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pio-mainnet/chain.png",
    currencies: [
      {
        coinDecimals: 9,
        coinDenom: "HASH",
        coinGeckoId: "provenance-blockchain",
        coinMinimalDenom: "nhash",
      },
    ],
    features: ["cosmwasm"],
    feeCurrencies: [
      {
        coinDecimals: 9,
        coinDenom: "HASH",
        coinGeckoId: "provenance-blockchain",
        coinMinimalDenom: "nhash",
        gasPriceStep: {
          average: 1905,
          high: 2500,
          low: 1905,
        },
      },
    ],
    nodeProvider: {
      name: "Provenance",
      email: "inbound@provenance.io",
      website: "https://provenance.io",
    },
    rest: "https://api.provenance.io/",
    rpc: "https://rpc.provenance.io",
    stakeCurrency: {
      coinDecimals: 9,
      coinDenom: "HASH",
      coinGeckoId: "provenance-blockchain",
      coinMinimalDenom: "nhash",
    },
  },
  PROVENANCE_TESTNET_PIO_TESTNET_1: {
    bech32Config: {
      bech32PrefixAccAddr: "tp",
      bech32PrefixAccPub: "tppub",
      bech32PrefixConsAddr: "tpvalcons",
      bech32PrefixConsPub: "tpvalconspub",
      bech32PrefixValAddr: "tpvaloper",
      bech32PrefixValPub: "tpvaloperpub",
    },
    bip44: {
      coinType: 1,
    },
    chainId: "pio-testnet-1",
    chainName: "Provenance Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pio-testnet/chain.png",
    currencies: [
      {
        coinDecimals: 9,
        coinDenom: "HASH",
        coinGeckoId: "provenance-blockchain",
        coinMinimalDenom: "nhash",
      },
    ],
    features: ["cosmwasm"],
    feeCurrencies: [
      {
        coinDecimals: 9,
        coinDenom: "HASH",
        coinGeckoId: "provenance-blockchain",
        coinMinimalDenom: "nhash",
        gasPriceStep: {
          average: 19050,
          high: 25000,
          low: 19050,
        },
      },
    ],
    nodeProvider: {
      name: "Provenance",
      email: "inbound@provenance.io",
      website: "https://test.provenance.io",
    },
    rest: "https://api.test.provenance.io/",
    rpc: "https://rpc.test.provenance.io",
    stakeCurrency: {
      coinDecimals: 9,
      coinDenom: "HASH",
      coinGeckoId: "provenance-blockchain",
      coinMinimalDenom: "nhash",
    },
  },
  NEUTRON_TESTNET_PION_1: {
    rpc: "https://rpc-palvus.pion-1.ntrn.tech",
    rest: "https://rest-palvus.pion-1.ntrn.tech",
    chainId: "pion-1",
    chainName: "Neutron Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pion/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "neutron",
      bech32PrefixAccPub: "neutronpub",
      bech32PrefixValAddr: "neutronvaloper",
      bech32PrefixValPub: "neutronvaloperpub",
      bech32PrefixConsAddr: "neutronvalcons",
      bech32PrefixConsPub: "neutronvalconspub",
    },
    currencies: [
      {
        coinDenom: "NTRN",
        coinMinimalDenom: "untrn",
        coinDecimals: 6,
      },
      {
        coinDenom: "amATOM",
        coinMinimalDenom:
          "factory/neutron15lku24mqhvy4v4gryrqs4662n9v9q4ux9tayn89cmdzldjcgawushxvm76/amatom",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pion/factory/neutron15lku24mqhvy4v4gryrqs4662n9v9q4ux9tayn89cmdzldjcgawushxvm76/amATOM.png",
      },
      {
        coinDenom: "dATOM",
        coinMinimalDenom:
          "factory/neutron1wgtjgeprg53wthczzlzpg0vrytuvfl9j59lpf87qd3mtj2dq6xysxvwcxd/drop",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NTRN",
        coinMinimalDenom: "untrn",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.02,
          average: 0.02,
          high: 0.02,
        },
      },
    ],
    features: [],
  },
  NOLUS_PIRIN_1: {
    rpc: "https://pirin-cl.nolus.network:26657",
    rest: "https://pirin-cl.nolus.network:1317",
    nodeProvider: {
      name: "Nolus",
      email: "register@nolus.io",
      website: "https://nolus.io/",
    },
    chainId: "pirin-1",
    chainName: "Nolus",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png",
    stakeCurrency: {
      coinDenom: "NLS",
      coinMinimalDenom: "unls",
      coinDecimals: 6,
      coinGeckoId: "nolus",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "nolus",
      bech32PrefixAccPub: "noluspub",
      bech32PrefixValAddr: "nolusvaloper",
      bech32PrefixValPub: "nolusvaloperpub",
      bech32PrefixConsAddr: "nolusvalcons",
      bech32PrefixConsPub: "nolusvalconspub",
    },
    currencies: [
      {
        coinDenom: "NLS",
        coinMinimalDenom: "unls",
        coinDecimals: 6,
        coinGeckoId: "nolus",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "NLS",
        coinMinimalDenom: "unls",
        coinDecimals: 6,
        coinGeckoId: "nolus",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pirin/nolus.png",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.05,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  PLANQ_PLANQ_7070_2: {
    chainId: "planq_7070-2",
    chainName: "Planq",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/planq_7070/chain.png",
    rpc: "https://rpc.planq.network",
    rest: "https://rest.planq.network",
    nodeProvider: {
      name: "Planq",
      email: "info@planq.network",
      website: "https://planq.network/",
    },
    walletUrl: "https://explorer.tcnetwork.io/planq/",
    walletUrlForStaking: "https://ping.pub/planq/staking",
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "plq",
      bech32PrefixAccPub: "plqpub",
      bech32PrefixValAddr: "plqvaloper",
      bech32PrefixValPub: "plqvaloperpub",
      bech32PrefixConsAddr: "plqvalcons",
      bech32PrefixConsPub: "plqvalconspub",
    },
    currencies: [
      {
        coinDenom: "PLQ",
        coinMinimalDenom: "aplanq",
        coinDecimals: 18,
        coinGeckoId: "planq",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "PLQ",
        coinMinimalDenom: "aplanq",
        coinDecimals: 18,
        coinGeckoId: "planq",
        gasPriceStep: {
          low: 30000000000,
          average: 35000000000,
          high: 40000000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "PLQ",
      coinMinimalDenom: "aplanq",
      coinDecimals: 18,
      coinGeckoId: "planq",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  PLANQ_ATLAS_TESTNET_PLANQ_7077_1: {
    chainId: "planq_7077-1",
    chainName: "Planq Atlas Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/planq_7077/chain.png",
    rpc: "https://rpc-atlas.planq.network",
    rest: "https://rest-atlas.planq.network",
    nodeProvider: {
      name: "Planq",
      email: "info@planq.network",
      website: "https://planq.network/",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "plq",
      bech32PrefixAccPub: "plqpub",
      bech32PrefixValAddr: "plqvaloper",
      bech32PrefixValPub: "plqvaloperpub",
      bech32PrefixConsAddr: "plqvalcons",
      bech32PrefixConsPub: "plqvalconspub",
    },
    currencies: [
      {
        coinDenom: "tPLQ",
        coinMinimalDenom: "atplanq",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "tPLQ",
        coinMinimalDenom: "atplanq",
        coinDecimals: 18,
        gasPriceStep: {
          low: 30000000000,
          average: 35000000000,
          high: 40000000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "tPLQ",
      coinMinimalDenom: "atplanq",
      coinDecimals: 18,
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  COSMOSHUB_PROVIDER_TESTNET_PROVIDER: {
    bech32Config: {
      bech32PrefixAccAddr: "cosmos",
      bech32PrefixAccPub: "cosmospub",
      bech32PrefixConsAddr: "cosmosvalcons",
      bech32PrefixConsPub: "cosmosvalconspub",
      bech32PrefixValAddr: "cosmosvaloper",
      bech32PrefixValPub: "cosmosvaloperpub",
    },
    bip44: {
      coinType: 118,
    },
    chainId: "provider",
    chainName: "Cosmoshub Provider Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/provider/chain.png",
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/provider/uatom.png",
      },
    ],
    features: [],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/provider/uatom.png",
        gasPriceStep: {
          average: 0.025,
          high: 0.03,
          low: 0.005,
        },
      },
    ],
    nodeProvider: {
      name: "Quicksilver",
      email: "chalabi@chandrastation.com",
    },
    rest: "https://lcd.provider.test.quicksilver.zone",
    rpc: "https://rpc.provider.test.quicksilver.zone",
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "ATOM",
      coinMinimalDenom: "uatom",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/provider/uatom.png",
    },
    walletUrlForStaking: "https://wallet.keplr.app/chains/cosmos-hub",
  },
  PRYZM_PRYZM_1: {
    rpc: "https://rpc-pryzm.keplr.app",
    rest: "https://lcd-pryzm.keplr.app",
    chainId: "pryzm-1",
    chainName: "Pryzm",
    walletUrlForStaking: "https://wallet.keplr.app/chains/pryzm",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pryzm/chain.png",
    stakeCurrency: {
      coinDenom: "PRYZM",
      coinMinimalDenom: "upryzm",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pryzm/upryzm.png",
      coinDecimals: 6,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "pryzm",
      bech32PrefixAccPub: "pryzmpub",
      bech32PrefixValAddr: "pryzmvaloper",
      bech32PrefixValPub: "pryzmvaloperpub",
      bech32PrefixConsAddr: "pryzmvalcons",
      bech32PrefixConsPub: "pryzmvalconspub",
    },
    currencies: [
      {
        coinDenom: "PRYZM",
        coinMinimalDenom: "upryzm",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pryzm/upryzm.png",
      },
      {
        coinDenom: "AUUU",
        coinMinimalDenom:
          "factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pryzm/uauuu.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "AUUU",
        coinMinimalDenom:
          "factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.015,
          high: 0.02,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        gasPriceStep: {
          low: 0.0025,
          average: 0.003,
          high: 0.004,
        },
      },
      {
        coinDenom: "OSMO",
        coinMinimalDenom:
          "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        gasPriceStep: {
          low: 0.025,
          average: 0.03,
          high: 0.04,
        },
      },
      {
        coinDenom: "INJ",
        coinMinimalDenom:
          "ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255",
        coinDecimals: 18,
        coinGeckoId: "injective-protocol",
        gasPriceStep: {
          low: 500000000,
          average: 600000000,
          high: 700000000,
        },
      },
      {
        coinDenom: "TIA",
        coinMinimalDenom:
          "ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676",
        coinDecimals: 6,
        coinGeckoId: "celestia",
        gasPriceStep: {
          low: 0.002,
          average: 0.003,
          high: 0.004,
        },
      },
      {
        coinDenom: "LUNA",
        coinMinimalDenom:
          "ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395",
        coinDecimals: 6,
        coinGeckoId: "terra-luna-2",
        gasPriceStep: {
          low: 0.015,
          average: 0.02,
          high: 0.03,
        },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        gasPriceStep: {
          low: 0.02,
          average: 0.03,
          high: 0.04,
        },
      },
      {
        coinDenom: "DYDX",
        coinMinimalDenom:
          "ibc/F8CA5236869F819BC006EEF088E67889A26E4140339757878F0F4E229CDDA858",
        coinDecimals: 18,
        gasPriceStep: {
          low: 10000000000,
          average: 12000000000,
          high: 14000000000,
        },
      },
      {
        coinDenom: "stTIA",
        coinMinimalDenom:
          "ibc/FA78980867B7E87F382CDA00275C55DDC248CABC7DEE27AC6868CCF97DD5E02F",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.002,
          average: 0.003,
          high: 0.004,
        },
      },
      {
        coinDenom: "stDYDX",
        coinMinimalDenom:
          "ibc/120DC39B61CC121E91525C1D51624E41BBE74C537D7B0BE50BBFF9A00E37B6EE",
        coinDecimals: 18,
        gasPriceStep: {
          low: 10000000000,
          average: 12000000000,
          high: 14000000000,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  SECRET_TESTNET_PULSAR_3: {
    nodeProvider: {
      name: "Stake Source",
      email: "taariq@stakesource.network",
    },
    rpc: "https://rpc.pulsar.scrttestnet.com",
    rest: "https://api.pulsar.scrttestnet.com",
    chainId: "pulsar-3",
    chainName: "Secret Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pulsar/chain.png",
    stakeCurrency: {
      coinDenom: "SCRT",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pulsar/uscrt.png",
    },
    bip44: {
      coinType: 529,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "secret",
      bech32PrefixAccPub: "secretpub",
      bech32PrefixValAddr: "secretvaloper",
      bech32PrefixValPub: "secretvaloperpub",
      bech32PrefixConsAddr: "secretvalcons",
      bech32PrefixConsPub: "secretvalconspub",
    },
    currencies: [
      {
        coinDenom: "SCRT",
        coinMinimalDenom: "uscrt",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pulsar/uscrt.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SCRT",
        coinMinimalDenom: "uscrt",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/pulsar/uscrt.png",
        gasPriceStep: {
          low: 0.0125,
          average: 0.1,
          high: 0.25,
        },
      },
    ],
    features: ["secretwasm"],
  },
  QUASAR_QUASAR_1: {
    rpc: "https://rpc-quasar.keplr.app",
    rest: "https://lcd-quasar.keplr.app",
    chainId: "quasar-1",
    chainName: "Quasar",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quasar/chain.png",
    stakeCurrency: {
      coinDenom: "QSR",
      coinMinimalDenom: "uqsr",
      coinDecimals: 6,
      coinGeckoId: "quasar-2",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quasar/uqsr.png",
    },
    walletUrl: "https://wallet.keplr.app",
    walletUrlForStaking: "https://wallet.keplr.app/chains/quasar",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "quasar",
      bech32PrefixAccPub: "quasarpub",
      bech32PrefixValAddr: "quasarvaloper",
      bech32PrefixValPub: "quasarvaloperpub",
      bech32PrefixConsAddr: "quasarvalcons",
      bech32PrefixConsPub: "quasarvalconspub",
    },
    currencies: [
      {
        coinDenom: "QSR",
        coinMinimalDenom: "uqsr",
        coinDecimals: 6,
        coinGeckoId: "quasar-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quasar/uqsr.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "QSR",
        coinMinimalDenom: "uqsr",
        coinDecimals: 6,
        coinGeckoId: "quasar-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quasar/uqsr.png",
        gasPriceStep: {
          low: 0.1,
          average: 0.1,
          high: 0.2,
        },
      },
      {
        coinDenom: "OSMO",
        coinMinimalDenom:
          "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.01,
          high: 0.02,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/FA0006F056DB6719B8C16C551FC392B62F5729978FC0B125AC9A432DBB2AA1A5",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.01,
          high: 0.02,
        },
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "ibc/FA7775734CC73176B7425910DE001A1D2AD9B6D9E93129A5D0750EAD13E4E63A",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.01,
          high: 0.02,
        },
      },
    ],
    features: [],
  },
  QUICKSILVER_QUICKSILVER_2: {
    rpc: "https://rpc-quicksilver.keplr.app",
    rest: "https://lcd-quicksilver.keplr.app",
    chainId: "quicksilver-2",
    chainName: "Quicksilver",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/chain.png",
    stakeCurrency: {
      coinDenom: "QCK",
      coinMinimalDenom: "uqck",
      coinDecimals: 6,
      coinGeckoId: "quicksilver",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
    },
    walletUrlForStaking: "https://wallet.keplr.app/chains/quicksilver",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "quick",
      bech32PrefixAccPub: "quickpub",
      bech32PrefixValAddr: "quickvaloper",
      bech32PrefixValPub: "quickvaloperpub",
      bech32PrefixConsAddr: "quickvalcons",
      bech32PrefixConsPub: "quickvalconspub",
    },
    currencies: [
      {
        coinDenom: "QCK",
        coinMinimalDenom: "uqck",
        coinDecimals: 6,
        coinGeckoId: "quicksilver",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
      },
      {
        coinDenom: "qSTARS",
        coinMinimalDenom: "uqstars",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqstars.png",
      },
      {
        coinDenom: "qATOM",
        coinMinimalDenom: "uqatom",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqatom.png",
      },
      {
        coinDenom: "qREGEN",
        coinMinimalDenom: "uqregen",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqregen.png",
      },
      {
        coinDenom: "qOSMO",
        coinMinimalDenom: "uqosmo",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqosmo.png",
      },
      {
        coinDenom: "qSOMM",
        coinMinimalDenom: "uqsomm",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqsomm.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "QCK",
        coinMinimalDenom: "uqck",
        coinDecimals: 6,
        coinGeckoId: "quicksilver",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
        gasPriceStep: {
          low: 0.0001,
          average: 0.0001,
          high: 0.00025,
        },
      },
    ],
    features: ["authz-msg-revoke-fixed"],
  },
  QWOYN_QWOYN_1: {
    chainId: "qwoyn-1",
    chainName: "Qwoyn",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/qwoyn/qwoyn.png",
    rpc: "https://rpc.qwoyn.studio",
    rest: "https://api.qwoyn.studio",
    nodeProvider: {
      name: "Qwoyn Network",
      email: "devops@cosmic-horizon.com",
      website: "https://qwoyn.studio/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "qwoyn",
      bech32PrefixAccPub: "qwoynpub",
      bech32PrefixValAddr: "qwoynvaloper",
      bech32PrefixValPub: "qwoynvaloperpub",
      bech32PrefixConsAddr: "qwoynvalcons",
      bech32PrefixConsPub: "qwoynvalconspub",
    },
    currencies: [
      {
        coinDenom: "QWOYN",
        coinMinimalDenom: "uqwoyn",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "QWOYN",
        coinMinimalDenom: "uqwoyn",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.03,
          average: 0.05,
          high: 0.075,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "QWOYN",
      coinMinimalDenom: "uqwoyn",
      coinDecimals: 6,
    },
    features: [],
  },
  REALIO_REALIONETWORK_3301_1: {
    rpc: "https://rpc.realio.network/",
    rest: "https://api.realio.network/",
    nodeProvider: {
      name: "Realio",
      email: "devops@realio.fund",
      website: "https://realio.network",
    },
    chainId: "realionetwork_3301-1",
    chainName: "Realio",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/realionetwork_3301/ario.png",
    stakeCurrency: {
      coinDenom: "RIO",
      coinMinimalDenom: "ario",
      coinDecimals: 18,
      coinGeckoId: "realio-network",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/realionetwork_3301/ario.png",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "realio",
      bech32PrefixAccPub: "realiopub",
      bech32PrefixValAddr: "realiovaloper",
      bech32PrefixValPub: "realiovaloperpub",
      bech32PrefixConsAddr: "realiovalcons",
      bech32PrefixConsPub: "realiovalconspub",
    },
    currencies: [
      {
        coinDenom: "RIO",
        coinMinimalDenom: "ario",
        coinDecimals: 18,
        coinGeckoId: "realio-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/realionetwork_3301/ario.png",
      },
      {
        coinDenom: "RST",
        coinMinimalDenom: "arst",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/realionetwork_3301/arst.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "RIO",
        coinMinimalDenom: "ario",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/realionetwork_3301/ario.png",
        gasPriceStep: {
          low: 4000000000,
          average: 5000000000,
          high: 8000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  REAPCHAIN_MAINNET_REAPCHAIN_221230_1: {
    rpc: "https://rpc.reapchain.org",
    rest: "https://lcd.reapchain.org",
    chainId: "reapchain_221230-1",
    chainName: "Reapchain Mainnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/reapchain_221230/chain.png",
    nodeProvider: {
      name: "Reapchain",
      email: "reapchain@reapchain.com",
      website: "https://reapchain.com",
    },
    stakeCurrency: {
      coinDenom: "REAP",
      coinMinimalDenom: "areap",
      coinDecimals: 18,
      coinGeckoId: "reapchain",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/reapchain_221230/areap.png",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "reap",
      bech32PrefixAccPub: "reappub",
      bech32PrefixValAddr: "reapvaloper",
      bech32PrefixValPub: "reapvaloperpub",
      bech32PrefixConsAddr: "reapvalcons",
      bech32PrefixConsPub: "reapvalconspub",
    },
    currencies: [
      {
        coinDenom: "REAP",
        coinMinimalDenom: "areap",
        coinDecimals: 18,
        coinGeckoId: "reapchain",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/reapchain_221230/areap.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "REAP",
        coinMinimalDenom: "areap",
        coinDecimals: 18,
        coinGeckoId: "reapchain",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/reapchain_221230/areap.png",
        gasPriceStep: {
          low: 120000000,
          average: 125000000,
          high: 130000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  REGEN_REGEN_1: {
    rpc: "https://rpc-regen.keplr.app",
    rest: "https://lcd-regen.keplr.app",
    chainId: "regen-1",
    chainName: "Regen",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/regen/chain.png",
    stakeCurrency: {
      coinDenom: "REGEN",
      coinMinimalDenom: "uregen",
      coinDecimals: 6,
      coinGeckoId: "regen",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/regen/uregen.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/regen",
    walletUrlForStaking: "https://wallet.keplr.app/chains/regen",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "regen",
      bech32PrefixAccPub: "regenpub",
      bech32PrefixValAddr: "regenvaloper",
      bech32PrefixValPub: "regenvaloperpub",
      bech32PrefixConsAddr: "regenvalcons",
      bech32PrefixConsPub: "regenvalconspub",
    },
    currencies: [
      {
        coinDenom: "REGEN",
        coinMinimalDenom: "uregen",
        coinDecimals: 6,
        coinGeckoId: "regen",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/regen/uregen.png",
      },
      {
        coinDenom: "NCT",
        coinMinimalDenom: "eco.uC.NCT",
        coinDecimals: 6,
        coinGeckoId: "toucan-protocol-nature-carbon-tonne",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "REGEN",
        coinMinimalDenom: "uregen",
        coinDecimals: 6,
        coinGeckoId: "regen",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/regen/uregen.png",
        gasPriceStep: {
          low: 0.015,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: ["authz-msg-revoke-fixed"],
  },
  ROUTER_ROUTER_9600_1: {
    rpc: "https://sentry.tm.rpc.routerprotocol.com",
    rest: "https://sentry.lcd.routerprotocol.com",
    chainId: "router_9600-1",
    chainName: "Router",
    evm: {
      chainId: 9600,
      rpc: "https://sentry.evm.rpc.routerprotocol.com",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/router_9600/chain.png",
    stakeCurrency: {
      coinDenom: "ROUTE",
      coinMinimalDenom: "route",
      coinDecimals: 18,
      coinGeckoId: "route",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/router_9600/chain.png",
    },
    walletUrlForStaking: "https://hub.routerprotocol.com/staking",
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "router",
      bech32PrefixAccPub: "routerpub",
      bech32PrefixValAddr: "routervaloper",
      bech32PrefixValPub: "routervaloperpub",
      bech32PrefixConsAddr: "routervalcons",
      bech32PrefixConsPub: "routervalconspub",
    },
    currencies: [
      {
        coinDenom: "ROUTE",
        coinMinimalDenom: "route",
        coinDecimals: 18,
        coinGeckoId: "route",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/router_9600/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ROUTE",
        coinMinimalDenom: "route",
        coinDecimals: 18,
        coinGeckoId: "route",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/router_9600/chain.png",
        gasPriceStep: {
          low: 5000000000,
          average: 25000000000,
          high: 50000000000,
        },
      },
    ],
    nodeProvider: {
      name: "Router Node",
      email: "siva@routerprotocol.com",
      website: "https://www.routerprotocol.com",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  SCORUM_COSMOS_NETWORK_SCORUM_1: {
    chainId: "scorum-1",
    chainName: "Scorum Cosmos Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/scorum/chain.png",
    rpc: "https://scorum-blockchain-mainnet-rpc.scorum.com",
    rest: "https://scorum-blockchain-mainnet-api.scorum.com",
    nodeProvider: {
      name: "Scorum Network",
      email: "admin@scorum.com",
      website: "https://scorum.com",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "scorum",
      bech32PrefixAccPub: "scorumpub",
      bech32PrefixValAddr: "scorumvaloper",
      bech32PrefixValPub: "scorumvaloperpub",
      bech32PrefixConsAddr: "scorumvalcons",
      bech32PrefixConsPub: "scorumvalconspub",
    },
    currencies: [
      {
        coinDenom: "SCR",
        coinMinimalDenom: "nscr",
        coinDecimals: 9,
        coinGeckoId: "scorum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/scorum/scr.png",
      },
      {
        coinDenom: "SP",
        coinMinimalDenom: "nsp",
        coinDecimals: 9,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/scorum/sp.png",
      },
      {
        coinDenom: "GAS",
        coinMinimalDenom: "gas",
        coinDecimals: 0,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/scorum/gas.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "GAS",
        coinMinimalDenom: "gas",
        coinDecimals: 0,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/scorum/gas.png",
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 1,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "SP",
      coinMinimalDenom: "nsp",
      coinDecimals: 9,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/scorum/sp.png",
    },
    features: [],
  },
  SECRET_NETWORK_SECRET_4: {
    rpc: "https://rpc-secret.keplr.app",
    rest: "https://lcd-secret.keplr.app",
    chainId: "secret-4",
    chainName: "Secret Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/chain.png",
    stakeCurrency: {
      coinDenom: "SCRT",
      coinMinimalDenom: "uscrt",
      coinDecimals: 6,
      coinGeckoId: "secret",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/secret-network",
    walletUrlForStaking: "https://wallet.keplr.app/chains/secret-network",
    bip44: {
      coinType: 529,
    },
    alternativeBIP44s: [
      {
        coinType: 118,
      },
    ],
    bech32Config: {
      bech32PrefixAccAddr: "secret",
      bech32PrefixAccPub: "secretpub",
      bech32PrefixValAddr: "secretvaloper",
      bech32PrefixValPub: "secretvaloperpub",
      bech32PrefixConsAddr: "secretvalcons",
      bech32PrefixConsPub: "secretvalconspub",
    },
    currencies: [
      {
        coinDenom: "SCRT",
        coinMinimalDenom: "uscrt",
        coinDecimals: 6,
        coinGeckoId: "secret",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SCRT",
        coinMinimalDenom: "uscrt",
        coinDecimals: 6,
        coinGeckoId: "secret",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
        gasPriceStep: {
          low: 0.05,
          average: 0.1,
          high: 0.25,
        },
      },
    ],
    features: ["secretwasm", "authz-msg-revoke-fixed"],
  },
  SEDA__TESTNET__SEDA_1_TESTNET: {
    chainId: "seda-1-testnet",
    chainName: "SEDA (TESTNET)",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/seda-1-testnet/chain.png",
    rpc: "https://rpc.testnet.seda.xyz",
    rest: "https://lcd.testnet.seda.xyz",
    nodeProvider: {
      name: "SEDA",
      email: "info@seda.xyz",
      website: "https://www.seda.xyz/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "seda",
      bech32PrefixAccPub: "sedapub",
      bech32PrefixValAddr: "sedavaloper",
      bech32PrefixValPub: "sedavaloperpub",
      bech32PrefixConsAddr: "sedavalcons",
      bech32PrefixConsPub: "sedavalconspub",
    },
    currencies: [
      {
        coinDenom: "SEDA",
        coinMinimalDenom: "aseda",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/seda-1-testnet/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SEDA",
        coinMinimalDenom: "aseda",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/seda-1-testnet/chain.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "SEDA",
      coinMinimalDenom: "aseda",
      coinDecimals: 18,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/seda-1-testnet/chain.png",
    },
    features: ["cosmwasm"],
  },
  SEDA_SEDA_1: {
    chainId: "seda-1",
    chainName: "SEDA",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/seda/chain.png",
    rpc: "https://rpc-seda.keplr.app",
    rest: "https://lcd-seda.keplr.app",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "seda",
      bech32PrefixAccPub: "sedapub",
      bech32PrefixValAddr: "sedavaloper",
      bech32PrefixValPub: "sedavaloperpub",
      bech32PrefixConsAddr: "sedavalcons",
      bech32PrefixConsPub: "sedavalconspub",
    },
    currencies: [
      {
        coinDenom: "SEDA",
        coinMinimalDenom: "aseda",
        coinDecimals: 18,
        coinGeckoId: "seda-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/seda/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SEDA",
        coinMinimalDenom: "aseda",
        coinDecimals: 18,
        coinGeckoId: "seda-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/seda/chain.png",
        gasPriceStep: {
          low: 10000000000,
          average: 15000000000,
          high: 20000000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "SEDA",
      coinMinimalDenom: "aseda",
      coinDecimals: 18,
      coinGeckoId: "seda-2",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/seda/chain.png",
    },
    walletUrlForStaking: "https://wallet.keplr.app/chains/seda",
    features: ["cosmwasm"],
  },
  SELF_CHAIN_SELF_1: {
    chainId: "self-1",
    chainName: "Self Chain",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/self/chain.png",
    rpc: "https://rpc.selfchain.io:26657",
    rest: "https://api.selfchain.io",
    nodeProvider: {
      name: "Self Chain",
      email: "hello@frontier.xyz",
      website: "https://selfchain.xyz",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "self",
      bech32PrefixAccPub: "selfpub",
      bech32PrefixValAddr: "selfvaloper",
      bech32PrefixValPub: "selfvaloperpub",
      bech32PrefixConsAddr: "selfvalcons",
      bech32PrefixConsPub: "selfvalconspub",
    },
    currencies: [
      {
        coinDenom: "SLF",
        coinMinimalDenom: "uslf",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/self/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SLF",
        coinMinimalDenom: "uslf",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/self/chain.png",
        gasPriceStep: {
          low: 0.005,
          average: 0.025,
          high: 0.03,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "SLF",
      coinMinimalDenom: "uslf",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/self/chain.png",
    },
    features: [],
  },
  SENTINEL_SENTINELHUB_2: {
    rpc: "https://rpc-sentinel.keplr.app",
    rest: "https://lcd-sentinel.keplr.app",
    chainId: "sentinelhub-2",
    chainName: "Sentinel",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sentinelhub/chain.png",
    stakeCurrency: {
      coinDenom: "DVPN",
      coinMinimalDenom: "udvpn",
      coinDecimals: 6,
      coinGeckoId: "sentinel",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sentinelhub/udvpn.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/sentinel",
    walletUrlForStaking: "https://wallet.keplr.app/chains/sentinel",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "sent",
      bech32PrefixAccPub: "sentpub",
      bech32PrefixValAddr: "sentvaloper",
      bech32PrefixValPub: "sentvaloperpub",
      bech32PrefixConsAddr: "sentvalcons",
      bech32PrefixConsPub: "sentvalconspub",
    },
    currencies: [
      {
        coinDenom: "DVPN",
        coinMinimalDenom: "udvpn",
        coinDecimals: 6,
        coinGeckoId: "sentinel",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sentinelhub/udvpn.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DVPN",
        coinMinimalDenom: "udvpn",
        coinDecimals: 6,
        coinGeckoId: "sentinel",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sentinelhub/udvpn.png",
        gasPriceStep: {
          low: 0.1,
          average: 0.25,
          high: 0.4,
        },
      },
    ],
    features: [],
  },
  SGE_NETWORK_TESTNET_SGE_NETWORK_4: {
    chainId: "sge-network-4",
    chainName: "SGE Network Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sge-network/chain.png",
    rpc: "https://test-sge-rpc.kingnodes.com/",
    rest: "https://test-sge-rest.kingnodes.com/",
    nodeProvider: {
      name: "kingnodes",
      email: "jerome@kingnodes.com",
      website: "https://www.kingnodes.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "sge",
      bech32PrefixAccPub: "sgepub",
      bech32PrefixValAddr: "sgevaloper",
      bech32PrefixValPub: "sgevaloperpub",
      bech32PrefixConsAddr: "sgevalcons",
      bech32PrefixConsPub: "sgevalconspub",
    },
    currencies: [
      {
        coinDenom: "SGE",
        coinMinimalDenom: "usge",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SGE",
        coinMinimalDenom: "usge",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.1,
          average: 0.25,
          high: 0.5,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "SGE",
      coinMinimalDenom: "usge",
      coinDecimals: 6,
    },
    features: ["cosmwasm"],
  },
  SGE_SGENET_1: {
    chainId: "sgenet-1",
    chainName: "SGE",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sgenet/chain.png",
    rpc: "https://sge-priv-rpc.kingnodes.com",
    rest: "https://sge-priv-rest.kingnodes.com",
    nodeProvider: {
      name: "kingnodes",
      email: "jerome@kingnodes.com",
      website: "https://www.kingnodes.com/",
    },
    walletUrlForStaking:
      "https://cosmos.leapwallet.io/transact/stake/plain?chain=sge",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "sge",
      bech32PrefixAccPub: "sgepub",
      bech32PrefixValAddr: "sgevaloper",
      bech32PrefixValPub: "sgevaloperpub",
      bech32PrefixConsAddr: "sgevalcons",
      bech32PrefixConsPub: "sgevalconspub",
    },
    currencies: [
      {
        coinDenom: "SGE",
        coinMinimalDenom: "usge",
        coinDecimals: 6,
        coinGeckoId: "six-sigma",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SGE",
        coinMinimalDenom: "usge",
        coinDecimals: 6,
        coinGeckoId: "six-sigma",
        gasPriceStep: {
          low: 0.1,
          average: 0.25,
          high: 0.5,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "SGE",
      coinMinimalDenom: "usge",
      coinDecimals: 6,
      coinGeckoId: "six-sigma",
    },
    features: ["cosmwasm"],
  },
  SHENTU_SHENTU_2_2: {
    rpc: "https://rpc-certik.keplr.app",
    rest: "https://lcd-certik.keplr.app",
    chainId: "shentu-2.2",
    chainName: "Shentu",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shentu-2.2/chain.png",
    stakeCurrency: {
      coinDenom: "CTK",
      coinMinimalDenom: "uctk",
      coinDecimals: 6,
      coinGeckoId: "certik",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shentu-2.2/uctk.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/shentu",
    walletUrlForStaking: "https://wallet.keplr.app/chains/shentu",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "shentu",
      bech32PrefixAccPub: "shentupub",
      bech32PrefixValAddr: "shentuvaloper",
      bech32PrefixValPub: "shentuvaloperpub",
      bech32PrefixConsAddr: "shentuvalcons",
      bech32PrefixConsPub: "shentuvalconspub",
    },
    currencies: [
      {
        coinDenom: "CTK",
        coinMinimalDenom: "uctk",
        coinDecimals: 6,
        coinGeckoId: "certik",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shentu-2.2/uctk.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "CTK",
        coinMinimalDenom: "uctk",
        coinDecimals: 6,
        coinGeckoId: "certik",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shentu-2.2/uctk.png",
      },
    ],
    features: [],
  },
  SHIDO_TESTNET_SHIDO_9007_1: {
    rpc: "https://testnet-tendermint.shidoscan.com",
    rest: "https://testnet-swagger.shidoscan.com",
    chainId: "shido_9007-1",
    chainName: "Shido-Testnet",
    evm: {
      chainId: 9007,
      rpc: "https://rpc-testnet-nodes.shidoscan.com",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shido_9007/chain.png",
    stakeCurrency: {
      coinDenom: "SHIDO",
      coinMinimalDenom: "shido",
      coinDecimals: 18,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shido_9007/shido.png",
    },
    nodeProvider: {
      name: "Shido",
      email: "info@shido.finance",
      website: "https://shido.io/",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "shido",
      bech32PrefixAccPub: "shidopub",
      bech32PrefixValAddr: "shidovaloper",
      bech32PrefixValPub: "shidovaloperpub",
      bech32PrefixConsAddr: "shidovalcons",
      bech32PrefixConsPub: "shidovalconspub",
    },
    currencies: [
      {
        coinDenom: "SHIDO",
        coinMinimalDenom: "shido",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shido_9007/shido.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SHIDO",
        coinMinimalDenom: "shido",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shido_9007/shido.png",
        gasPriceStep: {
          low: 80000000000,
          average: 80000000000,
          high: 80000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign", "cosmwasm"],
  },
  SHIDO_SHIDO_9008_1: {
    rpc: "https://tendermint.shidoscan.com",
    rest: "https://swagger.shidoscan.com",
    chainId: "shido_9008-1",
    chainName: "Shido",
    evm: {
      chainId: 9008,
      rpc: "https://rpc-nodes.shidoscan.com",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shido_9008/chain.png",
    stakeCurrency: {
      coinDenom: "SHIDO",
      coinMinimalDenom: "shido",
      coinDecimals: 18,
      coinGeckoId: "shido-2",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shido_9008/shido.png",
    },
    nodeProvider: {
      name: "Shido",
      email: "info@shido.finance",
      website: "https://shido.io/",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "shido",
      bech32PrefixAccPub: "shidopub",
      bech32PrefixValAddr: "shidovaloper",
      bech32PrefixValPub: "shidovaloperpub",
      bech32PrefixConsAddr: "shidovalcons",
      bech32PrefixConsPub: "shidovalconspub",
    },
    currencies: [
      {
        coinDenom: "SHIDO",
        coinMinimalDenom: "shido",
        coinDecimals: 18,
        coinGeckoId: "shido-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shido_9008/shido.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SHIDO",
        coinMinimalDenom: "shido",
        coinDecimals: 18,
        coinGeckoId: "shido-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/shido_9008/shido.png",
        gasPriceStep: {
          low: 80000000000,
          average: 80000000000,
          high: 80000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign", "cosmwasm"],
  },
  SIFCHAIN_SIFCHAIN_1: {
    rpc: "https://rpc-sifchain.keplr.app",
    rest: "https://lcd-sifchain.keplr.app",
    chainId: "sifchain-1",
    chainName: "Sifchain",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sifchain/chain.png",
    stakeCurrency: {
      coinDenom: "ROWAN",
      coinMinimalDenom: "rowan",
      coinDecimals: 18,
      coinGeckoId: "sifchain",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sifchain/rowan.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/sifchain",
    walletUrlForStaking: "https://wallet.keplr.app/chains/sifchain",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "sif",
      bech32PrefixAccPub: "sifpub",
      bech32PrefixValAddr: "sifvaloper",
      bech32PrefixValPub: "sifvaloperpub",
      bech32PrefixConsAddr: "sifvalcons",
      bech32PrefixConsPub: "sifvalconspub",
    },
    currencies: [
      {
        coinDenom: "ROWAN",
        coinMinimalDenom: "rowan",
        coinDecimals: 18,
        coinGeckoId: "sifchain",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sifchain/rowan.png",
      },
      {
        coinDenom: "Tether USDT",
        coinMinimalDenom: "cusdt",
        coinDecimals: 6,
      },
      {
        coinDenom: "Ethereum",
        coinMinimalDenom: "ceth",
        coinDecimals: 18,
      },
      {
        coinDenom: "Basic Attention Token",
        coinMinimalDenom: "cbat",
        coinDecimals: 18,
      },
      {
        coinDenom: "Aragon",
        coinMinimalDenom: "cant",
        coinDecimals: 18,
      },
      {
        coinDenom: "Bancor Network Token",
        coinMinimalDenom: "cbnt",
        coinDecimals: 18,
      },
      {
        coinDenom: "0x",
        coinMinimalDenom: "czrx",
        coinDecimals: 18,
      },
      {
        coinDenom: "Chainlink",
        coinMinimalDenom: "clink",
        coinDecimals: 18,
      },
      {
        coinDenom: "Decentraland",
        coinMinimalDenom: "cmana",
        coinDecimals: 18,
      },
      {
        coinDenom: "Loopring",
        coinMinimalDenom: "clrc",
        coinDecimals: 18,
      },
      {
        coinDenom: "Enjin Coin",
        coinMinimalDenom: "cenj",
        coinDecimals: 18,
      },
      {
        coinDenom: "Synthetix Network Token",
        coinMinimalDenom: "csnx",
        coinDecimals: 18,
      },
      {
        coinDenom: "TrueUSD",
        coinMinimalDenom: "ctusd",
        coinDecimals: 18,
      },
      {
        coinDenom: "Ocean Protocol",
        coinMinimalDenom: "cocean",
        coinDecimals: 18,
      },
      {
        coinDenom: "Fantom",
        coinMinimalDenom: "cftm",
        coinDecimals: 18,
      },
      {
        coinDenom: "sUSD",
        coinMinimalDenom: "csusd",
        coinDecimals: 18,
      },
      {
        coinDenom: "USD Coin",
        coinMinimalDenom: "cusdc",
        coinDecimals: 6,
      },
      {
        coinDenom: "Crypto com Coin",
        coinMinimalDenom: "ccro",
        coinDecimals: 8,
      },
      {
        coinDenom: "Wrapped Bitcoin",
        coinMinimalDenom: "cwbtc",
        coinDecimals: 8,
      },
      {
        coinDenom: "Swipe",
        coinMinimalDenom: "csxp",
        coinDecimals: 18,
      },
      {
        coinDenom: "Band Protocol",
        coinMinimalDenom: "cband",
        coinDecimals: 18,
      },
      {
        coinDenom: "Dai Stablecoin",
        coinMinimalDenom: "cdai",
        coinDecimals: 18,
      },
      {
        coinDenom: "Compound",
        coinMinimalDenom: "ccomp",
        coinDecimals: 18,
      },
      {
        coinDenom: "UMA",
        coinMinimalDenom: "cuma",
        coinDecimals: 18,
      },
      {
        coinDenom: "Balancer",
        coinMinimalDenom: "cbal",
        coinDecimals: 18,
      },
      {
        coinDenom: "Yearn finance",
        coinMinimalDenom: "cyfi",
        coinDecimals: 18,
      },
      {
        coinDenom: "Serum",
        coinMinimalDenom: "csrm",
        coinDecimals: 6,
      },
      {
        coinDenom: "Cream",
        coinMinimalDenom: "ccream",
        coinDecimals: 18,
      },
      {
        coinDenom: "SAND",
        coinMinimalDenom: "csand",
        coinDecimals: 18,
      },
      {
        coinDenom: "Sushi",
        coinMinimalDenom: "csushi",
        coinDecimals: 18,
      },
      {
        coinDenom: "Empty Set Dollar",
        coinMinimalDenom: "cesd",
        coinDecimals: 18,
      },
      {
        coinDenom: "Uniswap",
        coinMinimalDenom: "cuni",
        coinDecimals: 18,
      },
      {
        coinDenom: "Aave",
        coinMinimalDenom: "caave",
        coinDecimals: 18,
      },
      {
        coinDenom: "BarnBridge",
        coinMinimalDenom: "cbond",
        coinDecimals: 18,
      },
      {
        coinDenom: "Wrapped Filecoin",
        coinMinimalDenom: "cwfil",
        coinDecimals: 18,
      },
      {
        coinDenom: "The Graph",
        coinMinimalDenom: "cgrt",
        coinDecimals: 18,
      },
      {
        coinDenom: "Tokenlon",
        coinMinimalDenom: "clon",
        coinDecimals: 18,
      },
      {
        coinDenom: "1inch",
        coinMinimalDenom: "c1inch",
        coinDecimals: 18,
      },
      {
        coinDenom: "THORChain ERC20",
        coinMinimalDenom: "crune",
        coinDecimals: 18,
      },
      {
        coinDenom: "Secret ERC20",
        coinMinimalDenom: "cwscrt",
        coinDecimals: 6,
      },
      {
        coinDenom: "IoTeX",
        coinMinimalDenom: "ciotx",
        coinDecimals: 18,
      },
      {
        coinDenom: "Reef Finance",
        coinMinimalDenom: "creef",
        coinDecimals: 18,
      },
      {
        coinDenom: "COCOS BCX",
        coinMinimalDenom: "ccocos",
        coinDecimals: 18,
      },
      {
        coinDenom: "Keep Network",
        coinMinimalDenom: "ckeep",
        coinDecimals: 18,
      },
      {
        coinDenom: "Origin Protocol",
        coinMinimalDenom: "cogn",
        coinDecimals: 18,
      },
      {
        coinDenom: "ODAOfi",
        coinMinimalDenom: "cdaofi",
        coinDecimals: 18,
      },
      {
        coinDenom: "Linear",
        coinMinimalDenom: "clina",
        coinDecimals: 18,
      },
      {
        coinDenom: "12Ships",
        coinMinimalDenom: "ctshp",
        coinDecimals: 18,
      },
      {
        coinDenom: "B.20",
        coinMinimalDenom: "cb20",
        coinDecimals: 18,
      },
      {
        coinDenom: "Akropolis",
        coinMinimalDenom: "cakro",
        coinDecimals: 18,
      },
      {
        coinDenom: "Rio Fuel Token",
        coinMinimalDenom: "crfuel",
        coinDecimals: 18,
      },
      {
        coinDenom: "Rally",
        coinMinimalDenom: "crly",
        coinDecimals: 18,
      },
      {
        coinDenom: "Convergence",
        coinMinimalDenom: "cconv",
        coinDecimals: 18,
      },
      {
        coinDenom: "Render Token",
        coinMinimalDenom: "crndr",
        coinDecimals: 18,
      },
      {
        coinDenom: "PAID Network",
        coinMinimalDenom: "cpaid",
        coinDecimals: 18,
      },
      {
        coinDenom: "Tidal",
        coinMinimalDenom: "ctidal",
        coinDecimals: 18,
      },
      {
        coinDenom: "Axie Infinity",
        coinMinimalDenom: "caxs",
        coinDecimals: 18,
      },
      {
        coinDenom: "BitSong",
        coinMinimalDenom: "cbtsg",
        coinDecimals: 18,
      },
      {
        coinDenom: "Cosmostarter",
        coinMinimalDenom: "ccsms",
        coinDecimals: 18,
      },
      {
        coinDenom: "Dfyn Network",
        coinMinimalDenom: "cdfyn",
        coinDecimals: 18,
      },
      {
        coinDenom: "DinoSwap",
        coinMinimalDenom: "cdino",
        coinDecimals: 18,
      },
      {
        coinDenom: "DinoX",
        coinMinimalDenom: "cdnxc",
        coinDecimals: 18,
      },
      {
        coinDenom: "Don-key",
        coinMinimalDenom: "cdon",
        coinDecimals: 18,
      },
      {
        coinDenom: "Ethernity Chain",
        coinMinimalDenom: "cern",
        coinDecimals: 18,
      },
      {
        coinDenom: "Frax",
        coinMinimalDenom: "cfrax",
        coinDecimals: 18,
      },
      {
        coinDenom: "Frax Share",
        coinMinimalDenom: "cfxs",
        coinDecimals: 18,
      },
      {
        coinDenom: "Knit Finance",
        coinMinimalDenom: "ckft",
        coinDecimals: 18,
      },
      {
        coinDenom: "Lido DAO",
        coinMinimalDenom: "cldo",
        coinDecimals: 18,
      },
      {
        coinDenom: "Doge Killer",
        coinMinimalDenom: "cleash",
        coinDecimals: 18,
      },
      {
        coinDenom: "LGCY Network",
        coinMinimalDenom: "clgcy",
        coinDecimals: 18,
      },
      {
        coinDenom: "Polygon",
        coinMinimalDenom: "cmatic",
        coinDecimals: 18,
      },
      {
        coinDenom: "Metis Token",
        coinMinimalDenom: "cmetis",
        coinDecimals: 18,
      },
      {
        coinDenom: "Oh! Finance",
        coinMinimalDenom: "coh",
        coinDecimals: 18,
      },
      {
        coinDenom: "Polkastarter",
        coinMinimalDenom: "cpols",
        coinDecimals: 18,
      },
      {
        coinDenom: "Marlin",
        coinMinimalDenom: "cpond",
        coinDecimals: 18,
      },
      {
        coinDenom: "Quickswap",
        coinMinimalDenom: "cquick",
        coinDecimals: 18,
      },
      {
        coinDenom: "Railgun",
        coinMinimalDenom: "crail",
        coinDecimals: 18,
      },
      {
        coinDenom: "StaFi rATOM",
        coinMinimalDenom: "cratom",
        coinDecimals: 18,
      },
      {
        coinDenom: "Saito",
        coinMinimalDenom: "csaito",
        coinDecimals: 18,
      },
      {
        coinDenom: "Shiba Inu",
        coinMinimalDenom: "cshib",
        coinDecimals: 18,
      },
      {
        coinDenom: "Tokemak",
        coinMinimalDenom: "ctoke",
        coinDecimals: 18,
      },
      {
        coinDenom: "UFO Gaming",
        coinMinimalDenom: "cufo",
        coinDecimals: 18,
      },
      {
        coinDenom: "UST (ERC-20)",
        coinMinimalDenom: "cust",
        coinDecimals: 18,
      },
      {
        coinDenom: "0chain",
        coinMinimalDenom: "czcn",
        coinDecimals: 18,
      },
      {
        coinDenom: "Unizen",
        coinMinimalDenom: "czcx",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ROWAN",
        coinMinimalDenom: "rowan",
        coinDecimals: 18,
        coinGeckoId: "sifchain",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sifchain/rowan.png",
        gasPriceStep: {
          low: 1000000000000,
          average: 1500000000000,
          high: 2000000000000,
        },
      },
    ],
    features: [],
  },
  SIX_PROTOCOL_SIXNET: {
    rpc: "https://sixnet-rpc.sixprotocol.net/",
    rest: "https://sixnet-api.sixprotocol.net/",
    nodeProvider: {
      name: "SIX NodeOps",
      email: "nantanart@six.network",
      website: "https://sixprotocol.com/",
    },
    chainId: "sixnet",
    chainName: "SIX Protocol",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sixnet/chain.png",
    stakeCurrency: {
      coinDenom: "SIX",
      coinMinimalDenom: "usix",
      coinDecimals: 6,
      coinGeckoId: "six-network",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "6x",
      bech32PrefixAccPub: "6xpub",
      bech32PrefixValAddr: "6xvaloper",
      bech32PrefixValPub: "6xvaloperpub",
      bech32PrefixConsAddr: "6xvalcons",
      bech32PrefixConsPub: "6xvalconspub",
    },
    currencies: [
      {
        coinDenom: "SIX",
        coinMinimalDenom: "usix",
        coinDecimals: 6,
        coinGeckoId: "six-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sixnet/usix.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SIX",
        coinMinimalDenom: "usix",
        coinDecimals: 6,
        coinGeckoId: "six-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sixnet/usix.png",
        gasPriceStep: {
          low: 1.25,
          average: 1.5,
          high: 1.75,
        },
      },
    ],
    features: [],
  },
  SOARCHAIN_TESTNET_SOARCHAINTESTNET: {
    rpc: "https://soarchain-testnet.rpc.kjnodes.com",
    rest: "https://soarchain-testnet.api.kjnodes.com",
    chainId: "soarchaintestnet",
    chainName: "Soarchain Testnet",
    nodeProvider: {
      name: "soarchain",
      email: "alperen@soarrobotics.com",
      website: "https://www.soarchain.com",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/soarchaintestnet/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "soar",
      bech32PrefixAccPub: "soarpub",
      bech32PrefixValAddr: "soarvaloper",
      bech32PrefixValPub: "soarvaloperpub",
      bech32PrefixConsAddr: "soarvalcons",
      bech32PrefixConsPub: "soarvalconspub",
    },
    currencies: [
      {
        coinDenom: "TSOAR",
        coinMinimalDenom: "utsoar",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/soarchaintestnet/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TSOAR",
        coinMinimalDenom: "utsoar",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.03,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/soarchaintestnet/chain.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "TSOAR",
      coinMinimalDenom: "utsoar",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/soarchaintestnet/chain.png",
    },
    features: ["cosmwasm"],
  },
  SOMMELIER_SOMMELIER_3: {
    rpc: "https://rpc-sommelier.keplr.app",
    rest: "https://lcd-sommelier.keplr.app",
    chainId: "sommelier-3",
    chainName: "Sommelier",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sommelier/chain.png",
    stakeCurrency: {
      coinDenom: "SOMM",
      coinMinimalDenom: "usomm",
      coinDecimals: 6,
      coinGeckoId: "sommelier",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sommelier/usomm.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/sommelier",
    walletUrlForStaking: "https://wallet.keplr.app/chains/sommelier",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "somm",
      bech32PrefixAccPub: "sommpub",
      bech32PrefixValAddr: "sommvaloper",
      bech32PrefixValPub: "sommvaloperpub",
      bech32PrefixConsAddr: "sommvalcons",
      bech32PrefixConsPub: "sommvalconspub",
    },
    currencies: [
      {
        coinDenom: "SOMM",
        coinMinimalDenom: "usomm",
        coinDecimals: 6,
        coinGeckoId: "sommelier",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sommelier/usomm.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SOMM",
        coinMinimalDenom: "usomm",
        coinDecimals: 6,
        coinGeckoId: "sommelier",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/sommelier/usomm.png",
      },
    ],
    features: [],
  },
  SOURCE_TESTNET_SOURCETEST_1: {
    chainId: "sourcetest-1",
    chainName: "Source Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/source/source.png",
    rpc: "https://testnet.sourceprotocol.io:26657/",
    rest: "https://testnet.sourceprotocol.io:1317/",
    nodeProvider: {
      name: "Source Protocol",
      email: "hello@sourceprotocol.io",
      website: "https://www.sourceprotocol.io/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "source",
      bech32PrefixAccPub: "sourcepub",
      bech32PrefixValAddr: "sourcevaloper",
      bech32PrefixValPub: "sourcevaloperpub",
      bech32PrefixConsAddr: "sourcevalcons",
      bech32PrefixConsPub: "sourcevalconspub",
    },
    currencies: [
      {
        coinDenom: "SOURCE",
        coinMinimalDenom: "usource",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SOURCE",
        coinMinimalDenom: "usource",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.025,
          average: 0.05,
          high: 0.075,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "SOURCE",
      coinMinimalDenom: "usource",
      coinDecimals: 6,
    },
    features: ["cosmwasm"],
  },
  SOURCE_SOURCE_1: {
    chainId: "source-1",
    chainName: "Source",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/source/source.png",
    rpc: "https://rpc.source.tcnetwork.io/",
    rest: "https://rest.source.tcnetwork.io/",
    nodeProvider: {
      name: "tcnetwork",
      email: "support@tcnetwork.io",
      website: "https://tcnetwork.io/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "source",
      bech32PrefixAccPub: "sourcepub",
      bech32PrefixValAddr: "sourcevaloper",
      bech32PrefixValPub: "sourcevaloperpub",
      bech32PrefixConsAddr: "sourcevalcons",
      bech32PrefixConsPub: "sourcevalconspub",
    },
    currencies: [
      {
        coinDenom: "SOURCE",
        coinMinimalDenom: "usource",
        coinDecimals: 6,
        coinGeckoId: "source",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SOURCE",
        coinMinimalDenom: "usource",
        coinDecimals: 6,
        coinGeckoId: "source",
        gasPriceStep: {
          low: 0.025,
          average: 0.05,
          high: 0.075,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "SOURCE",
      coinMinimalDenom: "usource",
      coinDecimals: 6,
      coinGeckoId: "source",
    },
    features: ["cosmwasm"],
  },
  SAGA_TESTNET_V2_SSC_TESTNET_2: {
    chainId: "ssc-testnet-2",
    chainName: "Saga Testnet v2",
    rpc: "https://testnet2-keplr.sagarpc.io",
    rest: "https://testnet2-keplr-lcd.sagarpc.io",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc-testnet/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "saga",
      bech32PrefixAccPub: "sagapub",
      bech32PrefixValAddr: "sagavaloper",
      bech32PrefixValPub: "sagavaloperpub",
      bech32PrefixConsAddr: "sagavalcons",
      bech32PrefixConsPub: "sagavalconspub",
    },
    currencies: [
      {
        coinDenom: "TSAGA",
        coinMinimalDenom: "utsaga",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc-testnet/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TSAGA",
        coinMinimalDenom: "utsaga",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0025,
          average: 0.025,
          high: 0.04,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc-testnet/chain.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "TSAGA",
      coinMinimalDenom: "utsaga",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc-testnet/chain.png",
    },
    nodeProvider: {
      name: "Saga",
      email: "support@saga.xyz",
      website: "https://saga.xyz",
    },
  },
  SAGA_SSC_1: {
    chainId: "ssc-1",
    chainName: "Saga",
    rpc: "https://rpc-saga.keplr.app",
    rest: "https://lcd-saga.keplr.app",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc/chain.png",
    bip44: {
      coinType: 118,
    },
    walletUrlForStaking: "https://wallet.keplr.app/chains/saga",
    bech32Config: {
      bech32PrefixAccAddr: "saga",
      bech32PrefixAccPub: "sagapub",
      bech32PrefixValAddr: "sagavaloper",
      bech32PrefixValPub: "sagavaloperpub",
      bech32PrefixConsAddr: "sagavalcons",
      bech32PrefixConsPub: "sagavalconspub",
    },
    currencies: [
      {
        coinDenom: "SAGA",
        coinMinimalDenom: "usaga",
        coinDecimals: 6,
        coinGeckoId: "saga-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SAGA",
        coinMinimalDenom: "usaga",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
        coinGeckoId: "saga-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc/chain.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "SAGA",
      coinMinimalDenom: "usaga",
      coinDecimals: 6,
      coinGeckoId: "saga-2",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ssc/chain.png",
    },
  },
  STAFI_HUB_STAFIHUB_1: {
    chainId: "stafihub-1",
    chainName: "StaFi Hub",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stafihub/chain.png",
    rpc: "https://public-rpc1.stafihub.io",
    rest: "https://public-rest-rpc1.stafihub.io",
    nodeProvider: {
      name: "StaFiHub",
      email: "support@stafi.io",
      website: "https://www.stafihub.io",
    },
    stakeCurrency: {
      coinDenom: "FIS",
      coinMinimalDenom: "ufis",
      coinDecimals: 6,
      coinGeckoId: "stafi",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "stafi",
      bech32PrefixAccPub: "stafipub",
      bech32PrefixValAddr: "stafivaloper",
      bech32PrefixValPub: "stafivaloperpub",
      bech32PrefixConsAddr: "stafivalcons",
      bech32PrefixConsPub: "stafivalconspub",
    },
    currencies: [
      {
        coinDenom: "FIS",
        coinMinimalDenom: "ufis",
        coinDecimals: 6,
        coinGeckoId: "stafi",
      },
      {
        coinDenom: "rATOM",
        coinMinimalDenom: "uratom",
        coinDecimals: 6,
      },
      {
        coinDenom: "rIRIS",
        coinMinimalDenom: "uriris",
        coinDecimals: 6,
      },
      {
        coinDenom: "rHUAHUA",
        coinMinimalDenom: "urhuahua",
        coinDecimals: 6,
      },
      {
        coinDenom: "rSWTH",
        coinMinimalDenom: "urswth",
        coinDecimals: 8,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "FIS",
        coinMinimalDenom: "ufis",
        coinDecimals: 6,
        coinGeckoId: "stafi",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
  },
  STARGAZE_STARGAZE_1: {
    rpc: "https://rpc-stargaze.keplr.app",
    rest: "https://lcd-stargaze.keplr.app",
    chainId: "stargaze-1",
    chainName: "Stargaze",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/chain.png",
    stakeCurrency: {
      coinDenom: "STARS",
      coinMinimalDenom: "ustars",
      coinDecimals: 6,
      coinGeckoId: "stargaze",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/stargaze",
    walletUrlForStaking: "https://wallet.keplr.app/chains/stargaze",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "stars",
      bech32PrefixAccPub: "starspub",
      bech32PrefixValAddr: "starsvaloper",
      bech32PrefixValPub: "starsvaloperpub",
      bech32PrefixConsAddr: "starsvalcons",
      bech32PrefixConsPub: "starsvalconspub",
    },
    currencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinGeckoId: "stargaze",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
      },
      {
        coinDenom: "STRDST",
        coinMinimalDenom:
          "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/dust.png",
      },
      {
        coinDenom: "GAZE",
        coinMinimalDenom:
          "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/gaze.png",
      },
      {
        coinDenom: "OHH",
        coinMinimalDenom:
          "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ohh.png",
      },
      {
        coinDenom: "BRNCH",
        coinMinimalDenom:
          "factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/brnch.png",
      },
      {
        coinDenom: "SNEAKY",
        coinMinimalDenom:
          "factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/sneaky.png",
      },
      {
        coinDenom: "PLEB",
        coinMinimalDenom:
          "factory/stars1k7qsxdxh8calmt4txk75e6hdntefslegwddqnlwjjqgjkmcfqy0qa97sn8/pleb",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/factory/stars1k7qsxdxh8calmt4txk75e6hdntefslegwddqnlwjjqgjkmcfqy0qa97sn8/pleb.png",
      },
      {
        coinDenom: "KINGSHIT",
        coinMinimalDenom:
          "factory/stars133a6mnkp9d3pkt48y699hy0tvq5xngpz7cwak0qr4suq0cj9zpfslvt0em/kingshit",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/factory/stars133a6mnkp9d3pkt48y699hy0tvq5xngpz7cwak0qr4suq0cj9zpfslvt0em/kingshit.png",
      },
      {
        coinDenom: "BOTZ",
        coinMinimalDenom:
          "factory/stars132jrwxjps93usq3ejy7cq6qqc7j3gtx3mu8jhaj5nnk3p0ste2ssqsndvj/botz",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/factory/stars132jrwxjps93usq3ejy7cq6qqc7j3gtx3mu8jhaj5nnk3p0ste2ssqsndvj/botz.png",
      },
      {
        coinDenom: "COCKS",
        coinMinimalDenom:
          "factory/stars14mfk0sd6rlajkvgpgrvfk9lfhjwmkrzvednekvcn32jzy3drjy5sfem9p7/cocks",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/factory/stars14mfk0sd6rlajkvgpgrvfk9lfhjwmkrzvednekvcn32jzy3drjy5sfem9p7/cocks.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinGeckoId: "stargaze",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
        gasPriceStep: {
          low: 1,
          average: 1.1,
          high: 1.2,
        },
      },
    ],
    features: [],
  },
  STRATOS_NETWORK_STRATOS_1: {
    rpc: "https://rpc.thestratos.org",
    rest: "https://rest.thestratos.org",
    chainId: "stratos-1",
    chainName: "Stratos Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stratos/chain.png",
    walletUrl: "https://wallet.keplr.app/chains/stratos",
    walletUrlForStaking: "https://wallet.keplr.app/chains/stratos",
    nodeProvider: {
      name: "Stratos",
      email: "info@thestratos.org",
      website: "https://thestratos.org",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "st",
      bech32PrefixAccPub: "stpub",
      bech32PrefixValAddr: "stvaloper",
      bech32PrefixValPub: "stvaloperpub",
      bech32PrefixConsAddr: "stvalcons",
      bech32PrefixConsPub: "stvalconspub",
    },
    currencies: [
      {
        coinDenom: "STOS",
        coinMinimalDenom: "wei",
        coinDecimals: 18,
        coinGeckoId: "stratos",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stratos/stos.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STOS",
        coinMinimalDenom: "wei",
        coinDecimals: 18,
        coinGeckoId: "stratos",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stratos/stos.png",
        gasPriceStep: {
          low: 1000000000,
          average: 1200000000,
          high: 1600000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "STOS",
      coinMinimalDenom: "wei",
      coinDecimals: 18,
      coinGeckoId: "stratos",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stratos/stos.png",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  STRIDE_TESTNET_STRIDE_INTERNAL_1: {
    rpc: "https://stride.testnet-1.stridenet.co",
    rest: "https://stride.testnet-1.stridenet.co/api",
    chainId: "stride-internal-1",
    chainName: "Stride Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride-internal/chain.png",
    nodeProvider: {
      name: "Stride Labs",
      email: "hello@stridelabs.co",
      website: "https://stride.zone/",
    },
    stakeCurrency: {
      coinDenom: "STRD",
      coinMinimalDenom: "ustrd",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride-internal/ustrd.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "stride",
      bech32PrefixAccPub: "stridepub",
      bech32PrefixValAddr: "stridevaloper",
      bech32PrefixValPub: "stridevaloperpub",
      bech32PrefixConsAddr: "stridevalcons",
      bech32PrefixConsPub: "stridevalconspub",
    },
    currencies: [
      {
        coinDenom: "STRD",
        coinMinimalDenom: "ustrd",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride-internal/ustrd.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STRD",
        coinMinimalDenom: "ustrd",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride-internal/ustrd.png",
        gasPriceStep: {
          low: 0.0005,
          average: 0.005,
          high: 0.05,
        },
      },
      {
        coinDenom: "TIA",
        coinMinimalDenom:
          "ibc/1A7653323C1A9E267FF7BEBF40B3EEA8065E8F069F47F2493ABC3E0B621BF793",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.01,
          high: 0.01,
        },
      },
    ],
    features: [],
  },
  STRIDE_STRIDE_1: {
    rpc: "https://rpc-stride.keplr.app",
    rest: "https://lcd-stride.keplr.app",
    chainId: "stride-1",
    chainName: "Stride",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/chain.png",
    stakeCurrency: {
      coinDenom: "STRD",
      coinMinimalDenom: "ustrd",
      coinDecimals: 6,
      coinGeckoId: "stride",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/stride",
    walletUrlForStaking: "https://wallet.keplr.app/chains/stride",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "stride",
      bech32PrefixAccPub: "stridepub",
      bech32PrefixValAddr: "stridevaloper",
      bech32PrefixValPub: "stridevaloperpub",
      bech32PrefixConsAddr: "stridevalcons",
      bech32PrefixConsPub: "stridevalconspub",
    },
    currencies: [
      {
        coinDenom: "STRD",
        coinMinimalDenom: "ustrd",
        coinDecimals: 6,
        coinGeckoId: "stride",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
      },
      {
        coinDenom: "stATOM",
        coinMinimalDenom: "stuatom",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-atom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuatom.png",
      },
      {
        coinDenom: "stOSMO",
        coinMinimalDenom: "stuosmo",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-osmo",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuosmo.png",
      },
      {
        coinDenom: "stJUNO",
        coinMinimalDenom: "stujuno",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-juno",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stujuno.png",
      },
      {
        coinDenom: "stSTARS",
        coinMinimalDenom: "stustars",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-stars",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stustars.png",
      },
      {
        coinDenom: "stEVMOS",
        coinMinimalDenom: "staevmos",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/staevmos.png",
      },
      {
        coinDenom: "stLUNA",
        coinMinimalDenom: "stuluna",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-luna",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuluna.png",
      },
      {
        coinDenom: "stINJ",
        coinMinimalDenom: "stinj",
        coinDecimals: 18,
        coinGeckoId: "stride-staked-injective",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stinj.png",
      },
      {
        coinDenom: "stDYDX",
        coinMinimalDenom: "stadydx",
        coinDecimals: 18,
        coinGeckoId: "stride-staked-dydx",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stdydx.png",
      },
      {
        coinDenom: "stTIA",
        coinMinimalDenom: "stutia",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-tia",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/sttia.png",
      },
      {
        coinDenom: "stSAGA",
        coinMinimalDenom: "stusaga",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stusaga.png",
      },
      {
        coinDenom: "stUMEE",
        coinMinimalDenom: "stuumee",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-umee",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuumee.png",
      },
      {
        coinDenom: "stCMDX",
        coinMinimalDenom: "stucmdx",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-comdex",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stucmdx.png",
      },
      {
        coinDenom: "stSOMM",
        coinMinimalDenom: "stusomm",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stusomm.png",
      },
      {
        coinDenom: "stDYM",
        coinMinimalDenom: "stadym",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stadym.png",
      },
      {
        coinDenom: "stISLM",
        coinMinimalDenom: "staISLM",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/staISLM.png",
      },
      {
        coinDenom: "stBAND",
        coinMinimalDenom: "stuband",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuband.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STRD",
        coinMinimalDenom: "ustrd",
        coinDecimals: 6,
        coinGeckoId: "stride",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
        gasPriceStep: {
          low: 0.005,
          average: 0.005,
          high: 0.05,
        },
      },
      {
        coinDenom: "ATOM",
        coinMinimalDenom:
          "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01,
        },
      },
      {
        coinDenom: "OSMO",
        coinMinimalDenom:
          "ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34",
        coinDecimals: 6,
        coinGeckoId: "osmosis",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/uosmo.png",
        gasPriceStep: {
          low: 0.001,
          average: 0.01,
          high: 0.1,
        },
      },
      {
        coinDenom: "stOSMO",
        coinMinimalDenom: "stuosmo",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-osmo",
        gasPriceStep: {
          low: 0.001,
          average: 0.01,
          high: 0.1,
        },
      },
      {
        coinDenom: "stATOM",
        coinMinimalDenom: "stuatom",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-atom",
        gasPriceStep: {
          low: 0.0001,
          average: 0.001,
          high: 0.01,
        },
      },
      {
        coinDenom: "INJ",
        coinMinimalDenom:
          "ibc/A7454562FF29FE068F42F9DE4805ABEF54F599D1720B345D6518D9B5C64EA6D2",
        coinDecimals: 18,
        coinGeckoId: "injective-protocol",
        gasPriceStep: {
          low: 500000000,
          average: 500000000,
          high: 500000000,
        },
      },
      {
        coinDenom: "stINJ",
        coinMinimalDenom: "stinj",
        coinDecimals: 18,
        coinGeckoId: "stride-staked-injective",
        gasPriceStep: {
          low: 500000000,
          average: 500000000,
          high: 500000000,
        },
      },
      {
        coinDenom: "EVMOS",
        coinMinimalDenom:
          "ibc/4B322204B4F59D770680FE4D7A565DDC3F37BFF035474B717476C66A4F83DD72",
        coinDecimals: 18,
        coinGeckoId: "evmos",
        gasPriceStep: {
          low: 20000000000,
          average: 20000000000,
          high: 20000000000,
        },
      },
      {
        coinDenom: "stEVMOS",
        coinMinimalDenom: "staevmos",
        coinDecimals: 18,
        gasPriceStep: {
          low: 20000000000,
          average: 20000000000,
          high: 20000000000,
        },
      },
      {
        coinDenom: "TIA",
        coinMinimalDenom:
          "ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801",
        coinDecimals: 6,
        coinGeckoId: "celestia",
        gasPriceStep: {
          low: 0.01,
          average: 0.01,
          high: 0.01,
        },
      },
      {
        coinDenom: "stTIA",
        coinMinimalDenom: "stutia",
        coinDecimals: 6,
        coinGeckoId: "stride-staked-tia",
        gasPriceStep: {
          low: 0.01,
          average: 0.01,
          high: 0.01,
        },
      },
      {
        coinDenom: "DYDX",
        coinMinimalDenom:
          "ibc/561C70B20188A047BFDE6F9946BDDC5D8AC172B9BE04FF868DFABF819E5A9CCE",
        coinDecimals: 18,
        coinGeckoId: "dydx-chain",
        gasPriceStep: {
          low: 15000000000,
          average: 15000000000,
          high: 15000000000,
        },
      },
      {
        coinDenom: "stDYDX",
        coinMinimalDenom: "stadydx",
        coinDecimals: 18,
        coinGeckoId: "stride-staked-dydx",
        gasPriceStep: {
          low: 15000000000,
          average: 15000000000,
          high: 15000000000,
        },
      },
      {
        coinDenom: "DYM",
        coinMinimalDenom:
          "ibc/E1C22332C083574F3418481359733BA8887D171E76C80AD9237422AEABB66018",
        coinDecimals: 18,
        coinGeckoId: "dymension",
        gasPriceStep: {
          low: 15000000000,
          average: 15000000000,
          high: 50000000000,
        },
      },
      {
        coinDenom: "stDYM",
        coinMinimalDenom: "stadym",
        coinDecimals: 18,
        gasPriceStep: {
          low: 15000000000,
          average: 15000000000,
          high: 50000000000,
        },
      },
      {
        coinDenom: "stSAGA",
        coinMinimalDenom: "stusaga",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.01,
          high: 0.01,
        },
      },
      {
        coinDenom: "SAGA",
        coinMinimalDenom:
          "ibc/520D9C4509027DE66C737A1D6A6021915A3071E30DBA8F758B46532B060D7AA5",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.01,
          average: 0.01,
          high: 0.01,
        },
      },
    ],
    features: [],
  },
  STALWART_DEV_STWART_TEST_1: {
    rpc: "https://rpc.dev.stalwart.dev",
    rest: "https://api.dev.stalwart.dev",
    nodeProvider: {
      name: "Algoritmic Lab",
      email: "snemesh@algoritmiclab.ai",
      website: "https://www.algoritmiclab.ai",
    },
    chainId: "stwart_test_1",
    chainName: "Stalwart Dev",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stwart_test_1/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "stwart",
      bech32PrefixAccPub: "stwartpub",
      bech32PrefixValAddr: "stwartvaloper",
      bech32PrefixValPub: "stwartvaloperpub",
      bech32PrefixConsAddr: "stwartvalcons",
      bech32PrefixConsPub: "stwartvalconspub",
    },
    stakeCurrency: {
      coinDenom: "STW",
      coinMinimalDenom: "stw",
      coinDecimals: 8,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stwart_test_1/stw.png",
    },
    currencies: [
      {
        coinDenom: "STW",
        coinMinimalDenom: "stw",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stwart_test_1/stw.png",
      },
      {
        coinDenom: "SSC",
        coinMinimalDenom: "ssc",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stwart_test_1/ssc.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STW",
        coinMinimalDenom: "stw",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stwart_test_1/stw.png",
        gasPriceStep: {
          low: 0.25,
          average: 2.5,
          high: 4,
        },
      },
    ],
    features: [],
  },
  STALWART_TESTNET_STWART_TESTNET_1: {
    rpc: "https://rpc.testnet.stalwart.dev",
    rest: "https://api.testnet.stalwart.dev",
    nodeProvider: {
      name: "Algoritmic Lab",
      email: "snemesh@algoritmiclab.ai",
      website: "https://www.algoritmiclab.ai",
    },
    chainId: "stwart_testnet_1",
    chainName: "Stalwart Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stwart_testnet_1/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "stwart",
      bech32PrefixAccPub: "stwartpub",
      bech32PrefixValAddr: "stwartvaloper",
      bech32PrefixValPub: "stwartvaloperpub",
      bech32PrefixConsAddr: "stwartvalcons",
      bech32PrefixConsPub: "stwartvalconspub",
    },
    stakeCurrency: {
      coinDenom: "STW",
      coinMinimalDenom: "stw",
      coinDecimals: 8,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stwart_testnet_1/stw.png",
    },
    currencies: [
      {
        coinDenom: "STW",
        coinMinimalDenom: "stw",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stwart_testnet_1/stw.png",
      },
      {
        coinDenom: "SSC",
        coinMinimalDenom: "ssc",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stwart_testnet_1/ssc.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STW",
        coinMinimalDenom: "stw",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stwart_testnet_1/stw.png",
        gasPriceStep: {
          low: 0.25,
          average: 2.5,
          high: 4,
        },
      },
    ],
    features: [],
  },
  SWISSTRONIK_SWISSTRONIK_1291_1: {
    chainId: "swisstronik_1291-1",
    chainName: "Swisstronik",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/swisstronik_1291/chain.png",
    rpc: "https://rpc.testnet.swisstronik.com",
    rest: "https://api.testnet.swisstronik.com",
    nodeProvider: {
      name: "Swisstronik Node",
      email: "contact@swisstronik.com",
      website: "https://www.swisstronik.com",
    },
    currencies: [
      {
        coinMinimalDenom: "aswtr",
        coinDenom: "SWTR",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/swisstronik_1291/chain.png",
      },
    ],
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "swtr",
      bech32PrefixAccPub: "swtrpub",
      bech32PrefixValAddr: "swtraloper",
      bech32PrefixValPub: "swtrvaloperpub",
      bech32PrefixConsAddr: "swtrvalcons",
      bech32PrefixConsPub: "swtrvalconspub",
    },
    stakeCurrency: {
      coinMinimalDenom: "aswtr",
      coinDenom: "SWTR",
      coinDecimals: 18,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/swisstronik_1291/chain.png",
    },
    feeCurrencies: [
      {
        coinMinimalDenom: "aswtr",
        coinDenom: "SWTR",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/swisstronik_1291/chain.png",
        gasPriceStep: {
          average: 30000000000,
          high: 30000000000,
          low: 30000000000,
        },
      },
    ],
    walletUrlForStaking:
      "https://explorer-cosmos.testnet.swisstronik.com/swisstronik/staking",
    features: ["eth-address-gen", "eth-key-sign"],
  },
  SYMPHONY_TESTNET_SYMPHONY_TESTNET_2: {
    chainId: "symphony-testnet-2",
    chainName: "Symphony Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/symphony-testnet/chain.png",
    rpc: "https://symphony-rpc.kleomedes.network",
    rest: "https://symphony-api.kleomedes.network",
    nodeProvider: {
      name: "Kleomedes",
      email: "marco@kleomed.es",
      website: "https://www.kleomed.es",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "symphony",
      bech32PrefixAccPub: "symphonypub",
      bech32PrefixValAddr: "symphonyvaloper",
      bech32PrefixValPub: "symphonyvaloperpub",
      bech32PrefixConsAddr: "symphonyvalcons",
      bech32PrefixConsPub: "symphonyvalconspub",
    },
    currencies: [
      {
        coinDenom: "MLD",
        coinMinimalDenom: "note",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/symphony-testnet/melody.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MLD",
        coinMinimalDenom: "note",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0025,
          average: 0.025,
          high: 0.04,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/symphony-testnet/melody.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "MLD",
      coinMinimalDenom: "note",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/symphony-testnet/melody.png",
    },
    features: ["cosmwasm", "osmosis-txfees"],
  },
  SYNTERNET_SYNTERNET_1: {
    bech32Config: {
      bech32PrefixAccAddr: "synt",
      bech32PrefixAccPub: "syntpub",
      bech32PrefixConsAddr: "syntvalcons",
      bech32PrefixConsPub: "syntvalconspub",
      bech32PrefixValAddr: "syntvaloper",
      bech32PrefixValPub: "syntvaloperpub",
    },
    bip44: {
      coinType: 118,
    },
    chainId: "synternet-1",
    chainName: "synternet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/synternet/synt.png",
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "SYNT",
        coinMinimalDenom: "usynt",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/synternet/synt.png",
      },
    ],
    features: [],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: "SYNT",
        coinMinimalDenom: "usynt",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/synternet/synt.png",
        gasPriceStep: {
          average: 0.025,
          high: 0.03,
          low: 0.01,
        },
      },
    ],
    rest: "https://api.synternet.com",
    rpc: "https://rpc.synternet.com",
    nodeProvider: {
      name: "Synternet",
      email: "info@synternet.com",
      website: "https://synternet.com/",
    },
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "SYNT",
      coinMinimalDenom: "usynt",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/synternet/synt.png",
    },
    walletUrlForStaking: "https://staking.synternet.com",
  },
  TENET_TENET_1559_1: {
    rpc: "https://tendermint-1.rpc.tenet.org",
    rest: "https://app.rpc.tenet.org",
    chainId: "tenet_1559-1",
    chainName: "Tenet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/tenet_1559/tenet.png",
    nodeProvider: {
      name: "Tenet Foundation",
      website: "https://tenet.org/",
      email: "info@tenet.org",
    },
    stakeCurrency: {
      coinDenom: "TENET",
      coinMinimalDenom: "atenet",
      coinDecimals: 18,
      coinGeckoId: "tenet-1b000f7b-59cb-4e06-89ce-d62b32d362b9",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/tenet_1559/tenet.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/tenet",
    walletUrlForStaking: "https://wallet.keplr.app/chains/tenet",
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "tenet",
      bech32PrefixAccPub: "tenetpub",
      bech32PrefixValAddr: "tenetvaloper",
      bech32PrefixValPub: "tenetvaloperpub",
      bech32PrefixConsAddr: "tenetvalcons",
      bech32PrefixConsPub: "tenetvalconspub",
    },
    currencies: [
      {
        coinDenom: "TENET",
        coinMinimalDenom: "atenet",
        coinDecimals: 18,
        coinGeckoId: "tenet-1b000f7b-59cb-4e06-89ce-d62b32d362b9",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/tenet_1559/tenet.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TENET",
        coinMinimalDenom: "atenet",
        coinDecimals: 18,
        coinGeckoId: "tenet-1b000f7b-59cb-4e06-89ce-d62b32d362b9",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/tenet_1559/tenet.png",
        gasPriceStep: {
          low: 20000000000,
          average: 25000000000,
          high: 30000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
  },
  TERITORI_TERITORI_1: {
    chainId: "teritori-1",
    chainName: "Teritori",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/teritori/chain.png",
    rpc: "https://rpc.mainnet.teritori.com",
    rest: "https://rest.mainnet.teritori.com",
    nodeProvider: {
      name: "Teritori",
      email: "support@teritori.com",
      website: "https://app.teritori.com/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "tori",
      bech32PrefixAccPub: "toripub",
      bech32PrefixValAddr: "torivaloper",
      bech32PrefixValPub: "torivaloperpub",
      bech32PrefixConsAddr: "torivalcons",
      bech32PrefixConsPub: "torivalconspub",
    },
    currencies: [
      {
        coinDenom: "TORI",
        coinMinimalDenom: "utori",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/teritori/utori.png",
        coinGeckoId: "teritori",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TORI",
        coinMinimalDenom: "utori",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/teritori/utori.png",
        coinDecimals: 6,
        coinGeckoId: "teritori",
        gasPriceStep: {
          low: 0,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "TORI",
      coinMinimalDenom: "utori",
      coinDecimals: 6,
      coinGeckoId: "teritori",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/teritori/utori.png",
    },
    features: ["cosmwasm"],
    walletUrlForStaking: "https://app.teritori.com/staking",
  },
  PERSISTENCE_TESTNET_2_TEST_CORE_2: {
    chainId: "test-core-2",
    chainName: "Persistence Testnet 2",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/test-core/chain.png",
    rpc: "https://rpc.testnet2.persistence.one/",
    rest: "https://rest.testnet2.persistence.one/",
    nodeProvider: {
      name: "Persistence",
      email: "hello@persistence.one",
      website: "https://persistence.one/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "persistence",
      bech32PrefixAccPub: "persistencepub",
      bech32PrefixValAddr: "persistencevaloper",
      bech32PrefixValPub: "persistencevaloperpub",
      bech32PrefixConsAddr: "persistencevalcons",
      bech32PrefixConsPub: "persistencevalconspub",
    },
    currencies: [
      {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/test-core/uxprt.png",
      },
      {
        coinDenom: "stkATOM",
        coinMinimalDenom: "stk/uatom",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/test-core/stkatom.png",
      },
      {
        coinDenom: "stkOSMO",
        coinMinimalDenom: "stk/uosmo",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/test-core/stkosmo.png",
      },
      {
        coinDenom: "stkDV4TNT",
        coinMinimalDenom: "stk/adv4tnt",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/test-core/stkdv4tnt.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/test-core/uxprt.png",
        gasPriceStep: {
          low: 0.05,
          average: 0.125,
          high: 0.2,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "XPRT",
      coinMinimalDenom: "uxprt",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/test-core/uxprt.png",
    },
    features: ["cosmwasm"],
  },
  TGRADE_TGRADE_MAINNET_1: {
    rpc: "https://rpc.tgrade.posthuman.digital/",
    rest: "https://lcd.tgrade.posthuman.digital/",
    nodeProvider: {
      name: "POSTHUMAN (Public endpoint)",
      email: "validator@posthuman.digital",
      website: "https://posthuman.digital",
    },
    chainId: "tgrade-mainnet-1",
    chainName: "Tgrade",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/tgrade-mainnet/chain.png",
    stakeCurrency: {
      coinDenom: "TGD",
      coinMinimalDenom: "utgd",
      coinDecimals: 6,
      coinGeckoId: "tgrade",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/tgrade-mainnet/utgd.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "tgrade",
      bech32PrefixAccPub: "tgradepub",
      bech32PrefixValAddr: "tgradevaloper",
      bech32PrefixValPub: "tgradevaloperpub",
      bech32PrefixConsAddr: "tgradevalcons",
      bech32PrefixConsPub: "tgradevalconspub",
    },
    currencies: [
      {
        coinDenom: "TGD",
        coinMinimalDenom: "utgd",
        coinDecimals: 6,
        coinGeckoId: "tgrade",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/tgrade-mainnet/utgd.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TGD",
        coinMinimalDenom: "utgd",
        coinDecimals: 6,
        coinGeckoId: "tgrade",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/tgrade-mainnet/utgd.png",
        gasPriceStep: {
          low: 0.05,
          average: 0.05,
          high: 0.075,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  COSMOS_HUB_TESTNET_THETA_TESTNET_001: {
    rpc: "https://rpc.sentry-01.theta-testnet.polypore.xyz",
    rest: "https://rest.sentry-01.theta-testnet.polypore.xyz",
    chainId: "theta-testnet-001",
    chainName: "Cosmos Hub Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cosmos",
      bech32PrefixAccPub: "cosmospub",
      bech32PrefixConsAddr: "cosmosvalcons",
      bech32PrefixConsPub: "cosmosvalconspub",
      bech32PrefixValAddr: "cosmosvaloper",
      bech32PrefixValPub: "cosmosvaloperpub",
    },
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "ATOM",
      coinMinimalDenom: "uatom",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
    },
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
      },
    ],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
        gasPriceStep: {
          average: 0.025,
          high: 0.03,
          low: 0.01,
        },
      },
    ],
    features: [],
  },
  TITAN_TESTNET_TITAN_TEST_2: {
    bech32Config: {
      bech32PrefixAccAddr: "titan",
      bech32PrefixAccPub: "titanpub",
      bech32PrefixConsAddr: "titanvalcons",
      bech32PrefixConsPub: "titanvalconspub",
      bech32PrefixValAddr: "titanvaloper",
      bech32PrefixValPub: "titanvaloperpub",
    },
    bip44: {
      coinType: 118,
    },
    chainId: "titan-test-2",
    chainName: "Titan Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan-test/chain.png",
    currencies: [
      {
        coinDecimals: 6,
        coinDenom: "TTNT",
        coinMinimalDenom: "uttnt",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan-test/uttnt.png",
      },
      {
        coinDecimals: 6,
        coinDenom: "TNT1",
        coinMinimalDenom: "utnt1",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan-test/utnt1.png",
      },
      {
        coinDecimals: 6,
        coinDenom: "TNT2",
        coinMinimalDenom: "utnt2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan-test/utnt1.png",
      },
      {
        coinDecimals: 6,
        coinDenom: "TCP",
        coinMinimalDenom: "utcp",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan-test/utnt1.png",
      },
      {
        coinDecimals: 6,
        coinDenom: "TGCTC",
        coinMinimalDenom: "utgctc",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan-test/utnt1.png",
      },
    ],
    features: [],
    feeCurrencies: [
      {
        coinDecimals: 6,
        coinDenom: "TTNT",
        coinMinimalDenom: "uttnt",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan-test/uttnt.png",
        gasPriceStep: {
          average: 0.025,
          high: 0.03,
          low: 0.005,
        },
      },
    ],
    rest: "https://lcd.titannet.io",
    rpc: "https://rpc.titannet.io",
    stakeCurrency: {
      coinDecimals: 6,
      coinDenom: "TTNT",
      coinMinimalDenom: "uttnt",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan-test/uttnt.png",
    },
    nodeProvider: {
      name: "titan",
      email: "info@titannet.io",
      website: "https://titannet.io",
    },
  },
  TITAN_TITAN_18888_1: {
    rpc: "https://titan-rpc.titanlab.io",
    rest: "https://titan-lcd.titanlab.io",
    chainId: "titan_18888-1",
    chainName: "Titan",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan_18888/chain.png",
    nodeProvider: {
      name: "Titanlab",
      email: "info@titanlab.io",
      website: "https://titanlab.io",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "titan",
      bech32PrefixAccPub: "titanpub",
      bech32PrefixValAddr: "titanvaloper",
      bech32PrefixValPub: "titanvaloperpub",
      bech32PrefixConsAddr: "titanvalcons",
      bech32PrefixConsPub: "titanvalconspub",
    },
    currencies: [
      {
        coinDenom: "TKX",
        coinMinimalDenom: "atkx",
        coinDecimals: 18,
        coinGeckoId: "tokenize-xchange",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan_18888/tkx.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TKX",
        coinMinimalDenom: "atkx",
        coinDecimals: 18,
        coinGeckoId: "tokenize-xchange",
        gasPriceStep: {
          low: 100000000000,
          average: 110000000000,
          high: 200000000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "TKX",
      coinMinimalDenom: "atkx",
      coinDecimals: 18,
      coinGeckoId: "tokenize-xchange",
    },
    features: ["cosmwasm", "eth-address-gen", "eth-key-sign"],
  },
  TITAN_TESTNET_TITAN_18889_1: {
    rpc: "https://titan-testnet-rpc.titanlab.io",
    rest: "https://titan-testnet-lcd.titanlab.io",
    chainId: "titan_18889-1",
    chainName: "Titan Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan_18889/chain.png",
    nodeProvider: {
      name: "Titanlab",
      email: "info@titanlab.io",
      website: "https://titanlab.io",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "titan",
      bech32PrefixAccPub: "titanpub",
      bech32PrefixValAddr: "titanvaloper",
      bech32PrefixValPub: "titanvaloperpub",
      bech32PrefixConsAddr: "titanvalcons",
      bech32PrefixConsPub: "titanvalconspub",
    },
    currencies: [
      {
        coinDenom: "TKX",
        coinMinimalDenom: "atkx",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/titan_18889/tkx.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TKX",
        coinMinimalDenom: "atkx",
        coinDecimals: 18,
        gasPriceStep: {
          low: 100000000000,
          average: 110000000000,
          high: 200000000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "TKX",
      coinMinimalDenom: "atkx",
      coinDecimals: 18,
    },
    features: ["cosmwasm", "eth-address-gen", "eth-key-sign"],
  },
  PALOMA_TUMBLER: {
    chainId: "tumbler",
    chainName: "Paloma",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/tumbler/chain.png",
    rpc: "https://rpc-1.paloma.nodes.guru",
    rest: "https://api-1.paloma.nodes.guru",
    nodeProvider: {
      name: "Nodes.Guru",
      email: "support@nodes.guru",
      website: "https://nodes.guru/",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "paloma",
      bech32PrefixAccPub: "palomapub",
      bech32PrefixValAddr: "palomavaloper",
      bech32PrefixValPub: "palomavaloperpub",
      bech32PrefixConsAddr: "palomavalcons",
      bech32PrefixConsPub: "palomavalconspub",
    },
    currencies: [
      {
        coinDenom: "GRAIN",
        coinMinimalDenom: "ugrain",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "GRAIN",
        coinMinimalDenom: "ugrain",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0,
          average: 0.01,
          high: 0.025,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "GRAIN",
      coinMinimalDenom: "ugrain",
      coinDecimals: 6,
    },
    features: ["cosmwasm"],
  },
  UX_UMEE_1: {
    rpc: "https://rpc-umee.keplr.app",
    rest: "https://lcd-umee.keplr.app",
    chainId: "umee-1",
    chainName: "UX",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/chain.png",
    stakeCurrency: {
      coinDenom: "UX",
      coinMinimalDenom: "uumee",
      coinDecimals: 6,
      coinGeckoId: "umee",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
    },
    walletUrl: "https://wallet.keplr.app/chains/umee",
    walletUrlForStaking: "https://wallet.keplr.app/chains/umee",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "umee",
      bech32PrefixAccPub: "umeepub",
      bech32PrefixValAddr: "umeevaloper",
      bech32PrefixValPub: "umeevaloperpub",
      bech32PrefixConsAddr: "umeevalcons",
      bech32PrefixConsPub: "umeevalconspub",
    },
    currencies: [
      {
        coinDenom: "UX",
        coinMinimalDenom: "uumee",
        coinDecimals: 6,
        coinGeckoId: "umee",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "UX",
        coinMinimalDenom: "uumee",
        coinDecimals: 6,
        coinGeckoId: "umee",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
        gasPriceStep: {
          low: 0.06,
          average: 0.1,
          high: 0.14,
        },
      },
    ],
    features: ["authz-msg-revoke-fixed"],
  },
  UNION_TESTNET_UNION_TESTNET_8: {
    chainId: "union-testnet-8",
    chainName: "Union Testnet",
    nodeProvider: {
      name: "union",
      email: "ben@union.build",
      website: "https://explorer.testnet-8.union.build",
    },
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/union-testnet/chain.png",
    rest: "https://rest.testnet-8.union.build",
    rpc: "https://rpc.testnet-8.union.build",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "union",
      bech32PrefixAccPub: "unionpub",
      bech32PrefixValAddr: "unionvaloper",
      bech32PrefixValPub: "unionvaloperpub",
      bech32PrefixConsAddr: "unionvalcons",
      bech32PrefixConsPub: "unionvalconspub",
    },
    currencies: [
      {
        coinDenom: "UNO",
        coinMinimalDenom: "muno",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/union-testnet/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "UNO",
        coinMinimalDenom: "muno",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.0025,
          average: 0.025,
          high: 0.04,
        },
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/union-testnet/chain.png",
      },
    ],
    stakeCurrency: {
      coinDenom: "UNO",
      coinMinimalDenom: "muno",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/union-testnet/chain.png",
    },
    features: [],
  },
  UNUNIFI_UNUNIFI_BETA_V1: {
    rpc: "http://a.lcd.ununifi.cauchye.net:26657",
    rest: "https://a.lcd.ununifi.cauchye.net:1318",
    nodeProvider: {
      name: "UnUniFi",
      email: "info@ununifi.io",
      website: "https://ununifi.io/",
    },
    chainId: "ununifi-beta-v1",
    chainName: "UnUniFi",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ununifi-beta-v1/chain.png",
    stakeCurrency: {
      coinDenom: "GUU",
      coinMinimalDenom: "uguu",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ununifi-beta-v1/uguu.png",
    },
    walletUrl: "https://ununifi.io/portal",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "ununifi",
      bech32PrefixAccPub: "ununifipub",
      bech32PrefixValAddr: "ununifivaloper",
      bech32PrefixValPub: "ununifivaloperpub",
      bech32PrefixConsAddr: "ununifivalcons",
      bech32PrefixConsPub: "ununifivalconspub",
    },
    currencies: [
      {
        coinDenom: "GUU",
        coinMinimalDenom: "uguu",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ununifi-beta-v1/uguu.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "GUU",
        coinMinimalDenom: "uguu",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/ununifi-beta-v1/uguu.png",
        gasPriceStep: {
          low: 0.0025,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    features: ["cosmwasm"],
  },
  UPTICK_NETWORK_UPTICK_117_1: {
    chainId: "uptick_117-1",
    chainName: "Uptick Network",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/uptick_117/chain.png",
    rpc: "https://rpc.uptick.network",
    rest: "https://rest.uptick.network",
    nodeProvider: {
      name: "Uptick Network",
      email: "dev@uptickproject.com",
      website: "https://explorer.uptick.network/",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "uptick",
      bech32PrefixAccPub: "uptickpub",
      bech32PrefixValAddr: "uptickvaloper",
      bech32PrefixValPub: "uptickvaloperpub",
      bech32PrefixConsAddr: "uptickvalcons",
      bech32PrefixConsPub: "uptickvalconspub",
    },
    currencies: [
      {
        coinDenom: "UPTICK",
        coinMinimalDenom: "auptick",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/uptick_117/auptick.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "UPTICK",
        coinMinimalDenom: "auptick",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/uptick_117/auptick.png",
        gasPriceStep: {
          low: 13000000000,
          average: 16000000000,
          high: 20000000000,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "UPTICK",
      coinMinimalDenom: "auptick",
      coinDecimals: 18,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/uptick_117/auptick.png",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  DORA_VOTA_VOTA_ASH: {
    rpc: "https://vota-rpc.dorafactory.org",
    rest: "https://vota-rest.dorafactory.org",
    nodeProvider: {
      name: "Dorafactory",
      email: "node-operation@mail.dorafactory.org",
      website: "https://dorafactory.org",
    },
    chainId: "vota-ash",
    chainName: "Dora Vota",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/vota-ash/chain.png",
    stakeCurrency: {
      coinDenom: "DORA",
      coinMinimalDenom: "peaka",
      coinDecimals: 18,
      coinGeckoId: "dora-factory-2",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/vota-ash/peaka.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "dora",
      bech32PrefixAccPub: "dorapub",
      bech32PrefixValAddr: "doravaloper",
      bech32PrefixValPub: "doravaloperpub",
      bech32PrefixConsAddr: "doravalcons",
      bech32PrefixConsPub: "doravalconspub",
    },
    currencies: [
      {
        coinDenom: "DORA",
        coinMinimalDenom: "peaka",
        coinDecimals: 18,
        coinGeckoId: "dora-factory-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/vota-ash/peaka.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DORA",
        coinMinimalDenom: "peaka",
        coinDecimals: 18,
        coinGeckoId: "dora-factory-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/vota-ash/peaka.png",
        gasPriceStep: {
          low: 100000000000,
          average: 100000000000,
          high: 100000000000,
        },
      },
    ],
    features: [],
  },
  DORA_VOTA_TESTNET_VOTA_TESTNET: {
    rpc: "https://vota-testnet-rpc.dorafactory.org",
    rest: "https://vota-testnet-rest.dorafactory.org",
    nodeProvider: {
      name: "Dorafactory",
      email: "node-operation@mail.dorafactory.org",
      website: "https://dorafactory.org",
    },
    chainId: "vota-testnet",
    chainName: "Dora Vota Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/vota-testnet/chain.png",
    stakeCurrency: {
      coinDenom: "DORA",
      coinMinimalDenom: "peaka",
      coinDecimals: 18,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/vota-testnet/peaka.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "dora",
      bech32PrefixAccPub: "dorapub",
      bech32PrefixValAddr: "doravaloper",
      bech32PrefixValPub: "doravaloperpub",
      bech32PrefixConsAddr: "doravalcons",
      bech32PrefixConsPub: "doravalconspub",
    },
    currencies: [
      {
        coinDenom: "DORA",
        coinMinimalDenom: "peaka",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/vota-testnet/peaka.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "DORA",
        coinMinimalDenom: "peaka",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/vota-testnet/peaka.png",
        gasPriceStep: {
          low: 100000000000,
          average: 100000000000,
          high: 100000000000,
        },
      },
    ],
    features: [],
  },
  WORMHOLE_GATEWAY_WORMCHAIN: {
    rpc: "https://tncnt-eu-wormchain-main-01.rpc.p2p.world",
    rest: "https://tncnt-eu-wormchain-main-01.rpc.p2p.world/lcd",
    nodeProvider: {
      name: "Wormhole",
      email: "contact@wormhole.com",
      website: "https://wormhole.com",
    },
    chainId: "wormchain",
    chainName: "Wormhole Gateway",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/chain.png",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "wormhole",
      bech32PrefixAccPub: "wormholepub",
      bech32PrefixValAddr: "wormholevaloper",
      bech32PrefixValPub: "wormholevaloperpub",
      bech32PrefixConsAddr: "wormholevalcons",
      bech32PrefixConsPub: "wormholevalconspub",
    },
    currencies: [
      {
        coinDenom: "TEST",
        coinMinimalDenom: "utest",
        coinDecimals: 6,
      },
      {
        coinDenom: "SUI",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh",
        coinDecimals: 8,
        coinGeckoId: "sui",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh.png",
      },
      {
        coinDenom: "WETH",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp",
        coinDecimals: 8,
        coinGeckoId: "weth",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp.png",
      },
      {
        coinDenom: "wstETH",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b",
        coinDecimals: 8,
        coinGeckoId: "wrapped-steth",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b.png",
      },
      {
        coinDenom: "APT",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r",
        coinDecimals: 8,
        coinGeckoId: "aptos",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r.png",
      },
      {
        coinDenom: "USDT",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi",
        coinDecimals: 6,
        coinGeckoId: "tether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi.png",
      },
      {
        coinDenom: "SOL",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA",
        coinDecimals: 8,
        coinGeckoId: "solana",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA.png",
      },
      {
        coinDenom: "BONK",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR",
        coinDecimals: 5,
        coinGeckoId: "bonk",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR.png",
      },
      {
        coinDenom: "WBTC",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd",
        coinDecimals: 8,
        coinGeckoId: "wrapped-bitcoin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd.png",
      },
      {
        coinDenom: "tBTC",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw",
        coinDecimals: 8,
        coinGeckoId: "tbtc",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw.png",
      },
      {
        coinDenom: "DAI",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1",
        coinDecimals: 8,
        coinGeckoId: "dai",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt.png",
      },
      {
        coinDenom: "ASG",
        coinMinimalDenom:
          "factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/54RgtKyJuM9boEu4G7Dzp2mMrg6w5MuctfU95HoHHeL3",
        coinDecimals: 8,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/wormchain/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/54RgtKyJuM9boEu4G7Dzp2mMrg6w5MuctfU95HoHHeL3.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TEST",
        coinMinimalDenom: "utest",
        coinDecimals: 6,
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 1,
        },
      },
    ],
    features: ["cosmwasm"],
    hideInUI: true,
  },
  XION_TESTNET_XION_TESTNET_1: {
    rpc: "https://rpc.xion-testnet-1.burnt.com/",
    rest: "https://api.xion-testnet-1.burnt.com/",
    chainId: "xion-testnet-1",
    chainName: "Xion Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/xion-testnet/chain.png",
    stakeCurrency: {
      coinDenom: "XION",
      coinMinimalDenom: "uxion",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/xion-testnet/chain.png",
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "xion",
      bech32PrefixAccPub: "xionpub",
      bech32PrefixValAddr: "xionvaloper",
      bech32PrefixValPub: "xionvaloperpub",
      bech32PrefixConsAddr: "xionvalcons",
      bech32PrefixConsPub: "xionvalconspub",
    },
    currencies: [
      {
        coinDenom: "XION",
        coinMinimalDenom: "uxion",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/xion-testnet/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "XION",
        coinMinimalDenom: "uxion",
        coinDecimals: 6,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/xion-testnet/chain.png",
        gasPriceStep: {
          low: 0.005,
          average: 0.01,
          high: 0.02,
        },
      },
    ],
    features: ["cosmwasm"],
    nodeProvider: {
      name: "Dylan Schultzie",
      email: "security@lavenderfive.com",
      website: "https://lavenderfive.com",
    },
  },
  ZETACHAIN_ZETACHAIN_7000_1: {
    rpc: "https://rpc-zetachain.keplr.app",
    rest: "https://lcd-zetachain.keplr.app",
    evm: {
      chainId: 7000,
      rpc: "https://evm-zetachain.keplr.app",
      websocket: "wss://ws-evm-zetachain.keplr.app",
    },
    chainId: "zetachain_7000-1",
    chainName: "ZetaChain",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/zetachain_7000/chain.png",
    stakeCurrency: {
      coinDenom: "ZETA",
      coinMinimalDenom: "azeta",
      coinDecimals: 18,
      coinGeckoId: "zetachain",
      coinImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/zetachain_7000/chain.png",
    },
    bip44: {
      coinType: 60,
    },
    bech32Config: {
      bech32PrefixAccAddr: "zeta",
      bech32PrefixAccPub: "zetapub",
      bech32PrefixValAddr: "zetavaloper",
      bech32PrefixValPub: "zetavaloperpub",
      bech32PrefixConsAddr: "ezetaalcons",
      bech32PrefixConsPub: "zetavalconspub",
    },
    currencies: [
      {
        coinDenom: "ZETA",
        coinMinimalDenom: "azeta",
        coinDecimals: 18,
        coinGeckoId: "zetachain",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/zetachain_7000/chain.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ZETA",
        coinMinimalDenom: "azeta",
        coinDecimals: 18,
        coinGeckoId: "zetachain",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/zetachain_7000/chain.png",
        gasPriceStep: {
          low: 80000000000,
          average: 80000000000,
          high: 80000000000,
        },
      },
    ],
    features: ["eth-address-gen", "eth-key-sign"],
    walletUrlForStaking: "https://wallet.keplr.app/chains/zetachain",
  },
  ETHEREUM_EIP155_1: {
    rpc: "https://evm-1.keplr.app",
    chainId: "eip155:1",
    chainName: "Ethereum",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:1/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "ETH",
        coinMinimalDenom: "ethereum-native",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:1/ethereum-native.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:1/erc20/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ETH",
        coinMinimalDenom: "ethereum-native",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:1/ethereum-native.png",
      },
    ],
    rest: "https://evm-1.keplr.app",
    evm: {
      chainId: 1,
      rpc: "https://evm-1.keplr.app",
      websocket: "wss://evm-1.keplr.app/websocket",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  OPTIMISM_EIP155_10: {
    rpc: "https://evm-10.keplr.app",
    chainId: "eip155:10",
    chainName: "Optimism",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:10/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "ETH",
        coinMinimalDenom: "optimism-native",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:10/optimism-native.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "erc20:0x0b2c639c533813f4aa9d7837caf62653d097ff85",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:10/erc20/0x0b2c639c533813f4aa9d7837caf62653d097ff85.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ETH",
        coinMinimalDenom: "optimism-native",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:10/optimism-native.png",
      },
    ],
    rest: "https://evm-10.keplr.app",
    evm: {
      chainId: 10,
      rpc: "https://evm-10.keplr.app",
      websocket: "wss://evm-10.keplr.app/websocket",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  SEI_EVM_EIP155_1329: {
    rpc: "https://evm-rpc.sei-apis.com",
    nodeProvider: {
      name: "Sei",
      email: "ecosystem@seinetwork.io",
      website: "https://sei.io",
    },
    chainId: "eip155:1329",
    chainName: "Sei EVM",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:1329/chain.png",
    bip44: {
      coinType: 60,
    },
    stakeCurrency: {
      coinDenom: "SEI",
      coinMinimalDenom: "sei-native",
      coinDecimals: 18,
      coinGeckoId: "sei-network",
    },
    currencies: [
      {
        coinDenom: "SEI",
        coinMinimalDenom: "sei-native",
        coinDecimals: 18,
        coinGeckoId: "sei-network",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SEI",
        coinMinimalDenom: "sei-native",
        coinDecimals: 18,
        coinGeckoId: "sei-network",
      },
    ],
    rest: "https://evm-rpc.sei-apis.com",
    evm: {
      chainId: 1329,
      rpc: "https://evm-rpc.sei-apis.com",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  POLYGON_EIP155_137: {
    rpc: "https://evm-137.keplr.app",
    chainId: "eip155:137",
    chainName: "Polygon",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:137/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "MATIC",
        coinMinimalDenom: "polygon-native",
        coinDecimals: 18,
        coinGeckoId: "matic-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:137/polygon-native.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "erc20:0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:137/erc20/0x3c499c542cef5e3811e1192ce70d8cc03d5c3359.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "MATIC",
        coinMinimalDenom: "polygon-native",
        coinDecimals: 18,
        coinGeckoId: "matic-network",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:137/polygon-native.png",
      },
    ],
    rest: "https://evm-137.keplr.app",
    evm: {
      chainId: 137,
      rpc: "https://evm-137.keplr.app",
      websocket: "wss://evm-137.keplr.app/websocket",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  ARBITRUM_EIP155_42161: {
    rpc: "https://evm-42161.keplr.app",
    chainId: "eip155:42161",
    chainName: "Arbitrum",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:42161/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "ETH",
        coinMinimalDenom: "arbitrum-native",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:42161/arbitrum-native.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "erc20:0xaf88d065e77c8cc2239327c5edb3a432268e5831",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:42161/erc20/0xaf88d065e77c8cc2239327c5edb3a432268e5831.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ETH",
        coinMinimalDenom: "arbitrum-native",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:42161/arbitrum-native.png",
      },
    ],
    rest: "https://evm-42161.keplr.app",
    evm: {
      chainId: 42161,
      rpc: "https://evm-42161.keplr.app",
      websocket: "wss://evm-42161.keplr.app/websocket",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  AVALANCHE_EIP155_43114: {
    rpc: "https://evm-43114.keplr.app",
    chainId: "eip155:43114",
    chainName: "Avalanche",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:43114/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "AVAX",
        coinMinimalDenom: "avalanche-native",
        coinDecimals: 18,
        coinGeckoId: "avalanche-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:43114/avalanche-native.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "erc20:0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:43114/erc20/0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e.png",
      },
      {
        coinDenom: "WETH",
        coinMinimalDenom: "erc20:0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab",
        coinDecimals: 18,
        coinGeckoId: "weth",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:43114/erc20/0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab.png",
      },
      {
        coinDenom: "USDT",
        coinMinimalDenom: "erc20:0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
        coinDecimals: 6,
        coinGeckoId: "tether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:43114/erc20/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "AVAX",
        coinMinimalDenom: "avalanche-native",
        coinDecimals: 18,
        coinGeckoId: "avalanche-2",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:43114/avalanche-native.png",
      },
    ],
    rest: "https://evm-43114.keplr.app",
    evm: {
      chainId: 43114,
      rpc: "https://evm-43114.keplr.app",
      websocket: "wss://evm-43114.keplr.app/websocket",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  BNB_SMART_CHAIN_EIP155_56: {
    rpc: "https://evm-56.keplr.app",
    chainId: "eip155:56",
    chainName: "BNB Smart Chain",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:56/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "BNB",
        coinMinimalDenom: "binance-native",
        coinDecimals: 18,
        coinGeckoId: "binancecoin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:56/binance-native.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "erc20:0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        coinDecimals: 18,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:56/erc20/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
      },
      {
        coinDenom: "WETH",
        coinMinimalDenom: "erc20:0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        coinDecimals: 18,
        coinGeckoId: "weth",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:56/erc20/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png",
      },
      {
        coinDenom: "USDT",
        coinMinimalDenom: "erc20:0x55d398326f99059fF775485246999027B3197955",
        coinDecimals: 18,
        coinGeckoId: "tether",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:56/erc20/0x55d398326f99059fF775485246999027B3197955.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BNB",
        coinMinimalDenom: "binance-native",
        coinDecimals: 18,
        coinGeckoId: "binancecoin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:56/binance-native.png",
      },
    ],
    rest: "https://evm-56.keplr.app",
    evm: {
      chainId: 56,
      rpc: "https://evm-56.keplr.app",
      websocket: "wss://evm-56.keplr.app/websocket",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  BERACHAIN_BARTIO_TESTNET_EIP155_80084: {
    rpc: "https://bartio.rpc.berachain.com",
    chainId: "eip155:80084",
    chainName: "Berachain bArtio Testnet",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:80084/chain.png",
    nodeProvider: {
      name: "Berachain",
      website: "https://berachain.com",
      discord: "https://discord.com/invite/berachain",
    },
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "BERA",
        coinMinimalDenom: "berachain-native",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:80084/berachain-native.png",
      },
      {
        coinDenom: "BGT",
        coinMinimalDenom: "erc20:0xbDa130737BDd9618301681329bF2e46A016ff9Ad",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:80084/erc20/0xbDa130737BDd9618301681329bF2e46A016ff9Ad.png",
      },
      {
        coinDenom: "HONEY",
        coinMinimalDenom: "erc20:0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:80084/erc20/0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "BERA",
        coinMinimalDenom: "berachain-native",
        coinDecimals: 18,
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:80084/berachain-native.png",
      },
    ],
    rest: "https://bartio.rpc.berachain.com",
    evm: {
      chainId: 80084,
      rpc: "https://bartio.rpc.berachain.com",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  BLAST_EIP155_81457: {
    rpc: "https://evm-81457.keplr.app",
    chainId: "eip155:81457",
    chainName: "Blast",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:81457/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "ETH",
        coinMinimalDenom: "blast-native",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:81457/blast-native.png",
      },
      {
        coinDenom: "USDB",
        coinMinimalDenom: "erc20:0x4300000000000000000000000000000000000003",
        coinDecimals: 18,
        coinGeckoId: "usdb",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:81457/erc20/0x4300000000000000000000000000000000000003.png",
      },
      {
        coinDenom: "WETH",
        coinMinimalDenom: "erc20:0x4300000000000000000000000000000000000004",
        coinDecimals: 18,
        coinGeckoId: "weth",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:81457/erc20/0x4300000000000000000000000000000000000004.png",
      },
      {
        coinDenom: "BLAST",
        coinMinimalDenom: "erc20:0xb1a5700fA2358173Fe465e6eA4Ff52E36e88E2ad",
        coinDecimals: 18,
        coinGeckoId: "blast",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:81457/erc20/0xb1a5700fA2358173Fe465e6eA4Ff52E36e88E2ad.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ETH",
        coinMinimalDenom: "blast-native",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:81457/blast-native.png",
      },
    ],
    rest: "https://evm-81457.keplr.app",
    evm: {
      chainId: 81457,
      rpc: "https://evm-81457.keplr.app",
      websocket: "wss://evm-81457.keplr.app/websocket",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  BASE_EIP155_8453: {
    rpc: "https://evm-8453.keplr.app",
    chainId: "eip155:8453",
    chainName: "Base",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:8453/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "ETH",
        coinMinimalDenom: "base-native",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:8453/base-native.png",
      },
      {
        coinDenom: "USDC",
        coinMinimalDenom: "erc20:0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
        coinDecimals: 6,
        coinGeckoId: "usd-coin",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:8453/erc20/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ETH",
        coinMinimalDenom: "base-native",
        coinDecimals: 18,
        coinGeckoId: "ethereum",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:8453/base-native.png",
      },
    ],
    rest: "https://evm-8453.keplr.app",
    evm: {
      chainId: 8453,
      rpc: "https://evm-8453.keplr.app",
      websocket: "wss://evm-8453.keplr.app/websocket",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  CARBON_EVM_EIP155_9790: {
    rpc: "https://evm-api.carbon.network",
    nodeProvider: {
      name: "Switcheo Labs",
      email: "info@switcheo.network",
      website: "https://www.switcheo.com/",
    },
    chainId: "eip155:9790",
    chainName: "Carbon EVM",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:9790/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "SWTH",
        coinMinimalDenom: "swth",
        coinDecimals: 18,
        coinGeckoId: "switcheo",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SWTH",
        coinMinimalDenom: "swth",
        coinDecimals: 18,
        coinGeckoId: "switcheo",
      },
    ],
    rest: "https://evm-api.carbon.network",
    evm: {
      chainId: 9790,
      rpc: "https://evm-api.carbon.network",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  FORMA_EIP155_984122: {
    rpc: "https://rpc.forma.art",
    nodeProvider: {
      name: "Forma",
      email: "support@cocodelabs.com",
      website: "https://forma.art",
    },
    chainId: "eip155:984122",
    chainName: "Forma",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:984122/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "TIA",
        coinMinimalDenom: "forma-native",
        coinDecimals: 18,
        coinGeckoId: "celestia",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:984122/utia.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TIA",
        coinMinimalDenom: "forma-native",
        coinDecimals: 18,
        coinGeckoId: "celestia",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:984122/utia.png",
      },
    ],
    rest: "https://rpc.forma.art",
    evm: {
      chainId: 984122,
      rpc: "https://rpc.forma.art",
      websocket: "wss://ws.forma.art",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
  FORMA_SKETCHPAD_EIP155_984123: {
    rpc: "https://rpc.sketchpad-1.forma.art",
    nodeProvider: {
      name: "Forma",
      email: "support@cocodelabs.com",
      website: "https://forma.art",
    },
    chainId: "eip155:984123",
    chainName: "Forma Sketchpad",
    chainSymbolImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:984123/chain.png",
    bip44: {
      coinType: 60,
    },
    currencies: [
      {
        coinDenom: "TIA",
        coinMinimalDenom: "forma-native",
        coinDecimals: 18,
        coinGeckoId: "celestia",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:984123/utia.png",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "TIA",
        coinMinimalDenom: "forma-native",
        coinDecimals: 18,
        coinGeckoId: "celestia",
        coinImageUrl:
          "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/eip155:984123/utia.png",
      },
    ],
    rest: "https://rpc.sketchpad-1.forma.art",
    evm: {
      chainId: 984123,
      rpc: "https://rpc.sketchpad-1.forma.art",
      websocket: "wss://ws.sketchpad-1.forma.art",
    },
    features: ["eth-address-gen", "eth-key-sign"],
  },
};
