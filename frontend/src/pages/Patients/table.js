import * as ReactBootstrap from 'react-bootstrap'



export default function Table( {patientsList}) {
    const rowStyleFormat = { backgroundColor: 'white'};
    return (
        <ReactBootstrap.Table trStyle={{backgroundColor: '#FFF'}} bordered hover size="sm">
            <thead>
                <tr style= {rowStyleFormat}>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {patientsList.map((patient, i) => (
                <tr style= {rowStyleFormat} key={i}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                </tr>
                ))}
            </tbody>
        </ReactBootstrap.Table>)
}