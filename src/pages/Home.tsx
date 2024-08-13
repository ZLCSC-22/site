import bg from "../../public/home/images/bg.jpg"

export function Home() {
  return (
    <>
      <div className="h-[40rem] w-full bg-cover bg-center bg-opacity-80" style={{backgroundImage: `url(${bg.src})`}}>
        <div className="h-full w-full flex items-center shadow-[inset_15rem_0_45rem_15rem_#000000A0]">
          <div className="flex flex-col gap-4 justify-start pl-[10%]">
            <h1 className="text-[6rem] shadow-2xl">中崙資研</h1>
            <h2 className="text-4xl pl-2 shadow-2xl">創新求知，領航未來</h2>
          </div>
        </div>
      </div>
      <div>
        <h2>關於我們</h2>
        <p>我們是中崙資訊研習社，致力於 提供一個平台讓大家分享和學習 最新的科技知識和技能，我們的 宗旨是“創新求知，領航未來”。</p>
        <button>瞭解更多</button>
      </div>
    </>
  )
}
