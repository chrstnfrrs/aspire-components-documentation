import { Component } from "graphql/generated"

interface IPreviewComponent {
  component: Component;
}

const PreviewComponent: React.FC<IPreviewComponent> = (props) => {
  return (
    <div>
      <div>
        
      </div>
      <div>
        {`<${props.component?.name} />`}
      </div>
    </div>
  )
}

export { PreviewComponent }