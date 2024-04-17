import React, { Component } from "react"
import axios from "axios"
export default class FileUploadScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFile: null,
      email: "test",
      password: "123",
    }
    this.onUploadFile = this.onUploadFile.bind(this)
    this.onFileSelete = this.onFileSelete.bind(this)
  }

  onFileSelete(event) {
    console.log(event)
    this.setState({
      email: "onFileSelectUpdated",
      password: "onFileSelectUpdated 123",
      selectedFile: event.target.files[0],
    })
  }
  onUploadFile() {
    // console.log("fileUpload : ", this.state)

    const formData = new FormData()

    formData.append("email", this.state.email)
    formData.append("password", this.state.password)
    formData.append("photo", this.state.selectedFile)

    console.log("formData : ", formData)

    axios
      .post("http://localhost:4000/user", formData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="container">
        <h3>Fileupload Screens</h3>
        <div className="form">
          <div className="mb-3">
            <label className="label-form">Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="label-form">Password</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="label-form">File</label>
            <input
              onChange={this.onFileSelete}
              type="file"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <button onClick={this.onUploadFile} className="btn btn-success">
              upload
            </button>
          </div>
        </div>
      </div>
    )
  }
}
