import React from 'react'
import { Redirect } from 'umi'

export default function Films(props:any) {
  return (
    <div>
        <Redirect to='/films/nowplaying'></Redirect>
        {props.children}
        <ul>
          <li onClick={()=>{
            props.history.push('/films/nowplaying')
          }}>正在热映</li>
          <li onClick={()=>{
            props.history.push('/films/commingsoon')
          }}>即将上映</li>
        </ul>
    </div>
  )
}
