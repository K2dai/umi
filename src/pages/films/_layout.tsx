import React from 'react';
import { Redirect } from 'umi';
import { connect } from 'dva';
function Films(props: any) {
  let { cityName } = props;
  return (
    <div>
      <Redirect to="/films/nowplaying"></Redirect>
      <div
        onClick={() => {
          props.history.push('/city');
        }}
      >
        {cityName}
      </div>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flex: 1,
          width: '100%',
        }}
      >
        <li
          onClick={() => {
            props.history.push('/films/nowplaying');
          }}
        >
          正在热映
        </li>
        <li
          onClick={() => {
            props.history.push('/films/commingsoon');
          }}
        >
          即将上映
        </li>
      </ul>
      {props.children}
    </div>
  );
}

const changeStateToProps = (state: any) => {
  return {
    cityName: state.city.cityname,
  };
};

export default connect(changeStateToProps)(Films);
