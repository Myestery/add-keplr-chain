import "./types";

import * as React from "react";

import type { ChainInfo } from "@keplr-wallet/types";

interface KeplrAddChainButtonProps {
  chainInfo: ChainInfo;
  buttonText?: string;
  loadingText?: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  buttonStyle?: React.CSSProperties;
  buttonClassName?: string;
  renderButton?: (props: {
    onClick: () => void;
    disabled: boolean;
    isLoading: boolean;
    text: string;
  }) => React.ReactNode;
  children?: React.ReactNode;
}

const KeplrAddChainButton: React.FC<KeplrAddChainButtonProps> = ({
  chainInfo,
  buttonText = "Add Chain to Keplr",
  loadingText = "Adding...",
  onSuccess,
  onError,
  buttonStyle,
  buttonClassName,
  renderButton,
  children = <></>,
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const addChainToKeplr = async () => {
    setIsLoading(true);

    try {
      if (!window.keplr) {
        throw new Error("Keplr extension not found");
      }

      await window.keplr.experimentalSuggestChain(chainInfo);
      await window.keplr.enable(chainInfo.chainId);

      onSuccess?.();
    } catch (error) {
      if (!onError) {
        console.error("Failed to add chain to Keplr:", error);
      }
      onError?.(
        error instanceof Error ? error : new Error("Unknown error occurred")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const buttonContent = isLoading ? loadingText : buttonText;

  const defaultButton = (
    <button
      onClick={addChainToKeplr}
      disabled={isLoading}
      style={buttonStyle}
      className={buttonClassName}>
      {buttonContent || children}
    </button>
  );

  const customButton = renderButton
    ? renderButton({
        onClick: addChainToKeplr,
        disabled: isLoading,
        isLoading,
        text: buttonContent,
      })
    : defaultButton;

  return <div>{customButton}</div>;
};
export { KeplrAddChainButton };
