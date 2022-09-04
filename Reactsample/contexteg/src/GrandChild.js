import {useContext} from 'react'
import Background from './Background'

export default function GrandChild(){

    let color = useContext(Background)

    return (
        <p style={{backgroundColor:`${color}`}}>
          This is a text
        </p>
      )
}