import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {flex: 1},
  container: {borderWidth: 1, borderColor: 'lightgrey', paddingStart: 5},
  jobName: {fontSize: 25, fontWeight: '900', color: '#37474f'},
  locLevelContainer: {flexDirection: 'row', paddingBottom: 5},
  locLevelHeader: {color: '#ef5350', fontWeight: '700'},
  locLevelText: {color: 'black', fontWeight: '700'},
  jobDetailHeader: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#37474f',
  },
  htmlContainer: {backgroundColor: 'white', padding: 4, flex: 1},
  butonContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
