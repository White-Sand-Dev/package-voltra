import type { ReactNode } from 'react';
import type { VoltraBaseProps } from '../baseProps';
export type AndroidImageProps = VoltraBaseProps & {
    /** Image source */
    source: Record<string, any>;
    /** Resizing mode */
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    /** Custom fallback content rendered when the image is missing */
    fallback?: ReactNode;
};
//# sourceMappingURL=AndroidImage.d.ts.map