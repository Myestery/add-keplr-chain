import "./types";

import React, { useState } from "react";

import type { ChainInfo } from "@keplr-wallet/types";

interface KeplrAddChainButtonProps {
  chainInfo: ChainInfo;
  buttonText?: string;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  buttonStyle?: React.CSSProperties;
  buttonClassName?: string;
  successStyle?: React.CSSProperties;
  successClassName?: string;
  errorStyle?: React.CSSProperties;
  errorClassName?: string;
  renderButton?: (props: {
    onClick: () => void;
    disabled: boolean;
    isLoading: boolean;
    text: string;
  }) => React.ReactNode;
  renderStatus?: (
    status: "idle" | "success" | "error",
    text: string
  ) => React.ReactNode;
}

const KeplrAddChainButton: React.FC<KeplrAddChainButtonProps> = ({
  chainInfo,
  buttonText = "Add Chain to Keplr",
  loadingText = "Adding...",
  successText = "Chain added successfully!",
  errorText = "Failed to add chain. Please try again.",
  onSuccess,
  onError,
  buttonStyle,
  buttonClassName,
  successStyle,
  successClassName,
  errorStyle,
  errorClassName,
  renderButton,
  renderStatus
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const addChainToKeplr = async () => {
    setIsLoading(true);
    setStatus("idle");

    try {
      if (!window.keplr) {
        throw new Error("Keplr extension not found");
      }

      await window.keplr.experimentalSuggestChain(chainInfo);
      await window.keplr.enable(chainInfo.chainId);

      setStatus("success");
      onSuccess?.();
    } catch (error) {
      console.error("Failed to add chain to Keplr:", error);
      setStatus("error");
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
      {buttonContent}
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

  const statusMessage =
    status === "success" ? (
      <p style={successStyle} className={successClassName}>
        {successText}
      </p>
    ) : status === "error" ? (
      <p style={errorStyle} className={errorClassName}>
        {errorText}
      </p>
    ) : null;

  const customStatus = renderStatus
    ? renderStatus(status, status === "success" ? successText : errorText)
    : statusMessage;

  return (
    <div>
      {customButton}
      {customStatus}
    </div>
  );
};
export { KeplrAddChainButton };
export default KeplrAddChainButton;
