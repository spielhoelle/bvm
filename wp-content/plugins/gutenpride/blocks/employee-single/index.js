import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/tmy-employee-single', {
	apiVersion: 2,
	title: 'employee-single',
	icon: 'businessperson',
	category: 'widgets',
	edit: Edit,
	save,
});
