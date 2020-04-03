import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>このアプリについて</h1>
      <p>ぴえん文字を作成するためのアプリです。</p>
      <p>このアプリのソースコードは<a href="https://github.com/pitang1965/pien-moji">GitHub</a>にあります。</p>
      <p>詳細記事は<a href="https://software.pitang1965.com/tag/pien/">ブログ</a>にあげます。</p>
      <p>作成者：ピータン<a href="https://twitter.com/pitang1965">(Twitter)</a></p>
      <br />
      <h2>我が家のメダカです</h2>
      <iframe
        title='Tomora'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/4e9PS8PYrHo'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </Fragment>
  );
};

export default About;