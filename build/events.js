import { Platform } from 'react-native';
import VoltraModule from './VoltraModule.js';
const noopSubscription = {
    remove: () => { },
};
/**
 * Add a listener for Voltra events.
 *
 * Supported events:
 * - `interaction`: User interactions with widgets (buttons, switches, checkboxes) (iOS only)
 * - `stateChange`: Live Activity state changes (iOS only)
 * - `activityTokenReceived`: Push token for Live Activity (iOS only)
 * - `activityPushToStartTokenReceived`: Push-to-start token (iOS only)
 *
 * Note: On Android, interactions open the app directly (optionally via deep links)
 * instead of emitting background events.
 *
 * @param event The event type to listen for
 * @param listener Callback function to handle the event
 * @returns EventSubscription with a remove() method to unsubscribe
 */
export function addVoltraListener(event, listener) {
    if (Platform.OS !== 'ios') {
        console.warn(`[Voltra] Event '${event}' is only supported on iOS. Returning no-op subscription.`);
        return noopSubscription;
    }
    return VoltraModule.addListener(event, listener);
}
//# sourceMappingURL=events.js.map