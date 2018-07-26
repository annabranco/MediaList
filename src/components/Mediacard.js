import React from 'react';

// Componente Mediacard, forma normal

class Mediacard extends React.Component {


  render() {
let heartClassName = "fa-heart heart ";
if (this.props.heart === 'full') {
  heartClassName += "fas"
} else {
  heartClassName += "far"
}

//Establece fecha de nacimiento de cada persona en cada tarjeta
  let birthDate = new Date();
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'noviembre', 'diciembre']

  //Determina el día del nacimiento, de acuerdo con props recibido
  let dd = birthDate.setDate(this.props.bday);
  if(dd.length === 1) {
      dd = '0'+dd
  }
  let ddd = birthDate.getDay();
      ddd = days[ddd];

//Determina el mes del nacimiento, de acuerdo con props recibido
  let mm = birthDate.setMonth(this.props.bmonth);
  if(mm.length === 1) {
      mm = '0'+mm
  }
  let mmm = months[mm];

  //Determina el año del nacimiento, de acuerdo con props recibido
  let yyyy = birthDate.setFullYear(this.props.byear);

  let birthday = `${ddd}, ${dd} de ${mmm} de ${yyyy}`;




    return (

<div className="card__container">

    <div className="card__header">

        <img src={this.props.photo} alt="Anna's mugshot" className="card__header--photo"/>

        <div className="header--text">
            <h1 className="card__header--title">{this.props.name}</h1>
            <h2 className="card__header--date">{birthday}</h2>
        </div>
    </div>
    <div className="card__main">
        <p className="card__main--text">
        {this.props.text}</p>
    </div>
    <div className="card__footer">
        <p className="more">Leer más...</p>
        <p className="likes">{this.props.likes} <i className={heartClassName}></i></p>
    </div>

</div>
    );
  }
}

export default Mediacard;
