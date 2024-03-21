import React, { useState,useEffect } from 'react';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup'

function Listofbook(props){
    
    return(
        <>
        <Container>
        <InputGroup hasValidation>
            <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg></InputGroup.Text>
            <Form.Control type="text"/>
            <Form.Control.Feedback>
            Please choose a name.
            </Form.Control.Feedback>
        </InputGroup>

        <h3 style={{marginTop:'20px'}}>A List Of Book</h3>

        <ListGroup>
    
        <ListGroup.Item className='fix'>
        <div className='left'>
                trai
            </div>
            <div className='right'>
                le ba ha lam
            </div>
        </ListGroup.Item>
    
        </ListGroup>

        <Form.Select aria-label="Default select example" style={{marginTop:'20px',marginBottom:'20px'}}>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>

        <h3>Add A New Book</h3>

        <Form>
        <Form.Group className="mb-3" controlId="formGroupTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="Title"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control type="Author"/>
        </Form.Group>
        </Form>
        <Form className='fix'>
        <Form.Check
            type="switch"
            id="custom-switch"
            label="Favorite"
        />
        <button style={{backgroundColor: 'green',color: 'white',borderRadius: '6px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
        </svg>
            Add
        </button>
        </Form>

        </Container>
        </>
    );
}
export default Listofbook;