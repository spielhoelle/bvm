import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InnerBlocks} from '@wordpress/block-editor';
const ALLOWED_BLOCK_TYPES = ['create-block/tmy-employee-single'];
export default function Edit(props) {
  const {
    attributes,
    setAttributes,
  } = props;
  const blockProps = useBlockProps({
    className: 'employees',
  });
  return (
    <div {...blockProps}>
      <InnerBlocks
        allowedBlocks={ALLOWED_BLOCK_TYPES}
        renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
      />
    </div>
  );
}
