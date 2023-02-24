import { AiFillGithub, AiOutlineRead, AiOutlineLink } from "react-icons/ai";

export default function Archive() {
  return (
    <div className="w-[100%] md:h-[100vh] pt-[10vh]">
      <div className="w-[100%] h-[100%] flex flex-col md:flex-row justify-center items-center">
        <div className="text-center flex flex-col items-center w-[100%] md:w-[40%] h-[70%] bg-white drop-shadow-lg rounded-xl mx-5">
          <AiFillGithub size={40} />
          <div>Github</div>
          <a href="https://github.com/kjindev" target="_blank">
            <div className="flex items-center hover:text-sky-500 hover:cursor-pointer">
              <AiOutlineLink />
              <div className="ml-1 text-sm">github.com/kjindev</div>
            </div>
          </a>
        </div>
        <div className="text-center flex flex-col items-center w-[100%] md:w-[40%] h-[70%] bg-white drop-shadow-lg rounded-xl mx-5">
          <AiOutlineRead size={40} />
          <div>Blog</div>
          <a href="https://inthedev.tistory.com" target="_blank">
            <div className="flex items-center hover:text-sky-500 hover:cursor-pointer">
              <AiOutlineLink />
              <div className="ml-1 text-sm">inthedev.tistory.com</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
