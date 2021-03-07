export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>- Styled JSX -</p>
        <button className="button">Fuck off</button>
      </div>
      <style jsx="ture">{`
        .container {
          background-color: lavenderblush;
          box-shadow: 8px 8px 8px gainsboro;
          border-radius: 4px;
          padding: 20px;
          margin: 20px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: gray;
        }

        .button {
          color: gray;
          border: none;
          padding: 8px;
          background-color: pink;
          border-radius: 4px;
          box-shadow: 4px 4px 4px gainsboro;
          transition: all 0.2s;
        }
      `}</style>
    </>
  );
};
