import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Divider, TextInput } from 'react-native-paper';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = () => {
    setError('');

    if (!email ) { setError('Please fill in both fields.'); return; }
    if (!password) { setError('Please enter your password.'); return; }
    if (!isValidEmail(email)) { setError('Please enter a valid email address.'); return; }

    // ADD CODE TO CHECK USER INFO

    // Simulate success
    router.replace('/(main)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Gifty 🎁</Text>
      <Text style={styles.welcome}>Welcome Back</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity>
        <Text onPress={() => router.push('/ForgotPassword')} style={styles.forgot}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <Button mode="contained" style={styles.button} onPress={handleLogin}>
        Login
      </Button>

      <View style={styles.dividerContainer}>
        <Divider style={styles.divider} />
        <Text style={styles.orText}>or continue with</Text>
        <Divider style={styles.divider} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={24} color="#EA4335" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="apple" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don&apos;t have an account?</Text>
        <TouchableOpacity>
          <Text onPress={() => router.back()} style={styles.signupLink}>
            {' '}
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 28,
    fontWeight: 'bold',
  },
  welcome: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 16,
    color: '#333',
  },
  errorText: {
    color: '#EA4335',
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 14,
  },
  input: {
    marginBottom: 16,
  },
  forgot: {
    alignSelf: 'flex-end',
    color: '#6c63ff',
    marginBottom: 24,
  },
  button: {
    marginBottom: 24,
    paddingVertical: 6,
    backgroundColor: '#6c63ff',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 12,
    color: '#999',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#444',
  },
  signupLink: {
    color: '#6c63ff',
    fontWeight: 'bold',
  },
});
