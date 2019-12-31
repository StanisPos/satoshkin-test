import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = require('./styles.module.scss');

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    }
  }

  componentDidMount = () => {
    const { id } = this.props;

    this.setState({
      ...this.state,
      number: localStorage.getItem(`number${id}`) || 0,
    });
  }

  onChange = ({ target }) => {
    this.setState(
      {
        ...this.state,
        number: target.value,
      }
    );
  }

  save = (id, value) => {
    localStorage.setItem(`number${id}`, value);
  }

  onBlur = ({ target }) => {
    this.save(target.id, target.value);
  }

  onEnter = (event) => {
    if (event.key === 'Enter') {
      this.save(event.target.id, event.target.value);
    }
  }

  render = () => {
    const { id } = this.props;
    const { number } = this.state;

    return (
    <input
      className={styles.numberField}
      type="number"
      id={id}
      value={number}
      // value={number ? number : 0}
      onChange={this.onChange}
      onBlur={this.onBlur}
      onKeyDown={this.onEnter}
      min={0}
      max={100}
    />
  )};
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
};
