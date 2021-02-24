/**
 * 
 */
const getToken = () => {
    let token = sessionStorage.getItem('token');
    let userToken = JSON.parse(token);
    return userToken?.token;
  }

/**
 * 
 */
export const isLogged = () => {
    return getToken() !== undefined;
}