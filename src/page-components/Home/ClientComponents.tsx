"use client"

import { MutableRefObject, useRef } from "react";

import campNorthThumbnail from "../../../public/home/images/campNorth.jpg"
import campSouthThumbnail from "../../../public/home/images/campSouth.jpg"
import slhyThumbnail from "../../../public/home/images/slhy-thumbnail.jpg"

enum Direction { Left, Right }
export function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (amount: number, d: Direction) => () => {
    if (containerRef.current?.scrollLeft === undefined) return;
    if (d === Direction.Left)
      containerRef.current.scrollLeft -= amount;
    else
      containerRef.current.scrollLeft += amount;
  }

  const handleMouseDown = (d: Direction) => () => intervalRef.current = setInterval(scroll(5, d), 1);
  const handleMouseUp = () => clearInterval(intervalRef.current as any);

  return (
    <div className="flex flex-col justify-center text-white flex-shrink-0 gap-8 py-32">
      <h2 className="text-[4.5rem] pl-32"><span className="font-['Noto_Serif_TC'] font-[900]">專題計劃</span> <span className="text-2xl font-bold text-gray-300">近期活動、計畫</span></h2>
      <div className="flex overflow-x-scroll overflow-y-hidden flex-shrink-0 gap-32 px-32 py-10 no-scrollbar" ref={containerRef}>
        <div className="flex gap-4 flex-shrink-0">
          <div className="min-w-[25rem] min-h-[20rem] bg-cover bg-left rounded-2xl" style={{backgroundImage: `url(${campNorthThumbnail.src})`}}></div>
          <div className="flex flex-col gap-3">
            <h4 className="text-gray-500 font-bold text-2xl">公益兒童程式教育營隊</h4>
            <h3 className="font-bold text-5xl">FunBrain種子計畫 - 北區</h3>
            <p className="text-gray-500 text-2xl pt-3">內文</p>
          </div>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <div className="min-w-[30rem] min-h-[20rem] bg-cover bg-center rounded-2xl" style={{backgroundImage: `url(${campSouthThumbnail.src})`}}></div>
          <div className="flex flex-col gap-3">
            <h4 className="text-gray-500 font-bold text-2xl">公益兒童程式教育營隊</h4>
            <h3 className="font-bold text-5xl">FunBrain種子計畫 - 南區</h3>
            <p className="text-gray-500 text-2xl pt-3">內文</p>
          </div>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <div className="min-w-[30rem] min-h-[20rem] bg-cover bg-center rounded-2xl" style={{backgroundImage: `url(${slhyThumbnail.src})`}}></div>
          <div className="flex flex-col gap-3">
            <h4 className="text-gray-500 font-bold text-2xl">四校聯合茶會</h4>
            <h3 className="font-bold text-5xl">松崙和淵聯合茶會暨幹部交接</h3>
            <p className="text-gray-500 text-2xl pt-3">內文</p>
          </div>
        </div>
      </div>
      <div className="flex self-end gap-10 pr-32">
        <button onMouseDown={handleMouseDown(Direction.Left)} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onDoubleClick={scroll(10000, Direction.Left)} className="border-solid border-2 border-yellow-300 rounded-xl text-4xl pb-1 px-3 text-yellow-300">{"<"}</button>
        <button onMouseDown={handleMouseDown(Direction.Right)} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onDoubleClick={scroll(10000, Direction.Right)} className="border-solid border-2 border-yellow-300 rounded-xl text-4xl pb-1 px-3 text-yellow-300">{">"}</button>
      </div>
    </div>
  )
}
