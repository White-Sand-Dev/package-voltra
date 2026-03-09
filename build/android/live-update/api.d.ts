import type { AndroidLiveUpdateVariants, StartAndroidLiveUpdateOptions, UpdateAndroidLiveUpdateOptions, UseAndroidLiveUpdateOptions, UseAndroidLiveUpdateResult } from './types.js';
/**
 * @unstable This API is experimental and may change in future versions.
 *
 * React hook for managing Android Live Updates with automatic lifecycle handling.
 *
 * @param variants - The Android Live Update content variants to display
 * @param options - Configuration options for the hook
 * @returns Object with start, update, end methods and isActive state
 *
 * @example
 * ```tsx
 * import { VoltraAndroid, useAndroidLiveUpdate } from 'voltra'
 *
 * const MyLiveUpdate = () => {
 *   const { start, update, end, isActive } = useAndroidLiveUpdate({
 *     collapsed: <VoltraAndroid.Text>Delivery arriving</VoltraAndroid.Text>,
 *     expanded: <VoltraAndroid.Column>...</VoltraAndroid.Column>,
 *     channelId: 'delivery_updates',
 *   }, {
 *     updateName: 'my-live-update',
 *     autoStart: true,
 *     autoUpdate: true
 *   })
 *
 *   return (
 *     <View>
 *       <Button title={isActive ? "Stop" : "Start"} onPress={isActive ? end : start} />
 *     </View>
 *   )
 * }
 * ```
 */
export declare const useAndroidLiveUpdate: (variants: AndroidLiveUpdateVariants, options?: UseAndroidLiveUpdateOptions) => UseAndroidLiveUpdateResult;
/**
 * @unstable This API is experimental and may change in future versions.
 *
 * Start a new Android Live Update with the provided content variants.
 *
 * @param variants - The Android Live Update content variants to display
 * @param options - Configuration options for the Live Update
 * @returns Promise resolving to the notification ID
 *
 * @example
 * ```tsx
 * import { VoltraAndroid, startAndroidLiveUpdate } from 'voltra'
 *
 * const notificationId = await startAndroidLiveUpdate({
 *   collapsed: <VoltraAndroid.Text>Delivery arriving</VoltraAndroid.Text>,
 *   expanded: <VoltraAndroid.Column>...</VoltraAndroid.Column>,
 *   channelId: 'delivery_updates',
 * }, {
 *   updateName: 'my-live-update',
 * })
 * ```
 */
export declare const startAndroidLiveUpdate: (variants: AndroidLiveUpdateVariants, options?: StartAndroidLiveUpdateOptions) => Promise<string>;
/**
 * @unstable This API is experimental and may change in future versions.
 *
 * Update an existing Android Live Update with new content.
 *
 * @param notificationId - The ID of the notification to update
 * @param variants - The new Android Live Update content variants
 * @param options - Update options
 *
 * @example
 * ```tsx
 * import { VoltraAndroid, updateAndroidLiveUpdate } from 'voltra'
 *
 * await updateAndroidLiveUpdate('notification-123', {
 *   collapsed: <VoltraAndroid.Text>Updated: Delivery arriving</VoltraAndroid.Text>,
 *   expanded: <VoltraAndroid.Column>...</VoltraAndroid.Column>,
 * })
 * ```
 */
export declare const updateAndroidLiveUpdate: (notificationId: string, variants: AndroidLiveUpdateVariants, options?: UpdateAndroidLiveUpdateOptions) => Promise<void>;
/**
 * @unstable This API is experimental and may change in future versions.
 *
 * Stop an Android Live Update and dismiss the notification.
 *
 * @param notificationId - The ID of the notification to stop
 *
 * @example
 * ```tsx
 * import { stopAndroidLiveUpdate } from 'voltra'
 *
 * await stopAndroidLiveUpdate('notification-123')
 * ```
 */
export declare const stopAndroidLiveUpdate: (notificationId: string) => Promise<void>;
/**
 * @unstable This API is experimental and may change in future versions.
 *
 * Check if an Android Live Update with the given name is currently active.
 *
 * @param updateName - The name of the Live Update to check
 * @returns true if the update is active, false otherwise
 *
 * @example
 * ```tsx
 * import { isAndroidLiveUpdateActive } from 'voltra'
 *
 * if (isAndroidLiveUpdateActive('my-live-update')) {
 *   console.log('Update is running')
 * }
 * ```
 */
export declare const isAndroidLiveUpdateActive: (updateName: string) => boolean;
/**
 * @unstable This API is experimental and may change in future versions.
 *
 * End all active Android Live Updates.
 *
 * This function stops and dismisses all currently running Live Updates in the app.
 *
 * @example
 * ```tsx
 * import { endAllAndroidLiveUpdates } from 'voltra'
 *
 * await endAllAndroidLiveUpdates()
 * ```
 */
export declare function endAllAndroidLiveUpdates(): Promise<void>;
//# sourceMappingURL=api.d.ts.map