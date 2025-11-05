export const Video = () => {
  return (
    <div className="hero-container">
      <img
        src="https://images.pexels.com/photos/13918183/pexels-photo-13918183.jpeg" 
        alt="Tortas & Co."
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1
        }}
      />
      <div className="hero-content">
        <h1>Tortas & Co.</h1>
        <div className="divider"></div>
        <p>Recetas para el hogar</p>
      </div>
    </div>
  );
};