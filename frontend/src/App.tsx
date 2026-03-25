export default function App() {
  return (

    /* Section com o formulário de registro de usuários */
    <div className="w-full min-h-screen bg-gray-700 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-semibold text-white text-center">
          Users registration
        </h1>

        <form className="flex flex-col my-6">
          <label className="font-semibold text-white">Nome:</label>
          <input
            type="text"
            placeholder="Fulano de Tal"
            className="w-full p-2 bg-white my-5 rounded-md placeholder:text-gray-300"
          />

          <label className="font-semibold text-white">Email:</label>
          <input
            type="email"
            placeholder="email@exemplo.com"
            className="w-full p-2 bg-white my-5 rounded-md placeholder:text-gray-300"
          />

          <input 
            type="submit" 
            value="Registrar"
            className="cursor-pointer w-full bg-blue-500 p-2 font-semibold text-white rounded-md hover:bg-blue-700 transition-colors"
          />
        </form>

        <h2 className="text-center my-5 text-white font-semibold text-2xl">
          Registred users
        </h2>

        <section className="flex flex-col">
          <article className="w-full bg-white p-2 rounded-md">
            <p><span className="font-bold">Nome: </span>Aurora</p>
            <p><span className="font-bold">Email: </span>aurora@exemplo.com</p>
            <p><span className="font-bold">Status: </span><span className="text-green-500 font-bold">ATIVO</span></p>
          </article>
        </section>

      </main>
    </div>
  );
}
