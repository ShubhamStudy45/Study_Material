import { useState } from "react"
import axiox from "axios"
export const FileUploadScreenFunction = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fileupload, setFileUpload] = useState("")

  const onUpload = () => {
    const formData = new FormData()

    formData.append("email", email)
    formData.append("password", password)
    formData.append("photo", fileupload)

    axiox
      .post("http://localhost:4000/user", formData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <div className="container">
        <h3>File upload Function</h3>
        <div className="form">
          <div className="mb-3">
            <label className="label-form">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="label-form">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="label-form">File</label>
            <input
              onChange={(e) => {
                setFileUpload(e.target.files[0])
              }}
              type="file"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <button onClick={onUpload} className="btn btn-success">
              upload
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
