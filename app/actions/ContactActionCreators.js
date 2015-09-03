import AppDispatcher   from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils     from '../utils/WebAPIUtils';

export default {
  createContact(name, email, phone, subject, message) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_CONTACT,
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    });

    WebAPIUtils.createContact(name, email, phone, subject, message);
  }
}
