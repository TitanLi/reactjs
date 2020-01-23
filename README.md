# reactjs

## 安裝
```
$npm install -g create-react-app
```
## create project
```
create-react-app projectName
```

## 筆記
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