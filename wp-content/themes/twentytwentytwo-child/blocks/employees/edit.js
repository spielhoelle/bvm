import { __ } from '@wordpress/i18n'
import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
} from '@wordpress/block-editor'
import {
  CheckboxControl,
  PanelBody,
  SelectControl,
} from '@wordpress/components'

const ALLOWED_BLOCK_TYPES = ['create-block/tmy-employee-single']
export default function Edit(props) {
  const {
    attributes,
    setAttributes,
  } = props
  const blockProps = useBlockProps({
    className: `employees ${attributes.direction}`,
  })
  return (
    <div {...blockProps}>
      <InnerBlocks
        allowedBlocks={ALLOWED_BLOCK_TYPES}
        renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
      />
      {attributes.hascircle && (
        <div className="circle" />
      )}
      <InspectorControls>
        <PanelBody title={__('General', 'gutenpride')} initialOpen>
          <CheckboxControl
            label="Has white circle background"
            help="Control wheter the row shows a white circle in the background. Just one of the employee lists should have that. On mobile replaced by a bigger, oval shape which replaces this circle."
            checked={attributes.hascircle}
            onChange={() => setAttributes({ hascircle: !attributes.hascircle })}
          />
          <SelectControl
            value={attributes.direction}
            options={[
              { value: 'left', label: 'left' },
              { value: 'right', label: 'right' },
            ]}
            label={__('Direction', 'gutenpride')}
            onChange={(newDirection) => setAttributes({ direction: newDirection })}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  )
}
