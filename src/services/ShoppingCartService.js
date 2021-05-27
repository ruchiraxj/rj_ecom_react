import http from "./httpService";

export function addToCart(id){
   return http.get(`${process.env.REACT_APP_API_PATH}/cart/add?id=${id}`, {withCredentials: true});
}

export function getCart(){
   return http.get(`${process.env.REACT_APP_API_PATH}/cart/get`, {withCredentials: true});
}

export function removeFromCart(id){
   return http.get(`${process.env.REACT_APP_API_PATH}/cart/delete?id=${id}`, {withCredentials: true});
}

export function addDiscount(code){
   return http.get(`${process.env.REACT_APP_API_PATH}/discount/add?code=${code}`, {withCredentials: true});
}
