import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
registerBlockType('create-block/tmy-employees', {
	apiVersion: 2,
	title: 'Employee List',
	icon: 'groups',
	category: 'widgets',

	edit: () => {
		const blockProps = useBlockProps();
		const posts = useSelect((select) => {
			return select('core').getEntityRecords('postType', 'employee');
		}, []);

		return (
			<div {...blockProps}>
				{posts && posts.length > 0 && (
					<ServerSideRender block={"create-block/tmy-employees"} />
				)}
			</div>
		);
	},
	save() {
		return null; // Nothing to save here..
	}
});