import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Input, DisplayCentered, PasswordIpt, CheckSession, ButtonDefault } from '../shared/components/';

export const Home: React.FC = () => {
  return (
    <DisplayCentered>
      <Input label="Email"></Input>
      <PasswordIpt></PasswordIpt>
      <CheckSession label="Permanecer Conectado"></CheckSession>
      <br />
      <ButtonDefault name="Entrar"></ButtonDefault>
      <br />
      <Typography>Ainda não tem uma conta?</Typography>
      <Link to={'/cadastro'}>Cadastre-se.</Link>
    </DisplayCentered>
  );
};
