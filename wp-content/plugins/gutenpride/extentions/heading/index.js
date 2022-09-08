import { registerBlockExtension } from '@10up/block-components'
import {
  SelectControl,
  PanelBody,
  ToggleControl,
  ToolbarButton,
  ToolbarGroup,
} from '@wordpress/components'
import {
  useBlockProps, InspectorControls,
} from '@wordpress/block-editor'

const newAttributes = {
	isAltFont: {
		type: 'boolean',
		default: false
	}
};

function generateClassName(attributes) {
  const { isAltFont } = attributes
  let className = ''
  if (isAltFont) {
    className = 'has-alt-font'
  }
  return className
}

function LightboxBlockEdit(props) {
  const { attributes, setAttributes } = props
  const { isAltFont } = attributes

  return (
    <InspectorControls>
      <PanelBody title="Font Options">
        <ToggleControl
          label="Alternative font"
          checked={isAltFont}
          onChange={(value) => setAttributes({ isAltFont: value })}
        />
      </PanelBody>
    </InspectorControls>
  )
}

registerBlockExtension(
  `core/heading`,
  {
    extensionName: 'alt_font',
    attributes: newAttributes,
    classNameGenerator: generateClassName,
    Edit: LightboxBlockEdit,
  },
)
