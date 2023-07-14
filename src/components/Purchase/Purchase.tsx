import React, { Dispatch, SetStateAction } from 'react'

interface IProps {
    popup: boolean,
    setPopup: Dispatch<SetStateAction<boolean>>
}

const Purchase: React.FC<IProps> = (props) => {
    const popupClose = (e: any) => {
        if (e.target.classList.contains('overlay')) {
            props.setPopup(false)
        } else {
            props.setPopup(true)
        }
    }
    return (
        <div onClick={(e: any) => popupClose(e)} className={`overlay ${props.popup && "overlay_active"}`}>
            <div className="popup">
                <form action="" className="popup__form">
                    <div className="popup__form-top">
                        <h2 className="popup__form__title_active" style={{ color: 'white' }}>Buy</h2>
                    </div>
                    <input type="number" className="popup__input" placeholder='Card number' />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="popup__btn" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Purchase