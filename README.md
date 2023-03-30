# Erveryday-LeetCode

## 使用 vscode extension

1. 切换 EndPoint 为leetcode.cn，leetcode.com 节点在此插件下不好用（据说，未实践）

2. sign in

3. 任选一题，右侧webview页面右下角 `Code Now`，初次点击会让配置：

    - settings
        ```json
        "leetcode.endpoint": "leetcode-cn",
        "leetcode.hint.configWebviewMarkdown": false,
        "leetcode.defaultLanguage": "javascript",
        "leetcode.workspaceFolder": "/Users/gornin/everyday-leetcode/js",
        "leetcode.hint.commentDescription": false,
        "leetcode.hint.commandShortcut": false
        ```
        `"leetcode.workspaceFolder"` 为本仓库下的js目录，如果是java可以替换`js`为`java`，便于管理编码及提交变更。

4. `doc` 目录为题后回顾思考总结等的文档，格式`markdown`，初步框架：
    - 题干
    - 我的思路
    - 我的题解
    - 优秀题解

## leetcode官网

[leetcode.cn](https://leetcode.cn/)

[leetcode.com](https://leetcode.com/)

## 过来人的经验（[负雪明烛](https://fuxuemingzhu.blog.csdn.net/?type=blog)）

### <div style="color:red">刷题姿势</div>

刚开刷 LeetCode 时遇到二叉树翻转，想了一天也没明白，当时无比痛苦。因为我的方法不对，我总想着在脑子里面想明白再写，在白纸上不停地模拟二叉树树翻转的每一步，还想着用本地 IDE 写个二叉树结构进行Debug，现在看来都是走了弯路。

大部分新手应该是只学过课本上的一些数据结构和算法的知识，还没有实际刷题经验，因此非常痛苦。

对于新人而言，不应该自己死抠一个题目，如果想了一会没有任何思路，就应该果断看别人怎么写的。在理解了别人的做法之后，再凭理解和记忆在 LeetCode 的代码框里敲一遍。

学习 = 学 + 习。知识是学出来的，不是在自己脑子里蹦出来的；学过之后，还要自己动手练习。新手要勇敢地、经常地学习别人的解法和答案，然后凭理解敲代码练习。只要度过刷题初期的痛苦，后面就会越刷越快。

### <div style="color:red">基础知识</div>

需要掌握常用的数据结构和算法的思想和适用场景。

学习基础知识，我推荐 《算法（第4版）》。这个书不用全部细看，可以只看重点，比如前面的 Java 知识不用看，数学推导部分可以不用看。

再推荐一本侯捷的 《STL源码剖析》，这本书对理解C++ STL有重大帮助，看了之后绝对会对数据结构和算法有更深的理解，我看完这本书之后感觉相见恨晚啊。

### <div style="color:red">刷题顺序</div>

合理的刷题顺序能降低难度，帮助我们在有限的时间里获得最快的成长。

LeetCode 现在将近 2000 道题，基本没有人能够全部刷完，而且对于参加面试者来说也没有必要刷特别多的题。许多人在面试前刷了 200 道题，基本够了；准备更充分的人，大概会刷 400 道题；能刷 600 道题目以上的，基本上国内公司的 Offer 都能收获到一大堆。

我推荐的刷题顺序是：

- 按分类刷；每个分类从 Easy 到 Medium 顺序刷；
- 优先刷 树、链表、二分查找、DFS、BFS 等面试常考类型；
- 优先刷题号靠前的题目；
- 优先刷点赞较多的题目；
- 如果基本上能做到 Easy 题 100% 能做对，Medium 题经过思考或与面试官交流后能做对，基本就能拿到 Offer。在实际面试过程中，很少出 Hard 题，视能力刷。

### <div style="color:red">跟别人学习</div>

向别人学习是非常必要的。

1. 看别人的题解
    
    主要看别人在解决这个题目的思路是什么。无论这个题你会不会，都要看下别人的解法，或许有新收获。

2. 看别人的总结

    这部分包括算法讲解、套路整理、刷题模板等。

    「算法题 = 思路 + 模板」，思路需要通过看别人的解答以及讲解获得，模板就是做题的套路，既可以自己总结，也可以看别人总结好的。

### <div style="color:red">做好笔记</div>

写作过程能更好地帮助我们理清思路，也能帮助我们再做此题时快速想起以前的做法，还能见证我们自己的成长。