/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    background-color: lavenderblush;
    box-shadow: 8px 8px 8px gainsboro;
    border-radius: 4px;
    padding: 20px;
    margin: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: gray;
  `;
  const buttonStyle = css`
    color: gray;
    border: none;
    padding: 8px;
    background-color: pink;
    border-radius: 4px;
    box-shadow: 4px 4px 4px gainsboro;
    transition: all 0.2s;
    &:hover {
      background-color: rgb(252, 218, 224);
      box-shadow: 4px 4px 4px rgb(240, 240, 240);
      color: rgb(177, 177, 177);
      cursor: pointer;
    }
  `;
  return (
    <div css={containerStyle}>
      <p>- Emotion -</p>
      <button css={buttonStyle}> Son of a</button>
    </div>
  );
};
