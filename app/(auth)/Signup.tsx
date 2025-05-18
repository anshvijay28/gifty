import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = () => {
    // Clear previous error
    setError('');

    if (!name) { setError('Name is required.'); return; } 
    if (!email) { setError('Email is required.'); return; }
    if (!password) { setError('Password is required.'); return; }
    if (!confirmPassword) { setError('Please confirm your password.'); return; }
    if (!isValidEmail(email)) { setError('Please enter a valid email.'); return; }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return; }

    // Simulate success
    router.push('/SignupSuccess');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Gifty 🎁</Text>
      <Text style={styles.header}>Create an Account</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TextInput
        label="Full Name"
        mode="outlined"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        label="Confirm Password"
        mode="outlined"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" style={styles.button} onPress={handleSignUp}>
        Sign Up
      </Button>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/Login')}>
          <Text style={styles.footerLink}> Log in</Text>
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
  header: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 16,
    color: '#333',
  },
  input: {
    marginBottom: 16,
  },
  errorText: {
    color: '#EA4335',
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 14,
  },
  button: {
    marginTop: 8,
    marginBottom: 24,
    paddingVertical: 6,
    backgroundColor: '#6c63ff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#444',
  },
  footerLink: {
    color: '#6c63ff',
    fontWeight: 'bold',
  },
});
