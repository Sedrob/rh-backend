import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public  getSendReply(status?: string, code?: number, message?: string, data?: any){
    let reasponse = {
      status: status,
      code: code,
      message: message,
      data: data
    }
    return reasponse
  }

}
