import { useState } from 'react';
import { View, Text, Pressable, Linking, Share, Platform, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Guia, Origem } from '../data/guias';
import { colors, fonts } from '../theme';

const ROTULO: Record<Origem, string> = { guia: 'Guia Secom 2025', lei: 'Texto oficial da lei', lei_sec: 'Fonte secundária; confira o texto oficial', projeto: 'Sugestão do projeto' };
const COR: Record<Origem, string> = { guia: colors.cobalt, lei: '#0B7A4B', lei_sec: colors.coral, projeto: colors.muted };

export default function GuiaPagina({ g, topo }: { g: Guia; topo?: React.ReactNode }) {
  const [id, setId] = useState(g.secoes[0].id);
  const [copiado, setCopiado] = useState(false);
  const sec = g.secoes.find((x) => x.id === id)!;
  const copiar = async (texto: string) => {
    try {
      if (Platform.OS === 'web' && (globalThis as any).navigator?.clipboard) { await (globalThis as any).navigator.clipboard.writeText(texto); setCopiado(true); setTimeout(() => setCopiado(false), 2500); }
      else await Share.share({ message: texto });
    } catch { /* usuário cancelou ou o navegador bloqueou */ }
  };
  return (
    <View style={s.wrap}>
      <Text style={s.tag}>{g.tag}</Text>
      <Text style={s.h1} accessibilityRole="header">{g.titulo}</Text>
      <Text style={s.lead}>{g.intro}</Text>
      <View style={s.aviso}><Text style={s.avisoT}>{g.aviso}</Text></View>
      {topo}
      <View accessibilityRole="tablist" style={{ gap: 8 }}>
        {g.secoes.map((x) => (
          <Pressable key={x.id} onPress={() => setId(x.id)} accessibilityRole="tab" accessibilityState={{ selected: x.id === id }} style={[s.tab, x.id === id && s.tabOn]}>
            <Text style={[s.tabT, x.id === id && { color: colors.white }]}>{x.titulo}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={s.h2} accessibilityRole="header">{sec.titulo}</Text>
      {sec.intro && <Text style={s.p}>{sec.intro}</Text>}
      {sec.itens.map((i) => (
        <View key={i.titulo} style={[s.item, { borderLeftColor: COR[i.origem] }]}>
          <Text style={s.h3}>{i.titulo}</Text>
          <Text style={s.p}>{i.texto}</Text>
          <Text style={[s.orig, { color: COR[i.origem] }]}>{ROTULO[i.origem]}{i.ref ? ` · ${i.ref}` : ''}</Text>
        </View>
      ))}
      {sec.modelo && (
        <View style={s.modelo}>
          <Text style={s.h3}>{sec.modelo.titulo}</Text>
          <Text selectable style={s.p}>{sec.modelo.texto}</Text>
          <Pressable onPress={() => copiar(sec.modelo!.texto)} accessibilityRole="button" style={s.btn}><Text style={s.btnT}>{copiado ? 'Copiado' : 'Copiar texto'}</Text></Pressable>
        </View>
      )}
      <Text style={s.h3}>Fontes</Text>
      {g.fontes.map((f) => <Pressable key={f.url} onPress={() => Linking.openURL(f.url)} accessibilityRole="link" style={s.link}><Text style={s.linkT}>{f.titulo}</Text></Pressable>)}
      <View style={s.row}>{g.verMais.map((v) => <Link key={v.slug} href={{ pathname: '/secao/[slug]', params: { slug: v.slug } }} style={s.go}>{v.rotulo}</Link>)}</View>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 24, paddingVertical: 48, maxWidth: 800, width: '100%', alignSelf: 'center', gap: 14, minHeight: 520 },
  tag: { fontFamily: fonts.bold, color: colors.cobalt, fontSize: 13, letterSpacing: 1.2, textTransform: 'uppercase' },
  h1: { fontFamily: fonts.display, fontSize: 34, lineHeight: 40, color: colors.ink }, h2: { fontFamily: fonts.display, fontSize: 27, lineHeight: 33, color: colors.ink, marginTop: 8 }, h3: { fontFamily: fonts.display, fontSize: 19, lineHeight: 25, color: colors.ink },
  lead: { fontFamily: fonts.body, fontSize: 18, lineHeight: 28, color: colors.ink }, p: { fontFamily: fonts.body, fontSize: 16, lineHeight: 26, color: colors.muted },
  aviso: { backgroundColor: colors.sand, padding: 16, borderLeftWidth: 4, borderLeftColor: colors.coral }, avisoT: { fontFamily: fonts.body, fontSize: 14, lineHeight: 22, color: colors.ink },
  tab: { borderWidth: 2, borderColor: colors.line, padding: 12, minHeight: 48, justifyContent: 'center', backgroundColor: colors.white }, tabOn: { backgroundColor: colors.cobalt, borderColor: colors.cobalt }, tabT: { fontFamily: fonts.bold, fontSize: 15, color: colors.ink },
  item: { borderLeftWidth: 4, paddingLeft: 14, gap: 4, paddingVertical: 4 }, orig: { fontFamily: fonts.bold, fontSize: 12, letterSpacing: 0.4 },
  modelo: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.line, padding: 16, gap: 10 },
  btn: { backgroundColor: colors.cobalt, paddingVertical: 12, paddingHorizontal: 20, minHeight: 48, justifyContent: 'center', alignSelf: 'flex-start' }, btnT: { fontFamily: fonts.bold, color: colors.white, fontSize: 15 },
  link: { minHeight: 44, justifyContent: 'center' }, linkT: { fontFamily: fonts.bold, fontSize: 14, color: colors.cobalt, textDecorationLine: 'underline' },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 20 }, go: { fontFamily: fonts.bold, fontSize: 15, color: colors.cobalt, paddingVertical: 10 },
});
