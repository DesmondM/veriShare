import React from 'react';
import { render } from 'react-dom';

import './index.css';

const data = [
  {
    id: '1',
    title: 'SapientNitro',
    description: 'I used to work at SapientNitro.',
    url: 'https://placeimg.com/150/150/nature/sepia'
  },
  {
    id: '2',
    title: 'Razorfish',
    description: 'SapientNitro merged with Razorfish.',
    url: 'https://placeimg.com/150/150/animals/sepia'
  },
  {
    id: '3',
    title: 'SapientRazorfish',
    description: 'Now I work at SapientRazorfish.',
    url: 'https://placeimg.com/150/150/tech/sepia'
  },
];

class ProjectData extends React.Component {
  
  state = {
    projects: [],
    activeProject: '',
    modalTitle: '',
    modalDescription: ''
  }

  componentDidMount() {
    this.setState({ projects: data });
  }

  handleModalOpen = (idx) => {
    this.setState({
      activeProject: idx,
      modalTitle: this.state.projects[idx].title,
      modalDescription: this.state.projects[idx].description
    });  
  };

  handleModalClose = () => {
    this.setState({
      activeProject: ''
    });  
  };

  handleNextProject = () => {
    
    var arr = this.state.projects.length;
    var idx = this.state.activeProject + 1;
    var idx = idx % arr;
    
    this.setState({
      activeProject: idx,
      modalTitle: this.state.projects[idx].title,
      modalDescription: this.state.projects[idx].description
    }); 
  }

  handlePrevProject = () => {
    var arr = this.state.projects.length;
    var idx = this.state.activeProject;
    
    console.log('initial: ' + idx);
    
    if (idx === 0) {
      var idx = arr - 1;
    } else {
      var idx = idx -1;
    }
    
    console.log('updated: ' + idx);
    
    this.setState({
      activeProject: idx,
      modalTitle: this.state.projects[idx].title,
      modalDescription: this.state.projects[idx].description
    });  
  }

  render() {
    
    console.log(this.state)
    
    function nextTitle(idx, arr) {
      var i = idx + 1;
      var i = i % arr.length;
      return arr[i].title;
    }
    
    function prevTitle(idx, arr) {
      
      if (idx === 0) {
        var i = arr.length -1;
      } else {
        var i = idx -1;
      }
      
      return arr[i].title;
    }

    const projectComponents = data.map((data, idx, arr) =>
      <Project
        key={'project-' + data.id}
        index={idx}
        title={data.title}
        url={data.url}
        onModalOpen={this.handleModalOpen}
      />,
    );

    if(this.state.activeProject === '') {
      return (
        <div>
          <h3>Click on a project below to view details.</h3>
          {projectComponents}
        </div>
      );
    } else {
      return (
        <div>
          <Modal 
            title={this.state.modalTitle}
            description={this.state.modalDescription}
            previousTitle={prevTitle(this.state.activeProject, data)}
            nextTitle={nextTitle(this.state.activeProject, data)}
            onModalClose={this.handleModalClose}
            onNext={this.handleNextProject}
            onPrev={this.handlePrevProject}
          />
        </div>
      );
    }
  }
}

class Modal extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.description}</h3>
        <button onClick={this.props.onPrev}>{'\u2B05'} {this.props.previousTitle}</button>
        <button onClick={this.props.onModalClose}>Close Modal</button>
        <button onClick={this.props.onNext}>{this.props.nextTitle} {'\u27A1'}</button>    
      </div>
    );
  }
}

class Project extends React.Component {
  render() {
    return (
      <div onClick={this.props.onModalOpen.bind(this, this.props.index)}>
        <img src={this.props.url} />
      </div>
    );
  }
}

render(<ProjectData />, document.getElementById('root'));
