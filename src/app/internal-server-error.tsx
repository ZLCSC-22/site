import Link from "next/link"
import bg from "../../public/home/images/bg.jpg"

export default function Page404() {
  return (
    <div className="h-[100vh] w-full bg-cover bg-center bg-opacity-80" style={{backgroundImage: `url(${bg.src})`}}>
      <div className="h-full w-full flex items-center text-white shadow-[inset_15rem_0_45rem_15rem_#000000A0] bg-black bg-opacity-40">
        <div className="flex flex-col gap-4 justify-start pl-[10%]">
          <h1 className="text-[6rem] shadow-2xl">後端報廢 :(</h1>
          <Link href="/" className="block bg-[--theme-colour] p-2 px-3 text-3xl rounded-2xl w-fit">返回首頁</Link>
        </div>
      </div>
    </div>
  )
}
