import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
  useBlockProps, InspectorControls,
} from '@wordpress/block-editor';
import {
  SelectControl,
  PanelBody,
} from '@wordpress/components';

export default function Edit(props) {
  const {
    attributes,
    setAttributes,
  } = props;
  let posts = useSelect((select) => select('core').getEntityRecords('postType', 'page'), []);
  let options = [];
  if (posts) {
    posts = posts.filter((p) => p.template === 'jobs');
    options = posts.map((p) => ({ label: p.title.raw, value: p.id }));
  }
  const onChangeContent = (job) => {
    attributes.jobpages.push(job);
    setAttributes({ jobpages: attributes.jobpages });
  };
  return (
    <div {...useBlockProps()}>

      {attributes.jobpages.length === 0 && (
        <h2>Select some Job pages on the left</h2>
      )}

      {attributes.jobpages.map((job) => (
        <h2>{posts.find((p) => p.id === job)}</h2>
      ))}
      <InspectorControls>
        <PanelBody title={__('General', 'partners-gallery')} initialOpen>
          <SelectControl
            multiple
            value={attributes.direction}
            label="Pages"
            options={options}
            onChange={(job) => onChangeContent(job)}
            __nextHasNoMarginBottom
          />
          {/* <SelectControl
            multiple
            value={attributes.jobpages}
            options={[
              { value: 'left-top', label: 'left-top' },
              { value: 'right-top', label: 'right-top' },
              { value: 'right-bottom', label: 'right-bottom' },
              { value: 'left-bottom', label: 'left-bottom' },
            ]}
            label={__('Direction', 'partners-gallery')}
            onChange={(newDirection) => setAttributes({ direction: newDirection })}
          /> */}
        </PanelBody>
      </InspectorControls>
    </div>
  );
}
