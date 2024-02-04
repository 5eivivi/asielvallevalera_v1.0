export default function useIsMobileDevice () {
  const details = navigator.userAgent

  const regexp = /android|iphone|kindle|ipad/i

  const isMobileDevice = regexp.test(details)

  return { isMobileDevice }
}
