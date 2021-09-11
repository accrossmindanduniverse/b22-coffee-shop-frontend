import { http } from '../../helpers/http';

// const { REACT_APP_BACKEND_URL: URL } = process.env;
const URL = 'http://localhost:8000';

export const getChat = (token) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/chat/room`);
    dispatch({
      type: 'GET_CHAT',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getChatRoom = (token, recipient) => async (dispatch) => {
  try {
    const { data } = await http(token).get(`${URL}/chat/${recipient}`);
    dispatch({
      type: 'GET_CHAT_ROOM',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendChat = (token, setData) => async (dispatch) => {
  const form = new FormData();
  form.append('message', setData.message);
  form.append('file', setData.file);
  form.append('recipient_id', setData.recipient_id);
  try {
    const { data } = await http(token).post(`${URL}/chat/send`, form);
    dispatch({
      type: 'SEND_MESSAGE',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const downloadFile = (token, setData) => async (dispatch) => {
  const form = new URLSearchParams();
  form.append('path', setData.path);
  try {
    const { data } = await http(token).post(`${URL}/download`, form);
    dispatch({
      type: 'DOWNLOAD',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteChat = (token, id) => async (dispatch) => {
  try {
    const { data } = await http(token).put(`${URL}/chat/delete-chat-room/${id}`);
    dispatch({
      type: 'DELETE_CHAT_ROOM',
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
  }
};