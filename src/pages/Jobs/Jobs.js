import {View, FlatList, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import JobsCard from '../../components/JobsCard';
import styles from './Jobs.styles';

export default function Jobs({navigation}) {
  const [page, setPage] = useState(1);
  const url = `${Config.API_URL}?page=${1}`;
  const {data, error, loading} = useFetch(url);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const renderJobsItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('JobsDetailScreen', {title: item.name, id: item.id})
      }>
      <JobsCard data={item} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <FlatList data={data.results} renderItem={renderJobsItem} />
    </View>
  );
}
