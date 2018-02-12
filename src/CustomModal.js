import Modal from 'react-modal';
import React from 'react';
import MatchList from './MatchList.js';
import MatchHeader from './MatchHeader.js';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class CustomModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{width:800}}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >

          <div className='row'>
            <div className='col-6'><MatchHeader count="5" label="home" team={this.props.hometeam} /></div>
            <div className='col-6'><MatchHeader count="5" label="away" team={this.props.awayteam} /></div>
          </div>
          <div className='row'>
            <div className='col-6'><MatchList fixtureid={this.props.fixtureid} dataset="homehome" team={this.props.hometeam} otherteam={this.props.awayteam} /></div>
            <div className='col-6'><MatchList fixtureid={this.props.fixtureid} dataset="awayaway" team={this.props.awayteam} otherteam={this.props.hometeam} /></div>
          </div>
          <div className='row'>  
            <div className='col-12'>&nbsp;</div>
          </div>
          <div className='row'>  
            <div className='col-6'><MatchList fixtureid={this.props.fixtureid} dataset="hometotal" team={this.props.hometeam} otherteam={this.props.awayteam} /></div>
            <div className='col-6'><MatchList fixtureid={this.props.fixtureid} dataset="awaytotal" team={this.props.awayteam} otherteam={this.props.hometeam} /></div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CustomModal;