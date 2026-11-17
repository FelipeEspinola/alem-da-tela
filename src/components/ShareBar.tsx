import { useState } from 'react';
import { View, Text, Pressable, Linking, Share, Platform, StyleSheet } from 'react-native';
import { usePathname } from 'expo-router';
import { linkCompartilhar, Alvo } from '../services/interacaoService';
import { colors, fonts } from '../theme';

const TITULO = 'Além da Tela: informação para famílias e escolas sobre o uso de telas';
const ALVOS: [Alvo, string][] = [['whatsapp', 'WhatsApp'], ['email', 'E-mail'], ['facebook', 'Facebook'], ['x', 'X']];

export default function ShareBar() {
  usePathname(); // atualiza o link ao trocar de página
  const [copiado, setCopiado] = useState(false);
  const web = Platform.OS === 'web';
  const url = web ? String((globalThis as any).location?.href ?? '') : '';
  const abrir = (a: Alvo) => Linking.openURL(linkCompartilhar(a, TITULO, url));
  const copiar = async () => {
    try {
      if (web && (globalThis as any).navigator?.clipboard) { await (globalThis as any).navigator.clipboard.writeText(url); setCopiado(true); setTimeout(() => setCopiado(false), 2500); }
      else await Share.share({ message: `${TITULO} ${url}`.trim() });
    } catch { /* cancelado ou bloqueado */ }
  };
  // No celular (Expo Go) o site não tem endereço público: usa-se a folha de compartilhamento do sistema.
  return (
    <View style={s.wrap}>
      <Text style={s.t}>Compartilhe com quem pode se interessar</Text>
      <View style={s.row}>
        {web ? ALVOS.map(([a, r]) => (
          <Pressable key={a} onPress={() => abrir(a)} accessibilityRole="link" accessibilityLabel={`Compartilhar por ${r}`} style={s.btn}><Text style={s.bt}>{r}</Text></Pressable>
        )) : <Pressable onPress={copiar} accessibilityRole="button" style={s.btn}><Text style={s.bt}>Compartilhar</Text></Pressable>}
        {web && <Pressable onPress={copiar} accessibilityRole="button" style={s.btnOut}><Text style={s.btOut}>{copiado ? 'Link copiado' : 'Copiar link'}</Text></Pressable>}
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { backgroundColor: colors.sand, paddingVertical: 28, paddingHorizontal: 24, gap: 12, alignItems: 'center' },
  t: { fontFamily: fonts.display, fontSize: 20, color: colors.ink, textAlign: 'center' }, row: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'center' },
  btn: { backgroundColor: colors.ink, paddingHorizontal: 18, minHeight: 46, justifyContent: 'center' }, bt: { fontFamily: fonts.bold, color: colors.white, fontSize: 14 },
  btnOut: { borderWidth: 2, borderColor: colors.ink, paddingHorizontal: 18, minHeight: 46, justifyContent: 'center' }, btOut: { fontFamily: fonts.bold, color: colors.ink, fontSize: 14 },
});
