import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { VoltraInteractionEvent } from '../events.js';
export type VoltraViewProps = {
    /**
     * Unique identifier for this view instance.
     * Used as 'source' in interaction events to identify which view triggered the event.
     * If not provided, a unique ID will be generated automatically.
     */
    id?: string;
    /**
     * Voltra JSX components to render
     */
    children: ReactNode;
    /**
     * Style for the view container
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Callback when user interacts with components in the view.
     * Events are filtered by this view's id (source).
     */
    onInteraction?: (event: VoltraInteractionEvent) => void;
    /**
     * Test ID for the view
     */
    testID?: string;
};
/**
 * A React Native component that renders Voltra UI using SwiftUI in the native layer.
 * This component accepts Voltra JSX components as children and renders them as SwiftUI components.
 *
 * @example
 * ```tsx
 * <VoltraView id="my-view" style={{ width: 200, height: 100 }}>
 *   <Voltra.VStack>
 *     <Voltra.Text>Hello World</Voltra.Text>
 *   </Voltra.VStack>
 * </VoltraView>
 * ```
 */
export declare function VoltraView({ id, children, style, onInteraction, testID }: VoltraViewProps): React.JSX.Element;
//# sourceMappingURL=VoltraView.d.ts.map