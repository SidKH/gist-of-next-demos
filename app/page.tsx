export default function Home() {
  return (
    <div>
      <div
        style={{ height: "100svh" }}
        className="relative flex gap-4 items-center justify-center"
      >
        <img
          src="https://picsum.photos/id/846/1000/1000"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bg-black/70 text-white left-0 top-0 w-full h-full flex items-center justify-center text-5xl font-bold">
          100svh
        </div>
        <p className="absolute bottom-0 text-center p-4 left-0 w-full">
          Scroll to continue
        </p>
      </div>
      <div className="relative h-screen bg-white text-black flex items-center justify-center text-4xl font-bold" />
    </div>
  );
}
