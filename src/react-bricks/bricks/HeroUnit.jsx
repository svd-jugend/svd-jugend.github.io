import React from 'react'
import { Text, RichText, types } from 'react-bricks/frontend'

const HeroUnit = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">
          <Text
            propName="title"
            renderBlock={(props) => <span {...props.attributes}>{props.children}</span>}
            placeholder="Type a title..."
          />
        </h1>
        <div className="col-md-8 fs-4">
          <RichText
            propName="text"
            renderBlock={(props) => <p {...props.attributes}>{props.children}</p>}
            placeholder="Type a description..."
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
              types.RichTextFeatures.Link,
            ]}
          />
        </div>
      </div>
    </div>
  )
}

HeroUnit.schema = {
  name: 'hero-unit',
  label: 'Hero Unit',
  getDefaultProps: () => ({
    title: 'Willkommen bei der Jugendabteilung',
    text: 'des SV Dettingen/Erms e.V.',
  }),
  sideEditProps: [],
}

export default HeroUnit
