import { useState } from 'react';
import { View, Text, Pressable, Linking, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { TEMAS, ROTULOS, Tipo } from '../../src/data/temas';
import { Infografico, BannerFoto } from '../../src/components/Imagem';
import { INFO, FOTOS, Banner } from '../../src/data/imagens';
import { colors, fonts } from '../../src/theme';

const IMG: Record<string, Banner> = { 'saude-fisica': FOTOS.sono, 'saude-mental': FOTOS.ansiedade, atencao: FOTOS.aprendizado, 'riscos-online': FOTOS.jogosRedes };
const COR: Record<Tipo, string> = { recomendacao: colors.cobalt, pesquisa: '#0B7A4B', associacao: colors.coral, incerto: colors.muted, relato: '#7A4B0B' };

export default function PorQueSePreocupar() {
  const [id, setId] = useState(TEMAS[0].id);
  const t = TEMAS.find((x) => x.id === id)!;
  return (
    <View style={s.wrap}>
      <Text style={s.tag}>Por que se preocupar?</Text>
      <Text style={s.h1} accessibilityRole="header">O que se sabe, o que é incerto e o que fazer</Text>
      <Text style={s.p}>Nem toda tela é um problema. Cada trecho abaixo traz uma etiqueta que diz se é recomendação, resultado de pesquisa, associação (que não prova causa), relato ou ponto ainda incerto.</Text>
      <View accessibilityRole="tablist" style={s.tabs}>
        {TEMAS.map((x) => (
          <Pressable key={x.id} onPress={() => setId(x.id)} accessibilityRole="tab" accessibilityState={{ selected: x.id === id }} style={[s.tab, x.id === id && s.tabOn]}>
            <Text style={[s.tabT, x.id === id && { color: colors.white }]}>{x.titulo}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={s.h2} accessibilityRole="header">{t.titulo}</Text>
      <BannerFoto {...IMG[t.id]} />
      <Text style={s.lead}>{t.intro}</Text>
      {t.blocos.map((b) => (
        <View key={b.texto} style={[s.bloco, { borderLeftColor: COR[b.tipo] }]}>
          <Text style={[s.etq, { color: COR[b.tipo] }]}>{ROTULOS[b.tipo]}</Text>
          <Text style={s.p}>{b.texto}</Text>
        </View>
      ))}
      {t.id === 'saude-mental' && <BannerFoto {...FOTOS.isolamento} />}
      {t.id === 'saude-mental' && <Infografico {...INFO.assoc} />}
      <Text style={s.h3}>O que fazer</Text>
      {t.fazer.map((f) => <Text key={f} style={s.p}>— {f}</Text>)}
      <Text style={s.h3}>Fontes</Text>
      {t.fontes.map((f) => (
        <Pressable key={f.url} onPress={() => Linking.openURL(f.url)} accessibilityRole="link" style={s.link}><Text style={s.linkT}>{f.titulo} ({f.data})</Text></Pressable>
      ))}
      {t.verMais && <View style={s.row}>{t.verMais.map((v) => (
        <Link key={v.slug} href={{ pathname: '/secao/[slug]', params: { slug: v.slug } }} style={s.go}>{v.rotulo}</Link>
      ))}</View>}
      <Text style={s.small}>Conteúdo educativo, sem caráter de diagnóstico. Dados de outros países não valem automaticamente para o Brasil.</Text>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 24, paddingVertical: 48, maxWidth: 800, width: '100%', alignSelf: 'center', gap: 14, minHeight: 520 },
  tag: { fontFamily: fonts.bold, color: colors.cobalt, fontSize: 13, letterSpacing: 1.2, textTransform: 'uppercase' },
  h1: { fontFamily: fonts.display, fontSize: 34, lineHeight: 40, color: colors.ink }, h2: { fontFamily: fonts.display, fontSize: 28, lineHeight: 34, color: colors.ink, marginTop: 8 }, h3: { fontFamily: fonts.display, fontSize: 21, color: colors.ink, marginTop: 8 },
  p: { fontFamily: fonts.body, fontSize: 16, lineHeight: 26, color: colors.muted }, lead: { fontFamily: fonts.body, fontSize: 18, lineHeight: 28, color: colors.ink },
  tabs: { gap: 8 }, tab: { borderWidth: 2, borderColor: colors.line, padding: 12, minHeight: 48, justifyContent: 'center', backgroundColor: colors.white }, tabOn: { backgroundColor: colors.cobalt, borderColor: colors.cobalt },
  tabT: { fontFamily: fonts.bold, fontSize: 15, color: colors.ink },
  bloco: { borderLeftWidth: 4, paddingLeft: 14, gap: 4, paddingVertical: 4 }, etq: { fontFamily: fonts.bold, fontSize: 12, letterSpacing: 0.8, textTransform: 'uppercase' },
  link: { minHeight: 44, justifyContent: 'center' }, linkT: { fontFamily: fonts.bold, fontSize: 14, color: colors.cobalt, textDecorationLine: 'underline' },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, marginTop: 8 }, go: { fontFamily: fonts.bold, fontSize: 15, color: colors.cobalt, paddingVertical: 10 },
  small: { fontFamily: fonts.body, fontSize: 13, color: colors.muted, marginTop: 16 },
});
