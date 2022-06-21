import React from 'react'
import { RouteComponentProps } from '_@types_react-router@5.1.12@@types/react-router'

interface myid{
    id:string
}

export default function Detail(props:RouteComponentProps<myid>) {
  return (
    <div>
        <span>您已进入{props.match.params.id}</span>
    </div>
  )
}
