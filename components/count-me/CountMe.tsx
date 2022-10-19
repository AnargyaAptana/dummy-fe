import type { NextPage } from "next"
import { useState } from "react"
import { useStep } from "./useStep"

export const CountMe: NextPage = () => {
  const [counter, setCounter] = useState(0)

  const { formattedStep, setStep, step } = useStep()

  const increaseBy = (step: number) => {
    setCounter((prev) => prev + step)
  }

  const decreaseBy = (step: number) => {
    setCounter((prev) => {
      const newValue = prev - step

      return newValue < 0 ? 0 : newValue
    })
  }

  return (
    <div className="container flex flex-col items-center mt-4">
      <div className=" flex flex-col items-center py-4 px-8 border-2 border-blue-300 rounded-lg">
        <h2 className="font-bold text-4xl">Counter:</h2>
        <p className="font-semibold text-2xl mb-5">{counter}</p>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col">
            <p className="flex-none">Step:</p>
            <input
              className="flex-1 shrink-0 w-20 text-center border border-gray-500 rounded-md"
              type={"text"}
              placeholder={"1"}
              value={formattedStep}
              onChange={(v) => setStep(v.target.value)}
            />
          </div>
          <div className="flex flex-col items-stretch space-y-2">
            <button
              className="p-1 text-center
                border border-green-400 rounded-md
                hover:bg-green-400 hover:text-white"
              onClick={() => increaseBy(step)}
            >
              Add me!
            </button>
            <button
              className="p-1 text-center
                border border-red-400 rounded-md
                hover:bg-red-400 hover:text-white"
              onClick={() => decreaseBy(step)}
            >
              Decrease me!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
