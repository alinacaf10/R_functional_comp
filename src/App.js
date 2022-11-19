import React, { useEffect } from "react";
import { useState } from "react";

function Modal({ onClick }) {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>
        </div>
        <div className="modal-body">
          <p>
            Заберите его в пункте выдачи до 15 апреля включительно, потом заказ
            придется отменить.
            <br />
            Вход в пункт выдачи только в маске и перчатках.
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClick}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
function Notification({ onClick }) {
  return (
    <div className="app">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn btn-primary" onClick={onClick}>
            Уведомления
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [close, setClose] = useState("");
  const [keyname, setKeyname] = useState("");

  const onClick = () => {
    setClose("close");
  };

  useEffect(() => {
    function keyPres(event) {
      setKeyname(event.key);
    }
    window.addEventListener("keydown", keyPres);
    if (keyname == "Escape") {
      onClick();
    }
    return () => {};
  }, [keyname]);
  const onOpen = () => {
    setKeyname("")
    setClose("");
  };
  return (
    <div>
      <Notification onClick={onOpen} />
      <div className={close}>
        <Modal onClick={onClick} />
      </div>
    </div>
  );
}

export default App;
