import React from "react";
import { registerRootComponent } from "expo";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "./App";

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Root render error", error, errorInfo);
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            minHeight: "100%",
            padding: 24,
            backgroundColor: "#fff4f4"
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#7a1f1f", marginBottom: 16 }}>
            Error al renderizar la app
          </Text>
          <Text style={{ fontSize: 15, lineHeight: 22, color: "#3b2020" }}>
            {String(this.state.error?.message || this.state.error)}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

function Root() {
  return (
    <RootErrorBoundary>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </RootErrorBoundary>
  );
}

registerRootComponent(Root);
