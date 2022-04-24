/* lines */

export function breakLines( text = '' ){
	return text
		.replace(/\t/g,'') // remove tabs
		.split('\n') // break lines
		.filter( t => t !== ''); // remove empty lines
};

/* words and spaces */

export class SpaceObject {
	constructor( width = 1, expanded = true ){
		this.width = width;
		this.expanded = expanded;
	}
}

export class WordObject {
	constructor( text = '' ){
		this.text = text;
	}
}

export function parseWord( text = '' ){
	if( text.startsWith(']') ){
		text = text.slice(1);
		if( text && text !== ' ' ){
			// detect words
			return new WordObject( text );	
		}
	}
	if( text.startsWith('[') ){
		// detect space
		return new SpaceObject(
			parseInt( text.replace(/\D/g,'') ),
			text.startsWith('[!')
		);
	}
}

/*
convert one line of text into word and space snippets
[!10] Ho[50]w , c[50]an [!90]
*/
export function parseText( text = '' ){
	return text
		.replace(/\s([.,;])/g,'$1') // remove whitespace before punctuation
		.replace(/\s+/g,' ') // collapse whitespaces
		.trim() // trim whitespaces
		.split(/(?=\[)|(?=\])/g) // split text before [ brackets
		.map( parseWord ) // parseSnipets
		.filter( t => t !== undefined ); // remove empty snippets
}