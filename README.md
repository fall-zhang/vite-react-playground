> 注意！！！
> 该项目将被废弃，内容转移到 my-next-pages 应用

# React Playground

> 完美不在于无以附加，而在于无可删减

## 启动项目

- 依赖安装：`yarn` or `npm i` or `pnpm i`
- 本地启动项目：`yarn dev` or `npm dev`

## 技术栈

- 模版：使用 [vite-typescript-react-template](https://github.com/fall-zhang/vite-typescript-react-template)
- css: 使用 less，并且如果是组件的 less 文件，的命名以 `module.less` 结尾，确保样式不会影响到其它组件
- git 代码提交校验使用 husky。
- eslint 分别约束 `.ts` 约束代码风格。
- stylelint 约束 `css` 的样式的书写顺序，避免在样式编写中出现的一些错误。
- husky 控制 Git Hooks，在 Git 执行特定事件（如 commit、push、receive 等）时触发运行的脚本，类似于“钩子函数”，没有设置可执行的钩子将被忽略。
- 在代码提交之前，进行代码规则检查能够确保进入 git 库的代码都是符合代码规则的。但是整个项目上运行 lint 速度会很慢，lint-staged 能够让 lint 只检测暂存区的文件
- 可以在 lint-stage 中添加 `"*.less": "stylelint --fix less"` 以修复和检查 less 文件

## 开发进度

- [x] 统一目录和菜单的配置（注：现在路由可以采用 vite 中的 `import.meta.glob` 进行自动生成）
- [x] 实现项目的懒加载，打包内容优化
- [ ] 把个人项目转换为 React 的可复用组件
  - [x] 放大图片
  - [ ] 时钟插件
  - [ ] 字典插件
- [ ] 快速变换背景颜色（搭配 CSS 变量）
- [ ] 实现加载完成页面之后，注册 `service worker` 从服务端拉取数据
- [ ] 自定义表单组件编写
- [ ] 可编辑表格
- [ ] 拖拽的使用
- [ ] Threejs 的使用
- [x] 路由修改为标准的嵌套模式
- [ ] 路由可以由 useRoutes 生成

### 权限的实现

- 路由权限
  - 路由权限在 `core/authorized` 中的 router，目前实现
- 组件权限
  - 组件权限通过嵌套组件实现

### 应用场景

- 角色权限
  - 暂时没有角色的不同权限，后端传入不同的权限组成的数组，前端去解析这些数组，赋予不同的权限
- 权限配置
  - 和后端对接接口，把所权限进行分组，请求权限，进行缓存，然后从缓存中读取当前人物的权限

## 参考

| 作者（文章名称） | 链接                                    |
| ---------------- | --------------------------------------- |
| 前端要努力       | https://juejin.cn/user/1943592288395479 |
