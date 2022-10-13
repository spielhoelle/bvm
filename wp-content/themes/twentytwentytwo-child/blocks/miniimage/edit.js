import {
  useBlockProps, BlockControls, MediaPlaceholder, BlockIcon, InspectorControls, MediaUpload, MediaUploadCheck,
} from '@wordpress/block-editor';
import {
  SelectControl,
  RangeControl,
  PanelBody, ToolbarButton, ToolbarGroup,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';

export default function Edit(props) {
  const {
    attributes, setAttributes,
  } = props;
  const hasImages = attributes.miniImage;
  return (
    <>
      <div {...useBlockProps()}>
        {hasImages && (
          <figure style={{ "width": `${attributes.size}%` }} className={`miniimage-gallery-inner-container ${attributes.direction}`}>
            <img alt={attributes.miniImage} src={attributes.miniImage} />
          </figure>
        )}
        {!hasImages && (
          <MediaPlaceholder
            icon={<BlockIcon icon="format-gallery" />}
            labels={{
              title: 'Partners Gallery',
              instructions: 'Create an awesome miniimage gallery.',
            }}
            onSelect={(newImages) => setAttributes({ miniImage: newImages.url })}
          />
        )}
      </div>
      <BlockControls>
        <ToolbarGroup>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(newImages) => setAttributes({ miniImage: newImages.url })}
              allowedTypes={['miniImage']}
              value={attributes.miniImage}
              render={({ open }) => (
                <ToolbarButton onClick={open}>
                  {__('Manage Images')}
                </ToolbarButton>
              )}
            />
          </MediaUploadCheck>
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <PanelBody title={__('General')} initialOpen>
          <RangeControl
            label={__('Size')}
            value={attributes.size}
            min="10"
            max="100"
            onChange={(set) => setAttributes({ size: set })}
          />
          <SelectControl
            value={attributes.direction}
            options={[
              { value: 'left-top', label: 'Left top' },
              { value: 'right-top', label: 'Right top' },
              { value: 'right-bottom', label: 'Right bottom' },
              { value: 'left-bottom', label: 'Left bottom' },
            ]}
            label={__('Align')}
            onChange={(newDirection) => setAttributes({ direction: newDirection })}
          />
        </PanelBody>
      </InspectorControls>
    </>
  );
}
