# ReactJS
## 官方教學
[https://zh-hant.reactjs.org/docs/hello-world.html](https://zh-hant.reactjs.org/docs/hello-world.html)

## create-react-app
[Create React App](https://github.com/facebookincubator/create-react-app)

## 安裝
```
$npm install -g create-react-app
```
## create project
```
create-react-app projectName
```

## 筆記
### bind
> JavaScript this bind
參考資料：[https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)

### State
1. 需使用setState()更新資料
```javascript
// 錯誤
this.state.comment = 'Hello';
// 正確
this.setState({comment: 'Hello'});
```
2. 更新可能是非同步的
> function第一個數值是state
```javascript
// 錯誤
this.setState({
  counter: this.state.counter + this.props.increment,
});

// 正確
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// 正確
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```
3. State的更新將會被Merge
> 可單獨更新資料
```javascript
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
}
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
}
```
4. 向下資料流
```javascript
<FormattedDate date={this.state.date} />

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```
### 事件處理
1. bind this
```javascript
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
      return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
      );
    }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```
2. 將參數傳給 Event Handler
> 將id傳至function
```javascript
handleClick(data) {
    console.log(data);
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
}

<button onClick={this.handleClick.bind(this,'apple')}>
    {this.state.isToggleOn ? 'ON' : 'OFF'}
</button>
```