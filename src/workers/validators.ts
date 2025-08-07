/**
 * Check if item (array, object, string, etc..) have a valid value
 *
 * @param {any} item
 * @param {boolean | undefined} nonNullOnly Will check only if value is null or
 * undefined. If an empty string `""` or an empty object/array `{} | []` is
 * provided it will be considerated as non empty and function will return false.
 * @return {boolean} Is empty?
 */
export function isEmpty(
  item: any,
  nonNullOnly?: boolean
): item is null | undefined {
  // se o item for inválido já retorna que está vazio sim
  if (
    // undefined == null -> true
    // undefined === null -> false
    item == null ||
    item === 'null' ||
    item === 'undefined'
  ) return true
  if ( nonNullOnly ) return false

  switch ( typeof item ) {
    case 'string': {
      const empty = item.trim().length <= 0
      return nonNullOnly ? false : empty
    }

    case 'object': {
      if ( Array.isArray( item ) ) {
        return item.length <= 0
      }
      return Object.keys( item ).length <= 0
    }

    default:
      return false
  }
}

/**
 * Check if array contains a specified value.
 * @param {any[]} array The array to be checked
 * @param {any} value The value to be searched
 * @param {string} key An sting key (if looking for nested ,put a dot before each key)
 * @return {boolean} true if found - false if not
 *
 * E.G.:
 *
 * Check if the value is inside the array:
 * ```ts
 * array: ['cpf1', 'cpf2']
 * value: 'cpf2'
 * output: true
 * ```
 * Check if the array contains the 'cpf' key and if
 * the key value is the same as the value passed:
 * ```ts
 * array: [{cpf: 'cpf1'}, {cpf: 'cpf2'}]
 * value: 'cpf2'
 * key: 'cpf'
 * output: true
 * ```
 * Check for nested keys. check inside every 'user' key
 * and then look if the 'cpf' key value is the same as
 * the valued passed:
 * ```ts
 * array: [{user: {cpf: 'cpf1'}}, {user: {cpf: 'cpf2'}}]
 * value: 'cpf2'
 * key: 'user.cpf'
 * output: true
 * ```
 */
export function arrayContains<T>(
  array: any[],
  value: any,
  key?: keyof T // | string
): boolean {
  if ( isEmpty( array ) ) return false
  if ( isEmpty( value ) ) return false

  if ( isEmpty( key ) ) {
    switch ( typeof array[ 0 ] ) {
      case 'string': {
        return array.includes( String( value ) )
      }
      case 'number': {
        return array.includes( Number( value ) )
      }
      default: {
        return false
      }
    }
  }

  const keys = String( key! ).split( '.' )
  return array.some( ( item ) => {
    return value == keys.reduce( ( o, i ) => o[ i ], item )
  } )
}

/**
 * Check if string have any occurrence of search string.
 * Example: `inString('a', 'abc123')`: check if `abc123` have any `a` character.
 *
 * @param {string} search Current searched string
 * @param {string} string Current string to search in
 * @param {boolean} match Strings must be equals (case sensitive)?
 * @return {boolean} True if find, false if not
 */
export function inString(
  search: string | null | undefined,
  string: string | null | undefined,
  match?: boolean
): boolean {
  if ( isEmpty( search ) ) return false
  if ( isEmpty( string ) ) return false

  // g = global = procurar em toda a string por todas as ocorrências
  // i = incasesensitive = indiferente se é A ou a
  const regex = new RegExp(
    match ? `^${ search! }$` : search!,
    match ? 'g' : 'gi'
  )
  return regex.test( string! )
}
