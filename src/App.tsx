
import { decrement, increment } from "./redux/feature/counter/counterSlice"
// import type { RootState } from "./redux/store"
import { useAppDispatch, useAppSelector } from "./redux/hook"


function App() {
  const disptch = useAppDispatch()
  // const {count} = useSelector((state: RootState) => state.counter)
  const {count} = useAppSelector((state) => state.counter)


  const handleIncrement = (amout: number) =>{
    disptch(increment(amout))
  }
  const handleDecrement = () =>{
    disptch(decrement())
  }
  

  return (
    <div>
      <h1 className="text-3xl text-center font-bold py-10">Counter with Redux</h1>
      <div>
        <button onClick={handleDecrement} className="bg-yellow-700 px-3 py-1 rounded-lg text-white mx-3">Decrement</button>
        <span className="bg-orange-700 px-3 py-1 rounded-lg text-white mx-3">{count}</span>
        <button onClick={()=>handleIncrement(1)} className="bg-green-700 px-3 py-1 rounded-lg text-white mx-3" >Increment</button>
        <button onClick={()=>handleIncrement(5)} className="bg-green-700 px-3 py-1 rounded-lg text-white mx-3" >Increment by 5</button>
      </div>
    </div>
  )
}

export default App
