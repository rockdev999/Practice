import { MultiCheck } from './components/multicheck/MultiCheck'
import './App.css'
import data from './dummydata (2).json'

export const App = () => {
  return (
    <div>
      <MultiCheck data={data} />
    </div>
  )
}
