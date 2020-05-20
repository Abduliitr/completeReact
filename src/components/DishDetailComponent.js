import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    
    constructor(props){
        super(props);
    }

    renderComments(comments){
        
        if(comments.length != 0){
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comments)=>{
                            return (
                                <li>
                                    <p> {comments.comment} </p>
                                    <p> -- {comments.author} , {comments.date} </p>
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

    render() { 
        if(this.props.dish != null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText> {this.props.dish.description} </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }
}
 
export default DishDetail;