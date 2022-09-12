import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/tmy-circletext', {
  apiVersion: 2,
  title: 'circletext',
  icon: 'marker',
  category: 'widgets',
  edit: Edit,
  save,
});
