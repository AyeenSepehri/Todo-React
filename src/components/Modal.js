function Modal(props){

    const closeBtn = () => {
        props.onCancel()
    }
    const confirmBtn  = () => {
        props.onConfirm()
    }
    return <div className="modal">
        <p>are you sure?</p>
        <button onClick={closeBtn}>cancel</button>
        <button onClick={confirmBtn}>confirm</button>
    </div>
}
export default Modal;