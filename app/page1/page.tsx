import { Counter } from "@/components/counter";

export default function Page1() {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <h1>Page 1</h1>
      <div className="animate-in ease-(--spring-easing) duration-(--spring-duration) slide-in-from-bottom-10 fade-in">
        <Counter />
      </div>
    </div>
  );
}
