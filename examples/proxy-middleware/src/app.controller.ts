/*
 * @Author: yayxs
 * @Date: 2020-08-21 22:07:19
 * @LastEditTime: 2020-08-21 22:23:09
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \proxy-middleware\src\app.controller.ts
 * @
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/getList')
  testApi(): Array<any> {
    return this.appService.testApi();
  }
}
