import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  /* Vamos definir isPrivate como bool (não é obrigatória) iremos definir logo abaixo um default */
  isPrivate: PropTypes.bool,
  /* Também definimos a prop-types de um component (poderá vir de uma classe ou de uma função),
    que poderá ser um elemento ou uma função.
    O component é obrigatório pois não temos como renderizar uma rota sem ter um componente nela */
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  /* Definimos que isPrivate por padrão é false, porisso na lonha 7 retiramos a atriuição false a isPrivate */
  isPrivate: false,
};
