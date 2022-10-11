import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'event-single',
  })
  const { attributes } = props
  const hasImages = attributes.images.length > 0
  return (
    <div {...blockProps}>
      <div className={`event-single-wrapper`}>
        <div className={`imagegrid ${attributes.imagelayout}`}>
          {/* TODO why do this shit has to be here when I dont need it? Otherwise it doesnt save it to DB */}
          <div className="event-single-text d-none">
            <RichText.Content
              tagName="h5"
              value={attributes.title}
            />
            <RichText.Content
              tagName="p"
              value={attributes.content}
            />
            <RichText.Content
              tagName="h3"
              value={attributes.subtitle}
            />
          </div>
          {hasImages && attributes.images.map((image, index) => (
            <figure key={image.url} className={`events-${index + 1}`}>
              <img alt={image.url} src={image.url} />
            </figure>
          ))}
        </div>
        <RichText.Content
          tagName="h3"
          value={attributes.subtitle}
        />
      </div>
    </div>
  )
}
