import './App.css'
import MainContent from './MainContent'
import { ThemeProvider } from './providers/ThemeProvider'

function App() {
  return (
    <>
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </>
  )
}

export default App
