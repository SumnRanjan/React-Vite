function handleClick({msg}){
    alert(msg)
}

function handleHover(){
    console.log("Hover")
}


export default function Clicked(msg){
    return (
        <div>
            <p className="text-[24px] mb-4 text-black" onMouseOver={handleHover}>Hover The Button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
} 

