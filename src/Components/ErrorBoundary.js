import React, {Component} from "react";

class ErrorBoundary  extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError:false,
            errorMessage:''
        }
    }
componentDidCatch(error,info){
    this.setState({ hasError:true })

}

    render(props){
        if(this.state.hasError){
            return <h1>oooops wrong!!1</h1>
        }
        else{
            return(this.props.children)
        }
    }
}

export default ErrorBoundary;