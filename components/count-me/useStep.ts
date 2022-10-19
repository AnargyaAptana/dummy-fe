import { useMemo, useState } from "react"

interface HookReturn {
  formattedStep: string
  step: number
  setStep: (step: number | string) => void
}

export const MINIMUM_STEP = 1

export const useStep = (): HookReturn => {
  const [step, setStep] = useState(MINIMUM_STEP)

  const handleStep = (current: string | number): void => {
    setStep((prev) => {
      const isCurrentString = typeof current === "string"
      const formattedCurrent = isCurrentString ? parseInt(current, 10) : current

      const isEmptyString = current === ""
      if (current === "" || formattedCurrent < MINIMUM_STEP) {
        return MINIMUM_STEP
      }

      if (isNaN(formattedCurrent)) {
        return prev
      }

      return formattedCurrent
    })
  }

  const mapUiStep = (step: number): string => {
    if (step < 1) {
      return ""
    }

    return step.toString()
  }

  return {
    formattedStep: useMemo(() => mapUiStep(step), [step]),
    step,
    setStep: handleStep,
  }
}
