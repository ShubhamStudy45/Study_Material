import { Component } from "react"
import { Header } from "./Header"

export class FileUploadClassComponent extends Component {
  render() {
    return (
      <div className="container">
        <Header title="FileUploadClassComponent" />
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
            <input type="file" className="form-control" />
          </div>
          <div className="mb-3">
            <button className="btn btn-success">upload</button>
          </div>
        </div>
      </div>
    )
  }
}
