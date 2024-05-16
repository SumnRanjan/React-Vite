import Propeties from "./Properties";
export default function PropertiesList({properties}){
    return(
        <>
            <div className="flex justify-center items-center gap-5  text-center h-[100vh] text-[24px]">
                {properties.map((p) =>{
                    return <Propeties {...p} key={p.id}/>
                })}
            </div>
        </>
    )
}