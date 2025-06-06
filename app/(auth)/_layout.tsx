import { Stack } from 'expo-router';

export default function AuthLayout() {

  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="Login" options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" options={{ headerShown: false }}/>
        <Stack.Screen name="SignupSuccess" options={{ headerShown: false }}/>
    </Stack>
  );
}