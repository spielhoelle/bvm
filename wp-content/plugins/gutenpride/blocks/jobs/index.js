import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import './editor.scss';
import './style.scss';
registerBlockType('create-block/tmy-jobs', {
	apiVersion: 2,
	title: 'Job List',
	icon: 'groups',
	category: 'widgets',

	edit: () => {
		const blockProps = useBlockProps();
		const posts = useSelect((select) => {
			return select('core').getEntityRecords('postType', 'job');
		}, []);

		return (
			<div {...blockProps}>
				{posts && posts.length > 0 && (
					<ServerSideRender block={"create-block/tmy-jobs"} />
				)}
			</div>
		);
	},
	save() {
		return null; // Nothing to save here..
	}
});