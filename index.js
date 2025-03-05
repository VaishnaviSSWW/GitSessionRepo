import { ExpoRoot } from 'expo-router';
import * as Linking from 'expo-linking';

// Import all the routes from the app directory
const ctx = require.context('./app');

export default function App() {
  return <ExpoRoot context={ctx} />;
}