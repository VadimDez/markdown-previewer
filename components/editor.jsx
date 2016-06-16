import React from 'react';

import marked from './../node_modules/marked/marked.min';

class Editor extends React.Component {
  constructor() {
    super();
    let content = 'Heading\n' +
    '=======\n' +
    '\n' +
    'Sub-heading\n' +
    '-----------\n'+
    '\n' +
    '### Another deeper heading\n'+
    '\n' +
    'Paragraphs are separated\n'+
    'by a blank line.\n'+
    '\n' +
    'Leave 2 spaces at the end of a line to do a\n'+
    'line break\n'+
    '\n' +
    'Text attributes *italic*, **bold**,\n'+
    '`monospace`, ~~strikethrough~~ .\n'+
    '\n' +
    'Shopping list:\n' +
    '\n' +
    '* apples\n'+
    '* oranges\n'+
    '* pears\n'+
    '\n'+
    'Numbered list:\n'+
    '\n'+
    '1. apples\n'+
    '2. oranges\n'+
    '3. pears\n'+
    '\n'+
    'The rain---not the reign---in\n'+
    'Spain.\n';

    this.state = {
      content: content,
      markdown: marked(content)
    };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Update when text changed
   * @param event
   */
  onChange(event) {
    this.setState({
      content: event.target.value,
      markdown: marked(event.target.value)
    });
  }

  render() {
    return (
      <div>
        <div className="cell-50"><textarea name="editor" id="" cols="30" rows="50" onChange={this.onChange} value={ this.state.content } /></div>
        <div className="cell-50" dangerouslySetInnerHTML={{__html: this.state.markdown}}></div>
      </div>
    );
  }
}

export default Editor;