import { Tabs } from 'expo-router';
import { Home, Search, Bell, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2563eb', tabBarStyle: { backgroundColor: '#ffffff' }, headerStyle: { backgroundColor: '#ffffff' }, headerTintColor: '#000000' }}>
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }: { color: string }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="network"
        options={{
          title: 'Rede',
          tabBarIcon: ({ color }: { color: string }) => <Search color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificações',
          tabBarIcon: ({ color }: { color: string }) => <Bell color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }: { color: string }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
}