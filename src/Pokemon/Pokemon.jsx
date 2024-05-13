export default function RandomPokemon(){
    const Rand = Math.floor((Math.random() * 151)) + 1
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Rand}.png`
    return(
        <div className="flex flex-col justify-center items-center w-[60vh] h-[50vh] border-2 border-black text-blue-800 font-bold">
            <h1 className=" font-bold text-4xl text-center mt-6 p-5">Pokemon #{Rand}</h1>
            <img src={url} alt="" height="350" width="350"/>
        </div>
    )
}