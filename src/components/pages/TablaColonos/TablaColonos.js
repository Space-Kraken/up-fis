import React, { Component } from "react";
import { Icon, Table } from "semantic-ui-react";
import "./TablaColonos.scss";
class TablaColonos extends Component {
  state = {
    colonos: [
      {
        id: "1",
        name: "Ernesto Cano Perez",
        ene: false,
        feb: false,
        mar: false,
        abr: false,
        may: false,
        jun: false,
        jul: false,
        ago: false,
        sep: false,
        oct: false,
        nov: false,
        dic: false,
      },
      {
        id: "2",
        name: "Cristina aguilar Rodriguiez",
        ene: false,
        feb: false,
        mar: false,
        abr: false,
        may: false,
        jun: false,
        jul: false,
        ago: false,
        sep: false,
        oct: false,
        nov: false,
        dic: false,
      },
      {
        id: "3",
        name: "Cristina aguilar Rodriguiez",
        ene: false,
        feb: false,
        mar: false,
        abr: false,
        may: false,
        jun: false,
        jul: false,
        ago: false,
        sep: false,
        oct: false,
        nov: false,
        dic: false,
      },
      {
        id: "4",
        name: "Cristina aguilar Rodriguiez",
        ene: false,
        feb: false,
        mar: false,
        abr: false,
        may: false,
        jun: false,
        jul: false,
        ago: false,
        sep: false,
        oct: false,
        nov: false,
        dic: false,
      },
      {
        id: "5",
        name: "Cristina aguilar Rodriguiez",
        ene: false,
        feb: false,
        mar: false,
        abr: false,
        may: false,
        jun: false,
        jul: false,
        ago: false,
        sep: false,
        oct: false,
        nov: false,
        dic: false,
      },
      {
        id: "6",
        name: "Cristina aguilar Rodriguiez",
        ene: true,
        feb: true,
        mar: true,
        abr: true,
        may: true,
        jun: true,
        jul: true,
        ago: true,
        sep: true,
        oct: true,
        nov: true,
        dic: false,
      },
    ],
  };
  render() {
    return (
      <div className="tableColonos">
        <Table className="table" color="black" inverted celled structured>
          {/* <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell rowSpan="2">Nombre</Table.HeaderCell>
              <Table.HeaderCell colSpan="12">Pagos</Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Ene</Table.HeaderCell>
              <Table.HeaderCell>Feb</Table.HeaderCell>
              <Table.HeaderCell>Mar</Table.HeaderCell>
              <Table.HeaderCell>Abr</Table.HeaderCell>
              <Table.HeaderCell>May</Table.HeaderCell>
              <Table.HeaderCell>Jun</Table.HeaderCell>
              <Table.HeaderCell>Jul</Table.HeaderCell>
              <Table.HeaderCell>Ago</Table.HeaderCell>
              <Table.HeaderCell>Sep</Table.HeaderCell>
              <Table.HeaderCell>Oct</Table.HeaderCell>
              <Table.HeaderCell>Nov</Table.HeaderCell>
              <Table.HeaderCell>Dec</Table.HeaderCell>
            </Table.Row>
          </Table.Header> */}

          <Table.Body className="body">
            {this.state.colonos.map((colonos, i) => {
              return (
                <Table.Row className="row" textAlign="center" key={i}>
                  <Table.Cell className="cell">{colonos.name}</Table.Cell>
                  <Table.Cell className="cell">
                    Ene
                    <Icon
                      color={colonos.ene ? "green" : "red"}
                      name={colonos.ene ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    Feb
                    <Icon
                      color={colonos.feb ? "green" : "red"}
                      name={colonos.feb ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    Mar
                    <Icon
                      color={colonos.mar ? "green" : "red"}
                      name={colonos.mar ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    Abr
                    <Icon
                      color={colonos.abr ? "green" : "red"}
                      name={colonos.abr ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    May
                    <Icon
                      color={colonos.may ? "green" : "red"}
                      name={colonos.may ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    Jun
                    <Icon
                      color={colonos.jun ? "green" : "red"}
                      name={colonos.jun ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    Jul
                    <Icon
                      color={colonos.jul ? "green" : "red"}
                      name={colonos.jul ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    Ago
                    <Icon
                      color={colonos.ago ? "green" : "red"}
                      name={colonos.ago ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    Sep
                    <Icon
                      color={colonos.sep ? "green" : "red"}
                      name={colonos.sep ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    Oct
                    <Icon
                      color={colonos.oct ? "green" : "red"}
                      name={colonos.oct ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    Nov
                    <Icon
                      color={colonos.nov ? "green" : "red"}
                      name={colonos.nov ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    Dec
                    <Icon
                      color={colonos.dic ? "green" : "red"}
                      name={colonos.dic ? "checkmark" : "close"}
                      size="small"
                    />
                  </Table.Cell>
                  <Table.Cell className="cell">
                    <button className="ui circular icon button">
                      <Icon aria-hidden="true" className="settings icon" />
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
export default TablaColonos;
