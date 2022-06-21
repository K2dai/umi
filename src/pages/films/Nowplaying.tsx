import React, { useEffect, useState } from 'react'
import { request } from 'umi'

export default function Nowplaying(props:any) {
  const [list,setList] = useState([])
  useEffect(()=>{
    request('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4781245',{
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"165294070798642513887233"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
    }).then(res =>{
      console.log(res.data.films);
      setList(res.data.films)
    })
  },[])
  return (
    <div>
      {list.map( (item:any) =>
        <div key={item.filmId} onClick={()=>{
          props.history.push(`/detail/${item.filmId}`)
        }}>
          {item.name}
        </div>)}
    </div>
  )
}
