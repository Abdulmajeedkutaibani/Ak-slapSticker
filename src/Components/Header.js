import React from "react";
import { useSpring, animated } from "react-spring";

/**
 * Header component for the application.
 *
 * This component displays a header with an animated sticker and some text.
 * The sticker uses a slap down animation which is created using react-spring.
 */
export default function Header() {
  /**
   * slapDownAnimation is a spring animation from react-spring.
   * It starts with the sticker scaled up and invisible, then scales it down and makes it visible.
   * The sticker also rotates 15 degrees during the animation.
   * The animation is configured with a tension of 1000 and a friction of 50, and starts after a delay of 1000ms.
   */
  const slapDownAnimation = useSpring({
    from: { transform: "scale(3)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1, rotate: 15 },
    config: { tension: 1000, friction: 50 },
    delay: 1000,
  });

  return (
    <header>
      {/* Header content */}
      <div className="flex justify-center items-center gap-2 ">
        <h1 className="happy-monkey-regular font-sans cursor-pointer text-7xl text-center my-2 rounded-xl">
          Slap{" "}
        </h1>

        {/* Animated sticker */}
        <animated.div
          style={{
            ...slapDownAnimation,
          }}
          className="-ml-[30px] -mt-[20px] bg-[#ffd23f] rounded-full w-72 h-20 flex items-center justify-center elevation-2"
        >
          <span className="text-[#ff006e] italic z-10 text-7xl happy-monkey-regular font-extrabold">
            Sticker
          </span>
        </animated.div>
      </div>

      {/* Additional text */}
      <animated.div className="mt-6 fredoka flex flex-col justify-center items-center p-4 gap-6 rounded-lg">
        <p className="w-[450px] text-2xl text-center text-[#1a535c] font-semibold">
          Have you ever said something so dumb, you just wanted to slap
          yourself?
        </p>

        <h1 className="flex flex-col gap-4 justify-center items-center text-4xl p-2 text-[#ff006e] font-semibold h-full ">
          Well now you can!
          <div className="animate-bounce text-4xl">&darr;</div>
        </h1>
      </animated.div>
    </header>
  );
}
