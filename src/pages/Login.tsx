import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Input, DisplayCentered, PasswordIpt, CheckSession, ButtonDefault } from '../shared/components';

export const Login: React.FC = () => {
  return (
    <DisplayCentered>
      <Input label="Email"></Input>
      <PasswordIpt label="Senha"></PasswordIpt>
      <CheckSession label="Permanecer Conectado"></CheckSession>
      <br />
      <ButtonDefault name="Entrar"></ButtonDefault>
      <br />
      <Typography variant="subtitle1">Ainda não tem uma conta?</Typography>
      <Link to={'/cadastro'}>Cadastre-se.</Link>
    </DisplayCentered>
  );
};
