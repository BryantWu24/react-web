# <span style="color:green"> Git Format </span>
- 樣式 ： 調整 CSS / 版面位置等相關操作
- 安裝 ： 套件新增
- 組件 ： 新增組件
- 更新 ： 異動調整，無新增功能
- 功能 ： 新增功能

# <span style="color:green"> HardCode / Mock 模式 </span>
- SessionStorage 設定為 hadrcode : true 則會抓取程式碼內的資料；其餘則使用 Josn-Server 資料

<br>
# <span style="color:green"> 套件安裝 </span>
# <span style="color:gold"> react-router-dom </span>
[教學網站](https://ithelp.ithome.com.tw/articles/10243368?sc=iThomeR)
- 路由機制

## 安裝 React-router-dom

```json
npm install react-router-dom
```
## 引用

1. index.js 引入
``` jsx
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>,
    document.getElementById('root')
);
```

2. App.jsx 建立路由
``` jsx
import HomePage from "./page/HomePage/HomePage";
import BackendPage from "./page/Backend/Backend";
import { Route,Switch } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="****/backend" component={BackendPage} />
        </Switch>
    );
}

export default App;
```


<br>

# <span style="color:gold"> Json - Server </span>

- 虛擬資料庫

## 安裝 Json - Server

```json
npm install json-server
```

## 啟動 Json - Server 服務

```json
json-server db.json --port 3001
```

<br>


# <span style="color:gold"> Concurrently </span>

- 此模組是讓指令能夠同時啟動的
****
## 安裝 concurrently

```json
npm install -g concurrently
```

## 使用 concurrently

- 開啟 package.json 修改 scripts 內的 start  ( 依據個人想起用多服務的指令，位置有所不同 )
- 使用 "concurrently  \"指令1\"  \"指令2\"" 格式

```
"start": "concurrently \"react-scripts start \" \"json-server json_server/db.json --port 3003\""
```

<br>

# <span style="color:gold"> React-Material-UI </span>

## 安裝 material-ui
```
npm install @material-ui/core
```

## Roboto 字體
Material-UI 有使用 Roboto 字體，因此，官方建議載入此字體

▼ public / index.html
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

## Font Icons 字體圖標
若您想使用 Icon 组件，前提是須要安裝 Material icons 的字體。 

▼ public / index.html
```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

## SVG 图标
在 icons 範例中，官方使用 SVG Material icons。若想使用這個圖標，就必须安裝@material-ui/icons

### 使用 npm 安裝 material-ui
```
npm install @material-ui/icons
```

<br>

# <span style="color:gold"> Data-Grid </span>

## 安裝 Data-Grid
```
npm install @material-ui/data-grid
```

---
# <span style="color:gold">REACT 官方 ReadMe<span>
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
