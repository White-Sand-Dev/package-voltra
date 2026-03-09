import type { ImageProps } from './props/Image.js';
export type { ImageProps };
export type ImageSource = {
    assetName: string;
} | {
    base64: string;
};
export type ImagePropsWithSource = Omit<ImageProps, 'source'> & {
    source: ImageSource;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
};
export declare const Image: import("../../jsx/createVoltraComponent.js").VoltraComponent<ImagePropsWithSource>;
//# sourceMappingURL=Image.d.ts.map