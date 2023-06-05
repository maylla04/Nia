import  CardTwo  from "../componentes/CardTwo";
import { Footer } from "../componentes/Footer";
import Header from "../componentes/Header";
import Navbar from "../componentes/Navbar";

export default function Racismo(){
    return(
        <div className="h-screen flex flex-col">
        <Header/>
      <div className="flex flex-1">
      <Navbar/>
        <main className="flex-1 p-6">
        <div className='border border-zinc-800'> <img src='2.png'/></div>  
        <Card2/>
</main>
        
      </div>
      <Footer/>
    </div>
    )
}
