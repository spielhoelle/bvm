import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save();
  const hasImages = props.attributes.images.length > 0;
  return (
    <div {...blockProps}>
      <div className="events-wrapper">
        <div className="events-1">
          <RichText.Content
            {...blockProps}
            tagName="h2"
            value={props.attributes.title}
          />
          <RichText.Content
            {...blockProps}
            tagName="strong"
            value={props.attributes.date}
          />
          <RichText.Content
            {...blockProps}
            tagName="p"
            value={props.attributes.content}
          />
        </div>
        {hasImages && props.attributes.images.map((image, index) => (
          <figure className={`events-${index + 2}`}>
            <img alt={image.url} key={image.url} src={image.url} />
          </figure>
        ))}
      </div>
    </div>
  );
}
