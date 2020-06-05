import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, Form, ModalHeader, ModalBody, FormGroup, Label, Input, Col } from "reactstrap";
import { Link } from 'react-router-dom';


class CommentForm extends Component {
    // state = {  }
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false,
            rating: 1,
            name:'',
            comment:'',
            touched:{
                name: false
            }
        }
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit = (e) => {
        this.toggleModal();
        alert("Current State is: " + JSON.stringify(this.state));
        e.preventDefault();
    }

    render() { 
        return ( 
            <>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="select" id="rating" name="rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Your Name</Label>
                                <Input type="text" id="name" name="name" value={this.state.name}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" rows="6" id="comment" name="comment" value={this.state.comment}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

                <Button className="btn-outline-secondary" onClick={this.toggleModal}><span className="fa fa-pencil"></span>{'  '}
                    Submit Comment</Button>
                
            </>
        );
    }
}


function RenderComments({comments}){
    
    if(comments.length !== 0){
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comments)=>{
                        return (
                            <li>
                                <p> {comments.comment} </p>
                                <p> -- {comments.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))} </p>
                            </li>
                        );
                    })}
                </ul>
                <CommentForm />
            </div>
        );
    }
    else{
        return (
            <div></div>
        );
    }
    
}

const DishDetail = (props) => { 

    console.log('DishDetail Component render() invoked!')

    if(props.dish != null){
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        {/* <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem> */}
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText> {props.dish.description} </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div></div>
        );
    }
}

export default DishDetail;