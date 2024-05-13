export default function Array({value}){
    const randindex = Math.floor(Math.random() * value.length)
    const randele = value[randindex]
    return (
        <div>
            <p>The list of values : {value}</p>
            <h1>Rand Ele : {randele}</h1>
        </div>
    )
}