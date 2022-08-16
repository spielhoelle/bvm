import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'employees',
  });
  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
