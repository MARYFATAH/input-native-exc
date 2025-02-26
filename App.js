import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function App() {
  const [text, onChangeText] = useState("");
  const [isCheckedYoung, setCheckedYoung] = useState(false);
  const [isCheckedOld, setCheckedOld] = useState(false);
  const [gender, setGender] = useState("");
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>My first React Native App</Text>
          <View>
            <Text style={styles.label}>What is your name?</Text>
            <TextInput
              placeholder="Name"
              onChangeText={onChangeText}
              value={text}
              style={styles.input}
            />
            <View style={styles.row}>
              <Text style={styles.label}>What is your gender {text}?</Text>
              <Picker
                style={styles.picker}
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
              >
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
            <Text style={styles.result}>
              {text}, you are a {gender}.
            </Text>
            <Text style={styles.label}>What is your age {text}?</Text>
            <View style={styles.row}>
              <Checkbox
                value={isCheckedYoung}
                onValueChange={setCheckedYoung}
                color={isCheckedYoung ? "#4630EB" : undefined}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Young</Text>
            </View>
            <View style={styles.row}>
              <Checkbox
                value={isCheckedOld}
                onValueChange={setCheckedOld}
                color={isCheckedOld ? "#4630EB" : undefined}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Old</Text>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%",
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  picker: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 150,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#100",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  checkbox: {
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  result: {
    fontSize: 18,
    color: "#666",
    marginVertical: 10,
  },
});
