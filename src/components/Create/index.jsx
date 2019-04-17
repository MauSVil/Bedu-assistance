import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const baseUrl = "http://localhost:4000"



class Create extends Component{
    state={
        name:'',
        lastname: '',
        date: ''
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

        const groupId = 1

        const aRaw = await fetch(`${baseUrl}/students`)
        const a = await aRaw.json()



        e.preventDefault()
        const response = await fetch(`http://localhost:4000/attendance`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
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