import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'event-single',
  })
  const { attributes } = props
  const hasImages = attributes.images.length > 0
  return (
    <div {...blockProps}>
      <div className={`event-single-wrapper ${attributes.imagelayout}`}>
        <div className="event-single-text hidden">
          <RichText.Content
            tagName="h5"
            value={attributes.title}
          />
          <RichText.Content
            tagName="p"
            value={attributes.content}
          />
        </div>
        {hasImages && attributes.images.map((image, index) => (
          <figure key={image.url} className={`events-${index + 1}`}>
            <img alt={image.url} src={image.url} />
          </figure>
        ))}
      </div>
    </div>
  )
}
