import React, { Fragment } from 'react'
import { S3Image } from 'aws-amplify-react'
import { Format, Labels } from 'Helpers/index'
import { Button } from 'Presentational/elements'
import 'Style/imagePicker.scss'

export class ImageUploader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            previewSrc: props.values[props.label],
        }
        this.fileToKey = this.fileToKey.bind(this)
        this.onImageLoad = this.onImageLoad.bind(this)
    }

    componentDidMount() {
        if (this.state.previewSrc != this.props.values[this.props.label]) {
            this.setState({
                previewSrc: this.props.values[props.label],
            })
        }
    }

    fileToKey(data) {
        const { name, size, type } = data;
        let date = new Date()
        date = date.getTime()
        let key = (date / 1000).toFixed()
        return `${key}-${name}`
    }

    onImageLoad(url) {
        if (!url.startsWith('data:image/gif;base64')) {
            let newUrl = url.split('?')[0]
            this.props.setFieldValue(this.props.label, newUrl)
            this.props.setTouched({ ...this.props.touched, [this.props.label]: true })
            this.setState({
                previewSrc: newUrl
            })
        }
    }
    render() {
        return (
            <div className='photo-editor'>
                <label>
                    {Format.capitalize(Labels[this.props.label])}
                </label>
                <div className='btn-img-picker'>
                    <Button handleClick={e => e.preventDefault()}>
                        Selecciona una imagen
                    </Button>
                    <div className='img-picker'>
                        <S3Image
                            fileToKey={this.fileToKey}
                            picker
                            onLoad={this.onImageLoad}
                            title='Sube una imagen' />
                    </div>
                </div>
                <div className='show-image'>
                    <img src={this.state.previewSrc} />
                </div>
            </div>
        )
    }
}