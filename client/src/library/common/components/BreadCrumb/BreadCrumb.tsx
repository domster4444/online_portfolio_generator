/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// ? MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkI from '@mui/material/Link';
import { Link } from 'react-router-dom';

import './BreadCrumb.css';

type PropTypes = {
  currentPath: string;
};
const BreadCrumb = ({ currentPath }: PropTypes) => {
  return (
    <Breadcrumbs
      style={{ fontSize: '2rem', margin: '0.75rem 0rem' }}
      aria-label="breadcrumb"
    >
      <Link to="/welcome">
        <LinkI className="location" underline="hover" color="inherit">
          HOME
        </LinkI>
      </Link>

      <Link to={`/${currentPath.toLowerCase()}`}>
        <LinkI
          className="location"
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          {currentPath.toUpperCase()}
        </LinkI>
      </Link>

      <Typography style={{ fontSize: '2rem' }} color="text.primary">
        Breadcrumbs
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
