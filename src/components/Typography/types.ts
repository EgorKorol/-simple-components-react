import { BaseHTMLAttributes } from 'react';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type SimpleTypographyProps = BaseHTMLAttributes<HTMLHeadingElement> & {
    align?: 'center' | 'end';
    as?: Headings | 'p';
    variant?: Headings | 'p';
    spaceBottom?: boolean;
};
