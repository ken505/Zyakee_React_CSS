export const InlineStyle = () => {
  const containerStyle = {
    backgroundColor: "lavenderblush",
    boxShadow: "8px 8px 8px gainsboro",
    borderRadius: "4px",
    padding: "20px",
    margin: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    // margin: 0,
    color: "gray"
  };
  const buttonStyle = {
    color: "gray",
    border: "none",
    padding: "8px",
    backgroundColor: "pink",
    borderRadius: "4px",
    boxShadow: "4px 4px 4px gainsboro"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- What are you looking at -</p>
      <button style={buttonStyle}> Fuck off </button>
    </div>
  );
};
