export function formatWalletAddress(
  walletAddress: string,
  startChars: number = 8,
  endChars: number = 3
): string {
  if (walletAddress.length <= startChars + endChars) {
    return walletAddress;
  }
  const start = walletAddress.slice(0, startChars);
  const end = walletAddress.slice(-endChars);
  return `${start}...${end}`;
}
