import { View, Text } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import * as Linking from 'expo-linking';

const index = () => {
  return <Redirect href={"/RoleSelectionScreen"} />;
};

export default index;