import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input, Loader, Message } from 'semantic-ui-react';
import 'whatwg-fetch';// fetch window.fetch polyfill
import { getPropertyDataAction } from '../actions';
import PropertyDetails from './PropertyDetails';
import styles from './App.css';

const App = props => {
  const {
    getPropertyData,
    property,
    propertyError,
    propertyLoadingState,
  } = props;

  return (
    <div className={styles.container} >
      <Input placeholder="Search Property..." onChange={getPropertyData} className={styles.searchInput} />
      {propertyError && <Message negative >
        <Message.Header>We&apos;re sorry we can&apos;t fetch property data!</Message.Header>
        <p>{propertyError}</p>
      </Message>}
      {propertyLoadingState ?
        <Loader
          size="large"
          active as="div"
        >
          Loading movies
        </Loader>
        : <PropertyDetails property={property} />}
    </div>
  );
};

App.propTypes = {
  getPropertyData: PropTypes.func.isRequired,
  propertyError: PropTypes.string,
  property: PropTypes.object,
  propertyLoadingState: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => {
  return {
    property: state.property,
    propertyError: state.propertyError,
    propertyLoadingState: state.loadingState,
  };
};
export default connect(mapStateToProps, {
  getPropertyData: getPropertyDataAction,
})(App);
