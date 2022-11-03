import './styles.css';

import cn from 'classnames';
import React, { PropsWithChildren, ReactElement } from 'react';

import { SimpleTypographyProps } from './types';

export function Typography({
    as = 'p',
    variant = 'p',
    align,
    spaceBottom,
    ...props
}: PropsWithChildren<SimpleTypographyProps>): ReactElement {
    const Tag = as;

    return (
        <Tag
            className={cn('simple-typography', {
                [`simple-typography--${variant}`]: variant,
                [`simple-typography--${align}`]: align,
                'simple-typography--spaceBottom': spaceBottom,
            })}
            {...props}
        />
    );
}
