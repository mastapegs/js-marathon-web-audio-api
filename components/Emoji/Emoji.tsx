import { FC } from "react";

interface EmojiProps {
  symbol: string;
  label: string;
}

export const Emoji: FC<EmojiProps> = ({ symbol, label }) => (
  <>
    <span role="img" aria-label={label}>
      {symbol}
    </span>
  </>
);
