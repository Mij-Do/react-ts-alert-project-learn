import './App.css'
import { BellRing, CircleX } from 'lucide-react';
import Alert from './components/Alert/Alert'

function App() {

  return (
    <>
      <Alert title={"You don't know ReactJS..."}
        icon={<BellRing size={20}/>}
        close={<CircleX size={20}/>}
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quo."}
      />
    </>
  )
}

export default App
