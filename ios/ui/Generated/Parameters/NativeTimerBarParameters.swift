//
//  NativeTimerBarParameters.swift

//  AUTO-GENERATED from data/components.json
//  DO NOT EDIT MANUALLY - Changes will be overwritten
//  Schema version: 1.0.0

import Foundation

/// Parameters for NativeTimerBar component
/// Minimal native timer progress bar with OS-level animation
public struct NativeTimerBarParameters: ComponentParameters {
    /// End time in milliseconds since epoch
    public let endAtMs: Double?

    /// Start time in milliseconds since epoch
    public let startAtMs: Double?

    /// Color for the progress fill
    public let progressColor: String?

    /// Color for the track (background)
    public let trackColor: String?

    /// Corner radius for the bar
    public let cornerRadius: Double?

    /// Explicit height for the bar
    public let height: Double?
}
