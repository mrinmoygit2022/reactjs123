import Chai from "./chai";

function App() {
  return (
    <>
      <Chai />
      <div style={{ width: "80%", margin: "auto" }}>
        <h2
          style={{
            textAlign: "left",
            color: "#2B2E63",
            backgroundColor: "#57ADBF",
            margin: "0px",
            padding: "10px",
          }}
        >
          Vite + React | Mrinmoy
        </h2>
        <p style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the Industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
}

export default App;
