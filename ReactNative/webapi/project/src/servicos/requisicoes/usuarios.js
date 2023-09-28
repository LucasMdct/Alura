
import api from "../api"


export async function buscaUsuario(nomeUsuario) {
    try {
       const url = `users/${nomeUsuario}`;
    
       const resultado = await api.get(url);

       return resultado.data;

   }catch(error) {
            if (error.response && error.response.status === 403) {
            console.log("Erro 403: Você não tem permissão para acessar este recurso.");
        } else {
            console.error("Ocorreu um erro ao buscar o usuário:", error);
        }
        return {};

    }
}