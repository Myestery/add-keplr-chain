## Add Keplr Chain Documentation

This Library provides a convenient way to add chains to a Keplr wallet. The functionality is provided by using a button exported by the library. It is designed to be used on only React based applications.

### Installation

```
npm install add-keplr-chain
```

### Usage

The button exported from this library is unstlyed but can be replaced with another button or styled completely. The button is used to add a chain to the Keplr wallet. The button takes in a chain object as a prop. The chain object should have the following properties:

### Using default button

```javascript
import KeplrAddChainButton from "add-keplr-chain";

const chainInfo = {
  chainId: "nillion-chain-testnet-1",
  chainName: "Nillion Testnet",
  rpc: "https://testnet-nillion-rpc.lavenderfive.com",
  rest: "https://testnet-nillion-api.lavenderfive.com",
  chainSymbolImageUrl:
    "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png",
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
  stakeCurrency: {
    coinDenom: "NIL",
    coinMinimalDenom: "unil",
    coinDecimals: 6,
    coinImageUrl:
      "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png",
  },
  features: [],
};

<KeplrAddChainButton
  chainInfo={chainInfo}
  buttonText='Add Nillion Testnet'
  loadingText='Adding Chain...'
/>;
```

### Using custom button

```javascript
import KeplrAddChainButton from "add-keplr-chain";

<KeplrAddChainButton
  chainInfo={chainInfo}
  buttonText='Add Nillion Testnet'
  loadingText='Adding Chain...'
  renderButton={({ onClick, disabled, isLoading, text }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "white",
        backgroundColor: disabled ? "#a0aec0" : "#4a5568",
        border: "none",
        borderRadius: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.3s ease",
        boxShadow:
          "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "250px",
        height: "50px",
      }}>
      {isLoading ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            border: "3px solid #ffffff",
            borderTop: "3px solid #4a5568",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginRight: "10px",
          }}
        />
      ) : (
        <img
          src='https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nillion-chain-testnet/nil.png'
          alt='Nillion Logo'
          style={{ width: "24px", height: "24px", marginRight: "10px" }}
        />
      )}
      {text}
    </button>
  )}
/>;
```

### Props

| Prop Name | Type | Description |
| --------- | ---- | ----------- |
| chainInfo | object | The chain object that contains the chain information. |
| buttonText | string | The text to display on the button. |
| loadingText | string | The text to display on the button when the chain is being added. |
| renderButton | function | A function that returns a custom button. |
| onSuccess | function | A function that is called when the chain is successfully added. |
| onError | function | A function that is called when an error occurs while adding the chain. |
| buttonStyle | object | The style object to apply to the button. |
| buttonClassName | string | The class name to apply to the button. |



