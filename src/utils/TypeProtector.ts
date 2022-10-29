export class TypeProtector {
  static isString(data: any): data is string {
    return typeof data === "string";
  }
}

export const { isString } = TypeProtector;
