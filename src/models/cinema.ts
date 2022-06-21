import { request } from 'umi';

export default {
  namespace: 'cinema',
  state: {
    list: [],
  },
  reducers: {
    changecinemalist(oldstate: any, action: any) {
      return {
        ...oldstate,
        list: action.payload,
      };
    },
    clearlist(oldstate: any, action: any) {
      return {
        ...oldstate,
        list: [],
      };
    },
  },
  effects: {
    *getcinemalist(action: any, { call, put }: any): any {
      let res = yield call(getlist, action.payload.cityId);
      yield put({
        type: 'changecinemalist',
        payload: res.data.cinemas,
      });
    },
  },
};

function getlist(id: any) {
  return request(
    `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=9331580`,
    {
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"1653296706268070383779841"}',
        'X-Host': 'mall.film-ticket.cinema.list',
      },
    },
  );
}
