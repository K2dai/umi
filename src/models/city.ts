export default {
  namespace: 'city',
  state: {
    cityname: '深圳',
    cityid: '440300',
  },
  reducers: {
    changeCityname(oldstate: any, action: any) {
      return {
        ...oldstate,
        cityid: action.payload.cityid,
        cityname: action.payload.cityname,
      };
    },
  },
};
