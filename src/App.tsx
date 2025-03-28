import './App.css'
import { BellRing, CircleX } from 'lucide-react';
import Alert from './components/Alert/Alert'

function App() {

  return (
    <>
      <Alert type='alert-wrapper'
        title={"You don't know ReactJS...(Wrapper)"}
        icon={<BellRing size={20}/>}
        close={<CircleX size={20}/>}
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quo."}
        children={"this is Children of Wrapper"}
      />
      <Alert type='alert-danger'
        title={"You don't know ReactJS...(Danger)"}
        icon={<BellRing size={20}/>}
        close={<CircleX size={20}/>}
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quo."}
      />
      <Alert type='alert-warning'
        title={"You don't know ReactJS...(Warning)"}
        icon={<BellRing size={20}/>}
        close={<CircleX size={20}/>}
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quo."}
      />
    </>
  )
}

export default App
