import './styles.css';

import cn from 'classnames';
import React, { ReactElement } from 'react';

import { SimpleFormField } from './types';

export function FormField({
    label,
    labelProps,
    textAreaProps,
    inputProps,
    hiddenLabel,
    variant,
    hint,
    size,
    className,
}: SimpleFormField): ReactElement {
    return (
        <div
            className={cn(
                'simple-text-field',
                {
                    [`simple-text-field--${size}`]: size,
                },
                className
            )}
        >
            <div className='simple-text-field__wrapper'>
                <label
                    className={cn('simple-text-field__label', {
                        'simple-sr-only': hiddenLabel,
                        'simple-text-field__label--required':
                            inputProps?.required,
                    })}
                    {...labelProps}
                >
                    {label}
                </label>

                {variant === 'textarea' ? (
                    <textarea
                        className='simple-text-field__textarea'
                        {...textAreaProps}
                    />
                ) : (
                    <input
                        className='simple-text-field__input'
                        {...inputProps}
                    />
                )}
            </div>

            {hint && <p className='simple-text-field__hint'>{hint}</p>}
        </div>
    );
}
