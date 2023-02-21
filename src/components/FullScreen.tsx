import { FC } from "react"
import { FirstScreen } from "../screens/screen-1"
import { SecondScreen } from "../screens/screen-2"
import { ThirdScreen } from "../screens/screen-3"


export const FullScreen:FC = () => {
  return (
    <>
     <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
    </>
  )
}
