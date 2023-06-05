import Card from './componentes/Card';
import {Footer} from './componentes/Footer'
import Header from './componentes/Header';
import Navbar from './componentes/Navbar';




export default function Home(){
  return(
    <div className="h-screen flex flex-col">
      <Header/>
      <div className="flex flex-1">

      <Navbar/>
        <main className="flex-1 p-6">
        <div className='border border-zinc-800'> <img src='1.png'/></div>

            <h1 className="text-bold text-3xl mt-10">Conheça o meu site!</h1>

  <Card/>
  
           
</main>
        
      </div>
      <Footer/>
    </div>
  )
}

