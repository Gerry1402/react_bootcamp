import { Box } from "./styles";
import PropTypes from 'prop-types';

const Popup = ({visible, setVisible, title, text}) => {
    return (
    <Box $visible={visible}>
        <div>
            <h1>{title}</h1>
            <div>{text}</div>
            <button onClick={() => setVisible(false)}>X</button>
        </div>
    </Box>
    )
}
Popup.propTypes = {
    visible: PropTypes.bool,
    setVisible: PropTypes.bool,
    title: PropTypes.string,
    text: PropTypes.string,
};

export default Popup;