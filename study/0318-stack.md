# 栈的基础知识

栈是⼀种“**先进后出**”（FILO, First In Last Out）的数据结构。

可以处理具有**完全包含**关系的问题


### 场景一、操作系统中的线程栈(线程空间)

进程-线程池（线程1、线程2...）


系统资源参数配置查看
```
ulimit -a
```

```
-t: cpu time (seconds)              unlimited
-f: file size (blocks)              unlimited
-d: data seg size (kbytes)          unlimited
-s: stack size (kbytes)             8192
-c: core file size (blocks)         0
-v: address space (kbytes)          unlimited
-l: locked-in-memory size (kbytes)  unlimited
-u: processes                       2784
-n: file descriptors                2560
```
stack size (kbytes) 8192, 线程栈大小约8M。
多线程编程

### 场景二、表达式求值
3+5     
```
  +
 / \ 
3   5
```


3 * (4 + 5)
```
  *
 / \ 
3   +
   / \ 
  4   5
```

递归和栈去解决表达式求值，原理上是一样的。递归使用了系统栈。





栈的基本操作 
- Leetcode-232-化栈为队 (面试题 03.04)
- Leetcode-682-棒球比赛 
- Leetcode-844-比较含退格的字符串 
- Leetcode-946-验证栈序列 
  
栈结构扩展应用 
- Leetcode-20-有效的括号 
- Leetcode-1021-删除最外层的括号 
- Leetcode-1249-移除无效的括号 
- Leetcode-145-二叉树的后序遍历 
- Leetcode-331-验证二叉树的前序序列化 
- Leetcode-227-基本计算器Ⅱ 
  
智力发散题 
- Leetcode-636-函数的独占时间 
- Leetcode-1124-表现良好的最长时间段



序号|题目|解题|复习
---|:--:|---:|---:
20|有效的括号 |[JS](../src/20.%20Valid%20Parentheses/index.md) | N
145|二叉树的后序遍历 |[JS](../src/145.%20Binary%20Tree%20Postorder%20Traversal/readme.md) | N
232|化栈为队 |[JS](../src/232.%20Implement%20Queue%20using%20Stacks/readme.md) | Y
682|棒球比赛 |[JS](../src/682.%20Baseball%20Game/readme.md) | N
844|比较含退格的字符串 |[JS](../src/844.%20Backspace%20String%20Compare/readme.md) | N
946|验证栈序列 |[JS](../src/946.%20Validate%20Stack%20Sequences/readme.md) | N
