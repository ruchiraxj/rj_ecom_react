import http from "./httpService";

export function getBooks(id){
    return http.get(`${process.env.REACT_APP_API_PATH}/books/list?category=${id}`);
}
