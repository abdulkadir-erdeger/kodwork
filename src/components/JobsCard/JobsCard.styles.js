import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 6,
    padding: 5,
    borderWidth: 1,
    margin: 8,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
  },
  jobName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  jobType: {
    fontSize: 14,
    color: 'black',
  },
  jobLocationContainer: {
    flexWrap: 'wrap',
    marginTop: 2,
  },
  jobLocation: {
    color: 'white',
    backgroundColor: '#ef5350',
    borderRadius: 12,
    padding: 2,
    paddingStart: 7,
    paddingEnd: 7,
  },
  jobLevel: {
    textAlign: 'right',
    color: '#ef5350',
    fontWeight: '900',
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 5,
  },
  childContainer: {justifyContent: 'center', flexDirection: 'row'},
});
