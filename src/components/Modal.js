import React from 'react'
import './Modal.css';
import {hideModal} from "../state/actions/Modals";
import { store } from "../state";

// This component is about the Modal display call
export default class Modal extends React.Component {
    closeModal() {
       
        //store.dispatch(hideModal());
    };
    render() {
       
       
        return (
            <div className="Modal">
              
                {this.props.children}
            </div>
        )
    }
}

