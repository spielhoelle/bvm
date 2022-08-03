import { useBlockProps } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'circletext',
  });
  const { attributes } = props;
  return (
    <div {...blockProps}>
      {attributes.circletext && (
        <p className="circletext-text">{attributes.circletext}</p>
      )}
    </div>
  );
}
