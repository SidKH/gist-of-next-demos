export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <dotlottie-player
        src="https://lottie.host/99566d85-76f5-4a70-ab92-5913493773b2/hRXYK6B0qZ.lottie"
        background="transparent"
        speed="1"
        style={{
          width: "300px",
          height: "300px",
        }}
        loop
        autoplay
      />
    </div>
  );
}
