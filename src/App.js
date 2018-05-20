import React, { Component } from 'react';
import './App.css';
import CKEditor from 'cke5-react';
import ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic/build/ckeditor';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

class App extends Component {
	render() {
		return (
			<div className="app">
				<h2>CKEditor 5 using build-classic</h2>
				<CKEditor
					editor={ ClassicEditorBuild }
					data="<p>Hello from CKEditor 5</p>"
					onChange={ data => console.log( data ) }
				/>
				<h2>CKEditor 5 using custom build</h2>
				<CKEditor
					onChange={ data => console.log( data ) }
					config={ {
						plugins: [ Essentials, Paragraph, Bold, Italic, Heading ],
						toolbar: [ 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo', ]
					} }
					editor={ ClassicEditor }
					data="<p>Hello from CKEditor 5</p>"
				/>
			</div>
		);
	}
}

export default App;
