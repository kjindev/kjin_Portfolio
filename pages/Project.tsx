import { useRef, useState } from "react";

export default function Project() {
  const project1 = useRef<HTMLInputElement>(null);
  const project2 = useRef<HTMLInputElement>(null);
  const project3 = useRef<HTMLInputElement>(null);

  const style =
    "text-xs bg-gray-200 my-1 px-3 py-2 hover:cursor-pointer hover:bg-sky-200";
  const styleClicked = "bg-sky-200 text-xs my-1 px-3 py-2 hover:cursor-pointer";
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
    <div className="pt-[10vh] tab:py-[10vh]">
      <div className="title-font text-2xl tab:text-3xl pc:text-4xl text-center">
        Project
      </div>
      <div className="w-[100%] pc:h-[100vh] flex flex-col tab:flex-row justify-center">
        <div
          onClick={handleClick}
          className="flex justify-center tab:justify-start tab:flex-col mt-5"
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
        <div className="p-3 tab:p-0 w-[100%] tab:w-[90%] tab:h-[100%]">
          <div ref={project1} className="w-[100%] h-[100%]">
            <div className="p-5 w-[100%] h-[80vh] bg-white drop-shadow-xl rounded-xl">
              <div className="text-2xl">????????????????????? ?????? ??????</div>
              <div className="text-gray-500">| ?????? ????????????</div>
              <div className="mt-2 flex flex-col pc:flex-row">
                <div className="w-[100%] pc:w-[45%] bg-gray-100">img</div>
                <div className="p-3 w-[100%] pc:w-[55%]">
                  <div className="mb-4">
                    <div className="font-bold text-lg">?????? ??????</div>
                    <div>
                      - JavaScript, React, React Query, Redux Toolkit, Firebase,
                      Tailwind CSS
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold text-lg">?????? ??????</div>
                    <div>
                      <div>
                        - React Query??? ????????????????????? API, ??????????????? API ??????
                        ??????
                      </div>
                      <div>- Redux Toolkit??? ????????? ????????????</div>
                      <div>
                        - Firebase??? ????????? ????????? ?????? ??? ????????? ?????? ?????? ??????
                      </div>
                      <div>- Tailwind CSS??? ????????? ????????? ???????????? ??????</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold text-lg">?????? ??????</div>
                    <div>
                      <div>- ???????????? ???????????? ????????? ?????? ??????</div>

                      <div>
                        - API ?????? ??? ???????????? CORS ????????? ?????? ?????? ??? ??????
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold text-lg">??????</div>
                    <div className="flex items-center">
                      - Page
                      <a
                        href="https://kjindev.github.io/MuseumProject/"
                        target="_blank"
                      >
                        <div className="flex items-center text-sky-400 hover:cursor-pointer">
                          <div className="italic ml-1 text-sm">
                            kjindev.github.io/MuseumProject
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="flex items-center">
                      - Github
                      <a
                        href="https://github.com/kjindev/MuseumProject"
                        target="_blank"
                      >
                        <div className="flex items-center text-sky-400 hover:cursor-pointer">
                          <div className="italic ml-1 text-sm">
                            github.com/kjindev/MuseumProject
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={project2} className="hidden w-[100%] h-[100%]">
            <div className="p-5 w-[100%] h-[80vh] bg-white drop-shadow-xl rounded-xl">
              <div className="text-2xl">????????? ???????????? ?????? </div>
              <div className="text-gray-500">| ?????? ????????????</div>
              <div className="mt-2 flex flex-col pc:flex-row">
                <div className="w-[100%] pc:w-[45%] bg-gray-100">img</div>
                <div className="p-3 w-[100%] pc:w-[55%]">
                  <div className="mb-4">
                    <div className="font-bold text-lg">?????? ??????</div>
                    <div>
                      - TypeScript, React, React Query, Redux Toolkit, Tailwind
                      CSS
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold text-lg">?????? ??????</div>
                    <div>
                      <div>-</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold text-lg">?????? ??????</div>
                    <div>
                      <div>- TypeScript??? ?????? ??????</div>
                      <div>- SVG ???????????? ?????? ??????</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold text-lg">??????</div>
                    <div className="flex items-center">
                      - Page
                      {/*<a
                        href=""
                        target="_blank"
                      >
                        <div className="flex items-center text-sky-400 hover:cursor-pointer">
                          <div className="italic ml-1 text-sm">
                           
                          </div>
                        </div>
  </a>*/}
                    </div>
                    <div className="flex items-center">
                      - Github
                      {/*<a
                        href=""
                        target="_blank"
                      >
                        <div className="flex items-center text-sky-400 hover:cursor-pointer">
                          <div className="italic ml-1 text-sm">
                          
                          </div>
                        </div>
</a>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={project3} className="hidden w-[100%] h-[100%]">
            <div className="p-5 w-[100%] h-[80vh] bg-white drop-shadow-xl rounded-xl">
              <div className="text-2xl">Portfolio </div>
              <div className="text-gray-500">| ?????? ????????????</div>
              <div className="mt-2 flex flex-col pc:flex-row">
                <div className="w-[100%] pc:w-[45%] bg-gray-100">img</div>
                <div className="p-3 w-[100%] pc:w-[55%]">
                  <div className="mb-4">
                    <div className="font-bold text-lg">?????? ??????</div>
                    <div>- TypeScript, Next.js, Tailwind CSS</div>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold text-lg">?????? ??????</div>
                    <div>
                      <div>-</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold text-lg">?????? ??????</div>
                    <div>
                      <div>- Next.js??? ?????? ??????</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="font-bold text-lg">??????</div>
                    <div className="flex items-center">
                      - Page
                      {/*<a
                        href=""
                        target="_blank"
                      >
                        <div className="flex items-center text-sky-400 hover:cursor-pointer">
                          <div className="italic ml-1 text-sm"></div>
                        </div>
  </a>*/}
                    </div>
                    <div className="flex items-center">
                      - Github
                      <a
                        href="https://github.com/kjindev/kjin_Portfolio"
                        target="_blank"
                      >
                        <div className="flex items-center text-sky-400 hover:cursor-pointer">
                          <div className="italic ml-1 text-sm">
                            github.com/kjindev/kjin_Portfolio
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
