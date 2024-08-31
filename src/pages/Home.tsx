import bg from "../../public/home/images/bg.jpg"
import fakeImg from "../../public/home/images/fake-img.png"

export function Home() {
  return (
    <>
      <div className="h-[100vh] w-full bg-cover bg-center bg-opacity-80" style={{backgroundImage: `url(${bg.src})`}}>
        <div className="h-full w-full flex items-center text-white shadow-[inset_15rem_0_45rem_15rem_#000000A0]">
          <div className="flex flex-col gap-4 justify-start pl-[10%]">
            <h1 className="text-[6rem] shadow-2xl">中崙資研</h1>
            <h2 className="text-4xl pl-2 shadow-2xl">創新求知，領航未來</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center h-[40rem] bg-[#020b26] text-white p-8 min-h-[100vh]">
        <div className="w-full max-w-[75rem] flex flex-row flex-wrap justify-between">
          <div className="flex flex-col items-start justify-between">
            <h2 className="text-[6rem]">關於我們</h2>
            <p className="text-[1.8rem] w-[30rem] mb-8">我們是中崙資訊研習社，致力於提供一個平台讓大家分享和學習最新的科技知識和技能，我們的宗旨是“創新求知，領航未來”</p>
            <div className="w-full flex justify-center">
              <button className="font-[2.5rem] border-white border-[2px] p-2">瞭解更多</button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[30rem] h-[30rem]" style={{backgroundImage: `url(${fakeImg.src})`}}></div>
          </div>
        </div>
      </div>
      <div className="h-[100Vh] bg-[#020b26] text-white flex flex-col justify-around items-center px-8 min-h-[100vh]">
        <h2 className="text-[4rem]">研究方向</h2>
        <div className="w-full max-w-[60rem] flex justify-between flex-wrap gap-5">
          <div className="flex flex-col gap-5">
            <div className="w-[15rem] h-[15rem]" style={{backgroundImage: `url(${fakeImg.src})`}}></div>
            <div className="text-left text-white font-[2rem] leading-5">
              <p>HTML、CSS、JS</p>
              <p>前端開發</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-[15rem] h-[15rem]" style={{backgroundImage: `url(${fakeImg.src})`}}></div>
            <div className="text-left text-white font-[2rem] leading-5">
              <p>Python 爬蟲</p>
              <p>小工具開發</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-[15rem] h-[15rem]" style={{backgroundImage: `url(${fakeImg.src})`}}></div>
            <div className="text-left text-white font-[2rem] leading-5">
              <p>Arduino、ESP32</p>
              <p>軟硬體整合開發</p>
            </div>
          </div>
        </div>
        <button className="font-[2.5rem] border-white border-[2px] p-2">瞭解更多</button>
      </div>
      <div className="flex flex-col justify-center items-center h-[40rem] bg-[#020b26] text-white p-4 min-h-[100vh]">
        <h2 className="text-[4.5rem]">在技術的海洋中優游</h2>
        <p className="border-solid border-blue-800 border-4 text-[1.6rem] w-[40rem] p-2">在資訊研習社，我們相信技術是無窮無盡的海洋， 等待著我們去探索和發現。每一次的學習和實踐， 都是一次新的航行，帶領我們邁向知識的彼岸。</p>
      </div>
      <div className="flex justify-center items-center h-[40rem] bg-[#020b26] text-white p-4 min-h-[100vh]">
        <div className="w-full max-w-[75rem] flex flex-row flex-wrap justify-between">
          <div>
            <div className="flex flex-col items-start justify-between">
              <h2 className="text-[4.5rem] mb-5">教學計劃</h2>
              <p className="text-[1.6rem] w-[20rem] mb-8">為期上下學期的時間，我們將教大家網站的開發技術，並且帶領大家製作出自己的網頁專案。</p>
              <button className="font-[2.5rem] border-white border-[2px] p-2">瞭解更多</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-5 w-[18rem] h-[18rem] p-7 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600">
              <h3 className="text-4xl font-bold">初探網頁開發</h3>
              <p className="text-2xl">HTML、CSS基本介 紹、網站運作架構。</p>
              <p className="text-2xl w-full self-end text-right mt-auto font-bold">九月~十月</p>
            </div>
            <div className="flex flex-col gap-5 w-[18rem] h-[18rem] p-7 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600">
              <h3 className="text-4xl font-bold">初探網頁開發</h3>
              <p className="text-2xl">HTML、CSS基本介 紹、網站運作架構。</p>
              <p className="text-2xl w-full self-end text-right mt-auto font-bold">九月~十月</p>
            </div>
            <div className="flex flex-col gap-5 w-[18rem] h-[18rem] p-7 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600">
              <h3 className="text-4xl font-bold">初探網頁開發</h3>
              <p className="text-2xl">HTML、CSS基本介 紹、網站運作架構。</p>
              <p className="text-2xl w-full self-end text-right mt-auto font-bold">九月~十月</p>
            </div>
            <div className="flex flex-col gap-5 w-[18rem] h-[18rem] p-7 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600">
              <h3 className="text-4xl font-bold">初探網頁開發</h3>
              <p className="text-2xl">HTML、CSS基本介 紹、網站運作架構。</p>
              <p className="text-2xl w-full self-end text-right mt-auto font-bold">九月~十月</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[40rem] bg-[#020b26] text-white p-4 min-h-[100vh]">
        <div className="flex flex-col">
          <h2 className="text-[4.5rem]">專題計劃 <span className="text-2xl">近期活動、計畫</span></h2>
        </div>
      </div>
    </>
  )
}
