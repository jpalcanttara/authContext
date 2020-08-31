import React from "react";
import { View, ActivityIndicator } from "react-native";

import { useAuth } from "../contexts/auth";

import Authroutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <Authroutes />;
};

export default Routes;
