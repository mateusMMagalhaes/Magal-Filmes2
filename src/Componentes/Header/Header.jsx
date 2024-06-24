import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-black text-white text-center items-center p-4 justify-between">
            <h1 className="text-xl font-semibold">MAGAL FILMES</h1>
            <Navbar/>
        </header>
        
     );
}

export default Header;