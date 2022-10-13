import { useBlockProps } from '@wordpress/block-editor';

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'circletext',
  });
  const { attributes } = props;
  return (
    <div {...blockProps}>
      {attributes.circletext && (
        <p className="circletext-text" data-speed={attributes.speed} data-direction={attributes.direction}>
          <svg viewBox="0 0 100 100" width="100" height="100" >
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

            <text>
              <textPath xlinkHref="#circle">
                {attributes.circletext}
              </textPath>
            </text>
          </svg>
          <svg viewBox="0 0 100 100" width="100" height="100" className="second_circle">
            <defs>
              <path
                id="circlesubtext"
                d="M 50 50 m -33.12 0 a 33.12 33.12 90 1 1 66.24 0 a 33.12 33.12 90 1 1 -66.24 0"
              />
            </defs>
            <text className="has-primary-font">
              <textPath xlinkHref="#circlesubtext">
                {attributes.circlesubtext}
              </textPath>
            </text>
          </svg>
        </p>
      )}
    </div>
  );
}
