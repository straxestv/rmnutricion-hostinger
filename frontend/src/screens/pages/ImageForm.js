import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  saveimgt,
  listimgts,
  deleteProdcut,
} from '../../actions/VideoAction';


function ImageF(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [user, setUser] = useState('');
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const imgList = useSelector((state) => state.imgList);
  const { loading, imgts, error } = imgList;

  const imgtSave = useSelector((state) => state.imgSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = imgtSave;

  const imgDelete = useSelector((state) => state.imgDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = imgDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listimgts());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (imgt) => {
    setModalVisible(true);
    setId(imgt._id);
    setTitle(imgt.title);
    setUser(imgt.user);
    setImage(imgt.image);
  };
  const submitHandler = (e) => {
    //e.preventDefault();
    dispatch(
      saveimgt({
        _id: id,
        title,
        user: user,
        image,
      })
      
    );
  };
  const deleteHandler = (imgt) => {
    dispatch(deleteProdcut(imgt._id));
  };
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setUploading(true);
    axios
      .post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };
  return (
    <div className="content content-margined2">
      <div className="imgt-header">
        <h3>imgts</h3>
        <button className="button primary" onClick={() => openModal({})}>
          Crear imgto
        </button>
      </div>
      {modalVisible && (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Crear imagen dieta</h2>
              </li>
              <li>
                {loadingSave && <div>Cargando...</div>}
                {errorSave && <div>{errorSave}</div>}
              </li>
              <li>
                <label htmlFor="user">user</label>
                <input
                  type="text"
                  name="user"
                  value={user}
                  id="user"
                  onChange={(e) => setUser(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="image">Imagen</label>
                <input
                  type="text"
                  name="image"
                  value={image}
                  id="image"
                  onChange={(e) => setImage(e.target.value)}
                ></input>
                <input type="file" onChange={uploadFileHandler}></input>
                {uploading && <div>Subiendo...</div>}
              </li>

              <li>
                <button type="submit" className="button primary">
                  {id ? 'Update' : 'Create'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                  Back
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}

      {/* <div className="imgt-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Marcia</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {imgts.map((imgt) => (
              <tr key={imgt._id}>
                <td>{imgt._id}</td>
                <td>{imgt.user}</td>
                <td>{imgt.title}</td>
                <td>
                  <button className="button" onClick={() => openModal(imgt)}>
                    Editar
                  </button>{' '}
                  <button
                    className="button"
                    onClick={() => deleteHandler(imgt)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div> */}
    </div>
  );
}
export default ImageF;
