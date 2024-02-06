import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
    const [usuario, setUsuario] = useState(null);

    async function login(email, senha){
      if(email === 'lucas.costa@db1.com.br' && senha === 'lucas2023'){
          setUsuario({
              nome: 'Lucas',
              email: email,
              telefone: '+55 (11) 99999-9999',
              endereco: 'Rua dos Bacanas, 10',
          });
          return 'ok';
      }
      return 'Email ou senha incorretos';
    }

    return (
        <AutenticacaoContext.Provider
            value={{
                usuario,
                login,
            }}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
}