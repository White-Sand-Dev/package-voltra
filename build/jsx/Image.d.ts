import type { ImageProps as SwiftImageProps } from './props/Image.js';
export type ImageAssetSource = {
    assetName: string;
};
export type ImageBase64Source = {
    base64: string;
};
export type ImageSource = ImageAssetSource | ImageBase64Source;
export type ImageProps = Omit<SwiftImageProps, 'source'> & {
    source?: ImageSource;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
};
export declare const Image: import("./createVoltraComponent.js").VoltraComponent<ImageProps>;
//# sourceMappingURL=Image.d.ts.map