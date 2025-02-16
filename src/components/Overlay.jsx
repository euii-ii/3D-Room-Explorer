import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
          Raindrops tapped on the window as the candle flickered.
          </h1>
          <p className="text-gray-500">The coffee steam curled into the morning air.</p>
          <p className="mt-3">A lone firefly flickered in the dark.</p>
          <ul className="leading-9">
            <li>Waves kissed the shore and retreated.</li>
            <li>Footsteps echoed in the empty hallway.</li>
            <li>A key turned, and the door creaked open.</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
          Leaves danced in the autumn breeze.
          </h1>
          <ul className="leading-9">
            <li>The old clock ticked, steady and slow.</li>
            <li>Stars blinked in the silent sky.</li>
            <li>The wind whispered through the tall grass.</li>
            <li>A single rose petal fell to the ground.</li>
          </ul>
        
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
          Distant thunder rumbled over the hills
          </h1>
          <p className="text-gray-500">
          A cat’s purr filled the quiet room
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
           <a href="#">Frost formed delicate patterns on the glass</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
