export interface DynComponentProps {}
type DynComponent = ({data}: {data: DynComponentProps}) => React.JSX.Element;

const registeredComponents = new Map<String, DynComponent>;

export function registerComponent(id: string, component: DynComponent) {
  registeredComponents.set(id, component);
}

export function getComponent(component: {id: string, data: DynComponentProps}, key: number) {
  const Component = registeredComponents.get(component.id);
  if (Component === undefined) return <div>component not found</div>;
  return <Component key={key} data={component.data}/>;
}

export function registerComponents() {

}
