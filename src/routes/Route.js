import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
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
