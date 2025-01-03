import Image from "next/image";
import Hero from "./components/hero";
import Latestproduct from "./components/latestproduct";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Latestproduct/>
    </div>
  );
}
