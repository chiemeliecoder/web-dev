import {useDispatch} from "react-redux";

const TuitStats = ({tuits}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuits});
  };
  return (
      <div>
  <div onClick={likeTuit}>
    {
      tuits.liked &&
      <i className="fas fa-heart me-1"
    style={{color: 'red'}}/>
    }
    {
      !tuits.liked &&
      <i className="far fa-heart me-1"/>
    }
    {tuits.stats && tuits.stats.likes}
    </div>
      </div>
);
}
export default TuitStats;