import { isEmpty } from './validators'

/**
 * Remove all white spaces,
 * replace special characters with
 * normal letters and remove all
 * digit characters of string
 *
 * E.g.: 'abc 123 àáâã' -> 'abc123aaaa'
 *
 * See - https://regexr.com/
 *
 * @param {string} string
 * @return {string} cleaned
 */
export function clearString( string: string ): string {
  if ( isEmpty( string ) ) return ''
  // return string.normalize( 'NFD' ).replace( / |[\u0300-\u036f]|\d/g, '' )
  return string.normalize( 'NFD' ).replace( /[^\w]/g, '' )
}

/**
 * Clear and remove duplicates inside array
 *
 * @param {string[]} array Curren array with duplicates
 * @return {string[]} Clear array
 */
export function clearStringArray(
  array: string[]
): string[] {
  return [ ...new Set<string>( array ) ]
}


/**
 * Remove all white spaces and any
 * non-digit characters of string.
 *
 * E.g.: 'abc 123 àáâã' -> '123'
 *
 * See - https://regexr.com/
 *
 * @param {string} string
 * @return {string} cleaned
 */
export function clearNumberString( string: string ): string {
  if ( isEmpty( string ) ) return ''
  // remove qualquer caractére que não seja um número [0-9]
  return string.replace( /\D/g, '' )
}

/**
 * Convert Date to local string date
 *
 * E.g.: 01/01/1990 às 13:00
 *
 * If hide time is true the function will return only
 * 01/01/1990
 *
 * @param {Date | string} currentDate Current date
 * @param {boolean} hideTime Optional: Hide hours and minutes?
 * @return {string} Converted
 */
export function dateString(
  currentDate: Date | string,
  hideTime?: boolean
): string {
  const [ date, hours ] = new Date( currentDate )
    .toLocaleString( 'pt-BR' )
    // remove todas as vírgulas
    .replace( /,/g, '' )
    .split( ' ' )

  // divide o tempo de HH:MM:SS
  const [ hour, min ] = hours.split( ':' )
  const time = `às ${ hour }:${ min }`
  return `${ date } ${ hideTime ? '' : time }`
}

/**
 * Shuffles/randomize the current array
 *
 * @param {any[]} array Current array
 * @return {any[]} Shuffled array
 */
export function shuffleArray(
  array: any[]
): any[] {
  let currentIndex = array.length
  let randomIndex

  // enquanto tiver itens restantes no array para embaralhar
  while ( currentIndex > 0 ) {
    // pega um item restante
    randomIndex = Math.floor( Math.random() * currentIndex )
    currentIndex--

    // e troca ele de posição com o item atual
    [
      array[ currentIndex ],
      array[ randomIndex ]
    ] = [
        array[ randomIndex ],
        array[ currentIndex ]
      ]
  }

  return array
}

/**
 * Masks any input text to specified format
 */
export const maskText = {
  cnpj: ( value: any ) => {
    if ( isEmpty( value ) ) return ( '' )
    return clearNumberString( value )
      .replace( /(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d{2})/, '$1.$2.$3/$4-$5' )
  },
  cpf: ( value: any ) => {
    if ( isEmpty( value ) ) return ( '' )
    return clearNumberString( value )
      .replace( /(\d{3})?(\d{3})?(\d{3})?(\d{2})/, '$1.$2.$3-$4' )
  },
  cellphone: ( value: any ) => {
    if ( isEmpty( value ) ) return ( '' )
    return clearNumberString( value )
      .replace( /(\d{2})?(\d{2})?(\d{1})?(\d{4})?(\d{4})/, '($2) $3 $4-$5' )
  },
  phone: ( value: any ) => {
    if ( isEmpty( value ) ) return ( '' )
    return clearNumberString( value )
      .replace( /(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '($2) $3-$4' )
  },
  cep: ( value: any ) => {
    if ( isEmpty( value ) ) return ( '' )
    return clearNumberString( value )
      .replace( /(\d{5})?(\d{3})/, '$1-$2' )
  }
}
