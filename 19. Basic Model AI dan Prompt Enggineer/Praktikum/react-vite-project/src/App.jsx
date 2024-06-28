import {Routes, Route} from 'react-router-dom'
import Welcome from './component/Welcome'
import PromptAI from './component/PromptAI'
import ImageAI from './component/ImageAI'
import MoodColorAI from './component/MoodColorAI'
import CaptionAI from './component/CaptionAI'

function App() {

  return (
  <Routes>
    <Route path='/' element={<Welcome />} />
    <Route path='/chat-ai' element={<PromptAI />} />
    <Route path='/image-ai' element={<ImageAI />} />
    <Route path='/color-ai' element={<MoodColorAI />} />
    <Route path='/caption-ai' element={<CaptionAI />} />
  </Routes>
  )
}

export default App  