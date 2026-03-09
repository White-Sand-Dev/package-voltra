import SwiftUI

public struct VoltraNativeTimerBar: VoltraView {
  public typealias Parameters = NativeTimerBarParameters

  public let element: VoltraElement

  public init(_ element: VoltraElement) {
    self.element = element
  }

  @ViewBuilder
  public var body: some View {
    let progressColor = params.progressColor.flatMap { JSColorParser.parse($0) }
    let trackColor = params.trackColor.flatMap { JSColorParser.parse($0) } ?? Color.white.opacity(0.125)
    let cornerRadius = params.cornerRadius.map { CGFloat($0) } ?? 3
    let barHeight = params.height.map { CGFloat($0) } ?? 9

    if let endAtMs = params.endAtMs {
      let timeRange = Date.toTimerInterval(startAtMs: params.startAtMs, endAtMs: endAtMs)

      ZStack(alignment: .leading) {
        RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
          .fill(trackColor)
        ProgressView(timerInterval: timeRange, countsDown: false)
          .labelsHidden()
          .tint(progressColor)
          .progressViewStyle(.linear)
          .scaleEffect(y: barHeight / 4)
      }
      .frame(height: barHeight)
      .clipShape(RoundedRectangle(cornerRadius: cornerRadius, style: .continuous))
      .applyStyle(element.style)
    } else {
      EmptyView()
    }
  }
}
