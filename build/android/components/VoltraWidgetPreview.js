import React from 'react';
import { VoltraView } from './VoltraView.js';
const WIDGET_DIMENSIONS = {
    small: { width: 150, height: 100 },
    mediumSquare: { width: 200, height: 200 },
    mediumWide: { width: 250, height: 150 },
    mediumTall: { width: 150, height: 250 },
    large: { width: 300, height: 200 },
    extraLarge: { width: 350, height: 300 },
};
/**
 * A preview component that renders Voltra Android JSX content at specific dimensions.
 */
export function VoltraWidgetPreview({ family, style, children, ...voltraViewProps }) {
    const dimensions = WIDGET_DIMENSIONS[family];
    const previewStyle = [
        {
            width: dimensions.width,
            height: dimensions.height,
        },
        style,
    ];
    return (<VoltraView {...voltraViewProps} style={previewStyle}>
      {children}
    </VoltraView>);
}
//# sourceMappingURL=VoltraWidgetPreview.js.map