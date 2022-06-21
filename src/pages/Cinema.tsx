import React, { useEffect } from 'react';
import { connect } from 'dva';
import { DotLoading } from 'antd-mobile';

function Cinema(props: any) {
  let { cityname, list, cityId, loading } = props;
  if (list.length === 0) {
    useEffect(() => {
      props.dispatch({
        type: 'cinema/getcinemalist',
        payload: { cityId },
      });
    }, []);
  } else console.log('走缓存');
  return (
    <div>
      <span
        onClick={() => {
          props.dispatch({
            type: 'cinema/clearlist',
          });
          props.history.push('/city');
        }}
      >
        {cityname}
      </span>
      {loading && <DotLoading />}
      {list.map((item: any) => (
        <div key={item.cinemaId}>{item.name}</div>
      ))}
    </div>
  );
}

const changeStateToProps = (state: any) => {
  console.log(state);
  return {
    cityId: state.city.cityid,
    cityname: state.city.cityname,
    list: state.cinema.list,
    loading: state.loading.global,
  };
};

export default connect(changeStateToProps)(Cinema);
