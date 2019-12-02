import React, { useContext, useState } from 'react';

import ExpandButton from './components/ExpandButton';

import style from './styles.module.scss';
import DealsContext from "../../context";

const DealsNav = () => {
  const contextDeals = useContext(DealsContext);
  const { dealsData, name } = useContext(DealsContext);
  const [navData, setNavData] = useState([
    {
      navName: 'Overview',
      children: [],
      openButton: false,
    },
    {
      navName: 'Broker',
      children: [],
      openButton: false,
    },
    {
      navName: 'Solicitor',
      children: [],
      openButton: false,
    },
    {
      navName: 'Security',
      children: [
        {
          navName: 'Security 1',
          value: 'Security 1',
          checkValue: dealsData ? dealsData.security_details[0] : false,
        },
        {
          navName: 'Security 2',
          value: 'Security 2',
          checkValue: dealsData ? dealsData.security_details[1] : false,
        }
      ],
      openButton: false,
    },
    {
      navName: 'The loan',
      children: [],
      openButton: false,
    },
    {
      navName: 'Applicants',
      children: [
        {
          navName: 'Applicant 1',
          value: 'Applicant 1',
          checkValue: dealsData ? dealsData.applicants.individuals[0] : false,
        },
        {
          navName: 'Applicant 2',
          value: 'Applicant 2',
          checkValue: dealsData ? dealsData.applicants.individuals[1] : false,
        }
      ],
      openButton: false,
    },
    {
      navName: 'Income & credit',
      children: [
        {
          navName: 'Applicant 1',
          value: 'CreditApplicant1',
          checkValue: dealsData ? dealsData.applicants.individuals[0] : false,
        },
        {
          navName: 'Applicant 2',
          value: 'CreditApplicant2',
          checkValue: dealsData ? dealsData.applicants.individuals[1] : false,
        }
      ],
      openButton: false,
    },
    {
      navName: 'Additional notes',
      children: [],
      openButton: false,
    },
    {
      navName: 'Review & Submit',
      children: [],
      openButton: false,
    },
  ]);

  const newValueArray = (item, check, component, key) => {
    const newNavData = navData;
    const checkItem = item;
    if (check) {
      checkItem.openButton = checkItem.navName === check
    } else {
      checkItem.openButton = checkItem.navName === component
    }
    newNavData[key] = checkItem;
    setNavData(newNavData);
  };

  const handleClick = (component, check) => () => {
    navData.map((item, key) =>
      newValueArray(item, check, component, key)
    );
    contextDeals.setComponentName({ name: component });
  };

  const isComplete = (navName, applicationData) => {
    switch (navName) {
      case 'Broker':
      case 'Additional notes':
        return true;
      case 'Solicitor':
        return applicationData.progress.solicitor;
      case 'Security':
        return applicationData.progress.securities;
      case 'Applicants':
        return applicationData.progress.applicants;
      case 'Income & credit':
        return applicationData.progress.income_credit;
      case 'The loan':
        return applicationData.progress.loan;
      default:
        return false;
    }
  }

  return (
    <nav>
      {navData.map((item, key) =>
        <ExpandButton
          key={item.navName + `${key}`}
          txtButton={item.navName}
          setNav={item.children.length > 0 ? handleClick(item.children[0].value, item.navName) : handleClick(item.navName)}
          classActive={item.children.length > 0 ? name === item.children[0].value || name === item.children[1].value : name === item.navName}
          openButton={item.openButton}
          activeComponentNameChange={{ name, value: item.children }}
          isComplete={isComplete(item.navName, dealsData)}
        >
          {item.children.length > 0 && item.children.map((children) => {
            return children.checkValue ?
              <div
                key={children.navName}
                className={name === children.value ? style.dealsNav__linkText_disabled : style.dealsNav__linkText}
                onClick={handleClick(children.value, item.navName)}
              >
                {children.navName}
              </div>
              :
              null
          })}
        </ExpandButton>
      )}
    </nav>
  )
};

export default DealsNav;
