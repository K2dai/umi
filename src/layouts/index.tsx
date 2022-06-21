import React from 'react'
import { NavLink, Redirect } from 'umi'

export default function index(props:any) {
  if(props.location.pathname === '/detail' || props.location.pathname === '/city'){
    return (
      <div>
        {props.children}
      </div>
    )
  }
  return (
    <div>
      <Redirect to='/films'></Redirect>
      {props.children}
      <ul className='tabbars' style={{display:'flex', listStyleType:'none', padding:0, width:'100%', position:'fixed', bottom:0, justifyContent:'space-around', flex:'1',textAlign:'center'}}>
        <NavLink to='/films'><li>电影</li></NavLink>
        <NavLink to='/cinema'><li>影院</li></NavLink>
        <NavLink to='/center'><li>个人中心</li></NavLink>
      </ul>
    </div>
  )
}
