import React from 'react'
import { Redirect } from 'umi'

export default function Auth(props:any) {    //用来做路由拦截
  if(localStorage.getItem('token')){
        return (
            <div>
                {props.children}
            </div>
        )
    }
  else
    return <Redirect to='/login'></Redirect>
        
  
}
