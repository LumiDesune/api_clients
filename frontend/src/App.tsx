import { useEffect, useState, useRef, FormEvent } from "react";
import { FiTrash } from "react-icons/fi";
import { api } from "./services/api";

// Criação de uma interface para definir a estrutura dos dados dos usuários
interface UserProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  createdAt: string;
}

export default function App() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Hook para armazenar os usuários registrados
  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const response = await api.get("/users");
    setUsers(response.data); // Atualiza o estado com os usuários obtidos da API
  }

  // Função para lidar com o envio do formulário
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() // Previne o comportamento padrão do formulário
    
    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;

    if (!name || !email){
      alert("Name and email are required!");
      return;
    }

    // Envia os dados do novo usuário para a API
    const response = await api.post("/users", {
      name: name,
      email: email
    });

    // Limpar campos do formulário após o envio
    if(nameInputRef.current) nameInputRef.current.value = "";
    if(emailInputRef.current) emailInputRef.current.value = "";

    setUsers([...users, response.data]); // Atualiza o estado com o novo usuário adicionado

  }

  // Função para excluir um usuário
  async function handleDeleteUser(userId: string) {
    try {

      await api.delete(`/users/${userId}`);

      // Remove o usuário da lista após delete bem-sucedido
      setUsers(users.filter(user => user.id !== userId));

    } catch (error){
      console.error("Error deleting user:", error);
    }
  }

  return (
    /* Section com o formulário de registro de usuários */
    <div className="w-full min-h-screen bg-gray-700 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl bg-purple-700 p-6 rounded-md">
        <h1 className="text-4xl font-bold text-white text-center">
          Users registration
        </h1>

        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-semibold text-white">Nome:</label>
          <input
            type="text"
            placeholder="Fulano de Tal"
            className="w-full p-2 bg-white my-5 rounded-md placeholder:text-gray-300"
            ref={nameInputRef}
            
          />

          <label className="font-semibold text-white">Email:</label>
          <input
            type="email"
            placeholder="email@exemplo.com"
            className="w-full p-2 bg-white my-5 rounded-md placeholder:text-gray-300"
            ref={emailInputRef}
          />

          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-full bg-blue-500 p-3 font-semibold text-white rounded-md hover:bg-blue-600 transition-colors"
          />
        </form>

        <h2 className="text-center my-5 text-white font-semibold text-2xl">
          Registred users
        </h2>

        <section className="flex flex-col gap-6">

          {users.map((user) => (
            <article
            key={user.id}
            className="w-full bg-white p-2 rounded-md relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <p>
                <span className="font-bold">Nome: </span>{user.name}
              </p>
              <p>
                <span className="font-bold">Email: </span>{user.email}
              </p>
              <p>
                <span className="font-bold">Status: </span>
                <span className={`font-bold ${user.status ? "text-green-500" : "text-red-500"}`}>
                  {user.status ? "ATIVO" : "INATIVO"}
                </span>
              </p>

              <button 
              className="bg-red-500 flex items-center justify-center w-7 h-7 rounded-lg absolute right-0 -top-2 hover:bg-red-600 transition-colors"
              onClick={() => handleDeleteUser(user.id)}
              >
                <FiTrash size={18} color="#FFF"/>
              </button>
            </article>
          ))}

        </section>
      </main>
    </div>
  );
}
