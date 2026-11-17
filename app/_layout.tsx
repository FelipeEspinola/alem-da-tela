import { useEffect, useRef, type ComponentRef } from 'react';
import { Slot, usePathname } from 'expo-router';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Fraunces_700Bold, Fraunces_400Regular_Italic } from '@expo-google-fonts/fraunces';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ShareBar from '../src/components/ShareBar';
import WebStyles from '../src/components/WebStyles';
import { colors } from '../src/theme';

export default function Layout() {
  const pathname = usePathname();
  const rolagem = useRef<ComponentRef<typeof ScrollView>>(null);
  // Ao trocar de página, volta ao topo (o ScrollView do layout é compartilhado entre as rotas).
  useEffect(() => { rolagem.current?.scrollTo({ y: 0, animated: false }); }, [pathname]);
  const [ok] = useFonts({ Fraunces_700Bold, Fraunces_400Regular_Italic, Inter_400Regular, Inter_600SemiBold });
  if (!ok) return <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.paper }}><ActivityIndicator color={colors.cobalt} accessibilityLabel="Carregando" /></View>;
  return (
    <SafeAreaProvider>
      <WebStyles />
      <View style={{ flex: 1, backgroundColor: colors.paper }}>
        <Header />
        <ScrollView ref={rolagem}>
          <Slot />
          <ShareBar />
          <Footer />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
