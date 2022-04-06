import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../actions/TuitsActions";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  let [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
      tuit: whatsHappening
    });
    console.log(whatsHappening);
  }
  return (
      <>
        <div className="pt-2 row">
          <div className="col-1">
            <img className="wd-rounded-corners-circle" height="50" width="50" src="https://images.saymedia-content.com/.image/t_share/MTc5NjQ1ODEzMTgwNDA5ODE2/the-tragedy-of-eren-yeager-how-the-character-changes-throughout-attack-on-titan.png"/>
          </div>
          <div className="col-11">
            <textarea className="wd-width wd-transparent wd-selector" placeholder="What's happening?"
                      onChange={(e) =>
                          setNewTuit({
                            ...newTuit,
                            tuit: e.target.value
                          })}>
            </textarea>

            <i className="ms-3 me-2 wd-color-cog fa-solid fa-image"></i>
            <i className="m-2 fa-solid wd-color-cog fa-arrow-trend-up"></i>
            <i className="m-2  fa-solid wd-color-cog fa-face-smile"></i>
            <i className="pb-3 m-2 wd-color-cog fa-solid fa-calendar"></i>


            <button className="btn btn-primary rounded-pill float-end" onClick={() => createTuit(dispatch, newTuit)}>
              Tuit
            </button>
          </div>
        </div>


      </>
  );
}
export default WhatsHappening;