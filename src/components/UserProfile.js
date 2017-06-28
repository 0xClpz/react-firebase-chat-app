import React, {Component} from 'react';
import PropTypes from 'prop-types';

const toggleEditName = state => ({
  ...state,
  editingName: !state.editingName
});

const toggleEditPicture = state => ({
  ...state,
  editingPicture: !state.editingPicture
});

export class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      editingName: false,
      editingPicture: false,
    }
  }

  render(){
    const {profile} = this.props;
    return (
      <div className="user-profile">
        <div className="profile-picture">
          <img
            src={profile.picture}
            alt="User profile"
            onDoubleClick={() => this.setState(toggleEditPicture)}/>
          {this.state.editingPicture &&
            <span>
              <input
                type="text"
                name="picture"
                onChange={this.props.update}
                value={profile.picture} />

              <button
                onClick={() => this.setState(toggleEditPicture)}>
                Ok
              </button>
            </span>
          }
        </div>
        {
          this.state.editingName ?
            <span className="profile-name">
              <input
                type="text"
                name="name"
                onChange={this.props.update}
                value={profile.name}/>
              <button
                onClick={() => this.setState(toggleEditName)}>
                Ok
              </button>
            </span>
            :
            <p
              onDoubleClick={() => this.setState(toggleEditName)}>
              {profile.name}
            </p>
        }
      </div>
    );
  }
}

UserProfile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.picture,
  }).isRequired,
};
