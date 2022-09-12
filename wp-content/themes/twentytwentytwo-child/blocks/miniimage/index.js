import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/tmy-miniimage', {
  apiVersion: 2,
  title: 'miniimage',
  icon: 'format-image',
  category: 'widgets',
  edit: Edit,
  save,
});
