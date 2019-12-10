import api from '@/utils/api/index'

// 注册
export const handleRegister = (params, resolve) => api.post('/user/register', params, resolve);

// 登录
export const login = (params, resolve) => api.post('/user/login', params, resolve);

// 获取博客列表
export const findAll = (params, resolve) => api.post('/blog/findAll', params, resolve);

// 添加博客
export const addBlog = (params, resolve) => api.post('/blog/add', params, resolve);

// 上传图片
export const uploadImage = (params, resolve) => api.from('/upload/image', params, resolve);

// oss签名
export const ossToken = (resolve) => api.post('/upload/ossToken', {}, resolve);

// oss服务器上传
export const ossImage = (params,resolve) => api.from('/upload/ossImage', params, resolve);


