import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'employees',
  });
  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
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
