// src/InfoPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const InfoPage = () => {
  const { id } = useParams();

  const data = {
    1: { title: 'Título 1', content: 'Conteúdo 1', gamelink: 'https://ninja.io' },
    2: { title: 'Título 2', content: 'Conteúdo 2' },
    3: { title: 'Título 3', content: 'Conteúdo 3' },
    4: { title: 'Título 3', content: 'Conteúdo 3' },

  };

  const info = data[id] || { title: 'Não encontrado', content: 'Nenhuma informação disponível.' };

  return (
    <div>
        <iframe src={info.gamelink}></iframe>
      <h1>{info.title}</h1>
      <p>{info.content}</p>
    </div>
  );
};

export default InfoPage;
