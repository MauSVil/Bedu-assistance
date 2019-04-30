import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const baseUrl = "http://localhost:4000"



class Create extends Component{
    
    state={
        name:'',
        lastname: '',
        date: '',
        groupId: 1
    }

    getData = async () =>{
        const dataRaw = await fetch(`${baseUrl}/students`)
        const data = await dataRaw.json()
        console.log(data)
    }

    sendData = async (data)=>{
            const response = await fetch(`http://localhost:4000/students`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        if(!response.ok){
            this.setState({
                variant: 'danger',
                message: 'Not succesfull'
            })
            return
        }
        this.setState({
            variant: 'success',
            message: 'Succesfull'
        })
    }

    getId = async(data)=>{ //Aqui se debe de obtener el Id del Estudiante que se mando
       console.log(await this.sendData(data))
    }

    handleChange = e =>{
        const {id, value} = e.target
        this.setState({
            [id]:value,
            variant: '',
            message:''
        })   
    }

    handleSubmit = async e =>{
        e.preventDefault()
        const {
            name,
            lastname,
            groupId,
          } = this.state

        // const groupId = 1

        const studentByNameRaw = await fetch(`${baseUrl}/students?q=${this.state.name}`)
        const sudentByName = await studentByNameRaw.json()

        const studentByLastnameRaw = await fetch(`${baseUrl}/students?q=${this.state.lastname}`)
        const studentByLastname = await studentByLastnameRaw.json()

        sudentByName.length && studentByLastname.length
        ? this.setState({
            variant:'danger',
            message:'You have been registered'
        })
        : this.getId({name,lastname,groupId})

    }

    render(){
        return(
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="John"
                            onChange= {this.handleChange}
                            id="name"
                        /> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Gutierrez"
                            onChange= {this.handleChange}
                            id="lastname"
                        /> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="John"
                            onChange= {this.handleChange}
                            id="date"
                        /> 
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Alert variant={this.state.variant}>
                    {this.state.message}
                </Alert>
            </>
        )
    }
}

export default Create