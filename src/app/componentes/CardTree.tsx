export default function CardTree(){
    return(
        <div>
           <center><h1 className="mt-5 text-2xl">Musicas Africanas Famosas 2023</h1></center>

<div className="grid grid-cols-3 gap-4 mt-6">

<a href="https://www.youtube.com/watch?v=CQLsdm1ZYAw" 
className="bg-white/5 p-1 rounded-md flex flex-col items-center gap-1 hover:bg-white/10">
<h1 className="font-bold mt-2 text-2xl">Rema - Calm Down</h1>
<iframe src="https://www.youtube.com/embed/CQLsdm1ZYAw" 
title="Rema - Calm Down (Official Music Video)" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="mb-10 mt-10"></iframe>
</a>


<a href="https://www.youtube.com/watch?v=IcIkmPU9reU" 
className="bg-white/5 p-1 rounded-md flex flex-col items-center gap-1 hover:bg-white/10">
<h1 className="font-bold mt-2 text-2xl">Oxlade - KU LO SA</h1>
<iframe src="https://www.youtube.com/embed/IcIkmPU9reU" 
title="Oxlade, Camila Cabello - KU LO SA (Official Video)"  allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="mb-10 mt-10"></iframe>
</a>



<a href="https://www.youtube.com/watch?v=D-YDEyuDxWU" 
className="bg-white/5 p-1 rounded-md flex flex-col items-center gap-1 hover:bg-white/10">
<h1 className="font-bold mt-2 text-2xl">Ckay - Love Nwantiti</h1>
<iframe src="https://www.youtube.com/embed/D-YDEyuDxWU" title="CKay - Love Nwantiti Remix ft. Joeboy &amp; Kuami Eugene [Ah Ah Ah] [Official Music Video]" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="mb-10 mt-10"></iframe>
</a>

</div>
            <center><h1 className="mt-10 mb-5 text-2xl">Religiões Africanas</h1></center>
        <div className="grid grid-cols-2 gap-4 mt-6">
        
              <a href="https://www.educamaisbrasil.com.br/enem/religiao/candomble" 
              className="bg-white/5 p-1 rounded-md flex flex-col  items-center gap-2 hover:bg-white/10">
              
              <h1 className="font-bold mt-2 text-2xl">Candoblé</h1>
              <img className="mt-2 rounded" width={220} height={150} 
              src="https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/candomble-religiao.jpg"/>
              
            <h2 className="ml-4 mr-4 mb-4 mt-4">"O Candomblé é uma religião de matriz africana que 
              cultua os orixás. O termo candomblé vem da junção das palavras quimbundo 
              candombe (dança com atabaques) + iorubá ilê (casa), que significa casa da 
              dança com atabaques. Decorrida do animismo 
              africano, a religião tem por base a alma da Natureza."<br/><br/>

              CREDITO: EDUCA MAIS BRASIL


              </h2>
              </a>


              <a href="" 
              className="bg-white/5 p-1 rounded-md flex flex-col items-center gap-1 hover:bg-white/10">
              <h1 className="font-bold mt-2 text-2xl">Ubanda</h1>
              <img className="mt-2 rounded" width={220} height={150} 
              src="https://static.todamateria.com.br/upload/um/ba/umbandalagoabb.jpg"/>
              <h2 className="mt-4 ml-3 mr-2">A Umbanda é uma religião monoteísta e afro-brasileira, surgida em 1908, 
              fundada por Zélio Fernandino de Moraes. Baseia-se em três 3 conceitos fundamentais: Luz, Caridade e Amor.
               A palavra "umbanda" pertence ao vocabulário quimbundo, de Angola, e quer dizer "arte de curar".<br/><br/><br/><br/></h2>
              </a>



            
                </div>
              
            </div>
    )
}
