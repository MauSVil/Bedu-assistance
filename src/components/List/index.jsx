import React from 'react'
import Table from 'react-bootstrap/Table'

const baseUrl = 'http://localhost:4000'

const List = ()=>{
    const query = `attendance?_expand=student&_expand=group`
    const [info, setInfo] = React.useState([])

    React.useEffect(()=>{
        const fetchData = async() =>{
            const dataRaw = await fetch(`${baseUrl}/${query}`)
            const data = await dataRaw.json()
            setInfo(data)
        }

        fetchData()
        return ()=>{
            console.log('asd');
        }
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
                {info.map((currentValue,id)=>{
                    return(
                        <tr key={id}>
                            <th>{currentValue.student.name}</th>
                            <th>{currentValue.student.lastname}</th>
                            <th>{currentValue.date}</th>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default List