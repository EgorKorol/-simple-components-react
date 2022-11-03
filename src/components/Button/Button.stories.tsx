import { ComponentMeta } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import { Button } from './Button';

const Loader = () => (
    <svg width='22px' height='22px' viewBox='0 0 50 50'>
        <path
            fill='#000'
            d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'
        >
            <animateTransform
                attributeType='xml'
                attributeName='transform'
                type='rotate'
                from='0 25 25'
                to='360 25 25'
                dur='1s'
                repeatCount='indefinite'
            />
        </path>
    </svg>
);

const Icon = () => (
    <svg width={24} viewBox='0 0 24 24'>
        <path d='M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z'></path>
    </svg>
);

const StoryGridWrapper = ({ children }: PropsWithChildren<unknown>) => (
    <div style={{ display: 'grid', gap: 24 }}>{children}</div>
);

export default { title: 'Button', component: Button } as ComponentMeta<
    typeof Button
>;

export const Variants = () => (
    <StoryGridWrapper>
        <Button size='small'>Small</Button>
        <Button>Standard</Button>
        <Button size='large'>Large</Button>
        <Button href='#'>Link</Button>
    </StoryGridWrapper>
);

export const FullWidth = () => (
    <StoryGridWrapper>
        <Button size='small' isFullWidth>
            Small
        </Button>
        <Button isFullWidth>Standard</Button>
        <Button size='large' isFullWidth>
            Large
        </Button>
    </StoryGridWrapper>
);

export const TooMuchContent = () => (
    <StoryGridWrapper>
        <Button size='small'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquam eos laborum minus qui tempore unde ut.
            Accusantium consequatur culpa, deleniti distinctio error, impedit
            ipsum neque nisi obcaecati sequi vero. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusantium aliquam eos laborum minus
            qui tempore unde ut. Accusantium consequatur culpa, deleniti
            distinctio error, impedit ipsum neque nisi obcaecati sequi
            vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Button>
        <Button>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquam eos laborum minus qui tempore unde ut.
            Accusantium consequatur culpa, deleniti distinctio error, impedit
            ipsum neque nisi obcaecati sequi vero. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusantium aliquam eos laborum minus
            qui tempore unde ut. Accusantium consequatur culpa, deleniti
            distinctio error, impedit ipsum neque nisi obcaecati sequi
            vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Button>
        <Button size='large'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquam eos laborum minus qui tempore unde ut.
            Accusantium consequatur culpa, deleniti distinctio error, impedit
            ipsum neque nisi obcaecati sequi vero. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusantium aliquam eos laborum minus
            qui tempore unde ut. Accusantium consequatur culpa, deleniti
            distinctio error, impedit ipsum neque nisi obcaecati sequi
            vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Button>
    </StoryGridWrapper>
);

export const StandardLoading = () => (
    <StoryGridWrapper>
        <Button size='small' isLoading>
            Standard Loading
        </Button>
        <Button isLoading>Standard Loading</Button>
        <Button size='large' isLoading>
            Standard Loading
        </Button>
    </StoryGridWrapper>
);

export const CustomLoading = () => (
    <StoryGridWrapper>
        <Button size='small' loadingNode={<Loader />} isLoading>
            Custom Loading
        </Button>
        <Button loadingNode={<Loader />} isLoading>
            Custom Loading
        </Button>
        <Button size='large' loadingNode={<Loader />} isLoading>
            Custom Loading
        </Button>
    </StoryGridWrapper>
);

export const WithIcons = () => (
    <StoryGridWrapper>
        <Button startIcon={<Icon />}>With Start Icon</Button>
        <Button endIcon={<Icon />}>With End Icon</Button>
        <Button startIcon={<Icon />} endIcon={<Icon />}>
            With Both Icons
        </Button>
        <Button startIcon={<Icon />} endIcon={<Icon />} isLoading>
            With Both Icons And Loader
        </Button>
        <Button startIcon={<Icon />} endIcon={<Icon />}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquam eos laborum minus qui tempore unde ut.
            Accusantium consequatur culpa, deleniti distinctio error, impedit
            ipsum neque nisi obcaecati sequi vero. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusantium aliquam eos laborum minus
            qui tempore unde ut. Accusantium consequatur culpa, deleniti
            distinctio error, impedit ipsum neque nisi obcaecati sequi
            vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Button>
    </StoryGridWrapper>
);
