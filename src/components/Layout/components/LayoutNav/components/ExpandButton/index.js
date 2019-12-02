import React, { Fragment } from "react";
import { Icon } from 'lendinvest-styleguide';
import style from '../../styles.module.scss';

const ExpandButton = ({
  children,
  txtButton,
  setNav,
  classActive,
  openButton,
  activeComponentNameChange,
  isComplete
}) => {
  const changeValue = children ?
    activeComponentNameChange.name !== activeComponentNameChange.value[0].value &&
    activeComponentNameChange.name !== activeComponentNameChange.value[1].value
    :
    false;
  const handleClick = () => {
    setNav();
  };
  return (
    <Fragment>
      <div
        className={!classActive ? style.dealsNav__linkButton : style.dealsNav__linkButton_disabled}
        onClick={handleClick}
      >
        {txtButton}
        {isComplete && <Icon content="done" className={style.done_icon} />}
      </div>
      {!changeValue && openButton ?
        <div className={style.dealsNav__linkButton__children}>
          {children}
        </div>
        :
        null
      }
    </Fragment>
  )
};

export default ExpandButton;
