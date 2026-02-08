import React from 'react'
import { Text, types } from 'react-bricks/frontend'

const FeatureItem = () => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title text-primary">
            <Text
              propName="title"
              renderBlock={(props) => <span {...props.attributes}>{props.children}</span>}
              placeholder="Title..."
            />
          </h5>
          <p className="card-text">
            <Text
              propName="text"
              renderBlock={(props) => <span {...props.attributes}>{props.children}</span>}
              placeholder="Description..."
            />
          </p>
        </div>
      </div>
    </div>
  )
}

FeatureItem.schema = {
  name: 'feature-item',
  label: 'Feature Item',
  getDefaultProps: () => ({
    title: 'Feature Title',
    text: 'Feature description goes here.',
  }),
  sideEditProps: [],
}

export default FeatureItem
