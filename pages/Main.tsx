import { useEffect, useRef, useState } from "react";

export default function Main() {
  const text = "Front-End Developer";
  const textRef = useRef<HTMLInputElement>(null);
  const effectRef = useRef<HTMLInputElement>(null);
  const [effectEnd, setEffectEnd] = useState(false);

  useEffect(() => {
    if (textRef.current?.innerHTML === "") {
      let i = 0;
      const textEffect = setInterval(() => {
        if (i < text.length && textRef.current) {
          let inputText = text[i];
          textRef.current.innerHTML += inputText;
          i++;
        } else if (i === text.length && textRef.current) {
          setEffectEnd(true);
          effectRef.current?.classList.remove("invisible");
          effectRef.current?.classList.add("fadein-effect");
        }
      }, 120);
      return () => clearInterval(textEffect);
    }
  }, []);

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div>
        <span ref={textRef} className="title-font text-2xl md:text-6xl"></span>
        <span
          className={
            effectEnd
              ? "link text-2xl md:text-6xl text-sky-300"
              : "text-2xl md:text-6xl text-sky-300"
          }
        >
          |
        </span>
        <div
          ref={effectRef}
          className="invisible mt-10 text-center text-sm md:text-base"
        >
          (소개)
        </div>
      </div>
    </div>
  );
}
