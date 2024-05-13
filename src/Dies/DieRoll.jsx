import Die from "./Die" 
export default function DieRoll(){
    return (
        <div className="border-8 m-4 p-8">
            <h1 className="text-8xl p-8">Dice Roll</h1>
            <Die/>
            <Die/>
            <Die/>
        </div>
    )
}