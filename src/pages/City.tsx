import React, { useEffect, useState } from 'react';
import { IndexBar, List } from 'antd-mobile';
import { request } from 'umi';
import { connect } from 'dva';

function City(props: any) {
  function filterCity(list: Array<any>): any {
    const alphabet = Array.from(new Array(26), (ele, index) => {
      //26个字母
      return String.fromCharCode(65 + index);
    });
    var trueList: any[] = []; //得到真城市列表
    alphabet.forEach((i) => {
      let linshiList = list.filter((item: any) => {
        return item.pinyin.substring(0, 1).toUpperCase() === i;
      });
      if (linshiList.length !== 0) {
        trueList.push({
          title: i,
          items: linshiList,
        });
      }
    });
    return trueList;
  }
  const [cityList, setcityList] = useState([]);
  useEffect(() => {
    request('https://m.maizuo.com/gateway?k=8012289', {
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"165294070798642513887233"}',
        'X-Host': 'mall.film-ticket.city.list',
      },
    }).then((res: any) => {
      setcityList(filterCity(res.data.cities));
    });
  }, []);
  console.log(cityList);
  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        return (
        {cityList.map((i: any) => (
          <IndexBar.Panel
            index={i.title}
            title={`${i.title}`}
            key={`${i.title}`}
          >
            <List>
              {i.items.map((item: any, index: number) => (
                <List.Item
                  key={index}
                  onClick={() => {
                    props.dispatch({
                      type: 'city/changeCityname',
                      payload: {
                        cityname: item.name,
                        cityid: item.cityId,
                      },
                    });
                    props.history.goBack();
                  }}
                >
                  {item.name}
                </List.Item>
              ))}
            </List>
          </IndexBar.Panel>
        ))}
        )
      </IndexBar>
    </div>
  );
}

export default connect()(City);
