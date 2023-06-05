
import { Footer } from '../componentes/Footer';
import Header from '../componentes/Header';
import Navbar from '../componentes/Navbar';

export default function Denuncie(){
    return(
        <div className="h-screen flex flex-col">
      <Header/>
      <div className="flex flex-1">

      <Navbar/>
        <main className="flex-1 p-6">
        <form className="" method="post" encType="multipart/form-data">
            <h1 className="ml-10 font-semibold text-2xl mt-5 mb-5">Formulário de Denúncia:</h1>
            
            <input className="ml-10 text-black mt-5 mb-5 w-80 border-b bg-zinc-800" 
            type="text" placeholder="Digite seu nome completo"/><br/>

            
            <input className="ml-10 text-black mt-5 mb-5 w-80 border-b bg-zinc-800" 
            type="text" placeholder="Digite seu e-mail"/><br/>

            <label className="ml-10">Quem voce quer que leia sua denúncia?
              </label><br/>
            <select className="ml-10 mt-3 mb-2 border-b bg-zinc-800 w-80">
            <option>NEABI</option>
            <option>Nenhum</option>
              <option>Marcela Ernesto</option>
              <option>Jales Lucio</option>
            </select><br/>

            <input className="ml-10 mt-5 mb-5 w-80 h-20 border-b bg-zinc-800" 
            type="text" placeholder="Digite aqui sua denúncia..." required/><br/>

            <label className="ml-10">Anexar arquivos:</label><br/>

            <input type="file" className="mt-5 ml-10 "/><br/>
            
            <input type="submit" placeholder="Enviar" className="bg-zinc-900 w-80 h-14 mt-10 ml-10 "/>
            </form> 
            <img className="mt-10"  src="/denuncie.png" alt="Logo"/>
           
           
           
</main>
        
      </div>
      <Footer/>
    </div>
    )
}
