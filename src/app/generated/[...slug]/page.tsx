import * as yaml from 'js-yaml';
import { DynComponentProps, getComponent, registerComponents } from 'october-site/page-components/dynamic-render/ComponentManager';

type PagesData = {pages: {id: string, route: string}[]};
type PageData = {components: {id: string, data: DynComponentProps}[]}

async function fetchData() {
  try {
    return await fetch("http://127.0.0.1:5500/yaml-src/pages.yml", {headers: {"Content-Type": "application/x-yaml", Accept: "application/x-yaml", charset: "utf-8"}})
  } catch {
    return false;
  }
}

export default async function GeneratedPage({ params }: { params: { slug: string[] } }) {
  const pathString = "/" + params.slug.reduce((prev, s) => `${prev}/${s}`);

  const response = await fetchData();
  if (!response) {
    return <div>404</div>;
  }
  const data: PagesData = yaml.load(await response.text()) as PagesData;
  const page = data.pages.find(p => p.route == pathString);
  if (page == undefined) {
    return <div>404</div>;
  }

  return <Page id={page.id}/>;
}

async function Page({id}: {id: string}) {
  registerComponents();
  const data: PageData = yaml.load(await (await fetch(`http://127.0.0.1:5500/yaml-src/${id}.yml`)).text()) as PageData;

  if (data == undefined) {
    return <div>404</div>;
  }
  const components: {id: string, data: any}[] = data.components;

  return (
    <div className="page">
      {components.map((c, i) => getComponent(c, i))}
    </div>
  )
}
