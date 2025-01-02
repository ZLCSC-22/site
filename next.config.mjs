import withMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const config = withMDX()({
  output: "export",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
})

export default config
