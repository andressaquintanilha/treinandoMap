import React, { Component } from "react";

class frequenciasmusicais extends Component {
  state = {
    notas: [
      {
        nota: "Re",
        frequencia: "148Hz"
      },
      {
        nota: "Mi",
        frequencia: "165Hz"
      },
      {
        nota: "Fa",
        frequencia: "349Hz"
      },
      {
        nota: "Sol",
        frequencia: "198Hz"
      },
      {
        nota: "La",
        frequencia: "349Hz"
      },
      {
        nota: "Si",
        frequencia: "249Hz"
      },
      {
        nota: "Do",
        frequencia: "132Hz"
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Notas musicais e suas frequencias</h1>
        {this.state.notas.map((item) => (
          <div>
            <p>Nota: {item.nota}</p>
            <p>Frequencias: {item.frequencia}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default frequenciasmusicais;
