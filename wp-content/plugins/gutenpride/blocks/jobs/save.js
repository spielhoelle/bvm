import { useBlockProps } from '@wordpress/block-editor'
import arrow from './arrow.png'

export default function save(props) {
  const blockProps = useBlockProps.save()
  return (
    <div {...blockProps}>
      {props.attributes.jobpages.map((job) => (
        <h2 key={job.link}>
          <a href={job.link}>{job.title}</a>
          <img alt="arrow" src={arrow} />
        </h2>
      ))}
    </div>
  )
}
