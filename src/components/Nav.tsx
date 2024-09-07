import Link from "next/link"
import "./Nav.css"

function Nav() {
  return (
    <nav className="flex justify-between h-14 fixed w-full z-50 backdrop-blur-sm shadow-md border-solid border-gray-500 border-b-[1px] border-opacity-25">
      <div className="flex pl-8 items-center">
        <img/>
        <h2 className="text-3xl">ZLCSC</h2>
      </div>
      <div className="flex">
        <div className="triangle"></div>
        <div className="flex items-center pl-4 pr-10 bg-[--theme-colour] gap-6 h-14">
          <Link href="/" className="text-xl">首頁</Link>
          <Link href="/" className="text-xl">關於</Link>
          <Link href="/" className="text-xl">研究方向</Link>
          <Link href="/" className="text-xl">教學計劃</Link>
          <Link href="/" className="text-xl">專題計畫</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
