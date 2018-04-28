import React from 'react';
import Tags from 'react-tagging-input';

export class TagManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: props.values[props.field.name] || []
    }
    this.onTagAdded = this.onTagAdded.bind(this)
    this.onTagRemoved = this.onTagRemoved.bind(this)
  }

  onTagAdded(tag) {
    tag = tag.replace(/,\s*$/, '')
    this.setState((prevState, props) => {
      return {
        tags: [...prevState.tags, tag]
      }
    }, () => {
      this.props.updateFormik(this.state.tags)
    })
  }

  onTagRemoved(tag, index) {
    this.setState((prevState, props) => {
      return {
        tags: prevState.tags.filter((tag, i) => i !== index)
      }
    }, () => {
      this.props.updateFormik(this.state.tags)
    })
  }

  render() {
    return (
      <div className="tag-container">
        <Tags
          uniqueTags
          tags={this.state.tags}
          placeholder={this.props.placeholder}
          onAdded={this.onTagAdded}
          onRemoved={this.onTagRemoved} />
      </div>
    )
  }
}