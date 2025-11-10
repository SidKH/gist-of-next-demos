import { SliderBox } from "@/components/slider-box";

export default function Page2() {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <h1>Page 2</h1>
      <div className="animate-in ease-(--spring-easing) duration-(--spring-duration) slide-in-from-bottom-10 fade-in">
        <SliderBox />
      </div>
    </div>
  );
}
