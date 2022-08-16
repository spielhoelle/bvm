import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InnerBlocks
} from '@wordpress/block-editor';
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
      <div className="wp-block-create-block-tmy-employee-single workbox">
        <div className="employee-single-wrapper">
          <div className="employee-single-text">
            <div className="employee-single-text-wrapper">
              <h2>Lust bei uns zu arbeiten?</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
