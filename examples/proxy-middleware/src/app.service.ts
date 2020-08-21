/*
 * @Author: yayxs
 * @Date: 2020-08-21 22:07:19
 * @LastEditTime: 2020-08-21 22:22:59
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \proxy-middleware\src\app.service.ts
 * @
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  testApi(): Array<any> {
    return [
      {
        id: '1',
      },
    ];
  }
}
