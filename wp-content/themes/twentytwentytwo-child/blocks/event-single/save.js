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
        <div className="event-single-text d-md-none">
          <RichText.Content
            tagName="h2"
            value={attributes.title}
          />
        </div>
        <div className={`imagegrid ${attributes.imagelayout} gridlength-${attributes.images.length}`}>
          {hasImages && attributes.images.map((image, index) => (
            image.type === "image" ? (
              <figure key={image.url} className={`events-${index + 1}`}>
                <img alt={image.url} src={image.url} />
              </figure>
            ) : (
              <video autoplay loop muted key={image.url} className={`events-${index + 1}`}>
                <source src={image.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          )
          )}
          {/* TODO why do this shit has to be here when I dont need it? Otherwise it doesnt save it to DB */}
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
        </div>
        <div className="event-single-text">
          <div className="d-md-none">
            <div className="d-none">
              <RichText.Content
                tagName="h3"
                value={attributes.subtitle}
              />
            </div>
          </div>
          <RichText.Content
            tagName="h3"
            value={attributes.subtitle}
          />
        </div>
      </div>
    </div>
  )
}
