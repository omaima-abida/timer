import React , {Component} from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class Container extends Component {
    state ={
        isFormOpen : false
    }

    handleEditFormOpen = () => {
        this.setState ({isFormOpen : true});
    }

    handleEditFormClose = () => {
        this.setState ({isFormOpen : false});
    }

    onFormSubmit = ({title, project}) => {
        this.handleEditFormClose()
        this.props.onFormSubmit({title, project});
    }

    render() {
        return (
            <div className="list--container">
                {this.state.isFormOpen ? 
                (
                <TimerForm
                    title = {this.props.title}
                    project ={this.props.project}
                    //id={this.props.id}
                    onFormSubmit={this.props.onFormSubmit}
                    onCloseForm={this.handleEditFormClose}
                /> ) 

                :  
                ( <Timer 
                    title = {this.props.title}
                    project ={this.props.project}
                    id={this.props.id}
                    elapsed = {this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onEditFormOpen={this.handleEditFormOpen}
                    onDelete={this.props.onDelete}
                    onPlay={this.props.onPlay}
                    onPause={this.props.onPause}

                />)
            
            }
            </div>
        )
    }
}
  
export default Container;
