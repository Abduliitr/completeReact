import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";



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
                            <RenderComments comments={props.dish.comments} />
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