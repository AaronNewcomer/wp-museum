import {
	render
} from '@wordpress/element';

import AdvancedSearchFront from './advanced-search/front';
import CollectionObjectsFront from './collection/front';
import { cleanAttributes } from './util';

import './style.scss';

const advancedSearchElements = document.getElementsByClassName('wpm-advanced-search-block-frontend');
if ( !! advancedSearchElements ) {
	for ( let i = 0; i < advancedSearchElements.length; i++ ) {
		const advancedSearchElement = advancedSearchElements[i];
		const idString = advancedSearchElement.id.substr( 'advanced-search-'.length );
		const attributes = window[ `advancedSearch${idString}` ];
		cleanAttributes( attributes );
		render (
			<AdvancedSearchFront
				attributes = { attributes }
			/>,
			advancedSearchElement
		);
	}
}

const collectionObjectsBlockElements = document.getElementsByClassName('wpm-collection-objects-block');
if ( !! collectionObjectsBlockElements ) {
	for ( let i = 0; i < collectionObjectsBlockElements.length; i++ ) {
		const collectionObjectsBlockElement = collectionObjectsBlockElements[i];
		const postID = parseInt( collectionObjectsBlockElement.dataset.postId );
		render (
			<CollectionObjectsFront
				postID = { postID }
			/>,
			collectionObjectsBlockElement
		);
	}
}

