# flickr-gallery

I made SPA with Flickr API to study React.  
I used React, Redux, Router, Thunk and Flickr API.  
You can try this app. Demo is [here](https://yamashitive.github.io/flickr-gallery/#/).  
Note:I couldn't use BrowserRouter of react-router-dom when I do "npm run build", so I used HashRouter instead.

Reactの学習のためにFlickr APIを利用したSPAを作成しました。  
React, Redux, Router, ThunkとFlickr APIを使用しています。  
実際の動きは[こちら](https://yamashitive.github.io/flickr-gallery/#/)から  
※ npm run buildする時に、react-router-domのBrowserRouterが使えなかったので、HashRouterを使用しています。

![flickr-gallery](resouces/flickr-gallery_430.gif)

# Dependency
[package.json](package.json)

# Setup
Change the Flickr API KEY on [tasks.js](src/actions/tasks.js) in actions Dir.

actionsディレクトリ内の[tasks.js](src/actions/tasks.js)のFlickr APIキーを書き換えてください。

# Licence
This software is released under the [MIT License](https://opensource.org/licenses/mit-license.php).

# Authors
Yamashitive  
[yamashitive.com](http://yamashitive.com)

# References
 React入門 [website](https://www.shoeisha.co.jp/book/detail/9784798153353)