import './styles.css';

import cn from 'classnames';
import React, { PropsWithChildren, ReactElement } from 'react';

import { SimpleButtonProps } from './types';

export function Button({
    children,
    className,
    disabled,
    type,
    size,
    isFullWidth,
    isLoading,
    loadingNode,
    startIcon,
    endIcon,
    href,
    ...props
}: PropsWithChildren<SimpleButtonProps>): ReactElement {
    const isLink = !!href;
    const Tag = isLink ? 'a' : 'button';
    const specificProps = isLink
        ? { href }
        : {
              type: type || 'button',
              disabled: disabled || isLoading,
          };

    return (
        <Tag
            className={cn('simple-button', className, {
                'simple-button--small': size === 'small',
                'simple-button--large': size === 'large',
                'simple-button--full-width': isFullWidth,
                'simple-button--link': isLink,
            })}
            {...specificProps}
            {...props}
        >
            {startIcon && (
                <span className='simple-button__icon-wrapper'>{startIcon}</span>
            )}

            <span className='simple-button__content'>{children}</span>

            {endIcon && (
                <span className='simple-button__icon-wrapper'>{endIcon}</span>
            )}

            {isLoading
                ? loadingNode ?? (
                      <div className='simple-button__loader-wrapper'>
                          <span className='simple-button__loader' />
                      </div>
                  )
                : null}
        </Tag>
    );
}
