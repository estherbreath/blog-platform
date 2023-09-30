import "./App.css";
import Header from "./components/Header";
import { WagmiConfig, configureChains, createConfig, sepolia } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Cards from "./components/Cards";
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [
    infuraProvider({
      apiKey: "9785587b4b6c46bfbe0d6158716d69ea",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "cellboard",
  projectId: "76599d5f0640bf1956cd2f793ee4aca8",
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function App() {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <Header />
        <Cards/>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
