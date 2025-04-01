import './App.css'
import {isTMA} from '@telegram-apps/bridge'
import { createEffect, createStore, sample } from 'effector'
import { useUnit } from 'effector-react'

const $isTMA = createStore(false);
const initFx = createEffect(async () => {
  return isTMA('complete')
});

sample({clock: initFx.doneData, target: $isTMA})

function App() {
  const isTMA = useUnit($isTMA)

  return (
    <>
      <p style={{color: 'red'}}>isTma: {String(isTMA)}</p>
    </>
  )
}

export default App
