/**
 * Gets today date at 00:00
 *
 * @param {Date | string} currentDate Current desired date?
 * @return {Date} Zero hour today date
 */
export function getZeroHourDate(
  currentDate?: Date | string | number
): Date {
  const zeroDate = new Date(
    currentDate ?? Date.now()
  ).setHours( 0, 0, 0, 0 )
  return new Date( zeroDate )
}
