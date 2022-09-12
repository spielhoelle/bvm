import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: `employees ${props.attributes.direction}`,
  });
  return (
    <div {...blockProps}>
      {props.attributes.hascircle && (
        <div className="circle" />
      )}
      <InnerBlocks.Content />
    </div>
  );
}
