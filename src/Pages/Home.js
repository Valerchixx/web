/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Component/css/home.module.css';
import profile from './Component/images/profile.svg';
import Header from './Component/Header';
import arr from './Component/images/arrow.svg';
import Button from './Component/Button';
import Featured from './Component/Featured';
import Title from './Component/Title';
import Explorations from './Component/Explorations';
import Projects from './Component/Projects';
import Footer from './Component/Footer';

function Home() {
  return (
    <div className={styles.wrappers}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Header />
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introInner}>
            <div className={styles.textWrap}>
              <h2 className={styles.introH2}>
                Hi, I am Your Name
                A Product Designer
                based in City.
              </h2>
              <p className={styles.introParag}>
                I help businesses and companies reach
                their goals by designing user-centric digital
                products & interactive experiences.
              </p>
              <div className={styles.introBtn}>
                <Button />
              </div>
            </div>
            <div className={styles.imgWrap}>
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id={styles.featured} className={styles.feautured}>
        <div className={styles.container}>
          <Featured />
        </div>
      </div>
      <div className={styles.explorations}>
        <div className={styles.container}>
          <Title text="Visual Explorations" />
          <Explorations />
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.container}>
          <Title text="Personal Projects" />
          <Projects />
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.container}>
          <Title text="Contact Me" />
          <p className={styles.contactParag}>
            If you are looking to hire a product designer,
            I’m currently available for freelance work
          </p>
          <div className={styles.contactBtnWrap}>
            <Button />
          </div>
        </div>
      </div>
      <div className={styles.author}>
        <p className={styles.authorText}>Website created by Valeria Proshachenko</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Home;
