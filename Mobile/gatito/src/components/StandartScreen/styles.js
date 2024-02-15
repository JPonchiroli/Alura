import { StyleSheet } from "react-native-web";
import { colors } from "../../styles";

export default StyleSheet.create({
    fixScreen: {
        flex: 1,
        backgroundColor: colors.purple
    },
    fixScreenBelow: {
        flex: 0,
        backgroundColor: colors.orange
    }
})