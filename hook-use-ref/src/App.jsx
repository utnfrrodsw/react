import './App.css'
import VideoPlayer from './VideoPlayer'

function App() {
  // const videoSource = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
  const videoSource = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'

  return (
    <>
      <div>
      <h3>Ejemplo con useRef (Control de Video)</h3>
      <VideoPlayer videoUrl={videoSource} />
    </div>
    </>
  )
}

export default App
