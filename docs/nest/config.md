---
author: "Kano Zhao"
date: 2023-08-18
---

# Env 环境配置

<PageInfo/>

## yaml文件

### 依赖下载

```bash
pnpm add -D @nestjs/config js-yaml cross-env
```

### 配置文件

> 在src目录下创建一个 `config` 文件夹，并在其中创建一个 `dev.yaml` 文件，用于存放开发环境配置。

```yaml
# 开发环境配置
app:
  prefix: '/dev-api'
  port: 3000
  logger:
    # 项目日志存储路径，相对路径（相对本项目根目录）或绝对路径
    dir: '../logs'
  # 文件相关
  file:
    # 是否为本地文件服务或cos
    isLocal: true
    # location 文件上传后存储目录，相对路径（相对本项目根目录）或绝对路径
    location: '../upload'
    # 文件服务器地址，这是开发环境的配置 生产环境请自行配置成可访问域名
    domain: 'http://localhost:8080'
    # 文件虚拟路径, 必须以 / 开头， 如 http://localhost:8080/profile/****.jpg  , 如果不需要则 设置 ''
    serveRoot: '/profile'
    # 文件大小限制，单位M
    maxSize: 10
# 腾讯云cos配置
cos:
  secretId: ''
  secretKey: ''
  bucket: ''
  region: ''
  domain: ''
  location: ''
# 数据库配置
db:
  mysql:
    host: '127.0.0.1'
    username: 'root'
    password: ''
    database: 'admin_db'
    port: 3306
    charset: 'utf8mb4'
    logger: 'file'
    logging: true
    multipleStatements: true
    dropSchema: false
    synchronize: false
    supportBigNumbers: true
    bigNumberStrings: true

# redis 配置
redis:
  host: 'localhost'
  password: '*********'
  port: 6379
  db: 2
  keyPrefix: ''

# jwt 配置
jwt:
  secretkey: 'you_secretkey'
  expiresin: '1h'
  refreshExpiresIn: '2h'
# 权限 白名单配置
perm:
  router:
    whitelist:
      [
        { path: '/captchaImage', method: 'GET' },
        { path: '/register', method: 'POST' },
        { path: '/login', method: 'POST' },
        { path: '/logout', method: 'POST' },
        { path: '/perm/{id}', method: 'GET' },
        { path: '/upload', method: 'POST' },
      ]

# 用户相关
# 初始密码， 重置密码
user:
  initialPassword: '123456'
```
> 新建 `index.ts`文件 读取 `yaml` 文件内容

```ts
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const configFileNameObj = {
  development: 'dev',
  test: 'test',
  production: 'prod',
};

const env = process.env.NODE_ENV;

console.log(env);

export default () => {
  return yaml.load(
    readFileSync(join(__dirname, `./${configFileNameObj[env]}.yaml`), 'utf8'),
  ) as Record<string, any>;
};

```

### 使用config设置配置模块

```ts{4,5,9,10,11,12,13,14}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/index';

@Module({
  imports: [
    // forRoot() 方法就是读取根目录下的 .env 文件
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```
### 修改nest-cli.json文件 在 dist下生成 yaml 文件以供读取

```json{6,7,8,9}
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "assets": [
      "**/*.yaml"
    ],
    "watchAssets": true,
    "deleteOutDir": true
  }
}
```

### 修改 package.json文件
```json
"dev": "cross-env NODE_ENV=development nest start --watch", // 开发环境
```

### 使用
```ts{5,8}
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  getPort(): number {
    return this.config.get<number>('app.port');
  }
}
```

## 命名空间

### 配置文件

> config/database.config.ts

```ts
import { registerAs } from '@nestjs/config';
export default registerAs('database', () => ({
  host: 'localhost',
  port: 3303,
  password: '123456',
}));

```
> config/index.ts

```ts
// import redisConfig from './redis.config';
import databaseConfig from './database.config';

export default [databaseConfig];

```

### 全局注册

```ts{5,9,10,11,12}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config/index';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [...config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

### 使用
```ts
import { ConfigService, ConfigType } from '@nestjs/config';
import databaseConfig from './config/database.config';

@Injectable()
export class AppService {
  constructor(
    @Inject(databaseConfig.KEY)
    private database: ConfigType<typeof databaseConfig>,
  ) {}

  get(): number {
    // type getType<T extends () => any> = T extends () => infer U ? U : T;
    // type database = getType<typeof databaseConfig>;
    // return (this.database as database).port;
    return this.database.host;
  }
}
```

## Contributors

<Contributors/>

<CopyRight/>
