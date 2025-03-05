import React from 'react'
import { Stack } from "expo-router";
export default function RootLayout() {
    return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="RoleSelectionScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoginEmpScreen" options={{ headerShown: false }} />
        <Stack.Screen name="AdminLoginScreen" options={{ headerShown: false }} />
        <Stack.Screen name="RegisterEmpScreen" options={{ headerShown: false }} />
</Stack>
    )
}