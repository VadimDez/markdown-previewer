import React from 'react';
import ReactDOM from 'react-dom';

class Editor extends React.Component {
  constructor() {
    super();
    var content = '# Markdown\n' +
      '## subtitle\n' +
      'content';
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
        <div className="cell-50"><textarea name="editor" id="" cols="30" rows="10" onChange={this.onChange} value={ this.state.content } /></div>
        <div className="cell-50" dangerouslySetInnerHTML={{__html: this.state.markdown}}></div>
      </div>
    );
  }
}

ReactDOM.render(<Editor/>, document.getElementById('editor'));
