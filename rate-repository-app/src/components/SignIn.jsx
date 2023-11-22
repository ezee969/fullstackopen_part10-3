/* eslint-disable no-unused-vars */
import { View, Button, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import StyledTextInput from './StyledTextInput';
import Text from './Text';
import { loginValidationSchema } from '../validationSchemas/login';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    padding: 10,
  },
  error: {
    marginBottom: 20,
    color: 'red',
    fontSize: 12,
    marginTop: -8,
    marginLeft: 10,
  },
});

const initialValues = {
  email: '',
  password: '',
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <Text style={styles.error}>{meta.error}</Text>}
    </>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => (
        <View style={styles.form}>
          <FormikInputValue name={'email'} placeholder="Email" />
          <FormikInputValue
            name={'password'}
            placeholder="Password"
            secureTextEntry
          />
          <Button onPress={handleSubmit} title="Sign In" />
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
