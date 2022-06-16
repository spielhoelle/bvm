import { useBlockProps } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'miniimage-gallery',
  });
  const { attributes } = props;
  return (
    <div {...blockProps}>
      <figure className={`miniimage-gallery-inner-container ${attributes.direction}`}>
        {attributes.miniImage && (
        <img alt={attributes.miniImage} src={attributes.miniImage} />
        )}
      </figure>
    </div>
  );
}
