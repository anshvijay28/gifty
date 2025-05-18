import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState<'email' | 'code'>('email');

  const handleSendResetLink = () => {
    // TODO: Email validation & API call to send code
    setStep('code');
  };

  const handleResendCode = () => {
    // TODO: Re-trigger email to send code
    setCode('');
    setStep('email');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Gifty 🎁</Text>
      <Text style={styles.header}>Forgot Password?</Text>
      <Text style={styles.subtext}>
        {step === 'email'
          ? 'Enter your email and we’ll send you a link to reset your password.'
          : `We’ve sent a 6-digit code to ${email}. Enter it below.`}
      </Text>

      {step === 'email' ? (
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      ) : (
        <TextInput
          label="6-Digit Code"
          mode="outlined"
          value={code}
          onChangeText={setCode}
          style={styles.input}
          keyboardType="numeric"
          maxLength={6}
        />
      )}

      {step === 'email' ? (
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleSendResetLink}
          disabled={!email}
        >
          Send Reset Code
        </Button>
      ) : (
        <>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => {
              // TODO: verify code and proceed
            }}
            disabled={code.length !== 6}
          >
            Verify Code
          </Button>

          <Button
            mode="outlined"
            onPress={handleResendCode}
            style={styles.resendButton}
          >
            Resend Code
          </Button>
        </>
      )}

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backToLogin}>← Back to Login</Text>
      </TouchableOpacity>
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
    marginBottom: 8,
    color: '#333',
  },
  subtext: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
    fontSize: 14,
    paddingHorizontal: 8,
  },
  input: {
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#6c63ff',
    paddingVertical: 6,
    marginBottom: 16,
  },
  resendButton: {
    marginBottom: 24,
    borderColor: '#6c63ff',
  },
  backToLogin: {
    textAlign: 'center',
    color: '#6c63ff',
    fontWeight: 'bold',
  },
});