import { __ } from '@wordpress/i18n'
import {
  useBlockProps,
  InnerBlocks,
} from '@wordpress/block-editor'

const ALLOWED_BLOCK_TYPES = ['create-block/tmy-event-single']
let ran = 0
export default function Edit(props) {
  const {
    clientId,
    // attributes,
    setAttributes,
  } = props
  const blockProps = useBlockProps({
    className: 'events',
  })
  const { getBlockOrder, getBlock } = wp.data.select('core/block-editor')
  const innerBlockIds = getBlockOrder(clientId)
  const blocks = []
  innerBlockIds.forEach((innerBlockId) => {
    blocks.push(getBlock(innerBlockId))
  })
  if (ran === 0) {
    ran = 1
    setAttributes({ events: blocks })
  }
  return (
    <div {...blockProps}>
      <div className="events-wrapper">
        <InnerBlocks
          allowedBlocks={ALLOWED_BLOCK_TYPES}
          renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
        />
      </div>
      <div className="workbox">
        {blocks.map((block, index) => (
          <div className="events-text">
            {block.attributes.content}
          </div>
        ))}
        <svg viewBox="0 0 100 100" width="100" height="100" style={{ "transform": "rotate(90deg)" }}>
          <defs>
            <path
              id="circle"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text>
            <textPath xlinkHref="#circle">
              {blocks.map((block, index) => (
                <tspan
                  key={block.attributes.title}
                  xmlSpace="preserve"
                  fill={index === 0 ? "#CB8E00" : "black"}
                >
                  {' '}
                  {block.attributes.title}
                  {' '}
                </tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </div>
    </div >
  )
}
