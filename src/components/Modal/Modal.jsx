import PropTypes from 'prop-types';

export const Modal = ({ image, onClose }) => {
    return (
        <div>
            <h2>Modal</h2>
            <img src={image} alt="" width="320" />
            <button onClick={onClose}>Close modal</button>
          </div>
    )
}

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired

}