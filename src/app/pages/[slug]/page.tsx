import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join("src", "pages"))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

function getPage({slug}:{slug : string}){
    const markdownFile = fs.readFileSync(path.join('blogs',slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default function Page({ params } :any) {
    const props = getPage(params);

    return (
        <article className='prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto'>
            <h1>{props.frontMatter.title}</h1>
            <MDXRemote source={props.content}/>
        </article>
    )
}

export async function generateMetadata({ params } : any) {
    const blog = getPage(params);

    return{
        title: blog.frontMatter.title,
        description: blog.frontMatter.description,
    }
}
