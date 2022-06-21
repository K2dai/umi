import React, { useEffect } from 'react'
import { request } from 'umi'

export default function Commingsoon() {
  useEffect(()=>{
    request('/api/mmdb/movie/v3/list/hot.json?ct=%E5%B9%BF%E5%B7%9E&ci=20&channelId=4').then(res=>console.log(res))
  })
  return (
    <div>Commingsoon</div>
  )
}
