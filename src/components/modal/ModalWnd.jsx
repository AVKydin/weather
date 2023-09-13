import "./ModalWnd.css";
import {useState} from "react";

export default function ModalWnd({call, closeModalWnd}){

    const [hyilo, setHyilo] =useState('')

    const isHyilo = ()=>{
        if(hyilo.toLowerCase().trim() === 'хуйло'){
            closeModalWnd();
            setHyilo('')
        }
    }


    const isHyillo = ()=>{
        if(hyilo.toLowerCase().trim() === 'хуйло'){
            closeModalWnd();
            setHyilo('')
        }
    }

    if(!call){
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Вставте пропущене слово і Ви зможете скористатися сервісом</h3>
                <span>путін - <input type="text"
                                     value={hyilo}
                                     onChange={(e)=>setHyilo(e.target.value)}
                                     pattern = "[А-Яа-я]"
                                     onKeyDown={isHyilo}
                placeholder="хто?"/>

            , ла-ла-ла-ла-ла!</span>
                <button onClick={()=>{isHyillo()}}>OK</button>
            </div>
        </div>
    )
}