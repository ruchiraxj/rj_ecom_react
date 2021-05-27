import http from "./httpService";

export function getBooks(id){
    return http.get(`http://localhost/personal/rj_ecom_symfony/public/index.php/books/list?category=${id}`);
}
