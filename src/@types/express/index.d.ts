declare namespace Express { // Ele esta declarando que dentro do Express vai...
    export interface Request {  // exportar o Request no qual vai adicionar 
        user_id: String; // um user_id que será uma string dentro de REQUEST
    }
}