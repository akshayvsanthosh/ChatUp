import './App.css'
import ChatContainer from './components/ChatContainer'

function App() {

  return (
    <div className='d-flex flex-column justify-content-between' style={{ backgroundColor: "#cee0ba", minHeight: "100vh"}}>
      <ChatContainer/>
    </div>
  )
}

export default App
