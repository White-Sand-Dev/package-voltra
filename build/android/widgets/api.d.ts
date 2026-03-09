import type { AndroidWidgetVariants, UpdateAndroidWidgetOptions, WidgetInfo } from './types.js';
export type { AndroidWidgetSize, AndroidWidgetSizeVariant, AndroidWidgetVariants, UpdateAndroidWidgetOptions, WidgetInfo, } from './types.js';
/**
 * Update an Android home screen widget with new content.
 *
 * The content will be stored in SharedPreferences and the widget
 * will be updated to display the new content.
 *
 * @param widgetId - The widget identifier
 * @param variants - An array of size variants with their breakpoints and content.
 *   Android will automatically select the best matching variant based on the
 *   actual widget dimensions.
 * @param options - Optional settings like deep link URL
 *
 * @example Different content per size
 * ```tsx
 * import { VoltraAndroid, updateAndroidWidget } from 'voltra'
 *
 * await updateAndroidWidget('weather', [
 *   {
 *     size: { width: 150, height: 100 },
 *     content: <VoltraAndroid.Text fontSize={32}>72°F</VoltraAndroid.Text>
 *   },
 *   {
 *     size: { width: 250, height: 150 },
 *     content: (
 *       <VoltraAndroid.Row>
 *         <VoltraAndroid.Text fontSize={32}>72°F</VoltraAndroid.Text>
 *         <VoltraAndroid.Column>
 *           <VoltraAndroid.Text>Sunny</VoltraAndroid.Text>
 *           <VoltraAndroid.Text>High: 78° Low: 65°</VoltraAndroid.Text>
 *         </VoltraAndroid.Column>
 *       </VoltraAndroid.Row>
 *     )
 *   }
 * ], { deepLinkUrl: '/weather' })
 * ```
 */
export declare const updateAndroidWidget: (widgetId: string, variants: AndroidWidgetVariants, options?: UpdateAndroidWidgetOptions) => Promise<void>;
/**
 * Reload widget timelines to refresh their content.
 *
 * Use this after updating data that widgets depend on (e.g., after preloading
 * new images) to force them to re-render.
 *
 * @param widgetIds - Optional array of widget IDs to reload. If omitted, reloads all widgets.
 *
 * @example
 * ```typescript
 * // Reload specific widgets
 * await reloadAndroidWidgets(['weather', 'calendar'])
 *
 * // Reload all widgets
 * await reloadAndroidWidgets()
 * ```
 */
export declare const reloadAndroidWidgets: (widgetIds?: string[]) => Promise<void>;
/**
 * Clear a widget's stored data.
 *
 * This removes the JSON content and deep link URL for the specified widget,
 * causing it to show its placeholder state.
 *
 * @param widgetId - The widget identifier to clear
 *
 * @example
 * ```typescript
 * await clearAndroidWidget('weather')
 * ```
 */
export declare const clearAndroidWidget: (widgetId: string) => Promise<void>;
/**
 * Clear all widgets' stored data.
 *
 * This removes the JSON content and deep link URLs for all configured widgets,
 * causing them to show their placeholder states.
 *
 * @example
 * ```typescript
 * await clearAllAndroidWidgets()
 * ```
 */
export declare const clearAllAndroidWidgets: () => Promise<void>;
/**
 * Request to pin a widget to the home screen.
 *
 * This will show the Android system pin widget dialog, allowing the user
 * to add the widget to their home screen. Optionally, you can provide
 * preview dimensions to show a preview of the widget in the pin dialog.
 *
 * See: https://developer.android.com/develop/ui/compose/glance/pin-in-app
 *
 * @param widgetId - The widget identifier to pin
 * @param options - Optional settings for the pin request
 * @param options.previewWidth - Optional preview width in dp (default: 245)
 * @param options.previewHeight - Optional preview height in dp (default: 115)
 * @returns Promise that resolves to true if the pin request was successful
 *
 * @example Basic usage
 * ```typescript
 * const success = await requestPinAndroidWidget('weather')
 * if (success) {
 *   console.log('Widget pin request sent')
 * }
 * ```
 *
 * @example With preview dimensions
 * ```typescript
 * const success = await requestPinAndroidWidget('weather', {
 *   previewWidth: 245,
 *   previewHeight: 115
 * })
 * ```
 */
export declare const requestPinAndroidWidget: (widgetId: string, options?: {
    previewWidth?: number;
    previewHeight?: number;
}) => Promise<boolean>;
/**
 * Fetches all active widget instances for the containing app on Android.
 *
 * @returns A promise that resolves to an array of active widget instances.
 *
 * @example
 * ```typescript
 * const widgets = await getActiveWidgets()
 * console.log('Active widgets:', widgets)
 * ```
 */
export declare const getActiveWidgets: () => Promise<WidgetInfo[]>;
//# sourceMappingURL=api.d.ts.map