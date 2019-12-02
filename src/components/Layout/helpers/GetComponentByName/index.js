import React from 'react';

const getComponentByName = (name) => {
  switch (name) {
    case 'Overview':
      return <div />;
    case 'Broker':
      return <div />;
    case 'Solicitor':
      return <div/>;
    case 'Security 1':
      return <div/>;
    case 'Security 2':
      return <div/>;
    case 'The loan':
      return <div/>;
    case 'Applicant 1':
      return <div/>;
    case 'Applicant 2':
      return <div/>;
    case 'CreditApplicant1':
      return <div/>;
    case 'CreditApplicant2':
      return <div/>;
    case 'Additional notes':
      return <div/>;
    default:
      return <div>Nothing to show..(</div>
  }
};

export default getComponentByName;
