import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { register } from '../../context/actions/register';
import Header from '../../components/Header';

const RegisterContainer = (props) => {

  useEffect(() => {
    register();
  }, []);

  return (
    <div>
      <Header/>
    <h1>register</h1>
  </div>
  );
};

RegisterContainer.propTypes = {};

export default RegisterContainer;
