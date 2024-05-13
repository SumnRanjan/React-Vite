export default function Diess({num = 8}){
    const roll = Math.floor(Math.random()  * num) + 1
    return <h1>{num} Sided -Roll Die : {roll}</h1>
}