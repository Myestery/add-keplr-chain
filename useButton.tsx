import React, { FunctionComponent } from "react";

import { KeplrAddChainButton } from "./src/index";
import { createRoot } from "react-dom/client";

interface ButtonProps {}

const chainId = "nillion-chain-testnet-1";
const chainInfo = {
  chainId: chainId,
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

// ... (chainInfo object remains the same)

const Button: FunctionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}>
      <KeplrAddChainButton
        chainInfo={chainInfo}
        buttonText='Add Nillion Testnet'
        loadingText='Adding Chain...'
        successText='Nillion Testnet Added Successfully!'
        errorText='Failed to Add Chain. Please Try Again.'
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
        renderStatus={(status, text) => (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: status === "success" ? "#48bb78" : "#f56565",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              opacity: status === "idle" ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}>
            {text}
          </div>
        )}
      />
    </div>
  );
};

// Add this CSS to your document or a separate stylesheet
const style = document.createElement("style");
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
document.head.appendChild(style);

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<Button />);
