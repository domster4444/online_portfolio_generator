import React from 'react';

// ? MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const BreadCrumb = () => {
  return (
    <Breadcrumbs
      style={{ fontSize: '2rem', margin: '0.75rem 0rem' }}
      aria-label="breadcrumb"
    >
      <Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/getting-started/installation/"
      >
        Core
      </Link>
      <Typography style={{ fontSize: '2rem' }} color="text.primary">
        Breadcrumbs
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
