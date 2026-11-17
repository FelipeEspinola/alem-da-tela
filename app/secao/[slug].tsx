import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { SECOES } from '../../src/data/nav';
import { colors, fonts } from '../../src/theme';

export default function Secao() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const sec = SECOES.find((x) => x.slug === slug);
  if (!sec) return <View style={s.wrap}><Text style={s.h1}>Página não encontrada</Text><Link href="/" style={s.link}>Voltar ao início</Link></View>;
  return (
    <View style={s.wrap}>
      <Text style={s.tag}>Em construção</Text>
      <Text style={s.h1} accessibilityRole="header">{sec.titulo}</Text>
      <Text style={s.p}>Esta seção ainda não foi implementada. Conteúdo previsto no mapa de navegação:</Text>
      {sec.itens.map((i) => <Text key={i} style={s.item}>— {i}</Text>)}
      <Link href="/" style={s.link}>Voltar ao início</Link>
    </View>
  );
}
const s = StyleSheet.create({
  wrap: { padding: 24, paddingVertical: 56, maxWidth: 800, width: '100%', alignSelf: 'center', gap: 14, minHeight: 420 },
  tag: { fontFamily: fonts.bold, color: colors.coral, fontSize: 13, letterSpacing: 1.2, textTransform: 'uppercase' },
  h1: { fontFamily: fonts.display, fontSize: 38, lineHeight: 44, color: colors.ink },
  p: { fontFamily: fonts.body, fontSize: 17, color: colors.muted }, item: { fontFamily: fonts.body, fontSize: 16, color: colors.ink, lineHeight: 24 },
  link: { fontFamily: fonts.bold, color: colors.cobalt, fontSize: 16, paddingVertical: 12 },
});
