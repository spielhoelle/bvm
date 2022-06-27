import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save();
  return (

    <div {...blockProps}>
      Jobs jooo
    </div>
  );
}
