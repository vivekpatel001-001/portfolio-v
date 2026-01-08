import React, { useState } from 'react';
import BlurText from "./BluerText";

function Aboutme() {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-gray-950 py-20 h-120">
      <section className="text-white">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">

          {/* STEP 1 */}
          <BlurText
            text=" // About Me"
            animateBy="words"
            direction="top"
            delay={120}
           className="text-6xl font-bold mb-8 bg-linear-to-r text-cyan-400 bg-clip-text"
            onAnimationComplete={() => setStep(1)}
          />

          {/* STEP 2 */}
          {step >= 1 && (
            <BlurText
              text="Passionate About Innovation"
              animateBy="words"
              direction="bottom"
              delay={100}
              className="text-4xl font-bold text-yellow-400 mb-6"
              onAnimationComplete={() => setStep(2)}
            />
          )}

          {/* STEP 3 */}
          {step >= 2 && (
            <BlurText
              text="I am an enthusiastic full-stack developer with a strong foundation in modern web technologies. I love solving problems and crafting intuitive, user-friendly digital experiences while constantly improving my skills."
              animateBy="letters"
              direction="bottom"
              delay={20}
              className="text-2xl  max-w-4xl mx-auto"
            />
          )}

        </div>
      </section>
    </div>
  );
}

export default Aboutme;
