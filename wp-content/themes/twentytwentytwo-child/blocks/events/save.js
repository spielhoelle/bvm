import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'events',
  })
  return (
    <div {...blockProps}>
      <div className="events-wrapper">
        <InnerBlocks.Content />
      </div>
      <div className="events-workbox">
        {props.attributes.events.map((block, index) => (
          <div key={block.attributes.title} className={`events-text ${index !== 0 ? `hidden` : ``}`}>
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
          <text dy="-4">
            <textPath xlinkHref="#circle">
              {props.attributes.events.map((block, index) => (
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
    </div>
  )
}
