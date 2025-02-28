# 大连理工大学软件学院数据结构算法可视化演示平台

---

## 项目主页如下图：

<img width="100%" height="100%" src="https://github.com/kinlog/visualgo/blob/gh-pages/image/main_page.png">

## 项目链接如下：

[数据结构算法演示平台](http://kinlog.github.io/visualgo/index.html)

## 演示功能算法

- 线性表
  + 顺序表
  + 单链表
  + 栈
  + 队列
  + 阶乘
  + 链式队列
- 树
  + 二叉树
  + 堆
  + 霍夫曼树
  + AVL树
  + 二叉树转森林
  + 线索树
- 图
  + DFS广度遍历
  + BFD深度遍历
  + Prim最小生成树
  + Kruskal最小生成树
  + Dijkstra最短路径
- 排序
  + 比较排序
  + 基数排序
  + 堆排序
- 字符串
  + 模式匹配
  + 查找

```111```
冒泡排序是一种简单的排序算法，它通过重复地遍历要排序的列表，比较相邻的元素并交换它们的位置来实现排序。以下是使用 JavaScript 实现冒泡排序的代码：
 ```javascript function bubbleSort(arr) { let n = arr.length; let swapped; do { swapped = false; for (let i = 0; i < n - 1; i++) { if (arr[i] > arr[i + 1]) { // 交换相邻元素 let temp = arr[i]; arr[i] = arr[i + 1]; arr[i + 1] = temp; swapped = true; } } // 每次遍历后，最大的元素会被放到正确的位置，所以可以减少遍历的次数 n--; } while (swapped); return arr; } // 示例用法 let arr = [64, 34, 25, 12, 22, 11, 90]; console.log("排序前: ", arr); let sortedArr = bubbleSort(arr); console.log("排序后: ", sortedArr); ```
  ### 代码解释： 
  1. **`bubbleSort` 函数**：这是实现冒泡排序的主函数。它接受一个数组 `arr` 作为参数。 
  2. **`n`**：表示数组的长度。 
  3. **`swapped`**：用于标记在一次遍历中是否发生了交换。如果在一次遍历中没有发生任何交换，说明数组已经有序，可以提前结束排序。 
  4. **`do...while` 循环**：外层循环用于控制遍历的次数。每次遍历后，最大的元素会被放到正确的位置，因此可以减少遍历的次数。 
  5. **`for` 循环**：内层循环用于比较相邻的元素并交换它们的位置。 
  6. **`swapped = true`**：如果在一次遍历中发生了交换，将 `swapped` 设置为 `true`，表示数组可能还未完全有序。 7. **`n--`**：每次遍历后，减少遍历的次数，因为最大的元素已经被放到了正确的位置。 ### 示例输出： ```javascript 排序前: [64, 34, 25, 12, 22, 11, 90] 排序后: [11, 12, 22, 25, 34, 64, 90] ``` ### 时间复杂度： - **最坏情况**：O(n²)（当数组是逆序时） - **最好情况**：O(n)（当数组已经有序时） - **平均情况**：O(n²) 冒泡排序虽然简单，但在处理大规模数据时效率较低，通常用于教学或小规模数据的排序。