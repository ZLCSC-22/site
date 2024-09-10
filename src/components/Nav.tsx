import Link from "next/link"
import logoImg from "../../public/nav/logo.jpg"
import "./Nav.css"

function Nav() {
  return (
    <nav className="flex justify-between h-14 fixed w-full z-50 backdrop-blur-sm shadow-md border-solid border-gray-500 border-b-[1px] border-opacity-25 font-['Noto_Serif_TC']">
      <div className="flex pl-8 items-center gap-4 max-[290px]:pl-4">
        <img className="block h-10 w-10 rounded-full border-solid border-2 border-[--theme-colour]" src={logoImg.src}/>
        <h2 className="text-3xl font-[900]">ZLCSC</h2>
      </div>
      <div className="flex">
        <div className="triangle"></div>
        <div className="bg-gradient-to-r from-violet-700 to-[--theme-colour] h-14 font-semibold min-w-[calc(50dvw-3.5rem)]">
          <div className="flex pl-4 pr-10 h-14 items-center gap-6 max-[660px]:hidden">
            <Link href="/" className="text-xl">首頁</Link>
            <Link href="/" className="text-xl">關於</Link>
            <Link href="/" className="text-xl">研究方向</Link>
            <Link href="/" className="text-xl">教學計劃</Link>
            <Link href="/" className="text-xl">專題計畫</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
