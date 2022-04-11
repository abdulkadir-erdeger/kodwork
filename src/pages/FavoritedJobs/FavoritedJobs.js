import React from 'react';
import {View, FlatList} from 'react-native';
import style from './FavoritedJobs.styles';
import {useDispatch, useSelector} from 'react-redux';
import JobsCard from '../../components/JobsCard';
import Button from '../../components/Button';

export default function FavoritedJobs() {
  const favJobs = useSelector(state => state.favouriteJob);
  const dispatch = useDispatch();
  const removeJob = item => {
    dispatch({type: 'REMOVE_FAVOURITE', payload: {job: item}});
  };

  const renderFavouriteItems = ({item}) => (
    <View>
      <JobsCard data={item}>
        <Button
          buttonType="remove"
          title="Remove"
          onPres={() => removeJob(item)}
        />
      </JobsCard>
    </View>
  );

  return (
    <View styles={style.container}>
      <FlatList data={favJobs} renderItem={renderFavouriteItems} />
    </View>
  );
}
