import { registerBlockExtension } from '@10up/block-components'
import { __ } from '@wordpress/i18n';
import {
  PanelBody,
  RangeControl,
} from '@wordpress/components'
import {
  InspectorControls,
} from '@wordpress/block-editor'

const newAttributes = {
  opacity: {
    type: 'number',
    default: 1,
  },
}

function generateClassName(attributes) {
  const { opacity } = attributes
  const className = "has-opacity-" + opacity.toString()
  return className
}

function LightboxBlockEdit(props) {
  const { attributes, setAttributes } = props
  const { opacity } = attributes

  return (
    <InspectorControls>
      <PanelBody title="Font">
        <RangeControl
          label={__('Opacity')}
          value={opacity}
          min="0"
          max="10"
          onChange={(set) => {
            setAttributes({ opacity: set })
          }}
        />
      </PanelBody>
    </InspectorControls>
  )
}

registerBlockExtension(
  `core/video`,
  {
    extensionName: 'opacity',
    attributes: newAttributes,
    classNameGenerator: generateClassName,
    Edit: LightboxBlockEdit,
  },
)
