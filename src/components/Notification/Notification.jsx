import PropTypes from 'prop-types';
import { Notif } from './Notification.styled';

const Notification = ({ message }) => {
    return <Notif>{message}</Notif>
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;