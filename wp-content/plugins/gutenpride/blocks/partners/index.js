import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import './style.scss';
import Edit from './edit';
import save from './save';
const { withColors } = wp.blockEditor;
registerBlockType('create-block/tmy-partners', {
	apiVersion: 2,
	title: 'partners',
	icon: 'groups',
	category: 'widgets',
	edit: withColors({ backgroundColor: 'background-color' })(Edit),
	save
});