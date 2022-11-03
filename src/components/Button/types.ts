import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { SimpleSizes } from '../types';

export type SimpleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        size?: SimpleSizes;
        isFullWidth?: boolean;
        isLoading?: boolean;
        loadingNode?: ReactNode;
        startIcon?: ReactNode;
        endIcon?: ReactNode;
    };
