import Link from "next/link"
import bg from "../../public/home/images/banner-bg-2.jpg"
import { NextResponse } from "next/server";

export default function Page404() {
  NextResponse.next({ status: 404 });
  return (
    <div className="h-[100vh] w-full bg-cover bg-center bg-opacity-80" style={{backgroundImage: `url(${bg.src})`}}>
      <div className="h-full w-full flex items-center text-white shadow-[inset_15rem_0_45rem_15rem_#000000A0] bg-black bg-opacity-40">
        <div className="flex flex-col gap-4 justify-start pl-[10%]">
          <h1 className="text-[6rem] shadow-2xl font-['Noto_Serif_TC']">後端報廢 :(</h1>
          <Link href="/" className="block border-yellow-300 border-solid border-2 text-yellow-300 p-2 px-3 text-3xl w-fit ml-4">返回首頁</Link>
        </div>
      </div>
    </div>
  )
}
