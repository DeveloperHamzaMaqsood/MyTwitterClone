import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import  Home from './components/home/Home';
import {Switch , Route} from 'react-router-dom';
import Explore from './components/explore/Explore';
import Notifications from './components/notifications/NotificationsAll';
import Messages from './components/messages/MessagesAll'
import Bookmarks from './components/bookmarks/BookmarksAll'
import Lists from './components/lists/MainList'
import Profile from './components/profile/UserProfile'
import Reply from './components/profile/reply/ReplyTweets'
import Retweets from './components/profile/ReTweets/ReTweets'
import Likes from './components/profile/likes/LikesTweets'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/notification" component={Notifications} />
        <Route path="/messages" component={Messages} />
        <Route path="/bookmarks" component={Bookmarks} />
        <Route path="/lists" component={Lists} />
        <Route exact path="/profile" component={Profile} />
        <Route  path="/profile/reply" component={Reply} />
        <Route  path="/profile/retweet" component={Retweets} />
        <Route  path="/profile/likes" component={Likes} />
      </Switch>
    </>
  );
}

export default App;
