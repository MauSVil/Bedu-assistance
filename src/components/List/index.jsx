import React from 'react'
import Table from 'react-bootstrap/Table'

const List = ()=>{
    React.useEffect(()=>{

    },[])
    return(
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>John</th>
                    <th>Connor</th>
                    <th>2012/02/02</th>
                </tr>
            </tbody>
        </Table>
    )
}

export default List