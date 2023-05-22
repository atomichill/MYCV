import './modal.scss'
import React from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { changeVal } from '../../slice/modalSlice';



function Modal() {
    const modalData = useSelector((state) => state.modalValue.text)
    const modalImg = useSelector((state) => state.modalValue.image)
    const dispatch = useDispatch()

    return (
        <div className='modal'>
            <div className='modal_content'>
                <div className='modal_header'>
                    <h4 className='modal_title'></h4>
                </div>
                <div className='modal_body'>
                    <img src={modalImg} alt="modal image" className='modal_img'/>
                    {modalData}
                </div>
                <div className='modal_footer'>
                    <button className='button' onClick={() => dispatch(changeVal())}>close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;