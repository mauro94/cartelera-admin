import React from 'react';
import Tags from 'react-tagging-input';

export class TagManager extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        tags: props.values[props.field.name] || []
    }
    this.onTagAdded = this.onTagAdded.bind(this)
    this.onTagRemoved = this.onTagRemoved.bind(this)
  }

  onTagAdded(tag) {
    this.setState({
      tags: [...this.state.tags, tag]
    })
  }

  onTagRemoved(tag, index) {
    this.setState({
      tags: this.state.tags.filter((tag, i) => i !== index)
    })
  }

  render(){
    return (
      <div className="tag-container">
        <Tags
          tags={this.state.tags}
          placeholder={this.props.placeholder}
          onAdded={this.onTagAdded}
          onRemoved={this.onTagRemoved}/>
      </div>
    )
  }
}