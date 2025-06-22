import React from "react";
import ParticlesBackground from "./ParticlesBackground";

function App() {
  return (
    <div style={{ 
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      zIndex: -1
    }}>
      <ParticlesBackground />
    </div>
  );
}

export default App;

