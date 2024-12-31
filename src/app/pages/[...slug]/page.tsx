import bannerBg from "assets/home/images/banner-bg-2.jpg"

import fs from "fs"
import path from "path"
import matter from "gray-matter"

import { MDXRemote } from "next-mdx-remote/rsc"
import Page404 from "october-site/app/not-found"

function getPagePaths(prefix: string, files: string[]) {
  let paths: string[] = []
  files.forEach(filename => {
    if (fs.statSync(path.join("src", "pages", prefix, filename)).isDirectory()) {
      paths = [...paths, ...(getPagePaths(path.join(prefix, filename), fs.readdirSync(path.join("src", "pages", filename))))]
      return;
    }
    paths.push(path.join(prefix, filename))
  })
  return paths
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src", "pages"))

  return getPagePaths("", files).map(filename => ({
    slug: filename.replace('.mdx', '').split('/')
  }))
}

function getPage({slug}:{slug : string[]}){
  const markdownFile = function() {
    try {
      const result = fs.readFileSync(path.join("src", "pages", slug.join('/') + ".mdx"), "utf-8");
      return result
    } catch (e) {
      return undefined
    }
  }()

  if (!markdownFile) return undefined

  const { data: frontMatter, content } = matter(markdownFile || "")

  return {
    frontMatter,
    slug,
    content
  }
}

function Banner({frontMatter}: {frontMatter: {[key: string]: any}}) {
  return (
    <div className="h-[60vh] w-full bg-cover bg-center bg-opacity-80 border-solid border-gray-900 border-b-2 shadow-2xl" style={{backgroundImage: `url(${bannerBg.src})`}}>
      <div className="h-full w-full flex items-center text-white shadow-[inset_15rem_0_45rem_15rem_#00000090]">
        <div className="flex flex-col gap-4 justify-start px-[10%] font-['Noto_Serif_TC']">
          <h1 className="text-6xl shadow-2xl font-[900] overflow-hidden w-full">{frontMatter.bannerTitle}</h1>
          <h2 className="text-3xl pl-2 shadow-2xl text-wrap">{frontMatter.bannerDescription}</h2>
        </div>
      </div>
    </div>
  )
}

export default function Page({ params } :any) {
  const page = getPage(params);
  if (!page) return <Page404/>;
  const {frontMatter, slug, content} = page;

  return (
    <>
      {frontMatter.banner && <Banner frontMatter={frontMatter}/>}
      {!frontMatter.banner && <div className="h-20"></div>}
      <div className="w-full grid place-content-center">
        <article className="m-auto p-10 prose prose-xl prose-slate !prose-invert">
          <MDXRemote source={content}/>
        </article>
      </div>
    </>
  )
}

export async function generateMetadata({ params } : any) {
  const page = getPage(params);
  if (!page) return {};
  const {frontMatter, slug, content} = page;

  return{
    title: frontMatter.title,
    description: frontMatter.description,
  }
}
