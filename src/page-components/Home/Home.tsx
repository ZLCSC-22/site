import bannerBg from "../../../public/home/images/banner-bg-2.jpg"
import fakeImg from "../../../public/home/images/fake-img.png"

import aboutUs from "../../../public/home/images/about_us.jpeg"

import hcjThumbnail from "../../../public/home/images/html-js-css-thumbnail.jpg"
import seleniumThumbnail from "../../../public/home/images/selenium-thumbnail.jpg"
import arduinoThumbnail from "../../../public/home/images/arduino-thumbnail.jpeg"
import { Projects } from "./ClientComponents"

export function Home() {
  return (
    <div className="w-full h-[100dvh] overflow-y-scroll overflow-x-hidden bg-opacity-0">
      <div className="h-[101vh] w-full bg-cover bg-center bg-opacity-80 border-solid border-gray-900 border-b-2 shadow-2xl" style={{backgroundImage: `url(${bannerBg.src})`}}>
        <div className="h-full w-full flex items-center text-white shadow-[inset_15rem_0_45rem_15rem_#00000090]">
          <div className="flex flex-col gap-4 justify-start pl-[10%] font-['Noto_Serif_TC']">
            <h1 className="text-[6rem] shadow-2xl font-[900]">中崙資研</h1>
            <h2 className="text-4xl pl-2 shadow-2xl">創新求知，領航未來</h2>
          </div>
        </div>
      </div>
      <div className="mx-8">
        <div className="flex flex-row justify-center items-center text-white p-8 py-32">
          <div className="w-full max-w-[75rem] flex flex-row justify-between gap-10 flex-wrap-reverse max-lg:justify-center">
            <div className="flex flex-col items-start justify-between">
              <h2 className="text-[6rem] font-[900] font-['Noto_Serif_TC'] max-xl:text-[5rem] max-lg:w-full text-center">關於我們</h2>
              <p className="text-[1.8rem] w-[30rem] mb-8 font-['Noto_Serif_TC'] max-xl:w-[25rem]">我們是中崙資訊研習社，致力於提供一個平台讓大家分享和學習最新的科技知識和技能，我們的宗旨是“創新求知，領航未來”</p>
              <div className="w-full flex justify-center">
                <button className="text-2xl border-yellow-300 text-yellow-300 border-[2px] p-2">瞭解更多</button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[30rem] h-[30rem] max-xl:w-[25rem] max-xl:h-[25rem] bg-center bg-cover" style={{backgroundImage: `url(${aboutUs.src})`}}></div>
            </div>
          </div>
        </div>
        <div className=" text-white flex flex-col justify-around items-center px-8 py-32 gap-8">
          <h2 className="text-[4rem] font-['Noto_Serif_TC'] font-[900]">研究方向</h2>
          <div className="w-full max-w-[60rem] flex justify-between flex-wrap gap-8 max-lg:justify-center">
            <div className="flex flex-col gap-5">
              <div className="w-[15rem] h-[15rem] bg-cover bg-center" style={{backgroundImage: `url(${hcjThumbnail.src})`}}></div>
              <div className="text-left text-white leading-5">
                <p className="text-2xl">HTML、CSS、JS</p>
                <p className="text-2xl">前端開發</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[15rem] h-[15rem] bg-center bg-cover" style={{backgroundImage: `url(${seleniumThumbnail.src})`}}></div>
              <div className="text-left text-white leading-5">
                <p className="text-2xl">Python 爬蟲</p>
                <p className="text-2xl">小工具開發</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-[15rem] h-[15rem] bg-center bg-cover" style={{backgroundImage: `url(${arduinoThumbnail.src})`}}></div>
              <div className="text-left text-white leading-5">
                <p className="text-2xl">Arduino、ESP32</p>
                <p className="text-2xl">軟硬體整合開發</p>
              </div>
            </div>
          </div>
          <button className="text-2xl border-yellow-300 text-yellow-300 border-[2px] p-2">瞭解更多</button>
        </div>
        <div className="flex flex-col justify-center items-center  text-white p-4] py-32">
          <div className="relative">
            <h2 className="text-[4.5rem] font-[900] text-center" style={{textShadow: "2px 0px 0px rgba(255,0,254,1)"}}>在技術的海洋中悠游</h2>
            <span className="absolute top-0 left-0 z-[-10] text-[4.5rem] font-[900] text-[#FFFFFF01] text-center" style={{textShadow: "-1px -1px 0px rgba(0,255,230,1)"}}>在技術的海洋中悠游</span>
          </div>
          <p className="border-solid border-blue-800 border-4 text-[1.6rem] w-[40rem] p-2 text-center font-['Noto_Serif_TC'] max-sm:w-full mx-10">在資訊研習社，我們相信技術是無窮無盡的海洋， 等待著我們去探索和發現。每一次的學習和實踐， 都是一次新的航行，帶領我們邁向知識的彼岸。</p>
        </div>
        <div className="flex justify-center items-center text-white px-4 py-32">
          <div className="w-full max-w-[75rem] flex flex-row flex-wrap justify-between max-lg:gap-6 max-sm:justify-center">
            <div>
              <div className="flex flex-col items-start justify-between pb-32">
                <h2 className="text-[4.5rem] mb-5 font-['Noto_Serif_TC'] font-[900]">教學計劃</h2>
                <p className="text-[1.6rem] w-[20rem] mb-8">為期上下學期的時間，我們將教大家網站的開發技術，並且帶領大家製作出自己的網頁專案。</p>
                <button className="text-2xl border-yellow-300 text-yellow-300 border-[2px] p-2">瞭解更多</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 max-[890px]:grid-cols-1">
              <div className="flex flex-col gap-5 w-[17rem] h-[17rem] p-7 rounded-3xl bg-gradient-to-r from-indigo-700 to-purple-700 max-lg:w-[16rem] max-lg:h-[16rem]">
                <h3 className="text-4xl font-bold max-lg:text-3xl">初探網頁開發</h3>
                <p className="text-2xl max-lg:text-xl">HTML、CSS基本介 紹、網站運作架構。</p>
                <p className="text-2xl max-lg:text-xl w-full self-end text-right mt-auto font-bold">九月~十月</p>
              </div>
              <div className="flex flex-col gap-5 w-[17rem] h-[17rem] p-7 rounded-3xl bg-gradient-to-r from-indigo-700 to-purple-700 max-lg:w-[16rem] max-lg:h-[16rem]">
                <h3 className="text-4xl font-bold">深入網頁前端</h3>
                <p className="text-2xl max-lg:text-xl">進階CSS、JavaScript 介紹。</p>
                <p className="text-2xl w-full self-end text-right mt-auto font-bold">十一月~一月</p>
              </div>
              <div className="flex flex-col gap-5 w-[17rem] h-[17rem] p-7 rounded-3xl bg-gradient-to-r from-indigo-700 to-purple-700 max-lg:w-[16rem] max-lg:h-[16rem]">
                <h3 className="text-4xl font-bold">初探網頁後端</h3>
                <p className="text-2xl max-lg:text-xl">Python Flask、生活 中的API、專案製作。</p>
                <p className="text-2xl w-full self-end text-right mt-auto font-bold">二月~四月</p>
              </div>
              <div className="flex flex-col gap-5 w-[17rem] h-[17rem] p-7 rounded-3xl bg-gradient-to-r from-indigo-700 to-purple-700 max-lg:w-[16rem] max-lg:h-[16rem]">
                <h3 className="text-4xl font-bold">專案製作</h3>
                <p className="text-2xl max-lg:text-xl">開發出完整的網頁應用程式。</p>
                <p className="text-2xl w-full self-end text-right mt-auto font-bold">五月~六月</p>
              </div>
            </div>
          </div>
        </div>
        <Projects/>
      </div>
    </div>
  )
}
