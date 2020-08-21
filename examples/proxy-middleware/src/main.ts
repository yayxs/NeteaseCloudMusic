/*
 * @Author: yayxs
 * @Date: 2020-08-21 22:07:19
 * @LastEditTime: 2020-08-21 22:09:29
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \proxy-middleware\src\main.ts
 * @
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8888);
}
bootstrap();
