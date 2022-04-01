import request from '../utils/request.js'

export const register = function (data){
  return request({
    url: '/api/users/register',
    method: 'post',
    data
  })
}
