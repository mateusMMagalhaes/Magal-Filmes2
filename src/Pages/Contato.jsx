function Contato() {
    return ( 
        <>
        <div className="bg-black h-screen flex justify-center">
        <div className=" flex-col ">
        <h1 className="text-3xl p-20 pt-10 pb-5 ">Contato</h1>
        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 className="mb-4 text-4xl font-bold text-white text-center">Contato</h2>
                    <form id="contactForm">
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name"  placeholder="Nome" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label  className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email"  placeholder="email" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email"  placeholder="telefone" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="mensagem" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-red-700 text-white px-6 py-3 font-xl rounded-md sm:mb-0">enviar</button>
                        </div>
                    </form>
                </div>
        </div>
        </div>
        <div className="bg-black flex-col w-full text-center pt-96">
            <h1 className="text-5xl font-semibold text-white">MAGAL FILMES</h1>
            <p className="text-xs text-white">2024, Todos os direitos reservador</p>
        </div> 
        </>
    );
}

export default Contato;