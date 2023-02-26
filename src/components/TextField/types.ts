import {
    Attributes,
    DetailedHTMLProps,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    ReactNode,
    TextareaHTMLAttributes,
} from 'react';

import { SimpleSizes } from '../types';

export type SimpleFormField = {
    inputProps?: DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
    textAreaProps?: DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    >;
    labelProps?: DetailedHTMLProps<
        LabelHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
    >;
    label: ReactNode;
    hint?: ReactNode;
    hiddenLabel?: boolean;
    variant?: 'textarea';
    size?: SimpleSizes;
    className?: string;
};
