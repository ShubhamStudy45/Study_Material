import "./App.css"
import CounterScreen from "./Screens/CounterScreen"
import FileUploadScreen from "./Screens/FileuploadScreen"
import { FileUploadScreenFunction } from "./Screens/FileuploadFunction"
import { FileUploadClassComponent } from "./Screens/FileUploadClass"

const App = () => {
  return (
    <div>
      {/* <FileUploadScreen /> */}
      {/* <CounterScreen /> */}
      {/* <FileUploadScreenFunction /> */}
      <FileUploadClassComponent />
    </div>
  )
}

export default App
