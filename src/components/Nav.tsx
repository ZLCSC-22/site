import Link from "next/link"
import logoImg from "../../public/nav/logo.jpg"
import "./Nav.css"

function Nav() {
  return (
    <nav className="flex justify-between h-14 fixed w-full z-50 backdrop-blur-sm shadow-md border-solid border-gray-500 border-b-[1px] border-opacity-25">
      <div className="flex pl-8 items-center gap-4">
        <img className="block h-10 w-10 rounded-full border-solid border-2 border-[--theme-colour]" src={logoImg.src}/>
        <h2 className="text-3xl font-['Noto_Serif_TC'] font-[900]">ZLCSC</h2>
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
