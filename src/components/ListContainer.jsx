import React, { Component } from 'react';
import Container from './Container';
//import PropTypes from 'prop-types';

class ListContainer extends Component{

    renderContainer = () => { 
        return this.props.timers.map((timer) => {

            return ( <Container
                    onFormSubmit={this.props.onFormSubmit}
                    onDelete={this.props.onDelete}
                    onPlay={this.props.onPlay}
                    onPause={this.props.onPause}
                    key={timer.id}
                    {...timer}
                    />
                    )
                }
                )

            }
render(){
    
    return (
        <div className="list--container">
            {this.renderContainer()}
        </div>
    )

}  }

// ListContainer.propTypes = {
//     onFormSubmit: PropTypes.func.isRequired,
//     onDelete: PropTypes.func.isRequired,
//     timers: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             // ... other properties
//         })
//     ).isRequired,
//     onPlay: PropTypes.func.isRequired,
//     onPause: PropTypes.func.isRequired
// };

export default ListContainer;
