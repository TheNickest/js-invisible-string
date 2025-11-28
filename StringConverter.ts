export class StringConverter {
  // Unicode Zero-width space
  readonly ZWS: string = '\u200b'
  // Unicode Zero-width non-joiner
  readonly ZWNJ: string = '\u200c'
  // Unicode Zero-width joiner
  readonly ZWJ: string = '\u200d'
  // Unicode Zero-width non-breaking
  readonly ZWNBS: string = '\ufeff'

  public string_2_binary(str: string): string {
    let binaryString: string = str
      .split('')
      .map((c) => c.charCodeAt(0).toString(2))
      .join(' ')
    return binaryString
  }

  public binary_2_invisible(binaryStr: string): string {
    let invRes: string = binaryStr
      .split('')
      .map((binStr) => {
        const binNum: number = parseInt(binStr, 10)
        if (binNum === 1) {
          return this.ZWS
        } else if (binNum === 0) {
          return this.ZWNJ
        }
        return this.ZWJ
      })
      .join(this.ZWNBS)
    return invRes
  }

  public invisible_2_binary(invisible: string): string {
    let result: string = invisible
      .split(this.ZWNBS)
      .map((c) => {
        if (c === this.ZWS) {
          return '1'
        } else if (c === this.ZWNJ) {
          return '0'
        }
        return ' '
      })
      .join('')
    return result
  }

  public binary_2_string(binaryStr: string): string {
    let resultString: string = ''
    binaryStr
      .split(' ')
      .map((binStr) => {
        resultString += String.fromCharCode(parseInt(binStr, 2))
      })
      .join('')
    return resultString
  }
}
