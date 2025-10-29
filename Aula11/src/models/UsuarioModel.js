import { usuarios } from "../data/banco.js";
export default class UsuarioModel{
    static listar(){
        return usuarios;
    }
    static buscarPorId(id){
        return usuarios.find(u=> u.id === parseInt(id));
    }
    static criar(usuario){
        usuarios.push(usuario);
        return usuario;
    }
    static atualizar(id, novosDados){
        const index = usuarios.findIndex(u=> u.id === parseInt(id));
        if(index === -1){
            return null;
        }
        usuarios[index] = {...usuarios[index], ...novosDados};
        return usuarios[index];
    }
    static deletar(id){
         const index = usuarios.findIndex(u=> u.id === parseInt(id));
        if(index === -1){
            return false;
        }
        usuarios.splice(index, 1);
        return true;
    }
    static buscarPorCidade (cidade){
        return usuarios.filter(u=> u.cidade.tolowercase() === cidade.tolowercase()); 
    }
     static buscarporestado  (estado){
        return usuarios.filter(u=> u.Estado.tolowercase() === estado.tolowercase);
     }
        static buscarpornome (nome){
           return usuarios.sort ((a,b ) => a.nome.localcompare(b.nome));
        }
     static  buscarporcep (cep){
        return usuarios.filter(u=> u.cep.tolowercase() === nome.tolowercase);
     }
     static buscarporbairro (bairro){
        return usuarios.filter(u=> u.bairro.tolowercase() === nome.tolowercase);
     }

static ordenar(){
    let cidades=[];
    let estados = [];
    
    usuarios.foreach (usuario=>{
        if (!cidades,includes(usuarios.cidade)){ cidade.push(usuario.cidade);}
        if (!estados.includes(usuario.estado)){estado.push(usuario.estado);}

 });

 return {user:usuario.length,cidades:cidades.length,estados:estados.length}

} 

     

        
      
        
    }
                                 


}