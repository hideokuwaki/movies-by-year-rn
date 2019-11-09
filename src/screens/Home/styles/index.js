import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  titleText: {
    fontSize: 20,
    color: colors.gray,
  },
  inputStyle: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.gray,
  },
  list: {
    flexGrow: 1,
    width: '100%',
  },
  itemTitle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 3,
  },
  itemTitleText: {
    fontSize: 20,
    color: colors.gray,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 10,
    margin: 10,
    backgroundColor: colors.gray,
    borderRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
  movieItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 3,
  },
  loading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});