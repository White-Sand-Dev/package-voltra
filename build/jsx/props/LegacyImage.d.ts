import type { VoltraBaseProps } from '../baseProps';
export type LegacyImageProps = VoltraBaseProps & {
    /** Image source - { assetName: string } for Android drawable resources or preloaded assets */
    source: Record<string, any>;
    /** How the image should be resized to fit its container */
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
};
//# sourceMappingURL=LegacyImage.d.ts.map