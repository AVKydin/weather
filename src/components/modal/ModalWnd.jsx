import "./ModalWnd.css";

export default function ModalWnd({call, closeModalWnd}){

    const isHyilo = (e)=>{
        if(e.key === "Enter" && e.target.value.toLowerCase().trim() === 'хуйло'){
            closeModalWnd()
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
                                     pattern = "[А-Яа-я]"
                                     onKeyDown={isHyilo}/>
            , ла-ла-ла-ла-ла!</span>

            </div>
        </div>
    )
}