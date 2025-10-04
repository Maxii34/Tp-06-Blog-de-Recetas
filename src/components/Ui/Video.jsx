
export const Video = () => {
  return (
    <div className="video-container">
      <video
        src="/7775379-hd_1280_720_30fps.mp4" // 🔗 acá va el link directo del video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "360px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};
