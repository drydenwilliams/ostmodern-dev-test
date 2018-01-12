export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
export const API_URL = (IS_DEVELOPMENT ? 'http://localhost:4000/api/v1' : '')