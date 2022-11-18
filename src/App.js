import React from "react";
function Modal({onClick}) {
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
          <button type="button" className="btn btn-secondary" onClick={onClick} >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
function Notification({onClick}){
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

class App extends React.PureComponent {
  state={
    close:""
  }
onClick=()=>{
this.setState({close:"close"})
}
onOpen=()=>{
  this.setState({close:""})
}
  render(){
    return(
      <div>
      <Notification onClick={this.onOpen}/>
      <div className={this.state.close}><Modal  onClick={this.onClick}/></div>
      </div>
    )
  }
  
}


export default App;