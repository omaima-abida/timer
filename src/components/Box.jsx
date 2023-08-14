import React, { Component } from 'react';
//import uuid from 'uuid'; 
import ListContainer from './ListContainer';
import ActionContainer from './ActionContainer';

class Box extends Component {
    state = {
        timers: [
            {
                title: "Apprendre React",
                project: "Développement web",
                elapsed: 5609620,
                id: "b26-g694d-005yt-cgtgdsd005",
                runningSince: null
            },
            {
                title: "Apprendre Angular",
                project: "Développement web",
                elapsed: 56096777,
                id: "b266s-d54sq-x4c-qsd",
                runningSince: null
            }
        ]
    }

    handleCreateTimer = ({ title, project }) => {
        const timer = {
            title,
            project,
            //id:uuid.v4(),
            elapsed: 0,
            runningSince: null
        };
        this.setState({
            timers: [...this.state.timers, timer]
        });
    }

    // handleEditTimer = ({ id, title, project }) => {
    //     this.setState({
    //         timers: this.state.timers.map(timer => {
    //             if (timer.id === id) {
    //                 return {
    //                     ...timer,
    //                     title,
    //                     project
    //                 };
    //             }
    //             return {...timer};
    //         })
    //     })
    // }



    handleEditTimer = ({ id, title, project }) => {
        this.setState(prevState => ({
            timers: prevState.timers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        title,
                        project
                    };
                }
                return { ...timer };
            })
        }));
    }

    handleDelete = id =>{
        this.setState ({
            timers : this.state.timers.filter(timer => timer.id !==id)
        });

    }

    handlePlay = id => {
        console.log('play');
        const now = Date.now();
        this.setState({
            timers : this.state.timers.map(timer => {
                if(id===timer.id) {
                    return {
                        ...timer,
                        runningSince : now
                    }
                } else { 

                    return { ...timer }
                    
                    }
   
            })
        })
    }

    handlePause = id => {
        console.log('pause');
        const now = Date.now();
        this.setState({
            timers : this.state.timers.map(timer => {
                if(id===timer.id) {
                    const nextElapsed = now - timer.runningSince;
                    return {
                        ...timer,
                        runningSince : null ,
                        elapsed : timer.elapsed + nextElapsed
                    }
                } else { 

                    return { ...timer }
                    
                    }
   
            })
        })
    }
    render() {
        return (
            <div className="boxed--view">
                <div className="boxed--view_box">
                    <ListContainer 
                        onFormSubmit={this.handleEditTimer} 
                        onDelete={this.handleDelete}
                        timers={this.state.timers} 
                        onPlay={this.handlePlay}
                        onPause={this.handlePause}
                              
                    />


                    <ActionContainer onFormSubmit={this.handleCreateTimer} />
                </div>
            </div>
        );
    }
}

export default Box;
