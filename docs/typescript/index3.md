---
author: "Kano Zhao"
date: 2022-12-10
---
# 任意值

<PageInfo/>

任意值（Any）用来表示允许赋值为任意类型。

## 什么是任意值类型

如果是一个普通类型，在赋值过程中改变类型是不被允许的：

```Typescript
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

❌ // index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

但如果是 ```any``` 类型，则允许被赋值为任意类型。

```Typescript
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

## 任意值的属性和方法

在任意值上访问任何属性都是允许的：
```Typescript
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
```

也允许调用任何方法：

```Typescript
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
```
可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

## 未声明类型的变量

变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

```Typescript
let something;
something = 'seven';
something = 7;

something.setName('Tom');
```
等价于🟰
```Typescript
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');
```
::: info
❓❓❓ 弊端如果使用any 就失去了TS类型检测的作用

js 💬 你说啥呢，这不是我
:::

::: tip unknown 🤌
TypeScript 3.0中引入的 ```unknown``` 类型也被认为是 top type ，但它更安全。与 any 一样，所有类型都可以分配给unknown unknown  unknown类型比any更加严格当你要使用any 的时候可以尝试使用unknown
:::

```Typescript{16}
//unknown 可以定义任何类型的值
let value: unknown;
 
value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = null;             // OK
value = undefined;        // OK
value = Symbol("type");   // OK
 
//这样写会报错unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
//unknown类型不能赋值给其他类型
let names:unknown = '123'
let names2:string = names ❌
 
//这样就没问题 any类型是可以的
let names:any = '123'
let names2:string = names   
 
//unknown可赋值对象只有unknown 和 any
let bbb:unknown = '123'
let aaa:any= '456'
 
aaa = bbb
```



## Contributors

<Contributors/>

<CopyRight/>