/**
 * Do a task N times and return task result as array
 *
 * @param {number} n Number of times a task must be done
 * @param {function} action Task
 * @return {T[]} Task result as array
 */
export function doN<T>(
  n: number,
  action: ( i: number ) => T
): T[] {
  return [ ...Array( n ) ].map( ( _, index ) => ( action( index ) ) )
}
