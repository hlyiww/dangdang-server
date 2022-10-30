class BaseProtector {
  static isStringNotEmpty(str: string) {
    return str !== null && str.length > 0;
  }
}

export const { isStringNotEmpty } = BaseProtector;
