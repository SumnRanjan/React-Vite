
export default function ({msg , buttontext}){
    const handelClick = () =>{
        alert(msg)
    }
    return (
        <button onClick={handelClick}>{buttontext}</button>
    )
}