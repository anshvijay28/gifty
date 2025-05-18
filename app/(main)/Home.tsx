import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>Gifty 🎁</Text>
        <Text style={styles.welcome}>Welcome to your Dashboard!</Text>
        <Text style={styles.subtext}>
          Start adding gifts, sharing lists, and making meaningful moments.
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Your Wishlist</Text>
            <Text style={styles.cardText}>You haven’t added any items yet.</Text>
            <Button
              mode="contained"
              onPress={() => {}}
              style={styles.button}
            >
              Add a Gift
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Your Partner’s List</Text>
            <Text style={styles.cardText}>Waiting for your partner to join...</Text>
            <Button
              mode="outlined"
              onPress={() => {}}
            >
              Invite Partner
            </Button>
          </Card.Content>
        </Card>

        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>⚙️ Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start', // Use 'center' if you want vertical centering
    paddingTop: 48, // Add top padding to bring it down
    paddingHorizontal: 24,
    paddingBottom: 48,
    backgroundColor: '#fff',
  },  
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
    marginBottom: 8,
  },
  subtext: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
    fontSize: 14,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardText: {
    color: '#555',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#6c63ff',
  },
  settingsButton: {
    marginTop: 24,
    alignItems: 'center',
  },
  settingsText: {
    color: '#6c63ff',
    fontWeight: 'bold',
  },
});