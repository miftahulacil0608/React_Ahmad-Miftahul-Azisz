import {Routes, Route} from 'react-router-dom'
import Welcome from './component/Welcome'
import PromptAI from './component/PromptAI'
import ImageAI from './component/ImageAI'

function App() {

  return (
  <Routes>
    <Route path='/' element={<Welcome />} />
    <Route path='/chat-ai' element={<PromptAI />} />
    <Route path='/image-ai' element={<ImageAI />} />
  </Routes>
  )
}

export default App