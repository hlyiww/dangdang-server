// 响应体数据封装
enum ResponseCode {
  SUCCESS = 200,
  INTERNAL_SERVER_ERROR = 500,
}

export class ResponseProvider {
  static success(data: any = undefined, msg: any = "") {
    return {
      data,
      msg,
      code: ResponseCode.SUCCESS,
    };
  }

  static fail(msg: any = "") {
    return {
      undefined,
      msg,
      code: ResponseCode.INTERNAL_SERVER_ERROR,
    };
  }
}

export const { success, fail } = ResponseProvider;
