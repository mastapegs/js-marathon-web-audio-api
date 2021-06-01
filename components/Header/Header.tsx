import { FC } from "react";
import { Emoji } from "../Emoji";

export const Header: FC = () => (
  <>
    <header className="p-6 bg-blue-500 text-white font-semibold text-2xl">
      <span>
        <span className="mr-2">
          <Emoji symbol="🎵" label="Musical Note" />
        </span>
        Web Audio API
      </span>
    </header>
  </>
);
