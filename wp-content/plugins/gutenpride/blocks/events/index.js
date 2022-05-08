import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import './style.scss';

registerBlockType('create-block/tmy-events', {
	apiVersion: 2,
	title: 'Event List',
	icon: 'megaphone',
	category: 'widgets',

	edit: () => {
		const blockProps = useBlockProps();
		const posts = useSelect((select) => {
			return select('core').getEntityRecords('postType', 'event');
		}, []);

		return (
			<div {...blockProps}>
				{posts && posts.length > 0 && (
					<ServerSideRender block={"create-block/tmy-events"} />
				)}
			</div>
		);
	},
	save() {
		return null; // Nothing to save here..
	}
});