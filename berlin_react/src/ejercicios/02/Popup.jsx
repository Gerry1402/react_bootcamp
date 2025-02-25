import { BoxPopup } from "./styles";
import PropTypes from 'prop-types';

const Popup = ({visible, setPregunta, title, text}) => {
    return (
    <BoxPopup $visible={visible}>
        <div>
            <h1>{title}</h1>
            <div>{text}</div>
            <button onClick={() => setPregunta(0)}>X</button>
        </div>
    </BoxPopup>
    )
}
Popup.propTypes = {
    visible: PropTypes.number,
    setPregunta: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
};

export default Popup;