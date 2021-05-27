import http from "./httpService";

export function addToCart(id){
   return http.get(`http://localhost/personal/rj_ecom_symfony/public/index.php/cart/add?id=${id}`, {withCredentials: true});
}

export function getCart(){
   return http.get(`http://localhost/personal/rj_ecom_symfony/public/index.php/cart/get`, {withCredentials: true});
}
