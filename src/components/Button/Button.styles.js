import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ef5350',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.45,
  },
  container2: {
    backgroundColor: '#ef5350',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.9,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    paddingStart: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
