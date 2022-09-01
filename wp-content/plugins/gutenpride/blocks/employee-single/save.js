import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save();
  const { attributes } = props;
  return (
    <div {...blockProps}>
      <div className={`employee-single-wrapper ${attributes.direction} ${!attributes.image ? `hovered` : ``}`}>
        <div className="employee-single-text">
          <div className="employee-single-text-wrapper">
            <RichText.Content
              tagName="h3"
              value={attributes.title}
            />
            <RichText.Content
              tagName="p"
              value={attributes.content}
            />
          </div>
        </div>
        {!!attributes.image && (
          <figure className={`employee-single-image`}>
            <img alt={attributes.image} src={attributes.image} />
          </figure>
        )}
      </div>
    </div>
  );
}
