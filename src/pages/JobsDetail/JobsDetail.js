import {ScrollView, Text, View, Dimensions, Alert} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import RenderHtml from 'react-native-render-html';
import styles from './JobsDetail.styles';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';

export default function JobsDetail({route}) {
  const {id} = route.params;
  const url = `${Config.API_URL}/${id}`;

  const {data, error, loading} = useFetch(url);

  const dispatch = useDispatch();
  const favJobs = useSelector(state => state.favouriteJob);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  const handleSubmit = () => {
    Alert.alert(
      'Successful!',
      'Your application has been successfully received.',
    );
  };

  const handleFavourite = favouriteJob => {
    dispatch({type: 'ADD_FAVOURITE', payload: {favouriteJob}});
  };

  const favControl = data => {
    let durum = '';
    if (favJobs.length < 1) {
      durum = 'yükle';
    }
    for (let x = 0; x < favJobs.length; x++) {
      if (favJobs[x].id == data.id) {
        durum = 'yükleme';
        break;
      } else {
        durum = 'yükle';
      }
    }
    if (durum == 'yükle') {
      handleFavourite(data);
    } else {
      Alert.alert('Hata!', 'Daha önce eklediniz.');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.jobName}>{data.name}</Text>
        <View style={styles.locLevelContainer}>
          <Text style={styles.locLevelHeader}>Locations: </Text>
          <Text style={styles.locLevelText}>
            {data.locations && data.locations.length > 0
              ? data.locations[0].name
              : 'Unknown Location'}
          </Text>
        </View>
        <View style={styles.locLevelContainer}>
          <Text style={styles.locLevelHeader}>Job Level: </Text>
          <Text style={styles.locLevelText}>
            {data.levels && data.levels.length > 0
              ? data.levels[0].name
              : 'Unknown Level'}
          </Text>
        </View>
        <View style={styles.jobDetailContainer}>
          <Text style={styles.jobDetailHeader}>Job Detail</Text>
        </View>
      </View>
      <ScrollView style={styles.htmlContainer}>
        <RenderHtml
          contentWidth={Dimensions.get('window').width}
          source={{html: `${data.contents}`}}
        />
      </ScrollView>
      <View style={styles.butonContainer}>
        <Button
          title="Submit"
          onPress={null}
          iconName="exit-to-app"
          onPres={handleSubmit}
        />
        <Button
          title="Favorited Job"
          onPress={null}
          iconName="heart"
          onPres={() => favControl(data)}
        />
      </View>
    </View>
  );
}
