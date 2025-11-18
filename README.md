## 2️ What is the use of the `keyof` keyword in TypeScript?

TypeScript আমাদের কোডকে আরও নিরাপদ এবং স্থিতিশীল রাখার জন্য অনেক শক্তিশালী টুল দেয়। এর মধ্যে একটি গুরুত্বপূর্ণ keyword হলো **`keyof`**।

`keyof` হলো একটি type operator যা কোনো object type-এর প্রপার্টি নামগুলোকে একটি **union type** হিসেবে বের করে। সহজভাবে বলতে গেলে, এটি বলে দেয়:

- কোন কোন property একটি object type-এর মধ্যে আছে।
- সেই property গুলোকে type-safeভাবে access করতে সাহায্য করে।

**keyof ব্যবহার করলে অবজেক্টের প্রপার্টি গুলো type-safeভাবে access করা যায়।** এর ফলে ভুল key ব্যবহারের সম্ভাবনা কমে এবং কোড আরও নির্ভরযোগ্য হয়।

### উদাহরণ

```ts
type Account = {
  username: string;
  balance: number;
  email: string;
};

type AccountKeys = keyof Account; // "username" | "balance" | "email"

const selectedKey: AccountKeys = "username"; 

```

---

## 3️ Explain the difference between `any`, `unknown`, and `never` types in TypeScript

TypeScript কিছু বিশেষ টাইপ দেয় যা কোডের আচরণ পরিষ্কারভাবে দেখায়। এগুলো আমাদের বলে দেয় কোন value কিভাবে কাজ করবে, কোথায় error আসতে পারে, এবং কোথায় strict type check প্রয়োগ হবে।

---

## `any`

- যদি টাইপ আগে জানা না থাকে বা দ্রুত কিছু পরীক্ষা করতে চাই, তখন `any` ব্যবহার করা হয়।
- সমস্যা হলো, TypeScript আর কোনো type-check করে না।
- ভুল হলেও কোনো error দেখাবে না।

 খুব flexible, কিন্তু তাই risky।

---

## `unknown`

- `any` এর মতো দেখতে, কিন্তু বেশি safe।
- ব্যবহার করার আগে **type check করা বাধ্যতামূলক**।
- অজানা বা external ডেটা handle করতে ভালো।

 ভুল usage কমে, কোড আরও নির্ভরযোগ্য হয়।

---

## `never`

- Function কখনো return করে না।
- যেমন: error throw করা বা infinite loop।
- এমন code যা execution-এ কখনো পৌঁছায় না, সেটার জন্য।

 কোথায় কোড execution থেমে যাবে, বুঝতে সাহায্য করে।

---
// any
let data: any = "hello";
data = 100;

// unknown
let input: unknown = "test";
if (typeof input === "string") 
console.log(input.toUpperCase());

// never
function fail(): never {
  throw new Error("Oops!");
}


