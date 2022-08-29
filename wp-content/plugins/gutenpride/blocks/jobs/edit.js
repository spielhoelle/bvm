import { __ } from '@wordpress/i18n'
import { useSelect } from '@wordpress/data'
import {
  useBlockProps, InspectorControls,
} from '@wordpress/block-editor'
import {
  SelectControl,
  PanelBody,
} from '@wordpress/components'
import arrow from './arrow.png'

export default function Edit(props) {
  const {
    attributes,
    setAttributes,
  } = props
  const posts = useSelect((select) => select('core').getEntityRecords('postType', 'page'), [])
  const onChangeContent = (jobPageIds) => {
    const numberedJobpageIds = jobPageIds.map((j) => Number(j))
    if (jobPageIds.length !== 0) {
      const jobpages = posts.filter((p) => numberedJobpageIds.includes(p.id))
      setAttributes({ jobpages: jobpages.map(p => ({ id: p.id, link: p.link, title: p.title.raw })) })
    }
  }
  return (
    <div {...useBlockProps()}>
      {attributes.jobpages.length === 0 && (
        <h2>Select some Job pages on the left</h2>
      )}
      {posts && attributes.jobpages.map((job) => (
        <h2 key={job.link}>
          <a href={job.link}>{job.title}</a>
          <img alt="arrow" src={arrow} />
        </h2>
      ))}
      <InspectorControls>
        <PanelBody title={__('General', 'partners-gallery')} initialOpen>
          <SelectControl
            style={{ 'height': 100 }}
            multiple
            value={attributes.jobpages.map((j) => j.id)}
            label="Pages"
            options={(posts || []).filter((p) => p.template === 'jobs').map((p) => ({ label: p.title.raw, value: p.id }))}
            onChange={(job) => {
              onChangeContent(job)
            }}
            __nextHasNoMarginBottom
          />
        </PanelBody>
      </InspectorControls>
    </div>
  )
}
