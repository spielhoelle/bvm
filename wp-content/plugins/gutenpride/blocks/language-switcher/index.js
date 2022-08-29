import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'
import { useSelect } from '@wordpress/data'
import { useBlockProps } from '@wordpress/block-editor'
import ServerSideRender from '@wordpress/server-side-render'
import './editor.scss'
import './style.scss'

registerBlockType('create-block/tmy-language-switcher', {
  apiVersion: 2,
  title: 'Language switcher',
  icon: 'megaphone',
  category: 'widgets',
  edit: ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps()
    return (
      <div {...blockProps}>
        <ServerSideRender block={"create-block/tmy-language-switcher"} attributes={attributes} />
      </div>
    )
  },
  save() {
    return null // Nothing to save here..
  },
})
