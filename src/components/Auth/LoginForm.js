import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const formik = useFormik({
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    initialValues: initialValues(),
    onSubmit: (formValue) => {
      console.log("enviando formulario...", formValue);
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Nombre de usuario"
        style={styles.input}
        value={formik.values.userName}
        onChangeText={(text) => {
          console.log("xxxxx->", text);
          formik.setFieldValue("userName", text);
        }}
      ></TextInput>
      <TextInput
        secureTextEntry={true}
        autoCapitalize="none"
        placeholder="Contraseña"
        style={styles.input}
        value={formik.values.password}
        onChangeText={(text) => {
          formik.setFieldValue("password", text);
        }}
      ></TextInput>
      <Button title="Entrar" onPress={formik.handleSubmit} />
      <Text style={styles.error}>{formik.errors.userName}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  );
}

function initialValues() {
  return {
    userName: "",
    password: "",
  };
}
function validationSchema() {
  return {
    userName: Yup.string().required("El usuario no se ha rellenado"),
    password: Yup.string().required("Pass vacio"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "red",
  },
});
