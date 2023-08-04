---
author: "Kano Zhao"
date: 2022-12-10
---
# 基础类型

<PageInfo/>

> 基础类型：Boolean、Number、String、null、undefined 以及 ES6 的  [Symbol](https://es6.ruanyifeng.com/#docs/symbol) 和 ES10 的 [BigInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

## 字符串类型

使用 ```string``` 定义字符串类型

```Typescript
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```
其中 ` 用来定义 ES6 中的[模板字符串](https://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2)，${expr} 用来在模板字符串中嵌入表达式。


## 数字类型

使用 ```number``` 定义数值类型; 支持十六进制、十进制、八进制和二进制；

```Typescript
let decLiteral: number = 6; //十进制
let hexLiteral: number = 0xf00d; //十六进制 
let binaryLiteral: number = 0b1010; // ES6 中的二进制表示法
let octalLiteral: number = 0o744; // ES6 中的八进制表示法
let notANumber: number = NaN; //NaN
let infinityNumber: number = Infinity; //无穷大
```

## 布尔类型

注意，使用构造函数 Boolean 创造的对象不是布尔值：

```Typescript
let createdBoolean: boolean = new Boolean(1)
//这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象
```

事实上 new Boolean() 返回的是一个 Boolean 对象 需要改成

```Typescript
let createdBoolean: Boolean = new Boolean(1)
```

```Typescript
let isBoolean: boolean = true //可以直接使用布尔值

let isBooleanTwo: boolean = Boolean(1) //也可以通过函数返回布尔值
```

在 TypeScript 中，```boolean``` 是 JavaScript 中的基本类型，而 ```Boolean``` 是 JavaScript 中的构造函数。其他基本类型（除了 ```null``` 和 ```undefined```）一样，不再赘述。

## 空值类型

JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数

```Typescript
function alertName(): void {
    alert('My name is Tom');
}
```

> 声明一个 ```void``` 类型的变量没有什么用，因为你只能将它赋值为 ```undefined``` 和 ```null``` （只在 --strictNullChecks 未指定时）：

```Typescript
let unusable: void = undefined;
```

## Null和undefined类型

```Typescript
let u: undefined = undefined;//定义undefined
let n: null = null;//定义null
```

与 ```void``` 的区别是，```undefined``` 和 ```null``` 是所有类型的子类型。也就是说 ```undefined``` 类型的变量，可以赋值给 ```number``` 类型的变量：

```Typescript
// 这样不会报错
let num: number = undefined;

// 这样也不会报错
let u: undefined;
let num: number = u;
```

而 ```void``` 类型的变量不能赋值给 ```number``` 类型的变量：

```Typescript
let u: void;
let num: number = u;

// Type 'void' is not assignable to type 'number'.
```

::: tip 注意:
如果你配置了tsconfig.json 开启了严格模式

```Typescript
{
    "compilerOptions":{
        "strict": true
    }
}
```
 null 不能 赋予 void 类型 
```Typescript {1}
let n:void = null; ❌
let u:void = undefined;
```
:::


## Contributors

<Contributors/>

<CopyRight/>