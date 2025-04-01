import './App.css'
import { createEffect, createStore } from 'effector'
import { useUnit } from 'effector-react'


const $isTMA = createStore(false);
const initFx = createEffect(async () => {

  await import('./sdk')

  // @ts-expect-error 123
 return window?.Telegram?.WebApp && window?.Telegram?.WebApp.platform !== 'unknown'

});

initFx()

function App() {
  const isTMA = useUnit($isTMA)

  return (
    <>
      <p style={{color: 'yellow'}}>isTma: {String(isTMA)}</p>
      {/** @ts-expect-error 123 */}
      <code>{JSON.stringify(window?.Telegram.WebApp || {}, undefined,2)}</code>
    </>
  )
}

export default App
