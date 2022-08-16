import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/tmy-employees', {
	apiVersion: 2,
	title: 'employees',
	icon: 'groups',
	category: 'widgets',
	edit: Edit,
	save,
});
