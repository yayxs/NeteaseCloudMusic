<!--
 * @Author: yayxs
 * @Date: 2020-08-21 22:07:19
 * @LastEditTime: 2020-08-30 13:03:02
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\examples\proxy-middleware\README.md
 * @
-->

## 介绍

> 这是一个`nestjs` 的后端项目，直接启动，可以监听一个 `8888` 端口的服务

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8888);
}
```

可以很方便的测试 `CRA 的proxy 代理` 真实的项目的代理也是如此，如有疑问，请提 [https://github.com/yayxs/NeteaseCloudMusic/issues](https://github.com/yayxs/NeteaseCloudMusic/issues)

或者添加 QQ 交流群

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
