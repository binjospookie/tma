import './App.css'
import {isTMA} from '@telegram-apps/bridge'
import { createEffect, createStore, sample } from 'effector'
import { useUnit } from 'effector-react'

const $isTMA = createStore(false);
const initFx = createEffect(async () => {
  return isTMA()
});

sample({clock: initFx.doneData, target: $isTMA})
initFx()

function App() {
  const isTMA = useUnit($isTMA)

  return (
    <>
      <p style={{color: 'green'}}>isTma: {String(isTMA)}</p>
      {/** @ts-expect-error 123 */}
      <code>{JSON.stringify(window?.Telegram || {}, undefined,2)}</code>
    </>
  )
}

export default App
