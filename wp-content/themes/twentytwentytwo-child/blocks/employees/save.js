import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: `employees ${props.attributes.direction}`,
  })
  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
      {props.attributes.hascircle && (
        <div className="circle" />
      )}
    </div>
  )
}
