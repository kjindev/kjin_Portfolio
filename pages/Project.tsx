import { useRef, useState } from "react";

export default function Project() {
  const project1 = useRef<HTMLInputElement>(null);
  const project2 = useRef<HTMLInputElement>(null);
  const project3 = useRef<HTMLInputElement>(null);

  const style =
    "mx-1 md:mx-0 text-xs md:text-sm bg-gray-200 px-3 py-2 my-1 md:my-2 hover:cursor-pointer hover:bg-sky-200";
  const styleClicked =
    "mx-1 md:mx-0 bg-sky-200 text-xs md:text-sm px-3 py-2 my-1 md:my-2 hover:cursor-pointer";
  const [menuName, setMenuName] = useState("project1");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.innerText === "PROJECT #1") {
      project1.current?.classList.remove("hidden");
      project2.current?.classList.add("hidden");
      project3.current?.classList.add("hidden");
      setMenuName("project1");
    } else if (target.innerText === "PROJECT #2") {
      project1.current?.classList.add("hidden");
      project2.current?.classList.remove("hidden");
      project3.current?.classList.add("hidden");
      setMenuName("project2");
    } else if (target.innerText === "PROJECT #3") {
      project1.current?.classList.add("hidden");
      project2.current?.classList.add("hidden");
      project3.current?.classList.remove("hidden");
      setMenuName("project3");
    }
  };

  return (
    <div className="pt-[10vh] md:py-[10vh]">
      <div className="title-font text-2xl md:text-4xl text-center">Project</div>
      <div className="w-[100%] md:h-[100vh] flex flex-col md:flex-row justify-center">
        <div
          onClick={handleClick}
          className="flex justify-center md:justify-start md:flex-col mt-5"
        >
          <div className={menuName === "project1" ? styleClicked : style}>
            PROJECT #1
          </div>
          <div className={menuName === "project2" ? styleClicked : style}>
            PROJECT #2
          </div>
          <div className={menuName === "project3" ? styleClicked : style}>
            PROJECT #3
          </div>
        </div>
        <div className="p-3 md:p-0 w-[100%] md:w-[80%] h-[100%]">
          <div ref={project1} className="w-[100%] h-[100%]">
            <div className="p-5 w-[100%] h-[80vh] bg-white drop-shadow-xl rounded-xl">
              <div className="text-2xl">서울시립미술관 전시 안내</div>
              <div className="flex flex-col md:flex-row">
                <div className="w-[100%] h-[20vh] md:w-[50%]">img</div>
                <div className="w-[100%] md:w-[50%]">
                  <div>참여 인원 | 1인 (개인 프로젝트)</div>
                  <div>
                    <span>기술 스택 |</span>
                    <div className="flex flex-wrap items-center">
                      <div className="bg-[#F7DF1E] text-sm px-1">
                        JavaScript
                      </div>
                      <div className="bg-[#61DAFB] text-sm px-1">React</div>
                      <div className="bg-[#FF4154] text-sm px-1 text-white">
                        React Query
                      </div>
                      <div className="bg-[#764ABC] text-sm px-1 text-white">
                        Redux Toolkit
                      </div>
                      <div className="bg-[#FFCA28] text-sm px-1">Firebase</div>
                      <div className="bg-[#06B6D4] text-sm px-1 text-white">
                        TailwindCSS
                      </div>
                    </div>
                  </div>

                  <div>주요 기능 |</div>
                  <div>개발 목적 |</div>
                </div>
              </div>
            </div>
          </div>
          <div ref={project2} className="hidden w-[100%] h-[100%]">
            <div className="p-5 w-[100%] h-[80vh] bg-white drop-shadow-xl rounded-xl">
              <div className="text-2xl">서울시 문화행사 안내</div>
              <div className="flex">
                <div className="w-[50%]">img</div>
                <div className="w-[50%]">
                  <div>참여 인원 | 1인 (개인 프로젝트)</div>
                  <div>
                    <span>기술 스택 |</span>
                    <div className="flex flex-wrap items-center">
                      <div className="bg-[#3178C6] text-sm px-1 text-white">
                        TypeScript
                      </div>
                      <div className="bg-[#61DAFB] text-sm px-1">React</div>
                      <div className="bg-[#FF4154] text-sm px-1 text-white">
                        React Query
                      </div>
                      <div className="bg-[#764ABC] text-sm px-1 text-white">
                        Redux Toolkit
                      </div>
                      <div className="bg-[#06B6D4] text-sm px-1 text-white">
                        TailwindCSS
                      </div>
                    </div>
                  </div>

                  <div>주요 기능 |</div>
                  <div>개발 목적 |</div>
                </div>
              </div>
            </div>
          </div>
          <div ref={project3} className="hidden w-[100%] h-[100%]">
            <div className="p-5 w-[100%] h-[80vh] bg-white drop-shadow-xl rounded-xl">
              <div className="text-2xl">Portfolio</div>
              <div className="flex">
                <div className="w-[50%]">img</div>
                <div className="w-[50%]">
                  <div>참여 인원 | 1인 (개인 프로젝트)</div>
                  <div>
                    <span>기술 스택 |</span>
                    <div className="flex flex-wrap items-center">
                      <div className="bg-[#3178C6] text-sm px-1 text-white">
                        TypeScript
                      </div>
                      <div className="bg-black text-sm px-1 text-white">
                        Next.js
                      </div>
                      <div className="bg-[#06B6D4] text-sm px-1 text-white">
                        TailwindCSS
                      </div>
                    </div>
                  </div>

                  <div>주요 기능 |</div>
                  <div>개발 목적 |</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
