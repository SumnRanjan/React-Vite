import "./Die.css"
export default function Die(){
    const roll = Math.floor((Math.random() * 6)) + 1
    return <h1 className="Die text-8xl"> Die Roll : {roll}</h1>
}