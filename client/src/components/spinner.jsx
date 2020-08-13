import React from "react";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";


const override = css`
  border-color: #3f51b5;
  position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        z-index: 9; }
`;

function Spinner() {
  return (
    <div className="sweet-loading">
      <PulseLoader
        css={override}
        size={20}
        color={"#3f51b5"}
      />
    </div>
  );
}

export default Spinner;