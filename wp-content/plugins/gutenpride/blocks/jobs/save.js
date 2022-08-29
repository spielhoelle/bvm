import { useBlockProps } from '@wordpress/block-editor'
import arrow from './arrow.png'

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: 'jobs',
  })
  return (
    <div {...blockProps}>
      <table>
        {props.attributes.jobpages.map((job) => (
          <tr>
            <td>
              <a href={job.link}>
                <h2 key={job.link}>
                  {job.title}
                </h2>
              </a>
            </td>
            <td>
              <img alt="arrow" src={arrow} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}
