import api from "../api";


export async function searchRepos(username){
    try {
    const resposta = await api.get(`users/${username}/repos`);
    return resposta.data;
    }
    catch(error) {
        console.log(error)
        return []
    }
}

export async function salvarRepo(postId, nome, data, id){
    try {
        await api.patch(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id,
        })  
        return 'sucesso'
    }
    catch(error) {
        console.log(error)
        return 'erro'
    }
}

export async function PegarRepositoriosDoUsuarioPeloNome(id, nome) {
    try {
        const resultado = await api.get(`/repos?postId=${id}&name=${nome}`);
        return resultado.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function criarRepoDosUsers(postId, nome, data){
    try {
        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId,
        })  
        return 'sucesso'
    }
    catch(error) {
        console.log(error)
        return 'erro'
    }
}


export async function deletarRepoUser(id){
    try {
        await api.delete(`/repos/${id}`)  
        return 'sucesso'
    }
    catch(error) {
        console.log(error)
        return 'erro'
    }
}