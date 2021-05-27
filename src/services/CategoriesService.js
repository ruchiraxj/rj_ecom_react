import http from "./httpService";

export function getCategories(){
    return http.get(`${process.env.REACT_APP_API_PATH}/category/list`);
}
