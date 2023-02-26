import { ComponentMeta } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import { FormField } from './FormField';

export default {
    title: 'FormField',
    component: FormField,
} as ComponentMeta<typeof FormField>;

const StoryGridWrapper = ({ children }: PropsWithChildren<unknown>) => (
    <div style={{ display: 'grid', gap: 16 }}>{children}</div>
);

export const Variants = () => (
    <StoryGridWrapper>
        <FormField
            label='Label'
            hiddenLabel
            inputProps={{ placeholder: 'Hidden label' }}
        />
        <FormField label='Input' inputProps={{ required: true }} />
        <FormField label='Textarea' variant='textarea' />
        <FormField label='Input' hint='With hint' />
        <FormField
            label='Textarea'
            hint='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum impedit libero modi nihil quo saepe temporibus veniam voluptatibus! Odio placeat praesentium quas suscipit voluptatibus. Adipisci doloribus est provident quasi veritatis?'
            variant='textarea'
        />
    </StoryGridWrapper>
);

export const Sizes = () => (
    <StoryGridWrapper>
        <FormField label='Small input' hint='With hint' size='small' />
        <FormField label='Standard input' hint='With hint' />
        <FormField label='Large input' hint='With hint' size='large' />
        <FormField
            label='Small textarea'
            hint='With hint'
            variant='textarea'
            size='small'
        />
        <FormField
            label='Standard textarea'
            hint='With hint'
            variant='textarea'
        />
        <FormField
            label='Large textarea'
            hint='With hint'
            variant='textarea'
            size='large'
        />
    </StoryGridWrapper>
);
