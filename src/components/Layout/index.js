import React, { useState, useContext } from 'react';

import LayoutNav from './components/LayoutNav'
import getComponentByName from './helpers/GetComponentByName';
import LayoutContext from './context';

import style from './styles.module.scss'


const Layout = () => {
  const {name} = useContext(LayoutContext);
  return (
      <section className={style.dealsPage}>
        <div className={style.dealsPage__header}>
          <LayoutHeader />
        </div>
        <div className={style.dealsPage__content}>
          <LayoutNav activeComponentName={name} />
          <article>
            {getComponentByName(name)}
          </article>
        </div>
      </section>
  );
};

export default Layout;