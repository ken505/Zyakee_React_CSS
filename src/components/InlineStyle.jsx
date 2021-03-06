export const InlineStyle = () => {
  const containerStyle = {
    color: "gray",
    backgroundColor: "lavenderblush",
    boxShadow: "8px 8px 8px gainsboro",
    borderRadius: "4px",
    padding: "20px",
    margin: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {};
  const buttonStyle = {};
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- What are you looking at -</p>
      <button style={buttonStyle}> Fuck off </button>
    </div>
  );
};
