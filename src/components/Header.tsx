import { useState } from 'react';
import { View, Text, Pressable, Image, useWindowDimensions, Modal, ScrollView, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts, BREAK } from '../theme';
import { SECOES } from '../data/nav';

export function Logo() {
  return (
    <Link href="/" accessibilityRole="link" accessibilityLabel="Além da Tela, página inicial" style={s.logo}>
      <View style={s.logoRow}>
        <Image source={require('../../assets/logo.png')} style={{ width: 40, height: 40 }} accessibilityIgnoresInvertColors />
        <Text style={s.brand}>Além da Tela</Text>
      </View>
    </Link>
  );
}

export default function Header() {
  const { width } = useWindowDimensions();
  const wide = width >= BREAK;
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <SafeAreaView edges={['top']} style={s.bar}>
      <View style={s.inner}>
        <Logo />
        {wide ? (
          <View style={s.nav} accessibilityRole="navigation">
            {SECOES.map((x) => (
              <Link key={x.slug} href={{ pathname: '/secao/[slug]', params: { slug: x.slug } }} style={s.navLink}>{x.curto}</Link>
            ))}
          </View>
        ) : (
          <Pressable onPress={() => setOpen(true)} accessibilityRole="button" accessibilityLabel="Abrir menu" style={s.menuBtn}>
            <Ionicons name="menu" size={28} color={colors.ink} />
          </Pressable>
        )}
      </View>
      <Modal visible={open} animationType="slide" onRequestClose={() => setOpen(false)}>
        <SafeAreaView style={s.sheet}>
          <View style={s.sheetTop}>
            <Text style={s.brand}>Menu</Text>
            <Pressable onPress={() => setOpen(false)} accessibilityRole="button" accessibilityLabel="Fechar menu" style={s.menuBtn}>
              <Ionicons name="close" size={28} color={colors.white} />
            </Pressable>
          </View>
          <ScrollView>
            {SECOES.map((x, i) => (
              <Pressable key={x.slug} accessibilityRole="link" style={s.sheetItem}
                onPress={() => { setOpen(false); router.push({ pathname: '/secao/[slug]', params: { slug: x.slug } }); }}>
                <Text style={s.sheetNum}>{String(i + 1).padStart(2, '0')}</Text>
                <Text style={s.sheetText}>{x.titulo}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  bar: { backgroundColor: colors.paper, borderBottomWidth: 1, borderBottomColor: colors.line },
  inner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 8, maxWidth: 1200, width: '100%', alignSelf: 'center' },
  logo: { textDecorationLine: 'none' as any }, logoRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brand: { fontFamily: fonts.display, fontSize: 22, color: colors.ink },
  nav: { flexDirection: 'row', gap: 20 },
  navLink: { fontFamily: fonts.bold, fontSize: 14, color: colors.ink, paddingVertical: 12 },
  menuBtn: { minWidth: 48, minHeight: 48, alignItems: 'center', justifyContent: 'center' },
  sheet: { flex: 1, backgroundColor: colors.ink },
  sheetTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 },
  sheetItem: { flexDirection: 'row', gap: 16, paddingHorizontal: 20, paddingVertical: 18, borderTopWidth: 1, borderTopColor: '#1B2E57', minHeight: 56 },
  sheetNum: { fontFamily: fonts.bold, color: colors.cyan, fontSize: 14, paddingTop: 6 },
  sheetText: { fontFamily: fonts.display, color: colors.white, fontSize: 22, flex: 1 },
});
