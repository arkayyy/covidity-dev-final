import React, { Component } from 'react';

export default class FileUpload extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <h3>Upload</h3>
                        <div className="form-group">
                            <input type="file" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}