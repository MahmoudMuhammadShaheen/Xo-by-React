

// and setstate at react has these imports that as defult
import { Dispatch , SetStateAction } from "react"

// here this is type of your props ;

type CellProps = {
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    Cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winngMassage: string;
}


// here foucs with me these elments now as props but these elment 
// if you remmber these are our {state} => we made it at the page.txs file
// so we can use them here as props
// and cellprops this is our type for this props becuse {typescrpit} has some 
// rules about how to define the props of a component and {typescrpit} you must gave it the type of your elment not same js

const Cell = ({id, go ,setGo, Cells,setCells , cell ,winngMassage}: CellProps) => {

    const handClike = () => {

        if(winngMassage) {
            return
        }
// here we made that for take any elment we did not cliked on it
        const notTaken = !Cells[id];
// here if notTake === true we will chach it and make a new function to take the elment as argument 
// and chang it by using set state 

        if(notTaken) {
            // here go === cricle 
            if(go === "cricle") {
                // this funtion will put a cricle
                handleChange("cricle")
                // and when you do the funtion make the {go} === cross
                setGo("cross")
            }else if(go === "cross") {
                handleChange("cross");
                setGo("cricle");
            }
        }
        
  
    }

    const handleChange = (cellToChang :string) =>{
        // here we made this copyCelss to made cells as array 
        const copyCelss =[...Cells]
        // and we made the copycells id = {cellToChang} 
        copyCelss[id] = cellToChang;
        // and at setcells we make it === copy cells

        setCells(copyCelss)
    }
    return <div className="squer" onClick={handClike}>
        <div className={cell}>{cell ?( cell === "cricle" ? "O" : "X") : ""}</div>
    </div>
}


export default Cell;