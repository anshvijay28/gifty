import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function SignupSuccessScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Gifty 🎁</Text>
      <Text style={styles.header}>You&apos;re all set!</Text>
      <Text style={styles.subtext}>
        Your account has been created. Welcome to Gifty, where thoughtful gifts start with shared lists and good vibes.
      </Text>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => router.replace("/(main)")}
      >
        Go to Dashboard
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  header: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  subtext: {
    textAlign: 'center',
    fontSize: 15,
    color: '#666',
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#6c63ff',
    marginBottom: 16,
    paddingVertical: 6,
  },
  link: {
    textAlign: 'center',
    color: '#6c63ff',
    fontWeight: 'bold',
  },
});