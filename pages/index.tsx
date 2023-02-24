import { useEffect, useRef, useState } from "react";
import Archive from "./Archive";
import Contact from "./Contact";
import Footer from "./Footer";
import Main from "./Main";
import NavBar from "./NavBar";
import Project from "./Project";
import Skill from "./Skill";

export default function Home() {
  const scrollRef = useRef<null[] | HTMLDivElement[]>([]);
  const [navName, setNavName] = useState("home");

  useEffect(() => {
    if (scrollRef) {
      let observer: IntersectionObserver;
      observer = new IntersectionObserver(
        ([event]) => {
          const target = event.target as HTMLElement;
          if (event.isIntersecting) {
            setNavName(target.id);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(scrollRef.current[0] as Element);
    }
  }, [scrollRef]);

  useEffect(() => {
    if (scrollRef) {
      let observer: IntersectionObserver;
      observer = new IntersectionObserver(
        ([event]) => {
          const target = event.target as HTMLElement;
          if (event.isIntersecting) {
            setNavName(target.id);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(scrollRef.current[1] as Element);
    }
  }, [scrollRef]);

  useEffect(() => {
    if (scrollRef) {
      let observer: IntersectionObserver;
      observer = new IntersectionObserver(
        ([event]) => {
          const target = event.target as HTMLElement;
          if (event.isIntersecting) {
            setNavName(target.id);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(scrollRef.current[2] as Element);
    }
  }, [scrollRef]);

  useEffect(() => {
    if (scrollRef) {
      let observer: IntersectionObserver;
      observer = new IntersectionObserver(
        ([event]) => {
          const target = event.target as HTMLElement;
          if (event.isIntersecting) {
            setNavName(target.id);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(scrollRef.current[3] as Element);
    }
  }, [scrollRef]);

  useEffect(() => {
    if (scrollRef) {
      let observer: IntersectionObserver;
      observer = new IntersectionObserver(
        ([event]) => {
          const target = event.target as HTMLElement;
          if (event.isIntersecting) {
            setNavName(target.id);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(scrollRef.current[4] as Element);
    }
  }, [scrollRef]);

  const handleScrollView = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const name = target.innerText;
    const category = {
      HOME: 0,
      SKILL: 1,
      PROJECT: 2,
      ARCHIVE: 3,
      CONTACT: 4,
    };
    if (
      name === "HOME" ||
      name === "SKILL" ||
      name === "PROJECT" ||
      name === "ARCHIVE" ||
      name === "CONTACT"
    ) {
      scrollRef.current[category[name]]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar navName={navName} handleScrollView={handleScrollView} />
      <div className="px-0 md:px-[10%]">
        <div ref={(el) => (scrollRef.current[0] = el)} id="home">
          <Main />
        </div>
        <div ref={(el) => (scrollRef.current[1] = el)} id="skill">
          <Skill />
        </div>
        <div ref={(el) => (scrollRef.current[2] = el)} id="project">
          <Project />
        </div>
        <div ref={(el) => (scrollRef.current[3] = el)} id="archive">
          <Archive />
        </div>
        <div ref={(el) => (scrollRef.current[4] = el)} id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}
