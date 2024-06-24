import  data  from "../../artigos.json";

function Home() {
    return (
        <>
        <img className="w-full h-lvh" src="/public/furiosa.jpg" alt="" />
        <div className="bg-black grid grid-cols-2">
        {
            data.map(
                (filme, index) => (
                    <>
                    <div className="card text-white m-16 flex flex-col justify-around rounded-2xl" key={index} >
                        <img className="w-full rounded" src={filme.image} alt="" />
                        <h1 className="text-2xl"  key={filme.title}>{filme.title}</h1>
                        <div className="tags flex" >
                        {
                            filme.tags.map( tag => (
                                <span className="cor1 text-branco p-2 pt-0.5 pb-1 rounded mr-1 mb-2 mt-2 bg-red-700" key={tag}>{tag}</span>
                            ))
                        }
                        </div>
                        <div className=" mb-4 text-justify" >
                        {
                            filme.text.map( text => (
                                <p  className="" key={text}>{text}</p>
                            ))
                        }
                        </div>
                    </div>
                    </>
                )
                )
            }
        </div>
        <div className="bg-black flex-col text-center">
            <h1 className="text-5xl font-semibold text-white">MAGAL FILMES</h1>
            <p className="text-xs text-white">2024, Todos os direitos reservador</p>
        </div>
        </>
    );
}

export default Home;