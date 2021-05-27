import http from "./httpService";

export function getCategories(){
    return http.get("http://localhost/personal/rj_ecom_symfony/public/index.php/category/list");
}
