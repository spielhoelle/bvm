import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor'
import {
  SelectControl,
  PanelBody,
  ToolbarButton,
  ToolbarGroup,
} from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import './style.scss'

export default function Edit(props) {
  const {
    attributes, setAttributes, isSelected,
  } = props

  return (
    <div {...useBlockProps()}>
      <p className="circletext-text">
        {isSelected ? (
          <>
            <RichText
              tagName="p"
              onChange={(newTitle) => {
                setAttributes({ circletext: newTitle })
              }}
              value={attributes.circletext}
              placeholder={__('Title...')}
            />
            <RichText
              tagName="h2"
              onChange={(newTitle) => {
                setAttributes({ circlesubtext: newTitle })
              }}
              value={attributes.circlesubtext}
              placeholder={__('Title...')}
            />
          </>
        ) : (
          <>
            <svg viewBox="0 0 100 100" width="100" height="100" data-direction={attributes.direction}>
              <defs>
                <path
                  id="circle"
                  d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
                />
              </defs>

              <text>
                <textPath xlinkHref="#circle">
                  {attributes.circletext}
                </textPath>
              </text>
            </svg>
            <svg viewBox="0 0 100 100" width="100" height="100" className="second_circle" data-direction={attributes.direction}>
              <defs>
                <path
                  id="circlesubtext"
                  d="
            M 40 40 m -23 0 a 23 23 0 1 1 46 0 a 23 23 0 1 1 -46 0"
                />
              </defs>
              <text>
                <textPath xlinkHref="#circlesubtext">
                  {attributes.circlesubtext}
                </textPath>
              </text>
            </svg>
          </>
        )}
      </p>
      <InspectorControls>
        <PanelBody title={__('General', 'gutenpride')} initialOpen>
          <SelectControl
            value={attributes.direction}
            options={[
              { value: 'left', label: 'left' },
              { value: 'right', label: 'right' },
            ]}
            label={__('Rotation direction', 'gutenpride')}
            onChange={(newDirection) => setAttributes({ direction: newDirection })}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  )
}
