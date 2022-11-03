import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { Typography } from './Typography';

export default {
    title: 'Typography',
    component: Typography,
} as ComponentMeta<typeof Typography>;

export const Variants = () => (
    <div>
        <Typography as='h1' variant='h1'>
            h1 Heading
        </Typography>
        <Typography as='h2' variant='h2'>
            h2 Heading
        </Typography>
        <Typography as='h3' variant='h3'>
            h3 Heading
        </Typography>
        <Typography as='h4' variant='h4'>
            h4 Heading
        </Typography>
        <Typography as='h5' variant='h5'>
            h5 Heading
        </Typography>
        <Typography as='h6' variant='h6'>
            h6 Heading
        </Typography>
        <Typography as='p' variant='p'>
            p Paragraph
        </Typography>
    </div>
);

export const WithSpaces = () => (
    <div>
        <Typography as='h1' variant='h1' spaceBottom>
            h1 Heading
        </Typography>
        <Typography as='h2' variant='h2' spaceBottom>
            h2 Heading
        </Typography>
        <Typography as='h3' variant='h3' spaceBottom>
            h3 Heading
        </Typography>
        <Typography as='h4' variant='h4' spaceBottom>
            h4 Heading
        </Typography>
        <Typography as='h5' variant='h5' spaceBottom>
            h5 Heading
        </Typography>
        <Typography as='h6' variant='h6' spaceBottom>
            h6 Heading
        </Typography>
        <Typography as='p' variant='p' spaceBottom>
            p Paragraph
        </Typography>
    </div>
);

export const Alignments = () => (
    <div>
        <Typography>Lorem ipsum dolor.</Typography>
        <Typography align='center'>Lorem ipsum dolor.</Typography>
        <Typography align='end'>Lorem ipsum dolor.</Typography>
    </div>
);
