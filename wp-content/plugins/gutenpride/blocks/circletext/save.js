import { useBlockProps } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'circletext',
  });
  const { attributes } = props;
  return (
    <div {...blockProps}>
      {attributes.circletext && (
        <p className="circletext-text">
          <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
              <path
                id="circle"
                d="
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fontSize="17">
              <textPath xlinkHref="#circle">
                {attributes.circletext}
              </textPath>
            </text>
          </svg>
        </p>
      )}
    </div>
  );
}
